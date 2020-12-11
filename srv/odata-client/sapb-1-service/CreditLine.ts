/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { BoYesNoEnum } from './BoYesNoEnum';
import { ComplexTypeDatePropertyField, ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

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
   * Deposited.
   * @nullable
   */
  deposited?: BoYesNoEnum;
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
   * Transferred.
   * @nullable
   */
  transferred?: BoYesNoEnum;
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
export class CreditLineField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, CreditLine> {
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
   * Representation of the [[CreditLine.deposited]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  deposited: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('Deposited', this);
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
   * Representation of the [[CreditLine.transferred]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  transferred: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('Transferred', this);
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

  /**
   * Creates an instance of CreditLineField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, CreditLine);
  }
}

export namespace CreditLine {
  /**
   * Metadata information on all properties of the `CreditLine` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<CreditLine>[] = [{
    originalName: 'AbsId',
    name: 'absId',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'CreditCard',
    name: 'creditCard',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'VoucherNumber',
    name: 'voucherNumber',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'PaymentMethodCode',
    name: 'paymentMethodCode',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'PayDate',
    name: 'payDate',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'Deposited',
    name: 'deposited',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'NumOfPayments',
    name: 'numOfPayments',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Customer',
    name: 'customer',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Reference',
    name: 'reference',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Transferred',
    name: 'transferred',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'Total',
    name: 'total',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'CreditCurrency',
    name: 'creditCurrency',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): CreditLine {
    return deserializeComplexTypeV4(json, CreditLine);
  }
}
