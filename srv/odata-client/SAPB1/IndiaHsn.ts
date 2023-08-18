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
import type { IndiaHsnApi } from './IndiaHsnApi';
import { Items, ItemsType } from './Items';

/**
 * This class represents the entity "IndiaHsn" of service "SAPB1".
 */
export class IndiaHsn<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements IndiaHsnType<T>
{
  /**
   * Technical entity name for IndiaHsn.
   */
  static _entityName = 'IndiaHsn';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the IndiaHsn entity
   */
  static _keys = ['AbsEntry'];
  /**
   * Abs Entry.
   */
  absEntry!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Chapter.
   * @nullable
   */
  chapter?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Heading.
   * @nullable
   */
  heading?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sub Heading.
   * @nullable
   */
  subHeading?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Chapter Id.
   * @nullable
   */
  chapterId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link Items} entity.
   */
  items!: Items<T>[];

  constructor(readonly _entityApi: IndiaHsnApi<T>) {
    super(_entityApi);
  }
}

export interface IndiaHsnType<T extends DeSerializers = DefaultDeSerializers> {
  absEntry: DeserializedType<T, 'Edm.Int32'>;
  chapter?: DeserializedType<T, 'Edm.String'> | null;
  heading?: DeserializedType<T, 'Edm.String'> | null;
  subHeading?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  chapterId?: DeserializedType<T, 'Edm.String'> | null;
  items: ItemsType<T>[];
}
