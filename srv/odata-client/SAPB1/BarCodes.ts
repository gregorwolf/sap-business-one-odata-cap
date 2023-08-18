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
import type { BarCodesApi } from './BarCodesApi';
import { Items, ItemsType } from './Items';
import {
  UnitOfMeasurements,
  UnitOfMeasurementsType
} from './UnitOfMeasurements';

/**
 * This class represents the entity "BarCodes" of service "SAPB1".
 */
export class BarCodes<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements BarCodesType<T>
{
  /**
   * Technical entity name for BarCodes.
   */
  static _entityName = 'BarCodes';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the BarCodes entity
   */
  static _keys = ['AbsEntry'];
  /**
   * Abs Entry.
   */
  absEntry!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Item No.
   * @nullable
   */
  itemNo?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Uo M Entry.
   * @nullable
   */
  uoMEntry?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Barcode.
   * @nullable
   */
  barcode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Free Text.
   * @nullable
   */
  freeText?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link Items} entity.
   */
  item?: Items<T> | null;
  /**
   * One-to-one navigation property to the {@link UnitOfMeasurements} entity.
   */
  unitOfMeasurement?: UnitOfMeasurements<T> | null;

  constructor(readonly _entityApi: BarCodesApi<T>) {
    super(_entityApi);
  }
}

export interface BarCodesType<T extends DeSerializers = DefaultDeSerializers> {
  absEntry: DeserializedType<T, 'Edm.Int32'>;
  itemNo?: DeserializedType<T, 'Edm.String'> | null;
  uoMEntry?: DeserializedType<T, 'Edm.Int32'> | null;
  barcode?: DeserializedType<T, 'Edm.String'> | null;
  freeText?: DeserializedType<T, 'Edm.String'> | null;
  item?: ItemsType<T> | null;
  unitOfMeasurement?: UnitOfMeasurementsType<T> | null;
}
