import classes from './NewPost.module.css'

const NewPost = () => {
    return (
        <div>
            <form action="" className={classes['form-new-post']}>
                <label htmlFor="image">Image</label>
                <input type="image" name="image" id="image" />

                <label htmlFor="description">Description</label>
                <input type="text" name="description" id="description" />
            </form>
        </div>
    );
};

export default NewPost;
