import { useEffect, useState } from "react";
import { Genre } from "./useGenres";
import apiClient from '../services/axios';
import { CanceledError } from "axios";

interface FetchGamesResponse {
    count: number;
    results: Game[];
}

export interface Game {
    id: number;
    name: string;
    slug: string;
    background_image: string;
    genres: Genre[];
}

const useGames = (selectedGenreId: number) => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("")

    console.log('useGames', selectedGenreId)

    useEffect(() => {

        const controller = new AbortController();

        let endpoint = '/games?page_size=100';
        if (selectedGenreId > -1) endpoint = `${endpoint}&genres=${selectedGenreId}`

        apiClient.get<FetchGamesResponse>(endpoint)
            .then(res => setGames(res.data.results))
            .catch(err => {
                if (err instanceof CanceledError) return;
                setError(err.message)});

        return () => controller.abort();
    }, [selectedGenreId])

    return {games, error}

}

export default useGames;