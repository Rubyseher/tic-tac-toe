import {Button,ButtonGroup,button} from 'react-bootstrap';
import { faPalette ,faUser,faUsers} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React ,{useState} from 'react';
import './App.css';

function App() {
   const [array, setarray] = useState([" "," "," "," "," "," "," "," "," "]);
   const [result, setresult] = useState(' ');
   const [colourPicker, setcolourPicker] = useState('#1055e0');
   const [colourPicker2, setcolourPicker2] = useState('#0ea5b3');
   const [p1, setp1] = useState('X');
   const [p2, setp2] = useState('O');
   const [disable, setdisable] = useState(false);
   const [scoreX, setscoreX] = useState(0);
   const [scoreO, setscoreO] = useState(0);
   const [player2, setplayer2] = useState(' ');

var alternate=0;

   const choice = (i) =>{
      setdisable(true)
      if(array[i]===" "){
         setarray([...array.slice(0, i),array[i] =p1,...array.slice(i + 1)])
         score()
         if(result===" " && player2!=="yes"){
            if(array.indexOf(" ")!==-1)
            compchoice()
         }
      } else setdisable(true)
   };

   const choice2 = (i) =>{
      setdisable(true)
      if(array[i]===" "){
         setarray([...array.slice(0, i),array[i] =p2,...array.slice(i + 1)])
         score()
      } else setdisable(true)
   }

   const  compchoice= () =>{
         var array2=[]
         array.forEach((item, a) => {
            if (item===" ")
               array2.push(a)
         });
         if(array2.length===0) score()
         var i=Math.floor(Math.random() * array2.length);
         var j=array2[i]
         setarray([...array.slice(0, j),array[j] =p2,...array.slice(j + 1)])
         score()
   };

   const score= () =>{
      var a,r=" ";
      for(a=0;a<=2;++a){
         if((array[a]===array[a+3])&&(array[a]===array[a+6])){
            if(array[a]===p1||array[a]===p2){
               r=array[a]
               break;
            }
         }
      }
      for(a=0;a<=6;a+=3){
         if((array[a]===array[a+1])&&(array[a]===array[a+2])){
            if(array[a]===p1||array[a]===p2){
               r=array[a]
               break;
            }
         }
      }
      if((array[0]===array[4]&&array[0]===array[8])||
         (array[2]===array[4]&&array[2]===array[6])){
            if(array[4]===p1||array[4]===p2){
               r=array[4]
            }
      }
      if(r!==" "){
         var s
         setresult(r+" WINS")
         if(r==="X") {
            s=scoreX +1
            setscoreX(s)
         }
         else {
            s=scoreO +1
            setscoreO(s)
         }
      }
      else if(array.indexOf(" ")===-1)
         setresult("TIE")
   };

   const  boxGrid= (i) =>{
      switch(i){
         case 0:return {borderLeft: 0,borderTop:0}
         case 1:return {borderTop:0}
         case 2:return {borderRight: 0,borderTop:0}
         case 3:return {borderLeft: 0}
         case 4:return {}
         case 5:return {borderRight:0}
         case 6:return {borderLeft: 0,borderBottom:0}
         case 7:return {borderBottom: 0}
         case 8:return {borderRight: 0,borderBottom:0}
      }
   }

     return (
       <div className="App">
         <div className="App-header">Tic Tack Toe</div>
         <p>
         <button  className="Pallete" style={{background:"#1055e0"}} type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
             <FontAwesomeIcon icon={faPalette } size="lg" style={{color:"white"}}/>
         </button>
         </p>
         <div class="collapse" id="collapseExample" style={{position:"absolute"}}>
           <div class="CircleBody">
               <button className="Circle"  onClick={() => setcolourPicker("#bf0906")} style={{background:"#bf0906"}}></button><br/><br/>
               <button className="Circle" onClick={() => setcolourPicker("#249900")} style={{background:"#249900"}}></button><br/><br/>
               <button className="Circle" onClick={() => setcolourPicker("#e09900")} style={{background:"#e09900"}}></button><br/><br/>
               <button className="Circle" onClick={() => setcolourPicker("#5d0da3")} style={{background:"#5d0da3"}}></button><br/><br/>
           </div>
         </div>

         <p>
         <button  className="Circle"  style={{background:"#0ea5b3",float:"right"}} type="button" data-toggle="collapse" data-target="#collapseExample2">
             <FontAwesomeIcon icon={faUser} size="lg" style={{color:"white"}}/>
         </button>
         </p>
         <div class="collapse" id="collapseExample2"  style={{position:"absolute"}}>
               <button className="Circle" class="Multiplayer" onClick={() => setplayer2("yes") } style={{background:"#bf0906",marginleft:"50px"}}><FontAwesomeIcon icon={faUsers} size="lg" style={{color:"white"}}/></button><br/><br/>
         </div>

         {!disable?
            <ButtonGroup>
               <button type="button" class="btn btn-outline-primary" style={{fontSize:30}} onClick={()=>{setp1("X");setp2("O");setdisable(true);setcolourPicker("#1055e0");setcolourPicker2("#0ea5b3");}} disabled={disable} >
               X </button>
               <button type="button" class="btn btn-outline-info" style={{fontSize:30}} onClick={()=>{setp1("O");setp2("X");setdisable(true);setcolourPicker("#0ea5b3");setcolourPicker2("#1055e0");}} disabled={disable} >
               O </button>
            </ButtonGroup>:null
         }
         <br/><br/>

         <ButtonGroup>
            <br/><button type="button" class="btn btn-light btn-lg" style={{fontSize:25,color:"#1055e0",borderBottom: "3px solid #1055e0"}}> X : &nbsp; &nbsp; &nbsp; &nbsp; {scoreX}</button>
            <button type="button" class="btn btn-light" style={{fontSize:25,color:"#0ea5b3",borderBottom: "3px solid #0ea5b3"}}>O : &nbsp; &nbsp; &nbsp; &nbsp; {scoreO}</button>
         </ButtonGroup>
         {console.log(alternate),
            console.log(array)}
         <br/><br/><br/>
         {
            array.map((item,index)=>
               <div style={{display:'inline'}}>
                  <div className="Box" onClick={()=>{if(result===" " && player2==="yes"){alternate % 2===0?choice():choice2() }; alternate = alternate+ 1;}} style={boxGrid(index)}>
                     <div className="text" style={p1===item?{color:colourPicker}:{color:colourPicker2}}>{item}</div>
                  </div>
                  <br style={index%3===2?{display:'block'}:{display:'none'}}/>
               </div>
            )
         }
         <br/>
         {console.log(alternate)}

         { result!==" "?<div class="alert alert-success" style={{fontSize:25}} role="alert">{result}</div>:null }
         <Button variant="outline-primary" onClick={()=>{setarray([" "," "," "," "," "," "," "," "," "]); setresult(" ");}}>Play Again</Button>{' '}
         <Button variant="outline-info" onClick={() => window.location.reload(false)}>Restart Game</Button>{' '}
       </div>
     );

}

export default App;
