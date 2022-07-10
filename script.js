function weather(){
fetch('http://api.openweathermap.org/data/2.5/weather?q=lagos&appid=9b6faeab63669e0567a503740c7c3253&units=metric')
.then(response => response.json())
.then(data => 
          {
          
             document.getElementById('temperature').innerHTML = data.main.temp + '&deg; C'
              document.getElementById('humidity').innerHTML = 'Humidity <br><br>' +  data.main.humidity
              document.getElementById('pressure').innerHTML =  'pressure <br><br>'  +  data.main.pressure
              document.getElementById('temp_max').innerHTML = 'max-temp <br><br>' + data.main.temp_max + '°C'
              document.getElementById('temp_min').innerHTML =  'min-temp <br><br>' + data.main.temp_min + '°C'
              document.getElementById('icon').innerHTML = "<img src='http://openweathermap.org/img/wn/" +data.weather[0].icon +".png'>"
              document.getElementById('mainTemperature').innerHTML = data.weather[0].main
              if(data.weather[0].main == "Clear"){
                document.getElementById('weatherBg').style.backgroundImage = "url('images/clear-img.jpg')";
                document.getElementById('weatherBg').style.backgroundSize = "100%"
              }
              else if(data.weather[0].main == "Clouds"){
                document.getElementById('weatherBg').style.backgroundImage = "url('images/cloudy-img.jpg')";
                document.getElementById('weatherBg').style.backgroundSize = "100%"
              }
              else if(data.weather[0].main == "Rain"){
                document.getElementById('weatherBg').style.backgroundImage = "url('images/rainny-img.jpg')";
                document.getElementById('weatherBg').style.backgroundSize = "100%"
              }
              else if(data.weather[0].main == "Snow"){
                document.getElementById('weatherBg').style.backgroundImage = "url('images/snowy-img.jpg')";
                document.getElementById('weatherBg').style.backgroundSize = "100%"
              }
              else if(data.weather[0].main == "Thunderstorm"){
                document.getElementById('weatherBg').style.backgroundImage = "url('images/thunderstorm-img.jpg')";
                document.getElementById('weatherBg').style.backgroundSize = "100%"
              }
              else{
                document.getElementById('weatherBg').style.backgroundImage = "url('images/img2.jpg')";
                document.getElementById('weatherBg').style.backgroundSize = "100%"
              }
          }       
)
          
}



function getField(){
      search = document.getElementById("textfield").value

      fetch('http://api.openweathermap.org/data/2.5/weather?q='+search +'&appid=9b6faeab63669e0567a503740c7c3253&units=metric')
      .then(response => response.json())
      .then(data => 
                {
                  console.log(data)
                  document.getElementById('temperature').innerHTML = data.main.temp + '&deg; C'
                  document.getElementById('humidity').innerHTML = 'Humidity <br><br>' +  data.main.humidity
                  document.getElementById('pressure').innerHTML =  'pressure <br><br>'  +  data.main.pressure
                  document.getElementById('temp_max').innerHTML = 'max-temp <br><br>' + data.main.temp_max + '°C'
                  document.getElementById('temp_min').innerHTML =  'min-temp <br><br>' + data.main.temp_min + '°C'
                    document.getElementById('icon').innerHTML = "<img src='http://openweathermap.org/img/wn/" +data.weather[0].icon +".png'>"
                    document.getElementById('mainTemperature').innerHTML = data.weather[0].main
                  if(data.weather[0].main == "Clear"){
                    document.getElementById('weatherBg').style.backgroundImage = "url('images/clear-img.jpg')";
                    document.getElementById('weatherBg').style.backgroundSize = "100%"
                  }
                  else if(data.weather[0].main == "Clouds"){
                    document.getElementById('weatherBg').style.backgroundImage = "url('images/cloudy-img.jpg')";
                    document.getElementById('weatherBg').style.backgroundSize = "100%"
                  }
                  else if(data.weather[0].main == "Rain"){
                    document.getElementById('weatherBg').style.backgroundImage = "url('images/rainny-img.jpg')";
                    document.getElementById('weatherBg').style.backgroundSize = "100%"
                  }
                  else if(data.weather[0].main == "Snow"){
                    document.getElementById('weatherBg').style.backgroundImage = "url('images/snowy-img.jpg')";
                    document.getElementById('weatherBg').style.backgroundSize = "100%"
                  }
                  else if(data.weather[0].main == "Thunderstorm"){
                    document.getElementById('weatherBg').style.backgroundImage = "url('images/thunderstorm-img.jpg')";
                    document.getElementById('weatherBg').style.backgroundSize = "100%"
                  }
                  else{
                    document.getElementById('weatherBg').style.backgroundImage = "url('images/img2.jpg')";
                    document.getElementById('weatherBg').style.backgroundSize = "100%"
                  }
                    
                  }
      
      )


    
 }
 