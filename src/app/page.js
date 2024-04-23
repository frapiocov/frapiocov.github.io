import styles from "./page.module.css";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";

import DownloadIcon from "@mui/icons-material/Download";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import TelegramIcon from '@mui/icons-material/Telegram';
import ResponsiveAppBar from "@/components/navbar";
import { Typography } from "@mui/material";

export default function Home() {
	return (
		<main>
			<CssBaseline />
      <ResponsiveAppBar></ResponsiveAppBar>
			<Container maxWidth='md'>
      <Typography variant='h1' textAlign="center">hi i'm pio 👋</Typography>
				<Stack direction='row' spacing={1}>
					<Button
						variant='outlined'
						size='medium'
            color="primary"
						endIcon={<DownloadIcon />}>
						my CV
					</Button>
					<IconButton aria-label='Github' size="large">
						<GitHubIcon fontSize="inherit"/>
					</IconButton>
          <IconButton color="primary" aria-label='Linkedin' size="large">
						<LinkedInIcon fontSize="inherit"/>
					</IconButton>
          <IconButton color="primary" aria-label='Telegram' size="large">
						<TelegramIcon fontSize="inherit" />
					</IconButton>
          <IconButton color="success" aria-label='EMail' size="large">
						<AlternateEmailIcon fontSize="inherit" />
					</IconButton>
				</Stack>
			</Container>
		</main>
	);
}
