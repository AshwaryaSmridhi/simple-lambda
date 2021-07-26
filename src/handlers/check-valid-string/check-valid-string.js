module.exports.handler = (event, context, callback) => {
  const { pathParameters: { breed } } = event;

  try {
    if (breed !== 'dogs') {
      throw new Error('Not a valid input');
    }

    const response = {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true
      },
      body: null,
      statusCode: 200
    };

    return callback(null, response)
  } catch (err) {
    console.log('Error: ', err);

    const response = {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true
      },
      statusCode: 404,
      body: `Error occured ${err}`
    };

    return callback(null, response);
  }
};