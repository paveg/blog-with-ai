import React from 'react';

export function Paragraph(props: React.ComponentProps<'p'>) {
  return (
    <p
      {...props}
      className={'my-4 leading-relaxed' + (props.className ? ' ' + props.className : '')}
    >
      {props.children}
    </p>
  );
}
