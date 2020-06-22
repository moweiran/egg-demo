const Controller = require('egg').Controller;

function toInt(str) {
    if (typeof str === 'number') return str;
    if (!str) return str;
    return parseInt(str, 10) || 0;
}

class BlogController extends Controller {
    async index() {
        const ctx = this.ctx;
        const query = { limit: toInt(ctx.query.limit), offset: toInt(ctx.query.offset) };
        ctx.body = await ctx.model.Blog.findAll(query);
    }
    async show() {
        const ctx = this.ctx;
        ctx.body = await ctx.model.Blog.findByPk(toInt(ctx.params.id));
    }
}

module.exports = BlogController;
