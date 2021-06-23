//Click on Menu link keep focus on perticular area of associated page

var url = window.location.href;
var id = url.substring(url.lastIndexOf('#') + 1);
var getId = document.getElementById(id);

if(getId !== null ) 
var position = $(`#${id}`).offset().top;
$("body, html").animate({
	scrollTop: position - 95
});   