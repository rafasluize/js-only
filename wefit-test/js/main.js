function transformMenu() {
  const menu = document.querySelector(".btn-group-vertical");
  menu.classList.add("d-flex");
  menu.classList.remove("btn-group-vertical");
  menu.style.gap = "5px";
}

function transformHeader() {
  const header = document.querySelector(".jumbotron");
  header.classList.add("text-white", "bg-secondary", "text-right");
  const buttonHeader = document.querySelector(".jumbotron .btn-primary");
  buttonHeader.classList.add("btn-success");
  buttonHeader.classList.remove("btn-primary");
}

function transformCards() {
  const cards = document.querySelectorAll(".row .col-lg-3");
  cards.forEach((element, index) => {
    if (index === 0) {
      element.style.order = 2;
      element.children[0].children[1].children[2].classList.add("btn-success");
      element.children[0].children[1].children[2].classList.remove(
        "btn-primary"
      );
    }

    if (index === 1) {
      element.style.order = 4;
    }

    if (index === 2) {
      element.style.order = 3;
    }

    if (index === 3) {
      element.style.order = 1;
    }
  });
}

function transformList() {
  const firstItem = document.querySelector(".list-group-item.active");
  const list = document.querySelector(".list-group");
  firstItem.classList.remove("active");

  const fourthItem = document.createElement("li");
  fourthItem.innerHTML = "Quarto item";
  fourthItem.classList.add("active", "list-group-item");

  const fifthItem = document.createElement("li");
  fifthItem.innerHTML = "Quinto item";
  fifthItem.classList.add("list-group-item");

  list.appendChild(fourthItem);
  list.appendChild(fifthItem);
}

window.onload = () => {
  transformMenu();
  transformHeader();
  transformCards();
  transformList();
};
