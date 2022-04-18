const aboutContent = "Non magnam optio a repudiandae nihil qui libero labore sit reiciendis amet in asperiores minus hic ipsum esse et voluptas dolorem. Id sapiente consequatur ea autem alias aut molestiae soluta enim distinctio qui nemo repellat id blanditiis ipsa ut necessitatibus sunt. Ut autem consequuntur et sint error et quam numquam ut dolores libero est blanditiis tempore et quisquam possimus et asperiores voluptas? Sit distinctio repudiandae At aliquam quaerat est perferendis laboriosam aut tempore explicabo?";

const showAbout= function (req, res) {
    res.render('about', { aboutContent: aboutContent });
};

module.exports = { showAbout };
