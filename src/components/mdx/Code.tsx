import React from 'react';

export function Code(props: React.ComponentProps<'code'>) {
  // pre > code かどうかは親で判定されるため、ここではインライン用
  return (
    <code
      {...props}
      className={
        'font-mono bg-[#2d2d2d] text-[#ffcc66] px-1 rounded text-sm' +
        (props.className ? ' ' + props.className : '')
      }
    >
      {props.children}
    </code>
  );
}

export function Pre(props: React.ComponentProps<'pre'>) {
  return (
    <pre
      {...props}
      className={
        'rounded my-6 text-sm overflow-x-auto' + (props.className ? ' ' + props.className : '')
      }
    >
      {props.children}
    </pre>
  );
}
