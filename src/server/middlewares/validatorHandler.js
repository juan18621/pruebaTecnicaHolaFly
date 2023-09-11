const validatorHandler = (schema, property) => (req, res, next) => {
    const data = req[property];
    const { error } = schema.validate(data, {
      abortEarly: false,
      errors: {
        wrap: {
          label: '',
        },
      },
    });
    if (error) {
        res.status(400).json({
            error: 'Schema error',
            details: error.details.map(({ message }) => message)
        })
        return
    }
    next();
  };
  
  module.exports = validatorHandler;