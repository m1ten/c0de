!function(e){var n={};function r(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=n,r.d=function(e,n,t){r.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:t})},r.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},r.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(n,"a",n),n},r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},r.p="",r(r.s=2)}([function(e,n){e.exports='<style>\r\n  .navPage:not(.visible) {\r\n    display: none;\r\n  }\r\n\r\n  .navWrapper {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n  }\r\n  \r\n  .navButton {\r\n    margin: 5px 10px;\r\n    padding: 10px;\r\n    background: #2976f2;\r\n  }\r\n\r\n  [data-to-page] {\r\n    cursor: pointer;\r\n  }\r\n</style>\r\n\r\n<nav class="navWrapper">\r\n  <div class="navButton" data-to-page="home">Home</div>\r\n  <div class="navButton" data-to-page="test">Test</div>\r\n</nav>\r\n\r\n<hr>\r\n\r\n<div class="navPage visible" data-page="home">\r\n  Home\r\n  <a data-to-page="test">Go to test page</a>\r\n</div>\r\n\r\n<div class="navPage" data-page="test">\r\n  Test\r\n</div>\r\n\r\n<script>\r\n  function showPage(pageName) {\r\n    var oldPages = Array.from(document.querySelectorAll(\'div.navPage.visible\'))\r\n    oldPages.forEach(function (page) { page.classList.remove(\'visible\') })\r\n\r\n    var page = document.querySelector(\'[data-page="\' + pageName + `"]`)\r\n    if (!page) return\r\n\r\n    page.classList.add(\'visible\')\r\n  }\r\n\r\n  document.addEventListener(\'click\', function (event) {\r\n    if (!event.target) return;\r\n    if (event.target.getAttribute(\'data-to-page\')) {\r\n      showPage(event.target.getAttribute(\'data-to-page\'))\r\n    }\r\n  })\r\n<\/script>'},function(e,n){e.exports='<!DOCTYPE html>\r\n<html lang="en">\r\n\r\n<head>\r\n  <link rel="stylesheet" href="style.css">\r\n  <title>WORLDNAME</title>\r\n</head>\r\n\r\n<body>\r\n  <p>\r\n    <center>\r\n      <b>WELCOME TO WORLDNAME!</b>\r\n      <br>\r\n      <div style="font-size:80%">\r\n        RULES: CUSTOM\r\n        <br>\r\n        <button title="Click to show/hide content" type="button" id="spoilerButton" onclick="if(document.getElementById(\'spoiler\').style.display==\'none\'){document.getElementById(\'spoiler\').style.display=\'\';document.getElementById(\'spoilerButton\').innerText=\'Hide\';}else{document.getElementById(\'spoiler\').style.display=\'none\';document.getElementById(\'spoilerButton\').innerText=\'Show More Info\'}">\r\n          Show More Info\r\n        </button>\r\n        <div id="spoiler" style="display:none;">\r\n          PVP: DISABLED\r\n          <br> SEED: 1231231\r\n          <br> more rules...\r\n          <br>\r\n        </div>\r\n      </div>\r\n    </center>\r\n    <div id="messageContent">\r\n      [CONTENT]\r\n    </div>\r\n    <hr />\r\n    <center style="font-size:80%;">\r\n      While playing on any server, please be courteous to other players, listen to mods and admins, and behave yourself. You may\r\n      be muted or banned for any reason, and the in-game chat may be monitored.\r\n      <br>\r\n      <a href="http://theblockheads.net" style="padding-right:5px;color:#FFF">TheBlockheads.net</a>\r\n      <a href="http://theblockheads.net/forum" style="padding-left:5px;color:#FFF;">Blockheads Forums</a>\r\n      <br>\r\n      <hr>\r\n    </center>\r\n  </p>\r\n</body>\r\n\r\n</html>'},function(e,n,r){"use strict";r.r(n);var t=r(1),a=r.n(t),o=r(0),s=r.n(o),i=r(3),l=r.n(i);const d={empty:"",tabs:s.a,hamburger:l.a},c=document.querySelector("iframe"),p=window.editor=CodeMirror(document.querySelector("#editor"),{lineNumbers:!0,styleActiveLine:!0,matchBrackets:!0,lint:!0,gutters:["CodeMirror-lint-markers"],mode:"text/html"});p.setSize("100%","100%");const g=()=>new URLSearchParams(location.href.includes("?")?location.href.substr(location.href.indexOf("?")):""),u=g(),m=u.has("code")?u.get("code"):null!=localStorage.getItem("userInput")?localStorage.getItem("userInput"):s.a;p.setValue(m),c.srcdoc=a.a.replace("[CONTENT]",m),document.querySelector("button.run").addEventListener("click",()=>{c.srcdoc=a.a.replace("[CONTENT]",p.getValue())}),document.querySelector("button.share").addEventListener("click",()=>{const e=g();e.set("code",p.getValue()),alert("Sharable URL now in address bar"),location.assign(location.protocol+location.pathname+"?"+e.toString())},{passive:!0});const v=document.querySelector("select.preset");v.addEventListener("change",()=>{p.setValue(d[v.value]),c.srcdoc=a.a.replace("[CONTENT]",p.getValue())},{passive:!0}),document.querySelector("button.toggleView").addEventListener("click",()=>{document.querySelector(".container").classList.toggle("hidePreview")})},function(e,n){e.exports='<style>\r\n  .navPage:not(.visible) {\r\n    display: none;\r\n  }\r\n\r\n  .hamburger {\r\n    /* Visual styles */\r\n    background: rgba(196, 218, 255, 0.8);\r\n    transition: left 0.3s;\r\n    height: 100vh;\r\n    \r\n    /* Essential styles */\r\n    /* Needed to make scrolling work on iOS */\r\n    -webkit-overflow-scrolling: touch;\r\n    z-index: 1000;\r\n    position: fixed;\r\n    width: 250px;\r\n    left: -250px;\r\n    top: 0;\r\n    overflow-y: auto;\r\n  }\r\n\r\n  .hamburger.visible {\r\n    left: 0;\r\n  }\r\n\r\n  .hamburger span {\r\n    display: block;\r\n    padding: 0.5em;\r\n    text-align: center;\r\n  }\r\n\r\n  .hamburger span:not(:last-child) {\r\n    border-bottom: 1px solid #000000;\r\n  }\r\n\r\n  .hamburger-toggle {\r\n    position: fixed;\r\n    z-index: 1000;\r\n    top: 0;\r\n    left: 0;\r\n    transition: left 0.3s;\r\n\r\n    padding: 0.5em;\r\n    background: #c4daff;\r\n    border: 1px solid #000000;\r\n  }\r\n\r\n  .hamburger.visible~.hamburger-toggle {\r\n    left: 250px;\r\n  }\r\n\r\n  .navButton {\r\n    margin: 5px 10px;\r\n    padding: 10px;\r\n    background: #2976f2;\r\n  }\r\n\r\n  [data-to-page] {\r\n    cursor: pointer;\r\n  }\r\n</style>\r\n\r\n<nav class="hamburger visible">\r\n  <span data-to-page="home">Home</span>\r\n  <span data-to-page="test">Test</span>\r\n  <span data-to-page="home">Home</span>\r\n  <span data-to-page="test">Test</span>\r\n  <span data-to-page="home">Home</span>\r\n  <span data-to-page="test">Test</span>\r\n  <span data-to-page="home">Home</span>\r\n  <span data-to-page="test">Test</span>\r\n  <span data-to-page="home">Home</span>\r\n  <span data-to-page="test">Test</span>\r\n</nav>\r\n\r\n<button class="hamburger-toggle">&#9776; Menu</button>\r\n\r\n<div class="navPage visible" data-page="home">\r\n  Home\r\n  <a data-to-page="test">Go to test page</a>\r\n</div>\r\n\r\n<div class="navPage" data-page="test">\r\n  Test\r\n</div>\r\n\r\n<script>\r\n  function showPage(pageName) {\r\n    var oldPages = Array.from(document.querySelectorAll(\'.navPage.visible\'))\r\n    oldPages.forEach(function (page) { page.classList.remove(\'visible\') })\r\n\r\n    var page = document.querySelector(\'[data-page="\' + pageName + `"]`)\r\n    if (!page) return\r\n\r\n    page.classList.add(\'visible\')\r\n  }\r\n\r\n  var hamburger = document.querySelector(\'.hamburger\')\r\n\r\n  document.querySelector(\'.hamburger-toggle\').addEventListener(\'click\', function () {\r\n    hamburger.classList.toggle(\'visible\')\r\n  })\r\n\r\n  document.addEventListener(\'click\', function (event) {\r\n    if (!event.target) return;\r\n    var toPage = event.target.getAttribute(\'data-to-page\')\r\n    if (toPage) {\r\n      showPage(toPage)\r\n      if (event.target.parentElement == hamburger) {\r\n        hamburger.classList.remove(\'visible\')\r\n      }\r\n    }\r\n  })\r\n<\/script>'}]);