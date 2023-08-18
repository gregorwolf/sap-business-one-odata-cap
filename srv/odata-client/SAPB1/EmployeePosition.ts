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
import type { EmployeePositionApi } from './EmployeePositionApi';
import { EmployeesInfo, EmployeesInfoType } from './EmployeesInfo';

/**
 * This class represents the entity "EmployeePosition" of service "SAPB1".
 */
export class EmployeePosition<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements EmployeePositionType<T>
{
  /**
   * Technical entity name for EmployeePosition.
   */
  static _entityName = 'EmployeePosition';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the EmployeePosition entity
   */
  static _keys = ['PositionID'];
  /**
   * Position Id.
   */
  positionId!: DeserializedType<T, 'Edm.Int32'>;
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

  constructor(readonly _entityApi: EmployeePositionApi<T>) {
    super(_entityApi);
  }
}

export interface EmployeePositionType<
  T extends DeSerializers = DefaultDeSerializers
> {
  positionId: DeserializedType<T, 'Edm.Int32'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  employeesInfo: EmployeesInfoType<T>[];
}
