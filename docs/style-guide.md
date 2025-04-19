# UI Style Guide

This document summarizes the guidelines for unifying UI styles across
the project. The main reference is Tailwind CSS utility classes.

---

## Margin and Padding Standards

- **Base spacing unit**: Use `4` (1rem) as the base, adjusting in increments
  of `2` (0.5rem)
- **Between sections**: Recommend `mb-8` (2rem)
- **Card inner padding**: Recommend `p-6` (1.5rem)
- **Between list items**: Recommend `mb-6` (1.5rem)
- **Breadcrumb bottom margin**: Recommend `mb-4` (1rem)
- **Buttons/Inputs**: Recommend `px-4 py-2` (1rem x 0.5rem)

---

## Layout

- **Container width**: Use `max-w-3xl` or `max-w-4xl`
- **Centering**: Use `mx-auto`
- **Horizontal alignment**: Use `flex gap-4` as the base
- **Article titles**: Bottom margin of `mb-2` (0.5rem)

---

## Component-Specific Recommendations

### BlogList

- Between article cards: `mb-6`
- Vertical padding for the entire list: `py-8`

### Card

- Inner padding: `p-6`
- Bottom margin for title: `mb-2`

### Breadcrumb

- Bottom margin: `mb-4`

### Section Title

- Bottom margin: `mb-6`

---

## Operational Rules

- When creating new components, follow these guidelines
- When modifying existing components, refer to this guide to unify
  spacing and layout
- Update this document as needed

---
