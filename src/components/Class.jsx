import React,{useState} from 'react'
import '../scss/class.css'
import {Link} from 'react-router-dom'

export default function Class() {
    const [createclass, setCreateclass] = useState('');
    const [editclass, setEditclass] = useState('');
    const addclass=()=>{
        createclass===''?setCreateclass('true'):setCreateclass(''); 
    }
    const updateclass=()=>{
        editclass===''?setEditclass('true'):setEditclass(''); 
    }
    return (
       <div id="class">
     <div className="class_section-1">     
        <div className='class_section-1_h1'>Teacher Panel</div>
          <div className='class_section-1_h2'>Class List</div>
          <div className='class_section-1_h3'>Manage classes here</div>
          <div className='class_dashboard'>
              <div className='class-heading'>
                  <span>Sr.No.</span>
                  <span>Class</span>
                  <span>Manage</span>
              </div>
             <div className="class-info">
                 <span>1</span>
                 <Link to='/classdetails'><span>Test_Class</span></Link>
                 <span onClick={updateclass}>Edit</span>
                 <span>Delete</span>
             </div>
           
{ editclass&&
        <form className="edit_modal">
        <div>Edit Class Name</div>
      <input placeholder='Test_Class' type="text" />
      <button type='submit'>Update</button>
        </form>
    }        
          </div>
    </div> 
    <div className="class_section-2">
        <div className='add' onClick={addclass}>
        Add New Class
        </div>
    {
      createclass&&
      <form className="add_modal">
      <div>Create a new class</div>
      <input placeholder='Class Name' type="text" />
      <button type='submit'>Create Class</button>
      </form>  
      }    
        
        </div>   
       </div>
    )
}
