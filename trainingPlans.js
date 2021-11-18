`use strict`;
let inputBtn = document.querySelector("#inputBtn");
let parentDiv = document.querySelector('#parentDiv');


let viewPlans = () => {
    fetch('http://localhost:9000/Excercise/getAll')
        .then((response) => {
            if (response.status !== 200) {
                console.error(`status: ${response.status} `);
                return;
            }
            response.json()
                .then((data) => {

                    for (let obj of data) {
                        console.log(obj);
                        createCard(obj);
                    }

                }).catch((error) => {
                    console.error(`${error}`);
                });
        });
}


let createCard = (data) => {
    let newCard = document.createElement('div');
    let newCardBody = document.createElement('div');
    let newTitle = document.createElement('h5');
    let newText = document.createElement('p');
    let newText1 = document.createElement('p');

    newCard.classList = "card";
    newCardBody.classList = "card-body";
    newTitle.classList = "card-title";
    newText.classList = "card-text";
    newText1.classList = "card-text";

    newTitle.textContent = data.excerciseName;
    newText.textContent = data.muscleTargeted;
    newText1.textContent = data.noOfReps, data.noOfSets;

    newCardBody.appendChild(newTitle);
    newCardBody.appendChild(newText);
    newCardBody.appendChild(newtext1);

    newCard.appendChild(newCardBody);

    parentDiv.appendChild(newCard);
}

inputBtn.addEventListener('click', viewPlans);
