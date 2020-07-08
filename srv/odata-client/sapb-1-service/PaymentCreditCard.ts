/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * PaymentCreditCard
 */
export interface PaymentCreditCard {
  /**
   * Line Num.
   * @nullable
   */
  lineNum?: number;
  /**
   * Credit Card.
   * @nullable
   */
  creditCard?: number;
  /**
   * Credit Acct.
   * @nullable
   */
  creditAcct?: string;
  /**
   * Credit Card Number.
   * @nullable
   */
  creditCardNumber?: string;
  /**
   * Card Valid Until.
   * @nullable
   */
  cardValidUntil?: Moment;
  /**
   * Voucher Num.
   * @nullable
   */
  voucherNum?: string;
  /**
   * Owner Id Num.
   * @nullable
   */
  ownerIdNum?: string;
  /**
   * Owner Phone.
   * @nullable
   */
  ownerPhone?: string;
  /**
   * Payment Method Code.
   * @nullable
   */
  paymentMethodCode?: number;
  /**
   * Num Of Payments.
   * @nullable
   */
  numOfPayments?: number;
  /**
   * First Payment Due.
   * @nullable
   */
  firstPaymentDue?: Moment;
  /**
   * First Payment Sum.
   * @nullable
   */
  firstPaymentSum?: number;
  /**
   * Additional Payment Sum.
   * @nullable
   */
  additionalPaymentSum?: number;
  /**
   * Credit Sum.
   * @nullable
   */
  creditSum?: number;
  /**
   * Credit Cur.
   * @nullable
   */
  creditCur?: string;
  /**
   * Credit Rate.
   * @nullable
   */
  creditRate?: number;
  /**
   * Confirmation Num.
   * @nullable
   */
  confirmationNum?: string;
  /**
   * Num Of Credit Payments.
   * @nullable
   */
  numOfCreditPayments?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[PaymentCreditCard.build]] instead.
 */
export function createPaymentCreditCard(json: any): PaymentCreditCard {
  return PaymentCreditCard.build(json);
}

/**
 * PaymentCreditCardField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class PaymentCreditCardField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[PaymentCreditCard.lineNum]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineNum: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LineNum', this, 'Edm.Int32');
  /**
   * Representation of the [[PaymentCreditCard.creditCard]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  creditCard: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('CreditCard', this, 'Edm.Int32');
  /**
   * Representation of the [[PaymentCreditCard.creditAcct]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  creditAcct: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('CreditAcct', this, 'Edm.String');
  /**
   * Representation of the [[PaymentCreditCard.creditCardNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  creditCardNumber: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('CreditCardNumber', this, 'Edm.String');
  /**
   * Representation of the [[PaymentCreditCard.cardValidUntil]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  cardValidUntil: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('CardValidUntil', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[PaymentCreditCard.voucherNum]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  voucherNum: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('VoucherNum', this, 'Edm.String');
  /**
   * Representation of the [[PaymentCreditCard.ownerIdNum]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  ownerIdNum: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('OwnerIdNum', this, 'Edm.String');
  /**
   * Representation of the [[PaymentCreditCard.ownerPhone]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  ownerPhone: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('OwnerPhone', this, 'Edm.String');
  /**
   * Representation of the [[PaymentCreditCard.paymentMethodCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  paymentMethodCode: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('PaymentMethodCode', this, 'Edm.Int32');
  /**
   * Representation of the [[PaymentCreditCard.numOfPayments]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  numOfPayments: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('NumOfPayments', this, 'Edm.Int32');
  /**
   * Representation of the [[PaymentCreditCard.firstPaymentDue]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  firstPaymentDue: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('FirstPaymentDue', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[PaymentCreditCard.firstPaymentSum]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  firstPaymentSum: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('FirstPaymentSum', this, 'Edm.Double');
  /**
   * Representation of the [[PaymentCreditCard.additionalPaymentSum]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  additionalPaymentSum: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AdditionalPaymentSum', this, 'Edm.Double');
  /**
   * Representation of the [[PaymentCreditCard.creditSum]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  creditSum: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('CreditSum', this, 'Edm.Double');
  /**
   * Representation of the [[PaymentCreditCard.creditCur]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  creditCur: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('CreditCur', this, 'Edm.String');
  /**
   * Representation of the [[PaymentCreditCard.creditRate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  creditRate: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('CreditRate', this, 'Edm.Double');
  /**
   * Representation of the [[PaymentCreditCard.confirmationNum]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  confirmationNum: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ConfirmationNum', this, 'Edm.String');
  /**
   * Representation of the [[PaymentCreditCard.numOfCreditPayments]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  numOfCreditPayments: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('NumOfCreditPayments', this, 'Edm.Int32');
}

export namespace PaymentCreditCard {
  export function build(json: { [keys: string]: FieldType }): PaymentCreditCard {
    return createComplexType(json, {
      LineNum: (lineNum: number) => ({ lineNum: edmToTs(lineNum, 'Edm.Int32') }),
      CreditCard: (creditCard: number) => ({ creditCard: edmToTs(creditCard, 'Edm.Int32') }),
      CreditAcct: (creditAcct: string) => ({ creditAcct: edmToTs(creditAcct, 'Edm.String') }),
      CreditCardNumber: (creditCardNumber: string) => ({ creditCardNumber: edmToTs(creditCardNumber, 'Edm.String') }),
      CardValidUntil: (cardValidUntil: Moment) => ({ cardValidUntil: edmToTs(cardValidUntil, 'Edm.DateTimeOffset') }),
      VoucherNum: (voucherNum: string) => ({ voucherNum: edmToTs(voucherNum, 'Edm.String') }),
      OwnerIdNum: (ownerIdNum: string) => ({ ownerIdNum: edmToTs(ownerIdNum, 'Edm.String') }),
      OwnerPhone: (ownerPhone: string) => ({ ownerPhone: edmToTs(ownerPhone, 'Edm.String') }),
      PaymentMethodCode: (paymentMethodCode: number) => ({ paymentMethodCode: edmToTs(paymentMethodCode, 'Edm.Int32') }),
      NumOfPayments: (numOfPayments: number) => ({ numOfPayments: edmToTs(numOfPayments, 'Edm.Int32') }),
      FirstPaymentDue: (firstPaymentDue: Moment) => ({ firstPaymentDue: edmToTs(firstPaymentDue, 'Edm.DateTimeOffset') }),
      FirstPaymentSum: (firstPaymentSum: number) => ({ firstPaymentSum: edmToTs(firstPaymentSum, 'Edm.Double') }),
      AdditionalPaymentSum: (additionalPaymentSum: number) => ({ additionalPaymentSum: edmToTs(additionalPaymentSum, 'Edm.Double') }),
      CreditSum: (creditSum: number) => ({ creditSum: edmToTs(creditSum, 'Edm.Double') }),
      CreditCur: (creditCur: string) => ({ creditCur: edmToTs(creditCur, 'Edm.String') }),
      CreditRate: (creditRate: number) => ({ creditRate: edmToTs(creditRate, 'Edm.Double') }),
      ConfirmationNum: (confirmationNum: string) => ({ confirmationNum: edmToTs(confirmationNum, 'Edm.String') }),
      NumOfCreditPayments: (numOfCreditPayments: number) => ({ numOfCreditPayments: edmToTs(numOfCreditPayments, 'Edm.Int32') })
    });
  }
}
