// adds cls1 and removes cls2
function swap_class(el, cls1, cls2) {
  console.log('swapping classes: ', cls1, cls2);
  $(el).addClass(cls1);
  $(el).removeClass(cls2);
}

$('#toggle-list').click(function() {
  console.log('toggle-list');
  swap_class('#layout', 'layout--list', 'layout--collage');
});

$('#toggle-collage').click(function() {
  console.log('toggle-layout');
  swap_class('#layout', 'layout--collage', 'layout--list').bind(this)();
});