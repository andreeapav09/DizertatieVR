AFRAME.registerComponent("foo", {

  apiLink: "http://api.openweathermap.org/data/2.5/weather?q=",
  apiKey: "&appid=00caa9bdfcc6f16336db1ec60c59f314",
  cityName: '',

  init: function () {

    let self = this.el; // a-plane
    let sky = document.querySelector('#sky');

    this.el.addEventListener("click", () => {
      let url = this.apiLink + this.cityName + this.apiKey;
      if (this.cityName != '') {
        axios.get(url)
          .then(function (response) {
            const temperature = Math.round((response.data.main.temp - 273.15) * 10) / 10;
            self.children[0].setAttribute("value", 'The weather is: ' + temperature + ' °C.');
            if (temperature > 20) {
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
          })
          .then(function () {
          });
      }
    })
  }
});

window.toggleAction = function setLocation(cityName) {
  let fooComponent = document.querySelector('[foo]').components.foo;
  fooComponent.cityName = cityName;

  let temperatureShow = document.querySelector('#temperaturePlaneText');
  temperatureShow.setAttribute("value", "What's the weather in " + cityName + "?");
}