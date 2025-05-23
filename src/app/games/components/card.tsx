import { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { useDominantColor } from '@/hooks/img-dominant-color';
import { ICardProps } from '../interfaces/card.interface';
import Game from './game';
import { E_INFO } from '@/enums/info.enum';
import '../css/card.css';

const GameCard: React.FC<ICardProps> = ({ game }) => {
	const [isHovered, setIsHovered] = useState(false);
	const dominantColor = useDominantColor(game.image);

	return (
		<Box 
			className="card-container"
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			role="article"
			aria-label={`${E_INFO.GAME_CARD_ARIA_LABEL} ${game.name}`}
		>
			<Box
				className="absolute inset-0 transition-opacity duration-300 z-0 rounded"
				style={{
					backgroundColor: dominantColor,
					filter: 'blur(20px)',
					opacity: isHovered ? 1 : 0,
				}}
			/>

			<Box className="card-info z-10">
				<Game {...game} />

				<Typography
					variant="body2"
					className="card-date"
					align="inherit"
				>
					{game.available_requests} {E_INFO.AVAILABLE_REQUESTS}
				</Typography>
			</Box>
		</Box>
	);
};

export default GameCard;