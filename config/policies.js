
module.exports.policies = {

  '*': true,

  'AuthtestController': {
    '*': 'isAuthenticated'
  },

};
