import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkIcon from "@mui/icons-material/Link";
import Stack from "@mui/material/Stack";

export default function RepoCard() {
	return (
		<ListItem
			secondaryAction={
				<Stack direction='row' spacing={1}>
					
          <IconButton
						href={r.homepage}
						edge='end'
						aria-label='homepage'>
						<LinkIcon />
					</IconButton>
					<IconButton
						href={r.html_url}
            target="_blank"
						edge='end'
						aria-label='repository'>
						<GitHubIcon />
					</IconButton>
				</Stack>
			}
			alignItems='flex-start'>
			<ListItemAvatar>
				<Avatar alt='frapiocov' src='me2.jpg' />
			</ListItemAvatar>
			<ListItemText
				primary={r.name}
				secondary={
					<React.Fragment>
						<Typography
							sx={{ display: "inline" }}
							component='span'
							variant='body2'
							color='text.primary'>
							frapiocov
						</Typography>
						{r.description}
					</React.Fragment>
				}
			/>
		</ListItem>
	);
}
