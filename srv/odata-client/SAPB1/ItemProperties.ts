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
import type { ItemPropertiesApi } from './ItemPropertiesApi';

/**
 * This class represents the entity "ItemProperties" of service "SAPB1".
 */
export class ItemProperties<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ItemPropertiesType<T>
{
  /**
   * Technical entity name for ItemProperties.
   */
  static _entityName = 'ItemProperties';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the ItemProperties entity
   */
  static _keys = ['Number'];
  /**
   * Number.
   */
  number!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Property Name.
   * @nullable
   */
  propertyName?: DeserializedType<T, 'Edm.String'> | null;

  constructor(readonly _entityApi: ItemPropertiesApi<T>) {
    super(_entityApi);
  }
}

export interface ItemPropertiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  number: DeserializedType<T, 'Edm.Int32'>;
  propertyName?: DeserializedType<T, 'Edm.String'> | null;
}
