Session.setDefault('resize', null);
Session.setDefault('appHeight', $(window).height());
Session.setDefault('appWidth', $(window).width());

Meteor.startup(function(){
  $(window).resize(function(evt) {
    Session.set("resize", new Date());
    Session.set("appHeight", $(window).height());
    Session.set("appWidth", $(window).width());
  });
});


Template.registerHelper('resize', function(){
  return Session.get('resize');
});
Template.registerHelper('isPortrait', function(){
  if(Session.get('appHeight') > Session.get('appWidth')){
    return true;
  }else{
    return false;
  }
});
Template.registerHelper('isLandscape', function(){
  if(Session.get('appHeight') < Session.get('appWidth')){
    return true;
  }else{
    return false;
  }
});
