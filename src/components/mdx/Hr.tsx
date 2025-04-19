import * as React from "react";

type HrProps = React.HTMLAttributes<HTMLHRElement>;

export default function Hr({ className, ...props }: HrProps) {
  return (
    <hr
      className={`my-8 border-t border-muted ${className ? className : ""}`}
      {...props}
    />
  );
}
