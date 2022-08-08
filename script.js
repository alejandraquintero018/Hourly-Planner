
var saveBtn = $('#saveBtn');
var descriptionEL = $('#description');
var timblockEl = $('.time-block');

$(this).children('description').addClass('past');

$(document).ready(function () {

    //This gives me the day at the top of my Calendar 
    let day = function () {
        $('#currentDay').text(dayjs().format('dddd, MMMM D'));
    };
    //calling my function 
    day();
    //where I have my save button save things into local storage
    $('.saveBtn').on('click', function (event) {
        //console.log($(this).parent());
        let plan = ($(this).siblings('textarea').val());
        localStorage.setItem('Planned', JSON.stringify(plan));
        let getPlan = localStorage.getItem(plan);
        ($(this).siblings('textarea')).textContent(getPlan);
    });


    //function to compare value of the time and the value of the current hour 
    function timecheck() {
        $(timblockEl).each(function () {
            let blockHour = $(this).attr('id');
            let converted = parseInt(blockHour);
            let currentHour = dayjs().hour();
            for (i = 0; i < timblockEl.length; i++) {
                if (currentHour > converted) {   //this comparison is where the bug is
                    $(this).children('.description').addClass('past');
                    if (currentHour == converted) {
                        $(this).children('.description').addClass('present');
                    }
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
    //clearInterval(timeInterval);
    setInterval(timecheck, 3600);

});

//calling my function



