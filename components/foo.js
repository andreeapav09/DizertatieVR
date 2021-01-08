AFRAME.registerComponent("foo", {
    init: function() {
      let self = this.el;
      let sky = document.querySelector('#sky');
      this.el.addEventListener("click", (e)=>{
        axios.get('http://api.openweathermap.org/data/2.5/weather?q=Mecca&appid=00caa9bdfcc6f16336db1ec60c59f314')
          .then(function (response) {
            const temperature = Math.round((response.data.main.temp - 273.15) * 10) / 10;
            self.children[0].setAttribute("value", temperature);
            if(temperature > 20) {
              sky.setAttribute('color', 'red');
            }
            else {
              sky.setAttribute('color', 'blue');
            }
          })
          .catch(function (error) {
            self.children[0].setAttribute("value", error);
            console.log(error);
          })
          .then(function () {
          });
      })
    }
  })