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
import type { IndiaSacCodeApi } from './IndiaSacCodeApi';
import { Items, ItemsType } from './Items';

/**
 * This class represents the entity "IndiaSacCode" of service "SAPB1".
 */
export class IndiaSacCode<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements IndiaSacCodeType<T>
{
  /**
   * Technical entity name for IndiaSacCode.
   */
  static _entityName = 'IndiaSacCode';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the IndiaSacCode entity
   */
  static _keys = ['AbsEntry'];
  /**
   * Abs Entry.
   */
  absEntry!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Service Code.
   * @nullable
   */
  serviceCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Service Name.
   * @nullable
   */
  serviceName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link Items} entity.
   */
  items!: Items<T>[];

  constructor(readonly _entityApi: IndiaSacCodeApi<T>) {
    super(_entityApi);
  }
}

export interface IndiaSacCodeType<
  T extends DeSerializers = DefaultDeSerializers
> {
  absEntry: DeserializedType<T, 'Edm.Int32'>;
  serviceCode?: DeserializedType<T, 'Edm.String'> | null;
  serviceName?: DeserializedType<T, 'Edm.String'> | null;
  items: ItemsType<T>[];
}
