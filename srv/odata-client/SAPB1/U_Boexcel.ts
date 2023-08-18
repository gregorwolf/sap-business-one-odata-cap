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
import type { U_BoexcelApi } from './U_BoexcelApi';

/**
 * This class represents the entity "U_BOEXCEL" of service "SAPB1".
 */
export class U_Boexcel<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements U_BoexcelType<T>
{
  /**
   * Technical entity name for U_Boexcel.
   */
  static _entityName = 'U_BOEXCEL';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the U_Boexcel entity
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
   * U Follow Up.
   * @nullable
   */
  uFollowUp?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Activity.
   * @nullable
   */
  uActivity?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U Flw Time.
   * @nullable
   */
  uFlwTime?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U Flw Unit.
   * @nullable
   */
  uFlwUnit?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U Flw Dur.
   * @nullable
   */
  uFlwDur?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U Flw Dur Un.
   * @nullable
   */
  uFlwDurUn?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U Reminder.
   * @nullable
   */
  uReminder?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Rem Time.
   * @nullable
   */
  uRemTime?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U Rem Unit.
   * @nullable
   */
  uRemUnit?: DeserializedType<T, 'Edm.Int32'> | null;

  constructor(readonly _entityApi: U_BoexcelApi<T>) {
    super(_entityApi);
  }
}

export interface U_BoexcelType<T extends DeSerializers = DefaultDeSerializers> {
  code: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  uFollowUp?: DeserializedType<T, 'Edm.String'> | null;
  uActivity?: DeserializedType<T, 'Edm.Int32'> | null;
  uFlwTime?: DeserializedType<T, 'Edm.Int32'> | null;
  uFlwUnit?: DeserializedType<T, 'Edm.Int32'> | null;
  uFlwDur?: DeserializedType<T, 'Edm.Int32'> | null;
  uFlwDurUn?: DeserializedType<T, 'Edm.Int32'> | null;
  uReminder?: DeserializedType<T, 'Edm.String'> | null;
  uRemTime?: DeserializedType<T, 'Edm.Int32'> | null;
  uRemUnit?: DeserializedType<T, 'Edm.Int32'> | null;
}
