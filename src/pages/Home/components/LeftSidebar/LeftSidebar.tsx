import classes from './index.module.css';

const LeftSidebar = () => {
    return (
        <div className={classes['sidebar-left']}>
            <ul className={classes['sidebar-left-links']}>
                <SidebarLink title='Ana Sayfa' svg={<svg></svg>} />
                <SidebarLink title='Ara' svg={<svg></svg>} />
                <SidebarLink title='Keşfet' svg={<svg></svg>} />
                <SidebarLink title='Reels' svg={<svg></svg>} />
            </ul>
        </div>
    );
};

interface SidebarLinkProps {
    title: string;
    svg: any;
}
const SidebarLink:React.FC<SidebarLinkProps> = (props) => {
    return (
        <li className={classes['sidebar-left-link']}>
            <a className={classes['sidebar-left-link-item']} href="#">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className={`${classes['post-icon']} ${classes[' post-icon--l']}`}
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                </svg>
                <span><strong>{props.title}</strong></span>
            </a>
        </li>
    );
};

export default LeftSidebar;
