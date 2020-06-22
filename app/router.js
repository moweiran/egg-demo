module.exports = app => {
    const { router, controller } = app;
    const jsonp = app.jsonp();
    router.get('/', controller.home.index);
    router.get('/list', controller.home.list);
    router.get('/news', controller.news.list);
    app.router.get('/api/posts/:id', jsonp, app.controller.posts.show);
    // app.router.get('/api/posts', jsonp, app.controller.posts.list);
    router.resources('blogs', '/blogs', controller.blogs);
}