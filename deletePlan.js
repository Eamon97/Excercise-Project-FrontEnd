`use strict`;

let deletedID = document.querySelector("#numberInput");
let deletebtn = document.querySelector("#deleteBtn");

let idvalue = deletedID.value;

let deleteRequest = (idvalue) => {

    fetch(`http://localhost:9000/Excercise/delete/{idvalue}`, {
        method: `DELETE`
    })
        .then((response) => {
            if (response.status !== 200) {
                console.error(`Status: ${response.statusText}`);
                return;
            }
            response.json()
                .then((data) => {
                    console.log(data);
                });
        });

};
deleteBtn.addEventListener('click', deleteRequest);