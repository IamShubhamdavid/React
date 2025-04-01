//CDN =content delivery network

const element=React.createElement("h1",{id:"first",className:"Rahul",style:{backgroundColor:"blue", fontSize:"30px", color:"pink"}},"Hello coder army");
const element2=React.createElement("h1",{id:"second",className:"Rahul",style:{backgroundColor:"yellow", fontSize:"30px", color:"pink"}},"Kaise ho aap sblog");

//ReactDOM.render(element,document.getElementById('root'));
const div1=React.createElement('dic',{},[element,element2]);

const root=ReactDOM.createRoot(document.getElementById('root'));
//root.render(element);
// element wla part delete ho jayega kyuki wo bas latest data ko store ya phir render krta h 
//root.render(element2);
root.render(div1);

// {/* <div>
//     <h1>Hello coder army</h1>
//     <h2>Maja aaya mujhe</h2>
// </div> */}

// {/* <div>
//     <div>
//         <h1>
//             <p>aur bhai kaisa hai</p>
//         </h1>
//     </div>
// </div> */}

// JSX 

