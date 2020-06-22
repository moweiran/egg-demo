module.exports = app => {
    const { STRING, INTEGER, DATE } = app.Sequelize;
    const Blog = app.module.define('', {
        BlogId: { type: INTEGER, primaryKey: true, autoIncrement: true },
        Url: STRING,
        readtime: INTEGER
    });
    return Blog;
}