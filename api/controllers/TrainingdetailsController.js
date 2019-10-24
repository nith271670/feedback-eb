/**
 * TrainingdetailsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    add: function(req, res){
        var training = req.body.training;
        var trainers = req.body.trainers;
        var group = req.body.group;        
        var location = req.body.location;
        var from_date = req.body.from_date;
        var to_date = req.body.to_date;
        var training_hours = req.body.training_hours;
        var createdBy = req.body.createdBy;
        var enableEbGuideForm = req.body.enableEbGuideForm;

        Trainingdetails.create({training:training, trainers:trainers,createdBy:createdBy,group:group,location:location,from_date:from_date,to_date:to_date,training_hours:training_hours,enableEbGuideForm:enableEbGuideForm}).exec(function(err){
            if(err){
                res.send(500, {error: 'Database Error'});
            }
    
           res.send("success");
        });
      },

      list:async function(req, res){
        Trainingdetails.find({}).exec(function(err,trainingdetails){
              if(err){
                    res.send(500,{error:'database error'});
              }
              //console.log(questions);
              return res.json(trainingdetails)
             // res.send("success", );
              //res.view('questions/list', { questions: questions });
             // res.view('articles/list', articles);
              //res.view('/articles/list',{articles:articles});
          })
            
      },
      details:async function(req, res){
        Trainingdetails.findOne({_id: req.params.id}).exec(function(err,trainingdetails){
              if(err){
                    res.send(500,{error:'database error'});
              }
              //console.log(questions);
              return res.json(trainingdetails)
             // res.send("success", );
              //res.view('questions/list', { questions: questions });
             // res.view('articles/list', articles);
              //res.view('/articles/list',{articles:articles});
          })
            
      },
      edit: function(req, res){
        Trainingdetails.findOne({_id: req.params.id}).exec(function(err,feedback){
            if(err){
                  //res.send(500,{error:'database error'});
            }
            //console.log(feedback);
            return res.json(feedback)
           // res.send("success", );
            //res.view('questions/list', { questions: questions });
           // res.view('articles/list', articles);
            //res.view('/articles/list',{articles:articles});
        })
    },
    update: function(req, res){
        //console.log("update training details")
        //console.log(req.body)
        var group = req.body.group;        
        var training = req.body.training;
        var trainers = req.body.trainers;
        var location = req.body.location;
        var from_date = req.body.from_date;
        var to_date = req.body.to_date;
        //var createdBy = req.body.createdBy;
        var training_hours = req.body.training_hours;

        Trainingdetails.update({id: req.params.id},{group:group,training:training, trainers:trainers,location:location,from_date:from_date,to_date:to_date, training_hours:training_hours}).exec(function(err){
            if(err){
                res.send(500, {error: 'Database Error'});
            }
    
           res.send("success");
        });
        return false;
    },
    delete: function(req, res){
        Trainingdetails.destroy({id:req.params.id}).exec(function(err){
            if(err){
                res.send(500, {error: 'Database Error'});
            }
    
            res.send("success");
        });
    
        return false;
    },
    
};

