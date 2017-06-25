var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");
var data = [
    {
        name:"Cloud's Rest",
        image: "https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ligula leo, porttitor eu risus auctor, dignissim vehicula lacus. Cras vitae blandit libero. Sed sit amet neque ac enim rutrum sodales. Ut lorem augue, bibendum quis luctus scelerisque, tristique id eros. Etiam vitae sapien neque. Maecenas tempus diam ut sagittis tincidunt. Vivamus fringilla ipsum enim, sed aliquet metus tempus eu."
    },
    {
        name:"Desert Mesa",
        image: "https://farm4.staticflickr.com/3859/15123592300_6eecab209b.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ligula leo, porttitor eu risus auctor, dignissim vehicula lacus. Cras vitae blandit libero. Sed sit amet neque ac enim rutrum sodales. Ut lorem augue, bibendum quis luctus scelerisque, tristique id eros. Etiam vitae sapien neque. Maecenas tempus diam ut sagittis tincidunt. Vivamus fringilla ipsum enim, sed aliquet metus tempus eu."
    },
    {
        name:"Canyon Floor",
        image: "https://farm1.staticflickr.com/189/439046463_841a18169e.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ligula leo, porttitor eu risus auctor, dignissim vehicula lacus. Cras vitae blandit libero. Sed sit amet neque ac enim rutrum sodales. Ut lorem augue, bibendum quis luctus scelerisque, tristique id eros. Etiam vitae sapien neque. Maecenas tempus diam ut sagittis tincidunt. Vivamus fringilla ipsum enim, sed aliquet metus tempus eu."
    }
    ]

function seedDB(){
    Campground.remove({}, function(err){
        if(err){
            console.log(err);
        } else {
            console.log("removed campgrounds!");
            data.forEach(function(seed){
            Campground.create(seed, function(err, campground){
                if(err){
                    console.log(err);
                }else{
                    console.log("added a campground");
                    Comment.create(
                        {
                            text: "This place is great, ut I wish there was internet",
                            author: "Homer"
                        }, function(err, comment){
                            if(err){
                                console.log(err);
                            } else{
                                campground.comments.push(comment);
                                campground.save();
                                console.log("Created new comment");
                            }
                        });
                }
            });
            });
        }    
    });
    
}

module.exports = seedDB;