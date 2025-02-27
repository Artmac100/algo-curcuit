import { Dispatch, ActionType } from "../../model/types";

export type ControlsProps = {
  dispatch: Dispatch;
  disabled?: boolean;
  activeType: CollapseType | null;
  onSubmitValue: (value: number, type?: ActionType) => void;
};

export type ControlColor = "blue" | "orange" | "red";
export type CollapseType = ActionType;

export type CollapsibleControlProps = {
  type: CollapseType;
  disabled?: boolean;
  color: ControlColor;
  onTriggerClick: (type: CollapseType, value: number) => void;
  isOpen?: boolean;
  dispatch: Dispatch;
  onSubmitValue: (value: number, type?: ActionType) => void;
};

export type ControlsType = { type: CollapseType; color: ControlColor, label: string }[];

