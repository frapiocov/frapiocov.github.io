import styles from "./page.module.css";
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
import ResponsiveAppBar from "@/components/navbar";
import { Typography } from "@mui/material";

export default function Home() {
	return (
		<main>
			<CssBaseline />
				<Container maxWidth='lg' sx={{ marginTop: '6.5rem' }}>
					<div className='main'>
						<Typography variant='h1'>hi, i&apos;m 
            <span className="span"> pio</span>
            👋</Typography>
						<Typography variant='h3'>
							your friendly neighbourhood dev 👨‍💻
						</Typography>
						<Stack direction='row' textAlign='center' spacing={1} sx={{ marginTop: '40px' }}>
							<Button
								variant='contained'
								size='large'
								color='primary'
								endIcon={<DownloadIcon />}>
								CV
							</Button>

							<IconButton
								aria-label='Github'
								size='large'
								href='https://github.com/frapiocov'
								target='_blank'>
								<GitHubIcon fontSize='inherit' />
							</IconButton>

							<IconButton
								color='primary'
								aria-label='Linkedin'
								size='large'>
								<LinkedInIcon fontSize='inherit' />
							</IconButton>

							<IconButton
								color='primary'
								aria-label='Telegram'
								size='large'>
								<TelegramIcon fontSize='inherit' />
							</IconButton>
							<IconButton
								color='success'
								aria-label='EMail'
								size='large'>
								<AlternateEmailIcon fontSize='inherit' />
							</IconButton>
						</Stack>
					</div>
				</Container>
		</main>
	);
}
