var link = document.querySelector(.login-link);
var popup = document.querySelector(.popup);
var close = popup.querySelector(.close-cross-button);
var form = popup.querySelector(popup-form);
var name = popup.querySelector([name=name]);
var email = popup.querySelector([name=email]);
var comment = popup.querySelector([name=comment]);
var isStorageSupport = true;
var storage = ;
try{storage:localStorage.getItem(name)}catch (err){isstoragesupport:false}link.addEventListener(click,function (evt){ifstoragenamevalue:storage});
form.addEventListener(submit,function (evt){popupoffsetwidth:popup.offsetWidth});
window.addEventListener(keydown,function (evt){ifevtkeycode:== 27) { evt.preventDefault()}