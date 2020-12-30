
/*=============tab============*/
try{
var tabs = document.querySelectorAll(".mh-tab-style-1 .mh-tabs ul li");
var tabs_wrap = document.querySelectorAll(".mh-tab-style-1 .mh-tab-content .mh-tab-wrap");
tabs.forEach(function(tab, tab_index){
	tab.addEventListener("click", function(){
		tabs.forEach(function(tab){
			tab.classList.remove("active");
		});
		
		tab.classList.add("active");
		
		tabs_wrap.forEach(function(content, content_index){
			if(content_index == tab_index){
					content.style.display = "block";
			}
			else{
				content.style.display = "none";
			}
		});
	});
});
}catch{}
/*==========/Tab===========*/

/*=========Accordion==========*/
try{
var acc = document.getElementsByClassName("mh-accordion");
var i;

for(i = 0; i < acc.length; i++){
	acc[i].addEventListener("click", function(){
		this.classList.toggle("mh-accordion-active");
		var panel = this.nextElementSibling;
		/*if(panel.style.display === "block"){
			panel.style.display = "none";
		}else{
			panel.style.display = "block";
		}*/
		if(panel.style.maxHeight){
			panel.style.maxHeight = null;
		} else{
			panel.style.maxHeight = panel.scrollHeight + "px";
		}
	});
};
}catch{}
/*==========/Accordion===========*/
try{
const mh_range_slider = document.querySelector(".mh-range-slider input");
const value = document.querySelector(".mh-range-style-1 .mh-range-value");
value.textContent = mh_range_slider.value;
mh_range_slider.oninput = (function(){
	value.textContent = this.value;
});
}catch{}
/*===================*/
try{
let mh_navbar_style_1_toggle_button = document.querySelector(".mh-navbar-style-1-body .mh-toggle-button");
let mh_navbar_style_1 = document.querySelector("nav.mh-navbar-style-1");
mh_navbar_style_1_toggle_button.onclick = function (e) {
    mh_navbar_style_1.classList.toggle("mh-nav-collapse");
}
}catch{}
/*====================*/
/*===========image filter===============*/
try{
(function( $ ) {
	$(document).ready(function(){
		$(".mh-image-filter-button").click(function(){
			var image_filter_name = $(this).attr("mh-image-data-filter");
			if(image_filter_name == "all"){
				$(".mh-image-filter").show("2000");
			}
			else{
				$(".mh-image-filter").not("."+image_filter_name).hide("2000");
				$(".mh-image-filter").filter("."+image_filter_name).show("2000");
			}
		});
		$(".mh-image-filter-navigation a").click(function(){
			$(this).addClass("active").siblings().removeClass("active")
		});
	});
}(jQuery));
}catch{}
/*=========Slider========*

var posicion = 0;
function left() {
	posicion--;
	if(posicion < 1 ){
		posicion = $('.mh-contenedor').children('.mh-banner').length;
	};
	$(".mh-contenedor").children(".mh-banner").not('.active').css({
		'left' : '100%'
	});
	$('.mh-contenedor').children('.active').animate({
		'left' : '-100%'
	});
	$(".mh-contenedor").children(".mh-banner").each(function(index, elemento){
		if(posicion - 1 == index){
			$(elemento).addClass('active').animate({
				'left' : 0
			});
		}else{
			$(elemento).removeClass('active');
		};
	});
};
function right() {
	posicion++;
	if(posicion > $('.mh-contenedor').children('.mh-banner').length){
		posicion = 1;
	};
	$(".mh-contenedor").children(".mh-banner").not('.active').css({
		'left' : '-100%'
	});
	$('.mh-contenedor').children('.active').animate({
		'left' : '100%'
	});
	$(".mh-contenedor").children(".mh-banner").each(function(index, elemento){
		if(posicion - 1 == index){
			$(elemento).addClass('active').animate({
				'left' : 0
			});
		}else{
			$(elemento).removeClass('active');
		};
	});
};
function altoConetendor(){
	$('.mh-contenedor').css({
		'height' : $('.mh-contenedor').width() * 0.5
	});
};
$(window).resize(altoConetendor);
$(document).ready(function() {
	right();
	altoConetendor();
});

/*==========/Slider=========*/
/*
$(() => {
  {
    let progressbar = $('#progressbar');
    let max = progressbar.attr('max');
    let time = (1000 / max) * 5;
    let value = progressbar.val();
    const loading = () => {
      value += 1;
      progressbar.val(value);
      $('.progress-value').html(value +'%');
      if (value == max) {
        clearInterval(animate);
      }
    };
    const animate = setInterval(() => loading(), time);
  };
});
*/
/*====================================*/

