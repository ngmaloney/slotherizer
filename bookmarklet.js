sloth_image = function() {
  var imgs = ['http://i.imgur.com/IPpZ8Si.jpg',
  'http://i.imgur.com/sgJIojh.jpg',
  'http://i.imgur.com/dpiEb47.jpg',
  'http://i.imgur.com/68bgPvq.jpg',
  'http://i.imgur.com/oEFSdtQ.jpg'
  ]
  var idx = Math.floor(Math.random() * (imgs.length));
  return imgs[idx];
}
for (var i = 0; i < document.getElementsByTagName("img").length; i++) {
  document.getElementsByTagName("img")[i].src = sloth_image();
}
