import { RequestHandler } from 'express';

import { SensorData } from '../models/IESSensorData';

const dummy = new SensorData('Device1', 123, 'MAC123', 15, 1, 16, 25);

export const storeData: RequestHandler = (req, res, next) => {
  const text = req.body;

  res.status(200).json({ response: 'request successful!' });
};

export const fetchData: RequestHandler = (req, res, next) => {
  const text = (req.body as SensorData).Device;

  if (text === 'Device1') {
    res.status(200).json({ dummy });
  } else {
    res.status(200).json({ Device: 'unknown' });
  }
};
