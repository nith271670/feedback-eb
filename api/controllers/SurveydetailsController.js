/**
 * SurveydetailsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    add: function(req, res){
        var survey = req.body.survey;   
        var location = req.body.location;
        var from_date = req.body.from_date;
        var to_date = req.body.to_date;

        Surveydetails.create({survey:survey,location:location,from_date:from_date,to_date:to_date}).exec(function(err){
            if(err){
                res.send(500, {error: 'Database Error'});
            }
    
           res.send("success");
        });
      },

      list:async function(req, res){
        Surveydetails.find({}).exec(function(err,surveydetails){
              if(err){
                    res.send(500,{error:'database error'});
              }
              //console.log(questions);
              return res.json(surveydetails)
             // res.send("success", );
              //res.view('questions/list', { questions: questions });
             // res.view('articles/list', articles);
              //res.view('/articles/list',{articles:articles});
          })
            
      },
      details:async function(req, res){
        Surveydetails.findOne({_id: req.params.id}).exec(function(err,surveydetails){
              if(err){
                    res.send(500,{error:'database error'});
              }
              //console.log(questions);
              return res.json(surveydetails)
             // res.send("success", );
              //res.view('questions/list', { questions: questions });
             // res.view('articles/list', articles);
              //res.view('/articles/list',{articles:articles});
          })
            
      },
      edit: function(req, res){
        Surveydetails.findOne({_id: req.params.id}).exec(function(err,feedback){
            if(err){
                  //res.send(500,{error:'database error'});
            }
            //console.log(feedback);
            return res.json(feedback)
        })
    },
    update: function(req, res){
        
        var survey = req.body.survey;
        var location = req.body.location;
        var from_date = req.body.from_date;
        var to_date = req.body.to_date;
        Surveydetails.update({id: req.params.id},{survey:survey, location:location,from_date:from_date,to_date:to_date}).exec(function(err){
            if(err){
                res.send(500, {error: 'Database Error'});
            }
    
           res.send("success");
        });
        return false;
    },
    delete: function(req, res){
        Surveydetails.destroy({id:req.params.id}).exec(function(err){
            if(err){
                res.send(500, {error: 'Database Error'});
            }
    
            res.send("success");
        });
    
        return false;
    },
    
};

