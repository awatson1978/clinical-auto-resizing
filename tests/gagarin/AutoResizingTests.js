describe('clinical:auto-resizing', function () {
  var server = meteor();
  var client = browser(server);

  it('Autoresizing session variables should exist on the client', function () {
    return client.execute(function () {
      expect(Session.get('resize')).to.exist;
    });
  });
  it('Height/Width session variables should exist on the client', function () {
    return client.execute(function () {
      expect(Session.get('appHeight')).to.exist;
      expect(Session.get('appWidth')).to.exist;
    });
  });

});
