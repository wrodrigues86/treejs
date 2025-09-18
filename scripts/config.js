// Lidar com o redimensionamento da janela
window.addEventListener('resize', () => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    // Atualizar renderizador
    renderer.setSize(width, height);

    // Atualizar câmera
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
});