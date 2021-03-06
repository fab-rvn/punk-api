import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Container,
	Grid,
	List,
	ListItem,
	ListItemText,
	Typography,
} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

import useFavoriteBeer from '../../hooks/useFavoriteBeer';
import GoBackButton from '../GoBackButton';

import useStyles from './styles';

const BeerCard = ({ beer, history }) => {
	const { favorite, toggleFavoriteBeers } = useFavoriteBeer();
	const [showFood, setShowFood] = useState(false);
	const classes = useStyles();

	return (
		<Container maxWidth="md">
			<Card className={classes.card}>
				<Grid container direction="row" justify="space-between">
					<Grid item>
						<Button
							className={classes.btn}
							color="primary"
							component={Link}
							to={`/beers?brewed_after=${beer.first_brewed}`}
						>
							First Brewed {beer.first_brewed}
						</Button>
					</Grid>
					<Grid item>
						<Button
							className={classes.cardFavorite}
							onClick={() => toggleFavoriteBeers(beer.id)}
						>
							{favorite[beer.id] ? <FavoriteIcon /> : <FavoriteBorderIcon />}
						</Button>
					</Grid>
				</Grid>
				<CardActions className={classes.cardActions}>
					<CardMedia
						className={classes.cardMedia}
						component="img"
						image={beer.image_url}
						title={beer.name}
					/>
					<CardContent className={classes.cardContent}>
						<Typography variant="h5" component="h2">
							{beer.name}
						</Typography>
						<Typography variant="h4" color="textSecondary" component="p">
							{beer.tagline}
						</Typography>
						<Typography variant="body1" gutterBottom>
							{beer.description}
						</Typography>
						<Grid container direction="row" spacing={2}>
							<Grid item>
								<Typography variant="h6" color="textSecondary">
									abv: {beer.abv}
								</Typography>
							</Grid>
							{beer.ibu ? (
								<Grid item>
									<Typography variant="h6" color="textSecondary">
										ibu: {beer.ibu}
									</Typography>
								</Grid>
							) : null}
							{beer.ebc ? (
								<Grid item>
									<Typography variant="h6" color="textSecondary">
										ebc: {beer.ebc}
									</Typography>
								</Grid>
							) : null}
						</Grid>
						<Button
							variant="contained"
							color="primary"
							className={classes.cardBtn}
							onClick={() => setShowFood(prevVal => !prevVal)}
						>
							Food Pairing
						</Button>
						{showFood ? (
							<List dense>
								{beer.food_pairing.map((food, index) => (
									<ListItem key={index}>
										<ListItemText primary={food} />
									</ListItem>
								))}
							</List>
						) : null}
					</CardContent>
				</CardActions>
				<GoBackButton history={history} />
			</Card>
		</Container>
	);
};

export default BeerCard;
