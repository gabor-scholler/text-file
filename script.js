function download() {
	var data = document.getElementById("data").value;
	var filename = document.getElementById("filename").value;
	var c = document.createElement("a");
	c.download = filename;

	var t = new Blob([data], {
	type: "text/plain"
	});
	c.href = window.URL.createObjectURL(t);
	c.click();
}
