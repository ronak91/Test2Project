/**
 * @format
 */

import { AppRegistry } from "react-native";
import Index from "./App/container/Navigation/index";
import dialog from "./dialog";
import { name as appName } from "./app.json";

AppRegistry.registerComponent(appName, () => Index);
