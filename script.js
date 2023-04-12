const likeBtn = document.querySelector(".like");
const countNum = document.querySelector("i");
const bubble = document.querySelector("span");

const fetchData = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data)
  return data;
};

const incrementLikes = async () => {
  const data = await fetchData("increment-likes.php");
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
  const data = await fetchData("get-likes.php");
  console.log(data)
  countNum.textContent = await data.curtidas;
};

getLikes();
