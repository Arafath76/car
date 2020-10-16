class Form{
    constructor()
    {}
    display(){
        var title = createElement('h2');
        title.html("CAR RACING GAME");
        title.position(550,0);
        
        var input=createInput("name");
        var button=createButton("next");
        var greeting =createElement('h3');

        input.position(550,160);
        button.position(700,200);
        button.mousePressed(function(){
        input.hide();
        button.hide();
        var name =input.value();

        playerCount = playerCount + 1;
        player.update(name);
        player.updateCount(playerCount);

        greeting.html("welcome "+ name);
        greeting.position(550,160);
        })
    }
}