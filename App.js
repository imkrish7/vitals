/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { View, StyleSheet } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/dist/AntDesign';
import Home from './Components/Home';
import Measure from './Components/Measure';
import Footer from './Components/Footer';
import store from './store';
import { Provider } from 'react-redux';

const Store = store()

const Stack = createStackNavigator();

const App = () => {
	return (
		<Provider store={Store}>
		<View style={styles.container}>
			<View style={styles.main}>
				<NavigationContainer>
					<Stack.Navigator initialRouteName="Home">
						<Stack.Screen
							name="Home"
							component={Home}
							options={{
								headerShown: false,
							}}
						/>
						<Stack.Screen
							name="Measure"
							component={Measure}
							options={{
								headerTitle: 'Vitals',
								headerTitleAlign: 'center',
								headerTransparent: true,
								headerTitleStyle: {
									color: '#1B1464',
								},
								headerBackImage: tintColor => <Icon name="left" size={20} />,
							}}
						/>
					</Stack.Navigator>
				</NavigationContainer>
			</View>
			<View style={styles.footer}>
				<Footer />
			</View>
		</View>
		</Provider>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	main: {
		flex: 0.9,
		backgroundColor: '#fff',
	},
	footer: {
		flex: 0.1,
	},
});

export default App;
