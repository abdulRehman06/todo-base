import * as React from "react";
import { Button, Input, Grid } from "@chakra-ui/react";

interface ITodoAdd {
  setTodo: (value: string) => void;
}
function TodoAdd({ setTodo }: ITodoAdd) {
  const [todoText, setTodoText] = React.useState("");
  return (
    <Grid pt={2} templateColumns="5fr 1fr" columnGap="3">
      <Input
        value={todoText}
        onChange={(e) => {
          setTodoText(e.target.value);
        }}
        placeholder="New todo"
      />
      <Button onClick={() => setTodo(todoText)}>Add Todo</Button>
    </Grid>
  );
}

export default TodoAdd;
