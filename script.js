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
    pai.style.transition = 'height 0.4s ease';
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

