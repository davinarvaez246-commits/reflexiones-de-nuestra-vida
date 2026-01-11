/* ===== SCROLL REVEAL ===== */
const reveals = document.querySelectorAll(".reveal");

function revelar(){
  reveals.forEach(el=>{
    const top = el.getBoundingClientRect().top;
    if(top < window.innerHeight - 100){
      el.classList.add("active");
    }
  });
}
window.addEventListener("scroll", revelar);
revelar();

/* ===== COMENTARIOS ===== */
const lista = document.getElementById("listaComentarios");
const input = document.getElementById("inputComentario");

let comentarios = JSON.parse(localStorage.getItem("comentarios")) || [];
comentarios.forEach(c=>{
  const li = document.createElement("li");
  li.textContent = c;
  lista.appendChild(li);
});

function agregarComentario(){
  if(input.value.trim() === "") return;
  comentarios.push(input.value);
  localStorage.setItem("comentarios", JSON.stringify(comentarios));
  const li = document.createElement("li");
  li.textContent = input.value;
  lista.appendChild(li);
  input.value = "";
}

/* ===== MÚSICA ===== */
const musica = document.getElementById("musica");
const musicBtn = document.getElementById("musicBtn");
let tocando = false;

musicBtn.onclick = ()=>{
  tocando ? musica.pause() : musica.play();
  tocando = !tocando;
};

/* ===== MODO NOCHE/DÍA ===== */
const themeBtn = document.getElementById("themeBtn");
themeBtn.onclick = ()=>{
  document.body.classList.toggle("light");
};

/* ===== ANIMAL 3D ===== */
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(60, innerWidth/innerHeight, 0.1, 1000);
camera.position.set(0,1.5,4);

const renderer = new THREE.WebGLRenderer({alpha:true, antialias:true});
renderer.setSize(innerWidth, innerHeight);
document.getElementById("escena3d").appendChild(renderer.domElement);

const luz1 = new THREE.DirectionalLight(0xffffff,1.2);
luz1.position.set(5,5,5);
scene.add(luz1);

scene.add(new THREE.AmbientLight(0xffccaa,.6));

const loader = new THREE.GLTFLoader();
loader.load(
  "https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Lion/glTF/Lion.gltf",
  gltf=>{
    const animal = gltf.scene;
    animal.scale.set(1.2,1.2,1.2);
    animal.position.y = -1;
    scene.add(animal);

    function animar(){
      animal.rotation.y += 0.002;
      animal.position.y = -1 + Math.sin(Date.now()*0.001)*0.05;
      renderer.render(scene,camera);
      requestAnimationFrame(animar);
    }
    animar();
  }
);

addEventListener("resize",()=>{
  camera.aspect = innerWidth/innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(innerWidth, innerHeight);
});
