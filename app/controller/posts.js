const Controller = require('egg').Controller;

class PostController extends Controller {
    async show() {
        this.ctx.body = {
            name: 'egg',
            category: 'framework',
            language: 'Node.js',
        };
    }
}
module.exports = PostController;