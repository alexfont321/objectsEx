const getArticle = document.querySelector("#messages");

function createSection (content) {
    const createSec = document.createElement("section");
    createSec.className = "message";
    createSec.textContent = content;
    getArticle.appendChild(createSec);
}

createSection("This is part ONE");
createSection("part 2");
createSection("part 3 ya bozo");
createSection("part 4 mate");
createSection("part 5 of the shindig");


//////Part 2


const fragment = document.createDocumentFragment();

function createDivStuff (content) {
    const createDiv = document.createElement("div");
    createDiv.textContent = content;
    fragment.appendChild(createDiv);
}

createDivStuff("Again with the parts");
createDivStuff("this will be the second");
createDivStuff("and the third");
createDivStuff("4 brother");

getArticle.appendChild(fragment);



