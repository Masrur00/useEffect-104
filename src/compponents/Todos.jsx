import { useEffect, useState } from "react"

export const Todos = () => {
  const [todos,setTodos] = useState([]);
  useEffect(()=> {
      getData();
  },[]);

  const getData = async () => {
      const data = await fetch("https://vitejs-vite-n9j3er--8080.local.webcontainer.io/posts")
      .then(d => d.json());
      console.log(data);
      setTodos(data);
  }
   return <div>
     <ul>
    {
      todos.map(t => 
        <li> {t.title} </li>
        )
    }
    </ul>
   </div>
}