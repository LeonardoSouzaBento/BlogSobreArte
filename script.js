let spans_resumo= [...document.querySelectorAll('#resumo span')]
spans_resumo.forEach((span)=>{
    addEventListener("click", (el)=>{
        const lei_rapida= document.getElementById('botIn')
        if(el.target==spans_resumo[1]){
            lei_rapida.style.transition= 'opacity 0.3s ease'
            lei_rapida.style.opacity='0'
        } 
        else{
            lei_rapida.style.transition= 'opacity 0.3s ease';
            lei_rapida.style.opacity='100'
        }

    })
})


//Spans
    var spans=[...document.getElementsByTagName('span')];
    spans = spans.filter(span => {
        // Remover espaços extras e comparar case-insensitivamente
        const text = span.innerHTML.trim().toLowerCase();
        return text === 'collapse_all' || text === 'expand_all';
    });
    let spans_expand = spans.filter(span => {
        const text = span.innerHTML.trim().toLowerCase();
        return text === 'expand_all';
    });

    let spans_collapse = spans.filter(span => {
        const text = span.innerHTML.trim().toLowerCase();
        return text === 'collapse_all';
    });

// Pais do spans // Animação lenta para pais
    let pais_spans= spans_expand.map(span => span.parentElement.parentElement);

    pais_spans.forEach(pai => {
        pai.style.transition = 'height 0.6s ease';
    });

    let alturaDoPai = pais_spans.map((pai,i) => {
        return {
            pai: pai, 
            altura_pai: window.getComputedStyle(pais_spans[i]).height
        };
    });

//Expandir
    spans_expand.forEach(expand => {
        expand.addEventListener('click', (event) => {
            const pai = event.target.parentElement.parentElement;  
            const alturaReal = pai.scrollHeight;
            const collapse= event.target.previousElementSibling;

            pai.style.height = `${alturaReal}px`;
            expand.style.zIndex = -1;
            collapse.style.zIndex = '0';
        });
    });

//Recolher
    spans_collapse.forEach(collapse => {
        collapse.addEventListener('click', (event) => {
            const pai = event.target.parentElement.parentElement;
            
            alturaDoPai.forEach(objeto => {
                if (objeto.pai === pai) {
                    pai.style.height = objeto.altura_pai;
                }
            });

            const expand= event.target.nextElementSibling;
            collapse.style.zIndex = -1;
            expand.style.zIndex = '0';
        });
    });

//Função de selecão das variacoes
let variacao = [...document.getElementsByClassName("variacao")];

variacao.forEach((div) => {
  div.addEventListener("click", (clicada) => {
    
    let variacoes= [...clicada.currentTarget.parentElement.children];
    variacoes.map((div) => {
     div.classList.remove("selected")
    });
    clicada.currentTarget.classList.add("selected")
    let imgs1= clicada.currentTarget.parentElement.nextElementSibling;
    let imgs2= clicada.currentTarget.parentElement.nextElementSibling.nextElementSibling;
    let imgs3= clicada.currentTarget.parentElement.nextElementSibling.nextElementSibling.nextElementSibling;

    if(clicada.currentTarget.previousElementSibling==null){
        
        imgs2.style.filter='opacity(0)'
        if(imgs2.nextElementSibling!==null){
            imgs3.style.filter='opacity(0)'
        }

        imgs2.style.display='none'
        if(imgs2.nextElementSibling!==null){
        imgs3.style.display='none'}

        imgs1.style.display='flex'
        imgs1.style.filter='opacity(1)'
    }
     //div segunda
    else if (clicada.currentTarget.previousElementSibling.previousElementSibling==null){
        imgs1.style.filter='opacity(0)'
        imgs1.style.display='none'

        if(imgs2.nextElementSibling!==null){
        imgs3.style.filter='opacity(0)'
        imgs3.style.display='none'}

        imgs2.style.display = 'flex'
        imgs2.style.filter= 'opacity(1)'
    }
    //terceira div
    else{
        imgs1.style.filter='opacity(0)'
        imgs1.style.display='none'

        imgs2.style.filter= 'opacity(0)'
        imgs2.style.display = 'none'

        imgs3.style.display='flex'
        imgs3.style.filter='opacity(1)'
    }
  });
});

//Função de troca de imagens

    document.querySelectorAll('.menor>img, .menor2>img').forEach(img=>{
        img.addEventListener('click', (clicada) => {
            const img_maior = clicada.target.parentElement.previousElementSibling.firstElementChild;
            // Apagar miniatura
            img.style.filter = 'saturate(0) opacity(0.2)';
            // depois de 0,2s, apagar a imagem menor
            setTimeout(() => {
            img_maior.style.filter = 'opacity(0.2)';
            }, 200);
        
            // depois de 0,6s, trocar, ascender imagens
            setTimeout(() => {
            // Troca
            const tempSrc = img_maior.src;
            const tempAlt = img_maior.alt;
        
            img_maior.src = img.src;
            img_maior.alt = img.alt;
        
            img.src = tempSrc;
            img.alt = tempAlt;
        
            img_maior.style.filter = 'opacity(1)';
            //ascender thum depois de 0,2s
            setTimeout(() => {
                img.style.filter = 'saturate(0) opacity(0.85)';
            }, 200);
            }, 400);
    
        });

    })

/*
Se o elemento pai dor a div maior...
transladar para baixo, e para cima, a altura proporcional menor a altura que esta sendo exibida.

//Função de rolagem para imagem altas
let imgs_altas= [...document.querySelectorAll('#cavalo, #beatles')]

imgs_altas.forEach((img)=>{ img.addEventListner("onmouse") })

imgs_altas[0].onclick = () => {
    const naturalWidth = imgs_altas[0].naturalWidth;
    const naturalHeight = imgs_altas[0].naturalHeight;

    // Largura em que a imagem está sendo exibida
    const displayedWidth = imgs_altas[0].offsetWidth;

    // Altura proporcional baseada na largura exibida
    const displayedHeight = (displayedWidth / naturalWidth) * naturalHeight;

    console.log("Altura proporcional da imagem:", displayedHeight);}
*/
