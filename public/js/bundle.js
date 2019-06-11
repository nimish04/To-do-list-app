/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/add-todo.js":
/*!*************************!*\
  !*** ./src/add-todo.js ***!
  \*************************/
/*! exports provided: addNewTodo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addNewTodo\", function() { return addNewTodo; });\n/* harmony import */ var _list_todos_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list-todos.js */ \"./src/list-todos.js\");\n\r\n\r\nfunction addNewTodo(e){\r\n  e.preventDefault();\r\n\r\n  var input=e.target.newtask.value;\r\n\r\n  e.target.newtask.value=\"\";\r\n\r\n\r\n  $.post('/addtask',\r\n  {newtask:input},\r\n\r\n    function(response,status){\r\n\r\n      Object(_list_todos_js__WEBPACK_IMPORTED_MODULE_0__[\"DisplayTodoList\"])(response);\r\n\r\n});\r\n}\r\n\n\n//# sourceURL=webpack:///./src/add-todo.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _add_todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-todo */ \"./src/add-todo.js\");\n/* harmony import */ var _remove_todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./remove-todo */ \"./src/remove-todo.js\");\n/* harmony import */ var _list_todos_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list-todos.js */ \"./src/list-todos.js\");\n\r\n\r\n\r\n\r\nfunction fetchAllTasks() {\r\n\r\n  fetch(\"alltasks\")\r\n  .then((resp) => resp.json()) \r\n  .then(function(data) {\r\n\r\n    Object(_list_todos_js__WEBPACK_IMPORTED_MODULE_2__[\"DisplayTodoList\"])(data);\r\n\r\n    \r\n    })\r\n  };\r\n\r\n\r\nfunction init() {\r\n\r\n  fetchAllTasks();\r\n\r\n  var myForm = document.getElementById('add-todo-form');\r\n  myForm.addEventListener('submit', _add_todo__WEBPACK_IMPORTED_MODULE_0__[\"addNewTodo\"]);\r\n\r\n  var removeTask=document.getElementById(\"demo\");\r\n  removeTask.addEventListener('click', _remove_todo__WEBPACK_IMPORTED_MODULE_1__[\"getIdOfElement\"]);\r\n\r\n  var addTaskAgain=document.getElementById(\"completed\");\r\n  addTaskAgain.addEventListener('click', _remove_todo__WEBPACK_IMPORTED_MODULE_1__[\"getIdOfElement\"]);\r\n}\r\n\r\n$(document).ready(init);\r\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/list-todos.js":
/*!***************************!*\
  !*** ./src/list-todos.js ***!
  \***************************/
/*! exports provided: DisplayTodoList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DisplayTodoList\", function() { return DisplayTodoList; });\nfunction DisplayTodoList(response){\r\n  \r\n  var task=[];\r\n    task=response.filter(function(todo){\r\n      return todo.completed !== true;\r\n  \r\n    });\r\n  \r\n    var complete=[];\r\n    complete=response.filter(function(todo){\r\n      return todo.completed === true;\r\n  \r\n    });\r\n  \r\n    var element = document.getElementById(\"task\");\r\n\r\n    if(task.length == 0)\r\n      element.classList.add(\"hide\"); \r\n\r\n    if(task.length!=0)\r\n      element.classList.remove(\"hide\");\r\n  \r\n    var element1 = document.getElementById(\"taskdone\");\r\n\r\n    if(complete.length == 0)\r\n      element1.classList.add(\"hide\");\r\n\r\n    if(complete.length!=0)\r\n      element1.classList.remove(\"hide\");\r\n\r\n  var text=\"\";\r\n  var text2=\"\";\r\n\r\n  for (var i = 0; i < response.length; i++) {\r\n\r\n\r\n    if(!response[i].completed)\r\n      text += \"<li data-id=\" + i + \">\" + response[i].label + \"</li>\";\r\n\r\n    else \r\n      text2 += \"<li data-id=\" + i + \">\" + response[i].label + \"</li>\";\r\n  }\r\n\r\n    document.getElementById(\"demo\").innerHTML = text;\r\n    document.getElementById(\"completed\").innerHTML = text2;\r\n\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/list-todos.js?");

/***/ }),

/***/ "./src/remove-todo.js":
/*!****************************!*\
  !*** ./src/remove-todo.js ***!
  \****************************/
/*! exports provided: removeTodo, getIdOfElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeTodo\", function() { return removeTodo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getIdOfElement\", function() { return getIdOfElement; });\n/* harmony import */ var _list_todos_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list-todos.js */ \"./src/list-todos.js\");\n\r\n\r\nfunction removeTodo(idz){\r\n  \r\n  $.post('/toggletask',\r\n  {check:idz},\r\n    \r\n    function(response,status){\r\n\r\n      Object(_list_todos_js__WEBPACK_IMPORTED_MODULE_0__[\"DisplayTodoList\"])(response);\r\n\r\n});\r\n}\r\n\r\nfunction getIdOfElement(event){\r\n  if(event.target.tagName.toLowerCase()==='li')\r\n    {\r\n      var a=event.target.innerHTML;\r\n    }\r\n  var idz = event.target.dataset.id;\r\n  removeTodo(idz);\r\n\r\n}\r\n\n\n//# sourceURL=webpack:///./src/remove-todo.js?");

/***/ })

/******/ });