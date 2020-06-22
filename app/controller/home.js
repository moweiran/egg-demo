const Controller = require('egg').Controller;
class HomeController extends Controller {
    async index() {
        this.ctx.body = 'Hello World';
    }
    async list() {
        const ctx = this.ctx;
        ctx.body = await ctx.renderString('{{ name | hello }}', { name: 'egg' });
    }
}

module.exports = HomeController;