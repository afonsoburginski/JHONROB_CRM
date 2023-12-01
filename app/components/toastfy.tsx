import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function checkFieldsAndShowError(
  selectedProduct,
  selectedModel,
  selectedCapacity,
  selectedHeight,
  selectedPower,
  selectedInput,
  selectedOutput
) {
  if (
    !selectedProduct ||
    !selectedModel ||
    !selectedCapacity ||
    !selectedHeight ||
    !selectedPower ||
    !selectedInput ||
    !selectedOutput
  ) {
    toast.error('Todos os campos devem ser preenchidos antes de salvar o produto');
    return true;
  }
  return false;
}

export function showToastSuccess(message) {
  toast.success(message);
}

export function showToastError(message) {
  toast.error(message);
}