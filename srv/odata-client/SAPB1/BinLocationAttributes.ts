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
import type { BinLocationAttributesApi } from './BinLocationAttributesApi';
import { BinLocationFields, BinLocationFieldsType } from './BinLocationFields';

/**
 * This class represents the entity "BinLocationAttributes" of service "SAPB1".
 */
export class BinLocationAttributes<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BinLocationAttributesType<T>
{
  /**
   * Technical entity name for BinLocationAttributes.
   */
  static _entityName = 'BinLocationAttributes';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the BinLocationAttributes entity
   */
  static _keys = ['AbsEntry'];
  /**
   * Attribute.
   * @nullable
   */
  attribute?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Code.
   * @nullable
   */
  code?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Abs Entry.
   */
  absEntry!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * One-to-one navigation property to the {@link BinLocationFields} entity.
   */
  binLocationField?: BinLocationFields<T> | null;

  constructor(readonly _entityApi: BinLocationAttributesApi<T>) {
    super(_entityApi);
  }
}

export interface BinLocationAttributesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  attribute?: DeserializedType<T, 'Edm.Int32'> | null;
  code?: DeserializedType<T, 'Edm.String'> | null;
  absEntry: DeserializedType<T, 'Edm.Int32'>;
  binLocationField?: BinLocationFieldsType<T> | null;
}
