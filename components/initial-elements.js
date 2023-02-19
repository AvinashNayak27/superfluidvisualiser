import React from "react";
import { MarkerType } from "reactflow";

const data = {
  account: {
    id: "0x3dd04ce16f541eb46dd08ff7832fe71f7c7acfea",
    inflows: [],
    outflows: [
      {
        currentFlowRate: "4629629629620",
        token: {
          symbol: "AGOLD",
        },
        sender: {
          id: "0x3dd04ce16f541eb46dd08ff7832fe71f7c7acfea",
        },
        receiver: {
          id: "0xb9d70840cca6e6f71d3c884060ee123e13b4c27d",
        },
      },
    ],
  },
};

export const nodes = [
  ...data.account.inflows.map((inflow) => ({
    id: inflow.sender.id,
    data: {
      label: inflow.receiver.id.slice(0, 15).concat("...."),
    },
    position: { x: 100, y: 100 },
    style: {
      background: "#D6D5E6",
      color: "#333",
      border: "1px solid #222138",
      width: 180,
    },
  })),
  ...data.account.outflows
    .map((outflow) => [
      {
        id: outflow.receiver.id,
        data: {
          label: outflow.sender.id.slice(0, 15).concat("...."),
        },
        position: { x: 500, y: 100 },
        style: {
          background: "#D6D5E6",
          color: "#333",
          border: "1px solid #222138",
          width: 180,
        },
      },
      {
        id: outflow.sender.id,
        data: {
          label: outflow.receiver.id.slice(0, 15).concat("...."),
        },
        position: { x: 500, y: 200 },
        style: {
          background: "#D6D5E6",
          color: "#333",
          border: "1px solid #222138",
          width: 180,
        },
      },
    ])
    .flat(),
  ...data.account.inflows.map((inflow) => ({
    id: inflow.receiver.id,
    data: {
      label: inflow.sender.id.slice(0, 15).concat("...."),
    },
    position: { x: 100, y: 200 },
    style: {
      background: "#D6D5E6",
      color: "#333",
      border: "1px solid #222138",
      width: 180,
    },
  })),
];


export const edges = [
  ...data.account.inflows.map((inflow) => ({
    id: `e${inflow.sender.id}-${inflow.receiver.id}`,
    source: inflow.sender.id,
    target: inflow.receiver.id,
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 30,
      height: 20,
      color: "#D6D5E6",
    },
    animated: true,
    label: `${inflow.token.symbol} - Current Flow Rate: ${inflow.currentFlowRate}`,
  })),
  ...data.account.outflows
    .map((outflow) => [
      {
        id: `e${outflow.sender.id}-${outflow.receiver.id}`,
        source: outflow.sender.id,
        target: outflow.receiver.id,
        markerEnd: {
          type: MarkerType.ArrowClosed,
          width: 30,
          height: 20,
          color: "#D6D5E6",
        },
        animated: true,
        label: `${outflow.token.symbol} - Current Flow Rate: ${outflow.currentFlowRate}`,
      },
      {
        id: `e${outflow.sender.id}-${outflow.receiver.id}-extra`,
        source: outflow.sender.id,
        target: outflow.receiver.id,
        markerEnd: {
          type: MarkerType.ArrowClosed,
          width: 30,
          height: 20,
          color: "#D6D5E6",
        },
        animated: true,
        label: `${outflow.token.symbol} - Current Flow Rate: ${outflow.currentFlowRate}`,
      },
    ])
    .flat(),
  ...data.account.inflows.map((inflow) => ({
    id: `e${inflow.sender.id}-${inflow.receiver.id}-extra`,
    source: inflow.sender.id,
    target: inflow.receiver.id,
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 30,
      height: 20,
      color: "#D6D5E6",
    },
    animated: true,
    label: `${inflow.token.symbol} - Current Flow Rate: ${inflow.currentFlowRate}`,
  })),
];
