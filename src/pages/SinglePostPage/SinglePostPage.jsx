import React from 'react';
import { useParams } from 'react-router-dom';
import { getPostById } from '../../api/posts';
import { useState, useEffect } from 'react';

import styles from './SinglePostPage.module.scss'

const SinglePostPage = () => {
    const [post, setPost] = useState({})
    const params = useParams()

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const { data } = await getPostById(params.id);
                setPost(data)
            }
            catch (error) {
                console.log(error.data.message);
            }
        }

        fetchPost()
    }, [])



    console.log(post);
    return (
        <div className={styles.container}>
            <h1>
                {post.title}
            </h1>
            <p>
                {post.body}
            </p>
        </div>
    );
};

export default SinglePostPage;