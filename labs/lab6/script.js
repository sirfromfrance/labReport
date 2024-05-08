const listItems = document.querySelectorAll(".list li");

const btnDouble = document.querySelector(".doubleValues");
btnDouble.addEventListener("click", function (e) {
  e.preventDefault();
  listItems.forEach(function (item) {
    const curValue = Number(item.textContent);
    const doubleValue = curValue * 2;
    item.textContent = doubleValue;
  });
});
