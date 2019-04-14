function ajax(obj){
    var xhr = new XMLHttpRequest(); // Создаём запрос 
    var url = "http://cl303109.tmweb.ru/"+serialize(obj); // Создаём URL с использованием функции преобразующей наш объкт в строку GET запроса
    console.log(url);
    xhr.overrideMimeType("application/json") // задаём формат данных JSON 
    xhr.open('GET', url, true); // открываем запрос
  
    xhr.onload = function() {          // когда загрузка завершена
        if (xhr.status === 200) {  // Если статут 200 то 
            var result = JSON.parse(xhr.response);  // преобразовываем строку ответа в JSON формат                    
            
            addMassage(result.name, result.text); // добавим ответ в окно чата

            console.log(result);   
        } else {
            console.log('err', xhr.response); // Иначе выведем в консоль ответ с ошибкой
        }
      }
    xhr.send();  // Отправка запроса.
}

function serialize(obj){  // Функция необходимая для отправки объекта на сервер, форматирует наш объект с параметра в строку подходящую под GET запрос. 
    return '?'+Object.keys(obj).reduce(function(a,k){a.push(k+'='+encodeURIComponent(obj[k])); return a},[]).join('&')
}

// Cоздадим функцию которая будет добавлять сообщения в блок chat
function addMassage(name, massage){ 
    let chat = document.querySelector('#chat') // Находим в DOM окно с чатом
    
    let resultWrap = document.createElement('div'); // Создадим div объект
    resultWrap.classList.add('result-wrap'); // Добавим ему класс

    var hours = (new Date()).getHours(); // Узнаем который сейчас час
 
    var minutes = (new Date()).getMinutes(); // Узнаем сколько минут

    var seconds = (new Date()).getSeconds(); // Узнаем сколько секунд 

    
    let time = document.createElement('div'); // Создадим div объект
    time.classList.add('result-time'); // Добавим ему класс
    time.innerHTML = hours + ":" + minutes + ":" + seconds; // Добавим время
   
    let resultName = document.createElement('div'); // Создадим div объект
    resultName.classList.add('result-name'); // Добавим ему класс
    resultName.innerHTML = name+":"; // Добавим имя
  
    let resultMassage = document.createElement('div'); // Создадим div объект
    resultMassage.classList.add('result-massage'); // Добавим ему класс
    resultMassage.innerHTML = massage; // Добавим сообщение
  
    resultWrap.append(time);  // Добавим время во wraper
    resultWrap.append(resultName);   // Добавим имя во wraper
    resultWrap.append(resultMassage); // Добавим сообщение во wraper
    chat.append(resultWrap); // Добавим wraper в окно чата
} 