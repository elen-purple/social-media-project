const postForm = document.querySelector("#newPostForm");
postForm.addEventListener("submit", () => {
  const submitBtns = document.querySelectorAll(".comments button");
  submitBtns[submitBtns.length - 1].parentElement.addEventListener(
    "submit",
    (e) => {
      e.preventDefault();
      submitBtns[
        submitBtns.length - 1
      ].parentElement.previousElementSibling.insertAdjacentHTML(
        "beforeend",
        `<li>${
          submitBtns[submitBtns.length - 1].previousElementSibling.value
        }</li>`
      );
      submitBtns[submitBtns.length - 1].previousElementSibling.value = "";

      submitBtns[
        submitBtns.length - 1
      ].parentElement.parentElement.previousElementSibling.lastElementChild.querySelector(
        "span"
      ).textContent =
        submitBtns[
          submitBtns.length - 1
        ].parentElement.previousElementSibling.children.length;

      //     .textContent = `${
      // submitBtns[submitBtns.length - 1].parentElement.previousElementSibling
      //   .children.length
      //   }`;
    }
  );
});
