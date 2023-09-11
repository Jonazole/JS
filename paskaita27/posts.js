export async function getPosts() {
try {
    const response = await fetch(postEndpoint);
    if (response.ok) {
        const posts = await response.json();
        return posts;
    } else
}

}