(function(){
  var app = angular.module('store', [ ]);

  app.controller('StoreController', function(){   
    this.product = gem;
  });

  var gem = {
    name: 'Dodecahedron',
    price: 2.95,
    description: 'Blue shinny stone of the southern planet Narth.',
    canPurchase: true
  };
})();
