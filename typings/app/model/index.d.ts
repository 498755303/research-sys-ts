// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportCompany from '../../../app/model/company';
import ExportDepartment from '../../../app/model/department';
import ExportUser from '../../../app/model/user';

declare module 'egg' {
  interface IModel {
    Company: ReturnType<typeof ExportCompany>;
    Department: ReturnType<typeof ExportDepartment>;
    User: ReturnType<typeof ExportUser>;
  }
}
