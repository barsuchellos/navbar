import React from 'react';
import styles from './PricingPage.module.scss'
import axios from 'axios';
import { useEffect, useState } from 'react';

const PricingPage = () => {
    const [posts, setPosts] = useState();

    useEffect(() => {
        async function getPosts() {
            try {
                const instance = await axios.get('https://jsonplaceholder.typicode.com/posts')
                setPosts(instance.data);
            } catch (error) {
                console.error('Ошибка при получении постов:', error);
            }
        }
        getPosts()

    }, [])


    const elements = posts && posts.map((element) => <li className={styles.post}key={element.id}>{element.id}. {element.title}</li>)


    return (
        <div className={styles.PricingPage}>
            {elements}
        </div>
    );
};

export default PricingPage;