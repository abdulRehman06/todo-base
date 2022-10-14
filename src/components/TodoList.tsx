import * as React from "react";
import { Button, Input, Flex, Checkbox, Heading } from "@chakra-ui/react";
import useStore, { I_Todo } from "../store";

function TodoList() {
  const { todos, removeTodo, updateTodo, toggleTodo } = useStore();
  return (
    <>
      <Heading>I_Todo List</Heading>
      <>
        {todos.map((todo: I_Todo) => (
          <Flex pt={2} key={todo.id}>
            <Checkbox checked={todo.done} onClick={() => toggleTodo(todo.id)} />
            <Input
              mx={2}
              value={todo.text}
              onChange={(ev) => updateTodo(todo.id, ev.target.value)}
            />
            <Button onClick={() => removeTodo(todo.id)}>Delete</Button>
          </Flex>
        ))}
      </>
    </>
  );
}

export default TodoList;
