import React from 'react';

export function Image(props: React.ComponentProps<'img'>) {
  return (
    <img
      {...props}
      className={
        'rounded shadow max-w-full h-auto my-4' + (props.className ? ' ' + props.className : '')
      }
      alt={props.alt ?? ''}
    />
  );
}
