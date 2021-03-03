$.getJSON('https://hpb.health.gov.lk/api/get-current-statistical', function(info){

    // Local Stats
    var last_updated_time = `${info.data.update_date_time} `
    var total_confirmed_cases = ` ${info.data.local_total_cases} `
    var total_deaths = `${info.data.local_deaths} `
    var total_recovered = `${info.data.local_recovered} `
    var currently_in_hospital = `${info.data.local_total_number_of_individuals_in_hospitals} `
    var local_active_cases = `${info.data.local_active_cases}`


    // Global Stats
    var global_total_confirmed_cases = `${info.data.global_total_cases}`
    var global_total_deaths = `${info.data.global_deaths}`
    var global_total_recovered = `${info.data.global_recovered}`


    // Daily Stats for both Local & Global
    var local_new_cases = `${info.data.local_new_cases}`
    var local_new_deaths = `${info.data.local_new_deaths}`
    var global_new_cases =  `${info.data.global_new_cases}`
    var global_new_deaths = `${info.data.global_new_deaths}`


    // Connect with frontend                 
    $(".last_updated_time").text(last_updated_time);
    $(".total_confirmed_cases").text(formatNum(total_confirmed_cases));
    $(".total_deaths").text(total_deaths);
    $(".total_recovered").text(formatNum(total_recovered));
    $(".currently_in_hospital").text(formatNum(currently_in_hospital));
    $(".local_active_cases").text(formatNum(local_active_cases));

    $(".local_new_cases").text(formatNum(local_new_cases));
    $(".local_new_deaths").text(local_new_deaths);


    $(".global_total_confirmed_cases").text(formatNum(global_total_confirmed_cases));
    $(".global_total_deaths").text(formatNum(global_total_deaths));
    $(".global_total_recovered").text(formatNum(global_total_recovered));

    $(".global_new_cases").text(formatNum(global_new_cases));
    $(".global_new_deaths").text(formatNum(global_new_deaths));
            
});


$(function () {
    $("#chkGlobal").click(function () {
        $("#local_section, #global_section").hide();  
        if ($(this).is(":checked")) {
            $("#global_section").show(); 
            $(".G").html("<b>&ensp; Global</b>");   
        } else {
            $("#local_section").show();
            $(".G").html("&ensp; Global");   
        }
    });
});


function formatNum(num){
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}


// particle.js
particlesJS('particles-js',
  
  {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);