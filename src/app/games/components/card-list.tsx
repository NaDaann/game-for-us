
import { Box } from "@mui/material";
import { IGameApi } from "@/api/interfaces/game.interface";
import GameCard from "./card";
import "../css/card-list.css";

const CardList = ({ games }: { games: IGameApi[] }) => {
    return (
        <Box className="card-list-container">
            {
                (games && games.map((game: IGameApi) => (
                        <GameCard
                            key={game.id}
                            game={game}
                        />
                    )
                ))
            }
        </Box>
    )
}

export default CardList;