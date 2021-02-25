import Heading from '../components/layout/Heading';
import Paragraph from '../components/layout/Paragraph';
import { useState, useEffect } from 'react';
import axios from 'axios';
import ApiLayout from '../components/layout/ApiLayout';

const Crypto = () => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchItems = async () => {
            const response = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`);

            setItems(response.data);
            setIsLoading(false);
        }
        fetchItems();
    }, [])
    return (
        <>
            <Heading title="Crypto" />
            <Paragraph content="Welcome to a page full of crypto information!" />
            <ApiLayout isLoading={isLoading} items={items} />
        </>
    );
};

export default Crypto
