import { useEffect, useState } from 'react';

export const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState([]);
  const [p,setPage]  = useState(1);
  useEffect(() => {
    getData();    
  }, [p]);

  const getData = async () => {
    const data = await fetch(
      `https://vitejs-vite-n9j3er--8080.local.webcontainer.io/posts?_page=${p}&_limit=3`
    ).then((d) => d.json());
    setTodos(data);
  };
  return (
    <div>
      <input
        onChange={(e) => setText(e.target.value)}
        type="text"
        placeholder="enter todo"
      />
      <button
        onClick={() => {
          const payload = {
            title: text,
            status: false,
          };
          fetch(
            'https://vitejs-vite-n9j3er--8080.local.webcontainer.io/posts',
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(payload),
            }
          ).then(() => {
            getData();
          });
        }}
      >
        Add Todo
      </button>
      <ul>
        {todos.map((t) => (
          <li key={t.id}> {t.title} </li>
        ))}
      </ul>

      <button onClick={ ()=> {
          setPage(p - 1);
      }} >Prev</button>
      <button onClick={ ()=> {
          setPage(p + 1);
      }}>Next</button>
    </div>
  );
};
