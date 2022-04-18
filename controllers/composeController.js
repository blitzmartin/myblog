const blogModel = require('../models/blogModel');

//POST
async function createPost(req, res) {
    try {
        let today = new Date();
        let DD = today.getDate();
        let MM = today.getMonth() + 1;
        let YYYY = today.getFullYear();
        let date = `${DD}/${MM}/${YYYY}`;
        date = date.toString();
        const newPost = await blogModel.create({
            title: req.body.postTitle,
            content: req.body.postContent,
            date: date
        })
        //  console.log(JSON.stringify(post)); log posts array
        res.redirect('/');
    } catch (err) {
        console.log(err);
    }
}

//GET
const showCompose = function (req, res) {
    res.render('compose');
};



module.exports = { showCompose, createPost };
