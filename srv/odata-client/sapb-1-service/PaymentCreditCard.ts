/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { BoRcptCredTypes } from './BoRcptCredTypes';
import { BoYesNoEnum } from './BoYesNoEnum';
import { ComplexTypeDatePropertyField, ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

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
  /**
   * Credit Type.
   * @nullable
   */
  creditType?: BoRcptCredTypes;
  /**
   * Split Payments.
   * @nullable
   */
  splitPayments?: BoYesNoEnum;
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
export class PaymentCreditCardField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, PaymentCreditCard> {
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
  /**
   * Representation of the [[PaymentCreditCard.creditType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  creditType: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('CreditType', this);
  /**
   * Representation of the [[PaymentCreditCard.splitPayments]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  splitPayments: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('SplitPayments', this);

  /**
   * Creates an instance of PaymentCreditCardField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, PaymentCreditCard);
  }
}

export namespace PaymentCreditCard {
  /**
   * Metadata information on all properties of the `PaymentCreditCard` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<PaymentCreditCard>[] = [{
    originalName: 'LineNum',
    name: 'lineNum',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'CreditCard',
    name: 'creditCard',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'CreditAcct',
    name: 'creditAcct',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'CreditCardNumber',
    name: 'creditCardNumber',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'CardValidUntil',
    name: 'cardValidUntil',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'VoucherNum',
    name: 'voucherNum',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'OwnerIdNum',
    name: 'ownerIdNum',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'OwnerPhone',
    name: 'ownerPhone',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'PaymentMethodCode',
    name: 'paymentMethodCode',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'NumOfPayments',
    name: 'numOfPayments',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'FirstPaymentDue',
    name: 'firstPaymentDue',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'FirstPaymentSum',
    name: 'firstPaymentSum',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'AdditionalPaymentSum',
    name: 'additionalPaymentSum',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'CreditSum',
    name: 'creditSum',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'CreditCur',
    name: 'creditCur',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'CreditRate',
    name: 'creditRate',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'ConfirmationNum',
    name: 'confirmationNum',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'NumOfCreditPayments',
    name: 'numOfCreditPayments',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'CreditType',
    name: 'creditType',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'SplitPayments',
    name: 'splitPayments',
    type: 'Edm.Enum',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): PaymentCreditCard {
    return deserializeComplexTypeV4(json, PaymentCreditCard);
  }
}
