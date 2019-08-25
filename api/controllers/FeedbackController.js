/**
 * ArticlesController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    list:async function(req, res){
      Feedback.find({}).exec(function(err,questions){
            if(err){
                  res.send(500,{error:'database error'});
            }
            //console.log(questions);
            return res.json(questions)
           // res.send("success", );
            //res.view('questions/list', { questions: questions });
           // res.view('articles/list', articles);
            //res.view('/articles/list',{articles:articles});
        })
          
    },
    
    add: function(req, res){
      res.view('articles/add');
  },
  create:function(req, res){
      //console.log(req.body);
      var name = req.body.name;
      var training = req.body.training;
      var trainers = req.body.trainers;
      var questions = req.body.questions;
      var date = req.body.date;
      var location = req.body.location;
  
      Feedback.create({name:name, training:training, trainers:trainers, location:location, date:date,  questions:questions}).exec(function(err){
          if(err){
              res.send(500, {error: 'Database Error'});
          }
  
         res.send({message : "success"});
      });
  },
  createEbGuideForm:function(req, res){
      //console.log(req.body);
    //   var name = req.body.name;
    //   var training = req.body.training;
    //   var trainers = req.body.trainers;
    //   var questions = req.body.questions;
    //   var date = req.body.date;
    //   var location = req.body.location;
//   console.log(req.body);
  
  EbGuideFeedback.create({formValue:req.body}).exec(function(err){
          if(err){
              res.send(500, {error: 'Database Error'});
          }
            console.log(req.body);
  
         res.send({message : "success"});
      });
  }
};
  
  