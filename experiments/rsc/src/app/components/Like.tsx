import { increment } from "../counter";

export function Like() {
  // todo(justinvdm, 2024-11-28): Replace with 'use client' equivalent
  return (
    <form action={increment as any}>
      <button type="submit">+</button>
    </form>
  );
}
