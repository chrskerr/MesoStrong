import React from 'react';
import { SafeAreaView, withNavigation } from 'react-navigation';
import { Button, Divider, Icon, Layout, Text, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';


const NavBar = ({ navigation }) => {

	const nav = (path) => {
		navigation.navigate(path)
	}

	return (
        <>
            <TopNavigation title='MesoStrong' alignment="center" />
            <Layout style={ styles.buttonBox }>
				<Text style={ styles.navButton } onPress={() => nav('Train')}>Train</Text>
				<Text style={ styles.navButton } onPress={() => nav('Plan')}>Plan</Text>
				<Text style={ styles.navButton } onPress={() => nav('Analyse')}>Analyse</Text>
                <Icon style={ styles.settings } name="settings-2-outline" onPress={() => nav('Config')} />
			</ Layout>
            <Divider />

        </>
	);
};

export default withNavigation(NavBar);

const styles = StyleSheet.create({
	navButton: {
		flex: 2,
		textAlign: 'center',
		height: 35,
		backgroundColor: 'lightgray',
		marginLeft: 10,
		marginRight: 10,
		marginBottom: 10,
		lineHeight: 35
	},
    settings: {
        width: 24,
        height: 24,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 5,
        marginBottom: 10
    },
    buttonBox: {
        justifyContent: 'space-around', 
        flexDirection: 'row',
    }
});