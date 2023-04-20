import * as React from "react";

// importing material UI components
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {FavoriteBorder} from "@mui/icons-material";

export default function Header() {
return (
	<AppBar position="static" color="primary">
		<Toolbar>
		<Typography variant="h4"
			component="div" sx={{ flexGrow: 1 }}>
			Random Quote Generator
		</Typography>
		<Button color="inherit">Favorite<FavoriteBorder/></Button>
		</Toolbar>
	</AppBar>
);
}
