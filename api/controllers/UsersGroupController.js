/**
 * UsersController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = { 
        add: function(req, res){
        var role = req.body.role;
        

        UsersGroup.create({role:role}).exec(function(err){
            if(err){
                res.send(500, {error: 'Database Error'});
            }
    
           res.send("success");
        });
      },

      list: function(req, res){
        UsersGroup.find({}).exec(function(err,users){
            if(err){
                  //res.send(500,{error:'database error'});
            }
            console.log(users);
            return res.json(users)
           // res.send("success", );
            //res.view('questions/list', { questions: questions });
           // res.view('articles/list', articles);
            //res.view('/articles/list',{articles:articles});
        })
    },
    getuser: function(req, res){
        console.log(req.params.username)
        Users.findOne({username: req.params.username}).exec(function(err,user){
            if(err){
                  //res.send(500,{error:'database error'});
            }
            console.log(user);
            return res.json(user)
           // res.send("success", );
            //res.view('questions/list', { questions: questions });
           // res.view('articles/list', articles);
            //res.view('/articles/list',{articles:articles});
        })
    }
};

