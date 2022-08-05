
var dayEl = $('#currentDay');
var saveBtn = $('#save');
var timeblockEL = $('timeblock'); 

//This gives me the day at the top of my Calendar 
var day = function () {
dayEl.text(dayjs().format('dddd, MMMM D'));
};
//calling my function 
day();

$('.saveBtn').on('click', function(event){
    console.log($(this).parent());
    console.log($(this).siblings('textarea').val()); 
}); 