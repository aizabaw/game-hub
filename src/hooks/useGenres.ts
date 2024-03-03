import { useEffect, useState } from 'react';
import genresData from '../data/genres';

interface FetchGenresResult {
    count: number;
    results: Genre[]
}

export interface Genre {
    id: number;
    name: string;
    slug: string;
    image_background: string;
}

const useGenres = () => {

    const [genres, setGenres] = useState<Genre[]>([])
    const [error, setError] = useState("");

    useEffect(() => {

        // const controller = new AbortController();

        // apiClient.get<FetchGenresResult>('/genres?ordering=name')
        //     .then(res => setGenres(res.data.results))
        //     .catch(err => {
        //         if (err instanceof CanceledError) return;
        //         setError(err.message);
        //     });
        
        //     return () => controller.abort();

        setGenres(genresData.results)

    }, []);

    return { genres, error }

}

export default useGenres;