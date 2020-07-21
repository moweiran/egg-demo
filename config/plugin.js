const path = require('path');

exports.nunjucks = {
    enable: true,
    package: 'egg-view-nunjucks'
};

// exports.sequelize = {
//     enable: true,
//     package: 'egg-sequelize',
// };

exports.ua = {
    enable: true,
    path: path.join(__dirname, '../lib/plugin/egg-ua'),
};

exports.webpack = {
    enable: true,
    package: 'egg-webpack',
};

exports.mysql = {
    enable: true,
    package: 'egg-mysql',
};