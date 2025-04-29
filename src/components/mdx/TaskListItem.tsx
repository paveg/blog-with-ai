import * as React from 'react';

type TaskListItemProps = React.HTMLAttributes<HTMLLIElement> & {
  checked?: boolean;
};

export default function TaskListItem({
  children,
  className,
  checked,
  ...props
}: TaskListItemProps) {
  // childrenが"[x] テキスト"や"[ ] テキスト"の場合の自動判定
  let isChecked = checked;
  let label = children;

  if (typeof children === 'string') {
    const match = children.match(/^\s*\[( |x|X)\]\s*(.*)$/);
    if (match) {
      isChecked = match[1].toLowerCase() === 'x';
      label = match[2];
    }
  }

  return (
    <li className={`flex items-start gap-2 list-none ${className ? className : ''}`} {...props}>
      <label className="flex items-start gap-2 w-full">
        <input
          type="checkbox"
          checked={!!isChecked}
          readOnly
          className="mt-1 accent-primary"
          tabIndex={-1}
          aria-label={typeof label === 'string' ? label : String(label)}
        />
        <span className="sr-only">{label}</span>
        <span className={isChecked ? 'line-through text-muted-foreground' : ''}>{label}</span>
      </label>
    </li>
  );
}
