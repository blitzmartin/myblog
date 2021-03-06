const blogModel = require("../models/blogModel");

const homeStartingContent = "Lorem ipsum dolor sit amet. Et iusto consequatur et quia omnis et delectus recusandae in totam nemo. Sed similique quidem 33 voluptatem veniam eos magnam galisum. ";

const showHomepage = function (req, res) {
    blogModel.find()
    .then(data => {
      res.render('home', { 
        homeStartingContent: homeStartingContent, 
        homeContent: data});
    })
};


// posts/Post-title    NEEDS FIX!!!!!!!
const showOnePost = function (req, res) {
    blogModel.findOne({_id: req.params.id})  //titolo
    .then(data => {
      res.render('posts', {
        title: data.title,
        content: data.content,
        date: data.date
      });
    })
}

module.exports = { showHomepage, showOnePost };