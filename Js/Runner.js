class Runner{
    constructor(x,y,w,h){
      this.  runAnime = loadAnimation("Images/st.png","Images/nd.png","Images/rd.png","Images/fth.png","Images/fith.png","Images/sth.png");
       this.r2 = loadAnimation("Images/nd.png");
       this.r3 = loadAnimation("Images/rd.png");
       this.r6 = loadAnimation("Images/sth.png");

        this.body = createSprite(x,y,w,h);
        this.body.addAnimation("animation", this.runAnime);
        this.body.addAnimation("jumping", this.r3);
        this.body.addAnimation("pause", this.r6);
        this.body.addAnimation("pause2", this.r2);
        this.body.setCollider("rectangle",-10,25,145,180);

        this.dist = null;
    }// constructor
}