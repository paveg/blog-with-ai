import React from "react";

export function H1(props: React.ComponentProps<"h1">) {
  return (
    <h1
      {...props}
      className={
        "scroll-mt-24 font-bold text-3xl mb-6 leading-tight" +
        (props.className ? " " + props.className : "")
      }
    >
      {props.children}
    </h1>
  );
}
export function H2(props: React.ComponentProps<"h2">) {
  return (
    <h2
      {...props}
      className={
        "scroll-mt-24 font-bold text-2xl mb-6 leading-snug" +
        (props.className ? " " + props.className : "")
      }
    >
      {props.children}
    </h2>
  );
}
export function H3(props: React.ComponentProps<"h3">) {
  return (
    <h3
      {...props}
      className={
        "scroll-mt-24 font-semibold text-xl mb-4 leading-snug" +
        (props.className ? " " + props.className : "")
      }
    >
      {props.children}
    </h3>
  );
}
export function H4(props: React.ComponentProps<"h4">) {
  return (
    <h4
      {...props}
      className={
        "scroll-mt-24 font-semibold text-lg mb-3 leading-snug" +
        (props.className ? " " + props.className : "")
      }
    >
      {props.children}
    </h4>
  );
}
export function H5(props: React.ComponentProps<"h5">) {
  return (
    <h5
      {...props}
      className={
        "scroll-mt-24 font-semibold text-base mb-2 leading-snug" +
        (props.className ? " " + props.className : "")
      }
    >
      {props.children}
    </h5>
  );
}
export function H6(props: React.ComponentProps<"h6">) {
  return (
    <h6
      {...props}
      className={
        "scroll-mt-24 font-semibold text-sm mb-2 leading-snug text-muted-foreground" +
        (props.className ? " " + props.className : "")
      }
    >
      {props.children}
    </h6>
  );
}
