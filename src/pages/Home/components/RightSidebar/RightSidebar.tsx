import classes from './index.module.css';

const RightSidebar = () => {
    return (
        <div className={classes['sidebar-right']}>
            <div
                className={`${classes['profile-switch']} flex flex-between align-center`}
            >
                <div className={`${classes['profile']} flex  align-center`}>
                    <img
                        src="/src/assets/img/face.jpg"
                        alt="user profile photo"
                    />
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
            <div className="flex flex-between margin-bottom-sm">
                <p className={classes['suggestions-text']}>
                    Suggestions For You
                </p>
                <p className="text-xs">
                    <strong>See All</strong>
                </p>
            </div>

            <FollowerSuggestion />
            <FollowerSuggestion />
            <FollowerSuggestion />
            <FollowerSuggestion />
            <FollowerSuggestion />
        </div>
    );
};




const FollowerSuggestion = () => {
    return (
        <div className="flex flex-between align-center margin-bottom-sm">
            <div
                className={`${classes['suggested-profile']} flex align-center`}
            >
                <img
                    className={classes['suggested-profile-photo']}
                    src="/src/assets/img/face-2.jpg"
                    alt="Suggested people profile photo"
                />
                <div className={classes['suggested-details']}>
                    <p className={classes['suggested-username']}>
                        yyusufcanbircan
                    </p>
                    <p className={classes['suggested-info']}>Following you</p>
                </div>
            </div>
            <button className={classes['follow']}>Follow</button>
        </div>
    );
};


export default RightSidebar;
