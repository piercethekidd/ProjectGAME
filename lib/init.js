var geometry = new THREE.BoxGeometry(1, 1, 1);

var cubeMaterials = [
	new THREE.MeshLambertMaterial({color: 0xFFFFFF}), //right
	new THREE.MeshLambertMaterial({color: 0xFFFF00}), //left
	new THREE.MeshLambertMaterial({color: 0x00FF00}), //top
	new THREE.MeshLambertMaterial({color: 0x0000FF}), //bottom
	new THREE.MeshLambertMaterial({color: 0xFF0000}), //front
	new THREE.MeshLambertMaterial({color: 0xFFA500}), //back
];

var material = new THREE.MeshFaceMaterial(cubeMaterials);

// Mesh takes up the geometry of the object and the material to be used as parameters
var cube1 = new THREE.Mesh(geometry, material);
cube1.position.set(0, 0, 0);
var cube2 = new THREE.Mesh(geometry, material);
cube2.position.set(1, 0, 0);
var cube3 = new THREE.Mesh(geometry, material);
cube3.position.set(-1, 0, 0);
var cube4 = new THREE.Mesh(geometry, material);
cube4.position.set(0, -1, 0);
var cube5 = new THREE.Mesh(geometry, material);
cube5.position.set(0, 1, 0);
var cube6 = new THREE.Mesh(geometry, material);
cube6.position.set(-1, -1, 0);
var cube7 = new THREE.Mesh(geometry, material);
cube7.position.set(1, 1, 0);
var cube8 = new THREE.Mesh(geometry, material);
cube8.position.set(-1, 1, 0);
var cube9 = new THREE.Mesh(geometry, material);
cube9.position.set(1, -1, 0);

var cube10 = new THREE.Mesh(geometry, material);
cube10.position.set(0, 0, 1);
var cube11 = new THREE.Mesh(geometry, material);
cube11.position.set(1, 0, 1);
var cube12 = new THREE.Mesh(geometry, material);
cube12.position.set(-1, 0, 1);
var cube13 = new THREE.Mesh(geometry, material);
cube13.position.set(0, -1, 1);
var cube14 = new THREE.Mesh(geometry, material);
cube14.position.set(0, 1, 1);
var cube15 = new THREE.Mesh(geometry, material);
cube15.position.set(-1, -1, 1);
var cube16 = new THREE.Mesh(geometry, material);
cube16.position.set(1, 1, 1);
var cube17 = new THREE.Mesh(geometry, material);
cube17.position.set(-1, 1, 1);
var cube18 = new THREE.Mesh(geometry, material);
cube18.position.set(1, -1, 1);

var cube19 = new THREE.Mesh(geometry, material);
cube19.position.set(0, 0, -1);
var cube20 = new THREE.Mesh(geometry, material);
cube20.position.set(1, 0, -1);
var cube21 = new THREE.Mesh(geometry, material);
cube21.position.set(-1, 0, -1);
var cube22 = new THREE.Mesh(geometry, material);
cube22.position.set(0, -1, -1);
var cube23 = new THREE.Mesh(geometry, material);
cube23.position.set(0, 1, -1);
var cube24 = new THREE.Mesh(geometry, material);
cube24.position.set(-1, -1, -1);
var cube25 = new THREE.Mesh(geometry, material);
cube25.position.set(1, 1, -1);
var cube26 = new THREE.Mesh(geometry, material);
cube26.position.set(-1, 1, -1);
var cube27 = new THREE.Mesh(geometry, material);
cube27.position.set(1, -1, -1);


var group = new THREE.Group();
group.add(cube1)
group.add(cube2)
group.add(cube3)
group.add(cube4)
group.add(cube5)
group.add(cube6)
group.add(cube7)
group.add(cube8)
group.add(cube9)

var group2 = new THREE.Group();
group2.add(cube10);
group2.add(cube11);
group2.add(cube12);
group2.add(cube13);
group2.add(cube14);
group2.add(cube15);
group2.add(cube16);
group2.add(cube17);
group2.add(cube18);

var group3 = new THREE.Group();
group3.add(cube19);
group3.add(cube20);
group3.add(cube21);
group3.add(cube22);
group3.add(cube23);
group3.add(cube24);
group3.add(cube25);
group3.add(cube26);
group3.add(cube27);