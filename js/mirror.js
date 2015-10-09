var $conditions = $('#conditions')

var update_forecasts = function(lat, lon) {
  $.ajax({
      url: 'proxy.php?method=forecast&params='+lat+','+lon,
      dataType: 'json',
      success: forecast_response
    })
}

var forecast_response = function(r) {
  var summary = r.contents.minutely.summary
  console.log(r)
  $conditions.text(summary)
}


$(window).load(function() {

  update_forecasts(41.850167,-72.363264)

})