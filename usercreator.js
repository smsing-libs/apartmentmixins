function createSMSing4ApartmentUser (execlib) {
  'use strict';

  var lib = execlib.lib, 
    q = lib.q,
    qlib = lib.qlib;

  function UserMixin () {
  }
  UserMixin.prototype.destroy = function (sinkname) {
  };

  function genericSendSMSViaService (sinkname) {
    var methodname = 'sendSMSVia'+sinkname;
    var ret = function (tophone, text, notbefore, notafter, defer) {
      if (!this.__service) {
        return q.reject(new lib.Error('APARTMENT_DESTROYED', 'This apartment is already destroyed'));
      }
      qlib.promise2defer(this.__service[methodname](tophone, text, notbefore, notafter), defer);
    };
    return ret;
  };


  UserMixin.addMethods = function (klass, sinkname) {
    klass.prototype['sendSMSVia'+sinkname] = genericSendSMSViaService(sinkname);
  };

  return UserMixin;
}
module.exports = createSMSing4ApartmentUser;

