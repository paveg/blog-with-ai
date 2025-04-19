import * as React from 'react';

type StrongProps = React.HTMLAttributes<HTMLElement>;

export default function Strong({ children, className, ...props }: StrongProps) {
  return (
    <strong className={`font-bold text-foreground ${className ? className : ''}`} {...props}>
      {children}
    </strong>
  );
}
