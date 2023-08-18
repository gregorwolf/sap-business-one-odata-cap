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
import type { CreditPaymentMethodsApi } from './CreditPaymentMethodsApi';
import { InstallmentPaymentsPossiblityEnum } from './InstallmentPaymentsPossiblityEnum';
import { CreditCards, CreditCardsType } from './CreditCards';
import {
  CreditCardPayments,
  CreditCardPaymentsType
} from './CreditCardPayments';

/**
 * This class represents the entity "CreditPaymentMethods" of service "SAPB1".
 */
export class CreditPaymentMethods<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CreditPaymentMethodsType<T>
{
  /**
   * Technical entity name for CreditPaymentMethods.
   */
  static _entityName = 'CreditPaymentMethods';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the CreditPaymentMethods entity
   */
  static _keys = ['PaymentMethodCode'];
  /**
   * Payment Method Code.
   */
  paymentMethodCode!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Name.
   * @nullable
   */
  name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Assignedto Credit Card.
   * @nullable
   */
  assignedtoCreditCard?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Payment Code.
   * @nullable
   */
  paymentCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Minimum Credit Amount.
   * @nullable
   */
  minimumCreditAmount?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Minimum Payment Amount.
   * @nullable
   */
  minimumPaymentAmount?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Max Qty Without Approval.
   * @nullable
   */
  maxQtyWithoutApproval?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Installment Payments Possible.
   * @nullable
   */
  installmentPaymentsPossible?: InstallmentPaymentsPossiblityEnum | null;
  /**
   * One-to-one navigation property to the {@link CreditCards} entity.
   */
  creditCard?: CreditCards<T> | null;
  /**
   * One-to-one navigation property to the {@link CreditCardPayments} entity.
   */
  creditCardPayment?: CreditCardPayments<T> | null;

  constructor(readonly _entityApi: CreditPaymentMethodsApi<T>) {
    super(_entityApi);
  }
}

export interface CreditPaymentMethodsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  paymentMethodCode: DeserializedType<T, 'Edm.Int32'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  assignedtoCreditCard?: DeserializedType<T, 'Edm.Int32'> | null;
  paymentCode?: DeserializedType<T, 'Edm.String'> | null;
  minimumCreditAmount?: DeserializedType<T, 'Edm.Double'> | null;
  minimumPaymentAmount?: DeserializedType<T, 'Edm.Double'> | null;
  maxQtyWithoutApproval?: DeserializedType<T, 'Edm.Double'> | null;
  installmentPaymentsPossible?: InstallmentPaymentsPossiblityEnum | null;
  creditCard?: CreditCardsType<T> | null;
  creditCardPayment?: CreditCardPaymentsType<T> | null;
}
