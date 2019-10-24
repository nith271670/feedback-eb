/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': { view: 'pages/homepage' },

  'get /feedback/list':   {
    view: 'questions/list',
    controller: 'FeedbackController',
    action: 'list'
   
},
'post /trainingdetails/add':   {
  // view: 'questions/add',
   controller: 'TrainingdetailsController',  
action: 'add'
 
},
'get /trainingdetails/list':   {
  // view: 'questions/add',
   controller: 'TrainingdetailsController',
   action: 'list'
  
 },
'get /trainingdetails/details/:id':   {
  // view: 'questions/add',
   controller: 'TrainingdetailsController',
   action: 'details'
  
 },
 'post /trainingnames/add':   {
  // view: 'questions/add',
   controller: 'TrainingnamesController',
   action: 'add'
  
 },
 'get /trainingnames/list':   {
   // view: 'questions/add',
    controller: 'TrainingnamesController',
    action: 'list'
   
  },
  'post /Trainernames/add':   {
   // view: 'questions/add',
    controller: 'TrainernamesController',
    action: 'add'
   
  },
  'get /Trainernames/list':   {
    // view: 'questions/add',
     controller: 'TrainernamesController',
     action: 'list'
    
   },
   'get /Traininggroups/list':   {
    // view: 'questions/add',
     controller: 'TrainingGroupsController',
     action: 'list'
    
   },
   'post /Traininggroups/add':   {
    // view: 'questions/add',
     controller: 'TrainingGroupsController',
     action: 'add'
    
   },
'post /feedback/create':   {
 // view: 'articles/add',
  controller: 'FeedbackController',
  action: 'create'
 
},
'post /feedback/createEbGuideForm':   {
 // view: 'articles/add',
  controller: 'FeedbackController',
  action: 'createEbGuideForm'
 
},

'get /feedback/ebguidelist':   {
  // view: 'questions/list',
  controller: 'FeedbackController',
  action: 'ebguidelist'
 
},

'get /trainingdetails/edit/:id':   {
 // view: 'articles/edit/:id',
  controller: 'TrainingdetailsController',
  action: 'edit'
 
},
'post /trainingdetails/update/:id':   {
 //view: 'articles/edit',
 controller: 'TrainingdetailsController',
 action: 'update'

},
'post /trainingdetails/delete/:id':   {
 //view: 'articles/edit',
 controller: 'TrainingdetailsController',
 action: 'delete'

},

'get /users/list':   {
  // view: 'articles/edit/:id',
   controller: 'UsersController',
   action: 'list'
  
 },
 'get /users/getuser/:username':   {
  //view: 'articles/edit',
  controller: 'UsersController',
  action: 'getuser'
 
 },
 'post /users/add':   {
  //view: 'users/adduser',
  controller: 'UsersController',
  action: 'add'
 
 },

 'get /users/list':   {
  //view: 'users/list',
  controller: 'UsersController',
  action: 'list'
 
},

'get /usersgroup/list':   {
  // view: 'articles/edit/:id',
   controller: 'UsersGroupController',
   action: 'list'
  
 },
 'post /usersgroup/add':   {
  //view: 'users/adduser',
  controller: 'UsersGroupController',
  action: 'add'
 
 },

  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
