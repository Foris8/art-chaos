class Example{
    constructor(ele){
        this.ele = ele;
        this.ele.innerHTML = "<h1>I'm ALIVE!!!</h1>";

        this.ele.addEventListener("click",this.handleClick.bind(this));
    }

    handleClick(){
        this.ele.children[0].innerHTML = "Ouch I am gonna die!";
    }
}

export default Example;