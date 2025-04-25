import React from 'react';

export function Ul(props: React.ComponentProps<'ul'>) {
  return (
    <ul
      {...props}
      className={'list-disc pl-6 my-4' + (props.className ? ' ' + props.className : '')}
    >
      {props.children}
      {/* WARNING: Only <li> elements should be direct children of <ul> */}
    </ul>
  );
}

export function Ol(props: React.ComponentProps<'ol'>) {
  return (
    <ol
      {...props}
      className={'list-decimal pl-6 my-4' + (props.className ? ' ' + props.className : '')}
    >
      {props.children}
    </ol>
  );
}

export function Li(props: React.ComponentProps<'li'>) {
  return (
    <li {...props} className={'mb-2' + (props.className ? ' ' + props.className : '')}>
      {props.children}
    </li>
  );
}
