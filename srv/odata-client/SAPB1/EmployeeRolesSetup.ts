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
import type { EmployeeRolesSetupApi } from './EmployeeRolesSetupApi';
import { EmployeesInfo, EmployeesInfoType } from './EmployeesInfo';

/**
 * This class represents the entity "EmployeeRolesSetup" of service "SAPB1".
 */
export class EmployeeRolesSetup<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements EmployeeRolesSetupType<T>
{
  /**
   * Technical entity name for EmployeeRolesSetup.
   */
  static _entityName = 'EmployeeRolesSetup';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the EmployeeRolesSetup entity
   */
  static _keys = ['TypeID'];
  /**
   * Type Id.
   */
  typeId!: DeserializedType<T, 'Edm.Int32'>;
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

  constructor(readonly _entityApi: EmployeeRolesSetupApi<T>) {
    super(_entityApi);
  }
}

export interface EmployeeRolesSetupType<
  T extends DeSerializers = DefaultDeSerializers
> {
  typeId: DeserializedType<T, 'Edm.Int32'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  employeesInfo: EmployeesInfoType<T>[];
}
