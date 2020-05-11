$(".slide").slick({
	// centerMode: true,
	// centerPadding: "60px",
	slidesToShow: 2,
	prevArrow: $(".left"),
	nextArrow: $(".right"),
	responsive: [
		{
			breakpoint: 1200,
			settings: "unslick",
		},
		{
			breakpoint: 890,
			settings: "slick",
		},
		{
			breakpoint: 580,
			settings: {
				slidesToShow: 1,
			},
		},
		// {
		// 	breakpoint: 580,
		// },
	],
});
$(".slideshow").slick({
	// centerMode: true,
	// centerPadding: "60px",
	slidesToShow: 1,
	autoplay: true,
	autoplaySpeed: 4000,
});
function decideSlick() {
	if (window.screen.width >= 890) {
		$(".slide").slick("unslick");
	}
}
decideSlick();
document.querySelector(".numbers").addEventListener("click", function (e) {
	if (e.target.classList.contains("numbers__item")) {
		document.querySelector(".active").classList.remove("active");
		e.target.classList.add("active");

		$(".slideshow").slick("slickGoTo", e.target.dataset.number);
	}
});
$(".slideshow").on("afterChange", function (
	event,
	slick,
	currentSlide,
	nextSlide
) {
	document.querySelector(".active").classList.remove("active");
	document
		.querySelector(`.numbers__item[data-number="${currentSlide}"]`)
		.classList.add("active");
});
