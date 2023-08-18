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
import type { U_Ba_OdpvnApi } from './U_Ba_OdpvnApi';

/**
 * This class represents the entity "U_BA_ODPVN" of service "SAPB1".
 */
export class U_Ba_Odpvn<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements U_Ba_OdpvnType<T>
{
  /**
   * Technical entity name for U_Ba_Odpvn.
   */
  static _entityName = 'U_BA_ODPVN';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the U_Ba_Odpvn entity
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
   * U Asst Num.
   * @nullable
   */
  uAsstNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Dpr Ar Id.
   * @nullable
   */
  uDprArId?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U Ref From.
   * @nullable
   */
  uRefFrom?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * U Ref To.
   * @nullable
   */
  uRefTo?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * U Fis Year.
   * @nullable
   */
  uFisYear?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Prft Cntr.
   * @nullable
   */
  uPrftCntr?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Project.
   * @nullable
   */
  uProject?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Or Dp Plan.
   * @nullable
   */
  uOrDpPlan?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * U Sp Dp Key.
   * @nullable
   */
  uSpDpKey?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Sp Dp Plan.
   * @nullable
   */
  uSpDpPlan?: DeserializedType<T, 'Edm.Double'> | null;

  constructor(readonly _entityApi: U_Ba_OdpvnApi<T>) {
    super(_entityApi);
  }
}

export interface U_Ba_OdpvnType<
  T extends DeSerializers = DefaultDeSerializers
> {
  code: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  uAsstNum?: DeserializedType<T, 'Edm.String'> | null;
  uDprArId?: DeserializedType<T, 'Edm.Int32'> | null;
  uRefFrom?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  uRefTo?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  uFisYear?: DeserializedType<T, 'Edm.String'> | null;
  uPrftCntr?: DeserializedType<T, 'Edm.String'> | null;
  uProject?: DeserializedType<T, 'Edm.String'> | null;
  uOrDpPlan?: DeserializedType<T, 'Edm.Double'> | null;
  uSpDpKey?: DeserializedType<T, 'Edm.String'> | null;
  uSpDpPlan?: DeserializedType<T, 'Edm.Double'> | null;
}
