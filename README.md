# Материалы к докладу "Middlewares are awesome"

* [Ссылка на презентацию](#Ссылка-на-презентацию)
* [Набор полезных ссылок](#Набор-полезных-ссылок)
* [Signal middleware](#signal-middleware)
* [Демо и код работы различных middleware](#демо-и-код-работы-различных-middleware)

## Ссылка на презентацию

https://docs.google.com/presentation/d/1qFTB--HrXCU0_nVQ_T4ZlB9CsiXpXQsASc14pctoggA/edit?usp=sharing

## Набор полезных ссылок

1.  О начале развития проекта талантикс можно почитать в статье на хабре: https://habr.com/company/hh/blog/310524/ В этой статье разбирается структура проекта, изначальная структура view, action creators и reducers. Кроме того, разбирается подход с reducers — подмена редьюсеров при переключении модуля.

2.  Middleware, в которых можно реализовать асинхронные походы:
    — созданная для выноса бизнес-логики в отдельный уровень — signal-middleware https://github.com/xnimorz/signal-middleware Демо работы signal-middleware: https://xnimorz.github.io/signal-middleware/

* redux-thunk: https://github.com/reduxjs/redux-thunk — простейший middleware
* redux-saga: https://github.com/redux-saga/redux-saga — middleware для имплементирования логики приложения, построенный на генераторах
* redux-logic: https://github.com/jeffbski/redux-logic — комплексное решение, охватывающее асинхронные запросы, отмену событий и т.д.

3.  Вспомогательные middleware для логирования и мониторинга:

* Redux-logger https://github.com/evgenyrodionov/redux-logger
* Sentry https://sentry.io/welcome/ Raven + Raven-middleware for redux https://github.com/getsentry/raven-js + https://github.com/captbaritone/raven-for-redux

## Signal middleware

signal-middleware — создана для создания отдельной абстракции между view слоем и слоем бизнес-логики приложения.

Мотивация: при разработке фронтенд приложений, серверные запросы одна из основных составляющих. Для комфортной работы с запросами на стеке `react-redux` используются решения такие как `redux-thunk`, либо более комплексные как `redux-logic`. Если в проекте внедрен `redux-thunk`, то со временем, количество сложных `action creators` становится очень внушительным, управлять этим становится сложнее. Упрощением является — разделение `action` и логики. Например, если нам нужно нарисовать alert при клике на кнопку мы не идем в исходники хрома и не меняем код движка, а просто добавляем обработчик события. К `action` можно относиться подобным образом — это событие приложения. И мы можем разделить эти события на 2 типа — требующие описания бизнес логики `signal action` и события доходящие до слоя `data logic` — в `reducers`. `Signal middleware` предоставляет такую абстракцию.

Подробнее о `signal-middleware` с примерами кода: https://github.com/xnimorz/signal-middleware
Демо работы signal-middleware: https://xnimorz.github.io/signal-middleware/

При работе с signal-middleware MVC структура приложения выглядит так:
![MVC using signal-middleware](https://raw.githubusercontent.com/xnimorz/signal-middleware/master/resources/layers.png)

## Демо и код работы различных middleware

Пример содержит:

1.  Кэширующий в localstorage middleware с восстановлением данных при первом открытии приложения
2.  Redux-logger — отображает данные в консоли
3.  Signal-middleware — для запросов

Открыть на github.pages: https://xnimorz.github.io/frontend-conf-materials/

Запустить себе локально:

```
yarn install
yarn start
```
