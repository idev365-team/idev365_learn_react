class WordCount extends HTMLParagraphElement {
    constructor(){
        super();
        
        let me = this;
        function countWords(){
            if( me && me.parentNode){
                const wcParent = me.parentNode;
                const text = wcParent.innerText || wcParent.textContent;
                return text.length;
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

        setInterval(function(){
            const count = `Words:${countWords()}`
            text.textContent = count
        },200)


    }
}

customElements.define('word-count', WordCount, { extends: 'p' });