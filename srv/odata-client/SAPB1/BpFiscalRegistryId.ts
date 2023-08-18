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
import type { BpFiscalRegistryIdApi } from './BpFiscalRegistryIdApi';
import { BusinessPlaces, BusinessPlacesType } from './BusinessPlaces';

/**
 * This class represents the entity "BPFiscalRegistryID" of service "SAPB1".
 */
export class BpFiscalRegistryId<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements BpFiscalRegistryIdType<T>
{
  /**
   * Technical entity name for BpFiscalRegistryId.
   */
  static _entityName = 'BPFiscalRegistryID';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the BpFiscalRegistryId entity
   */
  static _keys = ['Numerator'];
  /**
   * Numerator.
   */
  numerator!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Cnae Code.
   * @nullable
   */
  cnaeCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link BusinessPlaces} entity.
   */
  businessPlaces!: BusinessPlaces<T>[];

  constructor(readonly _entityApi: BpFiscalRegistryIdApi<T>) {
    super(_entityApi);
  }
}

export interface BpFiscalRegistryIdType<
  T extends DeSerializers = DefaultDeSerializers
> {
  numerator: DeserializedType<T, 'Edm.Int32'>;
  cnaeCode?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  businessPlaces: BusinessPlacesType<T>[];
}
