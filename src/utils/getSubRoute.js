export const getSubRoute = (path , location) => {
    const subroute = location.pathname.split(path).pop();
    return subroute
  };