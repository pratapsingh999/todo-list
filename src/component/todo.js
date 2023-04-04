import React, {useState,useEffect} from 'react'
import logo from "../images/todo.png"
import "../App.css";

const Todo = () => {

   
    const [inputData, setInputData] = useState('');
    const [items, setItems] = useState([{keyname:"PRATAP singh thakur",status:"todo"},{keyname:"AKASH singh",status:"doing"},{keyname:"ADITYA singh",status:"done"}]);
//     let todo = [{keyname:"pratap singh",status:"todo"}];
// let doing = [{keyname:"akash singh",status:"doing"}];
// let done = [{keyname:"aditya singh",status:"done"}];
// useEffect(() =>{ status()},[items])
    const addItem = () =>{
        if(!inputData){
            
        }else{
            setItems([...items, {keyname:inputData,status:"todo"}]);
            setInputData('')
        }
    }

// defaultitems
// const [todo, settodo] = useState([]);
let todo = [];
// const [doing, setdoing] = useState([]);
let doing = [];
// const [done, setdone] = useState([]);
let done = [];   
const status =() => {
//  console.log("ab")
   for(var i in items ){
    switch (items[i].status) {
      case "todo":
        // settodo([...todo, items[i]]);
        todo.push(items[i]);
       break;
      case "doing":
        // setdoing([...doing, items[i]]);
        doing.push(items[i]);
        break;
      case "done":
        // setdone([...done, items[i]]);
        done.push(items[i]);
        break;
        default :
    }
   }
}
status();

 

// const statuss =(id) =>{
//   console.log(id);
//   const defaultitems = items.filter((keyname, instatusd) =>{
//       return 
//   });
//   setItems(defaultitems);
// }
// statuss()


    // delete items
    const DeleteItem =(id) =>{
        console.log(id);
        const updateditems = items.filter((elem, ind) =>{
            return ind !== id;
        });
        setItems(updateditems);
    }

    // move
    // const MoveItems = () =>{
    // //    doing = setItems([...items, inputData]);
    // todo = doing;
    // }
    // MoveItems();

    

    // REMO ALL
    const removeAll =() => {

        setItems([]);
    }

  return (
    <> 
<div className="main-div">     
    <div className="chil-div">    
        <figure >
            <img className='img' src={logo} alt="todologo" />
        <figcaption><h1 className="texts">Add your list hear </h1></figcaption>
        </figure>

        {/* addItems */}
        <div className="addItems">
            <input type="text" placeholder="Add Items..."
            value={inputData} onChange={(e) =>setInputData(e.target.value)}/>
            <i className="fa fa-plus" title='Add Item' onClick={addItem}></i>  
        </div>
        </div>


{/* card */}

<div class="row">
  <div class="col-sm-4 mb-3 mb-sm-0">
  <div class="column">
    <div class="card">
    <div className="todolist"><h4>TO-DO-LIST</h4></div>

    <div className="showItems">
    {
    todo.map((elem, ind) => {
        return(
            <div className="eachItem" key={ind}>
                <p className="elements"><ul><li><b>{elem.keyname}</b>
                <i className="fa fa-trash-o delete" title='Delete Item'
                    onClick={() => DeleteItem(ind)} ></i></li></ul></p>
                
            </div>
            )
        })
    }
</div>

{/* <div className="showItems">
    {
    todo.map((elem, ind) => {
        return(
            <div className="eachItem" key={ind}>
                <p className="elements"><ul><li><b>{elem.keyname}</b>
                <button className = "btn" title='move items' onClick={() => MoveItems(ind)}><span>MOVE</span></button>
               </li></ul></p>
                
            </div>
            )
        })
    }
    </div> */}
    
    </div>
    {/* <button className = "btn" title='move items' onClick={(addItem) => MoveItems()}><span>MOVE</span></button> */}
  </div>

  <div class="column">
    <div class="card">
    <div className="todolist"><h4>DOINGTO-DO-LIST</h4></div>

   
    <div className="showItems">
    {
    doing.map((elem, ind) => {
        return(
            <div className="eachItem" key={ind}>
                <p className="elements"><ul><li><b>{elem.keyname}</b> <button className = "btn"><span>MOVE</span></button>
                <i className="fa fa-trash-o delete" title='Delete Item'
                    onClick={() => DeleteItem(ind)} ></i></li></ul></p>
                
            </div>
            )
        })
    }
</div>
    </div>
  </div>
  
  <div class="column">
    <div class="card">
    <div className="todolist"><h4>DONE TO-DO-LIST</h4></div>
    
    <div className="showItems">
    {
    done.map((elem, ind) => {
        return(
            <div className="eachItem" key={ind}>
                <p className="elements"><ul><li><b>{elem.keyname}</b> <button className = "btn"><span>MOVE</span></button>
                <i className="fa fa-trash-o delete" title='Delete Item'
                    onClick={() => DeleteItem(ind)} ></i></li></ul></p>
                
            </div>
            )
        })
    }
</div>
    
    </div>
  </div>
  </div>
  </div>


        {/* Delete Item */}        


{/* removeAll */}
<div className="showItem">
    <button className = "btn" data-sm-link-text="Remove All" onClick={removeAll}>
        <span>Remove All</span></button>
</div>

</div>
{/* </div> */}
</>
  ) 
}

export default Todo



// backgroung colour
//for center 
// {keyname:"akash singh",status:"doing"},{keyname:"AADITYA singh",status:"done"}
// {elem.keyname}