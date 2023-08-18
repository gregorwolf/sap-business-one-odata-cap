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
import type { ValueMappingCommunicationApi } from './ValueMappingCommunicationApi';
import { VmCommunicationTypeEnum } from './VmCommunicationTypeEnum';
import { VmCommunicationStatusEnum } from './VmCommunicationStatusEnum';

/**
 * This class represents the entity "ValueMappingCommunication" of service "SAPB1".
 */
export class ValueMappingCommunication<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ValueMappingCommunicationType<T>
{
  /**
   * Technical entity name for ValueMappingCommunication.
   */
  static _entityName = 'ValueMappingCommunication';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the ValueMappingCommunication entity
   */
  static _keys = ['AbsEntry'];
  /**
   * Abs Entry.
   */
  absEntry!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Third Party System Id.
   * @nullable
   */
  thirdPartySystemId?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Object Id.
   * @nullable
   */
  objectId?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Communication Type.
   * @nullable
   */
  communicationType?: VmCommunicationTypeEnum | null;
  /**
   * Start Date.
   * @nullable
   */
  startDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Start Time.
   * @nullable
   */
  startTime?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * End Date.
   * @nullable
   */
  endDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * End Time.
   * @nullable
   */
  endTime?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Message.
   * @nullable
   */
  message?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Status.
   * @nullable
   */
  status?: VmCommunicationStatusEnum | null;

  constructor(readonly _entityApi: ValueMappingCommunicationApi<T>) {
    super(_entityApi);
  }
}

export interface ValueMappingCommunicationType<
  T extends DeSerializers = DefaultDeSerializers
> {
  absEntry: DeserializedType<T, 'Edm.Int32'>;
  thirdPartySystemId?: DeserializedType<T, 'Edm.Int32'> | null;
  objectId?: DeserializedType<T, 'Edm.Int32'> | null;
  communicationType?: VmCommunicationTypeEnum | null;
  startDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  startTime?: DeserializedType<T, 'Edm.Int32'> | null;
  endDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  endTime?: DeserializedType<T, 'Edm.Int32'> | null;
  message?: DeserializedType<T, 'Edm.String'> | null;
  status?: VmCommunicationStatusEnum | null;
}
