module.exports.handler = (event) => {
  const { pathParameters: { breed } } = event;

  try {
    if (breed !== 'dogs') {
      throw new Error('Not a valid input');
    }

    return {
      statusCode: 200
    };
  } catch (err) {
    console.log('Error: ', err);
    return {
      statusCode: 404
    };
  }
};