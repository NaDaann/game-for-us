"use client";

import useSWR from 'swr'
import { fetcher } from '@/libs/fetcher';
import { IGameApi } from '@/api/interfaces/game.interface';
import CardList from './components/card-list';
import { Box } from '@mui/material';

const GamePage: React.FC = () => {
    const { data, error } = useSWR<IGameApi[]>(["/games"], fetcher, {
        fallbackData: [], // ? ---- Future feature ----
        errorRetryCount: 3,
        refreshInterval: 2000
    });

    if (error) return <Box>Failed to load</Box>
    else if(!data) return <Box>Loading...</Box>

    return (
        <Box className="flex flex-col gap-4 p-5">
            <CardList games={data} />
        </Box>
    );
}

export default GamePage;