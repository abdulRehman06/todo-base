import * as React from "react";
import { Button, Input, Grid } from "@chakra-ui/react";
import useStore from "../store";

function TodoAdd() {
  const { newTodoText, addTodo, addNewTodo } = useStore();
  return (
    <Grid pt={2} templateColumns="5fr 1fr" columnGap="3">
      <Input
        value={newTodoText}
        onChange={(e) => {
          addNewTodo(e.target.value);
        }}
        placeholder="New todo"
      />
      <Button onClick={() => addTodo()}>Add I_Todo</Button>
    </Grid>
  );
}

export default TodoAdd;
