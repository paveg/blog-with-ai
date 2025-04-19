import * as React from 'react';

type EmProps = React.HTMLAttributes<HTMLElement>;

export default function Em({ children, className, ...props }: EmProps) {
  return (
    <em className={`italic text-foreground ${className ? className : ''}`} {...props}>
      {children}
    </em>
  );
}
