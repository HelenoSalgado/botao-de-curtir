// xhr.open("GET", "http://botao-de-curtir.atwebpages.com/request.php");
const likeBtn = document.querySelector(".like");
const countNum = document.querySelector("i");
const bubble = document.querySelector("span");

const incrementLikes = async () => {
  console.log("incrementLikes");
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

const fetchData = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const getLikes = async () => {
  const data = await fetchData("/botao-de-curtir/get-likes.php");
  countNum.textContent = data.curtidas;
};

getLikes();
