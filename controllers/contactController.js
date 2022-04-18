const contactContent = "Est velit iure ad expedita voluptates hic explicabo quidem id vitae molestias aut perspiciatis consectetur et delectus pariatur.Ea dicta enim eos aliquam veritatis hic quia temporibus ad libero necessitatibus. Eos soluta officiis ex enim obcaecati qui tenetur tenetur.";

const showContact = function (req, res) {
  res.render('contact', { contactContent: contactContent });
};

module.exports = {showContact};