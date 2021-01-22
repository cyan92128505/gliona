import jsonExport from 'jsonexport';
import { Exporter } from 'react-admin';

export const downloadCSV = (csv: string, filename?: string) => {
  const fakeLink = document.createElement('a');
  fakeLink.style.display = 'none';
  document.body.appendChild(fakeLink);
  const blob = new Blob([csv], { type: 'application/octet-stream;charset=utf-8' });
  if (window.navigator && window.navigator.msSaveOrOpenBlob) {
    window.navigator.msSaveOrOpenBlob(blob, `${filename}.csv`);
  } else {
    fakeLink.setAttribute('href', URL.createObjectURL(blob));
    fakeLink.setAttribute('download', `${filename}.csv`);
    fakeLink.click();
  }
};

export const CustomCSVExporter: Exporter = (data, _, __, resource) => {
  return jsonExport(data, (error: Error, csv: string) => {
    return downloadCSV(csv, resource);
  });
};

export default CustomCSVExporter;
