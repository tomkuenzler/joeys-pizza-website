function mobilePDFHelper() {
	if ($(window).width() < 769) {
		$("#jobApp").attr("href", "docs/JoeysJobApplication.pdf");
		$("#catering").attr("href", "docs/JoeysPizzaCatering.pdf");
	}
}

window.onload = mobilePDFHelper();