"use client";
import { TrashIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/shared/lib/utils";
import { useState } from "react";

export type EditArrayItemProps = {
  className?: string;
  value: number;
  index: number;
  max?: number;
  min?: number;
  onRemove: (index: number) => void;
  onChange: (index: number, value: number) => void;
};

const EditArrayItem = ({
  className,
  value,
  index,
  onRemove,
  max = 9999999,
  min = -99,
  onChange,
}: EditArrayItemProps) => {
  const [isEmptyInput, setIsEmptyInput] = useState(false);

  const updateNumber = (value: number) => {
    if (max && value > max) {
      return;
    }
    if (min && value < min) {
      return;
    }
    onChange(index, value);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "") {
      setIsEmptyInput(true);
      updateNumber(0);
      return;
    }

    const newValue = parseInt(e.target.value, 10);

    if (isNaN(newValue)) {
      return;
    }

    setIsEmptyInput(false);

    updateNumber(newValue);
  };

  const onAdd = () => {
    updateNumber(value + 1);
  };

  const onSubtract = () => {
    updateNumber(value - 1);
  };

  return (
    <div className="relative">
      <Button
        className="w-6 h-6 absolute -top-7 left-1/2 -translate-x-1/2"
        variant="destructive"
        size="icon"
        title="Remove"
        onClick={() => onRemove(index)}
      >
        <TrashIcon className="h-4 w-4" />
      </Button>
      <div
        className={cn(
          "min-w-12 h-12 relative flex items-center justify-center rounded-md border-2 border-gray-300 transition-transform duration-100 ",
          className
        )}
      >
        <Button
          className="absolute top-0 left-0 w-full h-px text-[9px] py-[5px] rounded-none border-bottom-none"
          variant="outline"
          data-testid="increment"
          onClick={onAdd}
        >
          <span className="triangle -mt-px"></span>
        </Button>
        <Input
          value={isEmptyInput ? "" : value}
          className={"min-w-12  p-0 text-center h-full"}
          style={{ width: 12 * String(value)?.length }}
          onChange={handleInputChange}
          aria-label="edit array item"
        />
        <Button
          className="absolute bottom-0 left-0 w-full h-px text-[9px] py-[5px] rounded-none border-bottom-none"
          variant="outline"
          onClick={onSubtract}
          data-testid="decrement"
        >
          <span className="triangle rotate-180"></span>
        </Button>
      </div>
    </div>
  );
};

export default EditArrayItem;
