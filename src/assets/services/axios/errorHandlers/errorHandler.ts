const hasError = (response: any) => !!response?.data?.errors?.length;
const extractionErrorMessage = (response: any) => JSON.parse(response?.data?.errors[0]?.message).message

export {
  hasError,
  extractionErrorMessage
}