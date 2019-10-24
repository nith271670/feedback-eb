/**
 * TrainingGroupController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    list:async function(req, res){
       // console.log("enter");
        TrainingGroups.find({}).exec(function(err,trainGroup){
              if(err){
                    res.send(500,{error:'database error'});
              }
              //console.log(questions);
              return res.json(trainGroup)
             // res.send("success", );
              //res.view('questions/list', { questions: questions });
             // res.view('articles/list', articles);
              //res.view('/articles/list',{articles:articles});
          })
            
      },
      add: function(req, res){
        var group_name = req.body.group_name;
        var groupId = req.body.groupId;
        var description = req.body.description;
        TrainingGroups.create({group_name:group_name, groupId:groupId, description:description}).exec(function(err){
            if(err){
                res.send(500, {error: 'Database Error'});
            }
    
           res.send("success");
        });
      }

};

