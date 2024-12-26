const postForm = document.querySelector("#newPostForm");
const likes = [];
postForm.addEventListener("submit", () => {
  const likeBtns = document.querySelectorAll(".like-btn");
  likeBtns[likeBtns.length - 1].addEventListener("click", (e) => {
    likes[likeBtns.length - 1] = Number.parseInt(
      e.currentTarget.querySelector(".like-count").textContent
    );
    likes[likeBtns.length - 1] += 1;
    e.currentTarget.querySelector(".like-count").textContent =
      likes[likeBtns.length - 1];
  });
});
