let spans = [...document.getElementsByTagName('span')];
spans.forEach((element, index) => {
    if (element.innerHTML !== "expand_all") {
        spans.splice(index, 1);
    }
});


