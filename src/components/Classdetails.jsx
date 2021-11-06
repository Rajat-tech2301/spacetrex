import React,{useState} from 'react'
import '../scss/class.css'

export default function Classdetails() {
    const [createclass, setCreateclass] = useState('');
    const [newstudent, setNewstudent] = useState('');
    const [updatestudent, setUpdatestudent] = useState('')
    const addclass=()=>{
        createclass===''?setCreateclass('true'):setCreateclass(''); 
    }
    const addstudent=()=>{
        newstudent===""?setNewstudent('true'):setNewstudent('');
    }
    const editstudent=()=>{
        updatestudent===""?setUpdatestudent('true'):setUpdatestudent('');
    }
  
    return (
       <div id="class">
     <div className="class_section-1">     
        <div className='class_section-1_h1'>Teacher Panel</div>
          <div className='class_section-1_h2'>Test_Class 1</div>
          <div className='class_section-1_h3'>Manage Test_class 1 details here</div>
          <div className='class_dashboard'>
              <div className='class-heading'>
                  <span>Sr.No.</span>
                  <span>Student ID</span>
                  <span>Manage student list</span>
              </div>
             <div className="class-info">
                 <span>1</span>
                 <span>Student 1</span>
                 <span onClick={editstudent}>Edit</span>
                 <span>Delete</span>
             </div>
           
{ updatestudent&&
        <form className="edit_modal">
        <div>Edit Student ID</div>
      <input placeholder='Student 1' type="text" />
      <button type='submit'>Update</button>
        </form>
    }   

 {/* Delete modal */}
 
    {/* <div className="delete_modal">
        <div>Delete Message</div>
        <div>Are you sure you want to delete Student 1 from Test_class1?</div>
        <div>
            <button>Delete</button>
            <button>Cancel</button>
        </div>
    </div> */}
      
          </div>
    </div> 
    <div className="class_section-2">
        <div className='add' onClick={addclass}>
        Add New Class
        </div>
        <div className='add' onClick={addstudent}>
        Add New Student
        </div>
    {
      createclass&&
      <form className="add_modal">
      <div>Create a new class</div>
      <input placeholder='Class Name' type="text" />
      <button type='submit'>Create Class</button>
      </form>  
      }    

  {/* overlaps to createclass modal ! */}
    {
      newstudent&&
      <form className="add_modal ">
      <div>Test_Class 1: Add student ID</div>
      <input placeholder='Student ID' type="text" />
      <button type='submit'>Add Student</button>
      </form>  
      }   

     {/* <div className="success_modal">
     <div>Test_Class 1: Add student ID</div>
     <div>Student ID successfully added to Test_Class 1</div>
     </div>      */}
        
        </div>   
       </div>
    )
}
