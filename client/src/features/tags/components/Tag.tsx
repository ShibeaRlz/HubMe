import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";
import badge_style from "./badge.module.scss";
import button_style from "./button.module.scss";

type ButtonVariant = "red" | "blue" | "green" | "gray" | "purple" | "yellow" | "pink" | "orange";

type TagProps = {
  variant?: ButtonVariant;
  children: React.ReactNode;
  defaultActive?: boolean;
  tagType?: "button" | "badge";
  selected?: boolean;
  onClick?: () => void;
};

function getContentLength(content: React.ReactNode): number {
  if (typeof content === "string") {
    return Array.from(content).length;
  }
  return 0;
}

function getSizeClass(length: number, styles: { [key: string]: string }): string {
  switch (true) {
    case length <= 3:
      return styles.small;
    case length <= 5:
      return styles.medium;
    default:
      return styles.large;
  }
}

const Tag: React.FC<TagProps> = ({
  variant = "red",
  children,
  defaultActive = false,
  tagType = "button",
  onClick,
  ...props
}) => {
  const [isActive, setIsActive] = useState(defaultActive);

  const handleClick = () => {
    if (tagType === "button") {
      setIsActive(!isActive);
      onClick?.();
    }
  };

  const contentLength = getContentLength(children);
  const sizeClass = getSizeClass(contentLength, tagType === "badge" ? badge_style : button_style);

  return (
    <>
      {tagType === "badge" ? (
        <Badge className={cn(badge_style.tag, badge_style[variant], sizeClass)} {...props}>
          {children}
        </Badge>
      ) : (
        <Button
          className={cn(button_style.tag, button_style[variant], sizeClass, isActive && button_style.active)}
          onClick={handleClick}
          {...props}
        >
          {children}
        </Button>
      )}
    </>
  );
};

export default Tag;