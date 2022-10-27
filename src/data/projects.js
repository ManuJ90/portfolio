// Project
import game from "../assets/projects/GameOfLife.webp";
import expense from "../assets/projects/ExpensesTracker.webp";
import omdb from "../assets/projects/OMDB.webp";
import beat from "../assets/projects/BeatMaker.webp";
// Tech Stack
import html from "../assets/projects/techs/html.svg";
import css from "../assets/projects/techs/css.svg";
import js from "../assets/projects/techs/js.svg";
import react from "../assets/projects/techs/react.svg";

export default [
	{
		imageURL: game,
		title: "Conway's Game of Life",
		link: "https://manuj90-game-of-life.vercel.app",
		tech: [
			{
				img: html,
				alt: "HTML-5",
			},
			{
				img: css,
				alt: "CSS",
			},
			{
				img: js,
				alt: "JavaScript",
			},
		],
	},
	{
		imageURL: expense,
		title: "Expenses Traker",
		link: "https://manuj90-expenses-tracker-three.vercel.app",
		tech: [
			{
				img: html,
				alt: "HTML-5",
			},
			{
				img: css,
				alt: "CSS",
			},
			{
				img: react,
				alt: "React",
			},
		],
	},
	{
		imageURL: omdb,
		title: "OMDB",
		link: "https://manuj90-omdb.vercel.app",
		tech: [
			{
				img: html,
				alt: "HTML-5",
			},
			{
				img: css,
				alt: "CSS",
			},
			{
				img: react,
				alt: "React",
			},
		],
	},
	{
		imageURL: beat,
		title: "BeatMaker",
		link: "https://beatmakers.netlify.app",
		tech: [
			{
				img: html,
				alt: "HTML-5",
			},
			{
				img: css,
				alt: "CSS",
			},
			{
				img: js,
				alt: "JavaScript",
			},
		],
	},
];
