import * as React from "react";
import { Button, Input, Flex, Checkbox, Heading } from "@chakra-ui/react";
import { ITodo } from "../App";

interface ITodoList {
  todo: ITodo[];
  deleteTodo: (id: number) => void;
}
function TodoList({ todo, deleteTodo }: ITodoList) {
  return (
    <>
      <Heading>Todo List</Heading>
      <>
        {todo.map((todo) => (
          <Flex pt={2} key={todo.id}>
            <Checkbox />
            <Input mx={2} value={todo.text} />
            <Button onClick={() => deleteTodo(todo.id)}>Delete</Button>
          </Flex>
        ))}
      </>
    </>
  );
}

export default TodoList;
