import { ChangeEvent, useState } from 'react';
import { useDispatch } from 'react-redux';

import classes from './NewPost.module.css';
import { postActions } from '../store/reducers/PostReducer';

const NewPost = () => {
    const [image, setImage] = useState<string | null>(null);
    const [imageUrl, setImageUrl] = useState<string>('');
    const [description, setDescription] = useState<string>('');

    const dispatch = useDispatch();

    const closePostModalHandler = () => {
        dispatch(postActions.closePostModal());
    };

    const imageUrlChangeHandler = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setImageUrl(event.target.value);
    };

    const descriptionChangeHandler = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setDescription(event.target.value);
    };

    const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            const file = event.target.files[0];
            setImage(URL.createObjectURL(file));
        }
    };

    const submitFormHandler = async (event: React.FormEvent) => {
        event.preventDefault();

        const response = await fetch('http://localhost:3000/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                imgUrl: imageUrl
            })
        });
        const data = await response.json();

        dispatch(postActions.closePostModal());
        console.log(data);
    };
    return (
        <div>
            <form
                onSubmit={submitFormHandler}
                className={classes['form-new-post']}
            >
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
                <label htmlFor="imgUrl">Your Image Url</label>
                <input
                    onChange={imageUrlChangeHandler}
                    type="text"
                    name="image"
                    id="image"
                    className={classes['post-description']}
                />
                <label htmlFor="description">Description</label>
                <input
                    onChange={descriptionChangeHandler}
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
