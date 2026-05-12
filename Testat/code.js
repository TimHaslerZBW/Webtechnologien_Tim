window.addEventListener("load", () => {
    fetch("artikel.json")
        .then( (response) => {
            return response.json();
        })
        .then( (json) => {
            console.log(json[1].Titel);
            let htmlArticle = "";
            const div = document.getElementById("articlecontainer");
            json.forEach((element) => {
                 htmlArticle += "" +
                "<article>" +
                "<a><h2>"+ element.Titel +"</h2></a>" +
                "<h4>"+ element.Text +"</h4>"+
                "<button class='button_align_right' type='button'>Mehr Lesen...</button>" +
                "</article>"
            });
            div.innerHTML = htmlArticle;
        } )   
});

