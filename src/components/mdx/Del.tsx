import * as React from 'react';

type DelProps = React.HTMLAttributes<HTMLElement>;

export default function Del({ children, className, ...props }: DelProps) {
  return (
    <del className={`line-through text-muted-foreground ${className ? className : ''}`} {...props}>
      {children}
    </del>
  );
}
