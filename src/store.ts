import create from "zustand";

// Standard interface and functions
export interface I_Todo {
  id: number;
  text: string;
  done: boolean;
}

export const updateTodo = (
  todos: I_Todo[],
  id: number,
  text: string
): I_Todo[] =>
  todos.map((todo) => ({
    ...todo,
    text: todo.id === id ? text : todo.text
  }));

export const toggleTodo = (todos: I_Todo[], id: number): I_Todo[] =>
  todos.map((todo) => ({
    ...todo,
    done: todo.id === id ? !todo.done : todo.done
  }));

export const removeTodo = (todos: I_Todo[], id: number): I_Todo[] =>
  todos.filter((todo) => todo.id !== id);

export const addTodo = (todos: I_Todo[], text: string): I_Todo[] => [
  ...todos,
  {
    id: Math.max(0, Math.max(...todos.map(({ id }) => id))) + 1,
    text,
    done: false
  }
];

interface store {
  todos: I_Todo[];
  newTodoText: string;
  addNewTodo: (value: string) => void;
  addTodo: () => void;
  removeTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
  updateTodo: (id: number, text: string) => void;
  loadTods: (todos: I_Todo[]) => void;
}

const useTodoStore = create<store>((set) => ({
  todos: [],
  newTodoText: "",

  addNewTodo: (text: string) => {
    set((state: store) => ({ ...state, newTodoText: text }));
  },
  addTodo: () => {
    set((state: store) => ({
      ...state,
      todos: addTodo(state.todos, state.newTodoText)
    }));
  },

  removeTodo: (id: number) => {
    set((state: store) => ({
      ...state,
      todos: removeTodo(state.todos, id)
    }));
  },
  toggleTodo: (id: number) => {
    set((state: store) => ({
      ...state,
      todos: toggleTodo(state.todos, id)
    }));
  },
  updateTodo: (id: number, text: string) => {
    set((state: store) => ({
      ...state,
      todos: updateTodo(state.todos, id, text)
    }));
  },
  loadTods: (todos) => {
    set((state: store) => ({
      ...state,
      todos
    }));
  }
}));

export default useTodoStore;
