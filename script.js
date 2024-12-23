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

// Pais do spans
let pais_spans= spans_expand.map(span => span.parentElement); //captura, depois operação
pais_spans.map((pai, i, arr) => { 
    if (pai.classList.contains("txt")) {
        arr.splice(i, 1, pai.parentElement);
    }
});
//estilo animação lenta para pais
pais_spans.forEach(pai => {
    pai.style.transition = 'height 0.4s ease';
});

// trios
let trios = spans_expand.map((expand, index) => {
    return {
        expand: expand,
        collapse: spans_collapse[index],
        pai: pais_spans[index], 
        altura_pai: window.getComputedStyle(pais_spans[index]).height
    };
});
console.log([trios[1].altura_pai]);

//Função de mudança de altura das divs

trios.forEach(objeto => {
    objeto.expand.addEventListener('click', () => {
        let alturaReal = objeto.pai.scrollHeight;
        objeto.pai.style.height=`${alturaReal}px`;
        objeto.expand.style.zIndex = -1;
        objeto.collapse.style.zIndex = '0';
    });
});

trios.forEach(objeto => {
    objeto.collapse.addEventListener('click', () => {
        objeto.pai.style.height= `${objeto.altura_pai}`;
        objeto.collapse.style.zIndex = -1;
        objeto.expand.style.zIndex = '0';
        console.log(alturaCSS);
    });
});


/*
let spans_expand = spans.filter((span) => span.innerHTML == 'expand_all');
let spans_collapse = spans.filter((span) => span.innerHTML == 'collapse_all');
*/
/*
OPERADOR TERNARIO
const paisCorrigidos = pai_spans.map(pai => 
    pai.classList.contains("txt") ? pai.parentElement : pai
);
*/
/*var spans=[];
for (let i = spans_all.length - 1; i >= 0; i--) {
    if (spans_all[i].innerHTML !== 'collapse_all' && spans_all[i].innerHTML !== 'expand_all') {
        spans.splice(i, 0, //elementoAtual);
    }
}
*/
