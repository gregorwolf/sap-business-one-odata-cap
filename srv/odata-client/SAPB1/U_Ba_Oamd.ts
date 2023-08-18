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
import type { U_Ba_OamdApi } from './U_Ba_OamdApi';

/**
 * This class represents the entity "U_BA_OAMD" of service "SAPB1".
 */
export class U_Ba_Oamd<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements U_Ba_OamdType<T>
{
  /**
   * Technical entity name for U_Ba_Oamd.
   */
  static _entityName = 'U_BA_OAMD';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the U_Ba_Oamd entity
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
   * U Item Code.
   * @nullable
   */
  uItemCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Status Id.
   * @nullable
   */
  uStatusId?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U Inv Num.
   * @nullable
   */
  uInvNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Desc.
   * @nullable
   */
  uDesc?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Desc S.
   * @nullable
   */
  uDescS?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Cap Date.
   * @nullable
   */
  uCapDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * U Acq Date.
   * @nullable
   */
  uAcqDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * U Ret Date.
   * @nullable
   */
  uRetDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * U Vend Code.
   * @nullable
   */
  uVendCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Vend Desc.
   * @nullable
   */
  uVendDesc?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Ser Num.
   * @nullable
   */
  uSerNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U User 01.
   * @nullable
   */
  uUser01?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U User 02.
   * @nullable
   */
  uUser02?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U User 03.
   * @nullable
   */
  uUser03?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * U User 04.
   * @nullable
   */
  uUser04?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * U Dx Date.
   * @nullable
   */
  uDxDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * U Dx Fs Year.
   * @nullable
   */
  uDxFsYear?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Dx Period.
   * @nullable
   */
  uDxPeriod?: DeserializedType<T, 'Edm.Int32'> | null;
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
   * U Updt Date.
   * @nullable
   */
  uUpdtDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * U Updt Time.
   * @nullable
   */
  uUpdtTime?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  /**
   * U Updt User.
   * @nullable
   */
  uUpdtUser?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U To Be Deact.
   * @nullable
   */
  uToBeDeact?: DeserializedType<T, 'Edm.String'> | null;

  constructor(readonly _entityApi: U_Ba_OamdApi<T>) {
    super(_entityApi);
  }
}

export interface U_Ba_OamdType<T extends DeSerializers = DefaultDeSerializers> {
  code: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  uAsstNum?: DeserializedType<T, 'Edm.String'> | null;
  uItemCode?: DeserializedType<T, 'Edm.String'> | null;
  uStatusId?: DeserializedType<T, 'Edm.Int32'> | null;
  uInvNum?: DeserializedType<T, 'Edm.String'> | null;
  uDesc?: DeserializedType<T, 'Edm.String'> | null;
  uDescS?: DeserializedType<T, 'Edm.String'> | null;
  uCapDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  uAcqDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  uRetDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  uVendCode?: DeserializedType<T, 'Edm.String'> | null;
  uVendDesc?: DeserializedType<T, 'Edm.String'> | null;
  uSerNum?: DeserializedType<T, 'Edm.String'> | null;
  uUser01?: DeserializedType<T, 'Edm.String'> | null;
  uUser02?: DeserializedType<T, 'Edm.String'> | null;
  uUser03?: DeserializedType<T, 'Edm.Double'> | null;
  uUser04?: DeserializedType<T, 'Edm.Double'> | null;
  uDxDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  uDxFsYear?: DeserializedType<T, 'Edm.String'> | null;
  uDxPeriod?: DeserializedType<T, 'Edm.Int32'> | null;
  uCreaDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  uCreaTime?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  uCreaUser?: DeserializedType<T, 'Edm.String'> | null;
  uUpdtDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  uUpdtTime?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  uUpdtUser?: DeserializedType<T, 'Edm.String'> | null;
  uToBeDeact?: DeserializedType<T, 'Edm.String'> | null;
}
