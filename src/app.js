document.addEventListener("DOMContentLoaded", function() {
  const pronoun = ["the", "our"];
  const adj = ["great", "big"];
  const noun = ["jogger", "racoon"];
  const extensions = [".com", ".net", ".us", ".io", ".es"];

  const generateButton = document.getElementById("generateButton");
  const resultDiv = document.getElementById("result");

  let currentIndex = 0;

  generateButton.addEventListener("click", function() {
    if (
      currentIndex <
      pronoun.length * adj.length * noun.length * extensions.length
    ) {
      let pronounIndex, adjIndex, nounIndex, extensionIndex;

      pronounIndex =
        Math.floor(
          currentIndex / (adj.length * noun.length * extensions.length)
        ) % pronoun.length;
      adjIndex =
        Math.floor(currentIndex / (noun.length * extensions.length)) %
        adj.length;
      nounIndex = Math.floor(currentIndex / extensions.length) % noun.length;
      extensionIndex = currentIndex % extensions.length;

      const domain =
        pronoun[pronounIndex] +
        adj[adjIndex] +
        noun[nounIndex] +
        extensions[extensionIndex];
      resultDiv.innerText = domain;

      currentIndex++;
    }
  });
});
