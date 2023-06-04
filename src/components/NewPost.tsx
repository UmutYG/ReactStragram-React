import { ChangeEvent, useState } from 'react';
import { useDispatch } from 'react-redux';

import classes from './NewPost.module.css';
import { postActions } from '../store/reducers/PostReducer';

const NewPost = () => {
    const [image, setImage] = useState<string | null>(null);
    const dispatch = useDispatch();

    const closePostModalHandler = () => {
        dispatch(postActions.closePostModal());
    };

    const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            const file = event.target.files[0];
            setImage(URL.createObjectURL(file));
        }
    };
    return (
        <div>
            <form action="" className={classes['form-new-post']}>
                <label htmlFor="image" className="text-m">
                    Fotoğraf Yükle
                </label>
                <input
                    type="file"
                    name="image"
                    id="image"
                    onChange={handleImageUpload}
                />
                <div className={classes['uploaded-img-box']}>
                    {image && (
                        <img
                            src={image}
                            alt="uploaded"
                            className={classes['img-upload']}
                        />
                    )}
                </div>
                <label htmlFor="description">Description</label>
                <input
                    type="text"
                    name="description"
                    id="description"
                    className={classes['post-description']}
                />
                <div className={classes['form-buttons']}>
                    <button className="btn btn--primary" type="submit">
                        Yayınla
                    </button>
                    <button
                        onClick={closePostModalHandler}
                        className="btn btn--outline"
                        type="button"
                    >
                        İptal
                    </button>
                </div>
            </form>
        </div>
    );
};

export default NewPost;
