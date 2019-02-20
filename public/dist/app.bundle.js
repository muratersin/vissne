/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./app/assets/javascript/app/index.jsx","common","react"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/assets/javascript/app/Root.jsx":
/*!********************************************!*\
  !*** ./app/assets/javascript/app/Root.jsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _Discover = __webpack_require__(/*! ./containers/Discover */ "./app/assets/javascript/app/containers/Discover/index.js");

var _Discover2 = _interopRequireDefault(_Discover);

var _Movie = __webpack_require__(/*! ./containers/Movie */ "./app/assets/javascript/app/containers/Movie/index.js");

var _Movie2 = _interopRequireDefault(_Movie);

var _Auth = __webpack_require__(/*! ./containers/Auth */ "./app/assets/javascript/app/containers/Auth/index.js");

var _Auth2 = _interopRequireDefault(_Auth);

var _Account = __webpack_require__(/*! ./containers/Account */ "./app/assets/javascript/app/containers/Account/index.js");

var _Account2 = _interopRequireDefault(_Account);

var _Lists = __webpack_require__(/*! ./containers/Lists */ "./app/assets/javascript/app/containers/Lists/index.js");

var _Lists2 = _interopRequireDefault(_Lists);

var _NotFound = __webpack_require__(/*! ./components/NotFound */ "./app/assets/javascript/app/components/NotFound/index.jsx");

var _NotFound2 = _interopRequireDefault(_NotFound);

var _AlertDialog = __webpack_require__(/*! ./containers/AlertDialog */ "./app/assets/javascript/app/containers/AlertDialog/index.js");

var _AlertDialog2 = _interopRequireDefault(_AlertDialog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Root = function Root(_ref) {
  var store = _ref.store;
  return _react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(
      _react.Fragment,
      null,
      _react2.default.createElement(
        _reactRouterDom.BrowserRouter,
        null,
        _react2.default.createElement(
          _reactRouterDom.Switch,
          null,
          _react2.default.createElement(_reactRouterDom.Route, { path: '/', exact: true, component: _Discover2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { path: '/coming-soon', component: _Discover2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { path: '/in-theaters', component: _Discover2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { path: '/auth', component: _Auth2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { path: '/profile/account', component: _Account2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { path: '/profile/lists', component: _Lists2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { path: '/movie/:slug/:id', component: _Movie2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { path: '/page-not-found', component: _NotFound2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { component: _NotFound2.default })
        )
      ),
      _react2.default.createElement(_AlertDialog2.default, null)
    )
  );
};

// Shared Components


// Pages


Root.propTypes = {
  store: _propTypes2.default.instanceOf(Object).isRequired
};

exports.default = Root;

/***/ }),

/***/ "./app/assets/javascript/app/actions/account.js":
/*!******************************************************!*\
  !*** ./app/assets/javascript/app/actions/account.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.changePassword = exports.updateUser = exports.getAccountDetail = exports.setAccountDetail = undefined;

var _axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var _axios2 = _interopRequireDefault(_axios);

var _actionTypes = __webpack_require__(/*! ../constants/action-types */ "./app/assets/javascript/app/constants/action-types.js");

var _common = __webpack_require__(/*! ./common */ "./app/assets/javascript/app/actions/common.js");

var _ajaxErrorHandler = __webpack_require__(/*! ../../lib/ajax-error-handler */ "./app/assets/javascript/lib/ajax-error-handler.js");

var _ajaxErrorHandler2 = _interopRequireDefault(_ajaxErrorHandler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var setAccountDetail = exports.setAccountDetail = function setAccountDetail(user) {
  return {
    type: _actionTypes.SET_ACCOUNT_DETAIL,
    payload: {
      user: user
    }
  };
};

var getAccountDetail = exports.getAccountDetail = function getAccountDetail() {
  return function (dispatch) {
    dispatch((0, _common.setPageLoadingStatus)(true));
    _axios2.default.get('/api/account').then(function (response) {
      dispatch((0, _common.setPageLoadingStatus)(false));
      dispatch(setAccountDetail(response.data));
    }).catch((0, _ajaxErrorHandler2.default)(dispatch));
  };
};

var updateUser = exports.updateUser = function updateUser(user) {
  return function (dispatch) {
    dispatch((0, _common.setLoadingStatus)(true));
    _axios2.default.put('/api/user/' + user.id, user).then(function (response) {
      dispatch((0, _common.setLoadingStatus)(false));
      dispatch(setAccountDetail(response.data));
      dispatch((0, _common.toggleAlertDialog)({
        kind: 'success',
        message: 'Profile has been successfully updated.'
      }));
    }).catch((0, _ajaxErrorHandler2.default)(dispatch));
  };
};

var changePassword = exports.changePassword = function changePassword(password) {
  return function (dispatch) {
    dispatch((0, _common.setLoadingStatus)(true));
    _axios2.default.put('/api/user/change-password', password).then(function (_ref) {
      var data = _ref.data;

      dispatch((0, _common.setLoadingStatus)(false));
      dispatch((0, _common.toggleAlertDialog)({
        kind: 'success',
        message: data.message
      }));
    }).catch((0, _ajaxErrorHandler2.default)(dispatch));
  };
};

/***/ }),

/***/ "./app/assets/javascript/app/actions/auth.js":
/*!***************************************************!*\
  !*** ./app/assets/javascript/app/actions/auth.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logout = exports.loginRegister = undefined;

var _axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var _axios2 = _interopRequireDefault(_axios);

var _common = __webpack_require__(/*! ./common */ "./app/assets/javascript/app/actions/common.js");

var _ajaxErrorHandler = __webpack_require__(/*! ../../lib/ajax-error-handler */ "./app/assets/javascript/lib/ajax-error-handler.js");

var _ajaxErrorHandler2 = _interopRequireDefault(_ajaxErrorHandler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var loginRegister = exports.loginRegister = function loginRegister(data, url) {
  return function (dispatch) {
    dispatch((0, _common.setPageLoadingStatus)(true));
    _axios2.default.post(url, data).then(function () {
      window.location.href = '/';
      // TODO: set user information to common state
    }).catch((0, _ajaxErrorHandler2.default)(dispatch));
  };
};

var logout = exports.logout = function logout() {};

/***/ }),

/***/ "./app/assets/javascript/app/actions/common.js":
/*!*****************************************************!*\
  !*** ./app/assets/javascript/app/actions/common.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setUploadedImage = exports.toggleFilter = exports.setLoadingStatus = exports.setPageLoadingStatus = exports.toggleAlertDialog = undefined;

var _actionTypes = __webpack_require__(/*! ../constants/action-types */ "./app/assets/javascript/app/constants/action-types.js");

var toggleAlertDialog = exports.toggleAlertDialog = function toggleAlertDialog(_ref) {
  var message = _ref.message,
      kind = _ref.kind;
  return {
    type: _actionTypes.TOGGLE_ALERT,
    message: message,
    kind: kind
  };
};

var setPageLoadingStatus = exports.setPageLoadingStatus = function setPageLoadingStatus(status) {
  return {
    type: _actionTypes.SET_PAGE_LOADING_STATUS,
    pageLoading: status
  };
};

var setLoadingStatus = exports.setLoadingStatus = function setLoadingStatus(status) {
  return {
    type: _actionTypes.SET_LOADING_STATUS,
    loading: status
  };
};

var toggleFilter = exports.toggleFilter = function toggleFilter() {
  return {
    type: _actionTypes.TOGGLE_FILTER
  };
};

var setUploadedImage = exports.setUploadedImage = function setUploadedImage(uploadedFile) {
  return {
    type: _actionTypes.SET_UPLOADED_IMAGE,
    payload: uploadedFile
  };
};

/***/ }),

/***/ "./app/assets/javascript/app/actions/discover.js":
/*!*******************************************************!*\
  !*** ./app/assets/javascript/app/actions/discover.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getGenres = exports.setGenres = exports.setQuery = exports.getMovies = exports.setMovies = undefined;

var _axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var _axios2 = _interopRequireDefault(_axios);

var _actionTypes = __webpack_require__(/*! ../constants/action-types */ "./app/assets/javascript/app/constants/action-types.js");

var _common = __webpack_require__(/*! ./common */ "./app/assets/javascript/app/actions/common.js");

var _ajaxErrorHandler = __webpack_require__(/*! ../../lib/ajax-error-handler */ "./app/assets/javascript/lib/ajax-error-handler.js");

var _ajaxErrorHandler2 = _interopRequireDefault(_ajaxErrorHandler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var setMovies = exports.setMovies = function setMovies(response) {
  return {
    type: _actionTypes.SET_MOVIES,
    movies: response.results,
    page: response.page + 1,
    totalPages: response.total_pages,
    total: response.total_results
  };
};

var getMovies = exports.getMovies = function getMovies(query) {
  var url = 'api/discover';

  Object.keys(query).forEach(function (queryName, i) {
    var value = query[queryName];
    var op = i === 0 ? '?' : '&';

    if (value) {
      if (!Array.isArray(value)) {
        url += '' + op + queryName + '=' + value;
      } else if (value.length > 0) {
        var multiQuery = queryName + '=';
        value.forEach(function (v) {
          multiQuery += v + ',';
        });
        url += '' + op + multiQuery;
      }
    }
  });

  return function (dispatch) {
    dispatch((0, _common.setLoadingStatus)(true));
    _axios2.default.get(url).then(function (_ref) {
      var data = _ref.data;

      dispatch((0, _common.setLoadingStatus)(false));
      dispatch(setMovies(data));
    }).catch((0, _ajaxErrorHandler2.default)(dispatch));
  };
};

var setQuery = exports.setQuery = function setQuery(_ref2) {
  var field = _ref2.field,
      value = _ref2.value;
  return function (dispatch) {
    dispatch({
      type: _actionTypes.SET_QUERY,
      field: field,
      value: value
    });
    return Promise.resolve();
  };
};

var setGenres = exports.setGenres = function setGenres(genres) {
  return {
    type: _actionTypes.SET_GENRES,
    genres: genres
  };
};

var getGenres = exports.getGenres = function getGenres() {
  return function (dispatch) {
    return _axios2.default.get('/api/genre').then(function (_ref3) {
      var data = _ref3.data;
      return dispatch(setGenres(data));
    }).catch((0, _ajaxErrorHandler2.default)(dispatch));
  };
};

/***/ }),

/***/ "./app/assets/javascript/app/actions/lists.js":
/*!****************************************************!*\
  !*** ./app/assets/javascript/app/actions/lists.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setList = setList;
exports.getListByCurrentUser = getListByCurrentUser;
exports.saveList = saveList;
exports.deleteList = deleteList;
exports.addToList = addToList;
exports.removeFromList = removeFromList;
exports.setListMovies = setListMovies;
exports.getListMovies = getListMovies;

var _axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var _axios2 = _interopRequireDefault(_axios);

var _cookie = __webpack_require__(/*! ../../lib/cookie */ "./app/assets/javascript/lib/cookie.js");

var _cookie2 = _interopRequireDefault(_cookie);

var _ajaxErrorHandler = __webpack_require__(/*! ../../lib/ajax-error-handler */ "./app/assets/javascript/lib/ajax-error-handler.js");

var _ajaxErrorHandler2 = _interopRequireDefault(_ajaxErrorHandler);

var _actionTypes = __webpack_require__(/*! ../constants/action-types */ "./app/assets/javascript/app/constants/action-types.js");

var _common = __webpack_require__(/*! ./common */ "./app/assets/javascript/app/actions/common.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function setList(_ref) {
  var lists = _ref.lists,
      total = _ref.total;

  return {
    type: _actionTypes.SET_LISTS,
    payload: {
      lists: lists,
      total: total
    }
  };
}

function getListByCurrentUser(_ref2, movieId) {
  var page = _ref2.page,
      limit = _ref2.limit;

  var currentUserId = _cookie2.default.get('user_id');

  if (!currentUserId) {
    window.location.href = vissne.domain + '/auth';
  }

  var url = '/api/lists?userId=' + currentUserId + '&page=' + page + '&limit=' + limit;

  if (movieId) {
    url += '&movieId=' + movieId;
  }

  return function (dispatch) {
    dispatch((0, _common.setLoadingStatus)(true));
    (0, _axios2.default)(url).then(function (response) {
      dispatch((0, _common.setLoadingStatus)(true));
      dispatch((0, _common.setPageLoadingStatus)(false));
      dispatch(setList({
        lists: response.data.rows,
        total: response.data.count
      }));
    }).catch((0, _ajaxErrorHandler2.default)(dispatch));
  };
}

function saveList(list, callback) {
  var ops = !list.id ? {
    method: 'post',
    url: '/api/lists'
  } : {
    method: 'put',
    url: '/api/lists/' + list.id
  };

  return function (dispatch) {
    dispatch((0, _common.setLoadingStatus)(true));
    _axios2.default[ops.method](ops.url, list).then(function (result) {
      dispatch((0, _common.setLoadingStatus)(false));
      dispatch((0, _common.toggleAlertDialog)({
        kind: 'success',
        message: result.data.message
      }));
      if (callback && typeof callback === 'function') {
        callback();
      }
    }).catch((0, _ajaxErrorHandler2.default)(dispatch));
  };
}

function deleteList(id, callback) {
  return function (dispatch) {
    dispatch((0, _common.setLoadingStatus)(true));
    _axios2.default.delete('/api/lists/' + id).then(function (response) {
      dispatch((0, _common.setLoadingStatus)(false));
      dispatch((0, _common.toggleAlertDialog)({
        kind: 'success',
        message: response.data.message
      }));

      if (callback && typeof callback === 'function') {
        callback();
      }
    }).catch((0, _ajaxErrorHandler2.default)(dispatch));
  };
}

function addToList(_ref3, callback) {
  var listId = _ref3.listId,
      movieId = _ref3.movieId;

  return function (dispatch) {
    dispatch((0, _common.setLoadingStatus)(true));
    _axios2.default.post('/api/lists/' + listId + '/movie/' + movieId, {}).then(function (response) {
      dispatch((0, _common.setLoadingStatus)(false));
      dispatch((0, _common.toggleAlertDialog)({
        kind: 'success',
        message: response.data.message
      }));

      if (callback && typeof callback === 'function') {
        callback();
      }
    }).catch((0, _ajaxErrorHandler2.default)(dispatch));
  };
}

function removeFromList(_ref4, callback) {
  var listId = _ref4.listId,
      movieId = _ref4.movieId;

  return function (dispatch) {
    dispatch((0, _common.setLoadingStatus)(true));
    _axios2.default.delete('/api/lists/' + listId + '/movie/' + movieId).then(function (response) {
      dispatch((0, _common.setLoadingStatus)(false));
      dispatch((0, _common.toggleAlertDialog)({
        kind: 'success',
        message: response.data.message
      }));

      if (callback && typeof callback === 'function') {
        callback();
      }
    }).catch((0, _ajaxErrorHandler2.default)(dispatch));
  };
}

function setListMovies(_ref5) {
  var rows = _ref5.rows,
      count = _ref5.count;

  return {
    type: _actionTypes.SET_LIST_MOVIES,
    payload: {
      movies: rows,
      total: count
    }
  };
}

function getListMovies(query, callback) {
  var listId = query.listId,
      page = query.page,
      limit = query.limit;


  return function (dispatch) {
    dispatch((0, _common.setLoadingStatus)(true));
    _axios2.default.get('/api/lists/' + listId + '?page=' + page + '&limit=' + limit).then(function (response) {
      dispatch((0, _common.setLoadingStatus)(false));
      dispatch(setListMovies(response.data));
      if (callback && typeof callback === 'function') {
        callback();
      }
    }).catch((0, _ajaxErrorHandler2.default)(dispatch));
  };
}

/***/ }),

/***/ "./app/assets/javascript/app/actions/movie.js":
/*!****************************************************!*\
  !*** ./app/assets/javascript/app/actions/movie.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMovieDetail = exports.setMovieDetail = undefined;

var _axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var _axios2 = _interopRequireDefault(_axios);

var _actionTypes = __webpack_require__(/*! ../constants/action-types */ "./app/assets/javascript/app/constants/action-types.js");

var _ajaxErrorHandler = __webpack_require__(/*! ../../lib/ajax-error-handler */ "./app/assets/javascript/lib/ajax-error-handler.js");

var _ajaxErrorHandler2 = _interopRequireDefault(_ajaxErrorHandler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var setMovieDetail = exports.setMovieDetail = function setMovieDetail(detail) {
  return {
    type: _actionTypes.SET_MOVIE_DETAIL,
    detail: detail
  };
};

var getMovieDetail = exports.getMovieDetail = function getMovieDetail(id) {
  return function (dispatch) {
    dispatch(setMovieDetail(null));

    _axios2.default.get('/api/movie/' + id).then(function (_ref) {
      var data = _ref.data;
      return dispatch(setMovieDetail(data));
    }).catch((0, _ajaxErrorHandler2.default)(dispatch));
  };
};

/***/ }),

/***/ "./app/assets/javascript/app/components/Alert.jsx":
/*!********************************************************!*\
  !*** ./app/assets/javascript/app/components/Alert.jsx ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _constants = __webpack_require__(/*! ../../lib/constants */ "./app/assets/javascript/lib/constants.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Alert = function Alert(props) {
  var kind = props.kind,
      message = props.message,
      show = props.show;


  if (!show) return null;

  return _react2.default.createElement(
    'div',
    { className: 'alert alert-' + kind + ' w-100 text-center', role: 'alert' },
    message
  );
};

Alert.defaultProps = {
  show: true,
  kind: 'info'
};

Alert.propTypes = {
  kind: _propTypes2.default.oneOf(_constants.ALERT_TYPES),
  show: _propTypes2.default.bool,
  message: _propTypes2.default.string.isRequired
};

exports.default = Alert;

/***/ }),

/***/ "./app/assets/javascript/app/components/Cast/Cast.scss":
/*!*************************************************************!*\
  !*** ./app/assets/javascript/app/components/Cast/Cast.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./app/assets/javascript/app/components/Cast/index.jsx":
/*!*************************************************************!*\
  !*** ./app/assets/javascript/app/components/Cast/index.jsx ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propShapes = __webpack_require__(/*! ../../constants/prop-shapes */ "./app/assets/javascript/app/constants/prop-shapes.js");

__webpack_require__(/*! ./Cast.scss */ "./app/assets/javascript/app/components/Cast/Cast.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Cast = function Cast(_ref) {
  var id = _ref.id,
      name = _ref.name,
      character = _ref.character,
      profilePath = _ref.profilePath;
  return _react2.default.createElement(
    'div',
    { className: 'cast' },
    _react2.default.createElement('img', { className: 'image', src: profilePath, alt: name }),
    _react2.default.createElement(
      'div',
      { className: 'cast-info' },
      _react2.default.createElement(
        'span',
        { className: 'has-text-weight-bold' },
        name
      ),
      _react2.default.createElement(
        'span',
        { className: 'has-text-weight-light' },
        character
      )
    )
  );
};

Cast.propTypes = _propShapes.CastShape;

exports.default = Cast;

/***/ }),

/***/ "./app/assets/javascript/app/components/CastList/CastList.scss":
/*!*********************************************************************!*\
  !*** ./app/assets/javascript/app/components/CastList/CastList.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./app/assets/javascript/app/components/CastList/index.jsx":
/*!*****************************************************************!*\
  !*** ./app/assets/javascript/app/components/CastList/index.jsx ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _propShapes = __webpack_require__(/*! ../../constants/prop-shapes */ "./app/assets/javascript/app/constants/prop-shapes.js");

var _Cast = __webpack_require__(/*! ../Cast */ "./app/assets/javascript/app/components/Cast/index.jsx");

var _Cast2 = _interopRequireDefault(_Cast);

__webpack_require__(/*! ./CastList.scss */ "./app/assets/javascript/app/components/CastList/CastList.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CastList = function CastList(_ref) {
  var casts = _ref.casts;

  var castList = casts.map(function (c) {
    return _react2.default.createElement(_Cast2.default, {
      key: c.id,
      name: c.name,
      profilePath: c.profilePath,
      character: c.character
    });
  });

  return _react2.default.createElement(
    'div',
    { className: 'card cast-list' },
    _react2.default.createElement(
      'div',
      { className: 'card-body' },
      _react2.default.createElement(
        'h5',
        { className: 'card-title' },
        'Cast list'
      ),
      castList
    )
  );
};

CastList.propTypes = {
  casts: _propTypes2.default.arrayOf(_propShapes.CastShape).isRequired
};

exports.default = CastList;

/***/ }),

/***/ "./app/assets/javascript/app/components/Company.jsx":
/*!**********************************************************!*\
  !*** ./app/assets/javascript/app/components/Company.jsx ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propShapes = __webpack_require__(/*! ../constants/prop-shapes */ "./app/assets/javascript/app/constants/prop-shapes.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Company = function Company(_ref) {
  var logo = _ref.logo,
      name = _ref.name;

  var logoPath = logo ? vissne.imagesSecureBaseUrl + '/w92/' + logo : vissne.cdn + '/images/placeholder.png';

  return _react2.default.createElement(
    'div',
    { className: 'media mb-2' },
    _react2.default.createElement('img', { className: 'mr-3 company-logo', src: logoPath, alt: name }),
    _react2.default.createElement(
      'div',
      { className: 'media-body' },
      _react2.default.createElement(
        'h6',
        { className: 'mt-0' },
        name
      )
    )
  );
};

Company.defaultProps = {
  logo: '',
  name: 'Company'
};

Company.propTypes = _propShapes.CompanyShape;

exports.default = Company;

/***/ }),

/***/ "./app/assets/javascript/app/components/CompanyList/CompanyList.scss":
/*!***************************************************************************!*\
  !*** ./app/assets/javascript/app/components/CompanyList/CompanyList.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./app/assets/javascript/app/components/CompanyList/index.jsx":
/*!********************************************************************!*\
  !*** ./app/assets/javascript/app/components/CompanyList/index.jsx ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _propShapes = __webpack_require__(/*! ../../constants/prop-shapes */ "./app/assets/javascript/app/constants/prop-shapes.js");

var _Company = __webpack_require__(/*! ../Company */ "./app/assets/javascript/app/components/Company.jsx");

var _Company2 = _interopRequireDefault(_Company);

__webpack_require__(/*! ./CompanyList.scss */ "./app/assets/javascript/app/components/CompanyList/CompanyList.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CompanyList = function CompanyList(_ref) {
  var companies = _ref.companies;
  return _react2.default.createElement(
    'div',
    { className: 'card mb-2' },
    _react2.default.createElement(
      'div',
      { className: 'card-body' },
      _react2.default.createElement(
        'h5',
        { className: 'card-title' },
        'Companies'
      ),
      _react2.default.createElement(
        'div',
        { className: 'col-12' },
        companies.map(function (c) {
          return _react2.default.createElement(_Company2.default, { key: c.id, logo: c.logo_path, name: c.name });
        })
      )
    )
  );
};

CompanyList.propTypes = {
  companies: _propTypes2.default.arrayOf(_propShapes.CompanyShape).isRequired
};

exports.default = CompanyList;

/***/ }),

/***/ "./app/assets/javascript/app/components/DetailTable.jsx":
/*!**************************************************************!*\
  !*** ./app/assets/javascript/app/components/DetailTable.jsx ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propShapes = __webpack_require__(/*! ../constants/prop-shapes */ "./app/assets/javascript/app/constants/prop-shapes.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DetailTable = function DetailTable(_ref) {
  var movie = _ref.movie;
  return _react2.default.createElement(
    'div',
    { className: 'card' },
    _react2.default.createElement(
      'div',
      { className: 'card-body' },
      _react2.default.createElement(
        'h5',
        { className: 'card-title' },
        movie.orginalTitle + ' (' + movie.year + ')'
      ),
      _react2.default.createElement(
        'table',
        { className: 'table table-striped table-responsive-sm table-responsive-xs' },
        _react2.default.createElement(
          'tbody',
          null,
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'th',
              null,
              'Rating'
            ),
            _react2.default.createElement(
              'td',
              null,
              movie.vote_average + ' (' + movie.vote_count + ')'
            )
          ),
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'th',
              null,
              'Release Date'
            ),
            _react2.default.createElement(
              'td',
              null,
              movie.release_date
            )
          ),
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'th',
              null,
              'Genres'
            ),
            _react2.default.createElement(
              'td',
              null,
              movie.genreNames
            )
          ),
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'th',
              null,
              'Tagline'
            ),
            _react2.default.createElement(
              'td',
              null,
              movie.tagline
            )
          ),
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'th',
              null,
              'Countries'
            ),
            _react2.default.createElement(
              'td',
              null,
              movie.countries
            )
          ),
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'th',
              null,
              'Languages'
            ),
            _react2.default.createElement(
              'td',
              null,
              movie.language
            )
          ),
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'th',
              null,
              'Director'
            ),
            _react2.default.createElement(
              'td',
              null,
              movie.director
            )
          ),
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'th',
              null,
              'Writer'
            ),
            _react2.default.createElement(
              'td',
              null,
              movie.writer
            )
          ),
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'th',
              null,
              'Homepage'
            ),
            _react2.default.createElement(
              'td',
              null,
              _react2.default.createElement(
                'a',
                { href: movie.homepage, rel: 'noopener noreferrer', target: '_blank' },
                movie.homepage
              )
            )
          )
        )
      )
    )
  );
};

DetailTable.propTypes = {
  movie: _propShapes.MovieShape.isRequired
};

exports.default = DetailTable;

/***/ }),

/***/ "./app/assets/javascript/app/components/Filter/Filter.scss":
/*!*****************************************************************!*\
  !*** ./app/assets/javascript/app/components/Filter/Filter.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./app/assets/javascript/app/components/Filter/index.jsx":
/*!***************************************************************!*\
  !*** ./app/assets/javascript/app/components/Filter/index.jsx ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactFontawesome = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");

var _propShapes = __webpack_require__(/*! ../../constants/prop-shapes */ "./app/assets/javascript/app/constants/prop-shapes.js");

var _actionTypes = __webpack_require__(/*! ../../constants/action-types */ "./app/assets/javascript/app/constants/action-types.js");

__webpack_require__(/*! ./Filter.scss */ "./app/assets/javascript/app/components/Filter/Filter.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function switchSortQuery(sortBy) {
  var _sortBy$split = sortBy.split('.'),
      _sortBy$split2 = _slicedToArray(_sortBy$split, 2),
      name = _sortBy$split2[0],
      kind = _sortBy$split2[1];

  var value = name + '.' + (kind === 'desc' ? 'asc' : 'desc');
  return {
    field: 'sortBy',
    value: value
  };
}

function addGenreId(value, currentGenres) {
  var index = currentGenres.indexOf(value);
  if (index === -1) {
    currentGenres.push(value);
  } else {
    currentGenres.splice(index, 1);
  }
  return currentGenres;
}

function handleChangeYear(year, setQuery) {
  if (year.length === 4 && !Number.isNaN(year)) {
    setQuery({
      field: 'year',
      value: year
    });
  } else if (year === '') {
    setQuery({
      field: 'year',
      value: null
    });
  }
}

var Filter = function Filter(props) {
  var genres = props.genres,
      setQuery = props.setQuery,
      query = props.query,
      show = props.show;


  if (!show) {
    return null;
  }

  var sortIconClass = query.sortBy.split('.')[1] === 'desc' ? 'down' : 'up';

  var sortOptions = _actionTypes.SORT_OPTIONS.map(function (sort) {
    var key = sort.name.replace(/ /g, '_').toLocaleLowerCase();
    return _react2.default.createElement(
      'option',
      { key: key, value: key + '.' + sort.value },
      sort.name
    );
  });

  var genreOptions = genres.map(function (g) {
    return _react2.default.createElement(
      'option',
      { key: g.id, value: g.id, className: query.withGenres.indexOf('' + g.id) === -1 ? '' : 'selected' },
      g.name
    );
  });

  return _react2.default.createElement(
    'div',
    { className: 'row sticky-top bg-white mb-2 pt-2 shadow-sm d-none d-lg-flex' },
    _react2.default.createElement(
      'div',
      { className: 'col-12 col-sm-6 col-md-3 mb-2' },
      _react2.default.createElement('input', {
        type: 'text',
        placeholder: 'Search',
        className: 'form-control filter-input',
        value: query.searchText,
        onChange: function onChange($event) {
          return setQuery({ field: 'searchText', value: $event.target.value });
        }
      })
    ),
    _react2.default.createElement(
      'div',
      { className: 'col-12 col-sm-6 col-md-3 mb-2' },
      _react2.default.createElement(
        'select',
        {
          name: 'genre',
          className: 'form-control filter-input',
          onChange: function onChange($event) {
            return setQuery({ field: 'withGenres', value: addGenreId($event.target.value, query.withGenres) });
          }
        },
        _react2.default.createElement(
          'option',
          { value: '' },
          'Genres'
        ),
        genreOptions
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'col-12 col-sm-6 col-md-3 mb-2' },
      _react2.default.createElement(
        'div',
        { className: 'input-group' },
        _react2.default.createElement(
          'select',
          {
            name: 'sortBy',
            className: 'form-control filter-input',
            id: 'sortOptionSelect',
            'aria-label': 'Sort options',
            value: query.sortBy,
            onChange: function onChange($event) {
              return setQuery({ field: 'sortBy', value: $event.target.value });
            }
          },
          _react2.default.createElement(
            'option',
            { value: '' },
            'Sort By'
          ),
          sortOptions
        ),
        _react2.default.createElement(
          'div',
          { className: 'input-group-append' },
          _react2.default.createElement(
            'button',
            {
              type: 'button',
              className: 'btn btn-outline-secondary filter-input-button',
              onClick: function onClick() {
                return setQuery(switchSortQuery(query.sortBy));
              }
            },
            _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: 'sort-amount-' + sortIconClass })
          )
        )
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'col-12 col-sm-6 col-md-3 mb-2' },
      _react2.default.createElement('input', {
        type: 'text',
        placeholder: 'Year',
        className: 'form-control filter-input',
        onChange: function onChange($event) {
          return handleChangeYear($event.target.value, setQuery);
        }
      })
    )
  );
};

Filter.defaultProps = {
  show: true
};

Filter.propTypes = {
  genres: _propTypes2.default.arrayOf(_propShapes.GenreShape).isRequired,
  query: _propShapes.FilterShape.isRequired,
  setQuery: _propTypes2.default.func.isRequired,
  show: _propTypes2.default.bool
};

exports.default = Filter;

/***/ }),

/***/ "./app/assets/javascript/app/components/Footer/Footer.scss":
/*!*****************************************************************!*\
  !*** ./app/assets/javascript/app/components/Footer/Footer.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./app/assets/javascript/app/components/Footer/index.jsx":
/*!***************************************************************!*\
  !*** ./app/assets/javascript/app/components/Footer/index.jsx ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

__webpack_require__(/*! ./Footer.scss */ "./app/assets/javascript/app/components/Footer/Footer.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Footer = function Footer() {
  return _react2.default.createElement(
    'footer',
    { className: 'footer' },
    _react2.default.createElement(
      'div',
      { className: 'container' },
      _react2.default.createElement(
        'div',
        { className: 'row py-5' },
        _react2.default.createElement(
          'div',
          { className: 'col-12 col-sm-12 col-md-4' },
          _react2.default.createElement(
            'h5',
            null,
            'About Us'
          ),
          _react2.default.createElement(
            'p',
            null,
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
          ),
          _react2.default.createElement(
            'h5',
            null,
            'Social'
          ),
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col' },
              _react2.default.createElement(
                'button',
                { type: 'button', className: 'btn btn-outline-success btn-block' },
                'facebook'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'col' },
              _react2.default.createElement(
                'button',
                { type: 'button', className: 'btn btn-outline-success btn-block' },
                'twitter'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'col' },
              _react2.default.createElement(
                'button',
                { type: 'button', className: 'btn btn-outline-success btn-block' },
                'instagram'
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'col-12 col-sm-12 col-md-4' },
          _react2.default.createElement(
            'h5',
            null,
            'Last Reviews'
          ),
          _react2.default.createElement(
            'ul',
            { className: 'list-unstyled' },
            _react2.default.createElement(
              'li',
              { className: 'media' },
              _react2.default.createElement(
                'div',
                { className: 'media-body' },
                _react2.default.createElement(
                  'h6',
                  { className: 'mt-0 mb-1' },
                  'List-based media object'
                ),
                'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus...'
              )
            ),
            _react2.default.createElement(
              'li',
              { className: 'media my-4' },
              _react2.default.createElement(
                'div',
                { className: 'media-body' },
                _react2.default.createElement(
                  'h6',
                  { className: 'mt-0 mb-1' },
                  'List-based media object'
                ),
                'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus...'
              )
            ),
            _react2.default.createElement(
              'li',
              { className: 'media' },
              _react2.default.createElement(
                'div',
                { className: 'media-body' },
                _react2.default.createElement(
                  'h6',
                  { className: 'mt-0 mb-1' },
                  'List-based media object'
                ),
                'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus...'
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'col-12 col-sm-12 col-md-4' },
          _react2.default.createElement(
            'h5',
            null,
            'Contact'
          ),
          _react2.default.createElement(
            'p',
            null,
            '+255 000 00 00 00'
          ),
          _react2.default.createElement(
            'p',
            null,
            'info@vissne.com'
          ),
          _react2.default.createElement(
            'h5',
            { className: 'mt-2' },
            'Last Updates'
          ),
          _react2.default.createElement(
            'ul',
            { className: 'list-group list-group-flush' },
            _react2.default.createElement(
              'li',
              { className: 'list-group-item' },
              'Add common filter for movies'
            ),
            _react2.default.createElement(
              'li',
              { className: 'list-group-item' },
              'Google auth options is completed'
            ),
            _react2.default.createElement(
              'li',
              { className: 'list-group-item' },
              'Fixed Facebook auth issues'
            )
          )
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'row d-flex justify-content-center mb-1' },
        _react2.default.createElement(
          'span',
          null,
          'Copyright \xA9 2019 Vissne'
        )
      )
    )
  );
};

exports.default = Footer;

/***/ }),

/***/ "./app/assets/javascript/app/components/Menu.jsx":
/*!*******************************************************!*\
  !*** ./app/assets/javascript/app/components/Menu.jsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _reactFontawesome = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Menu = function Menu(_ref) {
  var path = _ref.path,
      items = _ref.items;

  var menuItems = items.map(function (m) {
    return _react2.default.createElement(
      'li',
      { className: 'nav-item', key: m.path },
      _react2.default.createElement(
        _reactRouterDom.Link,
        {
          className: 'nav-link ' + (m.path === path ? 'active' : ''),
          to: m.path
        },
        _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: m.icon }),
        _react2.default.createElement(
          'span',
          { className: 'ml-2' },
          m.name
        )
      )
    );
  });

  return _react2.default.createElement(
    'ul',
    { className: 'nav nav-tabs justify-content-center' },
    menuItems
  );
};

Menu.propTypes = {
  path: _propTypes2.default.string.isRequired,
  items: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    path: _propTypes2.default.string.isRequired,
    icon: _propTypes2.default.string.isRequired,
    name: _propTypes2.default.string.isRequired
  })).isRequired
};

exports.default = Menu;

/***/ }),

/***/ "./app/assets/javascript/app/components/Modal/Modal.scss":
/*!***************************************************************!*\
  !*** ./app/assets/javascript/app/components/Modal/Modal.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./app/assets/javascript/app/components/Modal/index.jsx":
/*!**************************************************************!*\
  !*** ./app/assets/javascript/app/components/Modal/index.jsx ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

__webpack_require__(/*! ./Modal.scss */ "./app/assets/javascript/app/components/Modal/Modal.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Modal = function Modal(props) {
  var title = props.title,
      cancel = props.cancel,
      submit = props.submit,
      children = props.children,
      show = props.show;


  var className = show ? 'show d-block' : '';
  var submitButton = submit ? _react2.default.createElement(
    'button',
    { type: 'button', className: 'btn btn-primary', onClick: submit },
    'Save'
  ) : null;

  return _react2.default.createElement(
    'div',
    { className: 'modal fade ' + className, tabIndex: '-1', role: 'dialog', 'aria-hidden': 'true', 'data-backdrop': true },
    _react2.default.createElement(
      'div',
      { className: 'modal-dialog modal-dialog-scrollable', role: 'dialog' },
      _react2.default.createElement(
        'div',
        { className: 'modal-content' },
        _react2.default.createElement(
          'div',
          { className: 'modal-header' },
          _react2.default.createElement(
            'h5',
            { className: 'modal-title' },
            title
          ),
          _react2.default.createElement(
            'button',
            { type: 'button', className: 'close', 'data-dismiss': 'modal', 'aria-label': 'Close', onClick: cancel },
            _react2.default.createElement(
              'span',
              { 'aria-hidden': 'true' },
              '\xD7'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'modal-body' },
          children
        ),
        _react2.default.createElement(
          'div',
          { className: 'modal-footer' },
          _react2.default.createElement(
            'button',
            { type: 'button', className: 'btn btn-secondary', 'data-dismiss': 'modal', onClick: cancel },
            'Close'
          ),
          submitButton
        )
      )
    )
  );
};

Modal.defaultProps = {
  show: false
};

Modal.propTypes = {
  title: _propTypes2.default.string.isRequired,
  cancel: _propTypes2.default.func.isRequired,
  submit: _propTypes2.default.func.isRequired,
  children: _propTypes2.default.instanceOf(Object).isRequired,
  show: _propTypes2.default.bool
};

exports.default = Modal;

/***/ }),

/***/ "./app/assets/javascript/app/components/MovieCard/MovieCard.scss":
/*!***********************************************************************!*\
  !*** ./app/assets/javascript/app/components/MovieCard/MovieCard.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./app/assets/javascript/app/components/MovieCard/index.jsx":
/*!******************************************************************!*\
  !*** ./app/assets/javascript/app/components/MovieCard/index.jsx ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Poster = __webpack_require__(/*! ../Poster */ "./app/assets/javascript/app/components/Poster.jsx");

var _Poster2 = _interopRequireDefault(_Poster);

__webpack_require__(/*! ./MovieCard.scss */ "./app/assets/javascript/app/components/MovieCard/MovieCard.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MovieCard = function MovieCard(props) {
  var id = props.id,
      title = props.title,
      image = props.image,
      rate = props.rate,
      slug = props.slug;


  return _react2.default.createElement(
    'div',
    { className: 'movie-card h-100 w-100 rounded-0 d-flex align-items-center justify-content-center img-thumbnail' },
    _react2.default.createElement(
      _reactRouterDom.Link,
      { to: 'movie/' + slug + '/' + id, className: 'w-100' },
      _react2.default.createElement(
        'span',
        { className: 'badge rating-tag shadow-sm d-flex flex-column' },
        rate
      ),
      _react2.default.createElement(_Poster2.default, { src: image, alt: title })
    )
  );
};

MovieCard.propTypes = {
  id: _propTypes2.default.number.isRequired,
  title: _propTypes2.default.string.isRequired,
  image: _propTypes2.default.string.isRequired,
  rate: _propTypes2.default.number.isRequired,
  slug: _propTypes2.default.string.isRequired
};

exports.default = MovieCard;

/***/ }),

/***/ "./app/assets/javascript/app/components/MovieList.jsx":
/*!************************************************************!*\
  !*** ./app/assets/javascript/app/components/MovieList.jsx ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _propShapes = __webpack_require__(/*! ../constants/prop-shapes */ "./app/assets/javascript/app/constants/prop-shapes.js");

var _MovieCard = __webpack_require__(/*! ./MovieCard */ "./app/assets/javascript/app/components/MovieCard/index.jsx");

var _MovieCard2 = _interopRequireDefault(_MovieCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MovieList = function MovieList(_ref) {
  var movies = _ref.movies;

  var list = movies.map(function (movie) {
    return _react2.default.createElement(
      'div',
      { key: movie.id, className: 'col-12 col-sm-6 col-md-4 col-lg-2 mb-2 d-flex justify-content-center' },
      _react2.default.createElement(_MovieCard2.default, {
        id: movie.id,
        image: movie.poster,
        title: movie.title,
        rate: movie.voteAverage,
        slug: movie.slug
      })
    );
  });

  return _react2.default.createElement(
    'div',
    { className: 'row' },
    list
  );
};

MovieList.propTypes = {
  movies: _propTypes2.default.arrayOf(_propShapes.MovieShape).isRequired
};

exports.default = MovieList;

/***/ }),

/***/ "./app/assets/javascript/app/components/Navbar/Navbar.scss":
/*!*****************************************************************!*\
  !*** ./app/assets/javascript/app/components/Navbar/Navbar.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./app/assets/javascript/app/components/Navbar/index.jsx":
/*!***************************************************************!*\
  !*** ./app/assets/javascript/app/components/Navbar/index.jsx ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _reactFontawesome = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _propShapes = __webpack_require__(/*! ../../constants/prop-shapes */ "./app/assets/javascript/app/constants/prop-shapes.js");

__webpack_require__(/*! ./Navbar.scss */ "./app/assets/javascript/app/components/Navbar/Navbar.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Navbar = function Navbar(props) {
  var user = props.user,
      isLoggedIn = props.isLoggedIn,
      pathName = props.pathName;


  var loginButton = isLoggedIn ? _react2.default.createElement(
    _react.Fragment,
    null,
    _react2.default.createElement(
      'li',
      { className: 'nav-item ' },
      _react2.default.createElement(
        _reactRouterDom.Link,
        { className: 'nav-link', to: '/profile/account', title: 'Profile' },
        _react2.default.createElement(
          'span',
          { className: 'mr-2' },
          user.userName
        ),
        _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: 'user' })
      )
    ),
    _react2.default.createElement(
      'li',
      { className: 'nav-item' },
      _react2.default.createElement(
        'a',
        { className: 'nav-link', href: '/logout', title: 'Logout' },
        _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: 'sign-out-alt' })
      )
    )
  ) : _react2.default.createElement(
    'li',
    { className: 'nav-item' },
    _react2.default.createElement(
      _reactRouterDom.Link,
      { to: '/auth', className: 'nav-link' },
      'login'
    )
  );

  return _react2.default.createElement(
    'nav',
    { className: 'navbar navbar-expand-lg navbar-dark bg-dark' },
    _react2.default.createElement(
      _reactRouterDom.Link,
      { className: 'navbar-brand', to: '/' },
      _react2.default.createElement('img', {
        src: vissne.cdn + '/images/logo.png',
        alt: 'Vissne',
        height: '30',
        className: 'mx-auto d-block'
      })
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'button',
        {
          className: 'navbar-toggler',
          type: 'button',
          id: 'filterButton'
        },
        _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: 'filter' })
      ),
      _react2.default.createElement(
        'button',
        {
          className: 'navbar-toggler',
          type: 'button',
          'data-toggle': 'collapse',
          'data-target': '#navbarSupportedContent',
          'aria-controls': 'navbarSupportedContent',
          'aria-expanded': 'false',
          'aria-label': 'Toggle navigation'
        },
        _react2.default.createElement('span', { className: 'navbar-toggler-icon' })
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'collapse navbar-collapse', id: 'navbarSupportedContent' },
      _react2.default.createElement(
        'ul',
        { className: 'navbar-nav mr-auto' },
        _react2.default.createElement(
          'li',
          { className: 'nav-item' },
          _react2.default.createElement(
            _reactRouterDom.Link,
            {
              className: 'nav-link ' + (pathName === '/in-theaters' ? 'active' : ''),
              to: '/in-theaters'
            },
            'in theaters'
          )
        ),
        _react2.default.createElement(
          'li',
          { className: 'nav-item' },
          _react2.default.createElement(
            _reactRouterDom.Link,
            {
              className: 'nav-link ' + (pathName === '/coming-soon' ? 'active' : ''),
              to: '/coming-soon'
            },
            'coming soong'
          )
        )
      ),
      _react2.default.createElement(
        'ul',
        { className: 'navbar-nav my-auto' },
        loginButton
      )
    )
  );
};

Navbar.defaultProps = {
  isLoggedIn: false,
  user: {},
  pathName: '/'
};

Navbar.propTypes = {
  isLoggedIn: _propTypes2.default.bool,
  user: _propShapes.UserShape,
  pathName: _propTypes2.default.string
};

exports.default = Navbar;

/***/ }),

/***/ "./app/assets/javascript/app/components/NotFound/NotFound.scss":
/*!*********************************************************************!*\
  !*** ./app/assets/javascript/app/components/NotFound/NotFound.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./app/assets/javascript/app/components/NotFound/index.jsx":
/*!*****************************************************************!*\
  !*** ./app/assets/javascript/app/components/NotFound/index.jsx ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

__webpack_require__(/*! ./NotFound.scss */ "./app/assets/javascript/app/components/NotFound/NotFound.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NotFound = function NotFound() {
  return _react2.default.createElement(
    'div',
    { className: 'page-not-found' },
    _react2.default.createElement('img', { src: vissne.cdn + '/images/ong.png', alt: '404' }),
    _react2.default.createElement(
      'h4',
      null,
      '404'
    ),
    _react2.default.createElement(
      'h5',
      null,
      'Page not found'
    ),
    _react2.default.createElement(
      'p',
      null,
      'We are sorry. The page you are looking for was moved, removed, renamed or might never existed.'
    ),
    _react2.default.createElement(
      'a',
      { href: '/', className: 'button is-primary' },
      'GO TO HOME'
    )
  );
};

exports.default = NotFound;

/***/ }),

/***/ "./app/assets/javascript/app/components/PageLoading.jsx":
/*!**************************************************************!*\
  !*** ./app/assets/javascript/app/components/PageLoading.jsx ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Spinner = __webpack_require__(/*! ./Spinner */ "./app/assets/javascript/app/components/Spinner.jsx");

var _Spinner2 = _interopRequireDefault(_Spinner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PageLoading = function PageLoading(_ref) {
  var show = _ref.show;

  if (!show) {
    return null;
  }

  return _react2.default.createElement(
    'div',
    { className: 'position-fixed top-0 left-0 bottom-0 bg-light d-flex justify-content-center align-items-center w-100 h-100' },
    _react2.default.createElement(_Spinner2.default, { show: true, size: 'lg', addionalClass: 'mr-2' }),
    'Loading...'
  );
};

PageLoading.propTypes = {
  show: _propTypes2.default.bool.isRequired
};

exports.default = PageLoading;

/***/ }),

/***/ "./app/assets/javascript/app/components/Pagination.jsx":
/*!*************************************************************!*\
  !*** ./app/assets/javascript/app/components/Pagination.jsx ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactFontawesome = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var handleClick = function handleClick(page, currentPage, totalPage) {
  var result = 1;

  if (Number.isInteger(page)) {
    return { page: page };
  }

  if (page === 'prev') {
    var newPage = currentPage - 1;
    result = newPage === 0 ? 1 : newPage;
  } else if (page === 'next') {
    result = currentPage + 1 > totalPage ? totalPage : currentPage + 1;
  }

  return { page: result };
};

var generatePageNumbers = function generatePageNumbers(options) {
  var page = options.page,
      limit = options.limit,
      total = options.total,
      buttonCount = options.buttonCount;

  var pageNumbers = [];
  var totalPage = Math.floor(total / limit);
  var bc = Math.ceil(buttonCount / 2);

  for (var i = page - (bc - 1); i < page + bc; i += 1) {
    if (i > 0 && i <= totalPage) {
      pageNumbers.push(i);
    }
  }

  return pageNumbers;
};

var Pagination = function Pagination(_ref) {
  var options = _ref.options;
  var page = options.page,
      onPaginate = options.onPaginate,
      limit = options.limit,
      total = options.total;


  var pageNumbers = generatePageNumbers(options);
  var totalPage = Math.floor(total / limit);

  if (pageNumbers.length < 2) {
    return _react2.default.createElement('span', null);
  }

  var pageButtons = pageNumbers.map(function (pn) {
    return _react2.default.createElement(
      'li',
      { className: 'page-item  ' + (pn === page ? 'active' : '') },
      _react2.default.createElement(
        'button',
        {
          className: 'page-link rounded-0',
          type: 'button',
          onClick: function onClick() {
            return pn !== page ? onPaginate(handleClick(pn)) : '';
          }
        },
        pn
      )
    );
  });

  return _react2.default.createElement(
    'nav',
    { 'aria-label': 'Pagination' },
    _react2.default.createElement(
      'ul',
      { className: 'pagination' },
      _react2.default.createElement(
        'li',
        { className: 'page-item ' + (page === 1 ? 'disabled' : '') },
        _react2.default.createElement(
          'button',
          {
            className: 'page-link rounded-0',
            type: 'button',
            onClick: function onClick() {
              return onPaginate(handleClick('prev', page));
            },
            disabled: page === 1
          },
          _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: 'angle-left' })
        )
      ),
      pageButtons,
      _react2.default.createElement(
        'li',
        { className: 'page-item ' + (page === totalPage ? 'disabled' : '') },
        _react2.default.createElement(
          'button',
          {
            className: 'page-link rounded-0',
            type: 'button',
            onClick: function onClick() {
              return onPaginate(handleClick('next', page));
            }
          },
          _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: 'angle-right' })
        )
      )
    )
  );
};

Pagination.defaultProps = {
  options: {
    buttonCount: 3,
    total: 0,
    page: 1,
    limit: 10
  }
};

Pagination.propTypes = {
  options: _propTypes2.default.shape({
    total: _propTypes2.default.number,
    limit: _propTypes2.default.number,
    page: _propTypes2.default.number,
    onPaginate: _propTypes2.default.func,
    buttonCount: _propTypes2.default.number
  })
};

exports.default = Pagination;

/***/ }),

/***/ "./app/assets/javascript/app/components/Poster.jsx":
/*!*********************************************************!*\
  !*** ./app/assets/javascript/app/components/Poster.jsx ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function imageOnLoad() {}

function imageOnError() {
  this.src = vissne.defaultCoverImagePath;
}

var Poster = function Poster(_ref) {
  var src = _ref.src,
      alt = _ref.alt;
  return _react2.default.createElement(
    'div',
    { className: 'h-100 w-100 d-flex align-items-center justify-content-center' },
    _react2.default.createElement('img', {
      className: 'img-fluid',
      src: '' + src,
      onLoad: imageOnLoad,
      onError: imageOnError,
      alt: alt
    })
  );
};

Poster.propTypes = {
  src: _propTypes2.default.string.isRequired,
  alt: _propTypes2.default.string.isRequired
};

exports.default = Poster;

/***/ }),

/***/ "./app/assets/javascript/app/components/ProfileContainer.jsx":
/*!*******************************************************************!*\
  !*** ./app/assets/javascript/app/components/ProfileContainer.jsx ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ProfileContainer;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _Menu = __webpack_require__(/*! ./Menu */ "./app/assets/javascript/app/components/Menu.jsx");

var _Menu2 = _interopRequireDefault(_Menu);

var _PageLoading = __webpack_require__(/*! ./PageLoading */ "./app/assets/javascript/app/components/PageLoading.jsx");

var _PageLoading2 = _interopRequireDefault(_PageLoading);

var _profileMenu = __webpack_require__(/*! ../constants/profile-menu */ "./app/assets/javascript/app/constants/profile-menu.js");

var _profileMenu2 = _interopRequireDefault(_profileMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ProfileContainer(props) {
  var children = props.children,
      path = props.path,
      pageLoading = props.pageLoading,
      user = props.user;


  if (pageLoading) {
    return _react2.default.createElement(_PageLoading2.default, { show: true });
  }

  return _react2.default.createElement(
    'div',
    { className: 'container' },
    _react2.default.createElement(
      'div',
      { className: 'row' },
      _react2.default.createElement(
        'div',
        { className: 'col d-flex justify-content-center' },
        _react2.default.createElement(
          'div',
          { className: 'position-relative' },
          _react2.default.createElement(
            'button',
            {
              type: 'button',
              className: 'btn btn-link rounded-circle avatar-button'
            },
            _react2.default.createElement('img', {
              src: user.avatar || vissne.cdn + '/ucontent/avatar/default-avatar.jpg',
              className: 'img-fluid rounded-circle border avatar',
              alt: 'Avatar',
              id: 'avatar'
            })
          )
        )
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'row' },
      _react2.default.createElement(
        'div',
        { className: 'col d-flex justify-content-center' },
        _react2.default.createElement(
          'h5',
          null,
          '@' + user.userName
        )
      )
    ),
    _react2.default.createElement(_Menu2.default, { items: _profileMenu2.default, path: path }),
    _react2.default.createElement(
      'div',
      { className: 'row' },
      _react2.default.createElement(
        'div',
        { className: 'col' },
        children
      )
    )
  );
}

/***/ }),

/***/ "./app/assets/javascript/app/components/ProgressBar.jsx":
/*!**************************************************************!*\
  !*** ./app/assets/javascript/app/components/ProgressBar.jsx ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProgressBar = function ProgressBar(props) {
  var show = props.show,
      height = props.height;


  if (!show) {
    return null;
  }

  return _react2.default.createElement(
    'div',
    { className: 'progress', style: { height: height + 'px' } },
    _react2.default.createElement('div', {
      className: 'progress-bar progress-bar-striped progress-bar-animated',
      role: 'progressbar',
      'aria-valuenow': '75',
      'aria-valuemin': '0',
      'aria-valuemax': '100',
      style: { width: '100%' }
    })
  );
};

ProgressBar.defaultProps = {
  show: false,
  height: 2
};

ProgressBar.propTypes = {
  show: _propTypes2.default.bool,
  height: _propTypes2.default.number
};

exports.default = ProgressBar;

/***/ }),

/***/ "./app/assets/javascript/app/components/Spinner.jsx":
/*!**********************************************************!*\
  !*** ./app/assets/javascript/app/components/Spinner.jsx ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Spinner;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Spinner(props) {
  var show = props.show,
      size = props.size,
      kind = props.kind,
      color = props.color,
      addionalClass = props.addionalClass;


  if (!show) {
    return null;
  }

  return _react2.default.createElement(
    'div',
    { className: 'spinner-' + kind + ' spinner-' + kind + '-' + size + ' text-' + color + ' ' + addionalClass, role: 'status' },
    _react2.default.createElement(
      'span',
      { className: 'sr-only' },
      'Loading...'
    )
  );
}

Spinner.defaultProps = {
  show: false,
  size: 'sm',
  kind: 'grow',
  color: 'primary',
  addionalClass: ''
};

Spinner.propTypes = {
  show: _propTypes2.default.bool,
  addionalClass: _propTypes2.default.string,
  size: _propTypes2.default.oneOf(['sm', 'md', 'lg', 'xl']),
  kind: _propTypes2.default.oneOf(['border', 'grow']),
  color: _propTypes2.default.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'])
};

/***/ }),

/***/ "./app/assets/javascript/app/components/TableList/TableList.scss":
/*!***********************************************************************!*\
  !*** ./app/assets/javascript/app/components/TableList/TableList.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./app/assets/javascript/app/components/TableList/index.jsx":
/*!******************************************************************!*\
  !*** ./app/assets/javascript/app/components/TableList/index.jsx ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactFontawesome = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Pagination = __webpack_require__(/*! ../Pagination */ "./app/assets/javascript/app/components/Pagination.jsx");

var _Pagination2 = _interopRequireDefault(_Pagination);

var _Alert = __webpack_require__(/*! ../Alert */ "./app/assets/javascript/app/components/Alert.jsx");

var _Alert2 = _interopRequireDefault(_Alert);

__webpack_require__(/*! ./TableList.scss */ "./app/assets/javascript/app/components/TableList/TableList.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createHeader = function createHeader(fields) {
  var visibleFields = fields.filter(function (f) {
    return !f.hidden;
  }).map(function (f) {
    return _react2.default.createElement(
      'th',
      { scope: 'col' },
      f.title
    );
  });

  return _react2.default.createElement(
    'tr',
    null,
    visibleFields
  );
};

var createBody = function createBody(data, fields, selected, onSelect) {
  var tbody = [];

  data.forEach(function (item) {
    var itemFields = [];

    fields.forEach(function (field) {
      if (field.hidden) {
        return null;
      }

      var v = item[field.name];
      var value = field.format ? field.format(v) : v.toString();

      itemFields.push(_react2.default.createElement(
        'td',
        null,
        value
      ));
    });

    tbody.push(_react2.default.createElement(
      'tr',
      { className: '' + (item.id === selected.id ? 'selected' : ''), onClick: function onClick() {
          return onSelect(item);
        } },
      itemFields
    ));
  });

  return tbody;
};

var createPagination = function createPagination(options, dataLength) {
  if (!options) {
    return null;
  }

  return _react2.default.createElement(
    'div',
    { className: 'd-flex justify-content-between' },
    _react2.default.createElement(_Pagination2.default, { options: options }),
    _react2.default.createElement(
      'span',
      null,
      'Show ' + dataLength + ' result of ' + options.total
    )
  );
};

var TableList = function TableList(props) {
  var title = props.title,
      data = props.data,
      selected = props.selected,
      fields = props.fields,
      pagination = props.pagination,
      responsive = props.responsive,
      onCreate = props.onCreate,
      onEdit = props.onEdit,
      onDelete = props.onDelete,
      onSelect = props.onSelect;


  var btnGroup = _react2.default.createElement(
    'div',
    { className: 'btn-group w-100 ' + (!onCreate && !onEdit && !onDelete ? 'd-none' : ''), role: 'group', 'aria-label': 'crud' },
    _react2.default.createElement(
      'button',
      {
        type: 'button',
        className: 'btn btn-secondary rounded-0 btn-sm ' + (onCreate ? '' : 'd-none'),
        onClick: onCreate
      },
      _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: 'plus-square' }),
      _react2.default.createElement(
        'span',
        { className: 'ml-1' },
        'Create'
      )
    ),
    _react2.default.createElement(
      'button',
      {
        type: 'button',
        className: 'btn btn-secondary rounded-0 btn-sm ' + (onEdit ? '' : 'd-none'),
        onClick: onEdit
      },
      _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: 'edit' }),
      _react2.default.createElement(
        'span',
        { className: 'ml-1' },
        'Edit'
      )
    ),
    _react2.default.createElement(
      'button',
      {
        type: 'button',
        className: 'btn btn-secondary rounded-0 btn-sm ' + (onDelete ? '' : 'd-none'),
        onClick: onDelete
      },
      _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: 'trash' }),
      _react2.default.createElement(
        'span',
        { className: 'ml-1' },
        'Delete'
      )
    )
  );

  if (!data || data.length === 0) {
    return _react2.default.createElement(
      'div',
      { className: 'row mt-2' },
      _react2.default.createElement(
        'div',
        { className: 'col' },
        _react2.default.createElement(_Alert2.default, { message: 'There were no result.', kind: 'warning' }),
        _react2.default.createElement(
          'button',
          { onClick: onCreate, className: 'btn btn-outline-primary w-100 ' + (onCreate ? '' : 'd-none'), type: 'button' },
          'Add'
        )
      )
    );
  }

  var heads = createHeader(fields);
  var body = createBody(data, fields, selected, onSelect);
  var paginationButtons = createPagination(pagination, data.length);

  return _react2.default.createElement(
    'div',
    { className: 'row mt-2' },
    _react2.default.createElement(
      'div',
      { className: 'col' },
      _react2.default.createElement(
        'h4',
        null,
        title
      ),
      btnGroup,
      _react2.default.createElement(
        'table',
        { className: 'table v-table ' + (responsive ? 'table-responsive' : '') },
        _react2.default.createElement(
          'thead',
          null,
          heads
        ),
        _react2.default.createElement(
          'tbody',
          null,
          body
        )
      ),
      paginationButtons
    )
  );
};

TableList.defaultProps = {
  data: [],
  selected: {},
  fields: []
};

TableList.propTypes = {
  data: _propTypes2.default.instanceOf(Array),
  selected: _propTypes2.default.instanceOf(Object),
  fields: _propTypes2.default.instanceOf(Array)
};

exports.default = TableList;

/***/ }),

/***/ "./app/assets/javascript/app/components/Video/Video.scss":
/*!***************************************************************!*\
  !*** ./app/assets/javascript/app/components/Video/Video.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./app/assets/javascript/app/components/Video/index.jsx":
/*!**************************************************************!*\
  !*** ./app/assets/javascript/app/components/Video/index.jsx ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

__webpack_require__(/*! ./Video.scss */ "./app/assets/javascript/app/components/Video/Video.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Video = function Video(_ref) {
  var videoKey = _ref.videoKey;
  return _react2.default.createElement(
    'div',
    { className: 'video mb-2 embed-responsive embed-responsive-16by9' },
    _react2.default.createElement('iframe', {
      className: 'embed-responsive-item',
      title: 'Video',
      type: 'text/html',
      width: '640',
      height: '360',
      src: 'https://www.youtube.com/embed/' + videoKey + '?autoplay=0&origin=' + vissne.domain,
      frameBorder: '0',
      allowFullScreen: true
    })
  );
};

Video.propTypes = {
  videoKey: _propTypes2.default.string.isRequired
};

exports.default = Video;

/***/ }),

/***/ "./app/assets/javascript/app/constants/action-types.js":
/*!*************************************************************!*\
  !*** ./app/assets/javascript/app/constants/action-types.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// common
var LOADING = exports.LOADING = 'LOADING';
var TOGGLE_ALERT = exports.TOGGLE_ALERT = 'TOGGLE_ALERT';
var TOGGLE_FILTER = exports.TOGGLE_FILTER = 'TOGGLE_FILTER';

// auth
var SET_PAGE_LOADING_STATUS = exports.SET_PAGE_LOADING_STATUS = 'SET_PAGE_LOADING_STATUS';
var SET_LOADING_STATUS = exports.SET_LOADING_STATUS = 'SET_LOADING_STATUS';
var REGISTER = exports.REGISTER = 'REGISTER';
var SET_USER = exports.SET_USER = 'SET_USER';

// discover
var GET_MOVIES = exports.GET_MOVIES = 'GET_MOVIES';
var SET_MOVIES = exports.SET_MOVIES = 'SET_MOVIES';
var SET_GENRES = exports.SET_GENRES = 'SET_GENRES';
var SET_QUERY = exports.SET_QUERY = 'SET_QUERY';

// lists
var GET_LISTS_BY_CURRENT_USER = exports.GET_LISTS_BY_CURRENT_USER = 'GET_LISTS_BY_CURRENT_USER';
var CREATE_LIST = exports.CREATE_LIST = 'CREATE_LIST';
var DELETE_LIST = exports.DELETE_LIST = 'DELETE_LISTS';
var ADD_TO_LIST = exports.ADD_TO_LIST = 'ADD_TO_LIST';
var DELETE_FROM_LIST = exports.DELETE_FROM_LIST = 'DELETE_FROM_LIST';
var SET_LISTS = exports.SET_LISTS = 'SET_LISTS';
var SET_LIST_MOVIES = exports.SET_LIST_MOVIES = 'SET_LIST_MOVIES';

// movie detail
var SET_MOVIE_DETAIL = exports.SET_MOVIE_DETAIL = 'SET_MOVIE_DETAIL';

// profile
//  -- Account
var SET_ACCOUNT_DETAIL = exports.SET_ACCOUNT_DETAIL = 'SET_ACCOUNT_DETAIL';
var SET_UPLOADED_IMAGE = exports.SET_UPLOADED_IMAGE = 'SET_UPLOADED_IMAGE';

// constants
var SORT_OPTIONS = exports.SORT_OPTIONS = [{
  name: 'Popularity',
  value: 'desc'
}, {
  name: 'Release Date',
  value: 'desc'
}, {
  name: 'Revenue',
  value: 'desc'
}, {
  name: 'Primary Release Date',
  value: 'desc'
}, {
  name: 'Orginal Title',
  value: 'desc'
}, {
  name: 'Vote Average',
  value: 'desc'
}, {
  name: 'Vote Count',
  value: 'desc'
}];

/***/ }),

/***/ "./app/assets/javascript/app/constants/profile-menu.js":
/*!*************************************************************!*\
  !*** ./app/assets/javascript/app/constants/profile-menu.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var profileMenu = [{
  name: 'Account',
  icon: 'user',
  path: '/profile/account'
}, {
  name: 'Lists',
  icon: 'list',
  path: '/profile/lists'
}];

exports.default = profileMenu;

/***/ }),

/***/ "./app/assets/javascript/app/constants/prop-shapes.js":
/*!************************************************************!*\
  !*** ./app/assets/javascript/app/constants/prop-shapes.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FilterShape = exports.matchShape = exports.GenreShape = exports.CompanyShape = exports.CastShape = exports.MovieShape = exports.UserShape = undefined;

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserShape = exports.UserShape = _propTypes2.default.shape({
  id: _propTypes2.default.number,
  firstName: _propTypes2.default.string,
  lastName: _propTypes2.default.string,
  email: _propTypes2.default.string,
  fullName: _propTypes2.default.string,
  avatar: _propTypes2.default.string,
  userName: _propTypes2.default.string
});

var MovieShape = exports.MovieShape = _propTypes2.default.shape({
  title: _propTypes2.default.string,
  orginalTitle: _propTypes2.default.string,
  year: _propTypes2.default.string,
  vote_count: _propTypes2.default.number,
  vote_average: _propTypes2.default.number,
  release_date: _propTypes2.default.string,
  genreNames: _propTypes2.default.string,
  homepage: _propTypes2.default.string,
  tagline: _propTypes2.default.string,
  language: _propTypes2.default.string
});

var CastShape = exports.CastShape = _propTypes2.default.shape({
  id: _propTypes2.default.number.isRequired,
  name: _propTypes2.default.string.isRequired,
  character: _propTypes2.default.string.isRequired,
  profilePath: _propTypes2.default.string.isRequired
});

var CompanyShape = exports.CompanyShape = _propTypes2.default.shape({
  id: _propTypes2.default.number,
  logo: _propTypes2.default.string,
  name: _propTypes2.default.string
});

var GenreShape = exports.GenreShape = _propTypes2.default.shape({
  id: _propTypes2.default.number.isRequired,
  name: _propTypes2.default.string.isRequired
});

var matchShape = exports.matchShape = _propTypes2.default.shape({
  id: _propTypes2.default.number.isRequired,
  name: _propTypes2.default.string.isRequired
});

var FilterShape = exports.FilterShape = _propTypes2.default.shape({
  sort: _propTypes2.default.string,
  searchText: _propTypes2.default.string,
  genres: _propTypes2.default.arrayOf.string,
  crews: _propTypes2.default.arrayOf.string,
  casts: _propTypes2.default.arrayOf.string,
  voteAverage: _propTypes2.default.shape({
    lte: _propTypes2.default.number,
    gte: _propTypes2.default.number
  }),
  releaseYear: _propTypes2.default.shape({
    lte: _propTypes2.default.number,
    gte: _propTypes2.default.number
  })
});

/***/ }),

/***/ "./app/assets/javascript/app/containers/Account/Account.jsx":
/*!******************************************************************!*\
  !*** ./app/assets/javascript/app/containers/Account/Account.jsx ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Navbar = __webpack_require__(/*! ../../components/Navbar */ "./app/assets/javascript/app/components/Navbar/index.jsx");

var _Navbar2 = _interopRequireDefault(_Navbar);

var _ProfileContainer = __webpack_require__(/*! ../../components/ProfileContainer */ "./app/assets/javascript/app/components/ProfileContainer.jsx");

var _ProfileContainer2 = _interopRequireDefault(_ProfileContainer);

var _propShapes = __webpack_require__(/*! ../../constants/prop-shapes */ "./app/assets/javascript/app/constants/prop-shapes.js");

var _Spinner = __webpack_require__(/*! ../../components/Spinner */ "./app/assets/javascript/app/components/Spinner.jsx");

var _Spinner2 = _interopRequireDefault(_Spinner);

__webpack_require__(/*! ./Account.scss */ "./app/assets/javascript/app/containers/Account/Account.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Account = function (_Component) {
  _inherits(Account, _Component);

  function Account(props) {
    _classCallCheck(this, Account);

    var _this = _possibleConstructorReturn(this, (Account.__proto__ || Object.getPrototypeOf(Account)).call(this, props));

    props.setPageLoadingStatus(true);

    _this.state = {
      editMode: false,
      userForm: {},
      password: {},
      validation: {
        userName: {},
        email: {},
        oldPassword: {},
        newPassword: {},
        confirmNewPassword: {},
        firstName: {},
        lastName: {}
      }
    };

    _this.handleChange = _this.handleChange.bind(_this);
    _this.changePassword = _this.changePassword.bind(_this);
    return _this;
  }

  _createClass(Account, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var getAccountDetail = this.props.getAccountDetail;

      getAccountDetail();
    }
  }, {
    key: 'handleChange',
    value: function handleChange(_ref, field) {
      var target = _ref.target;
      var value = target.value,
          name = target.name;
      var state = this.state;

      state[field][name] = value;
      this.state = state;
      this.forceUpdate();
    }
  }, {
    key: 'changePassword',
    value: function changePassword() {
      var password = this.state.password;
      var _props = this.props,
          toggleAlertDialog = _props.toggleAlertDialog,
          changePassword = _props.changePassword;


      if (password.newPassword !== password.confirmNewPassword) {
        return toggleAlertDialog({
          kind: 'danger',
          message: 'Passwords don\'t match.'
        });
      }

      if (password.oldPassword === password.newPassword) {
        return toggleAlertDialog({
          kind: 'danger',
          message: 'Password cannot be the same with old password.'
        });
      }

      changePassword(password);
      this.setState({ password: {} });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props2 = this.props,
          match = _props2.match,
          user = _props2.user,
          loading = _props2.loading,
          pageLoading = _props2.pageLoading,
          updateUser = _props2.updateUser;
      var _state = this.state,
          userForm = _state.userForm,
          validation = _state.validation,
          password = _state.password;


      if (user && user.id && !userForm.id) {
        this.setState({ userForm: user });
      }

      return _react2.default.createElement(
        _react.Fragment,
        null,
        _react2.default.createElement(_Navbar2.default, { user: user }),
        _react2.default.createElement(
          _ProfileContainer2.default,
          { user: user, path: match.path, pageLoading: pageLoading },
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col m-4' },
              _react2.default.createElement(
                'h4',
                null,
                'Account'
              ),
              _react2.default.createElement(
                'form',
                { action: '' },
                _react2.default.createElement(
                  'div',
                  { className: 'forum-group mb-2' },
                  _react2.default.createElement(
                    'label',
                    { htmlFor: 'userNameInput' },
                    'User Name'
                  ),
                  _react2.default.createElement('input', {
                    type: 'text',
                    name: 'userName',
                    className: 'form-control ' + (validation.userName.class || ''),
                    value: userForm.userName,
                    id: 'userNameInput',
                    onChange: function onChange(e) {
                      return _this2.handleChange(e, 'userForm');
                    }
                  }),
                  validation.userName.error
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'forum-group mb-2' },
                  _react2.default.createElement(
                    'label',
                    { htmlFor: 'firstNameInput' },
                    'First Name'
                  ),
                  _react2.default.createElement('input', {
                    type: 'text',
                    name: 'firstName',
                    className: 'form-control ' + (validation.firstName.class || ''),
                    value: userForm.firstName,
                    id: 'firstNameInput',
                    onChange: function onChange(e) {
                      return _this2.handleChange(e, 'userForm');
                    }
                  }),
                  validation.firstName.error
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'forum-group mb-2' },
                  _react2.default.createElement(
                    'label',
                    { htmlFor: 'lastNameInput' },
                    'Last Name'
                  ),
                  _react2.default.createElement('input', {
                    type: 'text',
                    name: 'lastName',
                    className: 'form-control ' + (validation.lastName.class || ''),
                    value: userForm.lastName,
                    id: 'lastNameInput',
                    onChange: function onChange(e) {
                      return _this2.handleChange(e, 'userForm');
                    }
                  }),
                  validation.lastName.error
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'forum-group mb-2' },
                  _react2.default.createElement(
                    'label',
                    { htmlFor: 'emailInput' },
                    'Email'
                  ),
                  _react2.default.createElement('input', {
                    type: 'email',
                    name: 'email',
                    className: 'form-control ' + (validation.email.class || ''),
                    value: userForm.email,
                    id: 'emailInput',
                    onChange: function onChange(e) {
                      return _this2.handleChange(e, 'userForm');
                    }
                  }),
                  validation.email.error
                ),
                _react2.default.createElement(
                  'button',
                  {
                    className: 'btn btn-outline-success btn-block',
                    type: 'button',
                    onClick: function onClick() {
                      return updateUser(userForm);
                    },
                    disabled: loading
                  },
                  _react2.default.createElement(_Spinner2.default, { show: loading, kind: 'border', color: 'success' }),
                  _react2.default.createElement(
                    'span',
                    { className: loading ? 'd-none' : 'd-block' },
                    'Update'
                  )
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'col m-4' },
              _react2.default.createElement(
                'h4',
                null,
                'Change Password'
              ),
              _react2.default.createElement(
                'form',
                { action: '' },
                _react2.default.createElement(
                  'div',
                  { className: 'forum-group mb-2' },
                  _react2.default.createElement(
                    'label',
                    { htmlFor: 'oldPasswordInput' },
                    'Old Password'
                  ),
                  _react2.default.createElement('input', {
                    type: 'password',
                    name: 'oldPassword',
                    className: 'form-control ' + (validation.oldPassword.class || ''),
                    value: password.oldPassword,
                    id: 'oldPasswordInput',
                    onChange: function onChange(e) {
                      return _this2.handleChange(e, 'password');
                    }
                  }),
                  validation.oldPassword.error
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'forum-group mb-2' },
                  _react2.default.createElement(
                    'label',
                    { htmlFor: 'newPasswordInput' },
                    'New Password'
                  ),
                  _react2.default.createElement('input', {
                    type: 'password',
                    name: 'newPassword',
                    className: 'form-control ' + (validation.newPassword.class || ''),
                    value: password.newPassword,
                    id: 'newPasswordInput',
                    onChange: function onChange(e) {
                      return _this2.handleChange(e, 'password');
                    }
                  }),
                  validation.newPassword.error
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'forum-group mb-2' },
                  _react2.default.createElement(
                    'label',
                    { htmlFor: 'confirmNewPasswordInput' },
                    'Confirm New Password'
                  ),
                  _react2.default.createElement('input', {
                    type: 'password',
                    name: 'confirmNewPassword',
                    className: 'form-control ' + (validation.confirmNewPassword.class || ''),
                    value: password.confirmNewPassword,
                    id: 'confirmNewPasswordInput',
                    onChange: function onChange(e) {
                      return _this2.handleChange(e, 'password');
                    }
                  }),
                  validation.confirmNewPassword.error
                ),
                _react2.default.createElement(
                  'button',
                  {
                    className: 'btn btn-outline-primary btn-block',
                    type: 'button',
                    disabled: loading,
                    onClick: this.changePassword
                  },
                  'Change Password'
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Account;
}(_react.Component);

exports.default = Account;


Account.propTypes = {
  user: _propShapes.UserShape.isRequired,
  match: _propShapes.matchShape.isRequired,
  getAccountDetail: _propTypes2.default.func.isRequired,
  pageLoading: _propTypes2.default.bool.isRequired,
  loading: _propTypes2.default.bool.isRequired,
  setPageLoadingStatus: _propTypes2.default.func.isRequired,
  updateUser: _propTypes2.default.func.isRequired,
  toggleAlertDialog: _propTypes2.default.func.isRequired,
  changePassword: _propTypes2.default.func.isRequired
};

/***/ }),

/***/ "./app/assets/javascript/app/containers/Account/Account.scss":
/*!*******************************************************************!*\
  !*** ./app/assets/javascript/app/containers/Account/Account.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./app/assets/javascript/app/containers/Account/index.js":
/*!***************************************************************!*\
  !*** ./app/assets/javascript/app/containers/Account/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _Account = __webpack_require__(/*! ./Account */ "./app/assets/javascript/app/containers/Account/Account.jsx");

var _Account2 = _interopRequireDefault(_Account);

var _account = __webpack_require__(/*! ../../actions/account */ "./app/assets/javascript/app/actions/account.js");

var _common = __webpack_require__(/*! ../../actions/common */ "./app/assets/javascript/app/actions/common.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    pageLoading: state.common.pageLoading,
    loading: state.common.loading,
    uploadedFile: state.common.uploadedFile,
    user: state.account.user
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getAccountDetail: function getAccountDetail() {
      return dispatch((0, _account.getAccountDetail)());
    },
    setPageLoadingStatus: function setPageLoadingStatus(status) {
      return dispatch((0, _common.setPageLoadingStatus)(status));
    },
    updateUser: function updateUser(user) {
      return dispatch((0, _account.updateUser)(user));
    },
    changePassword: function changePassword(password) {
      return dispatch((0, _account.changePassword)(password));
    },
    toggleAlertDialog: function toggleAlertDialog(alert) {
      return dispatch((0, _common.toggleAlertDialog)(alert));
    }
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Account2.default);

/***/ }),

/***/ "./app/assets/javascript/app/containers/AlertDialog/AlertDialog.jsx":
/*!**************************************************************************!*\
  !*** ./app/assets/javascript/app/containers/AlertDialog/AlertDialog.jsx ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _constants = __webpack_require__(/*! ../../../lib/constants */ "./app/assets/javascript/lib/constants.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Alert = function Alert(props) {
  var kind = props.kind,
      show = props.show,
      message = props.message,
      toggleAlertDialog = props.toggleAlertDialog;


  if (!show) return null;

  return _react2.default.createElement(
    'div',
    { className: 'alert alert-' + kind + ' site-alert alert-dismissible fade show', role: 'alert' },
    message,
    _react2.default.createElement(
      'button',
      { type: 'button', className: 'close', 'data-dismiss': 'alert', 'aria-label': 'Close', onClick: toggleAlertDialog },
      _react2.default.createElement(
        'span',
        { 'aria-hidden': 'true' },
        '\xD7'
      )
    )
  );
};

Alert.defaultProps = {
  show: false,
  kind: 'info',
  message: null
};

Alert.propTypes = {
  show: _propTypes2.default.bool,
  message: _propTypes2.default.string,
  toggleAlertDialog: _propTypes2.default.func.isRequired,
  kind: _propTypes2.default.oneOf(_constants.ALERT_TYPES)
};

exports.default = Alert;

/***/ }),

/***/ "./app/assets/javascript/app/containers/AlertDialog/AlertDialog.scss":
/*!***************************************************************************!*\
  !*** ./app/assets/javascript/app/containers/AlertDialog/AlertDialog.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./app/assets/javascript/app/containers/AlertDialog/index.js":
/*!*******************************************************************!*\
  !*** ./app/assets/javascript/app/containers/AlertDialog/index.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _common = __webpack_require__(/*! ../../actions/common */ "./app/assets/javascript/app/actions/common.js");

var _AlertDialog = __webpack_require__(/*! ./AlertDialog */ "./app/assets/javascript/app/containers/AlertDialog/AlertDialog.jsx");

var _AlertDialog2 = _interopRequireDefault(_AlertDialog);

__webpack_require__(/*! ./AlertDialog.scss */ "./app/assets/javascript/app/containers/AlertDialog/AlertDialog.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(_ref) {
  var common = _ref.common;
  return {
    show: common.showAlert,
    message: common.alertMessage,
    kind: common.alertKind
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    toggleAlertDialog: function toggleAlertDialog() {
      return dispatch((0, _common.toggleAlertDialog)({ show: false }));
    }
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_AlertDialog2.default);

/***/ }),

/***/ "./app/assets/javascript/app/containers/Auth/Auth.jsx":
/*!************************************************************!*\
  !*** ./app/assets/javascript/app/containers/Auth/Auth.jsx ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactFontawesome = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");

var _cookie = __webpack_require__(/*! ../../../lib/cookie */ "./app/assets/javascript/lib/cookie.js");

var _cookie2 = _interopRequireDefault(_cookie);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Auth = function (_Component) {
  _inherits(Auth, _Component);

  function Auth() {
    _classCallCheck(this, Auth);

    var _this = _possibleConstructorReturn(this, (Auth.__proto__ || Object.getPrototypeOf(Auth)).call(this));

    _this.state = {
      form: {},
      validation: {
        userName: {},
        email: {},
        password: {},
        firstName: {},
        lastName: {},
        confirmPassword: {}
      }
    };

    _this.handleChange = _this.handleChange.bind(_this);
    _this.validation = _this.validation.bind(_this);
    _this.switchForm = _this.switchForm.bind(_this);
    _this.loginRegister = _this.loginRegister.bind(_this);
    return _this;
  }

  _createClass(Auth, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var toggleAlertDialog = this.props.toggleAlertDialog;

      var errorMessage = _cookie2.default.get('errorMessage');
      if (errorMessage) {
        toggleAlertDialog(errorMessage);
      }
    }
  }, {
    key: 'handleChange',
    value: function handleChange(_ref) {
      var target = _ref.target;
      var value = target.value,
          name = target.name;
      var form = this.state.form;

      form[name] = value;
      this.setState({ form: form });
    }
  }, {
    key: 'validation',
    value: function validation() {
      var emailInput = document.querySelector('input[name="email"]');
      var validation = this.state.validation;
      var _state = this.state,
          form = _state.form,
          isRegister = _state.isRegister;

      var isValid = true;

      if (!form.email || !emailInput.checkValidity()) {
        validation.email = {
          class: 'is-invalid',
          error: _react2.default.createElement(
            'div',
            { className: 'invalid-feedback' },
            'Please enter a valid email address.'
          )
        };
        isValid = false;
      } else {
        validation.email = {};
      }

      if (!form.password || form.password.length < 6 || form.password.length > 16) {
        validation.password = {
          class: 'is-invalid',
          error: _react2.default.createElement(
            'div',
            { className: 'invalid-feedback' },
            'Passwords must be 6-16 chacracter.'
          )
        };
        isValid = false;
      } else {
        validation.password = {};
      }

      if (isRegister) {
        if (!form.userName || form.userName.length < 2 || form.userName.length > 40) {
          validation.userName = {
            class: 'is-invalid',
            error: _react2.default.createElement(
              'div',
              { className: 'invalid-feedback' },
              'User name must be 2-40 character'
            )
          };
          isValid = false;
        } else {
          validation.userName = {};
        }

        if (!form.firstName || form.firstName.length < 2 || form.firstName.length > 40) {
          validation.firstName = {
            class: 'is-invalid',
            error: _react2.default.createElement(
              'div',
              { className: 'invalid-feedback' },
              'First name must be 2-40 character'
            )
          };
          isValid = false;
        } else {
          validation.firstName = {};
        }

        if (!form.lastName || form.lastName.length < 2 || form.lastName.length > 40) {
          validation.lastName = {
            class: 'is-invalid',
            error: _react2.default.createElement(
              'div',
              { className: 'invalid-feedback' },
              'Last name must be 2-40 character'
            )
          };
          isValid = false;
        } else {
          validation.lastName = {};
        }

        if (form.confirmPassword !== form.password) {
          validation.confirmPassword = {
            class: 'is-invalid',
            error: _react2.default.createElement(
              'div',
              { className: 'invalid-feedback' },
              'Passwords dont match'
            )
          };
          isValid = false;
        } else {
          validation.confirmPassword = {};
        }
      }

      this.setState({ validation: validation });
      return isValid;
    }
  }, {
    key: 'loginRegister',
    value: function loginRegister() {
      var _state2 = this.state,
          form = _state2.form,
          isRegister = _state2.isRegister;

      var isValid = this.validation(form);

      if (!isValid) {
        return null;
      }

      var props = this.props;

      var url = isRegister ? '/api/register' : '/api/login';

      return props.loginRegister(form, url);
    }
  }, {
    key: 'switchForm',
    value: function switchForm() {
      this.setState(function (prevState) {
        return {
          isRegister: !prevState.isRegister
        };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _state3 = this.state,
          form = _state3.form,
          isRegister = _state3.isRegister,
          validation = _state3.validation,
          loading = _state3.loading;


      var buttonText = 'LOGIN';
      var switchRegisterToLoginText = 'REGISTER';
      var registerInput = null;

      if (isRegister) {
        buttonText = 'REGISTER';
        switchRegisterToLoginText = 'LOGIN';

        registerInput = _react2.default.createElement(
          _react.Fragment,
          null,
          _react2.default.createElement(
            'div',
            { className: 'form-group' },
            _react2.default.createElement(
              'label',
              { htmlFor: 'confirmPasswordInput' },
              'Confirm Password'
            ),
            _react2.default.createElement(
              'div',
              { className: 'input-group' },
              _react2.default.createElement(
                'div',
                { className: 'input-group-prepend' },
                _react2.default.createElement(
                  'span',
                  { className: 'input-group-text border-top-0 border-left-0 border-right-0 border-dark bg-transparent rounded-0', id: 'confirmPasswordAddon' },
                  _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: 'key' })
                )
              ),
              _react2.default.createElement('input', {
                type: 'password',
                name: 'confirmPassword',
                value: form.confirmPassword,
                id: 'confirmPasswordInput',
                onChange: this.handleChange,
                autoComplete: 'confirmPassword',
                placeholder: 'Confirm Password',
                'aria-describedby': 'confirmPasswordAddon',
                className: 'form-control border-top-0 border-left-0 border-right-0 border-dark rounded-0 b bg-transparent ' + (validation.confirmPassword.class || '')
              }),
              validation.confirmPassword.error
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'form-group' },
            _react2.default.createElement(
              'label',
              { htmlFor: 'userNameInput' },
              'User Name'
            ),
            _react2.default.createElement(
              'div',
              { className: 'input-group' },
              _react2.default.createElement(
                'div',
                { className: 'input-group-prepend' },
                _react2.default.createElement(
                  'span',
                  { className: 'input-group-text border-top-0 border-left-0 border-right-0 border-dark bg-transparent rounded-0', id: 'userName' },
                  _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: 'at' })
                )
              ),
              _react2.default.createElement('input', {
                type: 'text',
                name: 'userName',
                'aria-describedby': 'userName',
                id: 'userNameInput',
                placeholder: 'User Name',
                value: form.userName,
                onChange: this.handleChange,
                className: 'form-control border-top-0 border-left-0 border-right-0 border-dark rounded-0 b bg-transparent ' + (validation.userName.class || '')
              }),
              validation.userName.error
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'form-group' },
            _react2.default.createElement(
              'label',
              { htmlFor: 'firstNameInput' },
              'First Name'
            ),
            _react2.default.createElement(
              'div',
              { className: 'input-group' },
              _react2.default.createElement(
                'div',
                { className: 'input-group-prepend' },
                _react2.default.createElement(
                  'span',
                  { className: 'input-group-text border-top-0 border-left-0 border-right-0 border-dark bg-transparent rounded-0', id: 'firstName' },
                  _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: 'signature' })
                )
              ),
              _react2.default.createElement('input', {
                type: 'text',
                name: 'firstName',
                'aria-describedby': 'firstName',
                id: 'firstNameInput',
                placeholder: 'First Name',
                value: form.firstName,
                onChange: this.handleChange,
                className: 'form-control border-top-0 border-left-0 border-right-0 border-dark rounded-0 b bg-transparent ' + (validation.firstName.class || '')
              }),
              validation.firstName.error
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'form-group' },
            _react2.default.createElement(
              'label',
              { htmlFor: 'lastNameInput' },
              'Last Name'
            ),
            _react2.default.createElement(
              'div',
              { className: 'input-group' },
              _react2.default.createElement(
                'div',
                { className: 'input-group-prepend' },
                _react2.default.createElement(
                  'span',
                  { className: 'input-group-text border-top-0 border-left-0 border-right-0 border-dark bg-transparent rounded-0', id: 'lastName' },
                  _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: 'signature' })
                )
              ),
              _react2.default.createElement('input', {
                type: 'text',
                autoComplete: 'lastName',
                className: 'form-control border-top-0 border-left-0 border-right-0 border-dark rounded-0 b bg-transparent ' + (validation.lastName.class || ''),
                name: 'lastName',
                'aria-describedby': 'lastName',
                id: 'lastNameInput',
                placeholder: 'Last Name',
                value: form.lastName,
                onChange: this.handleChange
              }),
              validation.lastName.error
            )
          )
        );
      }

      return _react2.default.createElement(
        'div',
        { className: 'container' },
        _react2.default.createElement(
          'div',
          { className: 'row justify-content-md-center' },
          _react2.default.createElement(
            'div',
            { className: 'col-12 col-sm-12 col-md-8 col-lg-6 col-xl-5' },
            _react2.default.createElement(
              'div',
              { className: 'card auth-form' },
              _react2.default.createElement(
                'div',
                { className: 'card-body' },
                _react2.default.createElement(
                  'div',
                  { className: 'row justify-content-center' },
                  _react2.default.createElement('img', { src: vissne.cdn + '/images/logo.png', alt: 'Vissne', height: '70', className: 'my-2' })
                ),
                _react2.default.createElement(
                  'form',
                  { onSubmit: this.handleSubmit, id: 'formReg', className: 'col-12 p-0' },
                  _react2.default.createElement(
                    'div',
                    { className: 'form-group' },
                    _react2.default.createElement(
                      'label',
                      { htmlFor: 'emailInput' },
                      'Email'
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'input-group' },
                      _react2.default.createElement(
                        'div',
                        { className: 'input-group-prepend' },
                        _react2.default.createElement(
                          'span',
                          { className: 'input-group-text border-top-0 border-left-0 border-right-0 border-dark bg-transparent rounded-0', id: 'basic-addon1' },
                          _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: 'envelope' })
                        )
                      ),
                      _react2.default.createElement('input', {
                        type: 'email',
                        name: 'email',
                        value: form.email,
                        id: 'emailInput',
                        autoComplete: 'email',
                        'aria-describedby': 'emailInputGroup',
                        placeholder: 'Enter email',
                        onChange: this.handleChange,
                        className: 'form-control border-top-0 border-left-0 border-right-0 border-dark rounded-0 b bg-transparent ' + (validation.email.class || '')
                      }),
                      validation.email.error
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'form-group' },
                    _react2.default.createElement(
                      'label',
                      { htmlFor: 'passwordInput' },
                      'Password'
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'input-group' },
                      _react2.default.createElement(
                        'div',
                        { className: 'input-group-prepend' },
                        _react2.default.createElement(
                          'span',
                          { className: 'input-group-text border-top-0 border-left-0 border-right-0 border-dark bg-transparent rounded-0', id: 'passwordAddon' },
                          _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: 'unlock' })
                        )
                      ),
                      _react2.default.createElement('input', {
                        type: 'password',
                        name: 'password',
                        value: form.password,
                        id: 'passwordInput',
                        placeholder: 'Password',
                        'aria-describedby': 'passwordAddon',
                        onChange: this.handleChange,
                        autoComplete: 'current-password',
                        className: 'form-control border-top-0 border-left-0 border-right-0 border-dark rounded-0 b bg-transparent ' + (validation.password.class || '')
                      }),
                      validation.password.error
                    )
                  ),
                  registerInput,
                  _react2.default.createElement(
                    'div',
                    { className: 'row' },
                    _react2.default.createElement(
                      'div',
                      { className: 'col-12 text-right' },
                      _react2.default.createElement(
                        'button',
                        {
                          className: 'btn btn-link',
                          onClick: this.switchForm,
                          type: 'button'
                        },
                        switchRegisterToLoginText
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'button',
                    {
                      type: 'button',
                      className: 'btn btn-dark btn-block',
                      onClick: this.loginRegister,
                      disabled: loading
                    },
                    _react2.default.createElement('span', {
                      className: 'spinner-grow spinner-grow-sm ' + (loading ? '' : 'd-none'),
                      role: 'status',
                      'aria-hidden': 'true'
                    }),
                    buttonText
                  )
                ),
                _react2.default.createElement(
                  'a',
                  {
                    className: 'btn btn-default btn-block btn-dark border-0 social-button google  mt-2',
                    href: 'auth/google'
                  },
                  _react2.default.createElement(
                    'i',
                    { className: 'social-button-icon' },
                    _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: ['fab', 'google'] })
                  ),
                  'LOGIN WITH GOOGLE'
                ),
                _react2.default.createElement(
                  'a',
                  {
                    className: 'btn btn-block btn-dark border-0 social-button facebook mt-2',
                    href: 'auth/facebook'
                  },
                  _react2.default.createElement(
                    'i',
                    { className: 'social-button-icon' },
                    _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: ['fab', 'facebook'] })
                  ),
                  'LOGIN WITH FACEBOOK'
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Auth;
}(_react.Component);

exports.default = Auth;


Auth.propTypes = {
  toggleAlertDialog: _propTypes2.default.func.isRequired
};

/***/ }),

/***/ "./app/assets/javascript/app/containers/Auth/Auth.scss":
/*!*************************************************************!*\
  !*** ./app/assets/javascript/app/containers/Auth/Auth.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./app/assets/javascript/app/containers/Auth/index.js":
/*!************************************************************!*\
  !*** ./app/assets/javascript/app/containers/Auth/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _Auth = __webpack_require__(/*! ./Auth */ "./app/assets/javascript/app/containers/Auth/Auth.jsx");

var _Auth2 = _interopRequireDefault(_Auth);

var _auth = __webpack_require__(/*! ../../actions/auth */ "./app/assets/javascript/app/actions/auth.js");

var _common = __webpack_require__(/*! ../../actions/common */ "./app/assets/javascript/app/actions/common.js");

__webpack_require__(/*! ./Auth.scss */ "./app/assets/javascript/app/containers/Auth/Auth.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    loading: state.common.loading,
    isLoggedIn: state.discover.isLoggedIn
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    loginRegister: function loginRegister(data, url) {
      return dispatch((0, _auth.loginRegister)(data, url));
    },
    toggleAlertDialog: function toggleAlertDialog(message) {
      return dispatch((0, _common.toggleAlertDialog)({ kind: 'danger', message: message }));
    }
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Auth2.default);

/***/ }),

/***/ "./app/assets/javascript/app/containers/Discover/Discover.jsx":
/*!********************************************************************!*\
  !*** ./app/assets/javascript/app/containers/Discover/Discover.jsx ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _MovieList = __webpack_require__(/*! ../../components/MovieList */ "./app/assets/javascript/app/components/MovieList.jsx");

var _MovieList2 = _interopRequireDefault(_MovieList);

var _Navbar = __webpack_require__(/*! ../../components/Navbar */ "./app/assets/javascript/app/components/Navbar/index.jsx");

var _Navbar2 = _interopRequireDefault(_Navbar);

var _Spinner = __webpack_require__(/*! ../../components/Spinner */ "./app/assets/javascript/app/components/Spinner.jsx");

var _Spinner2 = _interopRequireDefault(_Spinner);

var _Filter = __webpack_require__(/*! ../../components/Filter */ "./app/assets/javascript/app/components/Filter/index.jsx");

var _Filter2 = _interopRequireDefault(_Filter);

var _Footer = __webpack_require__(/*! ../../components/Footer */ "./app/assets/javascript/app/components/Footer/index.jsx");

var _Footer2 = _interopRequireDefault(_Footer);

var _propShapes = __webpack_require__(/*! ../../constants/prop-shapes */ "./app/assets/javascript/app/constants/prop-shapes.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Discover = function (_Component) {
  _inherits(Discover, _Component);

  function Discover(props) {
    _classCallCheck(this, Discover);

    var _this = _possibleConstructorReturn(this, (Discover.__proto__ || Object.getPrototypeOf(Discover)).call(this, props));

    _this.loadMovies = _this.loadMovies.bind(_this);
    _this.setQuery = _this.setQuery.bind(_this);
    return _this;
  }

  _createClass(Discover, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          getGenres = _props.getGenres,
          toggleFilter = _props.toggleFilter,
          match = _props.match;
      var path = match.path;


      getGenres();

      if (['/coming-soon', '/in-theaters'].indexOf(path) !== -1) {
        this.setQuery({ field: 'filter', value: path.replace('/', '') });
        toggleFilter(false);
      } else {
        this.loadMovies();
      }
    }
  }, {
    key: 'setQuery',
    value: function setQuery(query) {
      var setQuery = this.props.setQuery;

      setQuery(query).then(this.loadMovies);
    }
  }, {
    key: 'loadMovies',
    value: function loadMovies() {
      var _props2 = this.props,
          getMovies = _props2.getMovies,
          query = _props2.query;

      getMovies(query);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props3 = this.props,
          movies = _props3.movies,
          user = _props3.user,
          isLoggedIn = _props3.isLoggedIn,
          loading = _props3.loading,
          genres = _props3.genres,
          query = _props3.query,
          location = _props3.location,
          showFilter = _props3.showFilter;


      return _react2.default.createElement(
        _react.Fragment,
        null,
        _react2.default.createElement(_Navbar2.default, { isLoggedIn: isLoggedIn, user: user, pathName: location.pathname }),
        _react2.default.createElement(
          'div',
          { className: 'container-fluid' },
          _react2.default.createElement(_Filter2.default, { show: showFilter, genres: genres, setQuery: this.setQuery, query: query }),
          _react2.default.createElement(_MovieList2.default, { movies: movies, id: 'list' }),
          _react2.default.createElement(
            'div',
            { className: 'd-flex justify-content-center m-1' },
            _react2.default.createElement(
              'button',
              {
                type: 'button',
                onClick: this.loadMovies,
                className: 'btn btn-outline-primary mb-2 ' + (loading ? 'd-none' : 'd-block')
              },
              'Load More'
            ),
            _react2.default.createElement(_Spinner2.default, { show: loading, size: 'md' })
          )
        ),
        _react2.default.createElement(_Footer2.default, null)
      );
    }
  }]);

  return Discover;
}(_react.Component);

exports.default = Discover;


Discover.defaultProps = {
  isLoggedIn: false,
  showFilter: true,
  user: {}
};

Discover.propTypes = {
  getMovies: _propTypes2.default.func.isRequired,
  getGenres: _propTypes2.default.func.isRequired,
  setQuery: _propTypes2.default.func.isRequired,
  toggleFilter: _propTypes2.default.func.isRequired,
  loading: _propTypes2.default.bool.isRequired,
  isLoggedIn: _propTypes2.default.bool,
  showFilter: _propTypes2.default.bool,
  user: _propShapes.UserShape,
  movies: _propTypes2.default.arrayOf(_propShapes.MovieShape).isRequired,
  genres: _propTypes2.default.arrayOf(_propShapes.GenreShape).isRequired,
  query: _propShapes.FilterShape.isRequired
};

/***/ }),

/***/ "./app/assets/javascript/app/containers/Discover/index.js":
/*!****************************************************************!*\
  !*** ./app/assets/javascript/app/containers/Discover/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _Discover = __webpack_require__(/*! ./Discover */ "./app/assets/javascript/app/containers/Discover/Discover.jsx");

var _Discover2 = _interopRequireDefault(_Discover);

var _common = __webpack_require__(/*! ../../actions/common */ "./app/assets/javascript/app/actions/common.js");

var _discover = __webpack_require__(/*! ../../actions/discover */ "./app/assets/javascript/app/actions/discover.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    loading: state.common.loading,
    user: state.discover.user,
    query: state.discover.query,
    isLoggedIn: state.discover.isLoggedIn,
    movies: state.discover.movies,
    genres: state.discover.genres,
    showFilter: state.common.showFilter
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getMovies: function getMovies(query) {
      return dispatch((0, _discover.getMovies)(query));
    },
    setQuery: function setQuery(query) {
      return dispatch((0, _discover.setQuery)(query));
    },
    getGenres: function getGenres() {
      return dispatch((0, _discover.getGenres)());
    },
    toggleFilter: function toggleFilter(show) {
      return dispatch((0, _common.toggleFilter)(show));
    }
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Discover2.default);

/***/ }),

/***/ "./app/assets/javascript/app/containers/Lists/Lists.jsx":
/*!**************************************************************!*\
  !*** ./app/assets/javascript/app/containers/Lists/Lists.jsx ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactFontawesome = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");

var _Navbar = __webpack_require__(/*! ../../components/Navbar */ "./app/assets/javascript/app/components/Navbar/index.jsx");

var _Navbar2 = _interopRequireDefault(_Navbar);

var _ProfileContainer = __webpack_require__(/*! ../../components/ProfileContainer */ "./app/assets/javascript/app/components/ProfileContainer.jsx");

var _ProfileContainer2 = _interopRequireDefault(_ProfileContainer);

var _TableList = __webpack_require__(/*! ../../components/TableList */ "./app/assets/javascript/app/components/TableList/index.jsx");

var _TableList2 = _interopRequireDefault(_TableList);

var _Modal = __webpack_require__(/*! ../../components/Modal */ "./app/assets/javascript/app/components/Modal/index.jsx");

var _Modal2 = _interopRequireDefault(_Modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Lists = function (_Component) {
  _inherits(Lists, _Component);

  function Lists(props) {
    _classCallCheck(this, Lists);

    var _this = _possibleConstructorReturn(this, (Lists.__proto__ || Object.getPrototypeOf(Lists)).call(this, props));

    _this.state = {
      movieQuery: {
        page: 1,
        limit: 10
      },
      listQuery: {
        page: 1,
        limit: 10
      },
      list: {},
      selected: {},
      selectedMovie: {},
      movieTableFields: [{
        title: 'Id',
        name: 'id',
        hidden: true
      }, {
        title: 'Poster',
        name: 'poster',
        format: function format(src) {
          return _react2.default.createElement('img', { height: '70', src: src, alt: 'List Movie' });
        }
      }, {
        title: 'Title',
        name: 'title'
      }, {
        title: 'Rating',
        name: 'rating'
      }],
      listTableFields: [{
        title: 'Id',
        name: 'id',
        hidden: true
      }, {
        title: 'Name',
        name: 'name'
      }, {
        title: 'Create Date',
        name: 'createdAt',
        format: function format(value) {
          var date = new Date(value);
          return date.toLocaleDateString();
        }
      }, {
        title: 'Visibility',
        name: 'public',
        format: function format(value) {
          return value ? 'Public' : 'Private';
        }
      }, {
        title: 'Movies',
        name: 'totalMovie'
      }, {
        title: '',
        name: 'id',
        format: function format(id) {
          return _react2.default.createElement(
            'div',
            { className: 'd-flex justify-content-center' },
            _react2.default.createElement(
              'button',
              { className: 'btn btn-link', type: 'button', onClick: function onClick() {
                  return _this.showListMovies(id);
                } },
              _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: 'list' })
            )
          );
        }
      }]
    };

    _this.setListQuery = _this.setListQuery.bind(_this);
    _this.setMovieQuery = _this.setMovieQuery.bind(_this);
    _this.getLists = _this.getLists.bind(_this);
    _this.toggleModal = _this.toggleModal.bind(_this);
    _this.create = _this.create.bind(_this);
    _this.destroy = _this.destroy.bind(_this);
    _this.update = _this.update.bind(_this);
    _this.handleChange = _this.handleChange.bind(_this);
    _this.save = _this.save.bind(_this);
    _this.showListMovies = _this.showListMovies.bind(_this);
    _this.backToList = _this.backToList.bind(_this);
    _this.deleteFromList = _this.deleteFromList.bind(_this);
    return _this;
  }

  _createClass(Lists, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var getAccountDetail = this.props.getAccountDetail;

      this.getLists();
      getAccountDetail();
    }
  }, {
    key: 'setListQuery',
    value: function setListQuery(listQuery) {
      this.setState(function (prevState) {
        return {
          listQuery: Object.assign(prevState.listQuery, listQuery)
        };
      }, this.getLists);
    }
  }, {
    key: 'setMovieQuery',
    value: function setMovieQuery(movieQuery) {
      this.setState(function (prevState) {
        return {
          movieQuery: Object.assign(prevState.movieQuery, movieQuery)
        };
      }, this.getLists);
    }
  }, {
    key: 'getLists',
    value: function getLists() {
      var getListByCurrentUser = this.props.getListByCurrentUser;
      var listQuery = this.state.listQuery;

      getListByCurrentUser(listQuery);
    }
  }, {
    key: 'getListMovies',
    value: function getListMovies() {
      var getListMovies = this.props.getListMovies;
      var movieQuery = this.state.movieQuery;

      if (movieQuery.listId) {
        getListMovies(movieQuery);
      }
    }
  }, {
    key: 'deleteFromList',
    value: function deleteFromList() {
      var _state = this.state,
          selectedMovie = _state.selectedMovie,
          selected = _state.selected;
      var removeFromList = this.props.removeFromList;

      removeFromList({
        listId: selected.id,
        movieId: selectedMovie.id
      });
    }
  }, {
    key: 'backToList',
    value: function backToList() {
      this.setState({
        showMovies: false,
        selectedMovie: {},
        movieQuery: {
          page: 1,
          limit: 10
        }
      });
    }
  }, {
    key: 'showListMovies',
    value: function showListMovies(listId) {
      this.setState(function (prevState) {
        return {
          showMovies: true,
          selected: {},
          movieQuery: Object.assign(prevState.movieQuery, {
            listId: listId
          })
        };
      }, this.getListMovies);
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      var _props = this.props,
          deleteList = _props.deleteList,
          toggleAlertDialog = _props.toggleAlertDialog;
      var selected = this.state.selected;


      if (!selected || !selected.id) {
        return toggleAlertDialog({
          kind: 'warning',
          message: 'No selected data.'
        });
      }

      deleteList(selected.id, this.getLists);
    }
  }, {
    key: 'create',
    value: function create() {
      this.setState({ list: {} });
      this.toggleModal();
    }
  }, {
    key: 'update',
    value: function update() {
      var selected = this.state.selected;

      this.setState({
        list: selected
      }, this.toggleModal);
    }
  }, {
    key: 'toggleModal',
    value: function toggleModal() {
      this.setState(function (prevState) {
        return {
          showModal: !prevState.showModal
        };
      });
    }
  }, {
    key: 'handleChange',
    value: function handleChange(_ref) {
      var target = _ref.target;
      var name = target.name;
      var list = this.state.list;

      var value = target.parsedValue || target.value;

      if (name === 'public') {
        value = Number.parseInt(value, 10);
      }

      list[name] = value;

      this.setState({ list: list });
    }
  }, {
    key: 'save',
    value: function save() {
      var _this2 = this;

      var list = this.state.list;
      var saveList = this.props.saveList;


      list.public = Number.parseInt(list.public, 10);

      saveList(list, function () {
        _this2.getLists();
        _this2.setState({ list: {} });
        _this2.toggleModal();
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _state2 = this.state,
          listQuery = _state2.listQuery,
          movieQuery = _state2.movieQuery,
          showModal = _state2.showModal,
          list = _state2.list,
          selected = _state2.selected,
          selectedMovie = _state2.selectedMovie,
          listTableFields = _state2.listTableFields,
          movieTableFields = _state2.movieTableFields,
          showMovies = _state2.showMovies;
      var _props2 = this.props,
          match = _props2.match,
          user = _props2.user,
          pageLoading = _props2.pageLoading,
          totalList = _props2.totalList,
          totalMovie = _props2.totalMovie,
          movies = _props2.movies,
          lists = _props2.lists;


      var content = _react2.default.createElement(_TableList2.default, {
        data: lists,
        onCreate: this.create,
        onDelete: this.destroy,
        onEdit: this.update,
        onSelect: function onSelect(s) {
          return _this3.setState({ selected: s });
        },
        selected: selected,
        fields: listTableFields,
        pagination: {
          total: totalList,
          page: listQuery.page,
          limit: listQuery.limit,
          buttonCount: 5,
          onPaginate: this.setListQuery
        }
      });

      if (showMovies) {
        content = _react2.default.createElement(
          _react.Fragment,
          null,
          _react2.default.createElement(
            'div',
            { className: 'd-flex justify-content-between mt-2' },
            _react2.default.createElement(
              'span',
              { style: { fontSize: '26px', fontWeight: 'bold' } },
              'Movies'
            ),
            _react2.default.createElement(
              'button',
              { type: 'button', className: 'btn btn-outline-primary rounded-0', onClick: this.backToList },
              'Back To List'
            )
          ),
          _react2.default.createElement(_TableList2.default, {
            data: movies,
            onDelete: this.deleteFromList,
            onSelect: function onSelect(s) {
              return _this3.setState({ selectedMovie: s });
            },
            selected: selectedMovie,
            fields: movieTableFields,
            pagination: {
              total: totalMovie,
              page: movieQuery.page,
              limit: movieQuery.limit,
              buttonCount: 5,
              onPaginate: this.setListQuery
            }
          })
        );
      }

      return _react2.default.createElement(
        _react.Fragment,
        null,
        _react2.default.createElement(_Navbar2.default, { user: user }),
        _react2.default.createElement(
          _ProfileContainer2.default,
          { user: user, path: match.path, pageLoading: pageLoading },
          content
        ),
        _react2.default.createElement(
          _Modal2.default,
          { show: showModal, title: 'Create List', cancel: this.toggleModal, submit: this.save },
          _react2.default.createElement(
            'div',
            { className: 'form-group' },
            _react2.default.createElement(
              'label',
              null,
              'List Name'
            ),
            _react2.default.createElement('input', {
              type: 'text',
              name: 'name',
              className: 'form-control',
              placeholder: 'List Name',
              value: list.name,
              onChange: this.handleChange
            })
          ),
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col' },
              _react2.default.createElement(
                'div',
                { className: 'form-check' },
                _react2.default.createElement('input', {
                  className: 'form-check-input',
                  type: 'radio',
                  name: 'public',
                  value: '1',
                  onChange: this.handleChange,
                  checked: list.public
                }),
                _react2.default.createElement(
                  'label',
                  { className: 'form-check-label' },
                  'Public List'
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'col' },
              _react2.default.createElement(
                'div',
                { className: 'form-check' },
                _react2.default.createElement('input', {
                  className: 'form-check-input',
                  type: 'radio',
                  name: 'public',
                  value: '0',
                  onChange: this.handleChange,
                  checked: !list.public
                }),
                _react2.default.createElement(
                  'label',
                  { className: 'form-check-label' },
                  'Private List'
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Lists;
}(_react.Component);

exports.default = Lists;


Lists.defaultProps = {
  totalList: 0,
  totalMovie: 0
};

Lists.propTypes = {
  toggleAlertDialog: _propTypes2.default.func.isRequired,
  getListByCurrentUser: _propTypes2.default.func.isRequired,
  getAccountDetail: _propTypes2.default.func.isRequired,
  getListMovies: _propTypes2.default.func.isRequired,
  deleteList: _propTypes2.default.func.isRequired,
  saveList: _propTypes2.default.func.isRequired,
  pageLoading: _propTypes2.default.bool.isRequired,
  totalList: _propTypes2.default.number,
  totalMovie: _propTypes2.default.number
};

/***/ }),

/***/ "./app/assets/javascript/app/containers/Lists/index.js":
/*!*************************************************************!*\
  !*** ./app/assets/javascript/app/containers/Lists/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _Lists = __webpack_require__(/*! ./Lists */ "./app/assets/javascript/app/containers/Lists/Lists.jsx");

var _Lists2 = _interopRequireDefault(_Lists);

var _account = __webpack_require__(/*! ../../actions/account */ "./app/assets/javascript/app/actions/account.js");

var _common = __webpack_require__(/*! ../../actions/common */ "./app/assets/javascript/app/actions/common.js");

var _lists = __webpack_require__(/*! ../../actions/lists */ "./app/assets/javascript/app/actions/lists.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    lists: state.lists.lists,
    total: state.lists.total,
    movies: state.lists.movies,
    tableFields: state.lists.tableFields,
    pageLoading: state.common.pageLoading,
    loading: state.common.loading,
    user: state.account.user
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getListByCurrentUser: function getListByCurrentUser(query) {
      return dispatch((0, _lists.getListByCurrentUser)(query));
    },
    saveList: function saveList(list, callback) {
      return dispatch((0, _lists.saveList)(list, callback));
    },
    deleteList: function deleteList(id, callback) {
      return dispatch((0, _lists.deleteList)(id, callback));
    },
    getAccountDetail: function getAccountDetail() {
      return dispatch((0, _account.getAccountDetail)());
    },
    toggleAlertDialog: function toggleAlertDialog(alert) {
      return dispatch((0, _common.toggleAlertDialog)(alert));
    },
    getListMovies: function getListMovies(query) {
      return dispatch((0, _lists.getListMovies)(query));
    },
    removeFromList: function removeFromList(listMovie) {
      return dispatch((0, _lists.removeFromList)(listMovie));
    }
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Lists2.default);

/***/ }),

/***/ "./app/assets/javascript/app/containers/Movie/Movie.jsx":
/*!**************************************************************!*\
  !*** ./app/assets/javascript/app/containers/Movie/Movie.jsx ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactFontawesome = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");

var _Navbar = __webpack_require__(/*! ../../components/Navbar */ "./app/assets/javascript/app/components/Navbar/index.jsx");

var _Navbar2 = _interopRequireDefault(_Navbar);

var _ProgressBar = __webpack_require__(/*! ../../components/ProgressBar */ "./app/assets/javascript/app/components/ProgressBar.jsx");

var _ProgressBar2 = _interopRequireDefault(_ProgressBar);

var _DetailTable = __webpack_require__(/*! ../../components/DetailTable */ "./app/assets/javascript/app/components/DetailTable.jsx");

var _DetailTable2 = _interopRequireDefault(_DetailTable);

var _CompanyList = __webpack_require__(/*! ../../components/CompanyList */ "./app/assets/javascript/app/components/CompanyList/index.jsx");

var _CompanyList2 = _interopRequireDefault(_CompanyList);

var _CastList = __webpack_require__(/*! ../../components/CastList */ "./app/assets/javascript/app/components/CastList/index.jsx");

var _CastList2 = _interopRequireDefault(_CastList);

var _Video = __webpack_require__(/*! ../../components/Video */ "./app/assets/javascript/app/components/Video/index.jsx");

var _Video2 = _interopRequireDefault(_Video);

var _propShapes = __webpack_require__(/*! ../../constants/prop-shapes */ "./app/assets/javascript/app/constants/prop-shapes.js");

var _Modal = __webpack_require__(/*! ../../components/Modal */ "./app/assets/javascript/app/components/Modal/index.jsx");

var _Modal2 = _interopRequireDefault(_Modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Movie = function (_Component) {
  _inherits(Movie, _Component);

  function Movie(props) {
    _classCallCheck(this, Movie);

    var _this = _possibleConstructorReturn(this, (Movie.__proto__ || Object.getPrototypeOf(Movie)).call(this, props));

    _this.state = {
      showListModal: false,
      list: {
        page: 1,
        limit: 10
      }
    };

    _this.toggleListModal = _this.toggleListModal.bind(_this);
    return _this;
  }

  _createClass(Movie, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var list = this.state.list;
      var _props = this.props,
          getMovieDetail = _props.getMovieDetail,
          getListByCurrentUser = _props.getListByCurrentUser,
          match = _props.match;

      var movieId = match.params.id;
      getMovieDetail(movieId);
      getListByCurrentUser(list, movieId);
    }
  }, {
    key: 'toggleListModal',
    value: function toggleListModal() {
      this.setState(function (prevState) {
        return {
          showListModal: !prevState.showListModal
        };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          showListModal = _state.showListModal,
          list = _state.list;
      var _props2 = this.props,
          match = _props2.match,
          detail = _props2.detail,
          user = _props2.user,
          isLoggedIn = _props2.isLoggedIn,
          lists = _props2.lists,
          addToList = _props2.addToList,
          removeFromList = _props2.removeFromList,
          getListByCurrentUser = _props2.getListByCurrentUser;


      if (!detail) {
        return _react2.default.createElement(
          _react.Fragment,
          null,
          _react2.default.createElement(_Navbar2.default, { isLoggedIn: isLoggedIn, user: user }),
          _react2.default.createElement(_ProgressBar2.default, { show: true, color: 'info' })
        );
      }

      var video = detail.videos.length > 0 ? _react2.default.createElement(_Video2.default, { videoKey: detail.videos[0].key }) : null;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Navbar2.default, { isLoggedIn: isLoggedIn, user: user }),
        _react2.default.createElement(
          'div',
          { className: 'container-fluid mt-2' },
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-12 col-sm-6 col-md-3' },
              _react2.default.createElement('img', { className: 'img-fluid mb-2', src: detail.posterPath, alt: detail.title }),
              _react2.default.createElement(
                'div',
                { className: 'mb-2' },
                _react2.default.createElement(
                  'button',
                  { className: 'btn btn-secondary rounded-0', type: 'button', title: 'Add To List', onClick: this.toggleListModal },
                  _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: 'plus-square' })
                )
              ),
              _react2.default.createElement(_CompanyList2.default, { companies: detail.production_companies })
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-12 col-sm-12 col-md-6 mb-2' },
              video,
              _react2.default.createElement(_DetailTable2.default, { movie: detail })
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-12 col-sm-6 col-md-3 mb-2' },
              _react2.default.createElement(_CastList2.default, { casts: detail.credits.cast })
            )
          )
        ),
        _react2.default.createElement(
          _Modal2.default,
          { show: showListModal, title: 'Add To List', cancel: this.toggleListModal },
          _react2.default.createElement(
            'ul',
            { className: 'list-group' },
            lists.map(function (l) {
              return _react2.default.createElement(
                'li',
                {
                  className: 'list-group-item rounded-0 ' + (l.isAdded ? 'list-group-item-success' : ' ')
                },
                _react2.default.createElement(
                  'span',
                  { className: 'd-flex justify-content-between' },
                  l.name,
                  _react2.default.createElement(
                    'button',
                    {
                      type: 'button',
                      className: 'btn btn-sm btn-outline-' + (l.isAdded ? 'danger' : 'success'),
                      onClick: function onClick() {
                        var movieId = match.params.id;
                        var listObject = {
                          movieId: movieId,
                          listId: l.id
                        };

                        if (!l.isAdded) {
                          return addToList(listObject, function () {
                            _this2.toggleListModal();
                            getListByCurrentUser(list, movieId);
                          });
                        }

                        return removeFromList(listObject, function () {
                          _this2.toggleListModal();
                          getListByCurrentUser(list, movieId);
                        });
                      }
                    },
                    _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: '' + (l.isAdded ? 'trash' : 'plus-square') })
                  )
                )
              );
            })
          )
        )
      );
    }
  }]);

  return Movie;
}(_react.Component);

exports.default = Movie;


Movie.defaultProps = {
  isLoggedIn: false
};

Movie.propTypes = {
  getMovieDetail: _propTypes2.default.func.isRequired,
  addToList: _propTypes2.default.func.isRequired,
  removeFromList: _propTypes2.default.func.isRequired,
  getListByCurrentUser: _propTypes2.default.func.isRequired,
  detail: _propTypes2.default.instanceOf(Object).isRequired,
  match: _propTypes2.default.instanceOf(Object).isRequired,
  lists: _propTypes2.default.instanceOf(Array).isRequired,
  user: _propShapes.UserShape.isRequired,
  isLoggedIn: _propTypes2.default.bool
};

/***/ }),

/***/ "./app/assets/javascript/app/containers/Movie/index.js":
/*!*************************************************************!*\
  !*** ./app/assets/javascript/app/containers/Movie/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _Movie = __webpack_require__(/*! ./Movie */ "./app/assets/javascript/app/containers/Movie/Movie.jsx");

var _Movie2 = _interopRequireDefault(_Movie);

var _movie = __webpack_require__(/*! ../../actions/movie */ "./app/assets/javascript/app/actions/movie.js");

var _lists = __webpack_require__(/*! ../../actions/lists */ "./app/assets/javascript/app/actions/lists.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    detail: state.movie.detail,
    user: state.discover.user,
    isLoggedIn: state.discover.isLoggedIn,
    lists: state.lists.lists
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getMovieDetail: function getMovieDetail(id) {
      return dispatch((0, _movie.getMovieDetail)(id));
    },
    getListByCurrentUser: function getListByCurrentUser(query, movieId) {
      return dispatch((0, _lists.getListByCurrentUser)(query, movieId));
    },
    addToList: function addToList(listMovie, callback) {
      return dispatch((0, _lists.addToList)(listMovie, callback));
    },
    removeFromList: function removeFromList(listMovie, callback) {
      return dispatch((0, _lists.removeFromList)(listMovie, callback));
    }
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Movie2.default);

/***/ }),

/***/ "./app/assets/javascript/app/index.jsx":
/*!*********************************************!*\
  !*** ./app/assets/javascript/app/index.jsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

__webpack_require__(/*! ../scripts */ "./app/assets/javascript/scripts/index.js");

__webpack_require__(/*! ../../stylesheets/scss/main.scss */ "./app/assets/stylesheets/scss/main.scss");

var _configureStore = __webpack_require__(/*! ./store/configure-store */ "./app/assets/javascript/app/store/configure-store.js");

var _configureStore2 = _interopRequireDefault(_configureStore);

var _Root = __webpack_require__(/*! ./Root */ "./app/assets/javascript/app/Root.jsx");

var _Root2 = _interopRequireDefault(_Root);

var _fontAwesome = __webpack_require__(/*! ../lib/font-awesome */ "./app/assets/javascript/lib/font-awesome.js");

var _fontAwesome2 = _interopRequireDefault(_fontAwesome);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _fontAwesome2.default)(); // init font awsome icons

var store = (0, _configureStore2.default)();

(0, _reactDom.render)(_react2.default.createElement(_Root2.default, { store: store }), document.getElementById('app'));

/***/ }),

/***/ "./app/assets/javascript/app/reducers/account.js":
/*!*******************************************************!*\
  !*** ./app/assets/javascript/app/reducers/account.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = account;

var _actionTypes = __webpack_require__(/*! ../constants/action-types */ "./app/assets/javascript/app/constants/action-types.js");

var initialState = {
  user: {}
};

function account() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _actionTypes.SET_ACCOUNT_DETAIL:
      return Object.assign({}, state, {
        user: action.payload.user
      });

    default:
      return state;
  }
}

/***/ }),

/***/ "./app/assets/javascript/app/reducers/common.js":
/*!******************************************************!*\
  !*** ./app/assets/javascript/app/reducers/common.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = common;

var _actionTypes = __webpack_require__(/*! ../constants/action-types */ "./app/assets/javascript/app/constants/action-types.js");

var initialState = {
  showAlert: false,
  alertMessage: null,
  alertKind: 'info',
  pageLoading: true,
  loading: false,
  showFilter: true
};

function common() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _actionTypes.TOGGLE_ALERT:
      return Object.assign({}, state, {
        showAlert: !state.showAlert,
        alertMessage: action.message,
        alertKind: action.kind
      });

    case _actionTypes.SET_PAGE_LOADING_STATUS:
      return Object.assign({}, state, {
        pageLoading: action.pageLoading
      });

    case _actionTypes.SET_LOADING_STATUS:
      return Object.assign({}, state, {
        loading: action.loading
      });

    case _actionTypes.TOGGLE_FILTER:
      return Object.assign({}, state, {
        showFilter: !state.showFilter
      });

    case _actionTypes.SET_UPLOADED_IMAGE:
      return Object.assign({}, state, {
        uploadedAvatar: action.payload
      });

    default:
      return state;
  }
}

/***/ }),

/***/ "./app/assets/javascript/app/reducers/discover.js":
/*!********************************************************!*\
  !*** ./app/assets/javascript/app/reducers/discover.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = discover;

var _actionTypes = __webpack_require__(/*! ../constants/action-types */ "./app/assets/javascript/app/constants/action-types.js");

var _cookie = __webpack_require__(/*! ../../lib/cookie */ "./app/assets/javascript/lib/cookie.js");

var _cookie2 = _interopRequireDefault(_cookie);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var user = {
  id: _cookie2.default.get('user_id'),
  userName: _cookie2.default.get('username'),
  fristName: _cookie2.default.get('user_first_name'),
  lastName: _cookie2.default.get('user_last_name'),
  email: _cookie2.default.get('user_email')
};

var initialState = {
  user: user,
  genres: [],
  movies: [],
  total: 0,
  totalPage: 1,
  query: {
    page: 1,
    sortBy: 'popularity.desc',
    filter: null,
    searchText: null,
    withGenres: [],
    year: null,
    crews: [],
    casts: []
  },
  isLoggedIn: !!user.email
};

function discover() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _actionTypes.SET_MOVIES:
      return Object.assign({}, state, {
        movies: state.movies.concat(action.movies),
        total: action.total,
        totalPages: action.totalPages,
        query: Object.assign({}, state.query, {
          page: action.page
        })
      });

    case _actionTypes.SET_GENRES:
      return Object.assign({}, state, {
        genres: action.genres
      });

    case _actionTypes.SET_QUERY:
      return Object.assign({}, state, {
        movies: [],
        query: Object.assign({}, state.query, _defineProperty({
          page: 1
        }, action.field, action.value))
      });

    default:
      return state;
  }
}

// TODO: Move user object to account reducer

/***/ }),

/***/ "./app/assets/javascript/app/reducers/index.js":
/*!*****************************************************!*\
  !*** ./app/assets/javascript/app/reducers/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");

var _account = __webpack_require__(/*! ./account */ "./app/assets/javascript/app/reducers/account.js");

var _account2 = _interopRequireDefault(_account);

var _discover = __webpack_require__(/*! ./discover */ "./app/assets/javascript/app/reducers/discover.js");

var _discover2 = _interopRequireDefault(_discover);

var _movie = __webpack_require__(/*! ./movie */ "./app/assets/javascript/app/reducers/movie.js");

var _movie2 = _interopRequireDefault(_movie);

var _lists = __webpack_require__(/*! ./lists */ "./app/assets/javascript/app/reducers/lists.js");

var _lists2 = _interopRequireDefault(_lists);

var _common = __webpack_require__(/*! ./common */ "./app/assets/javascript/app/reducers/common.js");

var _common2 = _interopRequireDefault(_common);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
  account: _account2.default,
  discover: _discover2.default,
  movie: _movie2.default,
  lists: _lists2.default,
  common: _common2.default
});

/***/ }),

/***/ "./app/assets/javascript/app/reducers/lists.js":
/*!*****************************************************!*\
  !*** ./app/assets/javascript/app/reducers/lists.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = lists;

var _actionTypes = __webpack_require__(/*! ../constants/action-types */ "./app/assets/javascript/app/constants/action-types.js");

var initialState = {
  lists: [],
  totalList: 0,
  movies: [],
  totalMovie: 0
};

function lists() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _actionTypes.SET_LISTS:
      return Object.assign({}, state, {
        lists: action.payload.lists,
        totalList: action.payload.total
      });

    case _actionTypes.SET_LIST_MOVIES:
      return Object.assign({}, state, {
        movies: action.payload.movies,
        totalMovie: action.payload.total
      });

    default:
      return state;
  }
}

/***/ }),

/***/ "./app/assets/javascript/app/reducers/movie.js":
/*!*****************************************************!*\
  !*** ./app/assets/javascript/app/reducers/movie.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = detail;

var _actionTypes = __webpack_require__(/*! ../constants/action-types */ "./app/assets/javascript/app/constants/action-types.js");

var initialState = {
  detail: null
};

function detail() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _actionTypes.SET_MOVIE_DETAIL:
      return Object.assign({}, state, {
        detail: action.detail
      });

    default:
      return state;
  }
}

/***/ }),

/***/ "./app/assets/javascript/app/store/configure-store.js":
/*!************************************************************!*\
  !*** ./app/assets/javascript/app/store/configure-store.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = configureStore;

var _redux = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");

var _reduxThunk = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = __webpack_require__(/*! ../reducers */ "./app/assets/javascript/app/reducers/index.js");

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function configureStore() {
  return (0, _redux.createStore)(_reducers2.default, (0, _redux.applyMiddleware)(_reduxThunk2.default));
}

/***/ }),

/***/ "./app/assets/javascript/lib/ajax-error-handler.js":
/*!*********************************************************!*\
  !*** ./app/assets/javascript/lib/ajax-error-handler.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ajaxErrorHandler;

var _common = __webpack_require__(/*! ../app/actions/common */ "./app/assets/javascript/app/actions/common.js");

function ajaxErrorHandler(dispatch) {
  return function (_ref) {
    var response = _ref.response;

    var statusCode = response.status;

    dispatch((0, _common.setPageLoadingStatus)(false));
    dispatch((0, _common.setLoadingStatus)(false));

    switch (statusCode) {
      case 404:
        window.location.href = vissne.domain + '/page-not-found';
        break;

      case 403:
        window.location.href = vissne.domain + '/auth';
        break;

      default:
        dispatch((0, _common.toggleAlertDialog)({
          kind: 'danger',
          message: response.data.message
        }));
        break;
    }
  };
}

/***/ }),

/***/ "./app/assets/javascript/lib/constants.js":
/*!************************************************!*\
  !*** ./app/assets/javascript/lib/constants.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var ALERT_TYPES = exports.ALERT_TYPES = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'];

var ALERT_TYPE_ICON_MAP = exports.ALERT_TYPE_ICON_MAP = {
  primary: ''
};

/***/ }),

/***/ "./app/assets/javascript/lib/cookie.js":
/*!*********************************************!*\
  !*** ./app/assets/javascript/lib/cookie.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var doc = document;

var set = function set(name, value) {
  doc.cookie = name + '=' + value;
};

var get = function get(name) {
  var cookies = doc.cookie.split(';');

  for (var i = 0; i < cookies.length; i += 1) {
    var _cookies$i$split = cookies[i].split('='),
        _cookies$i$split2 = _slicedToArray(_cookies$i$split, 2),
        cname = _cookies$i$split2[0],
        cvalue = _cookies$i$split2[1];

    if (cname.trim() === name.trim()) {
      return cvalue;
    }
  }

  return undefined;
};

module.exports = {
  get: get,
  set: set
};

/***/ }),

/***/ "./app/assets/javascript/lib/font-awesome.js":
/*!***************************************************!*\
  !*** ./app/assets/javascript/lib/font-awesome.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = init;

var _fontawesomeSvgCore = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");

var _freeSolidSvgIcons = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");

var _freeBrandsSvgIcons = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");

function init() {
  _fontawesomeSvgCore.library.add(_freeSolidSvgIcons.faUser, _freeSolidSvgIcons.faSignOutAlt, _freeSolidSvgIcons.faEnvelope, _freeSolidSvgIcons.faUnlock, _freeSolidSvgIcons.faAlignLeft, _freeSolidSvgIcons.faKey, _freeSolidSvgIcons.faSignature, _freeSolidSvgIcons.faFilter, _freeSolidSvgIcons.faSortAmountUp, _freeSolidSvgIcons.faSortAmountDown, _freeBrandsSvgIcons.faFacebook, _freeBrandsSvgIcons.faGoogle, _freeBrandsSvgIcons.faTwitter, _freeBrandsSvgIcons.faInstagram, _freeSolidSvgIcons.faUserCircle, _freeSolidSvgIcons.faList, _freeSolidSvgIcons.faStar, _freeSolidSvgIcons.faHeart, _freeSolidSvgIcons.faComment, _freeSolidSvgIcons.faSwatchbook, _freeSolidSvgIcons.faUserFriends, _freeSolidSvgIcons.faCog, _freeSolidSvgIcons.faEdit, _freeSolidSvgIcons.faUpload, _freeSolidSvgIcons.faNewspaper, _freeSolidSvgIcons.faAt, _freeSolidSvgIcons.faAngleRight, _freeSolidSvgIcons.faAngleLeft, _freeSolidSvgIcons.faPlusSquare, _freeSolidSvgIcons.faTrash, _freeSolidSvgIcons.faCheck);
}

/***/ }),

/***/ "./app/assets/javascript/scripts/index.js":
/*!************************************************!*\
  !*** ./app/assets/javascript/scripts/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function () {
  var win = window;

  win.onload = function () {
    var pageLoading = document.getElementById('pageLoading');

    if (pageLoading) {
      pageLoading.remove();
    }

    if (vissne.env === 'production') {
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js');
      }
    }
  };
})();

/***/ }),

/***/ "./app/assets/stylesheets/scss/main.scss":
/*!***********************************************!*\
  !*** ./app/assets/stylesheets/scss/main.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9Sb290LmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2FjdGlvbnMvYWNjb3VudC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2FjdGlvbnMvYXV0aC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2FjdGlvbnMvY29tbW9uLmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvYWN0aW9ucy9kaXNjb3Zlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2FjdGlvbnMvbGlzdHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9hY3Rpb25zL21vdmllLmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9BbGVydC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb21wb25lbnRzL0Nhc3QvQ2FzdC5zY3NzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9DYXN0L2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvQ2FzdExpc3QvQ2FzdExpc3Quc2NzcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvQ2FzdExpc3QvaW5kZXguanN4Iiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9Db21wYW55LmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvQ29tcGFueUxpc3QvQ29tcGFueUxpc3Quc2NzcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvQ29tcGFueUxpc3QvaW5kZXguanN4Iiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9EZXRhaWxUYWJsZS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb21wb25lbnRzL0ZpbHRlci9GaWx0ZXIuc2NzcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvRmlsdGVyL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3Rlci5zY3NzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9Gb290ZXIvaW5kZXguanN4Iiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9NZW51LmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvTW9kYWwvTW9kYWwuc2NzcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvTW9kYWwvaW5kZXguanN4Iiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9Nb3ZpZUNhcmQvTW92aWVDYXJkLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb21wb25lbnRzL01vdmllQ2FyZC9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb21wb25lbnRzL01vdmllTGlzdC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb21wb25lbnRzL05hdmJhci9OYXZiYXIuc2NzcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvTmF2YmFyL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvTm90Rm91bmQvTm90Rm91bmQuc2NzcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvTm90Rm91bmQvaW5kZXguanN4Iiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9QYWdlTG9hZGluZy5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb21wb25lbnRzL1BhZ2luYXRpb24uanN4Iiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9Qb3N0ZXIuanN4Iiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9Qcm9maWxlQ29udGFpbmVyLmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvUHJvZ3Jlc3NCYXIuanN4Iiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9TcGlubmVyLmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvVGFibGVMaXN0L1RhYmxlTGlzdC5zY3NzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9UYWJsZUxpc3QvaW5kZXguanN4Iiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9WaWRlby9WaWRlby5zY3NzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9WaWRlby9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb25zdGFudHMvYWN0aW9uLXR5cGVzLmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29uc3RhbnRzL3Byb2ZpbGUtbWVudS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbnN0YW50cy9wcm9wLXNoYXBlcy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbnRhaW5lcnMvQWNjb3VudC9BY2NvdW50LmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbnRhaW5lcnMvQWNjb3VudC9BY2NvdW50LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb250YWluZXJzL0FjY291bnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb250YWluZXJzL0FsZXJ0RGlhbG9nL0FsZXJ0RGlhbG9nLmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbnRhaW5lcnMvQWxlcnREaWFsb2cvQWxlcnREaWFsb2cuc2NzcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbnRhaW5lcnMvQWxlcnREaWFsb2cvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb250YWluZXJzL0F1dGgvQXV0aC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb250YWluZXJzL0F1dGgvQXV0aC5zY3NzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29udGFpbmVycy9BdXRoL2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29udGFpbmVycy9EaXNjb3Zlci9EaXNjb3Zlci5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb250YWluZXJzL0Rpc2NvdmVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29udGFpbmVycy9MaXN0cy9MaXN0cy5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb250YWluZXJzL0xpc3RzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29udGFpbmVycy9Nb3ZpZS9Nb3ZpZS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb250YWluZXJzL01vdmllL2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvaW5kZXguanN4Iiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvcmVkdWNlcnMvYWNjb3VudC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL3JlZHVjZXJzL2NvbW1vbi5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL3JlZHVjZXJzL2Rpc2NvdmVyLmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvcmVkdWNlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9yZWR1Y2Vycy9saXN0cy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL3JlZHVjZXJzL21vdmllLmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvc3RvcmUvY29uZmlndXJlLXN0b3JlLmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9saWIvYWpheC1lcnJvci1oYW5kbGVyLmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9saWIvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9saWIvY29va2llLmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9saWIvZm9udC1hd2Vzb21lLmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9zY3JpcHRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvc3R5bGVzaGVldHMvc2Nzcy9tYWluLnNjc3MiXSwibmFtZXMiOlsiUm9vdCIsInN0b3JlIiwiRGlzY292ZXIiLCJBdXRoIiwiQWNjb3VudCIsIkxpc3RzIiwiTW92aWUiLCJOb3RGb3VuZCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImluc3RhbmNlT2YiLCJPYmplY3QiLCJpc1JlcXVpcmVkIiwic2V0QWNjb3VudERldGFpbCIsInR5cGUiLCJTRVRfQUNDT1VOVF9ERVRBSUwiLCJwYXlsb2FkIiwidXNlciIsImdldEFjY291bnREZXRhaWwiLCJkaXNwYXRjaCIsImF4aW9zIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsImNhdGNoIiwidXBkYXRlVXNlciIsInB1dCIsImlkIiwia2luZCIsIm1lc3NhZ2UiLCJjaGFuZ2VQYXNzd29yZCIsInBhc3N3b3JkIiwibG9naW5SZWdpc3RlciIsInVybCIsInBvc3QiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJsb2dvdXQiLCJ0b2dnbGVBbGVydERpYWxvZyIsIlRPR0dMRV9BTEVSVCIsInNldFBhZ2VMb2FkaW5nU3RhdHVzIiwiU0VUX1BBR0VfTE9BRElOR19TVEFUVVMiLCJwYWdlTG9hZGluZyIsInN0YXR1cyIsInNldExvYWRpbmdTdGF0dXMiLCJTRVRfTE9BRElOR19TVEFUVVMiLCJsb2FkaW5nIiwidG9nZ2xlRmlsdGVyIiwiVE9HR0xFX0ZJTFRFUiIsInNldFVwbG9hZGVkSW1hZ2UiLCJTRVRfVVBMT0FERURfSU1BR0UiLCJ1cGxvYWRlZEZpbGUiLCJzZXRNb3ZpZXMiLCJTRVRfTU9WSUVTIiwibW92aWVzIiwicmVzdWx0cyIsInBhZ2UiLCJ0b3RhbFBhZ2VzIiwidG90YWxfcGFnZXMiLCJ0b3RhbCIsInRvdGFsX3Jlc3VsdHMiLCJnZXRNb3ZpZXMiLCJxdWVyeSIsImtleXMiLCJmb3JFYWNoIiwicXVlcnlOYW1lIiwiaSIsInZhbHVlIiwib3AiLCJBcnJheSIsImlzQXJyYXkiLCJsZW5ndGgiLCJtdWx0aVF1ZXJ5IiwidiIsInNldFF1ZXJ5IiwiZmllbGQiLCJTRVRfUVVFUlkiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldEdlbnJlcyIsIlNFVF9HRU5SRVMiLCJnZW5yZXMiLCJnZXRHZW5yZXMiLCJzZXRMaXN0IiwiZ2V0TGlzdEJ5Q3VycmVudFVzZXIiLCJzYXZlTGlzdCIsImRlbGV0ZUxpc3QiLCJhZGRUb0xpc3QiLCJyZW1vdmVGcm9tTGlzdCIsInNldExpc3RNb3ZpZXMiLCJnZXRMaXN0TW92aWVzIiwibGlzdHMiLCJTRVRfTElTVFMiLCJtb3ZpZUlkIiwibGltaXQiLCJjdXJyZW50VXNlcklkIiwiY29va2llIiwidmlzc25lIiwiZG9tYWluIiwicm93cyIsImNvdW50IiwibGlzdCIsImNhbGxiYWNrIiwib3BzIiwibWV0aG9kIiwicmVzdWx0IiwiZGVsZXRlIiwibGlzdElkIiwiU0VUX0xJU1RfTU9WSUVTIiwic2V0TW92aWVEZXRhaWwiLCJTRVRfTU9WSUVfREVUQUlMIiwiZGV0YWlsIiwiZ2V0TW92aWVEZXRhaWwiLCJBbGVydCIsInByb3BzIiwic2hvdyIsImRlZmF1bHRQcm9wcyIsIm9uZU9mIiwiQUxFUlRfVFlQRVMiLCJib29sIiwic3RyaW5nIiwiQ2FzdCIsIm5hbWUiLCJjaGFyYWN0ZXIiLCJwcm9maWxlUGF0aCIsIkNhc3RTaGFwZSIsIkNhc3RMaXN0IiwiY2FzdHMiLCJjYXN0TGlzdCIsIm1hcCIsImMiLCJhcnJheU9mIiwiQ29tcGFueSIsImxvZ28iLCJsb2dvUGF0aCIsImltYWdlc1NlY3VyZUJhc2VVcmwiLCJjZG4iLCJDb21wYW55U2hhcGUiLCJDb21wYW55TGlzdCIsImNvbXBhbmllcyIsImxvZ29fcGF0aCIsIkRldGFpbFRhYmxlIiwibW92aWUiLCJvcmdpbmFsVGl0bGUiLCJ5ZWFyIiwidm90ZV9hdmVyYWdlIiwidm90ZV9jb3VudCIsInJlbGVhc2VfZGF0ZSIsImdlbnJlTmFtZXMiLCJ0YWdsaW5lIiwiY291bnRyaWVzIiwibGFuZ3VhZ2UiLCJkaXJlY3RvciIsIndyaXRlciIsImhvbWVwYWdlIiwiTW92aWVTaGFwZSIsInN3aXRjaFNvcnRRdWVyeSIsInNvcnRCeSIsInNwbGl0IiwiYWRkR2VucmVJZCIsImN1cnJlbnRHZW5yZXMiLCJpbmRleCIsImluZGV4T2YiLCJwdXNoIiwic3BsaWNlIiwiaGFuZGxlQ2hhbmdlWWVhciIsIk51bWJlciIsImlzTmFOIiwiRmlsdGVyIiwic29ydEljb25DbGFzcyIsInNvcnRPcHRpb25zIiwiU09SVF9PUFRJT05TIiwic29ydCIsImtleSIsInJlcGxhY2UiLCJ0b0xvY2FsZUxvd2VyQ2FzZSIsImdlbnJlT3B0aW9ucyIsImciLCJ3aXRoR2VucmVzIiwic2VhcmNoVGV4dCIsIiRldmVudCIsInRhcmdldCIsIkdlbnJlU2hhcGUiLCJGaWx0ZXJTaGFwZSIsImZ1bmMiLCJGb290ZXIiLCJNZW51IiwicGF0aCIsIml0ZW1zIiwibWVudUl0ZW1zIiwibSIsImljb24iLCJzaGFwZSIsIk1vZGFsIiwidGl0bGUiLCJjYW5jZWwiLCJzdWJtaXQiLCJjaGlsZHJlbiIsImNsYXNzTmFtZSIsInN1Ym1pdEJ1dHRvbiIsIk1vdmllQ2FyZCIsImltYWdlIiwicmF0ZSIsInNsdWciLCJudW1iZXIiLCJNb3ZpZUxpc3QiLCJwb3N0ZXIiLCJ2b3RlQXZlcmFnZSIsIk5hdmJhciIsImlzTG9nZ2VkSW4iLCJwYXRoTmFtZSIsImxvZ2luQnV0dG9uIiwidXNlck5hbWUiLCJVc2VyU2hhcGUiLCJQYWdlTG9hZGluZyIsImhhbmRsZUNsaWNrIiwiY3VycmVudFBhZ2UiLCJ0b3RhbFBhZ2UiLCJpc0ludGVnZXIiLCJuZXdQYWdlIiwiZ2VuZXJhdGVQYWdlTnVtYmVycyIsIm9wdGlvbnMiLCJidXR0b25Db3VudCIsInBhZ2VOdW1iZXJzIiwiTWF0aCIsImZsb29yIiwiYmMiLCJjZWlsIiwiUGFnaW5hdGlvbiIsIm9uUGFnaW5hdGUiLCJwYWdlQnV0dG9ucyIsInBuIiwiaW1hZ2VPbkxvYWQiLCJpbWFnZU9uRXJyb3IiLCJzcmMiLCJkZWZhdWx0Q292ZXJJbWFnZVBhdGgiLCJQb3N0ZXIiLCJhbHQiLCJQcm9maWxlQ29udGFpbmVyIiwiYXZhdGFyIiwicHJvZmlsZU1lbnUiLCJQcm9ncmVzc0JhciIsImhlaWdodCIsIndpZHRoIiwiU3Bpbm5lciIsInNpemUiLCJjb2xvciIsImFkZGlvbmFsQ2xhc3MiLCJjcmVhdGVIZWFkZXIiLCJmaWVsZHMiLCJ2aXNpYmxlRmllbGRzIiwiZmlsdGVyIiwiZiIsImhpZGRlbiIsImNyZWF0ZUJvZHkiLCJzZWxlY3RlZCIsIm9uU2VsZWN0IiwidGJvZHkiLCJpdGVtIiwiaXRlbUZpZWxkcyIsImZvcm1hdCIsInRvU3RyaW5nIiwiY3JlYXRlUGFnaW5hdGlvbiIsImRhdGFMZW5ndGgiLCJUYWJsZUxpc3QiLCJwYWdpbmF0aW9uIiwicmVzcG9uc2l2ZSIsIm9uQ3JlYXRlIiwib25FZGl0Iiwib25EZWxldGUiLCJidG5Hcm91cCIsImhlYWRzIiwiYm9keSIsInBhZ2luYXRpb25CdXR0b25zIiwiVmlkZW8iLCJ2aWRlb0tleSIsIkxPQURJTkciLCJSRUdJU1RFUiIsIlNFVF9VU0VSIiwiR0VUX01PVklFUyIsIkdFVF9MSVNUU19CWV9DVVJSRU5UX1VTRVIiLCJDUkVBVEVfTElTVCIsIkRFTEVURV9MSVNUIiwiQUREX1RPX0xJU1QiLCJERUxFVEVfRlJPTV9MSVNUIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJlbWFpbCIsImZ1bGxOYW1lIiwibWF0Y2hTaGFwZSIsImNyZXdzIiwibHRlIiwiZ3RlIiwicmVsZWFzZVllYXIiLCJzdGF0ZSIsImVkaXRNb2RlIiwidXNlckZvcm0iLCJ2YWxpZGF0aW9uIiwib2xkUGFzc3dvcmQiLCJuZXdQYXNzd29yZCIsImNvbmZpcm1OZXdQYXNzd29yZCIsImhhbmRsZUNoYW5nZSIsImJpbmQiLCJmb3JjZVVwZGF0ZSIsInNldFN0YXRlIiwibWF0Y2giLCJjbGFzcyIsImUiLCJlcnJvciIsIkNvbXBvbmVudCIsIm1hcFN0YXRlVG9Qcm9wcyIsImNvbW1vbiIsImFjY291bnQiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJhbGVydCIsInNob3dBbGVydCIsImFsZXJ0TWVzc2FnZSIsImFsZXJ0S2luZCIsIkFsZXJ0RGlhbG9nIiwiZm9ybSIsImNvbmZpcm1QYXNzd29yZCIsInN3aXRjaEZvcm0iLCJlcnJvck1lc3NhZ2UiLCJlbWFpbElucHV0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiaXNSZWdpc3RlciIsImlzVmFsaWQiLCJjaGVja1ZhbGlkaXR5IiwicHJldlN0YXRlIiwiYnV0dG9uVGV4dCIsInN3aXRjaFJlZ2lzdGVyVG9Mb2dpblRleHQiLCJyZWdpc3RlcklucHV0IiwiaGFuZGxlU3VibWl0IiwiZGlzY292ZXIiLCJsb2FkTW92aWVzIiwic2hvd0ZpbHRlciIsInBhdGhuYW1lIiwibW92aWVRdWVyeSIsImxpc3RRdWVyeSIsInNlbGVjdGVkTW92aWUiLCJtb3ZpZVRhYmxlRmllbGRzIiwibGlzdFRhYmxlRmllbGRzIiwiZGF0ZSIsIkRhdGUiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJzaG93TGlzdE1vdmllcyIsInNldExpc3RRdWVyeSIsInNldE1vdmllUXVlcnkiLCJnZXRMaXN0cyIsInRvZ2dsZU1vZGFsIiwiY3JlYXRlIiwiZGVzdHJveSIsInVwZGF0ZSIsInNhdmUiLCJiYWNrVG9MaXN0IiwiZGVsZXRlRnJvbUxpc3QiLCJhc3NpZ24iLCJzaG93TW92aWVzIiwic2hvd01vZGFsIiwicGFyc2VkVmFsdWUiLCJwYXJzZUludCIsInB1YmxpYyIsInRvdGFsTGlzdCIsInRvdGFsTW92aWUiLCJjb250ZW50IiwicyIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsInRhYmxlRmllbGRzIiwibGlzdE1vdmllIiwic2hvd0xpc3RNb2RhbCIsInRvZ2dsZUxpc3RNb2RhbCIsInBhcmFtcyIsInZpZGVvIiwidmlkZW9zIiwicG9zdGVyUGF0aCIsInByb2R1Y3Rpb25fY29tcGFuaWVzIiwiY3JlZGl0cyIsImNhc3QiLCJsIiwiaXNBZGRlZCIsImxpc3RPYmplY3QiLCJnZXRFbGVtZW50QnlJZCIsImluaXRpYWxTdGF0ZSIsImFjdGlvbiIsInVwbG9hZGVkQXZhdGFyIiwiZnJpc3ROYW1lIiwiY29uY2F0IiwiY29uZmlndXJlU3RvcmUiLCJyZWR1Y2VyIiwidGh1bmtNaWRkbGV3YXJlIiwiYWpheEVycm9ySGFuZGxlciIsInN0YXR1c0NvZGUiLCJBTEVSVF9UWVBFX0lDT05fTUFQIiwicHJpbWFyeSIsImRvYyIsInNldCIsImNvb2tpZXMiLCJjbmFtZSIsImN2YWx1ZSIsInRyaW0iLCJ1bmRlZmluZWQiLCJtb2R1bGUiLCJleHBvcnRzIiwiaW5pdCIsImxpYnJhcnkiLCJhZGQiLCJmYVVzZXIiLCJmYVNpZ25PdXRBbHQiLCJmYUVudmVsb3BlIiwiZmFVbmxvY2siLCJmYUFsaWduTGVmdCIsImZhS2V5IiwiZmFTaWduYXR1cmUiLCJmYUZpbHRlciIsImZhU29ydEFtb3VudFVwIiwiZmFTb3J0QW1vdW50RG93biIsImZhRmFjZWJvb2siLCJmYUdvb2dsZSIsImZhVHdpdHRlciIsImZhSW5zdGFncmFtIiwiZmFVc2VyQ2lyY2xlIiwiZmFMaXN0IiwiZmFTdGFyIiwiZmFIZWFydCIsImZhQ29tbWVudCIsImZhU3dhdGNoYm9vayIsImZhVXNlckZyaWVuZHMiLCJmYUNvZyIsImZhRWRpdCIsImZhVXBsb2FkIiwiZmFOZXdzcGFwZXIiLCJmYUF0IiwiZmFBbmdsZVJpZ2h0IiwiZmFBbmdsZUxlZnQiLCJmYVBsdXNTcXVhcmUiLCJmYVRyYXNoIiwiZmFDaGVjayIsIndpbiIsIm9ubG9hZCIsInJlbW92ZSIsImVudiIsIm5hdmlnYXRvciIsInNlcnZpY2VXb3JrZXIiLCJyZWdpc3RlciJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQVEsb0JBQW9CO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQWlCLDRCQUE0QjtBQUM3QztBQUNBO0FBQ0EsMEJBQWtCLDJCQUEyQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7QUFD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RUEyQkVDLCtCQTNCRixFQTRCRUMsOEJBNUJGLEVBNkJFQywrQkE3QkYsRUE4QkVDLDBCQTlCRixFQStCRUMsMEJBL0JGO0FBaUNELEM7Ozs7Ozs7Ozs7Ozs7O0FDdkVELENBQUMsWUFBTTtBQUNMLE1BQU1DLE1BQU1yWixNQUFaOztBQUVBcVosTUFBSUMsTUFBSixHQUFhLFlBQU07QUFDakIsUUFBTTlZLGNBQWMwUixTQUFTMkQsY0FBVCxDQUF3QixhQUF4QixDQUFwQjs7QUFFQSxRQUFJclYsV0FBSixFQUFpQjtBQUNmQSxrQkFBWStZLE1BQVo7QUFDRDs7QUFFRCxRQUFJeFYsT0FBT3lWLEdBQVAsS0FBZSxZQUFuQixFQUFpQztBQUMvQixVQUFJLG1CQUFtQkMsU0FBdkIsRUFBa0M7QUFDaENBLGtCQUFVQyxhQUFWLENBQXdCQyxRQUF4QixDQUFpQyxRQUFqQztBQUNEO0FBQ0Y7QUFDRixHQVpEO0FBYUQsQ0FoQkQsSTs7Ozs7Ozs7Ozs7QUNBQSx1QyIsImZpbGUiOiJhcHAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJhcHBcIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvaW5kZXguanN4XCIsXCJjb21tb25cIixcInJlYWN0XCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgQnJvd3NlclJvdXRlciBhcyBSb3V0ZXIsIFJvdXRlLCBTd2l0Y2ggfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuLy8gUGFnZXNcbmltcG9ydCBEaXNjb3ZlciBmcm9tICcuL2NvbnRhaW5lcnMvRGlzY292ZXInO1xuaW1wb3J0IE1vdmllIGZyb20gJy4vY29udGFpbmVycy9Nb3ZpZSc7XG5pbXBvcnQgQXV0aCBmcm9tICcuL2NvbnRhaW5lcnMvQXV0aCc7XG5pbXBvcnQgQWNjb3VudCBmcm9tICcuL2NvbnRhaW5lcnMvQWNjb3VudCc7XG5pbXBvcnQgTGlzdHMgZnJvbSAnLi9jb250YWluZXJzL0xpc3RzJztcbmltcG9ydCBOb3RGb3VuZCBmcm9tICcuL2NvbXBvbmVudHMvTm90Rm91bmQnO1xuXG4vLyBTaGFyZWQgQ29tcG9uZW50c1xuaW1wb3J0IEFsZXJ0RGlhbG9nIGZyb20gJy4vY29udGFpbmVycy9BbGVydERpYWxvZyc7XG5cbmNvbnN0IFJvb3QgPSAoeyBzdG9yZSB9KSA9PiAoXG4gIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgIDxGcmFnbWVudD5cbiAgICAgIDxSb3V0ZXI+XG4gICAgICAgIDxTd2l0Y2g+XG4gICAgICAgICAgPFJvdXRlIHBhdGg9XCIvXCIgZXhhY3QgY29tcG9uZW50PXtEaXNjb3Zlcn0gLz5cbiAgICAgICAgICA8Um91dGUgcGF0aD1cIi9jb21pbmctc29vblwiIGNvbXBvbmVudD17RGlzY292ZXJ9IC8+XG4gICAgICAgICAgPFJvdXRlIHBhdGg9XCIvaW4tdGhlYXRlcnNcIiBjb21wb25lbnQ9e0Rpc2NvdmVyfSAvPlxuICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2F1dGhcIiBjb21wb25lbnQ9e0F1dGh9IC8+XG4gICAgICAgICAgPFJvdXRlIHBhdGg9XCIvcHJvZmlsZS9hY2NvdW50XCIgY29tcG9uZW50PXtBY2NvdW50fSAvPlxuICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3Byb2ZpbGUvbGlzdHNcIiBjb21wb25lbnQ9e0xpc3RzfSAvPlxuICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL21vdmllLzpzbHVnLzppZFwiIGNvbXBvbmVudD17TW92aWV9IC8+XG4gICAgICAgICAgPFJvdXRlIHBhdGg9XCIvcGFnZS1ub3QtZm91bmRcIiBjb21wb25lbnQ9e05vdEZvdW5kfSAvPlxuICAgICAgICAgIDxSb3V0ZSBjb21wb25lbnQ9e05vdEZvdW5kfSAvPlxuICAgICAgICA8L1N3aXRjaD5cbiAgICAgIDwvUm91dGVyPlxuICAgICAgPEFsZXJ0RGlhbG9nIC8+XG4gICAgPC9GcmFnbWVudD5cbiAgPC9Qcm92aWRlcj5cbik7XG5cblJvb3QucHJvcFR5cGVzID0ge1xuICBzdG9yZTogUHJvcFR5cGVzLmluc3RhbmNlT2YoT2JqZWN0KS5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUm9vdDtcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmltcG9ydCB7IFNFVF9BQ0NPVU5UX0RFVEFJTCB9IGZyb20gJy4uL2NvbnN0YW50cy9hY3Rpb24tdHlwZXMnO1xuaW1wb3J0IHsgc2V0UGFnZUxvYWRpbmdTdGF0dXMsIHNldExvYWRpbmdTdGF0dXMsIHRvZ2dsZUFsZXJ0RGlhbG9nIH0gZnJvbSAnLi9jb21tb24nO1xuaW1wb3J0IGFqYXhFcnJvckhhbmRsZXIgZnJvbSAnLi4vLi4vbGliL2FqYXgtZXJyb3ItaGFuZGxlcic7XG5cbmV4cG9ydCBjb25zdCBzZXRBY2NvdW50RGV0YWlsID0gdXNlciA9PiAoe1xuICB0eXBlOiBTRVRfQUNDT1VOVF9ERVRBSUwsXG4gIHBheWxvYWQ6IHtcbiAgICB1c2VyLFxuICB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCBnZXRBY2NvdW50RGV0YWlsID0gKCkgPT4gKGRpc3BhdGNoKSA9PiB7XG4gIGRpc3BhdGNoKHNldFBhZ2VMb2FkaW5nU3RhdHVzKHRydWUpKTtcbiAgYXhpb3MuZ2V0KCcvYXBpL2FjY291bnQnKVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgZGlzcGF0Y2goc2V0UGFnZUxvYWRpbmdTdGF0dXMoZmFsc2UpKTtcbiAgICAgIGRpc3BhdGNoKHNldEFjY291bnREZXRhaWwocmVzcG9uc2UuZGF0YSkpO1xuICAgIH0pXG4gICAgLmNhdGNoKGFqYXhFcnJvckhhbmRsZXIoZGlzcGF0Y2gpKTtcbn07XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVVc2VyID0gdXNlciA9PiAoZGlzcGF0Y2gpID0+IHtcbiAgZGlzcGF0Y2goc2V0TG9hZGluZ1N0YXR1cyh0cnVlKSk7XG4gIGF4aW9zLnB1dChgL2FwaS91c2VyLyR7dXNlci5pZH1gLCB1c2VyKVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgZGlzcGF0Y2goc2V0TG9hZGluZ1N0YXR1cyhmYWxzZSkpO1xuICAgICAgZGlzcGF0Y2goc2V0QWNjb3VudERldGFpbChyZXNwb25zZS5kYXRhKSk7XG4gICAgICBkaXNwYXRjaCh0b2dnbGVBbGVydERpYWxvZyh7XG4gICAgICAgIGtpbmQ6ICdzdWNjZXNzJyxcbiAgICAgICAgbWVzc2FnZTogJ1Byb2ZpbGUgaGFzIGJlZW4gc3VjY2Vzc2Z1bGx5IHVwZGF0ZWQuJyxcbiAgICAgIH0pKTtcbiAgICB9KVxuICAgIC5jYXRjaChhamF4RXJyb3JIYW5kbGVyKGRpc3BhdGNoKSk7XG59O1xuXG5leHBvcnQgY29uc3QgY2hhbmdlUGFzc3dvcmQgPSBwYXNzd29yZCA9PiAoZGlzcGF0Y2gpID0+IHtcbiAgZGlzcGF0Y2goc2V0TG9hZGluZ1N0YXR1cyh0cnVlKSk7XG4gIGF4aW9zLnB1dCgnL2FwaS91c2VyL2NoYW5nZS1wYXNzd29yZCcsIHBhc3N3b3JkKVxuICAgIC50aGVuKCh7IGRhdGEgfSkgPT4ge1xuICAgICAgZGlzcGF0Y2goc2V0TG9hZGluZ1N0YXR1cyhmYWxzZSkpO1xuICAgICAgZGlzcGF0Y2godG9nZ2xlQWxlcnREaWFsb2coe1xuICAgICAgICBraW5kOiAnc3VjY2VzcycsXG4gICAgICAgIG1lc3NhZ2U6IGRhdGEubWVzc2FnZSxcbiAgICAgIH0pKTtcbiAgICB9KVxuICAgIC5jYXRjaChhamF4RXJyb3JIYW5kbGVyKGRpc3BhdGNoKSk7XG59O1xuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuaW1wb3J0IHsgc2V0UGFnZUxvYWRpbmdTdGF0dXMgfSBmcm9tICcuL2NvbW1vbic7XG5pbXBvcnQgYWpheEVycm9ySGFuZGxlciBmcm9tICcuLi8uLi9saWIvYWpheC1lcnJvci1oYW5kbGVyJztcblxuZXhwb3J0IGNvbnN0IGxvZ2luUmVnaXN0ZXIgPSAoZGF0YSwgdXJsKSA9PiAoZGlzcGF0Y2gpID0+IHtcbiAgZGlzcGF0Y2goc2V0UGFnZUxvYWRpbmdTdGF0dXModHJ1ZSkpO1xuICBheGlvcy5wb3N0KHVybCwgZGF0YSkudGhlbigoKSA9PiB7XG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnLyc7XG4gICAgLy8gVE9ETzogc2V0IHVzZXIgaW5mb3JtYXRpb24gdG8gY29tbW9uIHN0YXRlXG4gIH0pLmNhdGNoKGFqYXhFcnJvckhhbmRsZXIoZGlzcGF0Y2gpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBsb2dvdXQgPSAoKSA9PiB7XG5cbn07XG4iLCJpbXBvcnQge1xuICBUT0dHTEVfQUxFUlQsXG4gIFNFVF9QQUdFX0xPQURJTkdfU1RBVFVTLFxuICBTRVRfTE9BRElOR19TVEFUVVMsXG4gIFRPR0dMRV9GSUxURVIsXG4gIFNFVF9VUExPQURFRF9JTUFHRSxcbn0gZnJvbSAnLi4vY29uc3RhbnRzL2FjdGlvbi10eXBlcyc7XG5cbmV4cG9ydCBjb25zdCB0b2dnbGVBbGVydERpYWxvZyA9ICh7IG1lc3NhZ2UsIGtpbmQgfSkgPT4gKHtcbiAgdHlwZTogVE9HR0xFX0FMRVJULFxuICBtZXNzYWdlLFxuICBraW5kLFxufSk7XG5cbmV4cG9ydCBjb25zdCBzZXRQYWdlTG9hZGluZ1N0YXR1cyA9IHN0YXR1cyA9PiAoe1xuICB0eXBlOiBTRVRfUEFHRV9MT0FESU5HX1NUQVRVUyxcbiAgcGFnZUxvYWRpbmc6IHN0YXR1cyxcbn0pO1xuXG5leHBvcnQgY29uc3Qgc2V0TG9hZGluZ1N0YXR1cyA9IHN0YXR1cyA9PiAoe1xuICB0eXBlOiBTRVRfTE9BRElOR19TVEFUVVMsXG4gIGxvYWRpbmc6IHN0YXR1cyxcbn0pO1xuXG5leHBvcnQgY29uc3QgdG9nZ2xlRmlsdGVyID0gKCkgPT4gKHtcbiAgdHlwZTogVE9HR0xFX0ZJTFRFUixcbn0pO1xuXG5leHBvcnQgY29uc3Qgc2V0VXBsb2FkZWRJbWFnZSA9IHVwbG9hZGVkRmlsZSA9PiAoe1xuICB0eXBlOiBTRVRfVVBMT0FERURfSU1BR0UsXG4gIHBheWxvYWQ6IHVwbG9hZGVkRmlsZSxcbn0pO1xuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuaW1wb3J0IHsgU0VUX01PVklFUywgU0VUX1FVRVJZLCBTRVRfR0VOUkVTIH0gZnJvbSAnLi4vY29uc3RhbnRzL2FjdGlvbi10eXBlcyc7XG5pbXBvcnQgeyBzZXRMb2FkaW5nU3RhdHVzIH0gZnJvbSAnLi9jb21tb24nO1xuaW1wb3J0IGFqYXhFcnJvckhhbmRsZXIgZnJvbSAnLi4vLi4vbGliL2FqYXgtZXJyb3ItaGFuZGxlcic7XG5cbmV4cG9ydCBjb25zdCBzZXRNb3ZpZXMgPSByZXNwb25zZSA9PiAoe1xuICB0eXBlOiBTRVRfTU9WSUVTLFxuICBtb3ZpZXM6IHJlc3BvbnNlLnJlc3VsdHMsXG4gIHBhZ2U6IChyZXNwb25zZS5wYWdlICsgMSksXG4gIHRvdGFsUGFnZXM6IHJlc3BvbnNlLnRvdGFsX3BhZ2VzLFxuICB0b3RhbDogcmVzcG9uc2UudG90YWxfcmVzdWx0cyxcbn0pO1xuXG5leHBvcnQgY29uc3QgZ2V0TW92aWVzID0gKHF1ZXJ5KSA9PiB7XG4gIGxldCB1cmwgPSAnYXBpL2Rpc2NvdmVyJztcblxuICBPYmplY3Qua2V5cyhxdWVyeSkuZm9yRWFjaCgocXVlcnlOYW1lLCBpKSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSBxdWVyeVtxdWVyeU5hbWVdO1xuICAgIGNvbnN0IG9wID0gaSA9PT0gMFxuICAgICAgPyAnPydcbiAgICAgIDogJyYnO1xuXG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIHVybCArPSBgJHtvcH0ke3F1ZXJ5TmFtZX09JHt2YWx1ZX1gO1xuICAgICAgfSBlbHNlIGlmICh2YWx1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgIGxldCBtdWx0aVF1ZXJ5ID0gYCR7cXVlcnlOYW1lfT1gO1xuICAgICAgICB2YWx1ZS5mb3JFYWNoKCh2KSA9PiB7XG4gICAgICAgICAgbXVsdGlRdWVyeSArPSBgJHt2fSxgO1xuICAgICAgICB9KTtcbiAgICAgICAgdXJsICs9IGAke29wfSR7bXVsdGlRdWVyeX1gO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHNldExvYWRpbmdTdGF0dXModHJ1ZSkpO1xuICAgIGF4aW9zLmdldCh1cmwpXG4gICAgICAudGhlbigoeyBkYXRhIH0pID0+IHtcbiAgICAgICAgZGlzcGF0Y2goc2V0TG9hZGluZ1N0YXR1cyhmYWxzZSkpO1xuICAgICAgICBkaXNwYXRjaChzZXRNb3ZpZXMoZGF0YSkpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChhamF4RXJyb3JIYW5kbGVyKGRpc3BhdGNoKSk7XG4gIH07XG59O1xuXG5leHBvcnQgY29uc3Qgc2V0UXVlcnkgPSAoeyBmaWVsZCwgdmFsdWUgfSkgPT4gKGRpc3BhdGNoKSA9PiB7XG4gIGRpc3BhdGNoKHtcbiAgICB0eXBlOiBTRVRfUVVFUlksXG4gICAgZmllbGQsXG4gICAgdmFsdWUsXG4gIH0pO1xuICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG59O1xuXG5leHBvcnQgY29uc3Qgc2V0R2VucmVzID0gZ2VucmVzID0+ICh7XG4gIHR5cGU6IFNFVF9HRU5SRVMsXG4gIGdlbnJlcyxcbn0pO1xuXG5leHBvcnQgY29uc3QgZ2V0R2VucmVzID0gKCkgPT4gZGlzcGF0Y2ggPT4gYXhpb3NcbiAgLmdldCgnL2FwaS9nZW5yZScpXG4gIC50aGVuKCh7IGRhdGEgfSkgPT4gZGlzcGF0Y2goc2V0R2VucmVzKGRhdGEpKSlcbiAgLmNhdGNoKGFqYXhFcnJvckhhbmRsZXIoZGlzcGF0Y2gpKTtcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmltcG9ydCBjb29raWUgZnJvbSAnLi4vLi4vbGliL2Nvb2tpZSc7XG5pbXBvcnQgYWpheEVycm9ySGFuZGxlciBmcm9tICcuLi8uLi9saWIvYWpheC1lcnJvci1oYW5kbGVyJztcbmltcG9ydCB7XG4gIEdFVF9MSVNUU19CWV9DVVJSRU5UX1VTRVIsXG4gIENSRUFURV9MSVNULFxuICBERUxFVEVfTElTVCxcbiAgQUREX1RPX0xJU1QsXG4gIERFTEVURV9GUk9NX0xJU1QsXG4gIFNFVF9MSVNUX01PVklFUyxcbiAgU0VUX0xJU1RTLFxufSBmcm9tICcuLi9jb25zdGFudHMvYWN0aW9uLXR5cGVzJztcbmltcG9ydCB7IHNldExvYWRpbmdTdGF0dXMsIHNldFBhZ2VMb2FkaW5nU3RhdHVzLCB0b2dnbGVBbGVydERpYWxvZyB9IGZyb20gJy4vY29tbW9uJztcblxuZXhwb3J0IGZ1bmN0aW9uIHNldExpc3QoeyBsaXN0cywgdG90YWwgfSkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFNFVF9MSVNUUyxcbiAgICBwYXlsb2FkOiB7XG4gICAgICBsaXN0cyxcbiAgICAgIHRvdGFsLFxuICAgIH0sXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMaXN0QnlDdXJyZW50VXNlcih7IHBhZ2UsIGxpbWl0IH0sIG1vdmllSWQpIHtcbiAgY29uc3QgY3VycmVudFVzZXJJZCA9IGNvb2tpZS5nZXQoJ3VzZXJfaWQnKTtcblxuICBpZiAoIWN1cnJlbnRVc2VySWQpIHtcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGAke3Zpc3NuZS5kb21haW59L2F1dGhgO1xuICB9XG5cbiAgbGV0IHVybCA9IGAvYXBpL2xpc3RzP3VzZXJJZD0ke2N1cnJlbnRVc2VySWR9JnBhZ2U9JHtwYWdlfSZsaW1pdD0ke2xpbWl0fWA7XG5cbiAgaWYgKG1vdmllSWQpIHtcbiAgICB1cmwgKz0gYCZtb3ZpZUlkPSR7bW92aWVJZH1gO1xuICB9XG5cbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHNldExvYWRpbmdTdGF0dXModHJ1ZSkpO1xuICAgIGF4aW9zKHVybClcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBkaXNwYXRjaChzZXRMb2FkaW5nU3RhdHVzKHRydWUpKTtcbiAgICAgICAgZGlzcGF0Y2goc2V0UGFnZUxvYWRpbmdTdGF0dXMoZmFsc2UpKTtcbiAgICAgICAgZGlzcGF0Y2goc2V0TGlzdCh7XG4gICAgICAgICAgbGlzdHM6IHJlc3BvbnNlLmRhdGEucm93cyxcbiAgICAgICAgICB0b3RhbDogcmVzcG9uc2UuZGF0YS5jb3VudCxcbiAgICAgICAgfSkpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChhamF4RXJyb3JIYW5kbGVyKGRpc3BhdGNoKSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzYXZlTGlzdChsaXN0LCBjYWxsYmFjaykge1xuICBjb25zdCBvcHMgPSAhbGlzdC5pZCA/IHtcbiAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICB1cmw6ICcvYXBpL2xpc3RzJyxcbiAgfSA6IHtcbiAgICBtZXRob2Q6ICdwdXQnLFxuICAgIHVybDogYC9hcGkvbGlzdHMvJHtsaXN0LmlkfWAsXG4gIH07XG5cbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHNldExvYWRpbmdTdGF0dXModHJ1ZSkpO1xuICAgIGF4aW9zW29wcy5tZXRob2RdKG9wcy51cmwsIGxpc3QpXG4gICAgICAudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKHNldExvYWRpbmdTdGF0dXMoZmFsc2UpKTtcbiAgICAgICAgZGlzcGF0Y2godG9nZ2xlQWxlcnREaWFsb2coe1xuICAgICAgICAgIGtpbmQ6ICdzdWNjZXNzJyxcbiAgICAgICAgICBtZXNzYWdlOiByZXN1bHQuZGF0YS5tZXNzYWdlLFxuICAgICAgICB9KSk7XG4gICAgICAgIGlmIChjYWxsYmFjayAmJiB0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGFqYXhFcnJvckhhbmRsZXIoZGlzcGF0Y2gpKTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZUxpc3QoaWQsIGNhbGxiYWNrKSB7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaChzZXRMb2FkaW5nU3RhdHVzKHRydWUpKTtcbiAgICBheGlvcy5kZWxldGUoYC9hcGkvbGlzdHMvJHtpZH1gKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKHNldExvYWRpbmdTdGF0dXMoZmFsc2UpKTtcbiAgICAgICAgZGlzcGF0Y2godG9nZ2xlQWxlcnREaWFsb2coe1xuICAgICAgICAgIGtpbmQ6ICdzdWNjZXNzJyxcbiAgICAgICAgICBtZXNzYWdlOiByZXNwb25zZS5kYXRhLm1lc3NhZ2UsXG4gICAgICAgIH0pKTtcblxuICAgICAgICBpZiAoY2FsbGJhY2sgJiYgdHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgICAgfSkuY2F0Y2goYWpheEVycm9ySGFuZGxlcihkaXNwYXRjaCkpO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkVG9MaXN0KHsgbGlzdElkLCBtb3ZpZUlkIH0sIGNhbGxiYWNrKSB7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaChzZXRMb2FkaW5nU3RhdHVzKHRydWUpKTtcbiAgICBheGlvcy5wb3N0KGAvYXBpL2xpc3RzLyR7bGlzdElkfS9tb3ZpZS8ke21vdmllSWR9YCwge30pXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goc2V0TG9hZGluZ1N0YXR1cyhmYWxzZSkpO1xuICAgICAgICBkaXNwYXRjaCh0b2dnbGVBbGVydERpYWxvZyh7XG4gICAgICAgICAga2luZDogJ3N1Y2Nlc3MnLFxuICAgICAgICAgIG1lc3NhZ2U6IHJlc3BvbnNlLmRhdGEubWVzc2FnZSxcbiAgICAgICAgfSkpO1xuXG4gICAgICAgIGlmIChjYWxsYmFjayAmJiB0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGFqYXhFcnJvckhhbmRsZXIoZGlzcGF0Y2gpKTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUZyb21MaXN0KHsgbGlzdElkLCBtb3ZpZUlkIH0sIGNhbGxiYWNrKSB7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaChzZXRMb2FkaW5nU3RhdHVzKHRydWUpKTtcbiAgICBheGlvcy5kZWxldGUoYC9hcGkvbGlzdHMvJHtsaXN0SWR9L21vdmllLyR7bW92aWVJZH1gKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKHNldExvYWRpbmdTdGF0dXMoZmFsc2UpKTtcbiAgICAgICAgZGlzcGF0Y2godG9nZ2xlQWxlcnREaWFsb2coe1xuICAgICAgICAgIGtpbmQ6ICdzdWNjZXNzJyxcbiAgICAgICAgICBtZXNzYWdlOiByZXNwb25zZS5kYXRhLm1lc3NhZ2UsXG4gICAgICAgIH0pKTtcblxuICAgICAgICBpZiAoY2FsbGJhY2sgJiYgdHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChhamF4RXJyb3JIYW5kbGVyKGRpc3BhdGNoKSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRMaXN0TW92aWVzKHsgcm93cywgY291bnQgfSkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFNFVF9MSVNUX01PVklFUyxcbiAgICBwYXlsb2FkOiB7XG4gICAgICBtb3ZpZXM6IHJvd3MsXG4gICAgICB0b3RhbDogY291bnQsXG4gICAgfSxcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExpc3RNb3ZpZXMocXVlcnksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IHsgbGlzdElkLCBwYWdlLCBsaW1pdCB9ID0gcXVlcnk7XG5cbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHNldExvYWRpbmdTdGF0dXModHJ1ZSkpO1xuICAgIGF4aW9zLmdldChgL2FwaS9saXN0cy8ke2xpc3RJZH0/cGFnZT0ke3BhZ2V9JmxpbWl0PSR7bGltaXR9YClcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBkaXNwYXRjaChzZXRMb2FkaW5nU3RhdHVzKGZhbHNlKSk7XG4gICAgICAgIGRpc3BhdGNoKHNldExpc3RNb3ZpZXMocmVzcG9uc2UuZGF0YSkpO1xuICAgICAgICBpZiAoY2FsbGJhY2sgJiYgdHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChhamF4RXJyb3JIYW5kbGVyKGRpc3BhdGNoKSk7XG4gIH07XG59XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5pbXBvcnQgeyBTRVRfTU9WSUVfREVUQUlMIH0gZnJvbSAnLi4vY29uc3RhbnRzL2FjdGlvbi10eXBlcyc7XG5pbXBvcnQgYWpheEVycm9ySGFuZGxlciBmcm9tICcuLi8uLi9saWIvYWpheC1lcnJvci1oYW5kbGVyJztcblxuZXhwb3J0IGNvbnN0IHNldE1vdmllRGV0YWlsID0gZGV0YWlsID0+ICh7XG4gIHR5cGU6IFNFVF9NT1ZJRV9ERVRBSUwsXG4gIGRldGFpbCxcbn0pO1xuXG5leHBvcnQgY29uc3QgZ2V0TW92aWVEZXRhaWwgPSBpZCA9PiAoZGlzcGF0Y2gpID0+IHtcbiAgZGlzcGF0Y2goc2V0TW92aWVEZXRhaWwobnVsbCkpO1xuXG4gIGF4aW9zLmdldChgL2FwaS9tb3ZpZS8ke2lkfWApXG4gICAgLnRoZW4oKHsgZGF0YSB9KSA9PiBkaXNwYXRjaChcbiAgICAgIHNldE1vdmllRGV0YWlsKGRhdGEpLFxuICAgICkpXG4gICAgLmNhdGNoKGFqYXhFcnJvckhhbmRsZXIoZGlzcGF0Y2gpKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IHsgQUxFUlRfVFlQRVMgfSBmcm9tICcuLi8uLi9saWIvY29uc3RhbnRzJztcblxuY29uc3QgQWxlcnQgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIGtpbmQsXG4gICAgbWVzc2FnZSxcbiAgICBzaG93LFxuICB9ID0gcHJvcHM7XG5cbiAgaWYgKCFzaG93KSByZXR1cm4gbnVsbDtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtgYWxlcnQgYWxlcnQtJHtraW5kfSB3LTEwMCB0ZXh0LWNlbnRlcmB9IHJvbGU9XCJhbGVydFwiPlxuICAgICAge21lc3NhZ2V9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5BbGVydC5kZWZhdWx0UHJvcHMgPSB7XG4gIHNob3c6IHRydWUsXG4gIGtpbmQ6ICdpbmZvJyxcbn07XG5cbkFsZXJ0LnByb3BUeXBlcyA9IHtcbiAga2luZDogUHJvcFR5cGVzLm9uZU9mKEFMRVJUX1RZUEVTKSxcbiAgc2hvdzogUHJvcFR5cGVzLmJvb2wsXG4gIG1lc3NhZ2U6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFsZXJ0O1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgQ2FzdFNoYXBlIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzL3Byb3Atc2hhcGVzJztcbmltcG9ydCAnLi9DYXN0LnNjc3MnO1xuXG5jb25zdCBDYXN0ID0gKHtcbiAgaWQsXG4gIG5hbWUsXG4gIGNoYXJhY3RlcixcbiAgcHJvZmlsZVBhdGgsXG59KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiY2FzdFwiPlxuICAgIDxpbWcgY2xhc3NOYW1lPVwiaW1hZ2VcIiBzcmM9e3Byb2ZpbGVQYXRofSBhbHQ9e25hbWV9IC8+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjYXN0LWluZm9cIj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhhcy10ZXh0LXdlaWdodC1ib2xkXCI+e25hbWV9PC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGFzLXRleHQtd2VpZ2h0LWxpZ2h0XCI+e2NoYXJhY3Rlcn08L3NwYW4+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuKTtcblxuQ2FzdC5wcm9wVHlwZXMgPSBDYXN0U2hhcGU7XG5cbmV4cG9ydCBkZWZhdWx0IENhc3Q7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IHsgQ2FzdFNoYXBlIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzL3Byb3Atc2hhcGVzJztcbmltcG9ydCBDYXN0IGZyb20gJy4uL0Nhc3QnO1xuaW1wb3J0ICcuL0Nhc3RMaXN0LnNjc3MnO1xuXG5jb25zdCBDYXN0TGlzdCA9ICh7IGNhc3RzIH0pID0+IHtcbiAgY29uc3QgY2FzdExpc3QgPSBjYXN0cy5tYXAoYyA9PiAoXG4gICAgPENhc3RcbiAgICAgIGtleT17Yy5pZH1cbiAgICAgIG5hbWU9e2MubmFtZX1cbiAgICAgIHByb2ZpbGVQYXRoPXtjLnByb2ZpbGVQYXRofVxuICAgICAgY2hhcmFjdGVyPXtjLmNoYXJhY3Rlcn1cbiAgICAvPlxuICApKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBjYXN0LWxpc3RcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgIDxoNSBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+Q2FzdCBsaXN0PC9oNT5cbiAgICAgICAge2Nhc3RMaXN0fVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5DYXN0TGlzdC5wcm9wVHlwZXMgPSB7XG4gIGNhc3RzOiBQcm9wVHlwZXMuYXJyYXlPZihDYXN0U2hhcGUpLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYXN0TGlzdDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IENvbXBhbnlTaGFwZSB9IGZyb20gJy4uL2NvbnN0YW50cy9wcm9wLXNoYXBlcyc7XG5cbmNvbnN0IENvbXBhbnkgPSAoeyBsb2dvLCBuYW1lIH0pID0+IHtcbiAgY29uc3QgbG9nb1BhdGggPSBsb2dvXG4gICAgPyBgJHt2aXNzbmUuaW1hZ2VzU2VjdXJlQmFzZVVybH0vdzkyLyR7bG9nb31gXG4gICAgOiBgJHt2aXNzbmUuY2RufS9pbWFnZXMvcGxhY2Vob2xkZXIucG5nYDtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWEgbWItMlwiPlxuICAgICAgPGltZyBjbGFzc05hbWU9XCJtci0zIGNvbXBhbnktbG9nb1wiIHNyYz17bG9nb1BhdGh9IGFsdD17bmFtZX0gLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtYm9keVwiPlxuICAgICAgICA8aDYgY2xhc3NOYW1lPVwibXQtMFwiPntuYW1lfTwvaDY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbkNvbXBhbnkuZGVmYXVsdFByb3BzID0ge1xuICBsb2dvOiAnJyxcbiAgbmFtZTogJ0NvbXBhbnknLFxufTtcblxuQ29tcGFueS5wcm9wVHlwZXMgPSBDb21wYW55U2hhcGU7XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBhbnk7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IHsgQ29tcGFueVNoYXBlIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzL3Byb3Atc2hhcGVzJztcbmltcG9ydCBDb21wYW55IGZyb20gJy4uL0NvbXBhbnknO1xuaW1wb3J0ICcuL0NvbXBhbnlMaXN0LnNjc3MnO1xuXG5jb25zdCBDb21wYW55TGlzdCA9ICh7IGNvbXBhbmllcyB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBtYi0yXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cbiAgICAgIDxoNSBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+Q29tcGFuaWVzPC9oNT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XG4gICAgICAgIHtjb21wYW5pZXMubWFwKGMgPT4gKFxuICAgICAgICAgIDxDb21wYW55IGtleT17Yy5pZH0gbG9nbz17Yy5sb2dvX3BhdGh9IG5hbWU9e2MubmFtZX0gLz5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4pO1xuXG5Db21wYW55TGlzdC5wcm9wVHlwZXMgPSB7XG4gIGNvbXBhbmllczogUHJvcFR5cGVzLmFycmF5T2YoQ29tcGFueVNoYXBlKS5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29tcGFueUxpc3Q7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBNb3ZpZVNoYXBlIH0gZnJvbSAnLi4vY29uc3RhbnRzL3Byb3Atc2hhcGVzJztcblxuY29uc3QgRGV0YWlsVGFibGUgPSAoeyBtb3ZpZSB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG4gICAgICA8aDUgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPntgJHttb3ZpZS5vcmdpbmFsVGl0bGV9ICgke21vdmllLnllYXJ9KWB9PC9oNT5cbiAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZSB0YWJsZS1zdHJpcGVkIHRhYmxlLXJlc3BvbnNpdmUtc20gdGFibGUtcmVzcG9uc2l2ZS14c1wiPlxuICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRoPlJhdGluZzwvdGg+XG4gICAgICAgICAgICA8dGQ+e2Ake21vdmllLnZvdGVfYXZlcmFnZX0gKCR7bW92aWUudm90ZV9jb3VudH0pYH08L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRoPlJlbGVhc2UgRGF0ZTwvdGg+XG4gICAgICAgICAgICA8dGQ+e21vdmllLnJlbGVhc2VfZGF0ZX08L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRoPkdlbnJlczwvdGg+XG4gICAgICAgICAgICA8dGQ+e21vdmllLmdlbnJlTmFtZXN9PC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aD5UYWdsaW5lPC90aD5cbiAgICAgICAgICAgIDx0ZD57bW92aWUudGFnbGluZX08L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRoPkNvdW50cmllczwvdGg+XG4gICAgICAgICAgICA8dGQ+e21vdmllLmNvdW50cmllc308L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRoPkxhbmd1YWdlczwvdGg+XG4gICAgICAgICAgICA8dGQ+e21vdmllLmxhbmd1YWdlfTwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGg+RGlyZWN0b3I8L3RoPlxuICAgICAgICAgICAgPHRkPnttb3ZpZS5kaXJlY3Rvcn08L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRoPldyaXRlcjwvdGg+XG4gICAgICAgICAgICA8dGQ+e21vdmllLndyaXRlcn08L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRoPkhvbWVwYWdlPC90aD5cbiAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgPGEgaHJlZj17bW92aWUuaG9tZXBhZ2V9IHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIj57bW92aWUuaG9tZXBhZ2V9PC9hPlxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3Rib2R5PlxuICAgICAgPC90YWJsZT5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4pO1xuXG5EZXRhaWxUYWJsZS5wcm9wVHlwZXMgPSB7XG4gIG1vdmllOiBNb3ZpZVNoYXBlLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBEZXRhaWxUYWJsZTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcblxuaW1wb3J0IHsgR2VucmVTaGFwZSwgRmlsdGVyU2hhcGUgfSBmcm9tICcuLi8uLi9jb25zdGFudHMvcHJvcC1zaGFwZXMnO1xuaW1wb3J0IHsgU09SVF9PUFRJT05TIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzL2FjdGlvbi10eXBlcyc7XG5pbXBvcnQgJy4vRmlsdGVyLnNjc3MnO1xuXG5mdW5jdGlvbiBzd2l0Y2hTb3J0UXVlcnkoc29ydEJ5KSB7XG4gIGNvbnN0IFtuYW1lLCBraW5kXSA9IHNvcnRCeS5zcGxpdCgnLicpO1xuICBjb25zdCB2YWx1ZSA9IGAke25hbWV9LiR7a2luZCA9PT0gJ2Rlc2MnID8gJ2FzYycgOiAnZGVzYyd9YDtcbiAgcmV0dXJuIHtcbiAgICBmaWVsZDogJ3NvcnRCeScsXG4gICAgdmFsdWUsXG4gIH07XG59XG5cbmZ1bmN0aW9uIGFkZEdlbnJlSWQodmFsdWUsIGN1cnJlbnRHZW5yZXMpIHtcbiAgY29uc3QgaW5kZXggPSBjdXJyZW50R2VucmVzLmluZGV4T2YodmFsdWUpO1xuICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgY3VycmVudEdlbnJlcy5wdXNoKHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICBjdXJyZW50R2VucmVzLnNwbGljZShpbmRleCwgMSk7XG4gIH1cbiAgcmV0dXJuIGN1cnJlbnRHZW5yZXM7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUNoYW5nZVllYXIoeWVhciwgc2V0UXVlcnkpIHtcbiAgaWYgKHllYXIubGVuZ3RoID09PSA0ICYmICFOdW1iZXIuaXNOYU4oeWVhcikpIHtcbiAgICBzZXRRdWVyeSh7XG4gICAgICBmaWVsZDogJ3llYXInLFxuICAgICAgdmFsdWU6IHllYXIsXG4gICAgfSk7XG4gIH0gZWxzZSBpZiAoeWVhciA9PT0gJycpIHtcbiAgICBzZXRRdWVyeSh7XG4gICAgICBmaWVsZDogJ3llYXInLFxuICAgICAgdmFsdWU6IG51bGwsXG4gICAgfSk7XG4gIH1cbn1cblxuY29uc3QgRmlsdGVyID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBnZW5yZXMsXG4gICAgc2V0UXVlcnksXG4gICAgcXVlcnksXG4gICAgc2hvdyxcbiAgfSA9IHByb3BzO1xuXG4gIGlmICghc2hvdykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY29uc3Qgc29ydEljb25DbGFzcyA9IHF1ZXJ5LnNvcnRCeS5zcGxpdCgnLicpWzFdID09PSAnZGVzYydcbiAgICA/ICdkb3duJ1xuICAgIDogJ3VwJztcblxuICBjb25zdCBzb3J0T3B0aW9ucyA9IFNPUlRfT1BUSU9OUy5tYXAoKHNvcnQpID0+IHtcbiAgICBjb25zdCBrZXkgPSBzb3J0Lm5hbWUucmVwbGFjZSgvIC9nLCAnXycpLnRvTG9jYWxlTG93ZXJDYXNlKCk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxvcHRpb24ga2V5PXtrZXl9IHZhbHVlPXtgJHtrZXl9LiR7c29ydC52YWx1ZX1gfT5cbiAgICAgICAge3NvcnQubmFtZX1cbiAgICAgIDwvb3B0aW9uPlxuICAgICk7XG4gIH0pO1xuXG4gIGNvbnN0IGdlbnJlT3B0aW9ucyA9IGdlbnJlcy5tYXAoZyA9PiAoXG4gICAgPG9wdGlvbiBrZXk9e2cuaWR9IHZhbHVlPXtnLmlkfSBjbGFzc05hbWU9e3F1ZXJ5LndpdGhHZW5yZXMuaW5kZXhPZihgJHtnLmlkfWApID09PSAtMSA/ICcnIDogJ3NlbGVjdGVkJ30+XG4gICAgICB7Zy5uYW1lfVxuICAgIDwvb3B0aW9uPlxuICApKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHN0aWNreS10b3AgYmctd2hpdGUgbWItMiBwdC0yIHNoYWRvdy1zbSBkLW5vbmUgZC1sZy1mbGV4XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtc20tNiBjb2wtbWQtMyBtYi0yXCI+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGZpbHRlci1pbnB1dFwiXG4gICAgICAgICAgdmFsdWU9e3F1ZXJ5LnNlYXJjaFRleHR9XG4gICAgICAgICAgb25DaGFuZ2U9eyRldmVudCA9PiBzZXRRdWVyeSh7IGZpZWxkOiAnc2VhcmNoVGV4dCcsIHZhbHVlOiAkZXZlbnQudGFyZ2V0LnZhbHVlIH0pfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtc20tNiBjb2wtbWQtMyBtYi0yXCI+XG4gICAgICAgIDxzZWxlY3RcbiAgICAgICAgICBuYW1lPVwiZ2VucmVcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBmaWx0ZXItaW5wdXRcIlxuICAgICAgICAgIG9uQ2hhbmdlPXskZXZlbnQgPT4gc2V0UXVlcnkoeyBmaWVsZDogJ3dpdGhHZW5yZXMnLCB2YWx1ZTogYWRkR2VucmVJZCgkZXZlbnQudGFyZ2V0LnZhbHVlLCBxdWVyeS53aXRoR2VucmVzKSB9KX1cbiAgICAgICAgPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5HZW5yZXM8L29wdGlvbj5cbiAgICAgICAgICB7Z2VucmVPcHRpb25zfVxuICAgICAgICA8L3NlbGVjdD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLXNtLTYgY29sLW1kLTMgbWItMlwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XG4gICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgbmFtZT1cInNvcnRCeVwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgZmlsdGVyLWlucHV0XCJcbiAgICAgICAgICAgIGlkPVwic29ydE9wdGlvblNlbGVjdFwiXG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwiU29ydCBvcHRpb25zXCJcbiAgICAgICAgICAgIHZhbHVlPXtxdWVyeS5zb3J0Qnl9XG4gICAgICAgICAgICBvbkNoYW5nZT17JGV2ZW50ID0+IHNldFF1ZXJ5KHsgZmllbGQ6ICdzb3J0QnknLCB2YWx1ZTogJGV2ZW50LnRhcmdldC52YWx1ZSB9KX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+U29ydCBCeTwvb3B0aW9uPlxuICAgICAgICAgICAge3NvcnRPcHRpb25zfVxuICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtYXBwZW5kXCI+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5IGZpbHRlci1pbnB1dC1idXR0b25cIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRRdWVyeShzd2l0Y2hTb3J0UXVlcnkocXVlcnkuc29ydEJ5KSl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17YHNvcnQtYW1vdW50LSR7c29ydEljb25DbGFzc31gfSAvPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtc20tNiBjb2wtbWQtMyBtYi0yXCI+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlllYXJcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBmaWx0ZXItaW5wdXRcIlxuICAgICAgICAgIG9uQ2hhbmdlPXskZXZlbnQgPT4gaGFuZGxlQ2hhbmdlWWVhcigkZXZlbnQudGFyZ2V0LnZhbHVlLCBzZXRRdWVyeSl9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbkZpbHRlci5kZWZhdWx0UHJvcHMgPSB7XG4gIHNob3c6IHRydWUsXG59O1xuXG5GaWx0ZXIucHJvcFR5cGVzID0ge1xuICBnZW5yZXM6IFByb3BUeXBlcy5hcnJheU9mKEdlbnJlU2hhcGUpLmlzUmVxdWlyZWQsXG4gIHF1ZXJ5OiBGaWx0ZXJTaGFwZS5pc1JlcXVpcmVkLFxuICBzZXRRdWVyeTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgc2hvdzogUHJvcFR5cGVzLmJvb2wsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXI7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgJy4vRm9vdGVyLnNjc3MnO1xuXG5jb25zdCBGb290ZXIgPSAoKSA9PiAoXG4gIDxmb290ZXIgY2xhc3NOYW1lPVwiZm9vdGVyXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHB5LTVcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLXNtLTEyIGNvbC1tZC00XCI+XG4gICAgICAgICAgPGg1PkFib3V0IFVzPC9oNT5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIExvcmVtIElwc3VtIGlzIHNpbXBseSBkdW1teSB0ZXh0IG9mIHRoZSBwcmludGluZyBhbmQgdHlwZXNldHRpbmcgaW5kdXN0cnkuXG4gICAgICAgICAgICBMb3JlbSBJcHN1bSBpcyBzaW1wbHkgZHVtbXkgdGV4dCBvZiB0aGUgcHJpbnRpbmcgYW5kIHR5cGVzZXR0aW5nIGluZHVzdHJ5LlxuICAgICAgICAgICAgTG9yZW0gSXBzdW0gaXMgc2ltcGx5IGR1bW15IHRleHQgb2YgdGhlIHByaW50aW5nIGFuZCB0eXBlc2V0dGluZyBpbmR1c3RyeS5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPGg1PlNvY2lhbDwvaDU+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1zdWNjZXNzIGJ0bi1ibG9ja1wiPlxuICAgICAgICAgICAgICAgIGZhY2Vib29rXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtc3VjY2VzcyBidG4tYmxvY2tcIj5cbiAgICAgICAgICAgICAgICB0d2l0dGVyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtc3VjY2VzcyBidG4tYmxvY2tcIj5cbiAgICAgICAgICAgICAgICBpbnN0YWdyYW1cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1zbS0xMiBjb2wtbWQtNFwiPlxuICAgICAgICAgIDxoNT5MYXN0IFJldmlld3M8L2g1PlxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LXVuc3R5bGVkXCI+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWVkaWFcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYS1ib2R5XCI+XG4gICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cIm10LTAgbWItMVwiPkxpc3QtYmFzZWQgbWVkaWEgb2JqZWN0PC9oNj5cbiAgICAgICAgICAgICAgICBDcmFzIHNpdCBhbWV0IG5pYmggbGliZXJvLCBpbiBncmF2aWRhIG51bGxhLiBOdWxsYSB2ZWwgbWV0dXMuLi5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1lZGlhIG15LTRcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYS1ib2R5XCI+XG4gICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cIm10LTAgbWItMVwiPkxpc3QtYmFzZWQgbWVkaWEgb2JqZWN0PC9oNj5cbiAgICAgICAgICAgICAgICBDcmFzIHNpdCBhbWV0IG5pYmggbGliZXJvLCBpbiBncmF2aWRhIG51bGxhLiBOdWxsYSB2ZWwgbWV0dXMuLi5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1lZGlhXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtYm9keVwiPlxuICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJtdC0wIG1iLTFcIj5MaXN0LWJhc2VkIG1lZGlhIG9iamVjdDwvaDY+XG4gICAgICAgICAgICAgICAgQ3JhcyBzaXQgYW1ldCBuaWJoIGxpYmVybywgaW4gZ3JhdmlkYSBudWxsYS4gTnVsbGEgdmVsIG1ldHVzLi4uXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLXNtLTEyIGNvbC1tZC00XCI+XG4gICAgICAgICAgPGg1PkNvbnRhY3Q8L2g1PlxuICAgICAgICAgIDxwPisyNTUgMDAwIDAwIDAwIDAwPC9wPlxuICAgICAgICAgIDxwPmluZm9Admlzc25lLmNvbTwvcD5cbiAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwibXQtMlwiPkxhc3QgVXBkYXRlczwvaDU+XG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAgbGlzdC1ncm91cC1mbHVzaFwiPlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbVwiPkFkZCBjb21tb24gZmlsdGVyIGZvciBtb3ZpZXM8L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbVwiPkdvb2dsZSBhdXRoIG9wdGlvbnMgaXMgY29tcGxldGVkPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW1cIj5GaXhlZCBGYWNlYm9vayBhdXRoIGlzc3VlczwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIG1iLTFcIj5cbiAgICAgICAgPHNwYW4+Q29weXJpZ2h0IMKpIDIwMTkgVmlzc25lPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZm9vdGVyPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xuXG5jb25zdCBNZW51ID0gKHsgcGF0aCwgaXRlbXMgfSkgPT4ge1xuICBjb25zdCBtZW51SXRlbXMgPSBpdGVtcy5tYXAobSA9PiAoXG4gICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCIga2V5PXttLnBhdGh9PlxuICAgICAgPExpbmtcbiAgICAgICAgY2xhc3NOYW1lPXtgbmF2LWxpbmsgJHttLnBhdGggPT09IHBhdGggPyAnYWN0aXZlJyA6ICcnfWB9XG4gICAgICAgIHRvPXttLnBhdGh9XG4gICAgICA+XG4gICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17bS5pY29ufSAvPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtbC0yXCI+e20ubmFtZX08L3NwYW4+XG4gICAgICA8L0xpbms+XG4gICAgPC9saT5cbiAgKSk7XG5cbiAgcmV0dXJuIChcbiAgICA8dWwgY2xhc3NOYW1lPVwibmF2IG5hdi10YWJzIGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICAgIHttZW51SXRlbXN9XG4gICAgPC91bD5cbiAgKTtcbn07XG5cbk1lbnUucHJvcFR5cGVzID0ge1xuICBwYXRoOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGl0ZW1zOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc2hhcGUoe1xuICAgIHBhdGg6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBpY29uOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICB9KSkuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1lbnU7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0ICcuL01vZGFsLnNjc3MnO1xuXG5jb25zdCBNb2RhbCA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgdGl0bGUsXG4gICAgY2FuY2VsLFxuICAgIHN1Ym1pdCxcbiAgICBjaGlsZHJlbixcbiAgICBzaG93LFxuICB9ID0gcHJvcHM7XG5cbiAgY29uc3QgY2xhc3NOYW1lID0gc2hvdyA/ICdzaG93IGQtYmxvY2snIDogJyc7XG4gIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IHN1Ym1pdFxuICAgID8gPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgb25DbGljaz17c3VibWl0fT5TYXZlPC9idXR0b24+XG4gICAgOiBudWxsO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2Btb2RhbCBmYWRlICR7Y2xhc3NOYW1lfWB9IHRhYkluZGV4PVwiLTFcIiByb2xlPVwiZGlhbG9nXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgZGF0YS1iYWNrZHJvcD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZGlhbG9nIG1vZGFsLWRpYWxvZy1zY3JvbGxhYmxlXCIgcm9sZT1cImRpYWxvZ1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWhlYWRlclwiPlxuICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm1vZGFsLXRpdGxlXCI+e3RpdGxlfTwvaDU+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgYXJpYS1sYWJlbD1cIkNsb3NlXCIgb25DbGljaz17Y2FuY2VsfT5cbiAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYm9keVwiPlxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZm9vdGVyXCI+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgb25DbGljaz17Y2FuY2VsfT5DbG9zZTwvYnV0dG9uPlxuICAgICAgICAgICAge3N1Ym1pdEJ1dHRvbn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbk1vZGFsLmRlZmF1bHRQcm9wcyA9IHtcbiAgc2hvdzogZmFsc2UsXG59O1xuXG5Nb2RhbC5wcm9wVHlwZXMgPSB7XG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGNhbmNlbDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgc3VibWl0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLmluc3RhbmNlT2YoT2JqZWN0KS5pc1JlcXVpcmVkLFxuICBzaG93OiBQcm9wVHlwZXMuYm9vbCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1vZGFsO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBQb3N0ZXIgZnJvbSAnLi4vUG9zdGVyJztcbmltcG9ydCAnLi9Nb3ZpZUNhcmQuc2Nzcyc7XG5cbmNvbnN0IE1vdmllQ2FyZCA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgaWQsXG4gICAgdGl0bGUsXG4gICAgaW1hZ2UsXG4gICAgcmF0ZSxcbiAgICBzbHVnLFxuICB9ID0gcHJvcHM7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vdmllLWNhcmQgaC0xMDAgdy0xMDAgcm91bmRlZC0wIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWNlbnRlciBpbWctdGh1bWJuYWlsXCI+XG4gICAgICA8TGluayB0bz17YG1vdmllLyR7c2x1Z30vJHtpZH1gfSBjbGFzc05hbWU9XCJ3LTEwMFwiPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiYWRnZSByYXRpbmctdGFnIHNoYWRvdy1zbSBkLWZsZXggZmxleC1jb2x1bW5cIj5cbiAgICAgICAgICB7cmF0ZX1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8UG9zdGVyIHNyYz17aW1hZ2V9IGFsdD17dGl0bGV9IC8+XG4gICAgICA8L0xpbms+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5Nb3ZpZUNhcmQucHJvcFR5cGVzID0ge1xuICBpZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBpbWFnZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICByYXRlOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIHNsdWc6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1vdmllQ2FyZDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgeyBNb3ZpZVNoYXBlIH0gZnJvbSAnLi4vY29uc3RhbnRzL3Byb3Atc2hhcGVzJztcbmltcG9ydCBNb3ZpZUNhcmQgZnJvbSAnLi9Nb3ZpZUNhcmQnO1xuXG5jb25zdCBNb3ZpZUxpc3QgPSAoeyBtb3ZpZXMgfSkgPT4ge1xuICBjb25zdCBsaXN0ID0gbW92aWVzLm1hcChtb3ZpZSA9PiAoXG4gICAgPGRpdiBrZXk9e21vdmllLmlkfSBjbGFzc05hbWU9XCJjb2wtMTIgY29sLXNtLTYgY29sLW1kLTQgY29sLWxnLTIgbWItMiBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgICAgPE1vdmllQ2FyZFxuICAgICAgICBpZD17bW92aWUuaWR9XG4gICAgICAgIGltYWdlPXttb3ZpZS5wb3N0ZXJ9XG4gICAgICAgIHRpdGxlPXttb3ZpZS50aXRsZX1cbiAgICAgICAgcmF0ZT17bW92aWUudm90ZUF2ZXJhZ2V9XG4gICAgICAgIHNsdWc9e21vdmllLnNsdWd9XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICB7bGlzdH1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbk1vdmllTGlzdC5wcm9wVHlwZXMgPSB7XG4gIG1vdmllczogUHJvcFR5cGVzLmFycmF5T2YoTW92aWVTaGFwZSkuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1vdmllTGlzdDtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgeyBVc2VyU2hhcGUgfSBmcm9tICcuLi8uLi9jb25zdGFudHMvcHJvcC1zaGFwZXMnO1xuaW1wb3J0ICcuL05hdmJhci5zY3NzJztcblxuY29uc3QgTmF2YmFyID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICB1c2VyLFxuICAgIGlzTG9nZ2VkSW4sXG4gICAgcGF0aE5hbWUsXG4gIH0gPSBwcm9wcztcblxuICBjb25zdCBsb2dpbkJ1dHRvbiA9IGlzTG9nZ2VkSW4gPyAoXG4gICAgPEZyYWdtZW50PlxuICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtIFwiPlxuICAgICAgICA8TGluayBjbGFzc05hbWU9XCJuYXYtbGlua1wiIHRvPVwiL3Byb2ZpbGUvYWNjb3VudFwiIHRpdGxlPVwiUHJvZmlsZVwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1yLTJcIj57dXNlci51c2VyTmFtZX08L3NwYW4+XG4gICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPVwidXNlclwiIC8+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvbGk+XG4gICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBocmVmPVwiL2xvZ291dFwiIHRpdGxlPVwiTG9nb3V0XCI+XG4gICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPVwic2lnbi1vdXQtYWx0XCIgLz5cbiAgICAgICAgPC9hPlxuICAgICAgPC9saT5cbiAgICA8L0ZyYWdtZW50PlxuICApIDogKFxuICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgPExpbmsgdG89XCIvYXV0aFwiIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+bG9naW48L0xpbms+XG4gICAgPC9saT5cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyIG5hdmJhci1leHBhbmQtbGcgbmF2YmFyLWRhcmsgYmctZGFya1wiPlxuICAgICAgPExpbmsgY2xhc3NOYW1lPVwibmF2YmFyLWJyYW5kXCIgdG89XCIvXCI+XG4gICAgICAgIDxpbWdcbiAgICAgICAgICBzcmM9e2Ake3Zpc3NuZS5jZG59L2ltYWdlcy9sb2dvLnBuZ2B9XG4gICAgICAgICAgYWx0PVwiVmlzc25lXCJcbiAgICAgICAgICBoZWlnaHQ9XCIzMFwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwibXgtYXV0byBkLWJsb2NrXCJcbiAgICAgICAgLz5cbiAgICAgIDwvTGluaz5cblxuICAgICAgPGRpdj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyXCJcbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICBpZD1cImZpbHRlckJ1dHRvblwiXG4gICAgICAgID5cbiAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249XCJmaWx0ZXJcIiAvPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyXCJcbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCJcbiAgICAgICAgICBkYXRhLXRhcmdldD1cIiNuYXZiYXJTdXBwb3J0ZWRDb250ZW50XCJcbiAgICAgICAgICBhcmlhLWNvbnRyb2xzPVwibmF2YmFyU3VwcG9ydGVkQ29udGVudFwiXG4gICAgICAgICAgYXJpYS1leHBhbmRlZD1cImZhbHNlXCJcbiAgICAgICAgICBhcmlhLWxhYmVsPVwiVG9nZ2xlIG5hdmlnYXRpb25cIlxuICAgICAgICA+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZXItaWNvblwiIC8+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sbGFwc2UgbmF2YmFyLWNvbGxhcHNlXCIgaWQ9XCJuYXZiYXJTdXBwb3J0ZWRDb250ZW50XCI+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZiYXItbmF2IG1yLWF1dG9cIj5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YG5hdi1saW5rICR7cGF0aE5hbWUgPT09ICcvaW4tdGhlYXRlcnMnID8gJ2FjdGl2ZScgOiAnJ31gfVxuICAgICAgICAgICAgICB0bz1cIi9pbi10aGVhdGVyc1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIGluIHRoZWF0ZXJzXG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YG5hdi1saW5rICR7cGF0aE5hbWUgPT09ICcvY29taW5nLXNvb24nID8gJ2FjdGl2ZScgOiAnJ31gfVxuICAgICAgICAgICAgICB0bz1cIi9jb21pbmctc29vblwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIGNvbWluZyBzb29uZ1xuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZiYXItbmF2IG15LWF1dG9cIj5cbiAgICAgICAgICB7bG9naW5CdXR0b259XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICA8L25hdj5cbiAgKTtcbn07XG5cbk5hdmJhci5kZWZhdWx0UHJvcHMgPSB7XG4gIGlzTG9nZ2VkSW46IGZhbHNlLFxuICB1c2VyOiB7fSxcbiAgcGF0aE5hbWU6ICcvJyxcbn07XG5cbk5hdmJhci5wcm9wVHlwZXMgPSB7XG4gIGlzTG9nZ2VkSW46IFByb3BUeXBlcy5ib29sLFxuICB1c2VyOiBVc2VyU2hhcGUsXG4gIHBhdGhOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0ICcuL05vdEZvdW5kLnNjc3MnO1xuXG5jb25zdCBOb3RGb3VuZCA9ICgpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLW5vdC1mb3VuZFwiPlxuICAgIDxpbWcgc3JjPXtgJHt2aXNzbmUuY2RufS9pbWFnZXMvb25nLnBuZ2B9IGFsdD1cIjQwNFwiIC8+XG4gICAgPGg0PjQwNDwvaDQ+XG4gICAgPGg1PlBhZ2Ugbm90IGZvdW5kPC9oNT5cbiAgICA8cD5cbiAgICAgIFdlIGFyZSBzb3JyeS4gVGhlIHBhZ2UgeW91IGFyZSBsb29raW5nIGZvciB3YXMgbW92ZWQsIHJlbW92ZWQsIHJlbmFtZWQgb3IgbWlnaHQgbmV2ZXIgZXhpc3RlZC5cbiAgICA8L3A+XG4gICAgPGEgaHJlZj1cIi9cIiBjbGFzc05hbWU9XCJidXR0b24gaXMtcHJpbWFyeVwiPkdPIFRPIEhPTUU8L2E+XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgTm90Rm91bmQ7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IFNwaW5uZXIgZnJvbSAnLi9TcGlubmVyJztcblxuY29uc3QgUGFnZUxvYWRpbmcgPSAoeyBzaG93IH0pID0+IHtcbiAgaWYgKCFzaG93KSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zaXRpb24tZml4ZWQgdG9wLTAgbGVmdC0wIGJvdHRvbS0wIGJnLWxpZ2h0IGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlciB3LTEwMCBoLTEwMFwiPlxuICAgICAgPFNwaW5uZXIgc2hvdyBzaXplPVwibGdcIiBhZGRpb25hbENsYXNzPVwibXItMlwiIC8+XG4gICAgICBMb2FkaW5nLi4uXG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5QYWdlTG9hZGluZy5wcm9wVHlwZXMgPSB7XG4gIHNob3c6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQYWdlTG9hZGluZztcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcblxuY29uc3QgaGFuZGxlQ2xpY2sgPSAocGFnZSwgY3VycmVudFBhZ2UsIHRvdGFsUGFnZSkgPT4ge1xuICBsZXQgcmVzdWx0ID0gMTtcblxuICBpZiAoTnVtYmVyLmlzSW50ZWdlcihwYWdlKSkge1xuICAgIHJldHVybiB7IHBhZ2UgfTtcbiAgfVxuXG4gIGlmIChwYWdlID09PSAncHJldicpIHtcbiAgICBjb25zdCBuZXdQYWdlID0gKGN1cnJlbnRQYWdlIC0gMSk7XG4gICAgcmVzdWx0ID0gbmV3UGFnZSA9PT0gMCA/IDEgOiBuZXdQYWdlO1xuICB9IGVsc2UgaWYgKHBhZ2UgPT09ICduZXh0Jykge1xuICAgIHJlc3VsdCA9ICgoY3VycmVudFBhZ2UgKyAxKSA+IHRvdGFsUGFnZSlcbiAgICAgID8gdG90YWxQYWdlXG4gICAgICA6IChjdXJyZW50UGFnZSArIDEpO1xuICB9XG5cbiAgcmV0dXJuIHsgcGFnZTogcmVzdWx0IH07XG59O1xuXG5jb25zdCBnZW5lcmF0ZVBhZ2VOdW1iZXJzID0gKG9wdGlvbnMpID0+IHtcbiAgY29uc3Qge1xuICAgIHBhZ2UsXG4gICAgbGltaXQsXG4gICAgdG90YWwsXG4gICAgYnV0dG9uQ291bnQsXG4gIH0gPSBvcHRpb25zO1xuICBjb25zdCBwYWdlTnVtYmVycyA9IFtdO1xuICBjb25zdCB0b3RhbFBhZ2UgPSBNYXRoLmZsb29yKHRvdGFsIC8gbGltaXQpO1xuICBjb25zdCBiYyA9IE1hdGguY2VpbChidXR0b25Db3VudCAvIDIpO1xuXG4gIGZvciAobGV0IGkgPSAocGFnZSAtIChiYyAtIDEpKTsgaSA8IChwYWdlICsgYmMpOyBpICs9IDEpIHtcbiAgICBpZiAoaSA+IDAgJiYgaSA8PSB0b3RhbFBhZ2UpIHtcbiAgICAgIHBhZ2VOdW1iZXJzLnB1c2goaSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHBhZ2VOdW1iZXJzO1xufTtcblxuXG5jb25zdCBQYWdpbmF0aW9uID0gKHsgb3B0aW9ucyB9KSA9PiB7XG4gIGNvbnN0IHsgcGFnZSwgb25QYWdpbmF0ZSwgbGltaXQsIHRvdGFsIH0gPSBvcHRpb25zO1xuXG4gIGNvbnN0IHBhZ2VOdW1iZXJzID0gZ2VuZXJhdGVQYWdlTnVtYmVycyhvcHRpb25zKTtcbiAgY29uc3QgdG90YWxQYWdlID0gTWF0aC5mbG9vcih0b3RhbCAvIGxpbWl0KTtcblxuICBpZiAocGFnZU51bWJlcnMubGVuZ3RoIDwgMikge1xuICAgIHJldHVybiA8c3BhbiAvPjtcbiAgfVxuXG4gIGNvbnN0IHBhZ2VCdXR0b25zID0gcGFnZU51bWJlcnMubWFwKHBuID0+IChcbiAgICA8bGkgY2xhc3NOYW1lPXtgcGFnZS1pdGVtICAke3BuID09PSBwYWdlID8gJ2FjdGl2ZScgOiAnJ31gfT5cbiAgICAgIDxidXR0b25cbiAgICAgICAgY2xhc3NOYW1lPVwicGFnZS1saW5rIHJvdW5kZWQtMFwiXG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICBvbkNsaWNrPXsoKSA9PiAocG4gIT09IHBhZ2UgPyBvblBhZ2luYXRlKGhhbmRsZUNsaWNrKHBuKSkgOiAnJyl9XG4gICAgICA+XG4gICAgICAgIHtwbn1cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvbGk+XG4gICkpO1xuXG4gIHJldHVybiAoXG4gICAgPG5hdiBhcmlhLWxhYmVsPVwiUGFnaW5hdGlvblwiPlxuICAgICAgPHVsIGNsYXNzTmFtZT1cInBhZ2luYXRpb25cIj5cbiAgICAgICAgPGxpIGNsYXNzTmFtZT17YHBhZ2UtaXRlbSAke3BhZ2UgPT09IDEgPyAnZGlzYWJsZWQnIDogJyd9YH0+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicGFnZS1saW5rIHJvdW5kZWQtMFwiXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uUGFnaW5hdGUoaGFuZGxlQ2xpY2soJ3ByZXYnLCBwYWdlKSl9XG4gICAgICAgICAgICBkaXNhYmxlZD17cGFnZSA9PT0gMX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249XCJhbmdsZS1sZWZ0XCIgLz5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9saT5cbiAgICAgICAge3BhZ2VCdXR0b25zfVxuICAgICAgICA8bGkgY2xhc3NOYW1lPXtgcGFnZS1pdGVtICR7cGFnZSA9PT0gdG90YWxQYWdlID8gJ2Rpc2FibGVkJyA6ICcnfWB9PlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInBhZ2UtbGluayByb3VuZGVkLTBcIlxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvblBhZ2luYXRlKGhhbmRsZUNsaWNrKCduZXh0JywgcGFnZSkpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj1cImFuZ2xlLXJpZ2h0XCIgLz5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG4gICAgPC9uYXY+XG4gICk7XG59O1xuXG5QYWdpbmF0aW9uLmRlZmF1bHRQcm9wcyA9IHtcbiAgb3B0aW9uczoge1xuICAgIGJ1dHRvbkNvdW50OiAzLFxuICAgIHRvdGFsOiAwLFxuICAgIHBhZ2U6IDEsXG4gICAgbGltaXQ6IDEwLFxuICB9LFxufTtcblxuUGFnaW5hdGlvbi5wcm9wVHlwZXMgPSB7XG4gIG9wdGlvbnM6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgdG90YWw6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgbGltaXQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgcGFnZTogUHJvcFR5cGVzLm51bWJlcixcbiAgICBvblBhZ2luYXRlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBidXR0b25Db3VudDogUHJvcFR5cGVzLm51bWJlcixcbiAgfSksXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQYWdpbmF0aW9uO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmZ1bmN0aW9uIGltYWdlT25Mb2FkKCkge1xuXG59XG5cbmZ1bmN0aW9uIGltYWdlT25FcnJvcigpIHtcbiAgdGhpcy5zcmMgPSB2aXNzbmUuZGVmYXVsdENvdmVySW1hZ2VQYXRoO1xufVxuXG5jb25zdCBQb3N0ZXIgPSAoeyBzcmMsIGFsdCB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiaC0xMDAgdy0xMDAgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgPGltZ1xuICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCJcbiAgICAgIHNyYz17YCR7c3JjfWB9XG4gICAgICBvbkxvYWQ9e2ltYWdlT25Mb2FkfVxuICAgICAgb25FcnJvcj17aW1hZ2VPbkVycm9yfVxuICAgICAgYWx0PXthbHR9XG4gICAgLz5cbiAgPC9kaXY+XG4pO1xuXG5Qb3N0ZXIucHJvcFR5cGVzID0ge1xuICBzcmM6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgYWx0OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQb3N0ZXI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgTWVudSBmcm9tICcuL01lbnUnO1xuaW1wb3J0IFBhZ2VMb2FkaW5nIGZyb20gJy4vUGFnZUxvYWRpbmcnO1xuaW1wb3J0IHByb2ZpbGVNZW51IGZyb20gJy4uL2NvbnN0YW50cy9wcm9maWxlLW1lbnUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9maWxlQ29udGFpbmVyKHByb3BzKSB7XG4gIGNvbnN0IHsgY2hpbGRyZW4sIHBhdGgsIHBhZ2VMb2FkaW5nLCB1c2VyIH0gPSBwcm9wcztcblxuICBpZiAocGFnZUxvYWRpbmcpIHtcbiAgICByZXR1cm4gPFBhZ2VMb2FkaW5nIHNob3cgLz47XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zaXRpb24tcmVsYXRpdmVcIj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tbGluayByb3VuZGVkLWNpcmNsZSBhdmF0YXItYnV0dG9uXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIHNyYz17dXNlci5hdmF0YXIgfHwgYCR7dmlzc25lLmNkbn0vdWNvbnRlbnQvYXZhdGFyL2RlZmF1bHQtYXZhdGFyLmpwZ2B9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIHJvdW5kZWQtY2lyY2xlIGJvcmRlciBhdmF0YXJcIlxuICAgICAgICAgICAgICAgIGFsdD1cIkF2YXRhclwiXG4gICAgICAgICAgICAgICAgaWQ9XCJhdmF0YXJcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgICAgICAgIDxoNT57YEAke3VzZXIudXNlck5hbWV9YH08L2g1PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPE1lbnUgaXRlbXM9e3Byb2ZpbGVNZW51fSBwYXRoPXtwYXRofSAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY29uc3QgUHJvZ3Jlc3NCYXIgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBzaG93LCBoZWlnaHQgfSA9IHByb3BzO1xuXG4gIGlmICghc2hvdykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2dyZXNzXCIgc3R5bGU9e3sgaGVpZ2h0OiBgJHtoZWlnaHR9cHhgIH19PlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9XCJwcm9ncmVzcy1iYXIgcHJvZ3Jlc3MtYmFyLXN0cmlwZWQgcHJvZ3Jlc3MtYmFyLWFuaW1hdGVkXCJcbiAgICAgICAgcm9sZT1cInByb2dyZXNzYmFyXCJcbiAgICAgICAgYXJpYS12YWx1ZW5vdz1cIjc1XCJcbiAgICAgICAgYXJpYS12YWx1ZW1pbj1cIjBcIlxuICAgICAgICBhcmlhLXZhbHVlbWF4PVwiMTAwXCJcbiAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cblByb2dyZXNzQmFyLmRlZmF1bHRQcm9wcyA9IHtcbiAgc2hvdzogZmFsc2UsXG4gIGhlaWdodDogMixcbn07XG5cblByb2dyZXNzQmFyLnByb3BUeXBlcyA9IHtcbiAgc2hvdzogUHJvcFR5cGVzLmJvb2wsXG4gIGhlaWdodDogUHJvcFR5cGVzLm51bWJlcixcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2dyZXNzQmFyO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNwaW5uZXIocHJvcHMpIHtcbiAgY29uc3Qge1xuICAgIHNob3csXG4gICAgc2l6ZSxcbiAgICBraW5kLFxuICAgIGNvbG9yLFxuICAgIGFkZGlvbmFsQ2xhc3MsXG4gIH0gPSBwcm9wcztcblxuICBpZiAoIXNob3cpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2BzcGlubmVyLSR7a2luZH0gc3Bpbm5lci0ke2tpbmR9LSR7c2l6ZX0gdGV4dC0ke2NvbG9yfSAke2FkZGlvbmFsQ2xhc3N9YH0gcm9sZT1cInN0YXR1c1wiPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPkxvYWRpbmcuLi48L3NwYW4+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cblNwaW5uZXIuZGVmYXVsdFByb3BzID0ge1xuICBzaG93OiBmYWxzZSxcbiAgc2l6ZTogJ3NtJyxcbiAga2luZDogJ2dyb3cnLFxuICBjb2xvcjogJ3ByaW1hcnknLFxuICBhZGRpb25hbENsYXNzOiAnJyxcbn07XG5cblNwaW5uZXIucHJvcFR5cGVzID0ge1xuICBzaG93OiBQcm9wVHlwZXMuYm9vbCxcbiAgYWRkaW9uYWxDbGFzczogUHJvcFR5cGVzLnN0cmluZyxcbiAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICAnc20nLFxuICAgICdtZCcsXG4gICAgJ2xnJyxcbiAgICAneGwnLFxuICBdKSxcbiAga2luZDogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICAnYm9yZGVyJyxcbiAgICAnZ3JvdycsXG4gIF0pLFxuICBjb2xvcjogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICAncHJpbWFyeScsXG4gICAgJ3NlY29uZGFyeScsXG4gICAgJ3N1Y2Nlc3MnLFxuICAgICdkYW5nZXInLFxuICAgICd3YXJuaW5nJyxcbiAgICAnaW5mbycsXG4gICAgJ2xpZ2h0JyxcbiAgICAnZGFyaycsXG4gIF0pLFxufTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IFBhZ2luYXRpb24gZnJvbSAnLi4vUGFnaW5hdGlvbic7XG5pbXBvcnQgQWxlcnQgZnJvbSAnLi4vQWxlcnQnO1xuaW1wb3J0ICcuL1RhYmxlTGlzdC5zY3NzJztcblxuY29uc3QgY3JlYXRlSGVhZGVyID0gKGZpZWxkcykgPT4ge1xuICBjb25zdCB2aXNpYmxlRmllbGRzID0gZmllbGRzXG4gICAgLmZpbHRlcihmID0+ICFmLmhpZGRlbilcbiAgICAubWFwKGYgPT4gPHRoIHNjb3BlPVwiY29sXCI+e2YudGl0bGV9PC90aD4pO1xuXG4gIHJldHVybiA8dHI+e3Zpc2libGVGaWVsZHN9PC90cj47XG59O1xuXG5jb25zdCBjcmVhdGVCb2R5ID0gKGRhdGEsIGZpZWxkcywgc2VsZWN0ZWQsIG9uU2VsZWN0KSA9PiB7XG4gIGNvbnN0IHRib2R5ID0gW107XG5cbiAgZGF0YS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgY29uc3QgaXRlbUZpZWxkcyA9IFtdO1xuXG4gICAgZmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgICBpZiAoZmllbGQuaGlkZGVuKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB2ID0gaXRlbVtmaWVsZC5uYW1lXTtcbiAgICAgIGNvbnN0IHZhbHVlID0gZmllbGQuZm9ybWF0XG4gICAgICAgID8gZmllbGQuZm9ybWF0KHYpXG4gICAgICAgIDogdi50b1N0cmluZygpO1xuXG4gICAgICBpdGVtRmllbGRzLnB1c2goPHRkPnt2YWx1ZX08L3RkPik7XG4gICAgfSk7XG5cbiAgICB0Ym9keS5wdXNoKFxuICAgICAgPHRyIGNsYXNzTmFtZT17YCR7aXRlbS5pZCA9PT0gc2VsZWN0ZWQuaWQgPyAnc2VsZWN0ZWQnIDogJyd9YH0gb25DbGljaz17KCkgPT4gb25TZWxlY3QoaXRlbSl9PlxuICAgICAgICB7aXRlbUZpZWxkc31cbiAgICAgIDwvdHI+LFxuICAgICk7XG4gIH0pO1xuXG4gIHJldHVybiB0Ym9keTtcbn07XG5cbmNvbnN0IGNyZWF0ZVBhZ2luYXRpb24gPSAob3B0aW9ucywgZGF0YUxlbmd0aCkgPT4ge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cbiAgICAgIDxQYWdpbmF0aW9uIG9wdGlvbnM9e29wdGlvbnN9IC8+XG4gICAgICA8c3Bhbj57YFNob3cgJHtkYXRhTGVuZ3RofSByZXN1bHQgb2YgJHtvcHRpb25zLnRvdGFsfWB9PC9zcGFuPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgVGFibGVMaXN0ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICB0aXRsZSxcbiAgICBkYXRhLFxuICAgIHNlbGVjdGVkLFxuICAgIGZpZWxkcyxcbiAgICBwYWdpbmF0aW9uLFxuICAgIHJlc3BvbnNpdmUsXG4gICAgb25DcmVhdGUsXG4gICAgb25FZGl0LFxuICAgIG9uRGVsZXRlLFxuICAgIG9uU2VsZWN0LFxuICB9ID0gcHJvcHM7XG5cbiAgY29uc3QgYnRuR3JvdXAgPSAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2BidG4tZ3JvdXAgdy0xMDAgJHsoIW9uQ3JlYXRlICYmICFvbkVkaXQgJiYgIW9uRGVsZXRlKSA/ICdkLW5vbmUnIDogJyd9YH0gcm9sZT1cImdyb3VwXCIgYXJpYS1sYWJlbD1cImNydWRcIj5cbiAgICAgIDxidXR0b25cbiAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgIGNsYXNzTmFtZT17YGJ0biBidG4tc2Vjb25kYXJ5IHJvdW5kZWQtMCBidG4tc20gJHtvbkNyZWF0ZSA/ICcnIDogJ2Qtbm9uZSd9YH1cbiAgICAgICAgb25DbGljaz17b25DcmVhdGV9XG4gICAgICA+XG4gICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj1cInBsdXMtc3F1YXJlXCIgLz5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWwtMVwiPkNyZWF0ZTwvc3Bhbj5cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvblxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgY2xhc3NOYW1lPXtgYnRuIGJ0bi1zZWNvbmRhcnkgcm91bmRlZC0wIGJ0bi1zbSAke29uRWRpdCA/ICcnIDogJ2Qtbm9uZSd9YH1cbiAgICAgICAgb25DbGljaz17b25FZGl0fVxuICAgICAgPlxuICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249XCJlZGl0XCIgLz5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWwtMVwiPkVkaXQ8L3NwYW4+XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxidXR0b25cbiAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgIGNsYXNzTmFtZT17YGJ0biBidG4tc2Vjb25kYXJ5IHJvdW5kZWQtMCBidG4tc20gJHtvbkRlbGV0ZSA/ICcnIDogJ2Qtbm9uZSd9YH1cbiAgICAgICAgb25DbGljaz17b25EZWxldGV9XG4gICAgICA+XG4gICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj1cInRyYXNoXCIgLz5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWwtMVwiPkRlbGV0ZTwvc3Bhbj5cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xuXG4gIGlmICghZGF0YSB8fCBkYXRhLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtdC0yXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgPEFsZXJ0IG1lc3NhZ2U9XCJUaGVyZSB3ZXJlIG5vIHJlc3VsdC5cIiBraW5kPVwid2FybmluZ1wiIC8+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvbkNyZWF0ZX0gY2xhc3NOYW1lPXtgYnRuIGJ0bi1vdXRsaW5lLXByaW1hcnkgdy0xMDAgJHtvbkNyZWF0ZSA/ICcnIDogJ2Qtbm9uZSd9YH0gdHlwZT1cImJ1dHRvblwiPlxuICAgICAgICAgICAgQWRkXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIGNvbnN0IGhlYWRzID0gY3JlYXRlSGVhZGVyKGZpZWxkcyk7XG4gIGNvbnN0IGJvZHkgPSBjcmVhdGVCb2R5KGRhdGEsIGZpZWxkcywgc2VsZWN0ZWQsIG9uU2VsZWN0KTtcbiAgY29uc3QgcGFnaW5hdGlvbkJ1dHRvbnMgPSBjcmVhdGVQYWdpbmF0aW9uKHBhZ2luYXRpb24sIGRhdGEubGVuZ3RoKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG10LTJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgIDxoND57dGl0bGV9PC9oND5cbiAgICAgICAge2J0bkdyb3VwfVxuICAgICAgICA8dGFibGUgY2xhc3NOYW1lPXtgdGFibGUgdi10YWJsZSAke3Jlc3BvbnNpdmUgPyAndGFibGUtcmVzcG9uc2l2ZScgOiAnJ31gfT5cbiAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICB7aGVhZHN9XG4gICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICB7Ym9keX1cbiAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICA8L3RhYmxlPlxuICAgICAgICB7cGFnaW5hdGlvbkJ1dHRvbnN9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cblRhYmxlTGlzdC5kZWZhdWx0UHJvcHMgPSB7XG4gIGRhdGE6IFtdLFxuICBzZWxlY3RlZDoge30sXG4gIGZpZWxkczogW10sXG59O1xuXG5UYWJsZUxpc3QucHJvcFR5cGVzID0ge1xuICBkYXRhOiBQcm9wVHlwZXMuaW5zdGFuY2VPZihBcnJheSksXG4gIHNlbGVjdGVkOiBQcm9wVHlwZXMuaW5zdGFuY2VPZihPYmplY3QpLFxuICBmaWVsZHM6IFByb3BUeXBlcy5pbnN0YW5jZU9mKEFycmF5KSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRhYmxlTGlzdDtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgJy4vVmlkZW8uc2Nzcyc7XG5cbmNvbnN0IFZpZGVvID0gKHsgdmlkZW9LZXkgfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cInZpZGVvIG1iLTIgZW1iZWQtcmVzcG9uc2l2ZSBlbWJlZC1yZXNwb25zaXZlLTE2Ynk5XCI+XG4gICAgPGlmcmFtZVxuICAgICAgY2xhc3NOYW1lPVwiZW1iZWQtcmVzcG9uc2l2ZS1pdGVtXCJcbiAgICAgIHRpdGxlPVwiVmlkZW9cIlxuICAgICAgdHlwZT1cInRleHQvaHRtbFwiXG4gICAgICB3aWR0aD1cIjY0MFwiXG4gICAgICBoZWlnaHQ9XCIzNjBcIlxuICAgICAgc3JjPXtgaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvJHt2aWRlb0tleX0/YXV0b3BsYXk9MCZvcmlnaW49JHt2aXNzbmUuZG9tYWlufWB9XG4gICAgICBmcmFtZUJvcmRlcj1cIjBcIlxuICAgICAgYWxsb3dGdWxsU2NyZWVuXG4gICAgLz5cbiAgPC9kaXY+XG4pO1xuXG5WaWRlby5wcm9wVHlwZXMgPSB7XG4gIHZpZGVvS2V5OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBWaWRlbztcbiIsIi8vIGNvbW1vblxuZXhwb3J0IGNvbnN0IExPQURJTkcgPSAnTE9BRElORyc7XG5leHBvcnQgY29uc3QgVE9HR0xFX0FMRVJUID0gJ1RPR0dMRV9BTEVSVCc7XG5leHBvcnQgY29uc3QgVE9HR0xFX0ZJTFRFUiA9ICdUT0dHTEVfRklMVEVSJztcblxuLy8gYXV0aFxuZXhwb3J0IGNvbnN0IFNFVF9QQUdFX0xPQURJTkdfU1RBVFVTID0gJ1NFVF9QQUdFX0xPQURJTkdfU1RBVFVTJztcbmV4cG9ydCBjb25zdCBTRVRfTE9BRElOR19TVEFUVVMgPSAnU0VUX0xPQURJTkdfU1RBVFVTJztcbmV4cG9ydCBjb25zdCBSRUdJU1RFUiA9ICdSRUdJU1RFUic7XG5leHBvcnQgY29uc3QgU0VUX1VTRVIgPSAnU0VUX1VTRVInO1xuXG4vLyBkaXNjb3ZlclxuZXhwb3J0IGNvbnN0IEdFVF9NT1ZJRVMgPSAnR0VUX01PVklFUyc7XG5leHBvcnQgY29uc3QgU0VUX01PVklFUyA9ICdTRVRfTU9WSUVTJztcbmV4cG9ydCBjb25zdCBTRVRfR0VOUkVTID0gJ1NFVF9HRU5SRVMnO1xuZXhwb3J0IGNvbnN0IFNFVF9RVUVSWSA9ICdTRVRfUVVFUlknO1xuXG4vLyBsaXN0c1xuZXhwb3J0IGNvbnN0IEdFVF9MSVNUU19CWV9DVVJSRU5UX1VTRVIgPSAnR0VUX0xJU1RTX0JZX0NVUlJFTlRfVVNFUic7XG5leHBvcnQgY29uc3QgQ1JFQVRFX0xJU1QgPSAnQ1JFQVRFX0xJU1QnO1xuZXhwb3J0IGNvbnN0IERFTEVURV9MSVNUID0gJ0RFTEVURV9MSVNUUyc7XG5leHBvcnQgY29uc3QgQUREX1RPX0xJU1QgPSAnQUREX1RPX0xJU1QnO1xuZXhwb3J0IGNvbnN0IERFTEVURV9GUk9NX0xJU1QgPSAnREVMRVRFX0ZST01fTElTVCc7XG5leHBvcnQgY29uc3QgU0VUX0xJU1RTID0gJ1NFVF9MSVNUUyc7XG5leHBvcnQgY29uc3QgU0VUX0xJU1RfTU9WSUVTID0gJ1NFVF9MSVNUX01PVklFUyc7XG5cbi8vIG1vdmllIGRldGFpbFxuZXhwb3J0IGNvbnN0IFNFVF9NT1ZJRV9ERVRBSUwgPSAnU0VUX01PVklFX0RFVEFJTCc7XG5cbi8vIHByb2ZpbGVcbi8vICAtLSBBY2NvdW50XG5leHBvcnQgY29uc3QgU0VUX0FDQ09VTlRfREVUQUlMID0gJ1NFVF9BQ0NPVU5UX0RFVEFJTCc7XG5leHBvcnQgY29uc3QgU0VUX1VQTE9BREVEX0lNQUdFID0gJ1NFVF9VUExPQURFRF9JTUFHRSc7XG5cbi8vIGNvbnN0YW50c1xuZXhwb3J0IGNvbnN0IFNPUlRfT1BUSU9OUyA9IFt7XG4gIG5hbWU6ICdQb3B1bGFyaXR5JyxcbiAgdmFsdWU6ICdkZXNjJyxcbn0sIHtcbiAgbmFtZTogJ1JlbGVhc2UgRGF0ZScsXG4gIHZhbHVlOiAnZGVzYycsXG59LCB7XG4gIG5hbWU6ICdSZXZlbnVlJyxcbiAgdmFsdWU6ICdkZXNjJyxcbn0sIHtcbiAgbmFtZTogJ1ByaW1hcnkgUmVsZWFzZSBEYXRlJyxcbiAgdmFsdWU6ICdkZXNjJyxcbn0sIHtcbiAgbmFtZTogJ09yZ2luYWwgVGl0bGUnLFxuICB2YWx1ZTogJ2Rlc2MnLFxufSwge1xuICBuYW1lOiAnVm90ZSBBdmVyYWdlJyxcbiAgdmFsdWU6ICdkZXNjJyxcbn0sIHtcbiAgbmFtZTogJ1ZvdGUgQ291bnQnLFxuICB2YWx1ZTogJ2Rlc2MnLFxufV07XG4iLCJjb25zdCBwcm9maWxlTWVudSA9IFtcbiAge1xuICAgIG5hbWU6ICdBY2NvdW50JyxcbiAgICBpY29uOiAndXNlcicsXG4gICAgcGF0aDogJy9wcm9maWxlL2FjY291bnQnLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ0xpc3RzJyxcbiAgICBpY29uOiAnbGlzdCcsXG4gICAgcGF0aDogJy9wcm9maWxlL2xpc3RzJyxcbiAgfSxcbiAgLy8ge1xuICAvLyAgIG5hbWU6ICdGYXZvcml0ZXMnLFxuICAvLyAgIGljb246ICdoZWFydCcsXG4gIC8vICAgcGF0aDogJy9wcm9maWxlL2Zhdm9yaXRlcycsXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICBuYW1lOiAnQ29tbWVudHMnLFxuICAvLyAgIGljb246ICdjb21tZW50JyxcbiAgLy8gICBwYXRoOiAnL3Byb2ZpbGUvY29tbWVudHMnLFxuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgbmFtZTogJ1Jldmlld3MnLFxuICAvLyAgIGljb246ICduZXdzcGFwZXInLFxuICAvLyAgIHBhdGg6ICcvcHJvZmlsZS9yZXZpZXdzJyxcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIG5hbWU6ICdGcmllbmRzJyxcbiAgLy8gICBpY29uOiAndXNlci1mcmllbmRzJyxcbiAgLy8gICBwYXRoOiAnL3Byb2ZpbGUvZnJpZW5kcycsXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICBuYW1lOiAnU2V0dGluZ3MnLFxuICAvLyAgIGljb246ICdjb2cnLFxuICAvLyAgIHBhdGg6ICcvcHJvZmlsZS9zZXR0aW5ncycsXG4gIC8vIH0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBwcm9maWxlTWVudTtcbiIsImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBVc2VyU2hhcGUgPSBQcm9wVHlwZXMuc2hhcGUoe1xuICBpZDogUHJvcFR5cGVzLm51bWJlcixcbiAgZmlyc3ROYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBsYXN0TmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgZW1haWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGZ1bGxOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBhdmF0YXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHVzZXJOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxufSk7XG5cbmV4cG9ydCBjb25zdCBNb3ZpZVNoYXBlID0gUHJvcFR5cGVzLnNoYXBlKHtcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG9yZ2luYWxUaXRsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgeWVhcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgdm90ZV9jb3VudDogUHJvcFR5cGVzLm51bWJlcixcbiAgdm90ZV9hdmVyYWdlOiBQcm9wVHlwZXMubnVtYmVyLFxuICByZWxlYXNlX2RhdGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGdlbnJlTmFtZXM6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGhvbWVwYWdlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB0YWdsaW5lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBsYW5ndWFnZTogUHJvcFR5cGVzLnN0cmluZyxcbn0pO1xuXG5leHBvcnQgY29uc3QgQ2FzdFNoYXBlID0gUHJvcFR5cGVzLnNoYXBlKHtcbiAgaWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgbmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBjaGFyYWN0ZXI6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgcHJvZmlsZVBhdGg6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbn0pO1xuXG5leHBvcnQgY29uc3QgQ29tcGFueVNoYXBlID0gUHJvcFR5cGVzLnNoYXBlKHtcbiAgaWQ6IFByb3BUeXBlcy5udW1iZXIsXG4gIGxvZ286IFByb3BUeXBlcy5zdHJpbmcsXG4gIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG59KTtcblxuZXhwb3J0IGNvbnN0IEdlbnJlU2hhcGUgPSBQcm9wVHlwZXMuc2hhcGUoe1xuICBpZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG59KTtcblxuZXhwb3J0IGNvbnN0IG1hdGNoU2hhcGUgPSBQcm9wVHlwZXMuc2hhcGUoe1xuICBpZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG59KTtcblxuZXhwb3J0IGNvbnN0IEZpbHRlclNoYXBlID0gUHJvcFR5cGVzLnNoYXBlKHtcbiAgc29ydDogUHJvcFR5cGVzLnN0cmluZyxcbiAgc2VhcmNoVGV4dDogUHJvcFR5cGVzLnN0cmluZyxcbiAgZ2VucmVzOiBQcm9wVHlwZXMuYXJyYXlPZi5zdHJpbmcsXG4gIGNyZXdzOiBQcm9wVHlwZXMuYXJyYXlPZi5zdHJpbmcsXG4gIGNhc3RzOiBQcm9wVHlwZXMuYXJyYXlPZi5zdHJpbmcsXG4gIHZvdGVBdmVyYWdlOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGx0ZTogUHJvcFR5cGVzLm51bWJlcixcbiAgICBndGU6IFByb3BUeXBlcy5udW1iZXIsXG4gIH0pLFxuICByZWxlYXNlWWVhcjogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBsdGU6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgZ3RlOiBQcm9wVHlwZXMubnVtYmVyLFxuICB9KSxcbn0pO1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTmF2YmFyJztcbmltcG9ydCBQcm9maWxlQ29udGFpbmVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUHJvZmlsZUNvbnRhaW5lcic7XG5pbXBvcnQgeyBVc2VyU2hhcGUsIG1hdGNoU2hhcGUgfSBmcm9tICcuLi8uLi9jb25zdGFudHMvcHJvcC1zaGFwZXMnO1xuaW1wb3J0IFNwaW5uZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9TcGlubmVyJztcbmltcG9ydCAnLi9BY2NvdW50LnNjc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBY2NvdW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICBwcm9wcy5zZXRQYWdlTG9hZGluZ1N0YXR1cyh0cnVlKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBlZGl0TW9kZTogZmFsc2UsXG4gICAgICB1c2VyRm9ybToge30sXG4gICAgICBwYXNzd29yZDoge30sXG4gICAgICB2YWxpZGF0aW9uOiB7XG4gICAgICAgIHVzZXJOYW1lOiB7fSxcbiAgICAgICAgZW1haWw6IHt9LFxuICAgICAgICBvbGRQYXNzd29yZDoge30sXG4gICAgICAgIG5ld1Bhc3N3b3JkOiB7fSxcbiAgICAgICAgY29uZmlybU5ld1Bhc3N3b3JkOiB7fSxcbiAgICAgICAgZmlyc3ROYW1lOiB7fSxcbiAgICAgICAgbGFzdE5hbWU6IHt9LFxuICAgICAgfSxcbiAgICB9O1xuXG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2hhbmdlUGFzc3dvcmQgPSB0aGlzLmNoYW5nZVBhc3N3b3JkLmJpbmQodGhpcyk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IGdldEFjY291bnREZXRhaWwgfSA9IHRoaXMucHJvcHM7XG4gICAgZ2V0QWNjb3VudERldGFpbCgpO1xuICB9XG5cbiAgaGFuZGxlQ2hhbmdlKHsgdGFyZ2V0IH0sIGZpZWxkKSB7XG4gICAgY29uc3QgeyB2YWx1ZSwgbmFtZSB9ID0gdGFyZ2V0O1xuICAgIGNvbnN0IHsgc3RhdGUgfSA9IHRoaXM7XG4gICAgc3RhdGVbZmllbGRdW25hbWVdID0gdmFsdWU7XG4gICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcbiAgfVxuXG4gIGNoYW5nZVBhc3N3b3JkKCkge1xuICAgIGNvbnN0IHsgcGFzc3dvcmQgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgeyB0b2dnbGVBbGVydERpYWxvZywgY2hhbmdlUGFzc3dvcmQgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBpZiAocGFzc3dvcmQubmV3UGFzc3dvcmQgIT09IHBhc3N3b3JkLmNvbmZpcm1OZXdQYXNzd29yZCkge1xuICAgICAgcmV0dXJuIHRvZ2dsZUFsZXJ0RGlhbG9nKHtcbiAgICAgICAga2luZDogJ2RhbmdlcicsXG4gICAgICAgIG1lc3NhZ2U6ICdQYXNzd29yZHMgZG9uXFwndCBtYXRjaC4nLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHBhc3N3b3JkLm9sZFBhc3N3b3JkID09PSBwYXNzd29yZC5uZXdQYXNzd29yZCkge1xuICAgICAgcmV0dXJuIHRvZ2dsZUFsZXJ0RGlhbG9nKHtcbiAgICAgICAga2luZDogJ2RhbmdlcicsXG4gICAgICAgIG1lc3NhZ2U6ICdQYXNzd29yZCBjYW5ub3QgYmUgdGhlIHNhbWUgd2l0aCBvbGQgcGFzc3dvcmQuJyxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGNoYW5nZVBhc3N3b3JkKHBhc3N3b3JkKTtcbiAgICB0aGlzLnNldFN0YXRlKHsgcGFzc3dvcmQ6IHt9IH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIG1hdGNoLFxuICAgICAgdXNlcixcbiAgICAgIGxvYWRpbmcsXG4gICAgICBwYWdlTG9hZGluZyxcbiAgICAgIHVwZGF0ZVVzZXIsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyB1c2VyRm9ybSwgdmFsaWRhdGlvbiwgcGFzc3dvcmQgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICBpZiAodXNlciAmJiB1c2VyLmlkICYmICF1c2VyRm9ybS5pZCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHVzZXJGb3JtOiB1c2VyIH0pO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8RnJhZ21lbnQ+XG4gICAgICAgIDxOYXZiYXIgdXNlcj17dXNlcn0gLz5cbiAgICAgICAgPFByb2ZpbGVDb250YWluZXIgdXNlcj17dXNlcn0gcGF0aD17bWF0Y2gucGF0aH0gcGFnZUxvYWRpbmc9e3BhZ2VMb2FkaW5nfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgbS00XCI+XG4gICAgICAgICAgICAgIDxoND5BY2NvdW50PC9oND5cbiAgICAgICAgICAgICAgPGZvcm0gYWN0aW9uPVwiXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3J1bS1ncm91cCBtYi0yXCI+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInVzZXJOYW1lSW5wdXRcIj5Vc2VyIE5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInVzZXJOYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZm9ybS1jb250cm9sICR7dmFsaWRhdGlvbi51c2VyTmFtZS5jbGFzcyB8fCAnJ31gfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dXNlckZvcm0udXNlck5hbWV9XG4gICAgICAgICAgICAgICAgICAgIGlkPVwidXNlck5hbWVJbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHRoaXMuaGFuZGxlQ2hhbmdlKGUsICd1c2VyRm9ybScpfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIHt2YWxpZGF0aW9uLnVzZXJOYW1lLmVycm9yfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ydW0tZ3JvdXAgbWItMlwiPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJmaXJzdE5hbWVJbnB1dFwiPkZpcnN0IE5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImZpcnN0TmFtZVwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZvcm0tY29udHJvbCAke3ZhbGlkYXRpb24uZmlyc3ROYW1lLmNsYXNzIHx8ICcnfWB9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt1c2VyRm9ybS5maXJzdE5hbWV9XG4gICAgICAgICAgICAgICAgICAgIGlkPVwiZmlyc3ROYW1lSW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB0aGlzLmhhbmRsZUNoYW5nZShlLCAndXNlckZvcm0nKX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICB7dmFsaWRhdGlvbi5maXJzdE5hbWUuZXJyb3J9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3J1bS1ncm91cCBtYi0yXCI+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImxhc3ROYW1lSW5wdXRcIj5MYXN0IE5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImxhc3ROYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZm9ybS1jb250cm9sICR7dmFsaWRhdGlvbi5sYXN0TmFtZS5jbGFzcyB8fCAnJ31gfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dXNlckZvcm0ubGFzdE5hbWV9XG4gICAgICAgICAgICAgICAgICAgIGlkPVwibGFzdE5hbWVJbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHRoaXMuaGFuZGxlQ2hhbmdlKGUsICd1c2VyRm9ybScpfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIHt2YWxpZGF0aW9uLmxhc3ROYW1lLmVycm9yfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ydW0tZ3JvdXAgbWItMlwiPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbElucHV0XCI+RW1haWw8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZvcm0tY29udHJvbCAke3ZhbGlkYXRpb24uZW1haWwuY2xhc3MgfHwgJyd9YH1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3VzZXJGb3JtLmVtYWlsfVxuICAgICAgICAgICAgICAgICAgICBpZD1cImVtYWlsSW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB0aGlzLmhhbmRsZUNoYW5nZShlLCAndXNlckZvcm0nKX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICB7dmFsaWRhdGlvbi5lbWFpbC5lcnJvcn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtc3VjY2VzcyBidG4tYmxvY2tcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB1cGRhdGVVc2VyKHVzZXJGb3JtKX1cbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtsb2FkaW5nfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxTcGlubmVyIHNob3c9e2xvYWRpbmd9IGtpbmQ9XCJib3JkZXJcIiBjb2xvcj1cInN1Y2Nlc3NcIiAvPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtsb2FkaW5nID8gJ2Qtbm9uZScgOiAnZC1ibG9jayd9PlVwZGF0ZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBtLTRcIj5cbiAgICAgICAgICAgICAgPGg0PkNoYW5nZSBQYXNzd29yZDwvaDQ+XG4gICAgICAgICAgICAgIDxmb3JtIGFjdGlvbj1cIlwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ydW0tZ3JvdXAgbWItMlwiPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJvbGRQYXNzd29yZElucHV0XCI+T2xkIFBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwib2xkUGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bmb3JtLWNvbnRyb2wgJHt2YWxpZGF0aW9uLm9sZFBhc3N3b3JkLmNsYXNzIHx8ICcnfWB9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZC5vbGRQYXNzd29yZH1cbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJvbGRQYXNzd29yZElucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gdGhpcy5oYW5kbGVDaGFuZ2UoZSwgJ3Bhc3N3b3JkJyl9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAge3ZhbGlkYXRpb24ub2xkUGFzc3dvcmQuZXJyb3J9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3J1bS1ncm91cCBtYi0yXCI+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5ld1Bhc3N3b3JkSW5wdXRcIj5OZXcgUGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJuZXdQYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZvcm0tY29udHJvbCAke3ZhbGlkYXRpb24ubmV3UGFzc3dvcmQuY2xhc3MgfHwgJyd9YH1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkLm5ld1Bhc3N3b3JkfVxuICAgICAgICAgICAgICAgICAgICBpZD1cIm5ld1Bhc3N3b3JkSW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB0aGlzLmhhbmRsZUNoYW5nZShlLCAncGFzc3dvcmQnKX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICB7dmFsaWRhdGlvbi5uZXdQYXNzd29yZC5lcnJvcn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcnVtLWdyb3VwIG1iLTJcIj5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY29uZmlybU5ld1Bhc3N3b3JkSW5wdXRcIj5Db25maXJtIE5ldyBQYXNzd29yZDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNvbmZpcm1OZXdQYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZvcm0tY29udHJvbCAke3ZhbGlkYXRpb24uY29uZmlybU5ld1Bhc3N3b3JkLmNsYXNzIHx8ICcnfWB9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZC5jb25maXJtTmV3UGFzc3dvcmR9XG4gICAgICAgICAgICAgICAgICAgIGlkPVwiY29uZmlybU5ld1Bhc3N3b3JkSW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB0aGlzLmhhbmRsZUNoYW5nZShlLCAncGFzc3dvcmQnKX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICB7dmFsaWRhdGlvbi5jb25maXJtTmV3UGFzc3dvcmQuZXJyb3J9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXByaW1hcnkgYnRuLWJsb2NrXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2xvYWRpbmd9XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmNoYW5nZVBhc3N3b3JkfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIENoYW5nZSBQYXNzd29yZFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9Qcm9maWxlQ29udGFpbmVyPlxuICAgICAgPC9GcmFnbWVudD5cbiAgICApO1xuICB9XG59XG5cbkFjY291bnQucHJvcFR5cGVzID0ge1xuICB1c2VyOiBVc2VyU2hhcGUuaXNSZXF1aXJlZCxcbiAgbWF0Y2g6IG1hdGNoU2hhcGUuaXNSZXF1aXJlZCxcbiAgZ2V0QWNjb3VudERldGFpbDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgcGFnZUxvYWRpbmc6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gIGxvYWRpbmc6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gIHNldFBhZ2VMb2FkaW5nU3RhdHVzOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICB1cGRhdGVVc2VyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICB0b2dnbGVBbGVydERpYWxvZzogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgY2hhbmdlUGFzc3dvcmQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59O1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IEFjY291bnQgZnJvbSAnLi9BY2NvdW50JztcbmltcG9ydCB7IGdldEFjY291bnREZXRhaWwsIGNoYW5nZVBhc3N3b3JkLCB1cGRhdGVVc2VyIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9hY2NvdW50JztcbmltcG9ydCB7IHNldFBhZ2VMb2FkaW5nU3RhdHVzLCB0b2dnbGVBbGVydERpYWxvZyB9IGZyb20gJy4uLy4uL2FjdGlvbnMvY29tbW9uJztcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcbiAgcGFnZUxvYWRpbmc6IHN0YXRlLmNvbW1vbi5wYWdlTG9hZGluZyxcbiAgbG9hZGluZzogc3RhdGUuY29tbW9uLmxvYWRpbmcsXG4gIHVwbG9hZGVkRmlsZTogc3RhdGUuY29tbW9uLnVwbG9hZGVkRmlsZSxcbiAgdXNlcjogc3RhdGUuYWNjb3VudC51c2VyLFxufSk7XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+ICh7XG4gIGdldEFjY291bnREZXRhaWw6ICgpID0+IGRpc3BhdGNoKGdldEFjY291bnREZXRhaWwoKSksXG4gIHNldFBhZ2VMb2FkaW5nU3RhdHVzOiBzdGF0dXMgPT4gZGlzcGF0Y2goc2V0UGFnZUxvYWRpbmdTdGF0dXMoc3RhdHVzKSksXG4gIHVwZGF0ZVVzZXI6IHVzZXIgPT4gZGlzcGF0Y2godXBkYXRlVXNlcih1c2VyKSksXG4gIGNoYW5nZVBhc3N3b3JkOiBwYXNzd29yZCA9PiBkaXNwYXRjaChjaGFuZ2VQYXNzd29yZChwYXNzd29yZCkpLFxuICB0b2dnbGVBbGVydERpYWxvZzogYWxlcnQgPT4gZGlzcGF0Y2godG9nZ2xlQWxlcnREaWFsb2coYWxlcnQpKSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICBtYXBTdGF0ZVRvUHJvcHMsXG4gIG1hcERpc3BhdGNoVG9Qcm9wcyxcbikoQWNjb3VudCk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IHsgQUxFUlRfVFlQRVMgfSBmcm9tICcuLi8uLi8uLi9saWIvY29uc3RhbnRzJztcblxuY29uc3QgQWxlcnQgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIGtpbmQsXG4gICAgc2hvdyxcbiAgICBtZXNzYWdlLFxuICAgIHRvZ2dsZUFsZXJ0RGlhbG9nLFxuICB9ID0gcHJvcHM7XG5cbiAgaWYgKCFzaG93KSByZXR1cm4gbnVsbDtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtgYWxlcnQgYWxlcnQtJHtraW5kfSBzaXRlLWFsZXJ0IGFsZXJ0LWRpc21pc3NpYmxlIGZhZGUgc2hvd2B9IHJvbGU9XCJhbGVydFwiPlxuICAgICAge21lc3NhZ2V9XG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cImFsZXJ0XCIgYXJpYS1sYWJlbD1cIkNsb3NlXCIgb25DbGljaz17dG9nZ2xlQWxlcnREaWFsb2d9PlxuICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5BbGVydC5kZWZhdWx0UHJvcHMgPSB7XG4gIHNob3c6IGZhbHNlLFxuICBraW5kOiAnaW5mbycsXG4gIG1lc3NhZ2U6IG51bGwsXG59O1xuXG5BbGVydC5wcm9wVHlwZXMgPSB7XG4gIHNob3c6IFByb3BUeXBlcy5ib29sLFxuICBtZXNzYWdlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB0b2dnbGVBbGVydERpYWxvZzogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAga2luZDogUHJvcFR5cGVzLm9uZU9mKEFMRVJUX1RZUEVTKSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFsZXJ0O1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IHsgdG9nZ2xlQWxlcnREaWFsb2cgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2NvbW1vbic7XG5pbXBvcnQgQWxlcnREaWFsb2cgZnJvbSAnLi9BbGVydERpYWxvZyc7XG5pbXBvcnQgJy4vQWxlcnREaWFsb2cuc2Nzcyc7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9ICh7IGNvbW1vbiB9KSA9PiAoe1xuICBzaG93OiBjb21tb24uc2hvd0FsZXJ0LFxuICBtZXNzYWdlOiBjb21tb24uYWxlcnRNZXNzYWdlLFxuICBraW5kOiBjb21tb24uYWxlcnRLaW5kLFxufSk7XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+ICh7XG4gIHRvZ2dsZUFsZXJ0RGlhbG9nOiAoKSA9PiBkaXNwYXRjaCh0b2dnbGVBbGVydERpYWxvZyh7IHNob3c6IGZhbHNlIH0pKSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICBtYXBTdGF0ZVRvUHJvcHMsXG4gIG1hcERpc3BhdGNoVG9Qcm9wcyxcbikoQWxlcnREaWFsb2cpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcblxuaW1wb3J0IGNvb2tpZSBmcm9tICcuLi8uLi8uLi9saWIvY29va2llJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXV0aCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGZvcm06IHt9LFxuICAgICAgdmFsaWRhdGlvbjoge1xuICAgICAgICB1c2VyTmFtZToge30sXG4gICAgICAgIGVtYWlsOiB7fSxcbiAgICAgICAgcGFzc3dvcmQ6IHt9LFxuICAgICAgICBmaXJzdE5hbWU6IHt9LFxuICAgICAgICBsYXN0TmFtZToge30sXG4gICAgICAgIGNvbmZpcm1QYXNzd29yZDoge30sXG4gICAgICB9LFxuICAgIH07XG5cbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy52YWxpZGF0aW9uID0gdGhpcy52YWxpZGF0aW9uLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zd2l0Y2hGb3JtID0gdGhpcy5zd2l0Y2hGb3JtLmJpbmQodGhpcyk7XG4gICAgdGhpcy5sb2dpblJlZ2lzdGVyID0gdGhpcy5sb2dpblJlZ2lzdGVyLmJpbmQodGhpcyk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IHRvZ2dsZUFsZXJ0RGlhbG9nIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGNvb2tpZS5nZXQoJ2Vycm9yTWVzc2FnZScpO1xuICAgIGlmIChlcnJvck1lc3NhZ2UpIHtcbiAgICAgIHRvZ2dsZUFsZXJ0RGlhbG9nKGVycm9yTWVzc2FnZSk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlQ2hhbmdlKHsgdGFyZ2V0IH0pIHtcbiAgICBjb25zdCB7IHZhbHVlLCBuYW1lIH0gPSB0YXJnZXQ7XG4gICAgY29uc3QgeyBmb3JtIH0gPSB0aGlzLnN0YXRlO1xuICAgIGZvcm1bbmFtZV0gPSB2YWx1ZTtcbiAgICB0aGlzLnNldFN0YXRlKHsgZm9ybSB9KTtcbiAgfVxuXG4gIHZhbGlkYXRpb24oKSB7XG4gICAgY29uc3QgZW1haWxJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJlbWFpbFwiXScpO1xuICAgIGNvbnN0IHsgdmFsaWRhdGlvbiB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB7IGZvcm0sIGlzUmVnaXN0ZXIgfSA9IHRoaXMuc3RhdGU7XG4gICAgbGV0IGlzVmFsaWQgPSB0cnVlO1xuXG4gICAgaWYgKCFmb3JtLmVtYWlsIHx8ICFlbWFpbElucHV0LmNoZWNrVmFsaWRpdHkoKSkge1xuICAgICAgdmFsaWRhdGlvbi5lbWFpbCA9IHtcbiAgICAgICAgY2xhc3M6ICdpcy1pbnZhbGlkJyxcbiAgICAgICAgZXJyb3I6IDxkaXYgY2xhc3NOYW1lPVwiaW52YWxpZC1mZWVkYmFja1wiPlBsZWFzZSBlbnRlciBhIHZhbGlkIGVtYWlsIGFkZHJlc3MuPC9kaXY+LFxuICAgICAgfTtcbiAgICAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsaWRhdGlvbi5lbWFpbCA9IHt9O1xuICAgIH1cblxuICAgIGlmICghZm9ybS5wYXNzd29yZCB8fCBmb3JtLnBhc3N3b3JkLmxlbmd0aCA8IDYgfHwgZm9ybS5wYXNzd29yZC5sZW5ndGggPiAxNikge1xuICAgICAgdmFsaWRhdGlvbi5wYXNzd29yZCA9IHtcbiAgICAgICAgY2xhc3M6ICdpcy1pbnZhbGlkJyxcbiAgICAgICAgZXJyb3I6IDxkaXYgY2xhc3NOYW1lPVwiaW52YWxpZC1mZWVkYmFja1wiPlBhc3N3b3JkcyBtdXN0IGJlIDYtMTYgY2hhY3JhY3Rlci48L2Rpdj4sXG4gICAgICB9O1xuICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWxpZGF0aW9uLnBhc3N3b3JkID0ge307XG4gICAgfVxuXG4gICAgaWYgKGlzUmVnaXN0ZXIpIHtcbiAgICAgIGlmICghZm9ybS51c2VyTmFtZSB8fCBmb3JtLnVzZXJOYW1lLmxlbmd0aCA8IDIgfHwgZm9ybS51c2VyTmFtZS5sZW5ndGggPiA0MCkge1xuICAgICAgICB2YWxpZGF0aW9uLnVzZXJOYW1lID0ge1xuICAgICAgICAgIGNsYXNzOiAnaXMtaW52YWxpZCcsXG4gICAgICAgICAgZXJyb3I6IDxkaXYgY2xhc3NOYW1lPVwiaW52YWxpZC1mZWVkYmFja1wiPlVzZXIgbmFtZSBtdXN0IGJlIDItNDAgY2hhcmFjdGVyPC9kaXY+LFxuICAgICAgICB9O1xuICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWxpZGF0aW9uLnVzZXJOYW1lID0ge307XG4gICAgICB9XG5cbiAgICAgIGlmICghZm9ybS5maXJzdE5hbWUgfHwgZm9ybS5maXJzdE5hbWUubGVuZ3RoIDwgMiB8fCBmb3JtLmZpcnN0TmFtZS5sZW5ndGggPiA0MCkge1xuICAgICAgICB2YWxpZGF0aW9uLmZpcnN0TmFtZSA9IHtcbiAgICAgICAgICBjbGFzczogJ2lzLWludmFsaWQnLFxuICAgICAgICAgIGVycm9yOiA8ZGl2IGNsYXNzTmFtZT1cImludmFsaWQtZmVlZGJhY2tcIj5GaXJzdCBuYW1lIG11c3QgYmUgMi00MCBjaGFyYWN0ZXI8L2Rpdj4sXG4gICAgICAgIH07XG4gICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbGlkYXRpb24uZmlyc3ROYW1lID0ge307XG4gICAgICB9XG5cbiAgICAgIGlmICghZm9ybS5sYXN0TmFtZSB8fCBmb3JtLmxhc3ROYW1lLmxlbmd0aCA8IDIgfHwgZm9ybS5sYXN0TmFtZS5sZW5ndGggPiA0MCkge1xuICAgICAgICB2YWxpZGF0aW9uLmxhc3ROYW1lID0ge1xuICAgICAgICAgIGNsYXNzOiAnaXMtaW52YWxpZCcsXG4gICAgICAgICAgZXJyb3I6IDxkaXYgY2xhc3NOYW1lPVwiaW52YWxpZC1mZWVkYmFja1wiPkxhc3QgbmFtZSBtdXN0IGJlIDItNDAgY2hhcmFjdGVyPC9kaXY+LFxuICAgICAgICB9O1xuICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWxpZGF0aW9uLmxhc3ROYW1lID0ge307XG4gICAgICB9XG5cbiAgICAgIGlmIChmb3JtLmNvbmZpcm1QYXNzd29yZCAhPT0gZm9ybS5wYXNzd29yZCkge1xuICAgICAgICB2YWxpZGF0aW9uLmNvbmZpcm1QYXNzd29yZCA9IHtcbiAgICAgICAgICBjbGFzczogJ2lzLWludmFsaWQnLFxuICAgICAgICAgIGVycm9yOiA8ZGl2IGNsYXNzTmFtZT1cImludmFsaWQtZmVlZGJhY2tcIj5QYXNzd29yZHMgZG9udCBtYXRjaDwvZGl2PixcbiAgICAgICAgfTtcbiAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsaWRhdGlvbi5jb25maXJtUGFzc3dvcmQgPSB7fTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnNldFN0YXRlKHsgdmFsaWRhdGlvbiB9KTtcbiAgICByZXR1cm4gaXNWYWxpZDtcbiAgfVxuXG4gIGxvZ2luUmVnaXN0ZXIoKSB7XG4gICAgY29uc3QgeyBmb3JtLCBpc1JlZ2lzdGVyIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IGlzVmFsaWQgPSB0aGlzLnZhbGlkYXRpb24oZm9ybSk7XG5cbiAgICBpZiAoIWlzVmFsaWQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IHsgcHJvcHMgfSA9IHRoaXM7XG4gICAgY29uc3QgdXJsID0gaXNSZWdpc3RlclxuICAgICAgPyAnL2FwaS9yZWdpc3RlcidcbiAgICAgIDogJy9hcGkvbG9naW4nO1xuXG4gICAgcmV0dXJuIHByb3BzLmxvZ2luUmVnaXN0ZXIoZm9ybSwgdXJsKTtcbiAgfVxuXG4gIHN3aXRjaEZvcm0oKSB7XG4gICAgdGhpcy5zZXRTdGF0ZShwcmV2U3RhdGUgPT4gKHtcbiAgICAgIGlzUmVnaXN0ZXI6ICFwcmV2U3RhdGUuaXNSZWdpc3RlcixcbiAgICB9KSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgZm9ybSxcbiAgICAgIGlzUmVnaXN0ZXIsXG4gICAgICB2YWxpZGF0aW9uLFxuICAgICAgbG9hZGluZyxcbiAgICB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIGxldCBidXR0b25UZXh0ID0gJ0xPR0lOJztcbiAgICBsZXQgc3dpdGNoUmVnaXN0ZXJUb0xvZ2luVGV4dCA9ICdSRUdJU1RFUic7XG4gICAgbGV0IHJlZ2lzdGVySW5wdXQgPSBudWxsO1xuXG4gICAgaWYgKGlzUmVnaXN0ZXIpIHtcbiAgICAgIGJ1dHRvblRleHQgPSAnUkVHSVNURVInO1xuICAgICAgc3dpdGNoUmVnaXN0ZXJUb0xvZ2luVGV4dCA9ICdMT0dJTic7XG5cbiAgICAgIHJlZ2lzdGVySW5wdXQgPSAoXG4gICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY29uZmlybVBhc3N3b3JkSW5wdXRcIj5Db25maXJtIFBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1wcmVwZW5kXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtdGV4dCBib3JkZXItdG9wLTAgYm9yZGVyLWxlZnQtMCBib3JkZXItcmlnaHQtMCBib3JkZXItZGFyayBiZy10cmFuc3BhcmVudCByb3VuZGVkLTBcIiBpZD1cImNvbmZpcm1QYXNzd29yZEFkZG9uXCI+XG4gICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249XCJrZXlcIiAvPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgbmFtZT1cImNvbmZpcm1QYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm0uY29uZmlybVBhc3N3b3JkfVxuICAgICAgICAgICAgICAgIGlkPVwiY29uZmlybVBhc3N3b3JkSW5wdXRcIlxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJjb25maXJtUGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ29uZmlybSBQYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cImNvbmZpcm1QYXNzd29yZEFkZG9uXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bmb3JtLWNvbnRyb2wgYm9yZGVyLXRvcC0wIGJvcmRlci1sZWZ0LTAgYm9yZGVyLXJpZ2h0LTAgYm9yZGVyLWRhcmsgcm91bmRlZC0wIGIgYmctdHJhbnNwYXJlbnQgJHt2YWxpZGF0aW9uLmNvbmZpcm1QYXNzd29yZC5jbGFzcyB8fCAnJ31gfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICB7dmFsaWRhdGlvbi5jb25maXJtUGFzc3dvcmQuZXJyb3J9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidXNlck5hbWVJbnB1dFwiPlVzZXIgTmFtZTwvbGFiZWw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtcHJlcGVuZFwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXRleHQgYm9yZGVyLXRvcC0wIGJvcmRlci1sZWZ0LTAgYm9yZGVyLXJpZ2h0LTAgYm9yZGVyLWRhcmsgYmctdHJhbnNwYXJlbnQgcm91bmRlZC0wXCIgaWQ9XCJ1c2VyTmFtZVwiPlxuICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPVwiYXRcIiAvPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBuYW1lPVwidXNlck5hbWVcIlxuICAgICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJ1c2VyTmFtZVwiXG4gICAgICAgICAgICAgICAgaWQ9XCJ1c2VyTmFtZUlucHV0XCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlVzZXIgTmFtZVwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm0udXNlck5hbWV9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZvcm0tY29udHJvbCBib3JkZXItdG9wLTAgYm9yZGVyLWxlZnQtMCBib3JkZXItcmlnaHQtMCBib3JkZXItZGFyayByb3VuZGVkLTAgYiBiZy10cmFuc3BhcmVudCAke3ZhbGlkYXRpb24udXNlck5hbWUuY2xhc3MgfHwgJyd9YH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAge3ZhbGlkYXRpb24udXNlck5hbWUuZXJyb3J9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZmlyc3ROYW1lSW5wdXRcIj5GaXJzdCBOYW1lPC9sYWJlbD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1wcmVwZW5kXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtdGV4dCBib3JkZXItdG9wLTAgYm9yZGVyLWxlZnQtMCBib3JkZXItcmlnaHQtMCBib3JkZXItZGFyayBiZy10cmFuc3BhcmVudCByb3VuZGVkLTBcIiBpZD1cImZpcnN0TmFtZVwiPlxuICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPVwic2lnbmF0dXJlXCIgLz5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgbmFtZT1cImZpcnN0TmFtZVwiXG4gICAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cImZpcnN0TmFtZVwiXG4gICAgICAgICAgICAgICAgaWQ9XCJmaXJzdE5hbWVJbnB1dFwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJGaXJzdCBOYW1lXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybS5maXJzdE5hbWV9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZvcm0tY29udHJvbCBib3JkZXItdG9wLTAgYm9yZGVyLWxlZnQtMCBib3JkZXItcmlnaHQtMCBib3JkZXItZGFyayByb3VuZGVkLTAgYiBiZy10cmFuc3BhcmVudCAke3ZhbGlkYXRpb24uZmlyc3ROYW1lLmNsYXNzIHx8ICcnfWB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIHt2YWxpZGF0aW9uLmZpcnN0TmFtZS5lcnJvcn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJsYXN0TmFtZUlucHV0XCI+XG4gICAgICAgICAgICAgIExhc3QgTmFtZVxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1wcmVwZW5kXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtdGV4dCBib3JkZXItdG9wLTAgYm9yZGVyLWxlZnQtMCBib3JkZXItcmlnaHQtMCBib3JkZXItZGFyayBiZy10cmFuc3BhcmVudCByb3VuZGVkLTBcIiBpZD1cImxhc3ROYW1lXCI+XG4gICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249XCJzaWduYXR1cmVcIiAvPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJsYXN0TmFtZVwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZm9ybS1jb250cm9sIGJvcmRlci10b3AtMCBib3JkZXItbGVmdC0wIGJvcmRlci1yaWdodC0wIGJvcmRlci1kYXJrIHJvdW5kZWQtMCBiIGJnLXRyYW5zcGFyZW50ICR7dmFsaWRhdGlvbi5sYXN0TmFtZS5jbGFzcyB8fCAnJ31gfVxuICAgICAgICAgICAgICAgIG5hbWU9XCJsYXN0TmFtZVwiXG4gICAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cImxhc3ROYW1lXCJcbiAgICAgICAgICAgICAgICBpZD1cImxhc3ROYW1lSW5wdXRcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTGFzdCBOYW1lXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybS5sYXN0TmFtZX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIHt2YWxpZGF0aW9uLmxhc3ROYW1lLmVycm9yfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtbWQtY2VudGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLXNtLTEyIGNvbC1tZC04IGNvbC1sZy02IGNvbC14bC01XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgYXV0aC1mb3JtXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2Ake3Zpc3NuZS5jZG59L2ltYWdlcy9sb2dvLnBuZ2B9IGFsdD1cIlZpc3NuZVwiIGhlaWdodD1cIjcwXCIgY2xhc3NOYW1lPVwibXktMlwiIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fSBpZD1cImZvcm1SZWdcIiBjbGFzc05hbWU9XCJjb2wtMTIgcC0wXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbElucHV0XCI+RW1haWw8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1wcmVwZW5kXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC10ZXh0IGJvcmRlci10b3AtMCBib3JkZXItbGVmdC0wIGJvcmRlci1yaWdodC0wIGJvcmRlci1kYXJrIGJnLXRyYW5zcGFyZW50IHJvdW5kZWQtMFwiIGlkPVwiYmFzaWMtYWRkb24xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj1cImVudmVsb3BlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm0uZW1haWx9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cImVtYWlsSW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cImVtYWlsSW5wdXRHcm91cFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIGVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZvcm0tY29udHJvbCBib3JkZXItdG9wLTAgYm9yZGVyLWxlZnQtMCBib3JkZXItcmlnaHQtMCBib3JkZXItZGFyayByb3VuZGVkLTAgYiBiZy10cmFuc3BhcmVudCAke3ZhbGlkYXRpb24uZW1haWwuY2xhc3MgfHwgJyd9YH1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIHt2YWxpZGF0aW9uLmVtYWlsLmVycm9yfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZElucHV0XCI+UGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1wcmVwZW5kXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC10ZXh0IGJvcmRlci10b3AtMCBib3JkZXItbGVmdC0wIGJvcmRlci1yaWdodC0wIGJvcmRlci1kYXJrIGJnLXRyYW5zcGFyZW50IHJvdW5kZWQtMFwiIGlkPVwicGFzc3dvcmRBZGRvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249XCJ1bmxvY2tcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybS5wYXNzd29yZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicGFzc3dvcmRJbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJwYXNzd29yZEFkZG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImN1cnJlbnQtcGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZm9ybS1jb250cm9sIGJvcmRlci10b3AtMCBib3JkZXItbGVmdC0wIGJvcmRlci1yaWdodC0wIGJvcmRlci1kYXJrIHJvdW5kZWQtMCBiIGJnLXRyYW5zcGFyZW50ICR7dmFsaWRhdGlvbi5wYXNzd29yZC5jbGFzcyB8fCAnJ31gfVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAge3ZhbGlkYXRpb24ucGFzc3dvcmQuZXJyb3J9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIHtyZWdpc3RlcklucHV0fVxuXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiB0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1saW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuc3dpdGNoRm9ybX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtzd2l0Y2hSZWdpc3RlclRvTG9naW5UZXh0fVxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWRhcmsgYnRuLWJsb2NrXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5sb2dpblJlZ2lzdGVyfVxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17bG9hZGluZ31cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BzcGlubmVyLWdyb3cgc3Bpbm5lci1ncm93LXNtICR7bG9hZGluZyA/ICcnIDogJ2Qtbm9uZSd9YH1cbiAgICAgICAgICAgICAgICAgICAgICByb2xlPVwic3RhdHVzXCJcbiAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICB7YnV0dG9uVGV4dH1cbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1ibG9jayBidG4tZGFyayBib3JkZXItMCBzb2NpYWwtYnV0dG9uIGdvb2dsZSAgbXQtMlwiXG4gICAgICAgICAgICAgICAgICBocmVmPVwiYXV0aC9nb29nbGVcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInNvY2lhbC1idXR0b24taWNvblwiPlxuICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e1snZmFiJywgJ2dvb2dsZSddfSAvPlxuICAgICAgICAgICAgICAgICAgPC9pPlxuICAgICAgICAgICAgICAgICAgTE9HSU4gV0lUSCBHT09HTEVcbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tYmxvY2sgYnRuLWRhcmsgYm9yZGVyLTAgc29jaWFsLWJ1dHRvbiBmYWNlYm9vayBtdC0yXCJcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCJhdXRoL2ZhY2Vib29rXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJzb2NpYWwtYnV0dG9uLWljb25cIj5cbiAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtbJ2ZhYicsICdmYWNlYm9vayddfSAvPlxuICAgICAgICAgICAgICAgICAgPC9pPlxuICAgICAgICAgICAgICAgICAgTE9HSU4gV0lUSCBGQUNFQk9PS1xuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbkF1dGgucHJvcFR5cGVzID0ge1xuICB0b2dnbGVBbGVydERpYWxvZzogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn07XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgQXV0aCBmcm9tICcuL0F1dGgnO1xuaW1wb3J0IHsgbG9naW5SZWdpc3RlciB9IGZyb20gJy4uLy4uL2FjdGlvbnMvYXV0aCc7XG5pbXBvcnQgeyB0b2dnbGVBbGVydERpYWxvZyB9IGZyb20gJy4uLy4uL2FjdGlvbnMvY29tbW9uJztcbmltcG9ydCAnLi9BdXRoLnNjc3MnO1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xuICBsb2FkaW5nOiBzdGF0ZS5jb21tb24ubG9hZGluZyxcbiAgaXNMb2dnZWRJbjogc3RhdGUuZGlzY292ZXIuaXNMb2dnZWRJbixcbn0pO1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiAoe1xuICBsb2dpblJlZ2lzdGVyOiAoZGF0YSwgdXJsKSA9PiBkaXNwYXRjaChsb2dpblJlZ2lzdGVyKGRhdGEsIHVybCkpLFxuICB0b2dnbGVBbGVydERpYWxvZzogbWVzc2FnZSA9PiBkaXNwYXRjaCh0b2dnbGVBbGVydERpYWxvZyh7IGtpbmQ6ICdkYW5nZXInLCBtZXNzYWdlIH0pKSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICBtYXBTdGF0ZVRvUHJvcHMsXG4gIG1hcERpc3BhdGNoVG9Qcm9wcyxcbikoQXV0aCk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBNb3ZpZUxpc3QgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Nb3ZpZUxpc3QnO1xuaW1wb3J0IE5hdmJhciBmcm9tICcuLi8uLi9jb21wb25lbnRzL05hdmJhcic7XG5pbXBvcnQgU3Bpbm5lciBmcm9tICcuLi8uLi9jb21wb25lbnRzL1NwaW5uZXInO1xuaW1wb3J0IEZpbHRlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL0ZpbHRlcic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvRm9vdGVyJztcbmltcG9ydCB7XG4gIFVzZXJTaGFwZSxcbiAgTW92aWVTaGFwZSxcbiAgR2VucmVTaGFwZSxcbiAgRmlsdGVyU2hhcGUsXG59IGZyb20gJy4uLy4uL2NvbnN0YW50cy9wcm9wLXNoYXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpc2NvdmVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLmxvYWRNb3ZpZXMgPSB0aGlzLmxvYWRNb3ZpZXMuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNldFF1ZXJ5ID0gdGhpcy5zZXRRdWVyeS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBnZXRHZW5yZXMsIHRvZ2dsZUZpbHRlciwgbWF0Y2ggfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBwYXRoIH0gPSBtYXRjaDtcblxuICAgIGdldEdlbnJlcygpO1xuXG4gICAgaWYgKFsnL2NvbWluZy1zb29uJywgJy9pbi10aGVhdGVycyddLmluZGV4T2YocGF0aCkgIT09IC0xKSB7XG4gICAgICB0aGlzLnNldFF1ZXJ5KHsgZmllbGQ6ICdmaWx0ZXInLCB2YWx1ZTogcGF0aC5yZXBsYWNlKCcvJywgJycpIH0pO1xuICAgICAgdG9nZ2xlRmlsdGVyKGZhbHNlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5sb2FkTW92aWVzKCk7XG4gICAgfVxuICB9XG5cbiAgc2V0UXVlcnkocXVlcnkpIHtcbiAgICBjb25zdCB7IHNldFF1ZXJ5IH0gPSB0aGlzLnByb3BzO1xuICAgIHNldFF1ZXJ5KHF1ZXJ5KS50aGVuKHRoaXMubG9hZE1vdmllcyk7XG4gIH1cblxuICBsb2FkTW92aWVzKCkge1xuICAgIGNvbnN0IHsgZ2V0TW92aWVzLCBxdWVyeSB9ID0gdGhpcy5wcm9wcztcbiAgICBnZXRNb3ZpZXMocXVlcnkpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIG1vdmllcyxcbiAgICAgIHVzZXIsXG4gICAgICBpc0xvZ2dlZEluLFxuICAgICAgbG9hZGluZyxcbiAgICAgIGdlbnJlcyxcbiAgICAgIHF1ZXJ5LFxuICAgICAgbG9jYXRpb24sXG4gICAgICBzaG93RmlsdGVyLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgPE5hdmJhciBpc0xvZ2dlZEluPXtpc0xvZ2dlZElufSB1c2VyPXt1c2VyfSBwYXRoTmFtZT17bG9jYXRpb24ucGF0aG5hbWV9IC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XG4gICAgICAgICAgPEZpbHRlciBzaG93PXtzaG93RmlsdGVyfSBnZW5yZXM9e2dlbnJlc30gc2V0UXVlcnk9e3RoaXMuc2V0UXVlcnl9IHF1ZXJ5PXtxdWVyeX0gLz5cbiAgICAgICAgICA8TW92aWVMaXN0IG1vdmllcz17bW92aWVzfSBpZD1cImxpc3RcIiAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgbS0xXCI+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmxvYWRNb3ZpZXN9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YGJ0biBidG4tb3V0bGluZS1wcmltYXJ5IG1iLTIgJHtsb2FkaW5nID8gJ2Qtbm9uZScgOiAnZC1ibG9jayd9YH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgTG9hZCBNb3JlXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxTcGlubmVyIHNob3c9e2xvYWRpbmd9IHNpemU9XCJtZFwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICA8L0ZyYWdtZW50PlxuICAgICk7XG4gIH1cbn1cblxuRGlzY292ZXIuZGVmYXVsdFByb3BzID0ge1xuICBpc0xvZ2dlZEluOiBmYWxzZSxcbiAgc2hvd0ZpbHRlcjogdHJ1ZSxcbiAgdXNlcjoge30sXG59O1xuXG5EaXNjb3Zlci5wcm9wVHlwZXMgPSB7XG4gIGdldE1vdmllczogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgZ2V0R2VucmVzOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBzZXRRdWVyeTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgdG9nZ2xlRmlsdGVyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBsb2FkaW5nOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICBpc0xvZ2dlZEluOiBQcm9wVHlwZXMuYm9vbCxcbiAgc2hvd0ZpbHRlcjogUHJvcFR5cGVzLmJvb2wsXG4gIHVzZXI6IFVzZXJTaGFwZSxcbiAgbW92aWVzOiBQcm9wVHlwZXMuYXJyYXlPZihNb3ZpZVNoYXBlKS5pc1JlcXVpcmVkLFxuICBnZW5yZXM6IFByb3BUeXBlcy5hcnJheU9mKEdlbnJlU2hhcGUpLmlzUmVxdWlyZWQsXG4gIHF1ZXJ5OiBGaWx0ZXJTaGFwZS5pc1JlcXVpcmVkLFxufTtcbiIsImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCBEaXNjb3ZlciBmcm9tICcuL0Rpc2NvdmVyJztcbmltcG9ydCB7IHRvZ2dsZUZpbHRlciB9IGZyb20gJy4uLy4uL2FjdGlvbnMvY29tbW9uJztcbmltcG9ydCB7XG4gIGdldE1vdmllcyxcbiAgc2V0UXVlcnksXG4gIGdldEdlbnJlcyxcbn0gZnJvbSAnLi4vLi4vYWN0aW9ucy9kaXNjb3Zlcic7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XG4gIGxvYWRpbmc6IHN0YXRlLmNvbW1vbi5sb2FkaW5nLFxuICB1c2VyOiBzdGF0ZS5kaXNjb3Zlci51c2VyLFxuICBxdWVyeTogc3RhdGUuZGlzY292ZXIucXVlcnksXG4gIGlzTG9nZ2VkSW46IHN0YXRlLmRpc2NvdmVyLmlzTG9nZ2VkSW4sXG4gIG1vdmllczogc3RhdGUuZGlzY292ZXIubW92aWVzLFxuICBnZW5yZXM6IHN0YXRlLmRpc2NvdmVyLmdlbnJlcyxcbiAgc2hvd0ZpbHRlcjogc3RhdGUuY29tbW9uLnNob3dGaWx0ZXIsXG59KTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4gKHtcbiAgZ2V0TW92aWVzOiBxdWVyeSA9PiBkaXNwYXRjaChnZXRNb3ZpZXMocXVlcnkpKSxcbiAgc2V0UXVlcnk6IHF1ZXJ5ID0+IGRpc3BhdGNoKHNldFF1ZXJ5KHF1ZXJ5KSksXG4gIGdldEdlbnJlczogKCkgPT4gZGlzcGF0Y2goZ2V0R2VucmVzKCkpLFxuICB0b2dnbGVGaWx0ZXI6IHNob3cgPT4gZGlzcGF0Y2godG9nZ2xlRmlsdGVyKHNob3cpKSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICBtYXBTdGF0ZVRvUHJvcHMsXG4gIG1hcERpc3BhdGNoVG9Qcm9wcyxcbikoRGlzY292ZXIpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcblxuaW1wb3J0IE5hdmJhciBmcm9tICcuLi8uLi9jb21wb25lbnRzL05hdmJhcic7XG5pbXBvcnQgUHJvZmlsZUNvbnRhaW5lciBmcm9tICcuLi8uLi9jb21wb25lbnRzL1Byb2ZpbGVDb250YWluZXInO1xuaW1wb3J0IFRhYmxlTGlzdCBmcm9tICcuLi8uLi9jb21wb25lbnRzL1RhYmxlTGlzdCc7XG5pbXBvcnQgTW9kYWwgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Nb2RhbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpc3RzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG1vdmllUXVlcnk6IHtcbiAgICAgICAgcGFnZTogMSxcbiAgICAgICAgbGltaXQ6IDEwLFxuICAgICAgfSxcbiAgICAgIGxpc3RRdWVyeToge1xuICAgICAgICBwYWdlOiAxLFxuICAgICAgICBsaW1pdDogMTAsXG4gICAgICB9LFxuICAgICAgbGlzdDoge30sXG4gICAgICBzZWxlY3RlZDoge30sXG4gICAgICBzZWxlY3RlZE1vdmllOiB7fSxcbiAgICAgIG1vdmllVGFibGVGaWVsZHM6IFt7XG4gICAgICAgIHRpdGxlOiAnSWQnLFxuICAgICAgICBuYW1lOiAnaWQnLFxuICAgICAgICBoaWRkZW46IHRydWUsXG4gICAgICB9LCB7XG4gICAgICAgIHRpdGxlOiAnUG9zdGVyJyxcbiAgICAgICAgbmFtZTogJ3Bvc3RlcicsXG4gICAgICAgIGZvcm1hdChzcmMpIHtcbiAgICAgICAgICByZXR1cm4gPGltZyBoZWlnaHQ9XCI3MFwiIHNyYz17c3JjfSBhbHQ9XCJMaXN0IE1vdmllXCIgLz47XG4gICAgICAgIH0sXG4gICAgICB9LCB7XG4gICAgICAgIHRpdGxlOiAnVGl0bGUnLFxuICAgICAgICBuYW1lOiAndGl0bGUnLFxuICAgICAgfSwge1xuICAgICAgICB0aXRsZTogJ1JhdGluZycsXG4gICAgICAgIG5hbWU6ICdyYXRpbmcnLFxuICAgICAgfV0sXG4gICAgICBsaXN0VGFibGVGaWVsZHM6IFt7XG4gICAgICAgIHRpdGxlOiAnSWQnLFxuICAgICAgICBuYW1lOiAnaWQnLFxuICAgICAgICBoaWRkZW46IHRydWUsXG4gICAgICB9LCB7XG4gICAgICAgIHRpdGxlOiAnTmFtZScsXG4gICAgICAgIG5hbWU6ICduYW1lJyxcbiAgICAgIH0sIHtcbiAgICAgICAgdGl0bGU6ICdDcmVhdGUgRGF0ZScsXG4gICAgICAgIG5hbWU6ICdjcmVhdGVkQXQnLFxuICAgICAgICBmb3JtYXQodmFsdWUpIHtcbiAgICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUodmFsdWUpO1xuICAgICAgICAgIHJldHVybiBkYXRlLnRvTG9jYWxlRGF0ZVN0cmluZygpO1xuICAgICAgICB9LFxuICAgICAgfSwge1xuICAgICAgICB0aXRsZTogJ1Zpc2liaWxpdHknLFxuICAgICAgICBuYW1lOiAncHVibGljJyxcbiAgICAgICAgZm9ybWF0KHZhbHVlKSB7XG4gICAgICAgICAgcmV0dXJuIHZhbHVlID8gJ1B1YmxpYycgOiAnUHJpdmF0ZSc7XG4gICAgICAgIH0sXG4gICAgICB9LCB7XG4gICAgICAgIHRpdGxlOiAnTW92aWVzJyxcbiAgICAgICAgbmFtZTogJ3RvdGFsTW92aWUnLFxuICAgICAgfSwge1xuICAgICAgICB0aXRsZTogJycsXG4gICAgICAgIG5hbWU6ICdpZCcsXG4gICAgICAgIGZvcm1hdDogaWQgPT4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1saW5rXCIgdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHRoaXMuc2hvd0xpc3RNb3ZpZXMoaWQpfT5cbiAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPVwibGlzdFwiIC8+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSxcbiAgICAgIH1dLFxuICAgIH07XG5cbiAgICB0aGlzLnNldExpc3RRdWVyeSA9IHRoaXMuc2V0TGlzdFF1ZXJ5LmJpbmQodGhpcyk7XG4gICAgdGhpcy5zZXRNb3ZpZVF1ZXJ5ID0gdGhpcy5zZXRNb3ZpZVF1ZXJ5LmJpbmQodGhpcyk7XG4gICAgdGhpcy5nZXRMaXN0cyA9IHRoaXMuZ2V0TGlzdHMuYmluZCh0aGlzKTtcbiAgICB0aGlzLnRvZ2dsZU1vZGFsID0gdGhpcy50b2dnbGVNb2RhbC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY3JlYXRlID0gdGhpcy5jcmVhdGUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmRlc3Ryb3kgPSB0aGlzLmRlc3Ryb3kuYmluZCh0aGlzKTtcbiAgICB0aGlzLnVwZGF0ZSA9IHRoaXMudXBkYXRlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2F2ZSA9IHRoaXMuc2F2ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2hvd0xpc3RNb3ZpZXMgPSB0aGlzLnNob3dMaXN0TW92aWVzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5iYWNrVG9MaXN0ID0gdGhpcy5iYWNrVG9MaXN0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5kZWxldGVGcm9tTGlzdCA9IHRoaXMuZGVsZXRlRnJvbUxpc3QuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgZ2V0QWNjb3VudERldGFpbCB9ID0gdGhpcy5wcm9wcztcbiAgICB0aGlzLmdldExpc3RzKCk7XG4gICAgZ2V0QWNjb3VudERldGFpbCgpO1xuICB9XG5cbiAgc2V0TGlzdFF1ZXJ5KGxpc3RRdWVyeSkge1xuICAgIHRoaXMuc2V0U3RhdGUocHJldlN0YXRlID0+ICh7XG4gICAgICBsaXN0UXVlcnk6IE9iamVjdC5hc3NpZ24ocHJldlN0YXRlLmxpc3RRdWVyeSwgbGlzdFF1ZXJ5KSxcbiAgICB9KSwgdGhpcy5nZXRMaXN0cyk7XG4gIH1cblxuICBzZXRNb3ZpZVF1ZXJ5KG1vdmllUXVlcnkpIHtcbiAgICB0aGlzLnNldFN0YXRlKHByZXZTdGF0ZSA9PiAoe1xuICAgICAgbW92aWVRdWVyeTogT2JqZWN0LmFzc2lnbihwcmV2U3RhdGUubW92aWVRdWVyeSwgbW92aWVRdWVyeSksXG4gICAgfSksIHRoaXMuZ2V0TGlzdHMpO1xuICB9XG5cbiAgZ2V0TGlzdHMoKSB7XG4gICAgY29uc3QgeyBnZXRMaXN0QnlDdXJyZW50VXNlciB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGxpc3RRdWVyeSB9ID0gdGhpcy5zdGF0ZTtcbiAgICBnZXRMaXN0QnlDdXJyZW50VXNlcihsaXN0UXVlcnkpO1xuICB9XG5cbiAgZ2V0TGlzdE1vdmllcygpIHtcbiAgICBjb25zdCB7IGdldExpc3RNb3ZpZXMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBtb3ZpZVF1ZXJ5IH0gPSB0aGlzLnN0YXRlO1xuICAgIGlmIChtb3ZpZVF1ZXJ5Lmxpc3RJZCkge1xuICAgICAgZ2V0TGlzdE1vdmllcyhtb3ZpZVF1ZXJ5KTtcbiAgICB9XG4gIH1cblxuICBkZWxldGVGcm9tTGlzdCgpIHtcbiAgICBjb25zdCB7IHNlbGVjdGVkTW92aWUsIHNlbGVjdGVkIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHsgcmVtb3ZlRnJvbUxpc3QgfSA9IHRoaXMucHJvcHM7XG4gICAgcmVtb3ZlRnJvbUxpc3Qoe1xuICAgICAgbGlzdElkOiBzZWxlY3RlZC5pZCxcbiAgICAgIG1vdmllSWQ6IHNlbGVjdGVkTW92aWUuaWQsXG4gICAgfSk7XG4gIH1cblxuICBiYWNrVG9MaXN0KCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2hvd01vdmllczogZmFsc2UsXG4gICAgICBzZWxlY3RlZE1vdmllOiB7fSxcbiAgICAgIG1vdmllUXVlcnk6IHtcbiAgICAgICAgcGFnZTogMSxcbiAgICAgICAgbGltaXQ6IDEwLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIHNob3dMaXN0TW92aWVzKGxpc3RJZCkge1xuICAgIHRoaXMuc2V0U3RhdGUocHJldlN0YXRlID0+ICh7XG4gICAgICBzaG93TW92aWVzOiB0cnVlLFxuICAgICAgc2VsZWN0ZWQ6IHt9LFxuICAgICAgbW92aWVRdWVyeTogT2JqZWN0LmFzc2lnbihwcmV2U3RhdGUubW92aWVRdWVyeSwge1xuICAgICAgICBsaXN0SWQsXG4gICAgICB9KSxcbiAgICB9KSwgdGhpcy5nZXRMaXN0TW92aWVzKTtcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgY29uc3QgeyBkZWxldGVMaXN0LCB0b2dnbGVBbGVydERpYWxvZyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IHNlbGVjdGVkIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgaWYgKCFzZWxlY3RlZCB8fCAhc2VsZWN0ZWQuaWQpIHtcbiAgICAgIHJldHVybiB0b2dnbGVBbGVydERpYWxvZyh7XG4gICAgICAgIGtpbmQ6ICd3YXJuaW5nJyxcbiAgICAgICAgbWVzc2FnZTogJ05vIHNlbGVjdGVkIGRhdGEuJyxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGRlbGV0ZUxpc3Qoc2VsZWN0ZWQuaWQsIHRoaXMuZ2V0TGlzdHMpO1xuICB9XG5cbiAgY3JlYXRlKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBsaXN0OiB7fSB9KTtcbiAgICB0aGlzLnRvZ2dsZU1vZGFsKCk7XG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgY29uc3QgeyBzZWxlY3RlZCB9ID0gdGhpcy5zdGF0ZTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGxpc3Q6IHNlbGVjdGVkLFxuICAgIH0sIHRoaXMudG9nZ2xlTW9kYWwpO1xuICB9XG5cbiAgdG9nZ2xlTW9kYWwoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZShwcmV2U3RhdGUgPT4gKHtcbiAgICAgIHNob3dNb2RhbDogIXByZXZTdGF0ZS5zaG93TW9kYWwsXG4gICAgfSkpO1xuICB9XG5cbiAgaGFuZGxlQ2hhbmdlKHsgdGFyZ2V0IH0pIHtcbiAgICBjb25zdCB7IG5hbWUgfSA9IHRhcmdldDtcbiAgICBjb25zdCB7IGxpc3QgfSA9IHRoaXMuc3RhdGU7XG4gICAgbGV0IHZhbHVlID0gdGFyZ2V0LnBhcnNlZFZhbHVlIHx8IHRhcmdldC52YWx1ZTtcblxuICAgIGlmIChuYW1lID09PSAncHVibGljJykge1xuICAgICAgdmFsdWUgPSBOdW1iZXIucGFyc2VJbnQodmFsdWUsIDEwKTtcbiAgICB9XG5cbiAgICBsaXN0W25hbWVdID0gdmFsdWU7XG5cbiAgICB0aGlzLnNldFN0YXRlKHsgbGlzdCB9KTtcbiAgfVxuXG4gIHNhdmUoKSB7XG4gICAgY29uc3QgeyBsaXN0IH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHsgc2F2ZUxpc3QgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBsaXN0LnB1YmxpYyA9IE51bWJlci5wYXJzZUludChsaXN0LnB1YmxpYywgMTApO1xuXG4gICAgc2F2ZUxpc3QobGlzdCwgKCkgPT4ge1xuICAgICAgdGhpcy5nZXRMaXN0cygpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxpc3Q6IHt9IH0pO1xuICAgICAgdGhpcy50b2dnbGVNb2RhbCgpO1xuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGxpc3RRdWVyeSxcbiAgICAgIG1vdmllUXVlcnksXG4gICAgICBzaG93TW9kYWwsXG4gICAgICBsaXN0LFxuICAgICAgc2VsZWN0ZWQsXG4gICAgICBzZWxlY3RlZE1vdmllLFxuICAgICAgbGlzdFRhYmxlRmllbGRzLFxuICAgICAgbW92aWVUYWJsZUZpZWxkcyxcbiAgICAgIHNob3dNb3ZpZXMsXG4gICAgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3Qge1xuICAgICAgbWF0Y2gsXG4gICAgICB1c2VyLFxuICAgICAgcGFnZUxvYWRpbmcsXG4gICAgICB0b3RhbExpc3QsXG4gICAgICB0b3RhbE1vdmllLFxuICAgICAgbW92aWVzLFxuICAgICAgbGlzdHMsXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBsZXQgY29udGVudCA9IChcbiAgICAgIDxUYWJsZUxpc3RcbiAgICAgICAgZGF0YT17bGlzdHN9XG4gICAgICAgIG9uQ3JlYXRlPXt0aGlzLmNyZWF0ZX1cbiAgICAgICAgb25EZWxldGU9e3RoaXMuZGVzdHJveX1cbiAgICAgICAgb25FZGl0PXt0aGlzLnVwZGF0ZX1cbiAgICAgICAgb25TZWxlY3Q9e3MgPT4gdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkOiBzIH0pfVxuICAgICAgICBzZWxlY3RlZD17c2VsZWN0ZWR9XG4gICAgICAgIGZpZWxkcz17bGlzdFRhYmxlRmllbGRzfVxuICAgICAgICBwYWdpbmF0aW9uPXt7XG4gICAgICAgICAgdG90YWw6IHRvdGFsTGlzdCxcbiAgICAgICAgICBwYWdlOiBsaXN0UXVlcnkucGFnZSxcbiAgICAgICAgICBsaW1pdDogbGlzdFF1ZXJ5LmxpbWl0LFxuICAgICAgICAgIGJ1dHRvbkNvdW50OiA1LFxuICAgICAgICAgIG9uUGFnaW5hdGU6IHRoaXMuc2V0TGlzdFF1ZXJ5LFxuICAgICAgICB9fVxuICAgICAgLz5cbiAgICApO1xuXG4gICAgaWYgKHNob3dNb3ZpZXMpIHtcbiAgICAgIGNvbnRlbnQgPSAoXG4gICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBtdC0yXCI+XG4gICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250U2l6ZTogJzI2cHgnLCBmb250V2VpZ2h0OiAnYm9sZCcgfX0+TW92aWVzPC9zcGFuPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXByaW1hcnkgcm91bmRlZC0wXCIgb25DbGljaz17dGhpcy5iYWNrVG9MaXN0fT5CYWNrIFRvIExpc3Q8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8VGFibGVMaXN0XG4gICAgICAgICAgICBkYXRhPXttb3ZpZXN9XG4gICAgICAgICAgICBvbkRlbGV0ZT17dGhpcy5kZWxldGVGcm9tTGlzdH1cbiAgICAgICAgICAgIG9uU2VsZWN0PXtzID0+IHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZE1vdmllOiBzIH0pfVxuICAgICAgICAgICAgc2VsZWN0ZWQ9e3NlbGVjdGVkTW92aWV9XG4gICAgICAgICAgICBmaWVsZHM9e21vdmllVGFibGVGaWVsZHN9XG4gICAgICAgICAgICBwYWdpbmF0aW9uPXt7XG4gICAgICAgICAgICAgIHRvdGFsOiB0b3RhbE1vdmllLFxuICAgICAgICAgICAgICBwYWdlOiBtb3ZpZVF1ZXJ5LnBhZ2UsXG4gICAgICAgICAgICAgIGxpbWl0OiBtb3ZpZVF1ZXJ5LmxpbWl0LFxuICAgICAgICAgICAgICBidXR0b25Db3VudDogNSxcbiAgICAgICAgICAgICAgb25QYWdpbmF0ZTogdGhpcy5zZXRMaXN0UXVlcnksXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8RnJhZ21lbnQ+XG4gICAgICAgIDxOYXZiYXIgdXNlcj17dXNlcn0gLz5cbiAgICAgICAgPFByb2ZpbGVDb250YWluZXIgdXNlcj17dXNlcn0gcGF0aD17bWF0Y2gucGF0aH0gcGFnZUxvYWRpbmc9e3BhZ2VMb2FkaW5nfT5cbiAgICAgICAgICB7Y29udGVudH1cbiAgICAgICAgPC9Qcm9maWxlQ29udGFpbmVyPlxuICAgICAgICA8TW9kYWwgc2hvdz17c2hvd01vZGFsfSB0aXRsZT1cIkNyZWF0ZSBMaXN0XCIgY2FuY2VsPXt0aGlzLnRvZ2dsZU1vZGFsfSBzdWJtaXQ9e3RoaXMuc2F2ZX0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICA8bGFiZWw+TGlzdCBOYW1lPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJMaXN0IE5hbWVcIlxuICAgICAgICAgICAgICB2YWx1ZT17bGlzdC5uYW1lfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tY2hlY2tcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5wdXRcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJwdWJsaWNcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9XCIxXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2xpc3QucHVibGljfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY2hlY2stbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgIFB1YmxpYyBMaXN0XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jaGVja1wiPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbnB1dFwiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgbmFtZT1cInB1YmxpY1wiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT1cIjBcIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgY2hlY2tlZD17IWxpc3QucHVibGljfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY2hlY2stbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgIFByaXZhdGUgTGlzdFxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvTW9kYWw+XG4gICAgICA8L0ZyYWdtZW50PlxuICAgICk7XG4gIH1cbn1cblxuTGlzdHMuZGVmYXVsdFByb3BzID0ge1xuICB0b3RhbExpc3Q6IDAsXG4gIHRvdGFsTW92aWU6IDAsXG59O1xuXG5MaXN0cy5wcm9wVHlwZXMgPSB7XG4gIHRvZ2dsZUFsZXJ0RGlhbG9nOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBnZXRMaXN0QnlDdXJyZW50VXNlcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgZ2V0QWNjb3VudERldGFpbDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgZ2V0TGlzdE1vdmllczogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgZGVsZXRlTGlzdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgc2F2ZUxpc3Q6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHBhZ2VMb2FkaW5nOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICB0b3RhbExpc3Q6IFByb3BUeXBlcy5udW1iZXIsXG4gIHRvdGFsTW92aWU6IFByb3BUeXBlcy5udW1iZXIsXG59O1xuIiwiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IExpc3RzIGZyb20gJy4vTGlzdHMnO1xuaW1wb3J0IHsgZ2V0QWNjb3VudERldGFpbCB9IGZyb20gJy4uLy4uL2FjdGlvbnMvYWNjb3VudCc7XG5pbXBvcnQgeyB0b2dnbGVBbGVydERpYWxvZyB9IGZyb20gJy4uLy4uL2FjdGlvbnMvY29tbW9uJztcbmltcG9ydCB7XG4gIGdldExpc3RCeUN1cnJlbnRVc2VyLFxuICBzYXZlTGlzdCxcbiAgZGVsZXRlTGlzdCxcbiAgZ2V0TGlzdE1vdmllcyxcbiAgcmVtb3ZlRnJvbUxpc3QsXG59IGZyb20gJy4uLy4uL2FjdGlvbnMvbGlzdHMnO1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xuICBsaXN0czogc3RhdGUubGlzdHMubGlzdHMsXG4gIHRvdGFsOiBzdGF0ZS5saXN0cy50b3RhbCxcbiAgbW92aWVzOiBzdGF0ZS5saXN0cy5tb3ZpZXMsXG4gIHRhYmxlRmllbGRzOiBzdGF0ZS5saXN0cy50YWJsZUZpZWxkcyxcbiAgcGFnZUxvYWRpbmc6IHN0YXRlLmNvbW1vbi5wYWdlTG9hZGluZyxcbiAgbG9hZGluZzogc3RhdGUuY29tbW9uLmxvYWRpbmcsXG4gIHVzZXI6IHN0YXRlLmFjY291bnQudXNlcixcbn0pO1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiAoe1xuICBnZXRMaXN0QnlDdXJyZW50VXNlcjogcXVlcnkgPT4gZGlzcGF0Y2goZ2V0TGlzdEJ5Q3VycmVudFVzZXIocXVlcnkpKSxcbiAgc2F2ZUxpc3Q6IChsaXN0LCBjYWxsYmFjaykgPT4gZGlzcGF0Y2goc2F2ZUxpc3QobGlzdCwgY2FsbGJhY2spKSxcbiAgZGVsZXRlTGlzdDogKGlkLCBjYWxsYmFjaykgPT4gZGlzcGF0Y2goZGVsZXRlTGlzdChpZCwgY2FsbGJhY2spKSxcbiAgZ2V0QWNjb3VudERldGFpbDogKCkgPT4gZGlzcGF0Y2goZ2V0QWNjb3VudERldGFpbCgpKSxcbiAgdG9nZ2xlQWxlcnREaWFsb2c6IGFsZXJ0ID0+IGRpc3BhdGNoKHRvZ2dsZUFsZXJ0RGlhbG9nKGFsZXJ0KSksXG4gIGdldExpc3RNb3ZpZXM6IHF1ZXJ5ID0+IGRpc3BhdGNoKGdldExpc3RNb3ZpZXMocXVlcnkpKSxcbiAgcmVtb3ZlRnJvbUxpc3Q6IGxpc3RNb3ZpZSA9PiBkaXNwYXRjaChyZW1vdmVGcm9tTGlzdChsaXN0TW92aWUpKSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICBtYXBTdGF0ZVRvUHJvcHMsXG4gIG1hcERpc3BhdGNoVG9Qcm9wcyxcbikoTGlzdHMpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcblxuaW1wb3J0IE5hdmJhciBmcm9tICcuLi8uLi9jb21wb25lbnRzL05hdmJhcic7XG5pbXBvcnQgUHJvZ3Jlc3NCYXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Qcm9ncmVzc0Jhcic7XG5pbXBvcnQgRGV0YWlsVGFibGUgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9EZXRhaWxUYWJsZSc7XG5pbXBvcnQgQ29tcGFueUxpc3QgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Db21wYW55TGlzdCc7XG5pbXBvcnQgQ2FzdExpc3QgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9DYXN0TGlzdCc7XG5pbXBvcnQgVmlkZW8gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9WaWRlbyc7XG5pbXBvcnQgeyBVc2VyU2hhcGUgfSBmcm9tICcuLi8uLi9jb25zdGFudHMvcHJvcC1zaGFwZXMnO1xuaW1wb3J0IE1vZGFsIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTW9kYWwnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb3ZpZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzaG93TGlzdE1vZGFsOiBmYWxzZSxcbiAgICAgIGxpc3Q6IHtcbiAgICAgICAgcGFnZTogMSxcbiAgICAgICAgbGltaXQ6IDEwLFxuICAgICAgfSxcbiAgICB9O1xuXG4gICAgdGhpcy50b2dnbGVMaXN0TW9kYWwgPSB0aGlzLnRvZ2dsZUxpc3RNb2RhbC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBsaXN0IH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHsgZ2V0TW92aWVEZXRhaWwsIGdldExpc3RCeUN1cnJlbnRVc2VyLCBtYXRjaCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBtb3ZpZUlkID0gbWF0Y2gucGFyYW1zLmlkO1xuICAgIGdldE1vdmllRGV0YWlsKG1vdmllSWQpO1xuICAgIGdldExpc3RCeUN1cnJlbnRVc2VyKGxpc3QsIG1vdmllSWQpO1xuICB9XG5cbiAgdG9nZ2xlTGlzdE1vZGFsKCkge1xuICAgIHRoaXMuc2V0U3RhdGUocHJldlN0YXRlID0+ICh7XG4gICAgICBzaG93TGlzdE1vZGFsOiAhcHJldlN0YXRlLnNob3dMaXN0TW9kYWwsXG4gICAgfSkpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgc2hvd0xpc3RNb2RhbCwgbGlzdCB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB7XG4gICAgICBtYXRjaCxcbiAgICAgIGRldGFpbCxcbiAgICAgIHVzZXIsXG4gICAgICBpc0xvZ2dlZEluLFxuICAgICAgbGlzdHMsXG4gICAgICBhZGRUb0xpc3QsXG4gICAgICByZW1vdmVGcm9tTGlzdCxcbiAgICAgIGdldExpc3RCeUN1cnJlbnRVc2VyLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKCFkZXRhaWwpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgICA8TmF2YmFyIGlzTG9nZ2VkSW49e2lzTG9nZ2VkSW59IHVzZXI9e3VzZXJ9IC8+XG4gICAgICAgICAgPFByb2dyZXNzQmFyIHNob3cgY29sb3I9XCJpbmZvXCIgLz5cbiAgICAgICAgPC9GcmFnbWVudD5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgY29uc3QgdmlkZW8gPSBkZXRhaWwudmlkZW9zLmxlbmd0aCA+IDBcbiAgICAgID8gPFZpZGVvIHZpZGVvS2V5PXtkZXRhaWwudmlkZW9zWzBdLmtleX0gLz5cbiAgICAgIDogbnVsbDtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8TmF2YmFyIGlzTG9nZ2VkSW49e2lzTG9nZ2VkSW59IHVzZXI9e3VzZXJ9IC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIG10LTJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLXNtLTYgY29sLW1kLTNcIj5cbiAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpbWctZmx1aWQgbWItMlwiIHNyYz17ZGV0YWlsLnBvc3RlclBhdGh9IGFsdD17ZGV0YWlsLnRpdGxlfSAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTJcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5IHJvdW5kZWQtMFwiIHR5cGU9XCJidXR0b25cIiB0aXRsZT1cIkFkZCBUbyBMaXN0XCIgb25DbGljaz17dGhpcy50b2dnbGVMaXN0TW9kYWx9PlxuICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPVwicGx1cy1zcXVhcmVcIiAvPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPENvbXBhbnlMaXN0IGNvbXBhbmllcz17ZGV0YWlsLnByb2R1Y3Rpb25fY29tcGFuaWVzfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1zbS0xMiBjb2wtbWQtNiBtYi0yXCI+XG4gICAgICAgICAgICAgIHt2aWRlb31cbiAgICAgICAgICAgICAgPERldGFpbFRhYmxlIG1vdmllPXtkZXRhaWx9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLXNtLTYgY29sLW1kLTMgbWItMlwiPlxuICAgICAgICAgICAgICA8Q2FzdExpc3QgY2FzdHM9e2RldGFpbC5jcmVkaXRzLmNhc3R9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxNb2RhbCBzaG93PXtzaG93TGlzdE1vZGFsfSB0aXRsZT1cIkFkZCBUbyBMaXN0XCIgY2FuY2VsPXt0aGlzLnRvZ2dsZUxpc3RNb2RhbH0+XG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXBcIj5cbiAgICAgICAgICAgIHtsaXN0cy5tYXAobCA9PiAoXG4gICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGxpc3QtZ3JvdXAtaXRlbSByb3VuZGVkLTAgJHtsLmlzQWRkZWQgPyAnbGlzdC1ncm91cC1pdGVtLXN1Y2Nlc3MnIDogJyAnfWB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICAgIHtsLm5hbWV9XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BidG4gYnRuLXNtIGJ0bi1vdXRsaW5lLSR7bC5pc0FkZGVkID8gJ2RhbmdlcicgOiAnc3VjY2Vzcyd9YH1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1vdmllSWQgPSBtYXRjaC5wYXJhbXMuaWQ7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGlzdE9iamVjdCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vdmllSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0SWQ6IGwuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICAgIGlmICghbC5pc0FkZGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYWRkVG9MaXN0KGxpc3RPYmplY3QsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50b2dnbGVMaXN0TW9kYWwoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0TGlzdEJ5Q3VycmVudFVzZXIobGlzdCwgbW92aWVJZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVtb3ZlRnJvbUxpc3QobGlzdE9iamVjdCwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50b2dnbGVMaXN0TW9kYWwoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldExpc3RCeUN1cnJlbnRVc2VyKGxpc3QsIG1vdmllSWQpO1xuICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2Ake2wuaXNBZGRlZCA/ICd0cmFzaCcgOiAncGx1cy1zcXVhcmUnfWB9IC8+XG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L01vZGFsPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5Nb3ZpZS5kZWZhdWx0UHJvcHMgPSB7XG4gIGlzTG9nZ2VkSW46IGZhbHNlLFxufTtcblxuTW92aWUucHJvcFR5cGVzID0ge1xuICBnZXRNb3ZpZURldGFpbDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgYWRkVG9MaXN0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICByZW1vdmVGcm9tTGlzdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgZ2V0TGlzdEJ5Q3VycmVudFVzZXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGRldGFpbDogUHJvcFR5cGVzLmluc3RhbmNlT2YoT2JqZWN0KS5pc1JlcXVpcmVkLFxuICBtYXRjaDogUHJvcFR5cGVzLmluc3RhbmNlT2YoT2JqZWN0KS5pc1JlcXVpcmVkLFxuICBsaXN0czogUHJvcFR5cGVzLmluc3RhbmNlT2YoQXJyYXkpLmlzUmVxdWlyZWQsXG4gIHVzZXI6IFVzZXJTaGFwZS5pc1JlcXVpcmVkLFxuICBpc0xvZ2dlZEluOiBQcm9wVHlwZXMuYm9vbCxcbn07XG4iLCJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IE1vdmllIGZyb20gJy4vTW92aWUnO1xuaW1wb3J0IHsgZ2V0TW92aWVEZXRhaWwgfSBmcm9tICcuLi8uLi9hY3Rpb25zL21vdmllJztcbmltcG9ydCB7IGdldExpc3RCeUN1cnJlbnRVc2VyLCBhZGRUb0xpc3QsIHJlbW92ZUZyb21MaXN0IH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9saXN0cyc7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XG4gIGRldGFpbDogc3RhdGUubW92aWUuZGV0YWlsLFxuICB1c2VyOiBzdGF0ZS5kaXNjb3Zlci51c2VyLFxuICBpc0xvZ2dlZEluOiBzdGF0ZS5kaXNjb3Zlci5pc0xvZ2dlZEluLFxuICBsaXN0czogc3RhdGUubGlzdHMubGlzdHMsXG59KTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4gKHtcbiAgZ2V0TW92aWVEZXRhaWw6IGlkID0+IGRpc3BhdGNoKGdldE1vdmllRGV0YWlsKGlkKSksXG4gIGdldExpc3RCeUN1cnJlbnRVc2VyOiAocXVlcnksIG1vdmllSWQpID0+IGRpc3BhdGNoKGdldExpc3RCeUN1cnJlbnRVc2VyKHF1ZXJ5LCBtb3ZpZUlkKSksXG4gIGFkZFRvTGlzdDogKGxpc3RNb3ZpZSwgY2FsbGJhY2spID0+IGRpc3BhdGNoKGFkZFRvTGlzdChsaXN0TW92aWUsIGNhbGxiYWNrKSksXG4gIHJlbW92ZUZyb21MaXN0OiAobGlzdE1vdmllLCBjYWxsYmFjaykgPT4gZGlzcGF0Y2gocmVtb3ZlRnJvbUxpc3QobGlzdE1vdmllLCBjYWxsYmFjaykpLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIG1hcFN0YXRlVG9Qcm9wcyxcbiAgbWFwRGlzcGF0Y2hUb1Byb3BzLFxuKShNb3ZpZSk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAncmVhY3QtZG9tJztcblxuaW1wb3J0ICcuLi9zY3JpcHRzJztcbmltcG9ydCAnLi4vLi4vc3R5bGVzaGVldHMvc2Nzcy9tYWluLnNjc3MnO1xuaW1wb3J0IGNvbmZpZ3VyZVN0b3JlIGZyb20gJy4vc3RvcmUvY29uZmlndXJlLXN0b3JlJztcbmltcG9ydCBSb290IGZyb20gJy4vUm9vdCc7XG5pbXBvcnQgZm9udEF3ZXNvbWUgZnJvbSAnLi4vbGliL2ZvbnQtYXdlc29tZSc7XG5cbmZvbnRBd2Vzb21lKCk7IC8vIGluaXQgZm9udCBhd3NvbWUgaWNvbnNcblxuY29uc3Qgc3RvcmUgPSBjb25maWd1cmVTdG9yZSgpO1xuXG5yZW5kZXIoXG4gIDxSb290IHN0b3JlPXtzdG9yZX0gLz4sXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSxcbik7XG4iLCJpbXBvcnQgeyBTRVRfQUNDT1VOVF9ERVRBSUwgfSBmcm9tICcuLi9jb25zdGFudHMvYWN0aW9uLXR5cGVzJztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICB1c2VyOiB7fSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFjY291bnQoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBTRVRfQUNDT1VOVF9ERVRBSUw6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgdXNlcjogYWN0aW9uLnBheWxvYWQudXNlcixcbiAgICAgIH0pO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgVE9HR0xFX0FMRVJULFxuICBTRVRfUEFHRV9MT0FESU5HX1NUQVRVUyxcbiAgU0VUX0xPQURJTkdfU1RBVFVTLFxuICBUT0dHTEVfRklMVEVSLFxuICBTRVRfVVBMT0FERURfSU1BR0UsXG59IGZyb20gJy4uL2NvbnN0YW50cy9hY3Rpb24tdHlwZXMnO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIHNob3dBbGVydDogZmFsc2UsXG4gIGFsZXJ0TWVzc2FnZTogbnVsbCxcbiAgYWxlcnRLaW5kOiAnaW5mbycsXG4gIHBhZ2VMb2FkaW5nOiB0cnVlLFxuICBsb2FkaW5nOiBmYWxzZSxcbiAgc2hvd0ZpbHRlcjogdHJ1ZSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbW1vbihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFRPR0dMRV9BTEVSVDpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBzaG93QWxlcnQ6ICFzdGF0ZS5zaG93QWxlcnQsXG4gICAgICAgIGFsZXJ0TWVzc2FnZTogYWN0aW9uLm1lc3NhZ2UsXG4gICAgICAgIGFsZXJ0S2luZDogYWN0aW9uLmtpbmQsXG4gICAgICB9KTtcblxuICAgIGNhc2UgU0VUX1BBR0VfTE9BRElOR19TVEFUVVM6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgcGFnZUxvYWRpbmc6IGFjdGlvbi5wYWdlTG9hZGluZyxcbiAgICAgIH0pO1xuXG4gICAgY2FzZSBTRVRfTE9BRElOR19TVEFUVVM6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgbG9hZGluZzogYWN0aW9uLmxvYWRpbmcsXG4gICAgICB9KTtcblxuICAgIGNhc2UgVE9HR0xFX0ZJTFRFUjpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBzaG93RmlsdGVyOiAhc3RhdGUuc2hvd0ZpbHRlcixcbiAgICAgIH0pO1xuXG4gICAgY2FzZSBTRVRfVVBMT0FERURfSU1BR0U6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgdXBsb2FkZWRBdmF0YXI6IGFjdGlvbi5wYXlsb2FkLFxuICAgICAgfSk7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG4iLCJpbXBvcnQgeyBTRVRfTU9WSUVTLCBTRVRfR0VOUkVTLCBTRVRfUVVFUlkgfSBmcm9tICcuLi9jb25zdGFudHMvYWN0aW9uLXR5cGVzJztcbmltcG9ydCBjb29raWUgZnJvbSAnLi4vLi4vbGliL2Nvb2tpZSc7XG5cbmNvbnN0IHVzZXIgPSB7XG4gIGlkOiBjb29raWUuZ2V0KCd1c2VyX2lkJyksXG4gIHVzZXJOYW1lOiBjb29raWUuZ2V0KCd1c2VybmFtZScpLFxuICBmcmlzdE5hbWU6IGNvb2tpZS5nZXQoJ3VzZXJfZmlyc3RfbmFtZScpLFxuICBsYXN0TmFtZTogY29va2llLmdldCgndXNlcl9sYXN0X25hbWUnKSxcbiAgZW1haWw6IGNvb2tpZS5nZXQoJ3VzZXJfZW1haWwnKSxcbn07XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgdXNlcixcbiAgZ2VucmVzOiBbXSxcbiAgbW92aWVzOiBbXSxcbiAgdG90YWw6IDAsXG4gIHRvdGFsUGFnZTogMSxcbiAgcXVlcnk6IHtcbiAgICBwYWdlOiAxLFxuICAgIHNvcnRCeTogJ3BvcHVsYXJpdHkuZGVzYycsXG4gICAgZmlsdGVyOiBudWxsLFxuICAgIHNlYXJjaFRleHQ6IG51bGwsXG4gICAgd2l0aEdlbnJlczogW10sXG4gICAgeWVhcjogbnVsbCxcbiAgICBjcmV3czogW10sXG4gICAgY2FzdHM6IFtdLFxuICB9LFxuICBpc0xvZ2dlZEluOiAhIXVzZXIuZW1haWwsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaXNjb3ZlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFNFVF9NT1ZJRVM6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgbW92aWVzOiBzdGF0ZS5tb3ZpZXMuY29uY2F0KGFjdGlvbi5tb3ZpZXMpLFxuICAgICAgICB0b3RhbDogYWN0aW9uLnRvdGFsLFxuICAgICAgICB0b3RhbFBhZ2VzOiBhY3Rpb24udG90YWxQYWdlcyxcbiAgICAgICAgcXVlcnk6IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLnF1ZXJ5LCB7XG4gICAgICAgICAgcGFnZTogYWN0aW9uLnBhZ2UsXG4gICAgICAgIH0pLFxuICAgICAgfSk7XG5cbiAgICBjYXNlIFNFVF9HRU5SRVM6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgZ2VucmVzOiBhY3Rpb24uZ2VucmVzLFxuICAgICAgfSk7XG5cbiAgICBjYXNlIFNFVF9RVUVSWTpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBtb3ZpZXM6IFtdLFxuICAgICAgICBxdWVyeTogT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUucXVlcnksIHtcbiAgICAgICAgICBwYWdlOiAxLFxuICAgICAgICAgIFthY3Rpb24uZmllbGRdOiBhY3Rpb24udmFsdWUsXG4gICAgICAgIH0pLFxuICAgICAgfSk7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG5cbi8vIFRPRE86IE1vdmUgdXNlciBvYmplY3QgdG8gYWNjb3VudCByZWR1Y2VyXG4iLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCc7XG5cbmltcG9ydCBhY2NvdW50IGZyb20gJy4vYWNjb3VudCc7XG5pbXBvcnQgZGlzY292ZXIgZnJvbSAnLi9kaXNjb3Zlcic7XG5pbXBvcnQgbW92aWUgZnJvbSAnLi9tb3ZpZSc7XG5pbXBvcnQgbGlzdHMgZnJvbSAnLi9saXN0cyc7XG5pbXBvcnQgY29tbW9uIGZyb20gJy4vY29tbW9uJztcblxuZXhwb3J0IGRlZmF1bHQgY29tYmluZVJlZHVjZXJzKHtcbiAgYWNjb3VudCxcbiAgZGlzY292ZXIsXG4gIG1vdmllLFxuICBsaXN0cyxcbiAgY29tbW9uLFxufSk7XG4iLCJpbXBvcnQgeyBTRVRfTElTVFMsIFNFVF9MSVNUX01PVklFUyB9IGZyb20gJy4uL2NvbnN0YW50cy9hY3Rpb24tdHlwZXMnO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIGxpc3RzOiBbXSxcbiAgdG90YWxMaXN0OiAwLFxuICBtb3ZpZXM6IFtdLFxuICB0b3RhbE1vdmllOiAwLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbGlzdHMoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBTRVRfTElTVFM6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgbGlzdHM6IGFjdGlvbi5wYXlsb2FkLmxpc3RzLFxuICAgICAgICB0b3RhbExpc3Q6IGFjdGlvbi5wYXlsb2FkLnRvdGFsLFxuICAgICAgfSk7XG5cbiAgICBjYXNlIFNFVF9MSVNUX01PVklFUzpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBtb3ZpZXM6IGFjdGlvbi5wYXlsb2FkLm1vdmllcyxcbiAgICAgICAgdG90YWxNb3ZpZTogYWN0aW9uLnBheWxvYWQudG90YWwsXG4gICAgICB9KTtcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cbiIsImltcG9ydCB7IFNFVF9NT1ZJRV9ERVRBSUwgfSBmcm9tICcuLi9jb25zdGFudHMvYWN0aW9uLXR5cGVzJztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBkZXRhaWw6IG51bGwsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZXRhaWwoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBTRVRfTU9WSUVfREVUQUlMOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIGRldGFpbDogYWN0aW9uLmRldGFpbCxcbiAgICAgIH0pO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB0aHVua01pZGRsZXdhcmUgZnJvbSAncmVkdXgtdGh1bmsnO1xuaW1wb3J0IHJlZHVjZXIgZnJvbSAnLi4vcmVkdWNlcnMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb25maWd1cmVTdG9yZSgpIHtcbiAgcmV0dXJuIGNyZWF0ZVN0b3JlKFxuICAgIHJlZHVjZXIsXG4gICAgYXBwbHlNaWRkbGV3YXJlKFxuICAgICAgdGh1bmtNaWRkbGV3YXJlLFxuICAgICksXG4gICk7XG59XG4iLCJcbmltcG9ydCB7XG4gIHNldFBhZ2VMb2FkaW5nU3RhdHVzLFxuICB0b2dnbGVBbGVydERpYWxvZyxcbiAgc2V0TG9hZGluZ1N0YXR1cyxcbn0gZnJvbSAnLi4vYXBwL2FjdGlvbnMvY29tbW9uJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWpheEVycm9ySGFuZGxlcihkaXNwYXRjaCkge1xuICByZXR1cm4gKHsgcmVzcG9uc2UgfSkgPT4ge1xuICAgIGNvbnN0IHN0YXR1c0NvZGUgPSByZXNwb25zZS5zdGF0dXM7XG5cbiAgICBkaXNwYXRjaChzZXRQYWdlTG9hZGluZ1N0YXR1cyhmYWxzZSkpO1xuICAgIGRpc3BhdGNoKHNldExvYWRpbmdTdGF0dXMoZmFsc2UpKTtcblxuICAgIHN3aXRjaCAoc3RhdHVzQ29kZSkge1xuICAgICAgY2FzZSA0MDQ6XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYCR7dmlzc25lLmRvbWFpbn0vcGFnZS1ub3QtZm91bmRgO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSA0MDM6XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYCR7dmlzc25lLmRvbWFpbn0vYXV0aGA7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBkaXNwYXRjaChcbiAgICAgICAgICB0b2dnbGVBbGVydERpYWxvZyh7XG4gICAgICAgICAgICBraW5kOiAnZGFuZ2VyJyxcbiAgICAgICAgICAgIG1lc3NhZ2U6IHJlc3BvbnNlLmRhdGEubWVzc2FnZSxcbiAgICAgICAgICB9KSxcbiAgICAgICAgKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9O1xufVxuIiwiZXhwb3J0IGNvbnN0IEFMRVJUX1RZUEVTID0gW1xuICAncHJpbWFyeScsXG4gICdzZWNvbmRhcnknLFxuICAnc3VjY2VzcycsXG4gICdkYW5nZXInLFxuICAnd2FybmluZycsXG4gICdpbmZvJyxcbiAgJ2xpZ2h0JyxcbiAgJ2RhcmsnLFxuXTtcblxuZXhwb3J0IGNvbnN0IEFMRVJUX1RZUEVfSUNPTl9NQVAgPSB7XG4gIHByaW1hcnk6ICcnLFxufTtcbiIsImNvbnN0IGRvYyA9IGRvY3VtZW50O1xuXG5jb25zdCBzZXQgPSAobmFtZSwgdmFsdWUpID0+IHtcbiAgZG9jLmNvb2tpZSA9IGAke25hbWV9PSR7dmFsdWV9YDtcbn07XG5cbmNvbnN0IGdldCA9IChuYW1lKSA9PiB7XG4gIGNvbnN0IGNvb2tpZXMgPSBkb2MuY29va2llLnNwbGl0KCc7Jyk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb29raWVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3QgW2NuYW1lLCBjdmFsdWVdID0gY29va2llc1tpXS5zcGxpdCgnPScpO1xuICAgIGlmIChjbmFtZS50cmltKCkgPT09IG5hbWUudHJpbSgpKSB7XG4gICAgICByZXR1cm4gY3ZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZ2V0LFxuICBzZXQsXG59O1xuIiwiaW1wb3J0IHsgbGlicmFyeSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZSc7XG5pbXBvcnQge1xuICBmYVVzZXIsXG4gIGZhU2lnbk91dEFsdCxcbiAgZmFFbnZlbG9wZSxcbiAgZmFVbmxvY2ssXG4gIGZhQWxpZ25MZWZ0LFxuICBmYUtleSxcbiAgZmFTaWduYXR1cmUsXG4gIGZhRmlsdGVyLFxuICBmYVNvcnRBbW91bnRVcCxcbiAgZmFTb3J0QW1vdW50RG93bixcbiAgZmFVc2VyQ2lyY2xlLFxuICBmYUxpc3QsXG4gIGZhU3RhcixcbiAgZmFIZWFydCxcbiAgZmFDb21tZW50LFxuICBmYVN3YXRjaGJvb2ssXG4gIGZhVXNlckZyaWVuZHMsXG4gIGZhQ29nLFxuICBmYUVkaXQsXG4gIGZhVXBsb2FkLFxuICBmYU5ld3NwYXBlcixcbiAgZmFBdCxcbiAgZmFBbmdsZVJpZ2h0LFxuICBmYUFuZ2xlTGVmdCxcbiAgZmFQbHVzU3F1YXJlLFxuICBmYVRyYXNoLFxuICBmYUNoZWNrLFxufSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xuaW1wb3J0IHtcbiAgZmFGYWNlYm9vayxcbiAgZmFHb29nbGUsXG4gIGZhVHdpdHRlcixcbiAgZmFJbnN0YWdyYW0sXG59IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLWJyYW5kcy1zdmctaWNvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0KCkge1xuICBsaWJyYXJ5LmFkZChcbiAgICBmYVVzZXIsXG4gICAgZmFTaWduT3V0QWx0LFxuICAgIGZhRW52ZWxvcGUsXG4gICAgZmFVbmxvY2ssXG4gICAgZmFBbGlnbkxlZnQsXG4gICAgZmFLZXksXG4gICAgZmFTaWduYXR1cmUsXG4gICAgZmFGaWx0ZXIsXG4gICAgZmFTb3J0QW1vdW50VXAsXG4gICAgZmFTb3J0QW1vdW50RG93bixcbiAgICBmYUZhY2Vib29rLFxuICAgIGZhR29vZ2xlLFxuICAgIGZhVHdpdHRlcixcbiAgICBmYUluc3RhZ3JhbSxcbiAgICBmYVVzZXJDaXJjbGUsXG4gICAgZmFMaXN0LFxuICAgIGZhU3RhcixcbiAgICBmYUhlYXJ0LFxuICAgIGZhQ29tbWVudCxcbiAgICBmYVN3YXRjaGJvb2ssXG4gICAgZmFVc2VyRnJpZW5kcyxcbiAgICBmYUNvZyxcbiAgICBmYUVkaXQsXG4gICAgZmFVcGxvYWQsXG4gICAgZmFOZXdzcGFwZXIsXG4gICAgZmFBdCxcbiAgICBmYUFuZ2xlUmlnaHQsXG4gICAgZmFBbmdsZUxlZnQsXG4gICAgZmFQbHVzU3F1YXJlLFxuICAgIGZhVHJhc2gsXG4gICAgZmFDaGVjayxcbiAgKTtcbn1cbiIsIigoKSA9PiB7XG4gIGNvbnN0IHdpbiA9IHdpbmRvdztcblxuICB3aW4ub25sb2FkID0gKCkgPT4ge1xuICAgIGNvbnN0IHBhZ2VMb2FkaW5nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhZ2VMb2FkaW5nJyk7XG5cbiAgICBpZiAocGFnZUxvYWRpbmcpIHtcbiAgICAgIHBhZ2VMb2FkaW5nLnJlbW92ZSgpO1xuICAgIH1cblxuICAgIGlmICh2aXNzbmUuZW52ID09PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICgnc2VydmljZVdvcmtlcicgaW4gbmF2aWdhdG9yKSB7XG4gICAgICAgIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlZ2lzdGVyKCcvc3cuanMnKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59KSgpO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==