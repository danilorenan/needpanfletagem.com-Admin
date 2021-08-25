import React, { useState, useEffect } from 'react'
import Instagram from '../Instagram/Instagram';
import { HomeContainer } from './styles';
import axios from 'axios';

const Home = () => {
    const [post, setPost] = useState({})

    useEffect(() => {
        const getPosts = async () => {
            try {
                const res = await axios.get('instagram');
                setPost(res.data)
            } catch(err) {
                console.log(err)
            }
        }
        getPosts();
    }, [])
    console.log(post)
    return (
        <HomeContainer>
            <Instagram post={post} />
        </HomeContainer>
    )
}

export default Home;
