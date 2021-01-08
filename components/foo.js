// Variables declarations
var apiLink = 'http://api.openweathermap.org/data/2.5/weather?q=';
var apiKey = "&appid=00caa9bdfcc6f16336db1ec60c59f314";
var cityName = '';

AFRAME.registerComponent("foo", {
    init: function() {
      let self = this.el;
      let sky = document.querySelector('#sky');

      this.el.addEventListener("click", (e)=>{
        var url = apiLink + cityName + apiKey;
        axios.get(url)
          .then(function (response) {
            const temperature = Math.round((response.data.main.temp - 273.15) * 10) / 10;
            self.children[0].setAttribute("value", temperature + ' °C');
            if(temperature > 20) {
              sky.setAttribute('color', 'yellow');
              sky.setAttribute('src', '#cubes');
            }
            else {
              sky.setAttribute('color', '');
              sky.setAttribute('src', '#coldTexture');
            }
          })
          .catch(function (error) {
            self.children[0].setAttribute("value", error);
            console.log(error);
          })
          .then(function () {
          });
      })
    },

    updateValues: function(cityName) {
      // console.log("Cityname before updateValue: " + this.cityName);
      let temperatureShow = document.querySelector('#temperaturePlaneText');
      temperatureShow.setAttribute("value", "What's the temperature in " + cityName + "?");
      this.cityName = cityName;
      // console.log("Cityname after updateValue: " + this.cityName);
    }
  });

window.toggleAction =   function getTemperatureByLocation(cityName) {
  let updateValuesFunction = document.querySelector("#foo").components.foo.__proto__.updateValues;
  updateValuesFunction(cityName);
}