var votesPlugin = require('mongoose-votes');

module.exports = exports = function(schema, options) {
    votesPlugin.call(this, schema, {
        disableDownvotes: true,
        tallyName: options.likesName || "likes",
        upvotesName: options.likesName || "likes",
        upvotersName: options.likersName || "likers",
        voterIdType: options.likerIdType,
        indexed: options.indexed
    });
};
