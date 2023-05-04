import { reportWebVitals as reportWebVitalsBase } from 'web-vitals';

const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    reportWebVitalsBase(onPerfEntry);
  }
};

export default reportWebVitals;
