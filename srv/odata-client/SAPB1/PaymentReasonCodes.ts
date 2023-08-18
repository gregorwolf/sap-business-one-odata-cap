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
import type { PaymentReasonCodesApi } from './PaymentReasonCodesApi';

/**
 * This class represents the entity "PaymentReasonCodes" of service "SAPB1".
 */
export class PaymentReasonCodes<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements PaymentReasonCodesType<T>
{
  /**
   * Technical entity name for PaymentReasonCodes.
   */
  static _entityName = 'PaymentReasonCodes';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the PaymentReasonCodes entity
   */
  static _keys = ['Code'];
  /**
   * Code.
   */
  code!: DeserializedType<T, 'Edm.String'>;

  constructor(readonly _entityApi: PaymentReasonCodesApi<T>) {
    super(_entityApi);
  }
}

export interface PaymentReasonCodesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  code: DeserializedType<T, 'Edm.String'>;
}
