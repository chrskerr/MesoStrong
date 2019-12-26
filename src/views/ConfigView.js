import React from 'react';
import { SafeAreaView } from 'react-navigation';
import { Button, Divider, Layout, Text } from '@ui-kitten/components';
import NavBar from '../components/NavBar';

export const TrainScreen = () => {

	return (
		<SafeAreaView style={{ flex: 6 }}>
			<NavBar />

			<Text>Configurating</Text>
		</SafeAreaView>
	);
};