/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_example__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/example */ \"./src/scripts/example.js\");\n/* harmony import */ var _scripts_canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/canvas */ \"./src/scripts/canvas.js\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  console.log(\"Hello World\");\n  (0,_scripts_canvas__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  const main = document.getElementById(\"main\");\n  new _scripts_example__WEBPACK_IMPORTED_MODULE_0__[\"default\"](main);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7O0FBQXdDO0FBQ007QUFFOUNFLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUMsWUFBVTtFQUNuREMsT0FBTyxDQUFDQyxHQUFHLENBQUMsYUFBYSxDQUFDO0VBQzFCSiwyREFBYyxDQUFDLENBQUM7RUFFaEIsTUFBTUssSUFBSSxHQUFHSixRQUFRLENBQUNLLGNBQWMsQ0FBQyxNQUFNLENBQUM7RUFDNUMsSUFBSVAsd0RBQU8sQ0FBQ00sSUFBSSxDQUFDO0FBQ3JCLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2FydC1jaGFvcy8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBFeGFtcGxlIGZyb20gXCIuL3NjcmlwdHMvZXhhbXBsZVwiO1xuaW1wb3J0IGRlZmF1bHRfY2FudmFzIGZyb20gXCIuL3NjcmlwdHMvY2FudmFzXCI7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsZnVuY3Rpb24oKXtcbiAgICBjb25zb2xlLmxvZyhcIkhlbGxvIFdvcmxkXCIpO1xuICAgIGRlZmF1bHRfY2FudmFzKCk7XG5cbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xuICAgIG5ldyBFeGFtcGxlKG1haW4pO1xufSkiXSwibmFtZXMiOlsiRXhhbXBsZSIsImRlZmF1bHRfY2FudmFzIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY29uc29sZSIsImxvZyIsIm1haW4iLCJnZXRFbGVtZW50QnlJZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/canvas.js":
/*!*******************************!*\
  !*** ./src/scripts/canvas.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ default_canvas; }\n/* harmony export */ });\nfunction default_canvas() {\n  const sourceCanvas = document.getElementById('sourceCanvas');\n  const targetCanvas = document.getElementById('targetCanvas');\n  const sourceCtx = sourceCanvas.getContext('2d');\n  const targetCtx = targetCanvas.getContext('2d');\n  const sourceImage = new Image();\n  sourceImage.src = 'image/van-gogh-starry-night-min.jpg';\n  sourceImage.onload = () => {\n    sourceCanvas.width = sourceImage.width;\n    sourceCanvas.height = sourceImage.height;\n    targetCanvas.width = sourceImage.width;\n    targetCanvas.height = sourceImage.height;\n    sourceCtx.drawImage(sourceImage, 0, 0);\n    const circleDiameter = 10; // Adjust the diameter of the circles as needed\n    const circleRadius = circleDiameter / 2;\n    const borderWidth = 1; // Adjust the border width as needed\n    const borderColor = 'white'; // Border color\n\n    for (let y = 0; y < sourceCanvas.height; y += circleDiameter) {\n      for (let x = 0; x < sourceCanvas.width; x += circleDiameter) {\n        const pixel = sourceCtx.getImageData(x, y, 1, 1).data;\n\n        // Draw the circle with white border around each pixel\n        targetCtx.beginPath();\n        targetCtx.arc(x + circleRadius, y + circleRadius, circleRadius, 0, 2 * Math.PI);\n        targetCtx.fillStyle = `rgba(${pixel[0]}, ${pixel[1]}, ${pixel[2]}, ${pixel[3] / 255})`;\n        targetCtx.fill();\n        targetCtx.strokeStyle = borderColor;\n        targetCtx.lineWidth = borderWidth;\n        targetCtx.stroke();\n      }\n    }\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9jYW52YXMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUNlLFNBQVNBLGNBQWNBLENBQUEsRUFBRTtFQUNwQyxNQUFNQyxZQUFZLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLGNBQWMsQ0FBQztFQUM1RCxNQUFNQyxZQUFZLEdBQUdGLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLGNBQWMsQ0FBQztFQUM1RCxNQUFNRSxTQUFTLEdBQUdKLFlBQVksQ0FBQ0ssVUFBVSxDQUFDLElBQUksQ0FBQztFQUMvQyxNQUFNQyxTQUFTLEdBQUdILFlBQVksQ0FBQ0UsVUFBVSxDQUFDLElBQUksQ0FBQztFQUUvQyxNQUFNRSxXQUFXLEdBQUcsSUFBSUMsS0FBSyxDQUFDLENBQUM7RUFDL0JELFdBQVcsQ0FBQ0UsR0FBRyxHQUFHLHFDQUFxQztFQUV2REYsV0FBVyxDQUFDRyxNQUFNLEdBQUcsTUFBTTtJQUN2QlYsWUFBWSxDQUFDVyxLQUFLLEdBQUdKLFdBQVcsQ0FBQ0ksS0FBSztJQUN0Q1gsWUFBWSxDQUFDWSxNQUFNLEdBQUdMLFdBQVcsQ0FBQ0ssTUFBTTtJQUN4Q1QsWUFBWSxDQUFDUSxLQUFLLEdBQUdKLFdBQVcsQ0FBQ0ksS0FBSztJQUN0Q1IsWUFBWSxDQUFDUyxNQUFNLEdBQUdMLFdBQVcsQ0FBQ0ssTUFBTTtJQUV4Q1IsU0FBUyxDQUFDUyxTQUFTLENBQUNOLFdBQVcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRXRDLE1BQU1PLGNBQWMsR0FBRyxFQUFFLENBQUMsQ0FBQztJQUMzQixNQUFNQyxZQUFZLEdBQUdELGNBQWMsR0FBRyxDQUFDO0lBQ3ZDLE1BQU1FLFdBQVcsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUN2QixNQUFNQyxXQUFXLEdBQUcsT0FBTyxDQUFDLENBQUM7O0lBRTdCLEtBQUssSUFBSUMsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHbEIsWUFBWSxDQUFDWSxNQUFNLEVBQUVNLENBQUMsSUFBSUosY0FBYyxFQUFFO01BQzFELEtBQUssSUFBSUssQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHbkIsWUFBWSxDQUFDVyxLQUFLLEVBQUVRLENBQUMsSUFBSUwsY0FBYyxFQUFFO1FBQ3pELE1BQU1NLEtBQUssR0FBR2hCLFNBQVMsQ0FBQ2lCLFlBQVksQ0FBQ0YsQ0FBQyxFQUFFRCxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDSSxJQUFJOztRQUVyRDtRQUNBaEIsU0FBUyxDQUFDaUIsU0FBUyxDQUFDLENBQUM7UUFDckJqQixTQUFTLENBQUNrQixHQUFHLENBQUNMLENBQUMsR0FBR0osWUFBWSxFQUFFRyxDQUFDLEdBQUdILFlBQVksRUFBRUEsWUFBWSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUdVLElBQUksQ0FBQ0MsRUFBRSxDQUFDO1FBQy9FcEIsU0FBUyxDQUFDcUIsU0FBUyxHQUFJLFFBQU9QLEtBQUssQ0FBQyxDQUFDLENBQUUsS0FBSUEsS0FBSyxDQUFDLENBQUMsQ0FBRSxLQUFJQSxLQUFLLENBQUMsQ0FBQyxDQUFFLEtBQUlBLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFJLEdBQUU7UUFDdEZkLFNBQVMsQ0FBQ3NCLElBQUksQ0FBQyxDQUFDO1FBRWhCdEIsU0FBUyxDQUFDdUIsV0FBVyxHQUFHWixXQUFXO1FBQ25DWCxTQUFTLENBQUN3QixTQUFTLEdBQUdkLFdBQVc7UUFDakNWLFNBQVMsQ0FBQ3lCLE1BQU0sQ0FBQyxDQUFDO01BQ3RCO0lBQ0o7RUFDSixDQUFDO0FBRUwiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcnQtY2hhb3MvLi9zcmMvc2NyaXB0cy9jYW52YXMuanM/N2JkZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRlZmF1bHRfY2FudmFzKCl7XG4gICAgY29uc3Qgc291cmNlQ2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NvdXJjZUNhbnZhcycpO1xuICAgIGNvbnN0IHRhcmdldENhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXJnZXRDYW52YXMnKTtcbiAgICBjb25zdCBzb3VyY2VDdHggPSBzb3VyY2VDYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBjb25zdCB0YXJnZXRDdHggPSB0YXJnZXRDYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxuICAgIGNvbnN0IHNvdXJjZUltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgc291cmNlSW1hZ2Uuc3JjID0gJ2ltYWdlL3Zhbi1nb2doLXN0YXJyeS1uaWdodC1taW4uanBnJztcblxuICAgIHNvdXJjZUltYWdlLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgc291cmNlQ2FudmFzLndpZHRoID0gc291cmNlSW1hZ2Uud2lkdGg7XG4gICAgICAgIHNvdXJjZUNhbnZhcy5oZWlnaHQgPSBzb3VyY2VJbWFnZS5oZWlnaHQ7XG4gICAgICAgIHRhcmdldENhbnZhcy53aWR0aCA9IHNvdXJjZUltYWdlLndpZHRoO1xuICAgICAgICB0YXJnZXRDYW52YXMuaGVpZ2h0ID0gc291cmNlSW1hZ2UuaGVpZ2h0O1xuXG4gICAgICAgIHNvdXJjZUN0eC5kcmF3SW1hZ2Uoc291cmNlSW1hZ2UsIDAsIDApO1xuXG4gICAgICAgIGNvbnN0IGNpcmNsZURpYW1ldGVyID0gMTA7IC8vIEFkanVzdCB0aGUgZGlhbWV0ZXIgb2YgdGhlIGNpcmNsZXMgYXMgbmVlZGVkXG4gICAgICAgIGNvbnN0IGNpcmNsZVJhZGl1cyA9IGNpcmNsZURpYW1ldGVyIC8gMjtcbiAgICAgICAgY29uc3QgYm9yZGVyV2lkdGggPSAxOyAvLyBBZGp1c3QgdGhlIGJvcmRlciB3aWR0aCBhcyBuZWVkZWRcbiAgICAgICAgY29uc3QgYm9yZGVyQ29sb3IgPSAnd2hpdGUnOyAvLyBCb3JkZXIgY29sb3JcblxuICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHNvdXJjZUNhbnZhcy5oZWlnaHQ7IHkgKz0gY2lyY2xlRGlhbWV0ZXIpIHtcbiAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgc291cmNlQ2FudmFzLndpZHRoOyB4ICs9IGNpcmNsZURpYW1ldGVyKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcGl4ZWwgPSBzb3VyY2VDdHguZ2V0SW1hZ2VEYXRhKHgsIHksIDEsIDEpLmRhdGE7XG5cbiAgICAgICAgICAgICAgICAvLyBEcmF3IHRoZSBjaXJjbGUgd2l0aCB3aGl0ZSBib3JkZXIgYXJvdW5kIGVhY2ggcGl4ZWxcbiAgICAgICAgICAgICAgICB0YXJnZXRDdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgdGFyZ2V0Q3R4LmFyYyh4ICsgY2lyY2xlUmFkaXVzLCB5ICsgY2lyY2xlUmFkaXVzLCBjaXJjbGVSYWRpdXMsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICAgICAgICAgICAgICB0YXJnZXRDdHguZmlsbFN0eWxlID0gYHJnYmEoJHtwaXhlbFswXX0sICR7cGl4ZWxbMV19LCAke3BpeGVsWzJdfSwgJHtwaXhlbFszXSAvIDI1NX0pYDtcbiAgICAgICAgICAgICAgICB0YXJnZXRDdHguZmlsbCgpO1xuXG4gICAgICAgICAgICAgICAgdGFyZ2V0Q3R4LnN0cm9rZVN0eWxlID0gYm9yZGVyQ29sb3I7XG4gICAgICAgICAgICAgICAgdGFyZ2V0Q3R4LmxpbmVXaWR0aCA9IGJvcmRlcldpZHRoO1xuICAgICAgICAgICAgICAgIHRhcmdldEN0eC5zdHJva2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbn1cblxuXG4iXSwibmFtZXMiOlsiZGVmYXVsdF9jYW52YXMiLCJzb3VyY2VDYW52YXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidGFyZ2V0Q2FudmFzIiwic291cmNlQ3R4IiwiZ2V0Q29udGV4dCIsInRhcmdldEN0eCIsInNvdXJjZUltYWdlIiwiSW1hZ2UiLCJzcmMiLCJvbmxvYWQiLCJ3aWR0aCIsImhlaWdodCIsImRyYXdJbWFnZSIsImNpcmNsZURpYW1ldGVyIiwiY2lyY2xlUmFkaXVzIiwiYm9yZGVyV2lkdGgiLCJib3JkZXJDb2xvciIsInkiLCJ4IiwicGl4ZWwiLCJnZXRJbWFnZURhdGEiLCJkYXRhIiwiYmVnaW5QYXRoIiwiYXJjIiwiTWF0aCIsIlBJIiwiZmlsbFN0eWxlIiwiZmlsbCIsInN0cm9rZVN0eWxlIiwibGluZVdpZHRoIiwic3Ryb2tlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/canvas.js\n");

/***/ }),

