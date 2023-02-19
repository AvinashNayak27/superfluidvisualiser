import { gql } from "@apollo/client";

export const GET_STREAMS = gql`
  query ($id: ID = "") {
    account(id: $id) {
      id
      inflows {
        currentFlowRate
        token {
          symbol
        }
        sender {
          id
        }
      }
      outflows {
        currentFlowRate
        token {
          symbol
        }
        receiver {
          id
        }
      }
    }
  }
`;

export const GET_Outflows = gql`
  query ($id: ID = "") {
    account(id: $id) {
      outflows {
        currentFlowRate
        token {
          symbol
        }
        receiver {
          id
        }
      }
    }
  }
`;

