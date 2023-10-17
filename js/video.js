const reviewForm = document.getElementById("reviewForm");
const nameInput = document.getElementById("name");
const commentInput = document.getElementById("comment");
const reviewsDiv = document.getElementById("reviews");

reviewForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = nameInput.value;
  const comment = commentInput.value;

  if (name.trim() === "" || comment.trim() === "") {
    alert("Заполните все поля.");
    return;
  }

  addReview(name, comment);
  nameInput.value = "";
  commentInput.value = "";
});

function getCurrentDate() {
  const currentDate = new Date();
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return currentDate.toLocaleDateString('ru-RU', options);
}

function addReview(name, comment) {
  const reviewDiv = document.createElement("div");
  reviewDiv.classList.add("review");

  const namePara = document.createElement("p");
  namePara.className = 'review-author';
  namePara.textContent = `${name}`;
  reviewDiv.appendChild(namePara);

  const commentPara = document.createElement("p");
  commentPara.className = 'review-comment';
  commentPara.textContent = `${comment}`;
  reviewDiv.appendChild(commentPara);

  const datePara = document.createElement("p");
  datePara.className = 'review-date';
  datePara.textContent = `${getCurrentDate()}`;
  reviewDiv.appendChild(datePara);

  reviewsDiv.appendChild(reviewDiv);

  if (reviewsDiv.firstChild) {
    reviewsDiv.insertBefore(reviewDiv, reviewsDiv.firstChild);
  } else {
    reviewsDiv.appendChild(reviewDiv);
  }

  reviewsDiv.insertBefore(reviewDiv, reviewsDiv.firstChild);
}