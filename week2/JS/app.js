function hello()
{
 var sBrowser; sUsrAg = navigator.userAgent;
 if(sUsAg.indexOf("chrome") > -1) {sBrowser = "Google Chrome";}
 else if(sUsAg.indexOf("Safari") > -1) {sBrowser = "Apple Safari";}
 else if(sUsAg.indexOf("Opera") > -1) {sBrowser = "Mozilla Firefox";}
 else if(sUsAg.indexOf("MSIE") > -1) {sBrowser = "Microsoft Internet Explorer";}
 alert("You are using: " + sBrowser);
}