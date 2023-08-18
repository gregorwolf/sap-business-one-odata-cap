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
import type { U_Bd_SrepApi } from './U_Bd_SrepApi';

/**
 * This class represents the entity "U_BD_SREP" of service "SAPB1".
 */
export class U_Bd_Srep<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements U_Bd_SrepType<T>
{
  /**
   * Technical entity name for U_Bd_Srep.
   */
  static _entityName = 'U_BD_SREP';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the U_Bd_Srep entity
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
   * U Turnov.
   * @nullable
   */
  uTurnov?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * U Book Key.
   * @nullable
   */
  uBookKey?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Account.
   * @nullable
   */
  uAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Acc Bal.
   * @nullable
   */
  uAccBal?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Nr 1.
   * @nullable
   */
  uNr1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Nr 2.
   * @nullable
   */
  uNr2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Dt.
   * @nullable
   */
  uDt?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * U Txt.
   * @nullable
   */
  uTxt?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Vatid.
   * @nullable
   */
  uVatid?: DeserializedType<T, 'Edm.String'> | null;

  constructor(readonly _entityApi: U_Bd_SrepApi<T>) {
    super(_entityApi);
  }
}

export interface U_Bd_SrepType<T extends DeSerializers = DefaultDeSerializers> {
  code: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  uTurnov?: DeserializedType<T, 'Edm.Double'> | null;
  uBookKey?: DeserializedType<T, 'Edm.String'> | null;
  uAccount?: DeserializedType<T, 'Edm.String'> | null;
  uAccBal?: DeserializedType<T, 'Edm.String'> | null;
  uNr1?: DeserializedType<T, 'Edm.String'> | null;
  uNr2?: DeserializedType<T, 'Edm.String'> | null;
  uDt?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  uTxt?: DeserializedType<T, 'Edm.String'> | null;
  uVatid?: DeserializedType<T, 'Edm.String'> | null;
}
