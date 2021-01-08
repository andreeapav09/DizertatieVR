// Variables declarations
let city = 'Brasov';

AFRAME.registerComponent("foo", {


   
    init: function() {
      let self = this.el;
      let sky = document.querySelector('#sky');

      this.el.addEventListener("click", (e)=>{
        axios.get(link)
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
      console.log("Cityname before updateValue: " + this.cityName);
      let temperatureShow = document.querySelector('#temperaturePlaneText');
      temperatureShow.setAttribute("value", "What's the temperature in " + cityName + "?");
      this.cityName = cityName;
      console.log("Cityname after updateValue: " + this.cityName);
    }
  });



window.toggleAction =   function getTemperatureByLocation(cityName) {
  
  let link = 'http://api.openweathermap.org/data/2.5/weather?q='+cityName+'&appid=00caa9bdfcc6f16336db1ec60c59f314';
  let sky = document.querySelector('#sky');
  let foo = document.querySelector("#foo")

    axios.get(link)
      .then(function (response) {
        const temperature = Math.round((response.data.main.temp - 273.15) * 10) / 10;
        foo.children[0].setAttribute("value", temperature + ' °C');
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
}