/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * CreditLine
 */
export interface CreditLine {
  /**
   * Abs Id.
   * @nullable
   */
  absId?: number;
  /**
   * Credit Card.
   * @nullable
   */
  creditCard?: number;
  /**
   * Voucher Number.
   * @nullable
   */
  voucherNumber?: string;
  /**
   * Payment Method Code.
   * @nullable
   */
  paymentMethodCode?: number;
  /**
   * Pay Date.
   * @nullable
   */
  payDate?: Moment;
  /**
   * Num Of Payments.
   * @nullable
   */
  numOfPayments?: number;
  /**
   * Customer.
   * @nullable
   */
  customer?: string;
  /**
   * Reference.
   * @nullable
   */
  reference?: string;
  /**
   * Total.
   * @nullable
   */
  total?: number;
  /**
   * Credit Currency.
   * @nullable
   */
  creditCurrency?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[CreditLine.build]] instead.
 */
export function createCreditLine(json: any): CreditLine {
  return CreditLine.build(json);
}

/**
 * CreditLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class CreditLineField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[CreditLine.absId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  absId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AbsId', this, 'Edm.Int32');
  /**
   * Representation of the [[CreditLine.creditCard]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  creditCard: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('CreditCard', this, 'Edm.Int32');
  /**
   * Representation of the [[CreditLine.voucherNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  voucherNumber: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('VoucherNumber', this, 'Edm.String');
  /**
   * Representation of the [[CreditLine.paymentMethodCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  paymentMethodCode: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('PaymentMethodCode', this, 'Edm.Int32');
  /**
   * Representation of the [[CreditLine.payDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  payDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('PayDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[CreditLine.numOfPayments]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  numOfPayments: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('NumOfPayments', this, 'Edm.Int32');
  /**
   * Representation of the [[CreditLine.customer]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  customer: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Customer', this, 'Edm.String');
  /**
   * Representation of the [[CreditLine.reference]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  reference: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Reference', this, 'Edm.String');
  /**
   * Representation of the [[CreditLine.total]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  total: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Total', this, 'Edm.Double');
  /**
   * Representation of the [[CreditLine.creditCurrency]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  creditCurrency: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('CreditCurrency', this, 'Edm.String');
}

export namespace CreditLine {
  export function build(json: { [keys: string]: FieldType }): CreditLine {
    return createComplexType(json, {
      AbsId: (absId: number) => ({ absId: edmToTs(absId, 'Edm.Int32') }),
      CreditCard: (creditCard: number) => ({ creditCard: edmToTs(creditCard, 'Edm.Int32') }),
      VoucherNumber: (voucherNumber: string) => ({ voucherNumber: edmToTs(voucherNumber, 'Edm.String') }),
      PaymentMethodCode: (paymentMethodCode: number) => ({ paymentMethodCode: edmToTs(paymentMethodCode, 'Edm.Int32') }),
      PayDate: (payDate: Moment) => ({ payDate: edmToTs(payDate, 'Edm.DateTimeOffset') }),
      NumOfPayments: (numOfPayments: number) => ({ numOfPayments: edmToTs(numOfPayments, 'Edm.Int32') }),
      Customer: (customer: string) => ({ customer: edmToTs(customer, 'Edm.String') }),
      Reference: (reference: string) => ({ reference: edmToTs(reference, 'Edm.String') }),
      Total: (total: number) => ({ total: edmToTs(total, 'Edm.Double') }),
      CreditCurrency: (creditCurrency: string) => ({ creditCurrency: edmToTs(creditCurrency, 'Edm.String') })
    });
  }
}
