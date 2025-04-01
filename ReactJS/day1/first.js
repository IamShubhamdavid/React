//Create element through JS

//style={fontSize:"30px", backgroundColor:"blue",color:"red"}

// React:Object
//ReactDOM:Object

const React={
    createElement:function(tag,styles,children){
        const element=document.createElement(tag);

        if(typeof children==='object'){
            for(let val of children)
                element.append(val);
        }
        else
        element.innerText=children;
        for(let key in styles){
            //JS ka variable h key isliye hmlog usko dot se access nhi kr skte h we will use [] bracket
            element.style[key]=styles[key];
        }
        return element;
    }
}

//DOM manipulation 
const ReactDOM={
    render:function(element,root){
        root.append(element);
    }
}

const header1=React.createElement('h1',{fontSize:"30px", backgroundColor:"blue",color:"red"},"Hello dost");
const header2=React.createElement('h2',{fontSize:"20px", backgroundColor:"green",color:"pink"},"Kya haal hai");

const li1=React.createElement('li',{},"HTML");
const li2=React.createElement('li',{},"CSS");
const li3=React.createElement('li',{},"JS");

const Ul=React.createElement('ul',{fontSize:"20px", backgroundColor:"green",color:"pink"},[li1,li2,li3]);


//Unordered list
//HTML
//CSS
//JS



// const header1= document.createElement('h1');
// header1.innerText="Hello coder army";
// header1.style.backgroundColor="blue";
// header1.style.fontSize="30px";
// header1.style.color="white";

// const header2= document.createElement('h2');
// header2.innerText="Kaise ho aap sblog";
// header2.style.backgroundColor="red";
// header2.style.fontSize="30px";
// header2.style.color="white";


// const root=document.getElementById('root');
// root.append(header1);
// root.append(header2);

ReactDOM.render(header1,document.getElementById('root'));
ReactDOM.render(header2,document.getElementById('root'));
ReactDOM.render(Ul,document.getElementById('root'));

