import { cn } from "@/shared/lib/utils";

interface ControlItemProps extends React.ComponentProps<"button"> {
  Icon: React.ReactNode;
  label: string;
}

export const ControlItem = ({ Icon, label, ...props }: ControlItemProps) => {
  return (
    <button
      {...props}
      className={cn(
        "cursor-pointer hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 w-full h-full p-2 flex flex-col items-center capitalize",

        props.className
      )}
    >
      {Icon}
      {label}
    </button>
  );
};
