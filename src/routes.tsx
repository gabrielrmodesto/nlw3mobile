import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const { Navigator, Screen } = createStackNavigator();

import OrphanageDetails from "./pages/OrphanageDetails";
import OrphanagesMap from "./pages/OrphanagesMap";

const Routes: React.FC = () => {
	return (
		<NavigationContainer>
			<Navigator screenOptions={{ headerShown: false }}>
				<Screen name="OrphanagesMap" component={OrphanagesMap} />
				<Screen name="OrphanageDetails" component={OrphanageDetails} />
			</Navigator>
		</NavigationContainer>
	);
};

export default Routes;
