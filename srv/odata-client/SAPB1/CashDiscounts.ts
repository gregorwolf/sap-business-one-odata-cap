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
import { DiscountLine } from './DiscountLine';
import type { CashDiscountsApi } from './CashDiscountsApi';
import { BoYesNoEnum } from './BoYesNoEnum';
import { PaymentTermsTypes, PaymentTermsTypesType } from './PaymentTermsTypes';

/**
 * This class represents the entity "CashDiscounts" of service "SAPB1".
 */
export class CashDiscounts<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements CashDiscountsType<T>
{
  /**
   * Technical entity name for CashDiscounts.
   */
  static _entityName = 'CashDiscounts';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the CashDiscounts entity
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
   * By Date.
   * @nullable
   */
  byDate?: BoYesNoEnum | null;
  /**
   * Freight.
   * @nullable
   */
  freight?: BoYesNoEnum | null;
  /**
   * Tax.
   * @nullable
   */
  tax?: BoYesNoEnum | null;
  /**
   * Discount Lines.
   * @nullable
   */
  discountLines?: DiscountLine<T>[] | null;
  /**
   * One-to-many navigation property to the {@link PaymentTermsTypes} entity.
   */
  paymentTermsTypes!: PaymentTermsTypes<T>[];

  constructor(readonly _entityApi: CashDiscountsApi<T>) {
    super(_entityApi);
  }
}

export interface CashDiscountsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  code: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  byDate?: BoYesNoEnum | null;
  freight?: BoYesNoEnum | null;
  tax?: BoYesNoEnum | null;
  discountLines?: DiscountLine<T>[] | null;
  paymentTermsTypes: PaymentTermsTypesType<T>[];
}
