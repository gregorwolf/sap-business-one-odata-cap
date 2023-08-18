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
import type { U_Edi_UnitcodesApi } from './U_Edi_UnitcodesApi';

/**
 * This class represents the entity "U_EDI_UNITCODES" of service "SAPB1".
 */
export class U_Edi_Unitcodes<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements U_Edi_UnitcodesType<T>
{
  /**
   * Technical entity name for U_Edi_Unitcodes.
   */
  static _entityName = 'U_EDI_UNITCODES';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the U_Edi_Unitcodes entity
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
   * U Uo M.
   */
  uUoM!: DeserializedType<T, 'Edm.String'>;
  /**
   * U Uo M En 16931.
   * @nullable
   */
  uUoMEn16931?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Uo M Stlb Bau Z.
   * @nullable
   */
  uUoMStlbBauZ?: DeserializedType<T, 'Edm.String'> | null;

  constructor(readonly _entityApi: U_Edi_UnitcodesApi<T>) {
    super(_entityApi);
  }
}

export interface U_Edi_UnitcodesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  code: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  uUoM: DeserializedType<T, 'Edm.String'>;
  uUoMEn16931?: DeserializedType<T, 'Edm.String'> | null;
  uUoMStlbBauZ?: DeserializedType<T, 'Edm.String'> | null;
}
