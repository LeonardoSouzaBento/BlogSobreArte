// Seleciona todas as imagens
   const images = document.querySelectorAll('.images > img');

   images.forEach(image => {
       // Cria uma div contêiner
       const wrapper = document.createElement('div');
       wrapper.style.border = '1px solid black'; // Define a borda
       wrapper.style.display = 'inline-block'; // Garante o ajuste ao tamanho da imagem
       wrapper.style.padding = '5px'; // Espaçamento opcional para estética

       // Insere a div antes da imagem no DOM
       image.parentNode.insertBefore(wrapper, image);

       // Move a imagem para dentro da nova div
       wrapper.appendChild(image);
   });