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
import { EmployeeTransferDetail } from './EmployeeTransferDetail';
import type { EmployeeTransfersApi } from './EmployeeTransfersApi';
import { EmployeeTransferStatusEnum } from './EmployeeTransferStatusEnum';

/**
 * This class represents the entity "EmployeeTransfers" of service "SAPB1".
 */
export class EmployeeTransfers<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements EmployeeTransfersType<T>
{
  /**
   * Technical entity name for EmployeeTransfers.
   */
  static _entityName = 'EmployeeTransfers';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the EmployeeTransfers entity
   */
  static _keys = ['TransferID'];
  /**
   * Transfer Id.
   */
  transferId!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Trans Start Date.
   * @nullable
   */
  transStartDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Trans Start Time.
   * @nullable
   */
  transStartTime?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  /**
   * Trans End Date.
   * @nullable
   */
  transEndDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Trans End Time.
   * @nullable
   */
  transEndTime?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  /**
   * Status.
   * @nullable
   */
  status?: EmployeeTransferStatusEnum | null;
  /**
   * Comment.
   * @nullable
   */
  comment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Employee Transfer Details.
   * @nullable
   */
  employeeTransferDetails?: EmployeeTransferDetail<T>[] | null;

  constructor(readonly _entityApi: EmployeeTransfersApi<T>) {
    super(_entityApi);
  }
}

export interface EmployeeTransfersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  transferId: DeserializedType<T, 'Edm.Int32'>;
  transStartDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  transStartTime?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  transEndDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  transEndTime?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  status?: EmployeeTransferStatusEnum | null;
  comment?: DeserializedType<T, 'Edm.String'> | null;
  employeeTransferDetails?: EmployeeTransferDetail<T>[] | null;
}
