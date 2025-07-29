//virtual dom react mein use nhi hota. --> ye baat bilkul glt h
//
//
//
//
//. black screen visible due to 60fps(frame per second)
//
//
/*document.body.bg-color="red"
 document.body.padding="10px"
 document.body.font="5px"

 // React ye teeno kaam ko ek sath krta hai
 ye batch update bana kr store krta h phir execute krta h 

 JavaScript ek time pr ek instruction  chlega 

 ye teeno instruction 1/60 second mein chlega

 Reflow: Position pe aayega, size kitna hoga
 Repaint: pixel color ko attach krna hai


 Virtual dom jisko React khud banata h jab code mein hm kuch change krte h 
 old dom and Real dom 

 setCount(count+1)  ye increase nhi krega value ko
 setCount((count)=>scount+1)  ye increase krega value ko


pehle ye data tha Milk, Sugar, Chai. --> now  ye  samosa, milk,sugar,chai
Compare krna hai

 Ideal update: samosa wla node create karo , starting mein add kar do 
 baaki node ko ek ek position peche khiska do

 ye expensive hai -->
 Update: Purane first node destroy kro, aur new node samosa daalo
 sugar wale node ko bhi hatao, milk wla node hai usko attach kro
 chai node ko destroy kro, aur suagr wla node hai usko attach krlo
 chai node ko phirse create kro

 Key: array ka index mat banana 

*/