/***/ "./src/scripts/example.js":
/*!********************************!*\
  !*** ./src/scripts/example.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass Example {\n  constructor(ele) {\n    this.ele = ele;\n    this.ele.innerHTML = \"<h1>I'm ALIVE!!!</h1>\";\n    this.ele.addEventListener(\"click\", this.handleClick.bind(this));\n  }\n  handleClick() {\n    this.ele.children[0].innerHTML = \"Ouch I am gonna die!\";\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Example);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9leGFtcGxlLmpzIiwibWFwcGluZ3MiOiI7QUFBQSxNQUFNQSxPQUFPO0VBQ1RDLFdBQVdBLENBQUNDLEdBQUcsRUFBQztJQUNaLElBQUksQ0FBQ0EsR0FBRyxHQUFHQSxHQUFHO0lBQ2QsSUFBSSxDQUFDQSxHQUFHLENBQUNDLFNBQVMsR0FBRyx1QkFBdUI7SUFFNUMsSUFBSSxDQUFDRCxHQUFHLENBQUNFLGdCQUFnQixDQUFDLE9BQU8sRUFBQyxJQUFJLENBQUNDLFdBQVcsQ0FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0VBQ2xFO0VBRUFELFdBQVdBLENBQUEsRUFBRTtJQUNULElBQUksQ0FBQ0gsR0FBRyxDQUFDSyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUNKLFNBQVMsR0FBRyxzQkFBc0I7RUFDM0Q7QUFDSjtBQUVBLCtEQUFlSCxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXJ0LWNoYW9zLy4vc3JjL3NjcmlwdHMvZXhhbXBsZS5qcz9mY2VlIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEV4YW1wbGV7XG4gICAgY29uc3RydWN0b3IoZWxlKXtcbiAgICAgICAgdGhpcy5lbGUgPSBlbGU7XG4gICAgICAgIHRoaXMuZWxlLmlubmVySFRNTCA9IFwiPGgxPkknbSBBTElWRSEhITwvaDE+XCI7XG5cbiAgICAgICAgdGhpcy5lbGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICBoYW5kbGVDbGljaygpe1xuICAgICAgICB0aGlzLmVsZS5jaGlsZHJlblswXS5pbm5lckhUTUwgPSBcIk91Y2ggSSBhbSBnb25uYSBkaWUhXCI7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFeGFtcGxlOyJdLCJuYW1lcyI6WyJFeGFtcGxlIiwiY29uc3RydWN0b3IiLCJlbGUiLCJpbm5lckhUTUwiLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlQ2xpY2siLCJiaW5kIiwiY2hpbGRyZW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/example.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2NzcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcnQtY2hhb3MvLi9zcmMvaW5kZXguc2Nzcz85NzQ1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;