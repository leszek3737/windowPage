"use strict";
const load = {
	font: () => {
		$('head').append('<link href="https://use.fontawesome.com/releases/v5.0.6/css/all.css" rel="stylesheet">');
		$('head').append('<link href="https://fonts.googleapis.com/css?family=Muli:400,700,800&amp;subset=latin-ext" rel="stylesheet">');
	},
	logo: () => {
		$('.mainNavBar__logo').html('<img src="./img/domwill-logo.png" alt="Logo DPS" class="mainNavBar__logo--img">');
	},
	map: () => {
		$('.info__maps').html('<iframe title="Mapa" class="info__maps--map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1249.2361223668147!2d22.58897565834921!3d51.228797094897594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472257023f988519%3A0x3baada60bef41172!2sKosmonaut%C3%B3w+78%2C+20-358+Lublin!5e0!3m2!1spl!2spl!4v1518270203604" frameborder="0" style="border:0" allowfullscreen></iframe>');
	},
};
const zoom = () => {
	$(".mainNavBar__menu--zoomPlus").click(function () {
		$("html").attr(
			"data-font-size",
			parseInt($("html").attr("data-font-size")) + 5
		);
		updateGlobalFontSize();
	});

	$(".mainNavBar__menu--zoomMinus").click(function () {
		$("html").attr(
			"data-font-size",
			parseInt($("html").attr("data-font-size")) - 5
		);
		updateGlobalFontSize();
	});
	const updateGlobalFontSize = () => {
		//"Hack because of problem with crossbrowser compatibility in CSS attr"
		$("html").css(
			"font-size",
			parseInt($("html").attr("data-font-size")) + "%"
		);
	};
};
const hover = () => {
	if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
		$(".boxArticle__item").hover(function () {
			$(this).addClass("active");
		}, function () {
			$(this).removeClass("active");
		});
	}

};
$(document).ready(function () {
	zoom();
	hover();
	load.font();
	load.logo();
});

$(window).on("load", function () {
	load.map();
});
