import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getPostById } from '../../api/posts';
import { useState, useEffect } from 'react';

import styles from './SinglePostPage.module.scss'

const SinglePostPage = () => {
    const [post, setPost] = useState({})
    const params = useParams()


    const navigate = useNavigate();

    const Back = (event) => {
        navigate(event);
    }


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
            <button className={styles.BackButton} onClick={() => Back(-1)}>Back</button>
            <div>
                <h1>
                    {post.title}
                </h1>
                <p>
                    {post.body}
                </p>
            </div>
        </div>
    );
};

export default SinglePostPage;