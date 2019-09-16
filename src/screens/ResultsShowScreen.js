import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({ navigation }) => {
    const [results, setResults] = useState(null);

    const id = navigation.getParam("id");
    const address = navigation.getParam("address");
    const name = navigation.getParam("name");

    const getResult = async () => {
        const response = await yelp(`/${id}`);
        setResults(response.data);

    }

    useEffect(() => {
        getResult();
    }, []);

    return <View>
        <Text>Restaurant: {name}</Text>
        <Text>Address: {address}</Text>
        <Text>Results Show Screen</Text>
        {(results) 
        ? <FlatList 
            data={results.photos}
            keyExtractor={item => item}
            renderItem={({ item }) => {
                console.log("Rendering: ", item);
                return <Image style={styles.image} source={{ uri: item }} />
            }}
        />
        : null
        }
        {results? console.log(results.photos) : null}
    </View>
};

const styles = StyleSheet.create({
    image: {
        height: 200,
        width: 300
    }
});

export default ResultsShowScreen;