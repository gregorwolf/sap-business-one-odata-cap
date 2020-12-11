/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PaymentInvoiceTypeEnum } from './PaymentInvoiceTypeEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * PaymentAmountParams
 */
export interface PaymentAmountParams {
  /**
   * Doc Type.
   * @nullable
   */
  docType?: PaymentInvoiceTypeEnum;
  /**
   * Doc Entry.
   * @nullable
   */
  docEntry?: number;
  /**
   * Installment Id.
   * @nullable
   */
  installmentId?: number;
  /**
   * Cash Discount Percentage.
   * @nullable
   */
  cashDiscountPercentage?: number;
  /**
   * Cash Discount Amount.
   * @nullable
   */
  cashDiscountAmount?: number;
  /**
   * Cash Discount Amount Fc.
   * @nullable
   */
  cashDiscountAmountFc?: number;
  /**
   * Cash Discount Amount Sc.
   * @nullable
   */
  cashDiscountAmountSc?: number;
  /**
   * Total Payment Amount.
   * @nullable
   */
  totalPaymentAmount?: number;
  /**
   * Total Payment Amount Fc.
   * @nullable
   */
  totalPaymentAmountFc?: number;
  /**
   * Total Payment Amount Sc.
   * @nullable
   */
  totalPaymentAmountSc?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[PaymentAmountParams.build]] instead.
 */
export function createPaymentAmountParams(json: any): PaymentAmountParams {
  return PaymentAmountParams.build(json);
}

/**
 * PaymentAmountParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class PaymentAmountParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, PaymentAmountParams> {
  /**
   * Representation of the [[PaymentAmountParams.docType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docType: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('DocType', this);
  /**
   * Representation of the [[PaymentAmountParams.docEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DocEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[PaymentAmountParams.installmentId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  installmentId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('InstallmentId', this, 'Edm.Int32');
  /**
   * Representation of the [[PaymentAmountParams.cashDiscountPercentage]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  cashDiscountPercentage: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('CashDiscountPercentage', this, 'Edm.Double');
  /**
   * Representation of the [[PaymentAmountParams.cashDiscountAmount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  cashDiscountAmount: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('CashDiscountAmount', this, 'Edm.Double');
  /**
   * Representation of the [[PaymentAmountParams.cashDiscountAmountFc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  cashDiscountAmountFc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('CashDiscountAmountFC', this, 'Edm.Double');
  /**
   * Representation of the [[PaymentAmountParams.cashDiscountAmountSc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  cashDiscountAmountSc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('CashDiscountAmountSC', this, 'Edm.Double');
  /**
   * Representation of the [[PaymentAmountParams.totalPaymentAmount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  totalPaymentAmount: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TotalPaymentAmount', this, 'Edm.Double');
  /**
   * Representation of the [[PaymentAmountParams.totalPaymentAmountFc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  totalPaymentAmountFc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TotalPaymentAmountFC', this, 'Edm.Double');
  /**
   * Representation of the [[PaymentAmountParams.totalPaymentAmountSc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  totalPaymentAmountSc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TotalPaymentAmountSC', this, 'Edm.Double');

  /**
   * Creates an instance of PaymentAmountParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, PaymentAmountParams);
  }
}

export namespace PaymentAmountParams {
  /**
   * Metadata information on all properties of the `PaymentAmountParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<PaymentAmountParams>[] = [{
    originalName: 'DocType',
    name: 'docType',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'DocEntry',
    name: 'docEntry',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'InstallmentId',
    name: 'installmentId',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'CashDiscountPercentage',
    name: 'cashDiscountPercentage',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'CashDiscountAmount',
    name: 'cashDiscountAmount',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'CashDiscountAmountFC',
    name: 'cashDiscountAmountFc',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'CashDiscountAmountSC',
    name: 'cashDiscountAmountSc',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'TotalPaymentAmount',
    name: 'totalPaymentAmount',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'TotalPaymentAmountFC',
    name: 'totalPaymentAmountFc',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'TotalPaymentAmountSC',
    name: 'totalPaymentAmountSc',
    type: 'Edm.Double',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): PaymentAmountParams {
    return deserializeComplexTypeV4(json, PaymentAmountParams);
  }
}
