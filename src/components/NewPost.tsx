import { ChangeEvent, useState } from 'react';
import { useDispatch } from 'react-redux';

import classes from './NewPost.module.css';
import { postActions } from '../store/reducers/PostReducer';

const NewPost = () => {
    const [imageBlob, setImageBlob] = useState<string | null>(null);
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [title, setTitle] = useState<string | null>('');
    const [description, setDescription] = useState<string | null>('');

    const dispatch = useDispatch();

    const closePostModalHandler = () => {
        dispatch(postActions.closePostModal());
    };

    const titleChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    };

    const descriptionChangeHandler = (
        event: React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        setDescription(event.target.value);
    };

    const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            const file = event.target.files[0];
            setImageFile(file);
            setImageBlob(URL.createObjectURL(file));
        }
    };

    const submitFormHandler = async (event: React.FormEvent) => {
        event.preventDefault();

        const formData = new FormData();
        if (!imageFile || !title || !description) {
            console.log('Cancel request');
            return;
        }

        formData.append('image', imageFile);
        formData.append('title', title);
        formData.append('description', description);

        const response = await fetch('http://localhost:3000/posts', {
            method: 'POST',
            body: formData
        });

        const data = await response.json();

        dispatch(postActions.closePostModal());
        // console.log(data);
    };
    return (
        <div>
            <form
                onSubmit={submitFormHandler}
                className={classes['form-new-post']}
            >
                <div className={classes['input-box']}>
                    <label htmlFor="title">Başlık</label>
                    <input
                        onChange={titleChangeHandler}
                        type="text"
                        name="title"
                        id="title"
                    />
                </div>

                <div className={classes['input-box']}>
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
                        {imageBlob && (
                            <img
                                height={150}
                                src={imageBlob}
                                alt="uploaded"
                                className={classes['img-upload']}
                            />
                        )}
                    </div>
                </div>

                <div className={classes['input-box']}>
                    <label htmlFor="description">İçerik</label>

                    <textarea
                        onChange={descriptionChangeHandler}
                        rows={10}
                        name="description"
                        id="description"
                    ></textarea>
                </div>

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
