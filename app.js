$.getJSON('https://hpb.health.gov.lk/api/get-current-statistical', function(info){

    /*
    var text = `Updated at: ${info.data.update_date_time}<br>
    Total: ${user.data.local_total_cases}<br>
    Death: ${user.data.local_deaths}<br>
    Recovered: ${user.data.local_recovered}<br>
    in Hospital: ${user.data.local_total_number_of_individuals_in_hospitals}`


    $(".mypanel").html(text);

    */

    var date_time = `${info.data.update_date_time} `
    var tot = ` ${info.data.local_total_cases} `
    var deaths = `${info.data.local_deaths} `
    var recv = `${info.data.local_recovered} `
    var in_hos = `${info.data.local_total_number_of_individuals_in_hospitals} `

    var tot_G = `${info.data.global_total_cases}`
    var deaths_G = `${info.data.global_deaths}`
    var recv_G = `${info.data.global_recovered}`

                        
    $(".date_time").text(date_time);
    $(".total-cases").text(tot);
    $(".deaths").text(deaths);
    $(".recovered").text(recv);
    $(".in-hospital").text(in_hos);

    $(".total-cases-G").text(formatNum(tot_G));
    $(".deaths-G").text(formatNum(deaths_G));
    $(".recovered-G").text(formatNum(recv_G));
            
});

$(function () {
    $("#chkGlobal").click(function () {
        if ($(this).is(":checked")) {
            $("#global_section").show(); 
            $(".G").html("<b>&ensp; Global</b>");   
        } else {
            $("#global_section").hide();  
            $(".G").html("&ensp; Global");   
        }
    });
});


function formatNum(num){
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}
