module.exports = {

  attributes: {
    name: {
      type: 'string',
      size: 100,
      required: true
    },
    postcode: {
      type: 'string',
      size: 6,
      required: true
    },
    items: {
      collection: 'Item',
      via: 'shop'
    }
  }
};
