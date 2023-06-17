import './index.css';

import { useSelector } from 'react-redux';

import LeftSidebar from './components/LeftSidebar/LeftSidebar';
import ModalOverlay from '../../components/ModalOverlay';
import NewPost from '../../components/NewPost';
import Posts from './components/Posts';
import RightSidebar from './components/RightSidebar/RightSidebar';
import StatusList from './components/StatusList/StatusList';
import { RootState } from '../../store/reducers';

const HomePage = () => {
    const isPostModalOpen = useSelector(
        (state: RootState) => state.post.isPostModalOpen
    );

   
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
                    <Posts />
                </div>
                <RightSidebar />
            </section>
        </main>
    );
};

export default HomePage;
