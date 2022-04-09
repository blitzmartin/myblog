const express = require("express");
const ejs = require("ejs");

const homeStartingContent = "Lorem ipsum dolor sit amet. Et iusto consequatur et quia omnis et delectus recusandae in totam nemo. Sed similique quidem 33 voluptatem veniam eos magnam galisum. ";
const aboutContent = "Non magnam optio a repudiandae nihil qui libero labore sit reiciendis amet in asperiores minus hic ipsum esse et voluptas dolorem. Id sapiente consequatur ea autem alias aut molestiae soluta enim distinctio qui nemo repellat id blanditiis ipsa ut necessitatibus sunt. Ut autem consequuntur et sint error et quam numquam ut dolores libero est blanditiis tempore et quisquam possimus et asperiores voluptas? Sit distinctio repudiandae At aliquam quaerat est perferendis laboriosam aut tempore explicabo?";
const contactContent = "Est velit iure ad expedita voluptates hic explicabo quidem id vitae molestias aut perspiciatis consectetur et delectus pariatur.Ea dicta enim eos aliquam veritatis hic quia temporibus ad libero necessitatibus. Eos soluta officiis ex enim obcaecati qui tenetur tenetur.";

const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


class postConstructor {
  constructor(title, content, date, id) {
    this.title = title;
    this.content = content;
    this.date = date;
    this.id = id;
  }
}

let allPosts = [];


// HOME
app.get('/', (req, res) => {
  res.render('home', { homeStartingContent: homeStartingContent, homeContent: allPosts});
});

// posts/Post-title
app.get('/posts/:id', (req, res) =>{
  const requestedTitle = req.params.id;
  allPosts.forEach(element => {
    if (requestedTitle.replace(' ', '-').toLowerCase() === element.title.replace(' ', '-').toLowerCase()){
      res.render('posts', { postTitle: element.title, postDate: element.date ,postContent: element.content});
    }
  })
})

// ABOUT
app.get('/about', (req, res) => {
  res.render('about', { aboutContent: aboutContent });
});

// CONTACT
app.get('/contact', (req, res) => {
  res.render('contact', { contactContent: contactContent });
});

// COMPOSE
app.route('/compose')
  .get((req, res) => {
    res.render('compose');
  })
  .post((req, res) => {
    let title = req.body.postTitle;
    let content = req.body.postContent;
    let today = new Date();
    let DD = today.getDate();
    let MM = today.getMonth() + 1;
    let YYYY = today.getFullYear();
    let date = `${DD}/${MM}/${YYYY}`;
    let id = Date.now() + Math.floor(Math.random());
    const post = new postConstructor(title, content, date, id);
  //  console.log(JSON.stringify(post)); log posts array
    allPosts.push(post);
    res.redirect('/');
  });








// SERVER RUNNING
const port = process.env.PORT || 3000;
const hostname = 'localhost';

app.listen(port, hostname, (err) => {
  if (err) {
    return console.log("Something went wrong: " + err);
  } else {
    console.log(`Server running on port ${port}...`)
  }
})