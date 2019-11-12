var standupParticipants = ["Ben", "Brad", "Josh", "Michael", "Ricky", "Warner", "Will H", "Zak", "Brenna", "Justin B", "Luke", "Matt", "G", "Spruce", "Justin F", "Nick F", "Jes", "Jared", "Hayden", "Foster", "David Ho.", "Jay", "David Hw.", "Chad", "Austin", "Renee", "Ted", "Ryan", "Jack", "Stephen", "Nick R", "June", "Scott", "Will S", "Michael S", "Teya", "Bryan", "Leif", "Winnie", "Daniel W"];
function popcorn() {
  let cloneData = standupParticipants;
  let index = Math.ceil(Math.random()*cloneData.length);
  let nextPerson = cloneData[index];
  cloneData.splice(index, 1);
  return nextPerson;
}

// insert-css.js excerpt from: https://github.com/bgrins/devtools-snippets
function insertCss(code) {
  var style = document.createElement('style');
  style.type = 'text/css';

  if (style.styleSheet) {  // IE
    style.styleSheet.cssText = code;
  } else { // Other browsers
    style.innerHTML = code;
  }
  document.getElementsByTagName("head")[0].appendChild( style );
}

function addClassesToBody() {
  var body = document.getElementsByTagName('body')[0];
  body.classList.add('rotate');
}

function rotateBody(deg) {
  var amount = deg ? deg : -10;
  var css = `.rotate { -webkit-transform: rotate(` + amount + `deg) }`;
  addClassesToBody();
  insertCss(css);
}

function addClassesToLogo() {
  var revunitlogo = document.getElementsByClassName('site-logo')[0];
  revunitlogo.classList.add('spin-pulse');
};

function spinRevUnitLogo() {
  var css = '\
    .spin-pulse { -webkit-animation: spin-pulse 3s linear infinite; -moz-animation: spin-pulse 3s linear infinite; animation:spin-pulse 3s linear infinite; } \
    @-webkit-keyframes spin-pulse { 0% { -webkit-transform: scale(1) rotate(0deg); } 50% { -webkit-transform: scale(1.5) rotate(180deg); } 100% { -webkit-transform: scale(1) rotate(360deg); }} \
  ';
  addClassesToLogo();
  insertCss(css);
}

// outside of chrome devtools
// @keyframes spin { 100% { -transform:rotate(360deg); }} \
// @-moz-keyframes spin { 100% { -moz-transform: rotate(360deg); }} \
// @-ms-keyframes spin { 100% { -ms-transform: rotate(360deg); }} \
// @-webkit-keyframes spin { 100% { -webkit-transform: rotate(360deg); }} \

// @keyframes pulsate { 0% { transform: scale(1); } 50% { transform: scale(1.3); } 100% { transform: scale(1); }} \
// @-webkit-keyframes pulsate { 0% { -webkit-transform: scale(1); } 50% { -webkit-transform: scale(1.3); } 100% { -webkit-transform: scale(1); }} \
// @-moz-keyframes pulsate { 0% { -moz-transform: scale(1); } 50% { -moz-transform: scale(1.3); } 100% { -moz-transform: scale(1); }} \
// @-ms-keyframes pulsate { 0% { -ms-transform: scale(1); } 50% { -ms-transform: scale(1.3); } 100% { -ms-transform: scale(1); }} \
// @-webkit-keyframes pulsate { 0% { -webkit-transform: scale(1); } 50% { -webkit-transform: scale(2); } 100% { -webkit-transform: scale(1); }} \
