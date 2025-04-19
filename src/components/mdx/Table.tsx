import React from 'react';

export function Table(props: React.ComponentProps<'table'>) {
  return (
    <table
      {...props}
      className={
        'w-full border-collapse my-6 text-sm' + (props.className ? ' ' + props.className : '')
      }
    >
      {props.children}
    </table>
  );
}

export function THead(props: React.ComponentProps<'thead'>) {
  return <thead {...props}>{props.children}</thead>;
}

export function TBody(props: React.ComponentProps<'tbody'>) {
  return <tbody {...props}>{props.children}</tbody>;
}

export function TR(props: React.ComponentProps<'tr'>) {
  return <tr {...props}>{props.children}</tr>;
}

export function TH(props: React.ComponentProps<'th'>) {
  return (
    <th
      {...props}
      className={
        'bg-muted font-semibold border px-3 py-2 text-left' +
        (props.className ? ' ' + props.className : '')
      }
      scope={props.scope}
    >
      {props.children}
    </th>
  );
}

export function TD(props: React.ComponentProps<'td'>) {
  return (
    <td
      {...props}
      className={'border px-3 py-2 align-middle' + (props.className ? ' ' + props.className : '')}
    >
      {props.children}
    </td>
  );
}

export function Caption(props: React.ComponentProps<'caption'>) {
  return (
    <caption
      {...props}
      className={
        'text-muted-foreground text-xs mb-2' + (props.className ? ' ' + props.className : '')
      }
    >
      {props.children}
    </caption>
  );
}
