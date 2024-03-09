var wrapper = new Vue({
  el: "#wrapper",
  data: {
    info: {
      firstName: "William",
      lastName: "Jones",
      email: "wjones17@my.westga.edu",
      city: "LaGrange",
      state: "Georgia",
      zip: "30241"
    },
    education: {
      id: 1,
      name: "University Of West Georgia",
      degree: "Bachelor of Science in Computer Science",
      year: "Expected graduation: May 2022"
    },
    workExperience: {
      name: "Weiler Forestry inc.",
      title: "Welder",
      description: {
        sentence1:"Weld quality welds so that the product does not have any weak point",
        sentence2:"Check incoming parts for quality issues and report them to resolve the root cause",
        sentence3:"Be able to read blueprints and drawings to build and assemble desired parts to specifications",
        sentence4: "Be able to operate overhead cranes in a safely manner to avoid accidents and injuries"
      },
      years: "May 2021-present",
      name2: "Duracell, LaGrange GA",
      title2: "Mechanical Operations-Technician",
      description2: {
        sentence5:"Find and fix various problems with equipment/machines to maintain machine functionality",
        sentence6:"Test quality of the product and input data into computer system in order to track machines performance levels",
        sentence7:"Adjust chemical levels if quality of product test is bad in order to produce good product",
        sentence8: "Communicate with incoming shifts to build rapport on problems that were faced during the shift and current situations, if any, that need to be looked at or fixed",
        sentence9: "Quick thinking skills are needed in order to fix problems in a timely manner",
        sentence10: "Have a wide range of Knowledge about tools and tool use in order to repair machine faults"
      },
      years2: "May 2021-present"
    },
    techSummary: "Java, Python, Html, JavaScript, Css, Vue FrameWork, Version Control, Bit Bucket",
    showEducation: false,
    showWorkExperience: false,
    showTechnology: false
  },
  methods: {
    changeEducation: function () {
      this.showEducation = !this.showEducation;
    },
    changeWorkExperience: function () {
      this.showWorkExperience = !this.showWorkExperience;
    },
    changeTechnology: function () {
      this.showTechnology = !this.showTechnology;
    },
    changeAllTrue: function () {
      this.showEducation = true;
      this.showWorkExperience = true;
      this.showTechnology = true;
    },
    changeAllFalse: function () {
      this.showEducation = false;
      this.showWorkExperience = false;
      this.showTechnology = false;
    }
  }
});