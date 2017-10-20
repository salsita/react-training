const wrapApiCall = call => async (...params) => {
  try {
    const { data } = await call(...params);

    return data;
  } catch (error) {
    console.error(error);
  }
};

export default wrapApiCall;
