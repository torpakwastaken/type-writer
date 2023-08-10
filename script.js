const textElement = document.getElementById("text");
const text =
  "Hello, this is a basic typewriter animation created by Y.Emre KOYUNLU. Feel free to use it!";
let charIndex = 0;

function type() {
  if (charIndex < text.length) {
    textElement.textContent += text.charAt(charIndex);
    charIndex++;
    setTimeout(type, 1);
  }
}

type();
