import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ResultsShowScreen = ({ navigation }) => {
    const id = navigation.getParam("id");
    const address = navigation.getParam("address");
    const name = navigation.getParam("name");
    return <View>
        <Text>Restaurant: {name}</Text>
        <Text>Address: {address}</Text>
        <Text>Results Show Screen</Text>
    </View>
};

const styles = StyleSheet.create({

});

export default ResultsShowScreen;