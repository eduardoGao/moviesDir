exports.success = (req, res, data, message = 'Request successful', code = 200) => {
  res.status(code).send({
    error: false,
    code,
    message,
    data
  })
}

exports.error = (req, res, message = 'Request Error', code = 500) => {
  res.status(code).send({
    error: true,
    code,
    message
  })
}