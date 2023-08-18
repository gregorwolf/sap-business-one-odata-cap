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
import type { U_BfuserformsApi } from './U_BfuserformsApi';

/**
 * This class represents the entity "U_BFUSERFORMS" of service "SAPB1".
 */
export class U_Bfuserforms<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements U_BfuserformsType<T>
{
  /**
   * Technical entity name for U_Bfuserforms.
   */
  static _entityName = 'U_BFUSERFORMS';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the U_Bfuserforms entity
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
   * U Form Type.
   * @nullable
   */
  uFormType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U User.
   * @nullable
   */
  uUser?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Top.
   * @nullable
   */
  uTop?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U Left.
   * @nullable
   */
  uLeft?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U Height.
   * @nullable
   */
  uHeight?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U Width.
   * @nullable
   */
  uWidth?: DeserializedType<T, 'Edm.Int32'> | null;

  constructor(readonly _entityApi: U_BfuserformsApi<T>) {
    super(_entityApi);
  }
}

export interface U_BfuserformsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  code: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  uFormType?: DeserializedType<T, 'Edm.String'> | null;
  uUser?: DeserializedType<T, 'Edm.String'> | null;
  uTop?: DeserializedType<T, 'Edm.Int32'> | null;
  uLeft?: DeserializedType<T, 'Edm.Int32'> | null;
  uHeight?: DeserializedType<T, 'Edm.Int32'> | null;
  uWidth?: DeserializedType<T, 'Edm.Int32'> | null;
}
