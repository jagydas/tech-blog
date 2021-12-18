const { Comment } = require('../models');

const commentData = [{
        comment_text: "I'm here to learn javaScript",
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: "This is nice article",
        user_id: 2,
        post_id: 2
    },
    {
        comment_text: "how can I add new article",
        user_id: 3,
        post_id: 3
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;