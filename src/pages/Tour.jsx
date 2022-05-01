import { Container, Typography, Box, Paper, BottomNavigation } from '@mui/material';
import ImageCollage from '../components/imageCollage';
import CustomizedAccordions from '../components/accordian';
import BasicModal from '../components/modal';

const Tour = () => (
	<Container sx={{ width: 900 }}>
		<Typography variant="h3" component="h1" marginTop={3}>
			Explore the World in Vegas
		</Typography>
		<Box
			marginTop={3}
			sx={{
				display: 'flex'
			}}
		>
			<img
				src="https://s3.amazonaws.com/virginhotelslv.com/content/uploads/2021/04/Website-Hero-Images-Mohegan-Sun-B-1300x420-1.jpg"
				alt=""
				width={600}
				height={325}
			/>
			<ImageCollage />
		</Box>
		<Box>
			<Typography variant="h6" component="h4" marginTop={3}>
				About this Ticket
			</Typography>
			<Typography variant="paragraph " component="p" marginTop={3}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta dolores consectetur numquam inventore
				laborum nam ipsum praesentium doloribus libero cumque totam id accusantium similique, quis sunt iusto
				eaque perspiciatis quibusdam?
			</Typography>
		</Box>
		<Box marginBottom={10}>
			<Typography variant="h6" component="h4" marginTop={3} marginBottom={2}>
				Frequently Asked Questions
			</Typography>
			<CustomizedAccordions />
		</Box>
		<Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
			<BottomNavigation showLabels>
				<BasicModal />
			</BottomNavigation>
		</Paper>
	</Container>
);

export default Tour;
