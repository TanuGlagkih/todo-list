# To-do list - 'My TodoS'
Link: https://todo-list-lake-ten-38.vercel.app/

## Web-application includes:
<ul>
<li>Adding, deleting, editing todos<br>
<li>Filtering by date (start date, end date), completion (completed or not)<br>
<li>Search by name<br>
</ul>

 ## Technology stack: 
 Typescript, React 18, Redux, React Rourer v6, Webpack <br>
 
## Installation
2. `npm install`
3. `npm run build`
4. `npm start`
<br><br>

# Приложение для создания списка дел 'My TodoS'
Ссылка: https://todo-list-lake-ten-38.vercel.app/

## Функционал

<ul>
<li>Добавление, удаление, редактирование дел<br>
<li>Фильтрация по дате(дате начала, дате окончания), выполнению (выполнено или нет)<br>
<li>Поиск по названию<br>
<li><br>
</ul>

## Технологический стек: 
Typescript, React 18, Redux, React Rourer v6, Webpack <br>
 
 ## Установка
1. Необходимо клонировать этот репозиторий
2. `npm install`
3. `npm run build`
4. `npm start`

 ## Комментарий о выполненной работе

<ol>

<li>Что сделано:
<ul>
<li>даты выводятся в формате “5 фев 2022 г.” (библиотека moment.js);<br>
<li>задачи добавляются сверху списка с пагинацией (на странице не более 15 дел, количество страниц рассчитывается в зависимости от для ну списка;<br>
<li>реализована фильтрация по дате (сверху отображаются ранние задачи) и выполнению;<br>
<li>сделан поиск по названию; добавление и редактирование происходит на отдельной странице;<br>
<li>при нажатии на кнопку "удалить" вызывается confirm (библиотека sweetalert); <br>
<li>сохраняются в LocalStorage и загружаются оттуда при открытии приложения; все страницы адаптивно сверстаны на flex<br>
<li>удаленные задачи выводятся на странице корзины; реализована очистка корзины<br>
</ul>

<li>Особенности реализации, что, почему и как сделано: логика приложения хранится в Redux, при создании задачи она добавляется в начало основного списка. Синхронизация в Local Storage реализована с использованием redux-persist. Компонент задачи (Item) переиспользуемый. Часть данных при отрисовке компонентов берется из роутинга (отображение меню, формы создания/редактирования задачи)<br>

<li>Особенности работы приложения, баги: при загрузке приложения вылезает ошибка в консоли (скорее всего, связана с  конфигами), больше багов не обнаружено (но наверняка они есть). Адаптивная верстка сделана достаточно грубо, в идеале можно улучшить. Также требуется добавление прелоадера, error boundary и обработка ошибок в пользовательских событиях <br>
<li>Изученное в ходе разработки: работа с датами (ввод, вывод в нужном формате, сравнение), синхронизация Redux с Local Storage, реализация пагинации (и то, как это делается в случае получения данных по API) и фильтрации <br>
</ol>

