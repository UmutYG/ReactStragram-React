import './index.css';

import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import LeftSidebar from './components/LeftSidebar/LeftSidebar';
import ModalOverlay from '../../components/ModalOverlay';
import NewPost from '../../components/NewPost';
import Post from './components/Post/Post';
import RightSidebar from './components/RightSidebar/RightSidebar';
import StatusList from './components/StatusList/StatusList';
import { Post as PostModel } from '../../models/Post';
import { RootState } from '../../store/reducers';

const HomePage = () => {
    const [posts, setPosts] = useState<PostModel[]>([]);
    const isPostModalOpen = useSelector(
        (state: RootState) => state.post.isPostModalOpen
    );

    useEffect(() => {
        const getPosts = async () => {
            const response = await fetch('http://localhost:3000/posts');
            const data = await response.json();
            setPosts(data.posts);
        };

        getPosts();
    }, []);
    return (
        <main>
            {isPostModalOpen && (
                <ModalOverlay>
                    <NewPost />
                </ModalOverlay>
            )}
            <section className="section-reels grid-reels">
                <LeftSidebar />
                <div className="flow">
                    <StatusList />
                    <div className="posts">
                        {posts.map((p) => (
                            <Post key={Math.random().toString()} post={p} />
                        ))}
                    </div>
                </div>
                <RightSidebar />
            </section>
        </main>
    );
};

export default HomePage;
