(function (mypass) {
  'use strict';

  mypass.registerFeature({
    name: 'dashboard', 
    url:'/ui/features/dashboard/index.html' , 
    load: dashboardLoad
  });

  function init() {
  }

  function dashboardLoad(evt) {
      //ADD ANY PAGE CODE

      $('.btn-logout').removeClass('hidden');

      var acc = mypass.session.getSession();
      userform.elements.email.value=acc.email;
      userform.elements.firstname.value=acc.firstname;
      userform.elements.lastname.value=acc.lastname;

//       email: "jerry+6@microdb.co"
// firstname: "Jerry"
// lastname: "Peters"
// status: "authenticated"
  }

  init();

})(mypass);