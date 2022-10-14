import React, { useState } from "react";
import { ChakraProvider, Box, theme } from "@chakra-ui/react";
import TopBar from "./components/TopBar";
import TodoList from "./components/TodoList";
import TodoAdd from "./components/TodoAdd";
import { stat } from "fs";

export interface ITodo {
  id: number;
  text: string;
  done: boolean;
}

const todos: ITodo[] = [
  {
    id: 1,
    text: "test",
    done: false
  },
  {
    id: 2,
    text: "test sec",
    done: true
  }
];
export function App() {
  const [todo, setTodo] = useState<ITodo[]>(todos);

  const setTodos = (value: string) => {
    setTodo([
      ...todo,
      {
        id: Math.max(...todo.map((item) => item.id)) + 1,
        text: value,
        done: false
      }
    ]);
  };
  const deleteTodos = (id: number) => {
    setTodo([...todo.filter((item) => item.id !== id)]);
  };

  return (
    <ChakraProvider theme={theme}>
      <Box maxWidth="8xl" margin="auto" p={5}>
        <TopBar />
        <TodoAdd />
        <TodoList />
      </Box>
    </ChakraProvider>
  );
}
