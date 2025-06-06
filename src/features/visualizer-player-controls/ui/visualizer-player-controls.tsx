// Icons
import {
  ResumeIcon,
  PlayIcon,
  StopIcon,
  PauseIcon,
} from "@radix-ui/react-icons";

// Components
import SpeedSelect from "./speed-select";
import { Button } from "@/components/ui/button";
import { memo } from "react";

export interface VisualizeControlsProps {
  onPlay?: () => void;
  onReset?: () => void;
  onPreviousStep?: () => void;
  onNextStep?: () => void;
  isPlaying?: boolean;
  isResetDisabled?: boolean;
  isPreviousStepDisabled?: boolean;
  isNextStepDisabled?: boolean;
  speed?: string;
  onChangeSpeed?: (value: string) => void;
};

export const VisualizeControls = memo(
  ({
    onPlay,
    onReset,
    onPreviousStep,
    onNextStep,
    isPlaying,
    isResetDisabled,
    isPreviousStepDisabled,
    isNextStepDisabled,
    speed,
    onChangeSpeed,
  }: VisualizeControlsProps) => {
    return (
      <div className="flex gap-2">
        {onPreviousStep && (
          <Button
            variant="outline"
            size="icon"
            title="Previous step"
            onClick={onPreviousStep}
            disabled={isPreviousStepDisabled || isPlaying}
          >
            <ResumeIcon className="h-4 w-4 rotate-180" />
          </Button>
        )}

        {onPlay && (
          <Button
            variant="default"
            size="icon"
            title={isPlaying ? "Pause" : "Start"}
            onClick={onPlay}
          >
            {isPlaying ? (
              <PauseIcon className="h-4 w-4" />
            ) : (
              <PlayIcon className="h-4 w-4" />
            )}
          </Button>
        )}
        {onNextStep && (
          <Button
            variant="outline"
            size="icon"
            title="Next step"
            onClick={onNextStep}
            disabled={isNextStepDisabled || isPlaying}
          >
            <ResumeIcon className="h-4 w-4" />
          </Button>
        )}
        {onReset && (
          <Button
            variant="destructive"
            size="icon"
            title="Reset"
            onClick={onReset}
            disabled={isResetDisabled}
          >
            <StopIcon className="h-4 w-4" />
          </Button>
        )}
        {onChangeSpeed && (
          <SpeedSelect value={speed} onChange={onChangeSpeed} />
        )}
      </div>
    );
  }
);

VisualizeControls.displayName = "VisualizeControls";
