import { Dispatch, ActionType } from "../../model/types";

export type ControlsProps = {
  dispatch: Dispatch;
  disabled?: boolean;
  activeType: CollapseType | null;
  onSubmitValue: (value: number, type?: ActionType) => void;
  onPreviousStep?: () => void;
  onNextStep?: () => void;
  isPlaying?: boolean;
  hasPrevSnapshot?: boolean;
  hasNextSnapshot?: boolean;
  isResetDisabled?: boolean;
  speed?: string;
  onChangeSpeed?: (speed: string) => void;

};

export type ControlColor = "blue" | "orange" | "red";
export type CollapseType = ActionType;

export type CollapsibleControlProps = {
  type: CollapseType;
  disabled?: boolean;
  color?: ControlColor;
  dispatch: Dispatch;
  onSubmitValue: (value: number, type?: ActionType) => void;
  isOpen?: boolean;
  onTypeChange?: (type: CollapseType) => void;
};

export type ControlsType = {
  type: CollapseType;
  color: ControlColor;
  label: string;
  Icon: React.ReactNode;
  tabType?: CollapseType | "traverse";
}[];

