class WordCount extends HTMLParagraphElement {
    constructor(){
        super();
        
        let me = this;
        function countWords(){
            if( me && me.parentNode){
                const wcParent = me.parentNode;
                const text = wcParent.innerText || wcParent.textContent;
                return text.length-1;
            }else{
                return 0;
            }
        }

        this.sayHi=function(){
            alert("Hi,React")
        }

        const count = `Words:${countWords()}`
        const shadow = this.attachShadow({
            mode:"open"
        })

        const text = document.createElement('span')
        text.textContent = count
        shadow.appendChild(text)

        const reactDiv = document.createElement('div')
        shadow.appendChild(reactDiv)

        ReactDOM.render(React.createElement("h1",{},count), reactDiv);

        setInterval(function(){
            const count = `Words:${countWords()}`
            text.textContent = count
            ReactDOM.render(React.createElement("h1",{},count), reactDiv);
        },200)


    }
}

customElements.define('word-count', WordCount, { extends: 'p' });