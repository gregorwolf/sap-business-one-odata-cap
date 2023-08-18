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
import type { U_Ba_CmdimApi } from './U_Ba_CmdimApi';

/**
 * This class represents the entity "U_BA_CMDIM" of service "SAPB1".
 */
export class U_Ba_Cmdim<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements U_Ba_CmdimType<T>
{
  /**
   * Technical entity name for U_Ba_Cmdim.
   */
  static _entityName = 'U_BA_CMDIM';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the U_Ba_Cmdim entity
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
   * U Imp Id.
   * @nullable
   */
  uImpId?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U Status.
   * @nullable
   */
  uStatus?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U Num Proc.
   * @nullable
   */
  uNumProc?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U Num Save.
   * @nullable
   */
  uNumSave?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U Imp Date.
   * @nullable
   */
  uImpDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * U Imp Time.
   * @nullable
   */
  uImpTime?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  /**
   * U Imp User.
   * @nullable
   */
  uImpUser?: DeserializedType<T, 'Edm.String'> | null;

  constructor(readonly _entityApi: U_Ba_CmdimApi<T>) {
    super(_entityApi);
  }
}

export interface U_Ba_CmdimType<
  T extends DeSerializers = DefaultDeSerializers
> {
  code: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  uImpId?: DeserializedType<T, 'Edm.Int32'> | null;
  uStatus?: DeserializedType<T, 'Edm.Int32'> | null;
  uNumProc?: DeserializedType<T, 'Edm.Int32'> | null;
  uNumSave?: DeserializedType<T, 'Edm.Int32'> | null;
  uImpDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  uImpTime?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  uImpUser?: DeserializedType<T, 'Edm.String'> | null;
}
