import {useQuery} from "@tanstack/react-query";
import APIClient from "../services/api-client";
import ms from "ms";
import Platform from "../entites/Platform";
import platforms from "../data/platforms";


const apiClient = new APIClient<Platform>('/platforms/lists/parents')

const usePlatforms = () =>
    useQuery({
        queryKey: ['platforms'],
        queryFn: apiClient.getAll,
        staleTime: ms('24h'),
        initialData: platforms

    });


export default usePlatforms;