import * as React from "react";
const listeners = [];
let memoryState = { toasts: [] };
let count = 0;
function emit() {
  listeners.forEach((listener) => listener(memoryState));
}
function dismiss(toastId) {
  memoryState = {
    toasts: memoryState.toasts.filter((toastItem) => toastItem.id !== toastId)
  };
  emit();
}
function toast({ title, description, variant = "default", action }) {
  const id = `${Date.now()}-${count++}`;
  const nextToast = { id, title, description, variant, action };
  memoryState = {
    toasts: [nextToast, ...memoryState.toasts].slice(0, 3)
  };
  emit();
  const timeout = setTimeout(() => dismiss(id), 4e3);
  return {
    id,
    dismiss: () => {
      clearTimeout(timeout);
      dismiss(id);
    },
    update: () => {
    }
  };
}
function useToast() {
  const [state, setState] = React.useState(memoryState);
  React.useEffect(() => {
    listeners.push(setState);
    return () => {
      const index = listeners.indexOf(setState);
      if (index >= 0) {
        listeners.splice(index, 1);
      }
    };
  }, []);
  return {
    ...state,
    toast,
    dismiss
  };
}
export {
  toast,
  useToast
};
