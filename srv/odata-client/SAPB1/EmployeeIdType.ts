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
import type { EmployeeIdTypeApi } from './EmployeeIdTypeApi';
import { EmployeesInfo, EmployeesInfoType } from './EmployeesInfo';

/**
 * This class represents the entity "EmployeeIDType" of service "SAPB1".
 */
export class EmployeeIdType<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements EmployeeIdTypeType<T>
{
  /**
   * Technical entity name for EmployeeIdType.
   */
  static _entityName = 'EmployeeIDType';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the EmployeeIdType entity
   */
  static _keys = ['IDType'];
  /**
   * Id Type.
   */
  idType!: DeserializedType<T, 'Edm.String'>;
  /**
   * One-to-many navigation property to the {@link EmployeesInfo} entity.
   */
  employeesInfo!: EmployeesInfo<T>[];

  constructor(readonly _entityApi: EmployeeIdTypeApi<T>) {
    super(_entityApi);
  }
}

export interface EmployeeIdTypeType<
  T extends DeSerializers = DefaultDeSerializers
> {
  idType: DeserializedType<T, 'Edm.String'>;
  employeesInfo: EmployeesInfoType<T>[];
}
