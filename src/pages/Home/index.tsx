import './index.css';

import { useState } from 'react';

import LeftSidebar from './components/LeftSidebar/LeftSidebar';
import ModalOverlay from '../../components/ModalOverlay';
import NewPost from '../../components/NewPost';
import Post from './components/Post/Post';
import RightSidebar from './components/RightSidebar/RightSidebar';
import StatusList from './components/StatusList/StatusList';

const HomePage = () => {
    const [overlayOpen, setOverlayOpen] = useState(false);

    const overlayOpenHandler = () => {
        console.log('sa');

        setOverlayOpen(true);
    };

    const overlayCloseHandler = () => {
        setOverlayOpen(false);
    };

    return (
        <main>
            {overlayOpen && (
                <ModalOverlay>
                    <NewPost />
                </ModalOverlay>
            )}
            <section className="section-reels grid-reels">
                <LeftSidebar onOverlayOpen={overlayOpenHandler} />
                <div className="flow">
                    <StatusList />
                    <div className="posts">
                        <Post />
                        <Post />
                    </div>
                </div>
                <RightSidebar />
            </section>
        </main>
    );
};

export default HomePage;
