import React from "react";

export function Blockquote(props: React.ComponentProps<"blockquote">) {
  return (
    <blockquote
      {...props}
      className={
        "border-l-4 pl-4 italic my-6 text-muted-foreground bg-muted rounded" +
        (props.className ? " " + props.className : "")
      }
    >
      {props.children}
    </blockquote>
  );
}
