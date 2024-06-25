import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import CustomizedTimeline from "@/components/timeline";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function Journey() {
	return (
		<div>
			<CssBaseline />
			<Container
				maxWidth='lg'
				sx={{ padding: "0.8rem", marginTop: "1.4rem" }}>
				<IconButton color='primary' size='large' href='/'>
					<ArrowBackIcon fontSize='inherit' />
				</IconButton>
				<Typography variant='h3'>My Journey⏳</Typography>
				<CustomizedTimeline></CustomizedTimeline>
			</Container>
		</div>
	);
}
