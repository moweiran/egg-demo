const Subscription = require('egg').Subscription;

class UpdateCache extends Subscription {
    // 通过 schedule 属性来设置定时任务的执行间隔等配置
    static get schedule() {
        return {
            interval: '1m', // 1 分钟间隔
            type: 'all', // 指定所有的 worker 都需要执行
        };
    }

    // subscribe 是真正定时任务执行时被运行的函数
    async subscribe() {
        // const { serverUrl, pageSize } = this.config.news;
        // const res = await this.ctx.curl(`${serverUrl}/topstories.json`, {
        //     dataType: 'json',
        //     timeout: 6000
        // });
        const result = await this.ctx.curl('https://registry.npm.taobao.org/egg/latest', {
            dataType: 'json',
        });
        this.ctx.logger.info('Egg latest version: %s', result.data.version);
        // const sql = `select distinct gys_city from  tb_gys  where gys_city is not null`;
        const cities = await this.ctx.mysql.get('gys_city', {});
        console.log(cities);
        this.ctx.app.cache = result.data.version;
    }
}

module.exports = UpdateCache;