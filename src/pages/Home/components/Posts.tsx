import { useLoaderData } from 'react-router-dom';

import Post from './Post/Post';
import { Post as PostModal } from '../../../models/Post';
import { ResponseModal } from '../../../models/types';

const Posts = () => {
    const posts = useLoaderData() as PostModal[];
    return (
        <div className="posts">
            {posts &&
                posts.map((p) => (
                    <Post key={Math.random().toString()} post={p} />
                ))}
        </div>
    );
};

export default Posts;

export const loader = async () => {
    const token = localStorage.getItem('@token');
    console.log(token);

    const response = await fetch('http://localhost:3000/posts', {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    });
    console.log(response);
    
    const responseJson = (await response.json()) as ResponseModal;
    console.log(responseJson);
    
    return responseJson.data;
};
