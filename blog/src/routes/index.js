const newsRouter = require('./news');
const siteRouter = require('./site');
const courseRouter = require('./courses');

function route(app) {
    // đọc tử trên xuống route trùng với cái nào nhảy luôn vào route đó

    app.use('/news', newsRouter);
    app.use('/courses', courseRouter);
    app.use('/', siteRouter);
}

module.exports = route;
