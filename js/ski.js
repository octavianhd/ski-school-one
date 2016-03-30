
$(document).ready(function(){
	//carousel
	$("#carouselDiv").load("template.html #myCarousel");
	//jumbotron
	$("#jumbotronDiv").load("template.html #myJumbotron");
	//header nav
	$("#headerNavDiv").load("template.html #myHeaderNav");
	//footer nav
	$("#footerNavDiv").load("template.html #myFooterNav");
	//pager
	//$(".pagerDiv").load("template.html .myPagerDiv");
});

 
/* scroll up */
$(function () {
        $.scrollUp({
          scrollText: '',    
        });
      });
