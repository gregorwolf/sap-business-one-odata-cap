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
import type { U_Ba_OdocApi } from './U_Ba_OdocApi';

/**
 * This class represents the entity "U_BA_ODOC" of service "SAPB1".
 */
export class U_Ba_Odoc<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements U_Ba_OdocType<T>
{
  /**
   * Technical entity name for U_Ba_Odoc.
   */
  static _entityName = 'U_BA_ODOC';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the U_Ba_Odoc entity
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
   * U Doc Num.
   * @nullable
   */
  uDocNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Fis Year.
   * @nullable
   */
  uFisYear?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Trns Id.
   * @nullable
   */
  uTrnsId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Canceled.
   * @nullable
   */
  uCanceled?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Gl Doc Num.
   * @nullable
   */
  uGlDocNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Post Date.
   * @nullable
   */
  uPostDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * U Post Prd.
   * @nullable
   */
  uPostPrd?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U Post Desc.
   * @nullable
   */
  uPostDesc?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Doc Type.
   * @nullable
   */
  uDocType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Code.
   * @nullable
   */
  uCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Crea Date.
   * @nullable
   */
  uCreaDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * U Crea Time.
   * @nullable
   */
  uCreaTime?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  /**
   * U Crea User.
   * @nullable
   */
  uCreaUser?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Dpr Typ Id.
   * @nullable
   */
  uDprTypId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Gl Post Dt.
   * @nullable
   */
  uGlPostDt?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * U Ref.
   * @nullable
   */
  uRef?: DeserializedType<T, 'Edm.String'> | null;

  constructor(readonly _entityApi: U_Ba_OdocApi<T>) {
    super(_entityApi);
  }
}

export interface U_Ba_OdocType<T extends DeSerializers = DefaultDeSerializers> {
  code: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  uDocNum?: DeserializedType<T, 'Edm.String'> | null;
  uFisYear?: DeserializedType<T, 'Edm.String'> | null;
  uTrnsId?: DeserializedType<T, 'Edm.String'> | null;
  uCanceled?: DeserializedType<T, 'Edm.String'> | null;
  uGlDocNum?: DeserializedType<T, 'Edm.String'> | null;
  uPostDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  uPostPrd?: DeserializedType<T, 'Edm.Int32'> | null;
  uPostDesc?: DeserializedType<T, 'Edm.String'> | null;
  uDocType?: DeserializedType<T, 'Edm.String'> | null;
  uCode?: DeserializedType<T, 'Edm.String'> | null;
  uCreaDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  uCreaTime?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  uCreaUser?: DeserializedType<T, 'Edm.String'> | null;
  uDprTypId?: DeserializedType<T, 'Edm.String'> | null;
  uGlPostDt?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  uRef?: DeserializedType<T, 'Edm.String'> | null;
}
