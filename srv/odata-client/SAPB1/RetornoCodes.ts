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
import type { RetornoCodesApi } from './RetornoCodesApi';
import { BoBoeStatus } from './BoBoeStatus';

/**
 * This class represents the entity "RetornoCodes" of service "SAPB1".
 */
export class RetornoCodes<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements RetornoCodesType<T>
{
  /**
   * Technical entity name for RetornoCodes.
   */
  static _entityName = 'RetornoCodes';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the RetornoCodes entity
   */
  static _keys = ['AbsEntry'];
  /**
   * Abs Entry.
   */
  absEntry!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Occurence Code.
   * @nullable
   */
  occurenceCode?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Movement Code.
   * @nullable
   */
  movementCode?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Boe Status.
   * @nullable
   */
  boeStatus?: BoBoeStatus | null;
  /**
   * Description.
   * @nullable
   */
  description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Color.
   * @nullable
   */
  color?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * File Format.
   * @nullable
   */
  fileFormat?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bank Code.
   * @nullable
   */
  bankCode?: DeserializedType<T, 'Edm.String'> | null;

  constructor(readonly _entityApi: RetornoCodesApi<T>) {
    super(_entityApi);
  }
}

export interface RetornoCodesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  absEntry: DeserializedType<T, 'Edm.Int32'>;
  occurenceCode?: DeserializedType<T, 'Edm.Int32'> | null;
  movementCode?: DeserializedType<T, 'Edm.Int32'> | null;
  boeStatus?: BoBoeStatus | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  color?: DeserializedType<T, 'Edm.Int32'> | null;
  fileFormat?: DeserializedType<T, 'Edm.String'> | null;
  bankCode?: DeserializedType<T, 'Edm.String'> | null;
}
