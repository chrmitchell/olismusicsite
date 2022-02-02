const devLog = (...rest: any[]) => {
  if (process.env.NODE_ENV === "development") {
    console.log(...rest);
  }
};

export const devWarn = (...rest: any[]) => {
  if (process.env.NODE_ENV === "development") {
    console.warn(...rest);
  }
};

export const devErr = (...rest: any[]) => {
  if (process.env.NODE_ENV === "development") {
    console.error(...rest);
  }
};

export default devLog;
