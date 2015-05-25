(function(){
  var app = angular.module('store', [ ]);

  app.controller('StoreController', function(){   
    this.products = gems;
  });

  var gems = [ 
    {
      name: 'Dodecahedron',
      price: 2.95,
      description: 'Blue shinny stone of the southern planet Narth.',
      canPurchase: true,
      soldOut: false,
    },
    {
      name: 'Neptune Diamond',
      price: 42.95,
      description: 'The clearest diamond in the galaxy.',
      canPurchase: true,
      soldOut: false,
    }
  ];
})();
