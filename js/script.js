const title = document.getElementById("title");
const input = document.getElementById("input");
const button = document.getElementById("button");
const answer = document.getElementById("answers");
const backBtn = document.createElement("button");
const content = document.getElementById("content");

let rot = 360;
button.addEventListener("click", function ask() {
  let allImg = [
    "images/magic8ball_1.png",
    "images/magic8ball_2.png",
    "images/magic8ball_3.png",
    "images/magic8ball_4.png",
    "images/magic8ball_5.png",
    "images/magic8ball_6.png",
    "images/magic8ball_7.png",
    "images/magic8ball_8.png",
    "images/magic8ball_9.png",
    "images/magic8ball_10.png",
    "images/magic8ball_11.png",
    "images/magic8ball_12.png",
    "images/magic8ball_13.png",
    "images/magic8ball_14.png",
    "images/magic8ball_15.png",
    "images/magic8ball_16.png",
    "images/magic8ball_17.png",
    "images/magic8ball_18.png",
    "images/magic8ball_19.png",
    "images/magic8ball_20.png",
  ];

  if (input.value.length !== 0) {
    // selecting random index from allImg
    let randomImg = Math.floor(Math.random() * allImg.length);
    console.log(randomImg);

    // Create image tag to insert random image
    let img = document.createElement("img");
    img.src = allImg[randomImg];
    // append selected random image into html
    answer.appendChild(img);

    content.style.display = "none";
    title.style.display = "none";

    // create return button to ask another
    backBtn.setAttribute("id", "backBtn");
    //with out "id" js works but we want to add css styles
    backBtn.innerText = "Ask more questions";
    answer.appendChild(backBtn);
    backBtn.style.textAlign = "center";

    // create p tag and append to html to display users question after user clicked ask button
    let asked = document.createElement("p");
    asked.setAttribute("id", "text");
    asked.innerText = input.value;
    answer.prepend(asked);

    backBtn.addEventListener("click", () => {
      content.style.display = "block";
      title.style.display = "block";
      input.value = "";
      answer.innerHTML = "";
    });
  } else {
    alert("please enter a question.");
  }
  // rotate the answer
  answer.style.transform = "rotate(" + rot + "deg)";
  answer.style.transition = "all 1s ease-in-out";
  rot += 360;
});
