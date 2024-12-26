const posts = document.querySelector("#postsList");
const likesSortBtn = document.querySelector("#sortLikes");
const commentsSortBtn = document.querySelector("#sortComments");

likesSortBtn.addEventListener("click", () => {
  const sortedPosts = [...posts.children].sort(
    (a, b) =>
      Number.parseInt(b.querySelector(".like-count").textContent) -
      Number.parseInt(a.querySelector(".like-count").textContent)
  );
  sortedPosts.forEach((post) => {
    posts.append(post);
  });
});

commentsSortBtn.addEventListener("click", () => {
  const sortedPosts = [...posts.children].sort(
    (a, b) =>
      Number.parseInt(b.querySelector(".comment-count").textContent) -
      Number.parseInt(a.querySelector(".comment-count").textContent)
  );
  sortedPosts.forEach((post) => {
    posts.append(post);
  });
});
