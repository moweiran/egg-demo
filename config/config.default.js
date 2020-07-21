exports.keys = 'egg-example';
// 添加 view 配置
exports.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
        '.tpl': 'nunjucks',
    },
};

/**
  * nunjucks config
  * @member Config#nunjucks
  * @property {Boolean} [autoescape=true] - controls if output with dangerous characters are escaped automatically.
  * @property {Boolean} [throwOnUndefined=false] - throw errors when outputting a null/undefined value
  * @property {Boolean} [trimBlocks=false] - automatically remove trailing newlines from a block/tag
  * @property {Boolean} [lstripBlocks=false] - automatically remove leading whitespace from a block/tag
  * @property {Boolean} [cache=true] - use a cache and recompile templates each time. false in local env.
  */
exports.nunjucks = {
    autoescape: true,
    throwOnUndefined: false,
    trimBlocks: false,
    lstripBlocks: false,
    cache: true,
}

exports.sequelize = {
    dialect: 'mssql',
    host: '127.0.0.1',
    port: 3306,
    database: 'Tests',
    username: 'root',
    password: '',
};

// 中间件设置
exports.middleware = [
    'robot',
    'notfoundHandler'
];

// 安全设置
exports.security = {
    csrf: false,
    // 若用户没有配置 domainWhiteList 或者 domainWhiteList数组内为空，
    // 则默认会对所有跳转请求放行，即等同于ctx.unsafeRedirect(url)
    domainWhiteList: ['.domain.com'],  // 安全白名单，以 . 开头
};

// jsonp设置
exports.jsonp = {
    callback: 'callback', // 识别 query 中的 `callback` 参数
    limit: 100, // 函数名最长为 100 个字符
    csrf: true,//
    whiteList: /^https?:\/\/test.com\//,//referrer 校验
};

// exports.cluster = {
//     listen: {
//         port: 7001,
//         hostname: '127.0.0.1', // 不建议设置 hostname 为 '0.0.0.0'，它将允许来自外部网络和来源的连接，请在知晓风险的情况下使用
//         // path: '/var/run/egg.sock',
//     }
// }

exports.webpack = {
    port: 9000,
    webpackConfigList: [require('../build/webpack.config.js')]
};


exports.news = {
    pageSize: 5,
    serverUrl: 'https://hacker-news.firebaseio.com/v0',
};

exports.robot = {
    ua: [
        /curl/i,
        /Baiduspider/i,
    ]
};

exports.mysql = {
    // 单数据库信息配置
    client: {
        // host
        host: '39.97.109.255',
        // 端口号
        port: '3306',
        // 用户名
        user: 'root',
        // 密码
        password: 'ldy-tianshunjy.com',
        // 数据库名
        database: 'dy_erp',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
};