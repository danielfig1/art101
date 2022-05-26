function getAJAX() {
  $.ajax({
      url: "http://www.yerkee.com/api/fortune/bible",

      type: "GET",
    })

  .done(function(data) {
      $("#output").html(data.fortune);
    })
  .fail(function(request,error) {
      $("#output").html("Not Found");

    })
}

$("#activate").click(getAJAX);
