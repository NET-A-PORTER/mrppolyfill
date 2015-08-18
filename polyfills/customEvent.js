// althought Microsoft implments CustomEvent, the implementation differs to webkit.



module.exports = function() {
  var ua = window.navigator.userAgent;

  if(ua.indexOf('MSIE') > -1 || ua.indexOf('Trident') > -1 || ua.indexOf('Edge') > -1) {

    CustomEvent.prototype = window.Event.prototype;
    window.CustomEvent = function( event, params ) {
        params = params || { bubbles: false, cancelable: false, detail: undefined };
        var evt = document.createEvent( 'CustomEvent' );
        evt.initCustomEvent( event, params.bubbles, params.cancelable, params.detail );
        return evt;
       };
  }

}
