import React from "react";
import ReactDOM from "react-dom";
import App from './containers/app';
import {createStore, applyMiddleware} from 'redux';
import portfolioReducers from './reducers';
import { Provider } from 'react-redux';
import thunk from "redux-thunk";
import WebFont from 'webfontloader';
/* src image start*/
import dance_menu from './components/worksList/img/Screenshot_1.png';
import comments from './components/worksList/img/Screenshot_3.png';
import contactsTabs from './components/worksList/img/Screenshot_9.png';
import mainSlider from './components/worksList/img/Screenshot_10.png';
import taskpub from './components/worksList/img/taskpub.png';
import prodplus from './components/worksList/img/prodplus.png';
import BPplus from './components/worksList/img/BPplus.png';
import dashboard from './components/worksList/img/dashboard.png';
import filter from './components/worksList/img/filter.png';
import manufacture from './components/worksList/img/Screenshot_11.png';
import ask from './components/worksList/img/askList.png';
/* src image end*/

let initialState = {
	worksList: [
		{
			"id":1, 
			"select":false, 
			"shortDescription":"Виджет комментарии", 
			"image_src":comments, 
			"title":"Комментарии", 
			"description": "Данный виджет был заданием по курсам SkillBox на создание react + redux компонента"
		},
		{
			"id":2, 
			"select":false, 
			"shortDescription":"Выпадающее меню", 
			"image_src":dance_menu, 
			"title":"Меню на главной странице", 
			"description": "Интеграция дизайна в БУС, выпадающее меню. jquery, html, css, php, Bitrix API"
		},
		{
			"id":3, 
			"select":false, 
			"shortDescription":"Блок контакты сети магазинов", 
			"image_src":contactsTabs, 
			"title":"Контакты", 
			"description": "Интеграция дизайна в БУС, работа с инфоблоками и свойствами, блок контактов, Табы, яндекс карта подключена компонентом БУСа. jquery, html, css, php, Bitrix API"
		},
		{
			"id":4, 
			"select":false, 
			"shortDescription":"Слайдер на главной", 
			"image_src":mainSlider, 
			"title":"Слайдер", 
			"description": "SlickSlider на главной странице, связь с инфоблоком для настройки контента. Bitrix:news.list интеграция дизайна"
		},
		{
			"id":5, 
			"select":false, 
			"shortDescription":"Логирование времени", 
			"image_src":taskpub, 
			"title":"Bitrix24 & React + Redux. Tasks time log", 
			"description": "Так как сам b24 особо не используется для работы, переработал компонент оставшийся с курсов под логирование задач, тяжело вспоминать, что ты сделал на прошлой неделе, глядя на мелкие задачки..а логировать внутри b24 было слишком лень =( На свет вышло это чудо, дизайн не перерабатывался, делал для себя, на скорость и практичность. Для запросов используется модуль axios. Bitrix API"
		},
		{
			"id":6, 
			"select":false, 
			"shortDescription":"Товары+", 
			"image_src":prodplus, 
			"title":"Bitrix24 application", 
			"description": "Приложение 3 типа для Bitrix24, товары+. Встраивается в меню, создает вкладку Товары+, выводит таблицей товары прикрепленные к сделке. Можно установить коэффициент наценки/скидки. Так же можно добавить новые товары к сделке через кнопку вызывающую popup-окно с добавлением товара. Используется JS,html,css,php,REST API b24"
		},
		{
			"id":7, 
			"select":false, 
			"shortDescription":"Действия бизнес процессов", 
			"image_src":BPplus, 
			"title":"Bitrix24 application", 
			"description": "Приложение через JS + b24 Rest Api, создает на портале новые действия бизнес процессов по созданию нового товара и добавлению товара к сделке"
		},
		{
			"id":8, 
			"select":false, 
			"shortDescription":"DashBoard Bitrix24", 
			"image_src":dashboard, 
			"title":"Bitrix24 application", 
			"description": "Приложение вытаскивающее всю информацию из портала bitrix24, выводит информацию в таблице, есть фильтр по сотрудникам и отделам, столбцы таблицы можно настраивать под себя перетаскиванием, так же есть отдельное меню для настройки видимости полей.Bitrix24 Rest Api, JS, mySql"
		},
		{
			"id":9, 
			"select":false, 
			"shortDescription":"Фильтр для интернет магазина", 
			"image_src":filter,
			"title":"БУС интернет магазин - шаблонизация фильтра", 
			"description": "Ну в общем то, стандартный фильтр БУСа, кастомизиров, доработана возможность вывода цветов иконками"
		},
		{
			"id":10, 
			"select":false, 
			"shortDescription":"Раздел Производственные комплексы", 
			"image_src": manufacture, 
			"title":"БУС Раздел производство", 
			"description": "Bitrix:news.list, шаблонизация. Все как и раньше, просто история о реализации понравившегося дизайна.."
		},
		{
			"id":11, 
			"select":false, 
			"shortDescription":"Опросный Лист", 
			"image_src": ask, 
			"title":"БУС Опросный Лист", 
			"description": "Веб-формы БУСа, скачать анкету/ загрузить заполненную со своими данными."
		},

	],
};

const store = createStore(portfolioReducers,initialState,applyMiddleware(thunk));


ReactDOM.render(
	<Provider store={store}>
		<App store={store} />
	</Provider>,
	document.querySelector('#app')
);