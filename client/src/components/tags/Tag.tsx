import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";
import styles from "./tag.module.scss";

type ButtonVariant = "red" | "blue" | "green" | "gray" | "purple" | "yellow" | "pink" | "orange";

type TagProps = {
  variant?: ButtonVariant;
  children: React.ReactNode;
  defaultActive?: boolean;
  tagType?: "button" | "tag";
  onClick?: () => void;
};

function getContentLength(content: React.ReactNode): number {
  if (typeof content === "string") {
    return Array.from(content).length;
  }
  return 0;
}

function getSizeClass(length: number): string {
  if (length <= 3) return styles.cardSmall;
  if (length <= 5) return styles.cardMedium;
  return styles.cardLarge;
}

function formatContent(children: React.ReactNode): React.ReactNode {
  if (typeof children !== "string") {
    return children;
  }

  const contentLength = getContentLength(children);
  if (contentLength > 12) {
    return `${Array.from(children).slice(0, 8).join("")}...`;
  }
  return children;
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
  const sizeClass = getSizeClass(contentLength);
  const formattedContent = formatContent(children);

  return (
    <Button
      className={cn(styles.card_tag, styles[variant], sizeClass, isActive && styles.active)}
      onClick={handleClick}
      {...props}
    >
      {formattedContent}
    </Button>
  );
};

export default Tag;
