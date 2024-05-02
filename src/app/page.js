"use client";

import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import DownloadIcon from "@mui/icons-material/Download";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import TelegramIcon from "@mui/icons-material/Telegram";
import Typography from "@mui/material/Typography";
import FolderIcon from "@mui/icons-material/Folder";
import TimelineIcon from "@mui/icons-material/Timeline";
import Divider from "@mui/material/Divider";
import Snackbar from "@mui/material/Snackbar";

export default function Home() {
	const [open, setOpen] = React.useState(false);

	const handleClick = () => {
		setOpen(true);
	};

	const handleClose = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}

		setOpen(false);
	};

	return (
		<main>
			<CssBaseline />
			<Container maxWidth='lg' sx={{ marginTop: "3.8rem" }}>
				<div className='main'>
					<Typography variant='h2' sx={{ fontWeight: 580 }}>
						hi,i&apos;m{" "}
						<span style={{ color: "#00897b" }}>pio </span>👋
					</Typography>

					<Typography variant='h5'>
						your friendly neighbourhood{" "}
						<span style={{ color: "#00897b" }}>dev</span> 👨‍💻
						<br />
						actually master&apos;s degree{" "}
						<span style={{ color: "#00897b" }}>student</span> 🎓
					</Typography>

					<Divider sx={{ marginTop: "1rem" }}></Divider>

					<Stack
						direction='row'
						textAlign='center'
						spacing={1}
						sx={{ marginTop: "1rem" }}>
						<Button
							variant='outlined'
							size='large'
							color='primary'
							endIcon={<DownloadIcon />}
							onClick={handleClick}>
							CV
						</Button>
						<Snackbar
							open={open}
							autoHideDuration={3000}
							onClose={handleClose}
							message='Ops 😢. My curriculum is not yet ready.'
						/>

						<IconButton
							aria-label='Github'
							size='large'
							href='https://github.com/frapiocov'
							target='_blank'>
							<GitHubIcon fontSize='inherit' />
						</IconButton>

						<IconButton
							color='info'
							aria-label='Linkedin'
							size='large'
							href='https://www.linkedin.com/in/francesco-pio-covino-583128217'
							target='_blank'>
							<LinkedInIcon fontSize='inherit' />
						</IconButton>

						<IconButton
							color='warning'
							aria-label='EMail'
							size='large'
							href='mailto:francescop.covino@gmail.com'
							target='_blank'>
							<AlternateEmailIcon fontSize='inherit' />
						</IconButton>

						<IconButton
							color='info'
							aria-label='Telegram'
							size='large'
							href='https://t.me/piozzolo'
							target='_blank'>
							<TelegramIcon fontSize='inherit' />
						</IconButton>
					</Stack>
					<Stack
						direction='row'
						textAlign='left'
						spacing={2}
						sx={{ marginTop: "1.5rem" }}>
						<Button
							variant='outlined'
							size='large'
							color='primary'
							endIcon={<FolderIcon />}
							href='/projects'>
							Projects
						</Button>
						<Button
							variant='outlined'
							disabled='true'
							size='large'
							color='primary'
							endIcon={<TimelineIcon />}
							href='/journey'>
							My Journey
						</Button>
					</Stack>
				</div>
			</Container>
		</main>
	);
}
