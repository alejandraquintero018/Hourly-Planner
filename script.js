
var dayEl = document.querySelector('#currentDay');
var day = function () {
dayEl.textContent(dayjs().format([dddd]));
};
