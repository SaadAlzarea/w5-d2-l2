let postsContainer = document.getElementById("posts-container");
let inputUsername = document.getElementById("input-username");
let inputText = document.getElementById("input-text");
let postSubmitBtn = document.getElementById("post-submit-btn");
let inputImageUrl = document.getElementById("input-image-url");

postSubmitBtn.addEventListener("click", () => {
  fetch("https://68219a2d259dad2655afc2ba.mockapi.io/post", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: inputUsername.value,
      textarea: inputText.value,
      img: inputImageUrl.value,
    }),
  }).then(() => {
    location.reload();
  });
});

fetch("https://68219a2d259dad2655afc2ba.mockapi.io/post")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((element) => {
      let postDiv = document.createElement("div");
      let usernameDiv = document.createElement("h4");
      let textParagraph = document.createElement("p");
      let postImage = document.createElement("img");
      let deleteButton = document.createElement("button");
      

      deleteButton.addEventListener("click", () => {
        fetch(
          `https://68219a1b259dad2655afc217.mockapi.io/api/post/${element.id}`,
          {
            method: "DELETE",
          }
        ).then(() => {
          postDiv.remove();
        });
      });

      usernameDiv.innerText = element.username;
      textParagraph.innerText = element.textarea;
      postImage.src = element.img;

      deleteButton.innerText = "Delete";

      postDiv.appendChild(usernameDiv);
      postDiv.appendChild(textParagraph);
      postDiv.appendChild(postImage);
      postDiv.appendChild(deleteButton);
      postsContainer.appendChild(postDiv);
    });
  });
