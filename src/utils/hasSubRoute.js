export const hasSubRoute = (path , location) => {
    const subroute = location.pathname.split(path).pop();
    if (subroute) return true;
  };