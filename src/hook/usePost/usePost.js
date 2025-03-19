import { useEffect, useState } from 'react';
import axios from 'axios';

function usePost() {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);


    const post = async (url, apiData) => {
        try {
            const { data: responseData } = await axios.post(url, apiData);
            setLoading(false);
            setData(responseData);
           
        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
    };
    // useEffect(() => {
    //     post();
    // }, [url]);


    return { error, data, loading, post };
}
export default usePost;