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
import type { CreditCardPaymentsApi } from './CreditCardPaymentsApi';
import { DueDateTypesEnum } from './DueDateTypesEnum';
import {
  CreditPaymentMethods,
  CreditPaymentMethodsType
} from './CreditPaymentMethods';

/**
 * This class represents the entity "CreditCardPayments" of service "SAPB1".
 */
export class CreditCardPayments<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements CreditCardPaymentsType<T>
{
  /**
   * Technical entity name for CreditCardPayments.
   */
  static _entityName = 'CreditCardPayments';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the CreditCardPayments entity
   */
  static _keys = ['DueDateCode'];
  /**
   * Due Date Code.
   */
  dueDateCode!: DeserializedType<T, 'Edm.String'>;
  /**
   * Due Date Name.
   * @nullable
   */
  dueDateName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Due Dates Type.
   * @nullable
   */
  dueDatesType?: DueDateTypesEnum | null;
  /**
   * Payment After Days.
   * @nullable
   */
  paymentAfterDays?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Payment After Months.
   * @nullable
   */
  paymentAfterMonths?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * From Day 1.
   * @nullable
   */
  fromDay1?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * To Day 1.
   * @nullable
   */
  toDay1?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Payment Day 1.
   * @nullable
   */
  paymentDay1?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * No Of Months 1.
   * @nullable
   */
  noOfMonths1?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * From Day 2.
   * @nullable
   */
  fromDay2?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * To Day 2.
   * @nullable
   */
  toDay2?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Payment Day 2.
   * @nullable
   */
  paymentDay2?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * No Of Months 2.
   * @nullable
   */
  noOfMonths2?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * From Day 3.
   * @nullable
   */
  fromDay3?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * To Day 3.
   * @nullable
   */
  toDay3?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Payment Day 3.
   * @nullable
   */
  paymentDay3?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * No Of Months 3.
   * @nullable
   */
  noOfMonths3?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * From Day 4.
   * @nullable
   */
  fromDay4?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * To Day 4.
   * @nullable
   */
  toDay4?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Payment Day 4.
   * @nullable
   */
  paymentDay4?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * No Of Months 4.
   * @nullable
   */
  noOfMonths4?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * One-to-many navigation property to the {@link CreditPaymentMethods} entity.
   */
  creditPaymentMethods!: CreditPaymentMethods<T>[];

  constructor(readonly _entityApi: CreditCardPaymentsApi<T>) {
    super(_entityApi);
  }
}

export interface CreditCardPaymentsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dueDateCode: DeserializedType<T, 'Edm.String'>;
  dueDateName?: DeserializedType<T, 'Edm.String'> | null;
  dueDatesType?: DueDateTypesEnum | null;
  paymentAfterDays?: DeserializedType<T, 'Edm.Int32'> | null;
  paymentAfterMonths?: DeserializedType<T, 'Edm.Int32'> | null;
  fromDay1?: DeserializedType<T, 'Edm.Int32'> | null;
  toDay1?: DeserializedType<T, 'Edm.Int32'> | null;
  paymentDay1?: DeserializedType<T, 'Edm.Int32'> | null;
  noOfMonths1?: DeserializedType<T, 'Edm.Int32'> | null;
  fromDay2?: DeserializedType<T, 'Edm.Int32'> | null;
  toDay2?: DeserializedType<T, 'Edm.Int32'> | null;
  paymentDay2?: DeserializedType<T, 'Edm.Int32'> | null;
  noOfMonths2?: DeserializedType<T, 'Edm.Int32'> | null;
  fromDay3?: DeserializedType<T, 'Edm.Int32'> | null;
  toDay3?: DeserializedType<T, 'Edm.Int32'> | null;
  paymentDay3?: DeserializedType<T, 'Edm.Int32'> | null;
  noOfMonths3?: DeserializedType<T, 'Edm.Int32'> | null;
  fromDay4?: DeserializedType<T, 'Edm.Int32'> | null;
  toDay4?: DeserializedType<T, 'Edm.Int32'> | null;
  paymentDay4?: DeserializedType<T, 'Edm.Int32'> | null;
  noOfMonths4?: DeserializedType<T, 'Edm.Int32'> | null;
  creditPaymentMethods: CreditPaymentMethodsType<T>[];
}
