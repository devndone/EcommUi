
module.exports = {
  
  init: function() {
    localStorage.clear();
    localStorage.setItem('product', JSON.stringify([
      {
        id: '0011001',
        name: 'Dev Robo',
        image: 'profile_img.jpg',
        description: 'Alien Origin....Samajheka :)',
        variants: [
          {
            sku: '123123',
            type: 'Mission Man',
            price: 50000000,
            inventory: 4

          },
          {
            sku: '123124',
            type: 'Soft Pack Man',
            price: 4500000,
            inventory: 2
          },
          {
            sku: '1231235',
            type: 'Hard Pack Man',
            price: 6000000,
            inventory: 3
          }
        ]
      }
    ]));
  }

};
