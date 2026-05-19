window.addEventListener("load", () => {
    fetch("artikel.json")
        .then( (response) => {
            return response.json();
        })
        .then( (json) => {
            let htmlArticledetails = "";
            let indexarticle = 0;
            const params = new URLSearchParams(window.location.search);
            const articleindex = params.get("id");
            console.log(articleindex);
            console.log(json[articleindex].Text);

            console.log(json);

            const div = document.getElementById("articledetails");

            htmlArticledetails = "<header><h1>Testat von Tim</h1><h2>" + json[articleindex].Titel +"</h2>" +
            "<div><h4>" + json[articleindex].Text + "</h4></div></header>";

            div.innerHTML = htmlArticledetails;
        } )
});