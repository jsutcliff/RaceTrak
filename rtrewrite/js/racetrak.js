//GLOBALS
var websocket;

//MAIN
setupWebSocket()

$('#reboot').on('click', function() {
  var json = new Object();
  json.id = "reboot";
  json.command = 0;

  if (websocket.readyState == websocket.OPEN) {
    websocket.send(JSON.stringify(json));
  } else {
    bootstrap_alert.warning('Connection Error', 'danger', 1000);
  }
});

$('#shutdown').on('click', function() {
  var json = new Object();
  json.id = "shutdown";
  json.command = 0;

  if (websocket.readyState == websocket.OPEN) {
    websocket.send(JSON.stringify(json));
  } else {
    bootstrap_alert.warning('Connection Error', 'danger', 1000);
  }
});

$('#start').on('click', function() {
  command("start");
});

$('#stop').on('click', function() {
  command("stop");
});

$('#clear').on('click', function() {
  command("clear");
});

$('#savesettings').on('click', function() {
  var json = new Object();
  json.id = "settings";
  json.ssid = $("#ssid").val();
  json.password = $("#password").val();

  if (websocket.readyState == websocket.OPEN) {
    websocket.send(JSON.stringify(json));
  } else {
    bootstrap_alert.warning('Connection Error', 'danger', 1000);
  }
});

$('#addracer').on('click', function() {
  var racerCount = $(".racer-button").length;

  if (racerCount == 8) {
    bootstrap_alert.warning('RaceTrak only supports up to 4 racers', 'warning', 3000);
  } else {
    var id = racerCount + 1;
    while ($(".racer-button").text().includes("Racer " + id)) {
      id++;
    }
    $('#racerbuttons').append('<button type="button" class="btn btn-default racer-button">Racer ' + id + '</button>').append(" ");
  }
});

$('#racerbuttons').on('click', '.racer-button', function() {
  var id = $(this).text();
  console.log(id);
  var racerCount = $(".racer-button").length;

  if (racerCount == 1) {
    $('#removeracer').hide();
  } else {
    $('#removeracer').show();
  }

  $('#username').val(id);

  $('#racerconfig').data("id", id).modal('show');
});

$('#removeracer').on('click', function() {
  var id = $('#racerconfig').data("id");
  $('.racer-button').each(function() {
    if ($(this).text() == id) {
      this.remove();

    }
  });
});

$('#saveracer').on('click', function() {
  var id = $('#racerconfig').data("id");
  var newid = $('#username').val();

  if (id != newid) {
    if ($(".racer-button").text().includes(newid)) {
      bootstrap_alert.warning('The racer already exists', 'warning', 3000);
    } else {
      $('.racer-button').each(function() {
        if ($(this).text() == id) {
          $(this).text(newid);
        }
      });

      updateServer();
    }
  }
});


//FUNCTIONS
bootstrap_alert = function() {}
bootstrap_alert.warning = function(message, alert, timeout) {
  $('<div class="alert floating-alert alert-' + alert + ' fade in"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>' + message + '&nbsp;&nbsp;</div>').appendTo('nav');

  setTimeout(function() {
    $(".alert").alert('close');
  }, timeout);
}

function setupWebSocket() {
  var ip = "ws://192.168.1.1/ws";
  websocket = new WebSocket(ip, ['arduino']);
  websocket.onclose = function() {
    bootstrap_alert.warning('Connection Error', 'danger', 2000);
    setTimeout(setupWebSocket, 5000);
  }

  websocket.onopen = function() {
    bootstrap_alert.warning('Connected', 'success', 2000);
  }

  websocket.onmessage = function(event) {
    var msg = JSON.parse(event.data);

    if (msg.hasOwnProperty('log')) {
      console.log(msg.log);
    }

    if (msg.hasOwnProperty('heartbeat')) {
      var heartbeat = msg.heartbeat;
      console.log(heartbeat);

      //battery
      //respond
    }

    if (msg.hasOwnProperty('ssid')) {
      var ssid = msg.ssid;
      $('#ssid').val(ssid)
    }

    if (msg.hasOwnProperty('password')) {
      var password = msg.pass;
      $('#password').val(password);
    }

    if (msg.hasOwnProperty('user')) {
      var name = msg.user.name;
      var band = msg.user.band;
      var channel = msg.user.channel;
      var rssi = msg.user.rssi;
      var threshold = msg.user.threshold;

      if ($("#username").text() == name) {
        console.log("good");
      }
    }

    if (msg.hasOwnProperty('trigger')) {
      var trigger = msg.trigger;
      if ($("#switch").attr("class") != undefined) {
        $("#switch").val(trigger).slider("refresh");
      }
    }

    if (msg.hasOwnProperty('time')) {
      var id = msg.id;
      var time = msg.time;

      if (id) {
        $("#currentTime" + id).text(time + " s");
        $("#time" + id).listview("refresh");
      } else {
        $("#currentTime").text(time + " s");
        $("#timeList").listview("refresh");
      }
    }

    if (msg.hasOwnProperty('timeToAdd')) {
      var time = msg.timeToAdd;
      addTime(time);
    }
  }
}

function command(cmd) {
  var json = new Object();
  json.id = cmd;

  if (websocket.readyState == websocket.OPEN) {
    websocket.send(JSON.stringify(json));
  } else {
    bootstrap_alert.warning('Connection Error', 'danger', 1000);
  }
}

function updateServer() {

}
