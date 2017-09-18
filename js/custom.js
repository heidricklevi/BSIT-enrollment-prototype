/**
 * Created by LeviJamesH on 11/7/2016.
 */


$('.dropdown-button').dropdown({
        inDuration: 300,
        outDuration: 225,
        constrain_width: false, // Does not change width of dropdown to that of the activator
        hover: true, // Activate on hover
        gutter: 0, // Spacing from edge
        belowOrigin: true, // Displays dropdown below the button
        alignment: 'left' // Displays dropdown with edge aligned to the left of button
    }
);

$(function () {

        $('#dropdown1 li').click(function () {
                var clickedData = $(this).text();
                console.log(clickedData);
                $('#adropdown1').text(clickedData);

        })
});

$(function () {

        $('#dropdown2 li').click(function () {
                var clickedData = $(this).text();
                console.log(clickedData);
                $('#adropdown2').text(clickedData);

        })
});

$(document).ready(function(){
        $('.collapsible').collapsible();
        $('#manual-enroll').hide();
});

$(function () {
   $('.secondary-content').click(function () {
           var div_data = $(this).parent().get(0).innerHTML;
           var tdCourse = div_data.slice(0,6);

           var tdDay = div_data.slice(9);
           var tdTime = $(this)["0"].previousElementSibling.innerHTML;
           var tdSemester = "SPR17";

           if (!tdDay.search('Thursdays')){
                   tdDay = div_data.slice(9, 11).toUpperCase();
           } else {
                   tdDay = div_data.slice(9, 10).toUpperCase();
           }


           if ($(this).find('i').text() == 'add'){
                   $(this).find('i').text('check');

                   $("#manual-table").find('tbody')
                       .append($('<tr>')
                           .attr('id', tdCourse)
                           .append($('<td>')
                               .text(tdCourse)).append($('</td>')
                           ).append($('<td>')
                               .text(tdSemester)).append($('</td>')
                           ).append($('<td>')
                               .text(tdDay)).append($('</td>')
                           ).append($('<td>')
                               .text(tdTime)).append($('</td>')
                           ).append($('<td>')
                               .text("BEST 220")).append($('</td>')
                           ).append($('</tr>')));

                   $('#yes-no-enroll').hide();
                   $('#suggested-schedule').hide();
                   $('#adding-class-tip').hide();
                   $('#manual-enroll').show();

           } else{
                   $(this).find('i').text('add');
                   $('#manual-table tr:last').remove();
           }
   })
});


$(function () {
   $('#close').click(function () {
           $('#yes-no-enroll').hide();
           $('#suggested-schedule').hide();

   })
});

$(function () {
        $('#yes').click(function () {
                var suggestedStyle = "padding-left: 15px; font-size: large; margin-top: 2%;";

                $('#manual-col').hide();
                $('#adding-class-tip').hide();
                $('#yes-no-enroll').hide();

                $('#suggested-col')
                    .append($('<div>')
                        .attr("style", "display: inline-flex;")
                                .append($('<img>')
                                        .attr('src', "https://maxcdn.icons8.com/Color/PNG/48/Very_Basic/ok-48.png")
                                        .attr('title','OK')
                                        .attr('width', "48")).append($('</img>')
                                ).append($('<div>')
                                        .attr("style", suggestedStyle)
                                        .text("You are now enrolled with the suggested course schedule for SPR17")).append($('</div>'))
                ).append($('</div>'));

        })
});


$(function () {
        $('#man-button').click(function () {
                var suggestedStyle = "padding-left: 15px; font-size: large; margin-top: 2%;";


                $('#adding-class-tip').hide();
                $('#yes-no-enroll').hide();
                $('#man-postpone').hide();
                $('#man-button').hide();

                $('#manual-enroll')
                    .append($('<div>')
                        .attr("style", "display: inline-flex; float: left;")
                        .append($('<img>')
                            .attr('src', "https://maxcdn.icons8.com/Color/PNG/48/Very_Basic/ok-48.png")
                            .attr('title','OK')
                            .attr('width', "48")).append($('</img>')
                        ).append($('<div>')
                            .attr("style", suggestedStyle)
                            .text("Enrolled with manually created course schedule for SPR17")).append($('</div>'))
                    ).append($('</div>'));

        })
});
