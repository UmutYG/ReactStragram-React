import classes from './index.module.css';

interface StatusProps {
    src: string;
}

const Status: React.FC<StatusProps> = (props) => {
    return (
        <div className={classes['status']}>
            <img
                src={props.src}
                className={classes['status-img']}
                alt={'Status image'}
            />
        </div>
    );
};

const StatusList = () => {
    return (
        <div className={classes['status-list']}>
            <Status src="/src/assets/img/memoli.jpeg" />
            <Status src="/src/assets/img/face-2.jpg" />
            <Status src="/src/assets/img/face-3.jpg" />
            <Status src="/src/assets/img/face-4.jpg" />
            <Status src="/src/assets/img/face.jpg" />
            <Status src="/src/assets/img/face-2.jpg" />
            <Status src="/src/assets/img/face-3.jpg" />
        </div>
    );
};

export default StatusList;
