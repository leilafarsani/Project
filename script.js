/* =================
  TESTS, LOOK AT THESE
  Reading tests will always help you discover your requirements.
  You can make this window bigger. 
   ===================
*/

const {
  core: { test, expect, run },
  prettify
} = window.jestLite;

/* =================
  FIND ELEMENTS
  These are all the elements we will look for.
   ===================
*/
const getHeader = document.querySelectorAll("header"),
  getH1 = document.querySelectorAll("h1"),
  getSiteHeader = document.querySelectorAll(".c-site-header"),
  getAria = document.querySelectorAll('nav[aria-label="Main Site Links."]'),
  getMain = document.querySelectorAll("main"),
  getFooter = document.querySelectorAll("footer"),
  getSiteFooter = document.querySelectorAll(".c-site-footer"),
  getIFrame = document.querySelectorAll("iframe"),
  getImage = document.querySelectorAll("img"),
  getWords = document.body.innerText;

/* =================
   ASSERTIONS 
   These are the things we check are true about your page.
   Read and update your HTML to discover the requirements.
   The tests will run every time you update your code.
   ===================
*/
test("There is at least one header element", () => {
  expect(getHeader.length).toBeGreaterThanOrEqual(1);
});
test("There is at least one h1", () => {
  expect(getH1.length).toBeGreaterThanOrEqual(1);
});
test("There is only one header element with the class c-site-header", () => {
  expect(getSiteHeader.length).toBe(1);
});
test("There is a nav element with an aria-label of Main Site Links.", () => {
  expect(getAria.length).toBeGreaterThanOrEqual(1);
});
test("There is only one main element", () => {
  expect(getMain.length).toBe(1);
});
test("There is at least one footer element", () => {
  expect(getFooter.length).toBeGreaterThanOrEqual(1);
});
test("There is only one footer element with the class c-site-footer", () => {
  expect(getSiteFooter.length).toBe(1);
});
test("There is embedded video", () => {
  expect(getIFrame.length).toBeGreaterThanOrEqual(1);
});
test("There is at least one image", () => {
  expect(getImage.length).toBeGreaterThanOrEqual(1);
});
test("There are at least 500 words on the page", () => {
  expect(getWords.length).toBeGreaterThanOrEqual(500);
});

const console = document.getElementById("tests");
prettify.toHTML(run(), console);
var item, courses, current_shopping, total;


courses = ['Calculus  ', 'Linear Algebra ', 'ODEs ', 'PDEs '];
current_shopping = [];
total = [];


document.getElementById('cal').addEventListener('click', (event) => {
  current_shopping.push('Calculus ');
  total.unshift(170);

});

document.getElementById('alg').addEventListener('click', (event) => {
  current_shopping.push('Linear Algebra ');
  total.unshift(190);

});

document.getElementById('ode').addEventListener('click', (event) => {
  current_shopping.push('ODEs ');
  total.unshift(250);

});

document.getElementById('pde').addEventListener('click', (event) => {
  current_shopping.push(null);
  total.unshift(250);

});

document.getElementById('current').addEventListener('click', (event) => {
  current_shopping.forEach((item) => {
    let new_li = document.createElement('li');
    new_li.innerText = item;

    event.target.appendChild(new_li);
  });

});

document.getElementById('total').addEventListener('click', (event) => {
  event.target.innerText = total.reduce((a,b) => a+b, 0);

});