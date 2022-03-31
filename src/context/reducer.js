export const initialState = {
  todos: [
    {
      id: 1,
      content: "İlk todo :)",
    },
    {
      id: 2,
      content: "ikinci todo :)",
    },
    {
      id: 3,
      content: "üçüncü todo :)",
    },
  ],
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [action.payload, ...state.todos],
      };

    case "REMOVE_TODO":
      return {
        ...state,
        todos: [...state.todos].filter((todo) => todo.id !== action.payload),
      };

    case "COMPLETED_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id !== action.payload) {
            return todo;
          }

          return {
            ...todo,
            isCompleted: !todo.isCompleted,
          };
        }),
      };

    default:
      return {
        ...state,
      };
  }
};

export default reducer;
