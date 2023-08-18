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
import type { U_Ba_OdrnApi } from './U_Ba_OdrnApi';

/**
 * This class represents the entity "U_BA_ODRN" of service "SAPB1".
 */
export class U_Ba_Odrn<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements U_Ba_OdrnType<T>
{
  /**
   * Technical entity name for U_Ba_Odrn.
   */
  static _entityName = 'U_BA_ODRN';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the U_Ba_Odrn entity
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
   * U Run Id.
   * @nullable
   */
  uRunId?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U Dpr Ar Id.
   * @nullable
   */
  uDprArId?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U Status.
   * @nullable
   */
  uStatus?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U Canceled.
   * @nullable
   */
  uCanceled?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Rvrsl Run.
   * @nullable
   */
  uRvrslRun?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U Post Date.
   * @nullable
   */
  uPostDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * U Fis Year.
   * @nullable
   */
  uFisYear?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Period.
   * @nullable
   */
  uPeriod?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U Key Date.
   * @nullable
   */
  uKeyDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * U Remark.
   * @nullable
   */
  uRemark?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Num Docs.
   * @nullable
   */
  uNumDocs?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U Sum Depr.
   * @nullable
   */
  uSumDepr?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * U Rel Date.
   * @nullable
   */
  uRelDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * U Rel Time.
   * @nullable
   */
  uRelTime?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  /**
   * U Rel User.
   * @nullable
   */
  uRelUser?: DeserializedType<T, 'Edm.String'> | null;

  constructor(readonly _entityApi: U_Ba_OdrnApi<T>) {
    super(_entityApi);
  }
}

export interface U_Ba_OdrnType<T extends DeSerializers = DefaultDeSerializers> {
  code: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  uRunId?: DeserializedType<T, 'Edm.Int32'> | null;
  uDprArId?: DeserializedType<T, 'Edm.Int32'> | null;
  uStatus?: DeserializedType<T, 'Edm.Int32'> | null;
  uCanceled?: DeserializedType<T, 'Edm.String'> | null;
  uRvrslRun?: DeserializedType<T, 'Edm.Int32'> | null;
  uPostDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  uFisYear?: DeserializedType<T, 'Edm.String'> | null;
  uPeriod?: DeserializedType<T, 'Edm.Int32'> | null;
  uKeyDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  uRemark?: DeserializedType<T, 'Edm.String'> | null;
  uNumDocs?: DeserializedType<T, 'Edm.Int32'> | null;
  uSumDepr?: DeserializedType<T, 'Edm.Double'> | null;
  uRelDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  uRelTime?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  uRelUser?: DeserializedType<T, 'Edm.String'> | null;
}
