import React, { useEffect, useState } from 'react';

const NewsSection = () => {
    const [news, setNews] = useState()
    console.log(news)
    useEffect(() => {
        fetch('news.json')
        .then(res => res.json())
        .then(data => setNews(data))
    },[])
    return (
        <div>
            
        </div>
    );
};

export default NewsSection;