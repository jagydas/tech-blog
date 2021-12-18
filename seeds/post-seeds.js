const { Post } = require('../models');

const postData = [{
        title: 'How to live a healthy life ?',
        content: 'Focus on your mental health. Drink lot of water. Eat and Sleep in time.',
        user_id: 1

    },
    {
        title: 'How to learn coding?',
        content: 'Practice Practice practice.',
        user_id: 2
    },
    {
        title: 'How to get a good paying job ?',
        content: ' Get 2 3 job offers in hand and then negotiate with recruiter',
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;