



var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postSchema = new Schema({
    postTitle: {
        type: String,
        required: true
    },
    PostDescription:{
        type:String,
        required:true
    },
      
     
    Post: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        username: String
    }
});
app.post('/api/stuff/:id', (req, res, next) => {
     
    Post.updateOne({_id: req.id}, postSchema).then(
      () => {
        res.status(201).json({
          message: 'Thing updated successfully!'
        });
      }
    )
      }
    );
    app.delete('/api/stuff/:id', (req, res, next) => {
        Thing.deleteOne({_id: req.id}).then(
          () => {
            res.status(200).json({
              message: 'Deleted!'
            });
          }
        
        );
      });

module.exports = mongoose.model('Post', postSchema);


