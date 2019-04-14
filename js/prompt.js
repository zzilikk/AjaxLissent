document.addEventListener('DOMContentLoaded', function(){  // Добавляем событие DOMContentLoaded к document, которое отработает, когда загрузится DOM
    var userName = prompt('Введите никнейм', 'Аноним'); // Задаем вопрос пользователю при загрузке страницы, чтобы узнать его имя и записываем результат в переменную
    var userForm = document.querySelector('#userForm'); // Находим в DOM форму заполненую пользователем
    var userTextarea = document.querySelector('#userMassege') // Находим в DOM окно для ввода сообщения
    var chat = document.querySelector('#chat') // Находим в DOM окно с чатом
    
    userForm.addEventListener("submit", function(event){    // Добавляем событие к форме        
        event.preventDefault();   // отменяем действие формы установленно по умолчанию
        let userMassege = userTextarea.value; // Находим в DOM введённое пользователем сообщение
  
        if(userTextarea.value === ''){ // Если значение введенного поля пусто то добавим класс, иначе удалим
            userTextarea.classList.add('massege-empty');
        }else{
            userTextarea.classList.remove('massege-empty');
        }

        var data = {  // Создадим объект который будем отправлять на сервер.
          name: userName, // Создаим свойство объекта типа name
          text: userMassege // Создаим свойсвто объекта типа massage
        }
        if(userTextarea.value != ''){ // Если сообщение введено
            ajax(data); // совершаем наш ajax запрос и передаём ему наш объект 
        }
       
        userTextarea.value = ''; // очищаем текстовое поле.
    });
});