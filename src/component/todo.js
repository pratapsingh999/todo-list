import React, {useState} from 'react'
import todo from "../images/todo.png"
import "../App.css";

const Todo = () => {

    const [inputData, setInputData] = useState('');
    const [items, setItems] = useState([]);

    const addItem = () =>{
        if(!inputData){
            
        }else{
            setItems([...items, inputData]);
            setInputData('')
        }
    }

    // delete items
    const DeleteItem =(id) =>{
        console.log(id);
        const updateditems = items.filter((elem, ind) =>{
            return ind !== id;
        });
        setItems(updateditems);
    }
    // REMO ALL
    const removeAll =() => {
        setItems([]);
    }

  return (
    <> 
<div className="main-div">     
    <div className="chil-div">    
        <figure >
            <img className='img' src={todo} alt="todologo" />
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

    <button className = "btn"><span>MOVE</span></button>
    </div>
  </div>

  <div class="column">
    <div class="card">
    <div className="todolist"><h4>DOINGTO-DO-LIST</h4></div>

    <button className ="btn"><span>MOVE</span></button>
    </div>
  </div>
  
  <div class="column">
    <div class="card">
    <div className="todolist"><h4>DONE TO-DO-LIST</h4></div>
    <button className = "btn"><span>DONE</span></button>
    </div>
  </div>
  </div>
  </div>

        {/* Delete Item */}        
<div className="showItems">
    {
    items.map((elem, ind) => {
        return(
            <div className="eachItem" key={ind}>
                <h3>{elem}</h3>
                <i className="fa fa-trash-o" title='Delete Item'
                    onClick={() => DeleteItem(ind)}></i>
            </div>
            )
        })
    }
</div>

{/* removeAll */}
<div className="showItems">
    <button className = "btn effect04" data-sm-link-text="Remove All" onClick={removeAll}>
        <span>CHECK LIST</span></button>
</div>

</div>

</>
  ) 
}

export default Todo



// backgroung colour
//for center 

/* 
        <div className="container">
  <div className="w3-panel w3-card"><p>card-1</p></div>
  <div className="w3-panel w3-card-2" ><p>card-2</p></div>
  <div className="w3-panel w3-card-4"><p>card-3</p></div>
</div>              */


      /* <div className="boxs" >
  <div className="card-body">
    <h5 className="card-title">TO-DO title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="/" className="btn btn-primary">Go somewhere</a>
    <button className = "btn effect04" >MOVE</button>
  </div>
</div> */