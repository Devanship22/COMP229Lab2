/* 
  Student Name: Devanshi Patel StudentID: 301161377 Date: 19 June 2021 
*/
module.exports.displayHomePage = function (req, res, next) {
    res.render('index', { title: 'Home' });
}

module.exports.displayAboutPage = function (req, res, next) {
    res.render('about', { title: 'About Me' });
}

module.exports.displayProjectPage = function (req, res, next) {
    
    res.render('projects', { title: 'My Projects' });
}

module.exports.displayServicePage = function (req, res, next) {
    res.render('services', { title: 'My Services' });
}

module.exports.displayContactPage = function (req, res, next) {
    res.render('contact', { title: 'Contact US' });
}

module.exports.responseToContactPageForm = function (req, res, next) {
    // user sent message will be printed on the console.
    console.log('Got body:', req.body);
    // user will be redirected to the home page.
    res.render('index', { title: 'Home' });
  }
