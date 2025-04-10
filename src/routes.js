// import components
import AccountSettings from "./pages/account/AccountSettings";
import InventoryOverview from "./pages/inventory/InventoryOverview";
import Diary from "./pages/diary/Diary";
import Search from "./pages/search/Search";
import RecipeOverview from "./pages/recipes/RecipeOverview";

const routes = [
	{
		path: "/inventory/",
		component: InventoryOverview,
	},
	{
		path: "/diary/",
		component: Diary,
	},
	{
		path: "/search/",
		component: Search,
	},
	{
		path: "/recipes/",
		component: RecipeOverview,
	},
	{
		path: "/account/",
		component: AccountSettings,
	},
];

export default routes;
