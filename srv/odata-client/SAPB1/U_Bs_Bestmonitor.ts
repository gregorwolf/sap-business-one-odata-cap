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
import type { U_Bs_BestmonitorApi } from './U_Bs_BestmonitorApi';

/**
 * This class represents the entity "U_BS_BESTMONITOR" of service "SAPB1".
 */
export class U_Bs_Bestmonitor<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements U_Bs_BestmonitorType<T>
{
  /**
   * Technical entity name for U_Bs_Bestmonitor.
   */
  static _entityName = 'U_BS_BESTMONITOR';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the U_Bs_Bestmonitor entity
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
   * U Whs Code.
   * @nullable
   */
  uWhsCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Zdiffgelb.
   * @nullable
   */
  uZdiffgelb?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U Zdiffrot.
   * @nullable
   */
  uZdiffrot?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U Zdiffschwarz.
   * @nullable
   */
  uZdiffschwarz?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U Uhrzeitvorgabe.
   * @nullable
   */
  uUhrzeitvorgabe?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  /**
   * U Zdiffinfoservice.
   * @nullable
   */
  uZdiffinfoservice?: DeserializedType<T, 'Edm.Int32'> | null;

  constructor(readonly _entityApi: U_Bs_BestmonitorApi<T>) {
    super(_entityApi);
  }
}

export interface U_Bs_BestmonitorType<
  T extends DeSerializers = DefaultDeSerializers
> {
  code: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  uWhsCode?: DeserializedType<T, 'Edm.String'> | null;
  uZdiffgelb?: DeserializedType<T, 'Edm.Int32'> | null;
  uZdiffrot?: DeserializedType<T, 'Edm.Int32'> | null;
  uZdiffschwarz?: DeserializedType<T, 'Edm.Int32'> | null;
  uUhrzeitvorgabe?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  uZdiffinfoservice?: DeserializedType<T, 'Edm.Int32'> | null;
}
