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
			light: "#00695c",
			main: "#00897b",
			dark: "#4db6ac",
			contrastText: "#fff",
		},
		secondary: {
			light: "#78909c",
			main: "#546e7a",
			dark: "#ba000d",
			contrastText: "#000",
		},
	},
});

export default theme;
