function createSMSingForApartmentLib (execlib) {
  'use strict';
  var lib = execlib.lib;

  var mylib = {};

  function methodDescriptorsFor (sinkname) {
    var genmd = require('./methoddescriptors');
    var ret = {}, _ret = ret;
    lib.traverseShallow(genmd, function (desc, name) {
      _ret[name+'Via'+sinkname] = desc;
    });
    _ret = null;
    sinkname = null;
    return ret;
  }

  mylib.Service = require('./servicecreator')(execlib);
  mylib.methoddescriptors = {
    user: methodDescriptorsFor
  };
  mylib.User = require('./usercreator')(execlib);

  return mylib;
}
module.exports = createSMSingForApartmentLib;
