import './App.css';
import {useState, useRef, useEffect} from "react";
import SingleColor from "./SingleColor";
import Values from "values.js";
import {Button, Grid} from "@mui/material";
import FullName from "./FullName";


function App() {

    //////
    const [color, setColor] = useState("");
    const [err, setError] = useState(false);
    const [list, setList] = useState([]);

    function renderData() {
        try {
            let data = new Values(color);
            setList(data.all(10));
            setError(false);
            // console.log(data);
        } catch (error) {
            setError(true);
            console.log(error);
        }
    }

    useEffect(() => {
        let data = new Values("#f15025");
        setList(data.all(10));
    }, []);

    // console.log(color);

    function handleClick(e) {
        e.preventDefault();
        renderData();
    }

    /////

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
        <Grid style={{display: 'flex', justifyContent: 'center', textAlign: 'center',flexDirection:'column'}}>

            <Grid style={{display: 'flex', flexDirection: 'column', gap: "6px"}}>
                <Grid>
                    <input onChange={handelChange} type={"text"} value={newCourse} autoFocus={true} ref={inputRef} placeholder={"اسم بهم بده"}/>
                    <Button onClick={handelAddItem}> add</Button>
                </Grid>

                {courseList.map((item, index) => (
                    <Grid style={{display: 'flex', alignItems: 'center', gap: '6px', justifyContent: 'center'}}
                         key={index}>
                        <p>{item.name}</p>
                        <Button onClick={() => handelDelete(index)}>delete</Button>
                        <Button style={{color: item.is_done === true ? 'red' : 'blue'}}
                                onClick={() => isDoneHandeler(index)}>is completed
                        </Button>

                    </Grid>
                ))}

                <section>
                    <h3>Color Generator</h3>
                    <form>
                        <input
                            className={err ? "error" : "null"}
                            type="text"
                            placeholder="#f15025"
                            value={color}
                            onChange={(e) => setColor(e.target.value)}
                        />
                        <button onClick={handleClick} type="submit">
                            submit
                        </button>
                    </form>
                </section>
                <section style={{display:'flex',gap:8,margin:5}}>
                    {list.map((item, index) => {
                        return <SingleColor key={index} item={item}/>;
                    })}
                </section>
            </Grid>

            <FullName/>
        </Grid>
    );
}

export default App;
