import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { globalStyles } from '../styles/global';

function Home(props) {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>Home</Text>
        </View>
    );
}

export default Home;