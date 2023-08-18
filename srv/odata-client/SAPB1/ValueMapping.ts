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
import { VmThirdPartyValuesData } from './VmThirdPartyValuesData';
import type { ValueMappingApi } from './ValueMappingApi';

/**
 * This class represents the entity "ValueMapping" of service "SAPB1".
 */
export class ValueMapping<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ValueMappingType<T>
{
  /**
   * Technical entity name for ValueMapping.
   */
  static _entityName = 'ValueMapping';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the ValueMapping entity
   */
  static _keys = ['AbsEntry'];
  /**
   * Abs Entry.
   */
  absEntry!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Object Id.
   * @nullable
   */
  objectId?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Object Abs Entry.
   * @nullable
   */
  objectAbsEntry?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vm Third Party Values Collection.
   * @nullable
   */
  vmThirdPartyValuesCollection?: VmThirdPartyValuesData<T>[] | null;

  constructor(readonly _entityApi: ValueMappingApi<T>) {
    super(_entityApi);
  }
}

export interface ValueMappingType<
  T extends DeSerializers = DefaultDeSerializers
> {
  absEntry: DeserializedType<T, 'Edm.Int32'>;
  objectId?: DeserializedType<T, 'Edm.Int32'> | null;
  objectAbsEntry?: DeserializedType<T, 'Edm.String'> | null;
  vmThirdPartyValuesCollection?: VmThirdPartyValuesData<T>[] | null;
}
