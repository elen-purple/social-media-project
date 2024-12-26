const postForm = document.querySelector("#newPostForm");
const postAthor = document.querySelector("#postInput");
const postText = document.querySelector("#postText");
const postList = document.querySelector("#postsList");

postForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (postList.firstElementChild.hasAttribute("id")) {
    postList.innerHTML = "";
  }
  postList.insertAdjacentHTML(
    "beforeend",
    `<article class="post">
        <h3 class="author">${postAthor.value}</h3>
        <p class="post-content">${postText.value}</p>
        <div class="post-actions">
          <button class="like-btn">
            👍 <span class="like-count">0</span>
          </button>
          <button class="comment-btn">
            💬 Коментарі (<span class="comment-count">0</span>)
          </button>
        </div>
        <div class="comments">
          <ul class="comment-list"></ul>
          <form class="comment-form">
            <input
              type="text"
              class="comment-input"
              placeholder="Напишіть коментар..."
            />
            <button type="submit">Додати</button>
          </form>
        </div>
    </article>`
  );
  postAthor.value = "";
  postText.value = "";
});
