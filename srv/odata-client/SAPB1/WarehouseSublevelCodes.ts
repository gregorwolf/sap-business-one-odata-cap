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
import type { WarehouseSublevelCodesApi } from './WarehouseSublevelCodesApi';
import { BinLocationFields, BinLocationFieldsType } from './BinLocationFields';

/**
 * This class represents the entity "WarehouseSublevelCodes" of service "SAPB1".
 */
export class WarehouseSublevelCodes<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements WarehouseSublevelCodesType<T>
{
  /**
   * Technical entity name for WarehouseSublevelCodes.
   */
  static _entityName = 'WarehouseSublevelCodes';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the WarehouseSublevelCodes entity
   */
  static _keys = ['AbsEntry'];
  /**
   * Warehouse Sublevel.
   * @nullable
   */
  warehouseSublevel?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Code.
   * @nullable
   */
  code?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Abs Entry.
   */
  absEntry!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * One-to-one navigation property to the {@link BinLocationFields} entity.
   */
  binLocationField?: BinLocationFields<T> | null;

  constructor(readonly _entityApi: WarehouseSublevelCodesApi<T>) {
    super(_entityApi);
  }
}

export interface WarehouseSublevelCodesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  warehouseSublevel?: DeserializedType<T, 'Edm.Int32'> | null;
  code?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  absEntry: DeserializedType<T, 'Edm.Int32'>;
  binLocationField?: BinLocationFieldsType<T> | null;
}
