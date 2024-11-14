const extractionErrorMessages = (errors: any) => {
  const errorMessages: string[] = [];
  errors.inner.map((error: { message: string; }) => errorMessages.push(error.message));
  return errorMessages
}
export {
  extractionErrorMessages
}