// toastfy.tsx
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function showToastSuccess(message) {
  toast.success(message);
}

export function showToastError(message) {
  toast.error(message);
}