const winMark = document.getElementById("marks-icon-win").outerHTML;
const loseMark = document.getElementById("marks-icon-lose").outerHTML;
const drawMark = document.getElementById("marks-icon-draw").outerHTML;

export const getMarksFromLettersArray = (arr) => {
  const markup = arr.map((letter) =>
    letter === "W"
      ? winMark
      : letter === "D"
      ? drawMark
      : letter === "L"
      ? loseMark
      : ""
  );

  return markup.join("");
};
