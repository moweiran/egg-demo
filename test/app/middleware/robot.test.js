describe('test/app/middleware/robot.test.js', () => {
    it('should block robot', () => {
        return app.httpRequest()
            .get('/')
            .set('User-Agent', "Baiduspider")
            .expect(403);
    });
});