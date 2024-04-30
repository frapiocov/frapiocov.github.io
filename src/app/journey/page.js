import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import CustomizedTimeline from "@/components/timeline"
import CssBaseline from "@mui/material/CssBaseline";
import Button from "@mui/material/Button";
import TerminalIcon from "@mui/icons-material/Terminal";

export default function Journey() {
	return (
		<div>
			<CssBaseline />
			<Container
				maxWidth='lg'
				sx={{ padding: "0.8rem", marginTop: "1.4rem" }}>
				<Button variant='text' color="error" startIcon={<TerminalIcon />} href="/">
					frapiocov
				</Button>
				<Typography variant='h3'>My Journey⏳</Typography>
				<CustomizedTimeline></CustomizedTimeline>
			</Container>
		</div>
	);
}
