var wrapper = new Vue({
  el: "#wrapper",
  data: {
    info: {
      firstName: "William",
      lastName: "Jones",
      email: "wtjracer13@yahoo.com"
    },
    education: {
      id: 1,
      name: "University Of West Georgia",
      degree: "Bachelor of Science in Computer Science",
      year: "Graduated: May 2023"
    },
    showEducation: false
  },
  methods: {
    changeEducation: function () {
      this.showEducation = !this.showEducation;
    },
    changeTechnology: function () {
      this.showTechnology = !this.showTechnology;
    }
  }
});