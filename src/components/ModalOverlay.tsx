import { PropsWithChildren } from 'react';

const ModalOverlay: React.FC<PropsWithChildren> = (props) => {
    return <div className="overlay">{props.children}</div>;
};

export default ModalOverlay;
