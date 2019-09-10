import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const startSearch = async (searchTerm) => {
        try {
            const response = await yelp.get("/search", {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: "Stockholm"
                }
            });
            setResults(response.data.businesses);
        } catch (err) {
            setErrorMessage("Error making the search");
        }
    }

    useEffect(() => {
        startSearch("Burger");
    }, []);

    return [startSearch, results, errorMessage];
}