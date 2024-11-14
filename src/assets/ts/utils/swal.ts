import Swal, { SweetAlertIcon, SweetAlertInput, SweetAlertResult } from 'sweetalert2'

type showMsgSwalType = {
  title: string
  icon: SweetAlertIcon
  hasClose?: boolean,
  btnText?: string,
}

const showMsgSwal = ({ title, icon, hasClose = false, btnText = "OK" }: showMsgSwalType) => {
  Swal.fire({
    title,
    icon,
    showCloseButton: hasClose,
    confirmButtonText: btnText
  })
}

type showToastSwalType = {
  title: string
  icon: SweetAlertIcon
  timer?: number
}

const showToastSwal = ({
  title,
  icon,
  timer = 2500
}: showToastSwalType) => {
  Swal.fire({
    title,
    icon,
    timer, // مدت زمان نمایش به میلی‌ثانیه
    timerProgressBar: true,
    toast: true,
    position: "top-right",
    showConfirmButton: false,
  })
}

type showConfirmSwalType = {
  title: string
  text?: string
  icon: SweetAlertIcon
  hasClose?: boolean
  btnText?: string
  cancelText?: string
  callBack: (result: SweetAlertResult) => void
}

const showConfirmSwal = ({ title, text, icon, cancelText = "No", btnText = "OK", callBack, hasClose = false }: showConfirmSwalType) => {
  Swal.fire({
    title,
    text,
    icon,
    showCloseButton: hasClose,
    showConfirmButton: true,
    showCancelButton: true,
    cancelButtonText: cancelText,
    confirmButtonText: btnText
  }).then(callBack)
}

type showInputSwalType = {
  title: string
  text?: string
  icon: SweetAlertIcon
  inputType?: SweetAlertInput
  hasClose?: boolean
  btnText?: string
  cancelText?: string
  callBack: (result: SweetAlertResult) => void
}

const showInputSwal = ({ title, text, icon, inputType: input = "text", cancelText = "No", btnText = "OK", callBack, hasClose = false }: showInputSwalType) => {
  Swal.fire({
    title,
    text,
    icon,
    input,
    showCloseButton: hasClose,
    showConfirmButton: true,
    showCancelButton: true,
    cancelButtonText: cancelText,
    confirmButtonText: btnText
  }).then(callBack)
}

export {
  showToastSwal,
  showMsgSwal,
  showConfirmSwal,
  showInputSwal
}