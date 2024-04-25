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
import Typography  from "@mui/material/Typography";

export default function Home() {
	return (
		<main>
			<CssBaseline />
			<Container maxWidth='lg' sx={{ marginTop: "6.5rem" }}>
				<div className='main'>
					<Typography variant='h1' sx={{fontWeight: 550}}>hi, i&apos;m pio 👋</Typography>
					<Typography variant='h4'>
						your friendly neighbourhood dev 👨‍💻
					</Typography>
					<Stack
						direction='row'
						textAlign='center'
						spacing={1}
						sx={{ marginTop: "40px" }}>
						<Button
							variant='outlined'
							size='large'
							color='primary'
							endIcon={<DownloadIcon />}
							href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
							target='_blank'>
							
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
							size='large'
							href='https://www.linkedin.com/in/francesco-pio-covino-583128217'
							target='_blank'>
							<LinkedInIcon fontSize='inherit' />
						</IconButton>

						<IconButton
							color='primary'
							aria-label='Telegram'
							size='large'
							href='https://t.me/piozzolo'
							target='_blank'>
							<TelegramIcon fontSize='inherit' />
						</IconButton>
						<IconButton
							color='success'
							aria-label='EMail'
							size='large'
							href='mailto:francescop.covino@gmail.com'
							target='_blank'>
							<AlternateEmailIcon fontSize='inherit' />
						</IconButton>
					</Stack>
				</div>
			</Container>
		</main>
	);
}
