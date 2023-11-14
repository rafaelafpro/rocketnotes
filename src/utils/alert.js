import Swal from "sweetalert2";

const swalConfig = {
  background: '#48454f',
  color: 'white',
};


function showError(text = "Hove um erro!", title = "Erro!") {
  Swal.fire({
    title,
    text,
    icon: 'error',
    confirmButtonText: 'OK',
    padding: '0px 16px 32px 16px',
    ...swalConfig,
  });
}

function toastError(title = "Erro!") {
  Swal.fire({
    title,
    icon: 'error',
    showConfirmButton: false,
    position: 'top-end',
    timer: 3000,
    timerProgressBar: true,
    toast: true,
    width: 'fit-content',
    ...swalConfig,

  });
}

function showSucces(text = "Operação realizada com sucesso", title = "Sucesso!") {
  Swal.fire({
    title,
    text,
    icon: 'success',
    confirmButtonText: 'OK',
    padding: '0px 16px 32px 16px',
    ...swalConfig,
  });
}

function toastSuccess(title = "Sucesso!") {
  Swal.fire({
    title,
    icon: 'success',
    showConfirmButton: false,
    position: 'top-end',
    timer: 3000,
    timerProgressBar: true,
    toast: true,
    width: 'fit-content',
    ...swalConfig,

  });
}

export { showError, toastError, showSucces, toastSuccess };