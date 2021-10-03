import React from 'react';
import { StyleSheet, View, Text } from 'react-native';


function Home(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>Home</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 24
    },
    titleText: {
        fontFamily: 'sourceSansPro-SemiBoldItalic',
        fontSize: 18
    }
})

export default Home;