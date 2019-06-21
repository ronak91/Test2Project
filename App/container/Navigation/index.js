import {
  StackNavigator,
  createAppContainer,
  createStackNavigator
} from "react-navigation";

/* Screens List START */
import Home from "../Screens/Home/index";
import Screen01 from "../Screens/Screen01/index";
import Screen02 from "../Screens/Screen02/index";
import Screen03 from "../Screens/Screen03/index";
import Screen04 from "../Screens/Screen04/index";

/* Blog List START */
import Category from "../../container/Screens/Screen04/Blog/Category/index";
import Favorite from "../../container/Screens/Screen04/Blog/Favorite/index";
import Search from "../../container/Screens/Screen04/Blog/Search/index";
import CategoryList from "../../container/Screens/Screen04/Blog/CategoryList/index";
import CategoryDetail from "../../container/Screens/Screen04/Blog/CategoryDetail/index";
import BlogSideMenu from "../../container/Screens/Screen04/Blog/CategoryList/sidebar";
/* Blog List END */

// main stack
const AppNavigator = createStackNavigator(
  {
    HomeScreen: {
      screen: Home
    },
    Screen01: {
      screen: Screen01
    },
    Screen02: {
      screen: Screen02
    },
    Screen03: {
      screen: Screen03
    },
    Screen04: {
      screen: Screen04
    },
    Category: {
      screen: Category
    },
    Favorite: {
      screen: Favorite
    },
    Search: {
      screen: Search
    },
    CategoryList: {
      screen: CategoryList
    },
    CategoryDetail: {
      screen: CategoryDetail
    }
  },
  {
    initialRouteName: "HomeScreen",
    headerMode: "none",
    navigationOptions: {
      gesturesEnabled: false
    }
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
