import './App.css';
import TourCard from './components/tourCard';
import { Container, Grid } from '@mui/material';

function App() {
	return (
		<Container>
			<Grid container spacing={5}>
				<TourCard />
				<TourCard />
				<TourCard />
				<TourCard />
				<TourCard />
				<TourCard />
			</Grid>
		</Container>
	);
}

export default App;
