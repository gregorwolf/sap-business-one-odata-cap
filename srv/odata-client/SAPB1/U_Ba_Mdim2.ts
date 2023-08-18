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
import type { U_Ba_Mdim2Api } from './U_Ba_Mdim2Api';

/**
 * This class represents the entity "U_BA_MDIM2" of service "SAPB1".
 */
export class U_Ba_Mdim2<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements U_Ba_Mdim2Type<T>
{
  /**
   * Technical entity name for U_Ba_Mdim2.
   */
  static _entityName = 'U_BA_MDIM2';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the U_Ba_Mdim2 entity
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
   * U Asst Num.
   * @nullable
   */
  uAsstNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Desc.
   * @nullable
   */
  uDesc?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Inv Num.
   * @nullable
   */
  uInvNum?: DeserializedType<T, 'Edm.String'> | null;

  constructor(readonly _entityApi: U_Ba_Mdim2Api<T>) {
    super(_entityApi);
  }
}

export interface U_Ba_Mdim2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  code: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  uImpId?: DeserializedType<T, 'Edm.Int32'> | null;
  uAsstNum?: DeserializedType<T, 'Edm.String'> | null;
  uDesc?: DeserializedType<T, 'Edm.String'> | null;
  uInvNum?: DeserializedType<T, 'Edm.String'> | null;
}
