(function(){'use strict';function e(a){this.a=document.createElement("div");this.a.setAttribute("aria-hidden","true");this.a.appendChild(document.createTextNode(a));this.b=document.createElement("span");this.c=document.createElement("span");this.f=document.createElement("span");this.e=document.createElement("span");this.d=-1;this.b.style.cssText="display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;";this.c.style.cssText="display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;";
this.e.style.cssText="display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;";this.f.style.cssText="display:inline-block;width:200%;height:200%;";this.b.appendChild(this.f);this.c.appendChild(this.e);this.a.appendChild(this.b);this.a.appendChild(this.c)}function r(a,b,c){a.a.style.cssText="min-width:20px;min-height:20px;display:inline-block;visibility:hidden;position:absolute;width:auto;margin:0;padding:0;top:0;white-space:nowrap;font-size:300px;font-family:"+b+";"+c}
function s(a){var b=a.a.offsetWidth,c=b+100;a.e.style.width=c+"px";a.c.scrollLeft=c;a.b.scrollLeft=a.b.scrollWidth+100;return a.d!==b?(a.d=b,!0):!1}function t(a,b){a.b.addEventListener("scroll",function(){s(a)&&null!==a.a.parentNode&&b(a.d)},!1);a.c.addEventListener("scroll",function(){s(a)&&null!==a.a.parentNode&&b(a.d)},!1);s(a)};function u(a,b){this.a=a;this.e=b.style||"normal";this.f=b.variant||"normal";this.g=b.weight||"normal";this.d=b.stretch||"stretch";this.b=b.featureSettings||"normal"}var v=null;
u.prototype.c=function(a){a=a||"BESbswy";var b="font-style:"+this.e+";font-variant:"+this.f+";font-weight:"+this.g+";font-stretch:"+this.d+";font-feature-settings:"+this.b+";-moz-font-feature-settings:"+this.b+";-webkit-font-feature-settings:"+this.b+";",c=document.createElement("div"),k=new e(a),l=new e(a),m=new e(a),f=-1,d=-1,g=-1,n=-1,p=-1,q=-1,h=this;r(k,"sans-serif",b);r(l,"serif",b);r(m,"monospace",b);c.appendChild(k.a);c.appendChild(l.a);c.appendChild(m.a);document.body.appendChild(c);n=k.a.offsetWidth;
p=l.a.offsetWidth;q=m.a.offsetWidth;return new Promise(function(a,x){function w(){if(-1!==f&&-1!==d&&-1!==g&&f===d&&d===g){if(null===v){var b=/AppleWeb[kK]it\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);v=!!b&&(536>parseInt(b[1],10)||536===parseInt(b[1],10)&&11>=parseInt(b[2],10))}v?f===n&&d===n&&g===n&&f===p&&d===p&&g===p&&f===q&&d===q&&g===q||a(h):a(h)}}setTimeout(function(){document.body.removeChild(c);x(h)},3E3);t(k,function(a){f=a;w()});r(k,h.a+",sans-serif",b);t(l,function(a){d=
a;w()});r(l,h.a+",serif",b);t(m,function(a){g=a;w()});r(m,h.a+",monospace",b)})};window.FontFaceObserver=u;window.FontFaceObserver.prototype.check=u.prototype.c;}());
