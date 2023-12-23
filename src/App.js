import './App.css';
import {useState, useRef} from "react";

function App() {

    const [courseList, setCourseList] = useState([])
    const [newCourse, setNewCourse] = useState("")

    const inputRef = useRef();

    const handelChange = (e) => {
        console.log(e.target.value)
        setNewCourse(e.target.value)
    }
    const handelAddItem = () => {
        if (newCourse.trim().length === 0) return false;
        let newItem = [...courseList]
        newItem.push({name: newCourse, id: courseList.length + 1, is_done: false})
        setCourseList(newItem)
        setNewCourse('')
        inputRef.current.focus()

    }
    const handelDelete = (index) => {
        let copyState = [...courseList]
        copyState.splice(index, 1)
        setCourseList(copyState)
    }
    const isDoneHandeler = (index) => {
        let copyState = [...courseList]
        let item = copyState[index]
        item.is_done = true
        setCourseList(copyState)

    }


    return (
        <div style={{display: 'flex', justifyContent: 'center', textAlign: 'center'}}>

            <div style={{display: 'flex', flexDirection: 'column', gap: "6px"}}>
                <div>
                    <input onChange={handelChange} type={"text"} value={newCourse} autoFocus={true} ref={inputRef}/>
                    <button onClick={handelAddItem}> add</button>
                </div>

                {courseList.map((item, index) => (
                    <div style={{display: 'flex', alignItems: 'center', gap: '6px', justifyContent: 'center'}}
                         key={index}>
                        <p>{item.name}</p>
                        <button onClick={() => handelDelete(index)}>delete</button>
                        <button style={{color: item.is_done === true ? 'green' : 'blue'}}
                                onClick={() => isDoneHandeler(index)}>is completed
                        </button>

                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;
