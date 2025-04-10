import { App, View, Page, Navbar, Toolbar, Link } from "framework7-react";
import routes from "./routes.js";

const f7params = {
	// Array with app routes
	routes,
	// App Name
	name: "MealPal",
	// ...
};

export default () => (
	<App {...f7params}>
		<View main url="/inventory" />
	</App>
);
