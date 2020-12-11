/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { BoRcptInvTypes } from './BoRcptInvTypes';
import { ComplexTypeDatePropertyField, ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * PaymentInvoice
 */
export interface PaymentInvoice {
  /**
   * Line Num.
   * @nullable
   */
  lineNum?: number;
  /**
   * Doc Entry.
   * @nullable
   */
  docEntry?: number;
  /**
   * Sum Applied.
   * @nullable
   */
  sumApplied?: number;
  /**
   * Applied Fc.
   * @nullable
   */
  appliedFc?: number;
  /**
   * Applied Sys.
   * @nullable
   */
  appliedSys?: number;
  /**
   * Doc Rate.
   * @nullable
   */
  docRate?: number;
  /**
   * Doc Line.
   * @nullable
   */
  docLine?: number;
  /**
   * Invoice Type.
   * @nullable
   */
  invoiceType?: BoRcptInvTypes;
  /**
   * Discount Percent.
   * @nullable
   */
  discountPercent?: number;
  /**
   * Paid Sum.
   * @nullable
   */
  paidSum?: number;
  /**
   * Installment Id.
   * @nullable
   */
  installmentId?: number;
  /**
   * Witholding Tax Applied.
   * @nullable
   */
  witholdingTaxApplied?: number;
  /**
   * Witholding Tax Applied Fc.
   * @nullable
   */
  witholdingTaxAppliedFc?: number;
  /**
   * Witholding Tax Applied Sc.
   * @nullable
   */
  witholdingTaxAppliedSc?: number;
  /**
   * Link Date.
   * @nullable
   */
  linkDate?: Moment;
  /**
   * Distribution Rule.
   * @nullable
   */
  distributionRule?: string;
  /**
   * Distribution Rule 2.
   * @nullable
   */
  distributionRule2?: string;
  /**
   * Distribution Rule 3.
   * @nullable
   */
  distributionRule3?: string;
  /**
   * Distribution Rule 4.
   * @nullable
   */
  distributionRule4?: string;
  /**
   * Distribution Rule 5.
   * @nullable
   */
  distributionRule5?: string;
  /**
   * Total Discount.
   * @nullable
   */
  totalDiscount?: number;
  /**
   * Total Discount Fc.
   * @nullable
   */
  totalDiscountFc?: number;
  /**
   * Total Discount Sc.
   * @nullable
   */
  totalDiscountSc?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[PaymentInvoice.build]] instead.
 */
export function createPaymentInvoice(json: any): PaymentInvoice {
  return PaymentInvoice.build(json);
}

/**
 * PaymentInvoiceField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class PaymentInvoiceField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, PaymentInvoice> {
  /**
   * Representation of the [[PaymentInvoice.lineNum]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineNum: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LineNum', this, 'Edm.Int32');
  /**
   * Representation of the [[PaymentInvoice.docEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DocEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[PaymentInvoice.sumApplied]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sumApplied: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('SumApplied', this, 'Edm.Double');
  /**
   * Representation of the [[PaymentInvoice.appliedFc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  appliedFc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AppliedFC', this, 'Edm.Double');
  /**
   * Representation of the [[PaymentInvoice.appliedSys]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  appliedSys: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AppliedSys', this, 'Edm.Double');
  /**
   * Representation of the [[PaymentInvoice.docRate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docRate: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DocRate', this, 'Edm.Double');
  /**
   * Representation of the [[PaymentInvoice.docLine]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docLine: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DocLine', this, 'Edm.Int32');
  /**
   * Representation of the [[PaymentInvoice.invoiceType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  invoiceType: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('InvoiceType', this);
  /**
   * Representation of the [[PaymentInvoice.discountPercent]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  discountPercent: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DiscountPercent', this, 'Edm.Double');
  /**
   * Representation of the [[PaymentInvoice.paidSum]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  paidSum: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('PaidSum', this, 'Edm.Double');
  /**
   * Representation of the [[PaymentInvoice.installmentId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  installmentId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('InstallmentId', this, 'Edm.Int32');
  /**
   * Representation of the [[PaymentInvoice.witholdingTaxApplied]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  witholdingTaxApplied: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('WitholdingTaxApplied', this, 'Edm.Double');
  /**
   * Representation of the [[PaymentInvoice.witholdingTaxAppliedFc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  witholdingTaxAppliedFc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('WitholdingTaxAppliedFC', this, 'Edm.Double');
  /**
   * Representation of the [[PaymentInvoice.witholdingTaxAppliedSc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  witholdingTaxAppliedSc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('WitholdingTaxAppliedSC', this, 'Edm.Double');
  /**
   * Representation of the [[PaymentInvoice.linkDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  linkDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('LinkDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[PaymentInvoice.distributionRule]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  distributionRule: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('DistributionRule', this, 'Edm.String');
  /**
   * Representation of the [[PaymentInvoice.distributionRule2]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  distributionRule2: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('DistributionRule2', this, 'Edm.String');
  /**
   * Representation of the [[PaymentInvoice.distributionRule3]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  distributionRule3: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('DistributionRule3', this, 'Edm.String');
  /**
   * Representation of the [[PaymentInvoice.distributionRule4]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  distributionRule4: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('DistributionRule4', this, 'Edm.String');
  /**
   * Representation of the [[PaymentInvoice.distributionRule5]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  distributionRule5: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('DistributionRule5', this, 'Edm.String');
  /**
   * Representation of the [[PaymentInvoice.totalDiscount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  totalDiscount: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TotalDiscount', this, 'Edm.Double');
  /**
   * Representation of the [[PaymentInvoice.totalDiscountFc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  totalDiscountFc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TotalDiscountFC', this, 'Edm.Double');
  /**
   * Representation of the [[PaymentInvoice.totalDiscountSc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  totalDiscountSc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TotalDiscountSC', this, 'Edm.Double');

  /**
   * Creates an instance of PaymentInvoiceField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, PaymentInvoice);
  }
}

export namespace PaymentInvoice {
  /**
   * Metadata information on all properties of the `PaymentInvoice` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<PaymentInvoice>[] = [{
    originalName: 'LineNum',
    name: 'lineNum',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'DocEntry',
    name: 'docEntry',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'SumApplied',
    name: 'sumApplied',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'AppliedFC',
    name: 'appliedFc',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'AppliedSys',
    name: 'appliedSys',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'DocRate',
    name: 'docRate',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'DocLine',
    name: 'docLine',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'InvoiceType',
    name: 'invoiceType',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'DiscountPercent',
    name: 'discountPercent',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'PaidSum',
    name: 'paidSum',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'InstallmentId',
    name: 'installmentId',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'WitholdingTaxApplied',
    name: 'witholdingTaxApplied',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'WitholdingTaxAppliedFC',
    name: 'witholdingTaxAppliedFc',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'WitholdingTaxAppliedSC',
    name: 'witholdingTaxAppliedSc',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'LinkDate',
    name: 'linkDate',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'DistributionRule',
    name: 'distributionRule',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'DistributionRule2',
    name: 'distributionRule2',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'DistributionRule3',
    name: 'distributionRule3',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'DistributionRule4',
    name: 'distributionRule4',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'DistributionRule5',
    name: 'distributionRule5',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'TotalDiscount',
    name: 'totalDiscount',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'TotalDiscountFC',
    name: 'totalDiscountFc',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'TotalDiscountSC',
    name: 'totalDiscountSc',
    type: 'Edm.Double',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): PaymentInvoice {
    return deserializeComplexTypeV4(json, PaymentInvoice);
  }
}
