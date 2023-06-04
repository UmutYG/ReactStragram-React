import classes from './index.module.css';

const RightSidebar = () => {
    return (
        <div className={classes['sidebar-right']}>
            <div
                className={`${classes['profile-switch']} flex flex-between align-center`}
            >
                <div className={`${classes['profile']} flex  align-center`}>
                    <img src="/src/assets/img/face.jpg" alt="user profile photo" />
                    <div>
                        <p className={classes['username']}>
                            <strong>mehmetsubasi</strong>
                        </p>
                        <p className={classes['name']}>Mehmet Subaşı</p>
                    </div>
                </div>

                <div className={classes['switch-button']}>
                    <a href="#" className={classes['switch']}>
                        Switch
                    </a>
                </div>
            </div>
            <div className="flex flex-between">
                <p className={classes['suggestions-text']}>
                    Suggestions For You
                </p>
                <p className={classes['see-all']}>
                    <strong>See All</strong>
                </p>
            </div>
        </div>
    );
};

export default RightSidebar;
