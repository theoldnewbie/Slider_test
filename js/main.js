var headUrl = 'http://theoldnewbie.github.io/ajax_v1.01/';
var htmlList = ['simple1.html','simple2.html','simple3.html'];
var jsonList = ['some1.json','some2.json','some3.json'];
var imgList = ['img/Troll1.jpg','img/Troll2.jpg','img/Troll3.jpg'];

function loadHtmlFiles (element) {
	$.ajax({
		url: headUrl + element,
		success: function(data) {
			$('.main-content').append(data);
		},
		error: function(data) {
			console.error(data);
		}
	});
}

function loadJSONFiles (element) {
 $.ajax({
  dataType: 'json',
  method: 'GET',
    url: headUrl + element,
    success: function(data) {
     var wrapDiv = $('<div>');
     wrapDiv.html('<h2>' + data.title + '</h2><p>' + data.ty + '</p>');
     $('.main-content').append(wrapDiv);
    },
    error: function(data) {
     console.error(data);
    }
 });
}



function loadImgFiles (element) {
	$.ajax({
		url: headUrl + element,
		success: function(data) {
			$('.main-content').append('<img src = ' + this.url + '>');
		}
	});
}

htmlList.forEach( loadHtmlFiles );
jsonList.forEach( loadJSONFiles );
imgList.forEach( loadImgFiles );


