import React from 'react'
import { useDispatch } from 'react-redux';

import CreateIcon from '../../../../assets/svg/CreateIcon';
import ExploreIcon from '../../../../assets/svg/ExploreIcon';
import HomeIcon from '../../../../assets/svg/HomeIcon';
import ReelsIcon from '../../../../assets/svg/ReelsIcon';
import SearchIcon from '../../../../assets/svg/SearchIcon';
import classes from './index.module.css';
import { postActions } from '../../../../store/reducers/PostReducer';

const LeftSidebar: React.FC = () => {
    const dispatch = useDispatch();

    const openNewPostHandler = () => {
        dispatch(postActions.openPostModal());
    }

    return (
        <div className={classes['sidebar-left']}>
            <ul className={classes['sidebar-left-links']}>
                <SidebarLink title="Ana Sayfa" svg={<HomeIcon />} />
                <SidebarLink title="Ara" svg={<SearchIcon />} />
                <SidebarLink title="Keşfet" svg={<ExploreIcon />} />
                <SidebarLink title="Reels" svg={<ReelsIcon />} />
                <SidebarLink onClick={openNewPostHandler} title="Oluştur" svg={<CreateIcon />} />
            </ul>
        </div>
    );
};

interface SidebarLinkProps {
    onClick?: () => void;
    title: string;
    svg: React.ReactNode;
}
const SidebarLink: React.FC<SidebarLinkProps> = (props) => {
    return (
        <li onClick={props.onClick} className={classes['sidebar-left-link']}>
            <a className={classes['sidebar-left-link-item']} href="#">
                {props.svg}
                <span>
                    <strong>{props.title}</strong>
                </span>
            </a>
        </li>
    );
};

export default LeftSidebar;
