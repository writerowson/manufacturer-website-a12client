import { useEffect, useState } from 'react';

const useTools = () => {
    const [tools, setTools] = useState([])
    useEffect(() => {
        fetch('https://secure-brook-18668.herokuapp.com/tools')
            .then(res => res.json())
            .then(data => setTools(data))

    }, [])
    return [tools, setTools]
};

export default useTools;