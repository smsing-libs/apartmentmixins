function createSMSing4ApartmentService (execlib) {
  'use strict';

  var lib = execlib.lib, 
    q = lib.q,
    qlib = lib.qlib;

  function ServiceMixin () {
  }
  ServiceMixin.prototype.destroy = function (sinkname) {
  };

  function genericSendSMSThruHotel (sinkname) {
    var methodname = 'sendSMSVia'+sinkname;
    var ret = function (tophone, text, notbefore, notafter) {
      if (!this.__hotel) {
        return q.reject(new lib.Error('HOTEL_DESTROYED', 'The hotel instance of this apartment is already destroyed'));
      }
      return this.__hotel[methodname](tophone, text, notbefore, notafter);
    };
    return ret;
  };

  ServiceMixin.addMethods = function (klass, sinkname) {
    klass.prototype['sendSMSVia'+sinkname] = genericSendSMSThruHotel(sinkname);
  };

  return ServiceMixin;
}
module.exports = createSMSing4ApartmentService;
