const formInsert = document.getElementById("form-insertStudent");
const msg = document.querySelector(".message");
const content = document.querySelector(".content")
const formInsertG = document.getElementById("form-insertGroup");
formInsert.addEventListener("submit", (event)=> {
    event.preventDefault();//отмена
    let formData = new FormData(formInsert);// собираем данные

    let xhr = new XMLHttpRequest(); //Создаем запрос отправки на сервер.
    xhr.open("POST", "insertStudent.php");
    xhr.send(formData);
    xhr.onload = () =>{
        if(xhr.response == "OK"){
            msg.innerHTML= "Accept";
            msg.classList.add("success");
            msg.classList.add("show-message");
            let div = document.createElement("div");
            let fname = formData.get("fname");
            let lname = formData.get("lname");
            let gender = formData.get("gender");
            let age = formData.get("age");


            div.innerHTML = `$(fname),$(lname),$(gender),$(age)`;
            content.append(div);


        }else{
            msg.innerHTML="Ошибка";
            msg.classList.add("reject");
            msg.classList.add("show-message");
        }
    };

});

formInsertG.addEventListener("submit", (event)=> {
    event.preventDefault();//отмена
    let formData = new FormData(formInsertG);// собираем данные

    let xhr = new XMLHttpRequest(); //Создаем запрос отправки на сервер.
    xhr.open("POST", "insertGroup.php");
    xhr.send(formData);
    xhr.onload = () =>{
        if(xhr.response == "OK"){
            msg.innerHTML="Accept";
            msg.classList.add("success");
            msg.classList.add("show-message");

            let div = document.createElement("div");
            let title = formData.get("title");



            div.innerHTML = `$(group_id),$(title)`;
            content.append(div);


        }else{
            msg.innerHTML="Ошибка";
            msg.classList.add("reject");
            msg.classList.add("show-message");
        }
    };

});