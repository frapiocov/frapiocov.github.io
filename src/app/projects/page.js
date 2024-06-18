"use client";
import * as React from "react";
import { useState, useEffect } from "react";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import CircularProgress from "@mui/material/CircularProgress";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkIcon from "@mui/icons-material/Link";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function Projects() {
	const [repos, setRepos] = useState([]);
	const [isLoading, setLoading] = useState(true);

	useEffect(() => {
		fetch("https://api.github.com/users/frapiocov/repos")
			.then((res) => res.json())
			.then((data) => {
				setRepos(data);
				setLoading(false);
			});
	}, []);

	if (isLoading)
		return (
			<Box
				sx={{
					display: "flex",
					padding: "2rem",
					alignContent: "center",
					textAlign: "center",
				}}>
				<CircularProgress size='200' />
			</Box>
		);
	if (!repos)
		return (
			<Alert severity='warning'>
				Error during fetching projects data.
			</Alert>
		);

	return (
		<div>
			<CssBaseline />
			<Container
				maxWidth='md'
				sx={{ padding: "0.8rem", marginTop: "1.4rem" }}>
				<Stack direction='row' textAlign='left' spacing={5}>
					<Button
						variant='text'
						color='primary'
						startIcon={<ArrowBackIcon />}
						href='/'>
						
					</Button>
					<Typography variant='h4'>Projects📂</Typography>
				</Stack>

				<Box
					display='flex'
					justifyContent='center'
					alignItems='center'
					minHeight='100vh'>
					<List
						sx={{
							width: "100%",
							bgcolor: "background.paper",
						}}>
						{repos.map((r) => (
							<>
								<ListItem
									key={r.html_url}
									secondaryAction={
										<IconButton
											href={
												r.homepage
													? r.homepage
													: r.html_url
											}
											target='_blank'
											color='info'
											edge='end'
											aria-label='homepage'>
											<LinkIcon />
										</IconButton>
									}
									alignItems='flex-start'>
									<ListItemAvatar>
										<IconButton
											href={r.html_url}
											target='_blank'
											edge='end'
											size='large'
											aria-label='repository'>
											<GitHubIcon />
										</IconButton>
									</ListItemAvatar>
									<ListItemText
										primary={
											<Typography variant='h6'>
												{r.name}
											</Typography>
										}
										secondary={
											<Typography
												sx={{ display: "inline" }}
												component='span'
												variant='body2'
												color='text.secondary'>
												{r.description}
											</Typography>
										}
									/>
								</ListItem>
								<Divider variant='inset' component='li' />
							</>
						))}
					</List>
				</Box>
			</Container>
		</div>
	);
}
