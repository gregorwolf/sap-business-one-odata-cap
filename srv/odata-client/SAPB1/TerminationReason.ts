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
import type { TerminationReasonApi } from './TerminationReasonApi';
import { EmployeesInfo, EmployeesInfoType } from './EmployeesInfo';

/**
 * This class represents the entity "TerminationReason" of service "SAPB1".
 */
export class TerminationReason<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements TerminationReasonType<T>
{
  /**
   * Technical entity name for TerminationReason.
   */
  static _entityName = 'TerminationReason';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the TerminationReason entity
   */
  static _keys = ['ReasonID'];
  /**
   * Reason Id.
   */
  reasonId!: DeserializedType<T, 'Edm.Int32'>;
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

  constructor(readonly _entityApi: TerminationReasonApi<T>) {
    super(_entityApi);
  }
}

export interface TerminationReasonType<
  T extends DeSerializers = DefaultDeSerializers
> {
  reasonId: DeserializedType<T, 'Edm.Int32'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  employeesInfo: EmployeesInfoType<T>[];
}
