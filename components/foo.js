AFRAME.registerComponent("foo", {
    init: function() {
      let self = this.el
      this.el.addEventListener("click", (e)=>{
        // Make a request for a user with a given ID
        axios.get('http://api.openweathermap.org/data/2.5/weather?q=Brasov&appid=00caa9bdfcc6f16336db1ec60c59f314')
          .then(function (response) {
            self.children[0].setAttribute("value", response.data.main.temp);
            // console.log(response);
          })
          .catch(function (error) {
            self.children[0].setAttribute("value", error);
            // console.log(error);
          })
          .then(function () {
            // always executed
          });
      })
    }
  })