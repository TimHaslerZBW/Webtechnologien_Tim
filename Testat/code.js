const articleContainerClicked = (e) => {
    let element = e.target;
    while (element.tagName !== "ARTICLE") {
        if (!element.parentElement) {
            return;
        } else {
            element = element.parentElement;
        }
    }
    console.log(element.tagName);
    window.location.assign("artikeldetails.html?id="+element.getAttribute("xid"));
}

window.addEventListener("load", () => {
    fetch("artikel.json")
        .then( (response) => {
            return response.json();
        })
        .then( (json) => {
            /*console.log(json[1].Titel);*/
            let htmlArticle = "";
            let indexarticle = 0;
            const div = document.getElementById("articlecontainer");
            json.forEach((element) => {
                 htmlArticle += "" +
                '<article xid="' + indexarticle + '">' +
                "<a><h2>"+ element.Titel +"</h2></a>" +
                "<h4>"+ element.Text +"</h4>"+
                "<button class='button_align_right' type='button'>Mehr Lesen...</button>" +
                "</article>"

                indexarticle ++;
            });
            div.innerHTML = htmlArticle;
        } )
    const articleContainer = document.getElementById("articlecontainer");
    articleContainer?.addEventListener("click",articleContainerClicked);
});

