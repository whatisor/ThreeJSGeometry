var geometryList = [
	"BoxBufferGeometry",
	"BoxGeometry",
	"CircleBufferGeometry",
	"CircleGeometry",
	"ConeBufferGeometry",
	"ConeGeometry",
	"CylinderBufferGeometry",
	"CylinderGeometry",
	"DodecahedronBufferGeometry",
	"DodecahedronGeometry",
	"EdgesGeometry",
	"ExtrudeBufferGeometry",
	"ExtrudeGeometry",
	"IcosahedronBufferGeometry",
	"IcosahedronGeometry",
	"LatheBufferGeometry",
	"LatheGeometry",
	"OctahedronBufferGeometry",
	"OctahedronGeometry",
	"ParametricBufferGeometry",
	"ParametricGeometry",
	"PlaneBufferGeometry",
	"PlaneGeometry",
	"PolyhedronBufferGeometry",
	"PolyhedronGeometry",
	"RingBufferGeometry",
	"RingGeometry",
	"ShapeBufferGeometry",
	"ShapeGeometry",
	"SphereBufferGeometry",
	"SphereGeometry",
	"TetrahedronBufferGeometry",
	"TetrahedronGeometry",
	"TextBufferGeometry",
	"TextGeometry",
	"TorusBufferGeometry",
	"TorusGeometry",
	"TorusKnotBufferGeometry",
	"TorusKnotGeometry",
	"TubeBufferGeometry",
	"TubeGeometry",
	"WireframeGeometry"
];
var url = 'https://threejs.org/docs/scenes/geometry-browser.html#'

function isVisible(ele) {
	var rect = ele.getBoundingClientRect();
	return rect.top > -rect.height && rect.top < window.innerHeight;
}
window.onload = function() {

	geometryList.map(type => {
		var child = document.createElement("iframe");
		container.appendChild(child);
		if (!isVisible(child))
			child.src = "";
		else {
			child.src = url + type;
		}
		child.id = type;
	})

	container.onscroll = function() {
		geometryList.map(type => {
			var child = document.getElementById(type);
			if (!isVisible(child))
				child.src = "";
			else {
				child.src = url + type;
			}
		})
	}

	document.getElementById("search").oninput = function() {
		var filters = geometryList.filter(type => type.indexOf(this.value) >= 0);
		if (filters.length < 1) {
			this.style.color = "red";
			return;
		} else {
			this.style.color = "black"
		}
		var elmnt = document.getElementById(filters[0]);
		elmnt.scrollIntoView(true);
		container.onscroll();
		//window.scrollTo(0, elmnt.offsetTop);

	}

}