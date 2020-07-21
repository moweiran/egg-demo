const Controller = require('egg').Controller;
class HomeController extends Controller {
    async index() {
        //  console.log(this.app.mysql)
        //const tb_gys = await this.app.mysql.select('tb_gys');
        const tb_gys = await this.app.mysql.query('select distinct gys_city from  tb_gys  where gys_city is not null');
        console.log(tb_gys)
        // this.ctx.body = 'Hello World';
        await this.ctx.render('home/city.tpl', {
            list: tb_gys
        });
    }
    async list() {
        const ctx = this.ctx;
        ctx.body = await ctx.renderString('{{ name | hello }}', {
            name: 'egg'
        });
    }
}

module.exports = HomeController;