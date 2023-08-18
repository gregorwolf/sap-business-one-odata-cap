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
import type { WTaxTypeCodesApi } from './WTaxTypeCodesApi';

/**
 * This class represents the entity "WTaxTypeCodes" of service "SAPB1".
 */
export class WTaxTypeCodes<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements WTaxTypeCodesType<T>
{
  /**
   * Technical entity name for WTaxTypeCodes.
   */
  static _entityName = 'WTaxTypeCodes';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the WTaxTypeCodes entity
   */
  static _keys = ['Code'];
  /**
   * Code.
   */
  code!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Description.
   * @nullable
   */
  description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(readonly _entityApi: WTaxTypeCodesApi<T>) {
    super(_entityApi);
  }
}

export interface WTaxTypeCodesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  code: DeserializedType<T, 'Edm.Int32'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
