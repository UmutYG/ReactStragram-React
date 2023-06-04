import './index.css';

import LeftSidebar from './components/LeftSidebar/LeftSidebar';
import Post from './components/Post/Post';
import RightSidebar from './components/RightSidebar/RightSidebar';
import StatusList from './components/StatusList/StatusList';

const HomePage = () => {
    return (
        <main>
            <section className="section-reels grid-reels">
                <LeftSidebar />
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
