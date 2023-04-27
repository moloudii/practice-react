const sleep = (time) => new Promise((resolve) => setTimeout(resolve, time));

export const getUser = (username, password) =>
  sleep(1000).then(() => {
    if ("moloudi" === username && 123 === password) {
      return {
        id: 1,
        username,
        email: "mhmmdalinaz@gmail.com",
      };
    }
    return null;
  });
