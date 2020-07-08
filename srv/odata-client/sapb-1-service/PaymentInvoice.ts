/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

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
export class PaymentInvoiceField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
}

export namespace PaymentInvoice {
  export function build(json: { [keys: string]: FieldType }): PaymentInvoice {
    return createComplexType(json, {
      LineNum: (lineNum: number) => ({ lineNum: edmToTs(lineNum, 'Edm.Int32') }),
      DocEntry: (docEntry: number) => ({ docEntry: edmToTs(docEntry, 'Edm.Int32') }),
      SumApplied: (sumApplied: number) => ({ sumApplied: edmToTs(sumApplied, 'Edm.Double') }),
      AppliedFC: (appliedFc: number) => ({ appliedFc: edmToTs(appliedFc, 'Edm.Double') }),
      AppliedSys: (appliedSys: number) => ({ appliedSys: edmToTs(appliedSys, 'Edm.Double') }),
      DocRate: (docRate: number) => ({ docRate: edmToTs(docRate, 'Edm.Double') }),
      DocLine: (docLine: number) => ({ docLine: edmToTs(docLine, 'Edm.Int32') }),
      DiscountPercent: (discountPercent: number) => ({ discountPercent: edmToTs(discountPercent, 'Edm.Double') }),
      PaidSum: (paidSum: number) => ({ paidSum: edmToTs(paidSum, 'Edm.Double') }),
      InstallmentId: (installmentId: number) => ({ installmentId: edmToTs(installmentId, 'Edm.Int32') }),
      WitholdingTaxApplied: (witholdingTaxApplied: number) => ({ witholdingTaxApplied: edmToTs(witholdingTaxApplied, 'Edm.Double') }),
      WitholdingTaxAppliedFC: (witholdingTaxAppliedFc: number) => ({ witholdingTaxAppliedFc: edmToTs(witholdingTaxAppliedFc, 'Edm.Double') }),
      WitholdingTaxAppliedSC: (witholdingTaxAppliedSc: number) => ({ witholdingTaxAppliedSc: edmToTs(witholdingTaxAppliedSc, 'Edm.Double') }),
      LinkDate: (linkDate: Moment) => ({ linkDate: edmToTs(linkDate, 'Edm.DateTimeOffset') }),
      DistributionRule: (distributionRule: string) => ({ distributionRule: edmToTs(distributionRule, 'Edm.String') }),
      DistributionRule2: (distributionRule2: string) => ({ distributionRule2: edmToTs(distributionRule2, 'Edm.String') }),
      DistributionRule3: (distributionRule3: string) => ({ distributionRule3: edmToTs(distributionRule3, 'Edm.String') }),
      DistributionRule4: (distributionRule4: string) => ({ distributionRule4: edmToTs(distributionRule4, 'Edm.String') }),
      DistributionRule5: (distributionRule5: string) => ({ distributionRule5: edmToTs(distributionRule5, 'Edm.String') }),
      TotalDiscount: (totalDiscount: number) => ({ totalDiscount: edmToTs(totalDiscount, 'Edm.Double') }),
      TotalDiscountFC: (totalDiscountFc: number) => ({ totalDiscountFc: edmToTs(totalDiscountFc, 'Edm.Double') }),
      TotalDiscountSC: (totalDiscountSc: number) => ({ totalDiscountSc: edmToTs(totalDiscountSc, 'Edm.Double') })
    });
  }
}
