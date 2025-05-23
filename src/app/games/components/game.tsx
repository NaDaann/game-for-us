import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { IGameApi } from "@/api/interfaces/game.interface";
import { useFormattedPrice } from "@/hooks/formatted-price";
import "../css/game.css";

const Game = (game: IGameApi) => {
    const formattedValue = useFormattedPrice(game.price);

    return (
        <Box
            className="game-container inline-block group" 
            key={game.id}
        >
            <Image
                src={game.image}
                alt={game.name}
                className="game-image"
                width={240}
                height={135}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={false}
            />

            <Box className="game-info">
                <Typography
                    variant="h4"
                    className="game-title"
                    align="inherit"
                >
                    {game.name}
                </Typography>
                <Typography
                    variant="body2"
                    className="game-description"
                    align="inherit"
                >
                    {formattedValue}
                </Typography>
            </Box>
        </Box>
    );
};

export default Game;