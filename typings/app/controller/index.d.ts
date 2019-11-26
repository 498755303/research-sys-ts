// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportV1Company from '../../../app/controller/v1/company';
import ExportV1Home from '../../../app/controller/v1/home';
import ExportV1User from '../../../app/controller/v1/user';

declare module 'egg' {
  interface IController {
    v1: {
      company: ExportV1Company;
      home: ExportV1Home;
      user: ExportV1User;
    }
  }
}
