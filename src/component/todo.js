import React, {useState} from 'react'
import todo from "../images/todo.png"
import "../App.css";

const Todo = () => {

    const [inputData, setInputData] = useState('');
    const [items, setItems, doing] = useState([]);

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
    // move
    const Move = () =>{
       doing = setItems([...items, inputData]);
    }
    setItems(doing);

    

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

    <div className="showItems">
    {
    items.map((elem, ind) => {
        return(
            <div className="eachItem" key={ind}>
                <p className="elements"><ul><li><b>{elem}</b> 
                <i className="fa fa-trash-o" title='Delete Item'
                    onClick={() => DeleteItem(ind)}></i></li></ul></p>
                
            </div>
            )
        })
    }
</div>
    <button className = "btn" data-sm-link-text="Sending" ><span>MOVE</span></button>
    </div>
  </div>

  <div class="column">
    <div class="card">
    <div className="todolist"><h4>DOINGTO-DO-LIST</h4></div>

   
    <div className="showItems">
    {
    doing.map((elem, ind) => {
        return(
            <div className="eachItem" key={ind}>
                <p className="elements"><ul><li><b>{elem}</b> 
                <i className="fa fa-trash-o" title='Delete Item'
                    onClick={() => DeleteItem(ind)}></i></li></ul></p>
                
            </div>
            )
        })
    }
</div>
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
