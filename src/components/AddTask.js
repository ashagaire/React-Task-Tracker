import { useState } from "react"
import moment from "moment";
const now= moment().format('YYYY-MM-DD');
const AddTask = ({onAdd}) => {
    
    const [formData, setFormData] = useState(
        {
        text: "", 
          day: "" , 
          time:"",
          reminder: false
        }
    )
    function handleChange(event) {
        const {name, value, type, checked} = event.target
          setFormData(prevFormData => {
              return {
                  ...prevFormData,
                  
                  [name]: type === "checkbox" ? checked : value
              }
          })
      }
    function handleSubmit(event) {
        event.preventDefault()
        
        if(!formData.text){
            alert('Please add a task')
            return
        }
        if(!formData.day){
            alert('Please select date')
            return
        }

        onAdd(formData)
        setFormData(
            {
                text: "", 
            day: "" , 
            time:"",
            reminder: false
            })
      }   

  return (
    <form className='add-form' onSubmit={handleSubmit}>
        <div className='form-control' >
            <label>Task</label>
            <textarea type='text' 
            name="text"
            maxLength="200"
            placeholder='Add Task' 
            value={formData.text}
            onChange={handleChange}
            />
        </div>
        <div className="div-row">
            <div className='form-control' >
                <label>Day</label>
                <input type='date' 
                name='day'
                placeholder='Add Day' 
                min={now}
                value={formData.day}
                onChange={handleChange}
                />
            </div>
            <div className='form-control' >
                <label>Time</label>
                <input type='time' 
                name='time'
                placeholder='Add Time' 
                value={formData.time}
                onChange={handleChange}
                />
            </div>
        </div>
        <div className='form-control form-control-check' >
            <label>Make reminder</label>
            <input type='checkbox' 
            name="reminder"
            checked={formData.reminder}
            onChange={handleChange}
             />
        </div>
        <input className="btn btn-block" type='submit' value="Save task"/>
    </form>
  )
}

export default AddTask