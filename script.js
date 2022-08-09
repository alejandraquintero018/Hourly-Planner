
var saveBtn = $('#saveBtn');
var descriptionEL = $('#description');
var timblockEl = $('.time-block');

$(document).ready(function () {
    //This gives me the day at the top of my Calendar 
    let day = function () {
        $('#currentDay').text(dayjs().format('dddd, MMMM D'));
    };
    //calling my function 
    day();
    //where I have my save button save things into local storage
    $('.saveBtn').on('click', function (event) {
        event.preventDefault();
        //console.log($(this).parent());
        let plan = $(this).siblings('.description').val();
        //localStorage.setItem('Planned', JSON.stringify(plan));
        let setplan = $(this).parent().attr("id");
        // ($(this).siblings('textarea')).textContent(getPlan);
        localStorage.setItem(setplan, plan);
    });
    //where I get my items from local storage 
    $("#8 .description").val(localStorage.getItem('8'));
    $("#9 .description").val(localStorage.getItem('9'));
    $("#10 .description").val(localStorage.getItem('10'));
    $("#11 .description").val(localStorage.getItem('11'));
    $("#12 .description").val(localStorage.getItem('12'));
    $("#13 .description").val(localStorage.getItem('13'));
    $("#14 .description").val(localStorage.getItem('14'));
    $("#15 .description").val(localStorage.getItem('15'));
    $("#16 .description").val(localStorage.getItem('16'));
    //function to compare value of the time and the value of the current hour 
    function timecheck() {
        $(timblockEl).each(function () {
            let blockHour = $(this).attr('id');
            let converted = parseInt(blockHour);
            let currentHour = dayjs().hour();
            for (i = 0; i < timblockEl.length; i++) {
                if (converted < currentHour) {
                    $(this).children('.description').addClass('past');
                } else if (currentHour === converted) {  //this comparison is where the bug is
                    $(this).children('.description').addClass('present');
                } else {
                    $(this).children('.description').addClass('future');
                };
            };
        });
    };


    //let timeInterval = setInterval(function () {
    //if (!currentHour) {
    //$(this).children('description').addClass('past');
    // } else {
    // timecheck();
    // }
    //}, 3600000)
    //setInterval(timecheck, 3600);
    //clearInterval(timeInterval);

    //calling my function 
    timecheck();
});




