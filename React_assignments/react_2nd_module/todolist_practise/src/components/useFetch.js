import { useEffect } from "react";
import { useState } from "react";

export const useFetch = (apiMethod) => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    // setTimeout(
    //   () =>
    // fetch("https://jsonplaceholder.typicode.com/todos")
    //   .then((res) => {
    //     if (!res.ok) {
    //       throw Error("Could not fetch the todo list");
    //     }
    //     return res.json();
    //   })
    //         .then((response) => {
    //           setTodos(response.slice(0, 15));
    //           setLoading(false);
    //           setError(null);
    //         })
    //         .catch((err) => {
    //           setLoading(false);
    //           setError(err.message);
    //         }),
    //     1000
    //   );
    // }, []);
    // return {
    //   todos,
    //   loading,
    //   error
    // };
    const fetchData = async () => {
      try {
        const result = await apiMethod();
        setTodos(result.slice(0, 20));
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { todos, loading, error };
};
