fetch("http://localhost:3000/api/cameras")
.then(res => res.json())
.then(data => {
    console.log(data);
    let l = data.length;

    for(let i = 0; i < l; i++){
        console.log(data[i])
        console.log(data[i]['id']);
        console.log(data[i]['name']);
        console.log(data[i]['description']);
        console.log(data[i]['price']);
        console.log(data[i]['imageUrl']);

        let col =  document.createElement('div');
        col.classList.add("col");

        let card = document.createElement('div');
        card.classList.add("card", "shadow-sm");

        let img = document.createElement('img');
        img.src = data[i]['imageUrl'];
        img.css = 'width:100%';
        img.css = 'height:100%';

        let cardBody = document.createElement('div');
        cardBody.classList.add("card-body");

        let cardHeader = document.createElement('h3');
        cardHeader.innerText = data[i]['name'];

        let cardText = document.createElement('p');
        cardText.classList.add("card-text");
        cardText.innerText = data[i]['description'];

        let ctaBlock = document.createElement('div');
        ctaBlock.classList.add("d-flex", "justify-content-between", "align-items-center");

        let btnGroup = document.createElement('div');
        btnGroup.classList.add("btn-group");

        let btn = document.createElement('button');
        btn.classList.add("btn", "btn-sm", "btn-outline-secondary");
        btn.innerText = "Buy";

        let price = document.createElement('small');
        price.classList.add("text-muted");
        price.innerText = '€' + data[i]['price']/100;

        ctaBlock.appendChild(btnGroup);
        btnGroup.appendChild(btn);
        ctaBlock.appendChild(price);

        cardBody.appendChild(cardHeader);
        cardBody.appendChild(cardText);
        cardBody.appendChild(ctaBlock);

        col.appendChild(card);
        card.appendChild(img);
        card.appendChild(cardBody)

        let container = document.getElementById("row");
        container.appendChild(col);
    }
})
.catch(
    function(error){ alert("Erreur : " + error);
});