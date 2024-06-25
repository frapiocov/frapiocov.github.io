"use client";
import { Roboto, Roboto_Mono } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const roboto = Roboto_Mono({
	weight: ["300", "400", "500", "700"],
	subsets: ["latin"],
	display: "swap",
});

const theme = createTheme({
	typography: {
		fontFamily: roboto.style.fontFamily,	
	},
	palette: {
		mode: "dark",
		primary: {
			main: "#388659",
			contrastText: "#fff",
		},
		background: {
            default: "#21262d",
            paper: "#21262d",
          },
		secondary: {
			main: "#e76f51",
			contrastText: "#fff",
		},
	},
});

export default theme;
