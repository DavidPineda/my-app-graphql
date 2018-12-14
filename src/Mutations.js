import gql from "graphql-tag";

export const GET_TODOS = gql`
  {
    todos {
      id
      type
    }
  }
`;

export const ADD_TODO = gql`
  mutation addTodo($type: String!) {
    addTodo(type: $type) {
      id
      type
    }
  }
`;

export const UPDATE_TODO = gql`
  mutation updateTodo($id: String!, $type: String!) {
    updateTodo(id: $id, type: $type) {
      id
      type
    }
  }
`;
