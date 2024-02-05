import Post from "./Post"

export const Posts = () => {

    const posts = [
        {
            "body": "Creating a Spell in Insomnia",
            "id": "3",
            "timestamp": "2024-01-03T00:35:27.568774",
            "user": {
                "email": "harrypotter@gmail.com",
                "first_name": null,
                "id": "1",
                "last_name": null,
                "username": "harryp232"
            }
        },
        {
            "body": "POST from insomnia 32",
            "id": "4",
            "timestamp": "2024-01-03T00:54:46.188100",
            "user": {
                "email": "harrypotter@gmail.com",
                "first_name": null,
                "id": "1",
                "last_name": null,
                "username": "harryp232"
            }
        },
        {
            "body": "POST from insomnia 332",
            "id": "5",
            "timestamp": "2024-01-03T00:54:49.010977",
            "user": {
                "email": "harrypotter@gmail.com",
                "first_name": null,
                "id": "1",
                "last_name": null,
                "username": "harryp232"
            }
        },
        {
            "body": "POST from insomnia 3332",
            "id": "6",
            "timestamp": "2024-01-03T00:54:50.843257",
            "user": {
                "email": "harrypotter@gmail.com",
                "first_name": null,
                "id": "1",
                "last_name": null,
                "username": "harryp232"
            }
        },
        {
            "body": "logged in post",
            "id": "7",
            "timestamp": "2024-01-04T01:56:13.923976",
            "user": {
                "email": "harrypotter@gmail.com",
                "first_name": null,
                "id": "1",
                "last_name": null,
                "username": "harryp232"
            }
        },
        {
            "body": "logged in post",
            "id": "8",
            "timestamp": "2024-01-04T02:00:12.567400",
            "user": {
                "email": "harrypotter.newemail@gmail.com",
                "first_name": null,
                "id": "3",
                "last_name": null,
                "username": "harryp"
            }
        }
    ]
    return (
        <>
            {posts.length > 0 ? posts.map((post) => {
                return <Post key={post.id} post={post} />
            }) : <p>No Spells to Display</p>}
        </>
    )
}