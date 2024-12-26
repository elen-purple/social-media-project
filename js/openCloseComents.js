const postForm = document.querySelector("#newPostForm");
postForm.addEventListener("submit", () => {
  const commentsBtns = document.querySelectorAll(".comment-btn");
  commentsBtns[commentsBtns.length - 1].addEventListener("click", (e) => {
    e.currentTarget.parentElement.nextElementSibling.classList.toggle("open");
  });
});
