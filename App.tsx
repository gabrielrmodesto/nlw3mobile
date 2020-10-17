import React from "react";
import {
	StyleSheet,
	Text,
	View,
	Dimensions,
	TouchableOpacity,
} from "react-native";
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from "react-native-maps";
import mapMarker from "./src/images/map-marker.png";
import { Feather } from "@expo/vector-icons";

export default function App() {
	return (
		<View style={styles.container}>
			<MapView
				provider={PROVIDER_GOOGLE}
				style={styles.container}
				initialRegion={{
					latitude: -22.5811496,
					longitude: -44.9606704,
					latitudeDelta: 0.008,
					longitudeDelta: 0.008,
				}}
			>
				<Marker
					icon={mapMarker}
					calloutAnchor={{ x: 2.7, y: 0.8 }}
					coordinate={{
						latitude: -22.5811496,
						longitude: -44.9606704,
					}}
				>
					<Callout tooltip onPress={() => {}}>
						<View style={styles.calloutContainer}>
							<Text style={styles.calloutText}>
								Lar das crianças
							</Text>
						</View>
					</Callout>
				</Marker>
			</MapView>
			<View style={styles.footer}>
				<Text style={styles.footerText}>2 orfanatos encontrados</Text>
				<TouchableOpacity
					style={styles.createOrphanageButton}
					onPress={() => {}}
				>
					<Feather name="plus" color="#fff" size={20} />
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	map: {
		width: Dimensions.get("window").width,
		height: Dimensions.get("window").height,
	},
	calloutContainer: {
		width: 160,
		height: 46,
		paddingHorizontal: 16,
		backgroundColor: "rgba(255,255,255,0.8)",
		borderRadius: 16,
		justifyContent: "center",
	},
	calloutText: {
		color: "#0089a5",
		fontSize: 14,
	},
	footer:{
		position: 'absolute',
		left: 24,
		right: 24,
		bottom: 24,
		backgroundColor: '#fff',
		borderRadius: 20,
		height: 56,
		paddingLeft: 24,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		elevation: 3
	},
	footerText:{
		color: "#8fa7b3"
	},
	createOrphanageButton:{
		width: 56,
		height: 56,
		backgroundColor: '#15c3d6',
		borderRadius: 20,
		justifyContent: 'center',
		alignItems: 'center',
	}
});
