var bio = {

  'name': 'Michael Sherwood',
  'role': 'Web Developer',
  'contacts': {
    'mobile': '+55 (11) 99217-9393',
    'email': 'mjsherwood@gmail.com',
    'github': 'mjsherwood',
    'location': 'Sâo Paulo, Brazil'
  },
  'biopic': 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/2/000/219/3ba/3b164c0.jpg',
  'welcomeMessage': 'Thanks for visiting my page. Feel free to contact me if I can be of service.',
  'skills': ['Customer Experience', 'Operations', 'Strategy', 'Business Development']
};

bio.display = function(){
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  var formattedbioPic = HTMLbioPic.replace("%data%", bio.biopic);
  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  var formattedHTMLgithub = HTMLgithub.replace("%data%", bio.contacts.github);
  var formattedHTMLlocation = HTMLlocation.replace("%data%", bio.contacts.location);
  var formattedHTMLwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

  $("#header").prepend(formattedRole).prepend(formattedName);

  $("#header").append(formattedbioPic).append(formattedHTMLwelcomeMsg);

  $("#topContacts").append(formattedMobile)
        .append(formattedEmail)
        .append(formattedHTMLgithub)
        .append(formattedHTMLlocation);

  $("#footerContacts").append(formattedMobile)
        .append(formattedEmail)
        .append(formattedHTMLgithub)
        .append(formattedHTMLlocation);

  if(bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    bio.skills.forEach(function (skill) {
            var formattedSkill = HTMLskills.replace("%data%", skill);
            $('#skills').append(formattedSkill);

    });
  }
};


var work = {
  "jobs": [
    {
      "title": "VP of Operations",
      "employer": "Marerua LLC",
      "dates": "2013-present",
      "description": "I am implementing all customer service and fulfillment processes, procedures and systems for an ecommerce startup in Brazil.  Our customer service strategy focuses on hiring people passionate about our products and providing a high touch customer experience that will amaze and inspire customers.  In fulfillment we are implementing process to provide high visibility to customers and a high service level.  Throughout the order life-cycle we will set high expectations and exceed them.  Through process we will make the call center a profit center.  Using LEAN methodology we will continually improve the efficiency, accuracy and SLA that we provide our customers.",
      "location": "Sâo Paulo, SP, Brazil"
    },
    {
      "title": "Sr. Manager of Customer Experience",
      "employer": "Backcountry.com",
      "dates": "2010-2013",
      "description": "Responsible for managing the customer experience at backcountry.com.  Backcountry.com is known for providing best in industry customer service and provides an expert based call center experience.  Also responsible for a corporate accounts team, a retail store and a risk and payment team.",
      "location": "Salt Lake City, UT, US"
    },
    {
      "title": "Workforce Manager",
      "employer": "Backcountry.com",
      "dates": "2007-2010",
      "description": "Responsible for all scheduling and forecasting. Almost immediately improved service levels to 90 % of calls answered in 15 seconds while improved efficiency in Call Center by 20 percent. These positive changes were made while decreasing cost and turnover rate. Happiness of the call-center went up. A secondary responsibility of this position was overseeing a QA team that would verify the quality of all customer facing products developed at Backcountry.",
      "location": "Salt Lake City, UT, US"
    }
  ],

  "display": function(){
    for (var job in work.jobs){
      $("#workExperience").append(HTMLworkStart);
      var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
      var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
      var formattedEmployerTitle = formattedEmployer + formattedTitle;
      $(".work-entry:last").append(formattedEmployerTitle);
      var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
      $(".work-entry:last").append(formattedDates);
      var formattedworkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].dates);
      $(".work-entry:last").append(formattedworkLocation);
      var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
      $(".work-entry:last").append(formattedDescription);
    }
  },

  "locationizer": function(){
    var locationArray = [];

      for (job in work.jobs){
        var newLocation = work.jobs[job].location;
        locationArray.push(newLocation);
      }
      return locationArray;
  }

};


work.locationizer();

var education = {
  "schools": [
    {
      "name": "Brigham Young University",
      "location": "Provo, UT, US",
      "degree": "Test",
      "majors": ["Portuguese", "English"],
      "dates": 1997,
      "url": "http://home.byu.edu/home/"
    },
    {
      "name": "Dixie State University",
      "location": "Saint George, UT, US",
      "degree": "",
      "majors": "Journalism",
      "dates": 1998,
      "url": "http://dixie.edu/"
    }
  ],
  "onlineCourses": [
    {
      "title": "Intro To Programming Nanodegree",
      "school": "Udacity",
      "date": 2015,
      "url": "https://www.udacity.com/course/intro-to-programming-nanodegree--nd000"
    },
    {
      "title": "Front-End Web Developer Nanodegree",
      "school": "Udacity",
      "date": 2016,
      "url": "https://www.udacity.com/course/intro-to-programming-nanodegree--nd000"
    }
  ],

  "display":function() {
    for (var school in education.schools) {
      $("#education").append(HTMLschoolStart);
      var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
      $(".education-entry:last").append(formattedName);
      var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
      $(".education-entry:last").append(formattedDegree);
      var formattedCity = HTMLschoolLocation.replace("%data%", education.schools[school].location);
      $(".education-entry:last").append(formattedCity);
      var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
      $(".education-entry:last").append(formattedDates);
      var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
      $(".education-entry:last").append(formattedMajor);
    }
    $("#education").append(HTMLonlineClasses);
      for (var course in education.onlineCourses) {
        $("#education").append(HTMLschoolStart);
        var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
        $(".education-entry:last").append(formattedonlineTitle);
        var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
        $(".education-entry:last").append(formattedonlineSchool);
        var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].date);
        $(".education-entry:last").append(formattedonlineDates);
        var formattedonlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
        $(".education-entry:last").append(formattedonlineURL);

  }
 }
};

var projects = {
  "projects": [
    {
      "title": "Easy Returns",
      "dates": "2010-2011",
      "description": "Designed a system for customers to easily return items",
      "images": ["images/easyreturns.png"]
    },
    {
      "title": "Personal Gearhead",
      "dates": "2012-2013",
      "description": "Designed a system to allow customers to connect to expert types",
      "images": ["images/GearheadExpert.png"]
    }
  ],

  "display":function() {
    for(var project in projects.projects) {
      $("#projects").append(HTMLprojectStart);

      var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
      $(".project-entry:last").append(formattedTitle);

      var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
      $(".project-entry:last").append(formattedDates);

      var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
      $(".project-entry:last").append(formattedDescription);

      if(projects.projects[project].images.length > 0) {
        for(image in projects.projects[project].images) {
          var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
          $(".project-entry:last").append(formattedImage);
        }
      }
    }
  }
};

education.display();
projects.display();
work.display();
bio.display();

$("#mapDiv").append(googleMap);
