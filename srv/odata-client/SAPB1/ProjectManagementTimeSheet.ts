/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v4';
import { PmTimeSheetLineData } from './PmTimeSheetLineData';
import type { ProjectManagementTimeSheetApi } from './ProjectManagementTimeSheetApi';
import { TimeSheetTypeEnum } from './TimeSheetTypeEnum';
import { EmployeesInfo, EmployeesInfoType } from './EmployeesInfo';
import { Attachments2, Attachments2Type } from './Attachments2';

/**
 * This class represents the entity "ProjectManagementTimeSheet" of service "SAPB1".
 */
export class ProjectManagementTimeSheet<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProjectManagementTimeSheetType<T>
{
  /**
   * Technical entity name for ProjectManagementTimeSheet.
   */
  static _entityName = 'ProjectManagementTimeSheet';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the ProjectManagementTimeSheet entity
   */
  static _keys = ['AbsEntry'];
  /**
   * Abs Entry.
   */
  absEntry!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Doc Number.
   * @nullable
   */
  docNumber?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Time Sheet Type.
   * @nullable
   */
  timeSheetType?: TimeSheetTypeEnum | null;
  /**
   * User Id.
   * @nullable
   */
  userId?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Last Name.
   * @nullable
   */
  lastName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * First Name.
   * @nullable
   */
  firstName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Department.
   * @nullable
   */
  department?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Date From.
   * @nullable
   */
  dateFrom?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Date To.
   * @nullable
   */
  dateTo?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Sap Passport.
   * @nullable
   */
  sapPassport?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Attachment Entry.
   * @nullable
   */
  attachmentEntry?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * User Code.
   * @nullable
   */
  userCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pm Time Sheet Line Data Collection.
   * @nullable
   */
  pmTimeSheetLineDataCollection?: PmTimeSheetLineData<T>[] | null;
  /**
   * One-to-one navigation property to the {@link EmployeesInfo} entity.
   */
  employeeInfo?: EmployeesInfo<T> | null;
  /**
   * One-to-one navigation property to the {@link Attachments2} entity.
   */
  attachments2?: Attachments2<T> | null;

  constructor(readonly _entityApi: ProjectManagementTimeSheetApi<T>) {
    super(_entityApi);
  }
}

export interface ProjectManagementTimeSheetType<
  T extends DeSerializers = DefaultDeSerializers
> {
  absEntry: DeserializedType<T, 'Edm.Int32'>;
  docNumber?: DeserializedType<T, 'Edm.Int32'> | null;
  timeSheetType?: TimeSheetTypeEnum | null;
  userId?: DeserializedType<T, 'Edm.Int32'> | null;
  lastName?: DeserializedType<T, 'Edm.String'> | null;
  firstName?: DeserializedType<T, 'Edm.String'> | null;
  department?: DeserializedType<T, 'Edm.Int32'> | null;
  dateFrom?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  dateTo?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  sapPassport?: DeserializedType<T, 'Edm.String'> | null;
  attachmentEntry?: DeserializedType<T, 'Edm.Int32'> | null;
  userCode?: DeserializedType<T, 'Edm.String'> | null;
  pmTimeSheetLineDataCollection?: PmTimeSheetLineData<T>[] | null;
  employeeInfo?: EmployeesInfoType<T> | null;
  attachments2?: Attachments2Type<T> | null;
}
