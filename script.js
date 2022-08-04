
var dayEl = $('#currentDay');
var hourEl = $('#hour'); 
var saveBtn = $('#save');
var timeblockEL = $('timeblock'); 

//This gives me the day at the top of my Calendar 
var day = function () {
dayEl.text(dayjs().format('dddd, MMMM D'));
};
//calling my function 
day();

//populates the hour of the day into each block 
var hour = function() { 
    hourEl.text(dayjs().format('hA'));
};
//calling my function 
hour();

for (let i = 0; i < 25; i++) {
   var hours = document.createElement(timeblockEL);  
}; 
    
