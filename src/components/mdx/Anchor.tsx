import React from "react";

export function Anchor(props: React.ComponentProps<"a">) {
  const isExternal = props.href?.startsWith("http");
  return (
    <a
      {...props}
      className={
        "text-primary underline underline-offset-2 transition-colors focus-visible:outline-accent" +
        (props.className ? " " + props.className : "")
      }
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
    >
      {props.children}
    </a>
  );
}
