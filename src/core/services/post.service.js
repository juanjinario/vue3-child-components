// https://jsonplaceholder.typicode.com/posts

const base = `https://jsonplaceholder.typicode.com`

export const getAllPosts = async () => {
    const url = `${base}/posts`;
    const request = await fetch(url);
    return await request.json();
}