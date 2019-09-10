import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [startSearch, results, errorMessage] = useResults();

    const filterResultsByPrice = (price) => {
        return results.filter(result => {
            return result.price === price
        });
    };

    return <> 
        <SearchBar
            term={term}
            setTerm={setTerm}
            startSearch={() => startSearch(term)}
        />
        {errorMessage ? <Text color="red">{errorMessage}</Text> : null}
        <ScrollView>
            <ResultsList 
                title="Cost Effective"
                results={filterResultsByPrice("$")}
            />
            <ResultsList 
                title="Bit Pricier"
                results={filterResultsByPrice("$$")}
            />
            <ResultsList 
                title="Big Spender"
                results={filterResultsByPrice("$$$")}
            />
        </ScrollView>
    </>
};

const styles = StyleSheet.create({

});

export default SearchScreen;