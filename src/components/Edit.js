export const Edit = () => {
    return (
        <section id="edit-meme">
            <form id="edit-form">
                <h1>Edit Meme</h1>
                <div className="container">
                    <label htmlFor="title">Title</label>
                    <input 
                        id="title" 
                        type="text" 
                        placeholder="Enter Title" 
                        name="title" 
                    />
                    <label htmlFor="description">Description</label>
                    <textarea
                        id="description"
                        placeholder="Enter Description"
                        name="description"
                        defaultValue={
                            `Programming is often touted as a smart and lucrative career path. 
                            It 's a job that (sometimes) offers flexibility and great benefits. But 
                            it's far from sunshine and Nyan Cat rainbows. The hours are long. The 
                            mistakes are frustrating. And your eyesight is almost guaranteed to suffer.
                            These memes cover most of the frustration (and funny moments) of programming.
                            At least we can laugh through the pain.`
                        }
                    />
                    <label htmlFor="imageUrl">Image Url</label>
                    <input
                        id="imageUrl"
                        type="text"
                        placeholder="Enter Meme ImageUrl"
                        name="imageUrl"
                    />
                    <input
                        type="submit"
                        className="registerbtn button"
                        defaultValue="Edit Meme"
                    />
                </div>
            </form>
        </section>
    );
};