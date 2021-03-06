$(function() {


	// Nav Toggle
	let nav = $("#nav");
	let nav2 = $("#nav2");
	let navToggle = $("#navToggle");
	
	navToggle.on("click", function(event) {
		event.preventDefault();

		nav.toggleClass("show");
		nav2.toggleClass("show");
	});


	//Filter
	$('.filter__link').click(function(){
		$('.filter__link').removeClass("active");
		$(this).addClass("active");

		return false;
	});
	
	$(function() {
		
		var selectedClass = "";
		$(".filter__link").click(function(){

			selectedClass = $(this).attr("data-filter");

			$(".shop__item").fadeOut(100);
			$(".shop__item." + selectedClass).fadeIn(100);
		});
	});


});

//LazyLoad
document.addEventListener("DOMContentLoaded", function() {

	var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));

	if ("IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype) {

		let lazyImageObserver = new IntersectionObserver(function(entries, observer) {

			entries.forEach(function(entry) {

				if (entry.isIntersecting) {

					let lazyImage = entry.target;

					lazyImage.src = lazyImage.dataset.src;
					lazyImage.classList.remove("lazy");
					lazyImageObserver.unobserve(lazyImage);
				}
			});
		});

		lazyImages.forEach(function(lazyImage) {
			lazyImageObserver.observe(lazyImage);
		});
	}
});