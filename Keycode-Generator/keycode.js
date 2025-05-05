const displayKey = document.querySelector(".key h2");
const displayKeyCode = document.querySelector(".keyCode h2");
const keyCodeDiv = document.querySelector(".keyCode");
const overlay = document.querySelector(".overlay");

window.addEventListener("keydown", (e) => {
  overlay.classList.add("hide");
  displayKey.innerHTML = e.key;
  displayKeyCode.innerText = e.keyCode;
  if (e.keyCode === 32) {
    displayKey.innerHTML = `'space'`;
  }
});

keyCodeDiv.addEventListener("click", async (e) => {
  const textToCopy = keyCodeDiv.querySelector("h2").innerText;

  try {
    await navigator.clipboard.writeText(textToCopy);
    keyCodeDiv.querySelector("p").innerText = "Copied";
  } catch (err) {
    console.error("Failed to copy!", err);
    keyCodeDiv.querySelector("p").innerText = "Failed to Copy";
  }

  setTimeout(() => {
    keyCodeDiv.querySelector("p").innerText = "Click to Copy";
  }, 2000);
});


