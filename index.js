module.exports = exports = function(schema, options) {
    var likesName = options.likesName || "likes";
    var likersName = options.likersName || "likers";
    var likerIdType = options.likerIdType || ObjectId;

    // indexed defaults to true
    var indexed = options.indexed === false ? false : true;

    exports.votesPlugin(schema, {
        disableDownvotes: true,
        tallyName: likesName,
        upvotesName: likesName,
        upvotersName: likersName,
        voterIdType: likerIdType,
        indexed: indexed
    });
};
