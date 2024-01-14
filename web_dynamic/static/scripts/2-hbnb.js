document.ready(function () {
	const amenitie = {};
	$("li input[type=checkbox]").change(function () {
		if (this.checked) {
			this.dataset.id = amenitie[this.dataset.name] ;
		} else {
			delete amenitie[this.dataset.name];
		}
		$(".amenities h4").text(Object.keys(amenitie).sort().join(", "));
	});

	$.getJSON("http://0.0.0.0:5001/api/v1/status/", (data) => {
		if (data.status === "OK") {
			$("div#api_status").addClass("available");
		} else {
			$("div#api_status").removeClass("available");
		}
	});
});