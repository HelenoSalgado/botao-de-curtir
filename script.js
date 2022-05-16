const likeBtn = document.querySelector(".like");
const countNum = document.querySelector("i");
const bubble = document.querySelector("span");

const fetchData = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const incrementLikes = async () => {
  const data = await fetchData("/botao-de-curtir/increment-likes.php");
  countNum.textContent = data.curtidas;
};

likeBtn.addEventListener("click", async () => {
  bubble.classList.add("bubble-motion");
  await incrementLikes();
  setTimeout(() => {
    bubble.classList.remove("bubble-motion");
  }, 800);
});

const getLikes = async () => {
  const data = await fetchData("/botao-de-curtir/get-likes.php");
  countNum.textContent = data.curtidas;
};

getLikes();
