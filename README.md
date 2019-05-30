## clinical-auto-resizing

Adds resizing hooks to your application to trigger UI element resizes.  

======================================
#### Installation

````
meteor add clinical:auto-resizing
````


======================================
#### API  

````js
Session.get('resize');
Session.get('appHeight');
Session.get('appWidth');
````

````html
{{#if isPortrait}}{{/if}}
{{#if isLandscape}}{{/if}}
````


======================================
#### Auto Refresh Templates on Browser Resize

Simply put ``<div class="hidden">{{resize}}</div>`` in any template, and your template will get rerendered when the browser window is resized.

````html
<template name="examplePage">
  <div class="hidden">{{resize}}</div>
  <div id="examplePage">
    <!-- stuff -->
  </div>
</template>
````

======================================
#### Manually Refresh Templates  

Alternatively, you can trigger it by manually setting the resize session variable.

````js
Session.set('resize', new Date());
````

======================================
#### Custom Layout Logic  

You can also specify locations of div by using ``Session.get('appWidth')`` and ``Session.get('appHeight')``.
````js
Template.appLayout.layout = function(){
  Session.set('customDivHeight', $('#innerPanel').height() + 80);
  if(Session.get('appWidth') > 1636){
    Session.set('customDivLeft', (Session.get('appWidth') - 1536) * 0.5);
  }else if(Session.get('appWidth') > 768){
    Session.set('customDivLeft', (Session.get('appWidth') - 768) * 0.5);
  }else{
    Session.set('customDivLeft', 0);
  }
}
````

======================================
#### Detecting Portrait and Landscape  

````html
<template name="examplePage">
  <div id="examplePage">
    {{#if isPortrait}}
      <!-- show an image of portrait -->
    {{/if}}
    {{#if isLandscape}}
      <!-- show an image of landscape -->
    {{/if}}
    <!-- show stuff on both -->
  </div>
</template>
````


======================================
#### Dynamic Styling

````html

````


======================================
#### Licensing  

MIT.  Use as you will.  Disrupt the current system.  It needs all the help it can get.
