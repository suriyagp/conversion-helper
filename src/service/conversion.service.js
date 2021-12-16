import { Parser } from 'json2csv';

export const getFields = (data) => {
  if(data && data.length > 0) {
    const keys = Object.keys(data[0]);
    return keys.map(key=> ({'label': key, 'value': key }))
  }
  return [];
}

export const createAndDownloadCsv = (data) => {
  const fields = getFields(data);
  const json2csv = new Parser({ fields });
  return json2csv.parse(data);
}