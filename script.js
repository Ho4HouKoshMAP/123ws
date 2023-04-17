const formInsert = document.getElementById("form-insertStudent");
formInsert.addEventListener("submit", (event)=> {
    event.preventDefault();//отмена
    let formData = new FormData(formInsert);// собираем данные

    let xhr = new XMLHttpRequest(); //Создаем запрос отправки на сервер.
    xhr.open("POST", "insertStudent.php");
    xhr.send(FormData);
    xhr.onload = () =>{
        console.log(xhr.response)
    } 
});