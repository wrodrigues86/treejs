// Criar a cena
let scene = new THREE.Scene();
const renderer = new THREE.WebGLRenderer();
let camera;

const cenario = () => {

    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);

    // Criar uma câmera
    camera = new THREE.PerspectiveCamera(
        75,                                     // Campo de visão
        window.innerWidth / window.innerHeight, // Proporção
        0.1,                                    // Plano de recorte próximo
        1000                                    // Plano de recorte distante
    );
    camera.position.z = 5;

    // Criar o renderizador
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
};

const cubo = () => {

    const geometryChao = new THREE.BoxGeometry(1, 1, 1);
    const chao = new THREE.Mesh(geometryChao, new THREE.MeshBasicMaterial({ color: 0x00ff00 }));
    scene.add(chao);
    
    // Criar um cubo
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    const materialEsfera = new THREE.MeshStandardMaterial({
        color: 0x0088ff,       // Cor azul
        roughness: 0.5,        // Um pouco brilhante
        metalness: 0.5,        // Um pouco metálico
    });

    // Adicionar luz direcional (como o sol)
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    const sphereGeometry = new THREE.SphereGeometry(1, 32, 34);
    const sphere = new THREE.Mesh(sphereGeometry, materialEsfera);
    sphere.position.x = 0;
    sphere.position.y = 2;
    sphere.position.z = -5;
    scene.add(sphere);

    // Loop de animação
    function animate() {
        requestAnimationFrame(animate);

        // Rotacionar o cubo
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;

        sphere.rotation.x += 0.01;
        sphere.rotation.y += 0.01;
        sphere.position.z += 0.01;



        renderer.render(scene, camera);
    }
    animate();
};

const materialReflexao = () => {

    // Material padrão com reflexão
    const material = new THREE.MeshStandardMaterial({
        color: 0x0088ff,       // Cor azul
        roughness: 0.5,        // Um pouco brilhante
        metalness: 0.5,        // Um pouco metálico
    });

    // Material Phong para superfícies brilhantes simples
    const phongMaterial = new THREE.MeshPhongMaterial({
        color: 0xff0000,       // Cor vermelha
        shininess: 100,        // Muito brilhante
        specular: 0x111111     // Cor do brilho especular
    });

    // Adicionar luz ambiente
    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);

    // Adicionar luz direcional (como o sol)
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    // Esfera
    const sphereGeometry = new THREE.SphereGeometry(1, 32, 32);
    const sphere = new THREE.Mesh(sphereGeometry, material);
    sphere.position.x = -3;
    scene.add(sphere);

    // Cilindro
    const cylinderGeometry = new THREE.CylinderGeometry(1, 1, 2, 32);
    const cylinder = new THREE.Mesh(cylinderGeometry, material);
    cylinder.position.x = 0;
    scene.add(cylinder);

    // Toróide (donut)
    const torusGeometry = new THREE.TorusGeometry(0.8, 0.3, 16, 100);
    const torus = new THREE.Mesh(torusGeometry, material);
    torus.position.x = 3;
    scene.add(torus);
};

cenario();
cubo();
//materialReflexao();