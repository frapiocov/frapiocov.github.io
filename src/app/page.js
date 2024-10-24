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
import InstagramIcon from "@mui/icons-material/Instagram";
import SendIcon from '@mui/icons-material/Send';
import Snackbar from "@mui/material/Snackbar";
import Box from "@mui/material/Box";

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
			<Container maxWidth='lg' sx={{ padding: "0.8rem" }}>
				<Box
					display='flex'
					justifyContent='center'
					alignItems='center'
					minHeight='100vh'
					
					>
					<Stack direction='column' textAlign='left'>
						<Typography variant='h2' sx={{ fontWeight: 600 }}>
							hi,i&apos;m{" "}
							<span style={{ color: "#e76f51" }}>pio </span>👋
						</Typography>

						<Typography variant='h5'>
							your friendly neighbourhood{" "}
							<span style={{ color: "#ee9b00" }}>dev</span> 👨‍💻
							<br />
							actually master&apos;s degree{" "}
							<span style={{ color: "#ee9b00" }}>student</span> 📚
						</Typography>

						<Stack
							direction='row'
							textAlign='center'
							spacing={1}
							sx={{ marginTop: "1rem" }}>
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

							<IconButton
								color='secondary'
								aria-label='Instagram'
								size='large'
								href='https://www.instagram.com/piocovino_/'
								target='_blank'>
								<InstagramIcon fontSize='inherit' />
							</IconButton>
						</Stack>
						<Stack
							direction='row'
							textAlign='left'
							spacing={2}
							sx={{ marginTop: "1.5rem" }}>
							<Button
								variant='contained'
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

							<Button
								variant='contained'
								size='large'
								color='secondary'
								endIcon={<FolderIcon />}
								href='/projects'>
								Projects
							</Button>

						
						</Stack>
					</Stack>
				</Box>
			</Container>
		</main>
	);
}