/*===========progress bar===========*/

try{
// function makesvg(percentage, inner_text=""){

// 	var abs_percentage = Math.abs(percentage).toString();
// 	var percentage_str = percentage.toString();
// 	var classes = "";
  
// 	if(percentage < 0){
// 	  classes = "danger-stroke circle-chart__circle--negative";
// 	} else if(percentage > 0 && percentage <= 30){
// 	  classes = "warning-stroke";
// 	} else{
// 	  classes = "success-stroke";
// 	};
  
//    var svg = '<svg class="circle-chart" viewbox="0 0 33.83098862 33.83098862" xmlns="http://www.w3.org/2000/svg">'
// 	   + '<circle class="circle-chart__background" cx="16.9" cy="16.9" r="15.9" />'
// 	   + '<circle class="circle-chart__circle '+classes+'"'
// 	   + 'stroke-dasharray="'+ abs_percentage+',100"    cx="16.9" cy="16.9" r="15.9" />'
// 	   + '<g class="circle-chart__info">'
// 	   + '   <text class="circle-chart__percent" x="17.9" y="15.5">'+percentage_str+'%</text>';
  
// 	if(inner_text){
// 	  svg += '<text class="circle-chart__subline" x="16.91549431" y="22">'+inner_text+'</text>'
// 	};
	
// 	svg += ' </g></svg>';
	
// 	return svg
//   };
  
//   (function($){
  
// 	  $.fn.circlechart = function() {
// 		  this.each(function() {
// 			  var percentage = $(this).data("percentage");
// 			  var inner_text = $(this).text();
// 			  $(this).html(makesvg(percentage, inner_text));
// 		  });
// 		  return this;
// 	  };
  
//   }(jQuery));
function makesvg(percentage, inner_text=""){

	var abs_percentage = Math.abs(percentage).toString();
	var percentage_str = percentage.toString();
	var classes = "";
	
	if(percentage < 0){
	  classes = "mh-danger-stroke mh-circle-chart__circle--negative";
	} else if(percentage > 0 && percentage <= 30){
	  classes = "mh-warning-stroke";
	} else{
	  classes = "mh-success-stroke";
	};
	
	var svg = '<svg class="mh-circle-chart" viewbox="0 0 33.83098862 33.83098862" xmlns="http://www.w3.org/2000/svg">'
	   + '<circle class="mh-circle-chart__background" cx="16.9" cy="16.9" r="15.9" />'
	   + '<circle class="mh-circle-chart__circle '+classes+'"'
	   + 'stroke-dasharray="'+ abs_percentage+',100"    cx="16.9" cy="16.9" r="15.9" />'
	   + '<g class="mh-circle-chart__info">'
	   + '   <text class="mh-circle-chart__percent" x="17.9" y="15.5">'+percentage_str+'%</text>';
	
	if(inner_text){
	  svg += '<text class="mh-circle-chart__subline" x="16.91549431" y="22">'+inner_text+'</text>'
	};
	
	svg += ' </g></svg>';
	
	return svg
	};
	
	(function( $ ) {
	
	  $.fn.circlechart = function() {
		  this.each(function() {
			  var percentage = $(this).data("percentage");
			  var inner_text = $(this).text();
			  $(this).html(makesvg(percentage, inner_text));
		  });
		  return this;
	  };
	
	}( jQuery ));
}catch{}
