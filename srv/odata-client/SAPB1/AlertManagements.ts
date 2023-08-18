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
import { AlertManagementRecipient } from './AlertManagementRecipient';
import { AlertManagementDocument } from './AlertManagementDocument';
import type { AlertManagementsApi } from './AlertManagementsApi';
import { AlertManagementTypeEnum } from './AlertManagementTypeEnum';
import { AlertManagementPriorityEnum } from './AlertManagementPriorityEnum';
import { BoYesNoEnum } from './BoYesNoEnum';
import { AlertManagementFrequencyType } from './AlertManagementFrequencyType';

/**
 * This class represents the entity "AlertManagements" of service "SAPB1".
 */
export class AlertManagements<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements AlertManagementsType<T>
{
  /**
   * Technical entity name for AlertManagements.
   */
  static _entityName = 'AlertManagements';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the AlertManagements entity
   */
  static _keys = ['Code'];
  /**
   * Code.
   */
  code!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Name.
   * @nullable
   */
  name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Type.
   * @nullable
   */
  type?: AlertManagementTypeEnum | null;
  /**
   * Priority.
   * @nullable
   */
  priority?: AlertManagementPriorityEnum | null;
  /**
   * Active.
   * @nullable
   */
  active?: BoYesNoEnum | null;
  /**
   * Param.
   * @nullable
   */
  param?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Query Id.
   * @nullable
   */
  queryId?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Frequency Type.
   * @nullable
   */
  frequencyType?: AlertManagementFrequencyType | null;
  /**
   * Day Of Execution.
   * @nullable
   */
  dayOfExecution?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Execution Time.
   * @nullable
   */
  executionTime?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  /**
   * Last Execution Date.
   * @nullable
   */
  lastExecutionDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Last Execution Time.
   * @nullable
   */
  lastExecutionTime?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Next Execution Date.
   * @nullable
   */
  nextExecutionDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Next Execution Time.
   * @nullable
   */
  nextExecutionTime?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  /**
   * Save History.
   * @nullable
   */
  saveHistory?: BoYesNoEnum | null;
  /**
   * Frequency Interval.
   * @nullable
   */
  frequencyInterval?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Alert Management Recipients.
   * @nullable
   */
  alertManagementRecipients?: AlertManagementRecipient<T>[] | null;
  /**
   * Alert Management Documents.
   * @nullable
   */
  alertManagementDocuments?: AlertManagementDocument<T>[] | null;

  constructor(readonly _entityApi: AlertManagementsApi<T>) {
    super(_entityApi);
  }
}

export interface AlertManagementsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  code: DeserializedType<T, 'Edm.Int32'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  type?: AlertManagementTypeEnum | null;
  priority?: AlertManagementPriorityEnum | null;
  active?: BoYesNoEnum | null;
  param?: DeserializedType<T, 'Edm.String'> | null;
  queryId?: DeserializedType<T, 'Edm.Int32'> | null;
  frequencyType?: AlertManagementFrequencyType | null;
  dayOfExecution?: DeserializedType<T, 'Edm.Int32'> | null;
  executionTime?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  lastExecutionDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  lastExecutionTime?: DeserializedType<T, 'Edm.Int32'> | null;
  nextExecutionDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  nextExecutionTime?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  saveHistory?: BoYesNoEnum | null;
  frequencyInterval?: DeserializedType<T, 'Edm.Int32'> | null;
  alertManagementRecipients?: AlertManagementRecipient<T>[] | null;
  alertManagementDocuments?: AlertManagementDocument<T>[] | null;
}
