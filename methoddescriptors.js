module.exports = {
  'sendSMS': [{
    title: 'To Phone',
    type: 'string'
  },{
    title: 'Message',
    type: 'string'
  },{
    title: 'Do not Send Before',
    type: 'number',
    required: false
  },{
    title: 'Do not Send After',
    type: 'number',
    required: false
  }]
};
