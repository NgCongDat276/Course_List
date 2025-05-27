const Course = require('../models/Course');
const { mongooseToObject } = require('../../ulti/mongoose');
const { multipleMongooseToObject } = require('../../ulti/mongoose');

class Sitecontroller {

    index(req, res, next) {
    Course.find({})
        .then((courses) => {
            res.render('home', {
                courses: multipleMongooseToObject(courses),
            })
        })
        .catch(error => next(error));
   }

    //[GET] /search
    search(req, res) {
        res.render(`search`);
    }
}

module.exports = new Sitecontroller();
