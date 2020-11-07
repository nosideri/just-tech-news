const User = require('./User');
const Post = require("./Post");

// user can have many posts
User.hasMany(Post, {
    foreignKey: 'user_id'
});

// but post belongs to one user
Post.belongsTo(User, {
    foreignKey: 'user_id',
});

module.exports = { User, Post };
module.exports = { User };