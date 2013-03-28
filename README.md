mongoose-likes
==============

Mongoose plugin to track likes/dislikes for an object. This is a customisation of the mongoose-votes plugin which changes the terminology to be more appropriate for likes/dislikes.

Status
------

This plugin is currently unstable and not thoroughly tested. Please refrain from using it at the present time.


Usage
-----

### Define your schema and add the likes plugin

    var mongoose = require('mongoose');
    var likesPlugin = require('mongoose-likes');

    var postSchema = mongoose.Schema({
        author: ObjectId,
        title: String,
        body: String
    });

    postSchema.plugin(likesPlugin);

    var Post = mongoose.model('Post', postSchema);

### Like / dislike

    var p = ... ; // some post object

    p.like(likerId, function(err) {
        ...
    });
    
    p.dislike(dislikerId, function(err) {
        ...
    });

### If a user changes their mind

    p.cancelLike(likerId, function(err) {
        ...
    });

    p.cancelDislike(dislikerId, function(err) {

    });

### Properties added

    p.likes // total number of likes
    p.dislikes // total number of dislikes
    p.score // virtual, likes - dislikes

    p.likers // array of all likers
    p.dislikers // array of all dislikers

Options
-------

mongoose-likes can be customised in a number of ways. Here is a list of all options with their default values:

    postSchema.plugin(likesPlugin, {
        // behaviour
        disableDislikes: false, // if true, turns off disliking

        // Property names
        likesName: 'likes',
        dislikesName: 'dislikes',
        scoreName: 'score',

        likersName: 'likers',
        dislikersName: 'dislikers',

        // Function names
        likeFuncName: 'like',
        dislikeFuncName: 'dislike',
        cancelLikeFuncName: 'cancelLike',
        cancelDislikeFuncName: 'cancelDislike',

        // other options
        likerIdType: ObjectId, // The type to use in the likers/dislikers array
        indexed: false // whether to generate the indexes {_id:1, likers:1}, and {_id:1, dislikers:1}
    });


