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
import type { EmployeeStatusApi } from './EmployeeStatusApi';
import { EmployeesInfo, EmployeesInfoType } from './EmployeesInfo';

/**
 * This class represents the entity "EmployeeStatus" of service "SAPB1".
 */
export class EmployeeStatus<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements EmployeeStatusType<T>
{
  /**
   * Technical entity name for EmployeeStatus.
   */
  static _entityName = 'EmployeeStatus';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the EmployeeStatus entity
   */
  static _keys = ['StatusId'];
  /**
   * Status Id.
   */
  statusId!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Name.
   * @nullable
   */
  name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link EmployeesInfo} entity.
   */
  employeesInfo!: EmployeesInfo<T>[];

  constructor(readonly _entityApi: EmployeeStatusApi<T>) {
    super(_entityApi);
  }
}

export interface EmployeeStatusType<
  T extends DeSerializers = DefaultDeSerializers
> {
  statusId: DeserializedType<T, 'Edm.Int32'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  employeesInfo: EmployeesInfoType<T>[];
}
