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
import type { U_Ba_OfprApi } from './U_Ba_OfprApi';

/**
 * This class represents the entity "U_BA_OFPR" of service "SAPB1".
 */
export class U_Ba_Ofpr<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements U_Ba_OfprType<T>
{
  /**
   * Technical entity name for U_Ba_Ofpr.
   */
  static _entityName = 'U_BA_OFPR';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the U_Ba_Ofpr entity
   */
  static _keys = ['Code'];
  /**
   * Code.
   */
  code!: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   * @nullable
   */
  name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Fis Year.
   * @nullable
   */
  uFisYear?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Date From.
   * @nullable
   */
  uDateFrom?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * U Date To.
   * @nullable
   */
  uDateTo?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * U Open.
   * @nullable
   */
  uOpen?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Year Chng.
   * @nullable
   */
  uYearChng?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Change To.
   * @nullable
   */
  uChangeTo?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Post Prd.
   * @nullable
   */
  uPostPrd?: DeserializedType<T, 'Edm.Int32'> | null;

  constructor(readonly _entityApi: U_Ba_OfprApi<T>) {
    super(_entityApi);
  }
}

export interface U_Ba_OfprType<T extends DeSerializers = DefaultDeSerializers> {
  code: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  uFisYear?: DeserializedType<T, 'Edm.String'> | null;
  uDateFrom?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  uDateTo?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  uOpen?: DeserializedType<T, 'Edm.String'> | null;
  uYearChng?: DeserializedType<T, 'Edm.String'> | null;
  uChangeTo?: DeserializedType<T, 'Edm.String'> | null;
  uPostPrd?: DeserializedType<T, 'Edm.Int32'> | null;
}
