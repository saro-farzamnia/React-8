import { useEffect, useState } from "react"
import Counter from "./Counter";

const Post = () => {
    const [data,setData]=useState([]);
    const [error,setError]=useState(false);
    const [id,setId]=useState("");

    useEffect(()=>{
        const controller = new AbortController();
            const fetchData = async () => {
                try {
                    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{signal:controller.signal});
                    const req = await res.json();
                    setData(req)
                    console.log(req)
                } catch (error) {
                    setError(error)
                }
                console.log("useEffect Run")
            }
        fetchData()
        return ()=>{
        console.log("cleanup")
        controller.abort();
    }
    },[id])

                        // with button
    // useEffect(()=>{
    //         const fetchData = async () => {
    //             try {
    //                 const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    //                 const req = await res.json();
    //                 setData(req)
    //                 console.log(req)
    //             } catch (error) {
    //                 setError(error)
    //             }
    //             console.log("useEffect Run")
    //         }
    //     fetchData()
    // },[])
    // const sendHandler = async()=>{
    //     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    //     const req = await res.json();
    //     console.log(req)
    // }
  return (
    <div>
      {id > 100 && <Counter/>}
      {!data.lenght && !error && <h1>Loading...</h1>}
      <input type="text" placeholder="Enter Id" value={id} onChange={e=>setId(e.target.value)} />
      {/* <button onClick={sendHandler}>Send</button> */}
      {/* <ul>
        {
            data.map(user=><li key={user.id}>{user.title}</li>)
        }
        {
            error && <h1>somthing went rong</h1>
        }
      </ul> */}

        {/* //unmount & cleanup function*/}
    </div>
  )
}

export default Post
