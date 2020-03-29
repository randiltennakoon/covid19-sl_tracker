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

                        
    $(".date_time").text(date_time);
    $(".total-cases").text(tot);
    $(".deaths").text(deaths);
    $(".recovered").text(recv);
    $(".in-hospital").text(in_hos);
            
});
