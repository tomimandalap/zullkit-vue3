const digitAmount = (value) => {
  return new Intl.NumberFormat('id-ID').format(value)
}

export default { digitAmount }
