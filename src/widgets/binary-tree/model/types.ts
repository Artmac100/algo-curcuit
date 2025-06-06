import { BaseSnapshot } from "@/shared/types/snapshot";
import { STEPS } from "./constants";
import { TreeNode } from "./binary-tree";


export enum ActionType {
  find = "find",
  insert = "insert",
  delete = "delete",
  bfs = "traverse-bfs",
  dfs = "traverse-dfs",
}


export type DispatchPayload = {
  type: ActionType;
  value: number | null;
  canClose?: boolean;
};

export type Dispatch = (d: DispatchPayload) => void;


export type GenValuePayload = {
  type: Partial<STEPS>;
  node: TreeNode,
  treeView: TreeArrayItem[],
  queue?: TreeNode[],
  result?: number[],
  stack?: TreeNode[],
  insertedNode?: TreeNode,
  nodeToRemove?: TreeNode,
  minValueNode?: TreeNode,
};

export type GenValue = Generator<GenValuePayload, void, number>;


export interface StepSnapshot extends BaseSnapshot {
  type: Partial<STEPS>,
  node: TreeNode,
  insertedNode?: TreeNode,
  deleteNode?: TreeNode,
  nodeToRemove?: TreeNode,
  minValueNode?: TreeNode,
  queue?: TreeNode[],
  stack?: TreeNode[],
  result?: number[],
  treeView: TreeArrayItem[]
};


export type TreeArrayItem = {
  node: TreeNode;
  parent: TreeNode | null;
  isLeft: boolean;
}

export type TreeArrayGroups = { [key: string]: TreeArrayItem[] }




