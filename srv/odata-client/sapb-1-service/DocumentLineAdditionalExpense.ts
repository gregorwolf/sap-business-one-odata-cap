/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LineExpenseTaxJurisdiction, LineExpenseTaxJurisdictionField } from './LineExpenseTaxJurisdiction';
import { CollectionField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * DocumentLineAdditionalExpense
 */
export interface DocumentLineAdditionalExpense {
  /**
   * Line Number.
   * @nullable
   */
  lineNumber?: number;
  /**
   * Group Code.
   * @nullable
   */
  groupCode?: number;
  /**
   * Expense Code.
   * @nullable
   */
  expenseCode?: number;
  /**
   * Line Total.
   * @nullable
   */
  lineTotal?: number;
  /**
   * Line Total Fc.
   * @nullable
   */
  lineTotalFc?: number;
  /**
   * Line Total Sys.
   * @nullable
   */
  lineTotalSys?: number;
  /**
   * Paid To Date.
   * @nullable
   */
  paidToDate?: number;
  /**
   * Paid To Date Fc.
   * @nullable
   */
  paidToDateFc?: number;
  /**
   * Paid To Date Sys.
   * @nullable
   */
  paidToDateSys?: number;
  /**
   * Vat Group.
   * @nullable
   */
  vatGroup?: string;
  /**
   * Tax Percent.
   * @nullable
   */
  taxPercent?: number;
  /**
   * Tax Sum.
   * @nullable
   */
  taxSum?: number;
  /**
   * Tax Sum Fc.
   * @nullable
   */
  taxSumFc?: number;
  /**
   * Tax Sum Sys.
   * @nullable
   */
  taxSumSys?: number;
  /**
   * Deductible Tax Sum.
   * @nullable
   */
  deductibleTaxSum?: number;
  /**
   * Deductible Tax Sum Fc.
   * @nullable
   */
  deductibleTaxSumFc?: number;
  /**
   * Deductible Tax Sum Sys.
   * @nullable
   */
  deductibleTaxSumSys?: number;
  /**
   * Tax Code.
   * @nullable
   */
  taxCode?: string;
  /**
   * Tax Paid.
   * @nullable
   */
  taxPaid?: number;
  /**
   * Tax Paid Fc.
   * @nullable
   */
  taxPaidFc?: number;
  /**
   * Tax Paid Sys.
   * @nullable
   */
  taxPaidSys?: number;
  /**
   * Equalization Tax Percent.
   * @nullable
   */
  equalizationTaxPercent?: number;
  /**
   * Equalization Tax Sum.
   * @nullable
   */
  equalizationTaxSum?: number;
  /**
   * Equalization Tax Fc.
   * @nullable
   */
  equalizationTaxFc?: number;
  /**
   * Equalization Tax Sys.
   * @nullable
   */
  equalizationTaxSys?: number;
  /**
   * Tax Total Sum.
   * @nullable
   */
  taxTotalSum?: number;
  /**
   * Tax Total Sum Fc.
   * @nullable
   */
  taxTotalSumFc?: number;
  /**
   * Tax Total Sum Sys.
   * @nullable
   */
  taxTotalSumSys?: number;
  /**
   * Base Group.
   * @nullable
   */
  baseGroup?: number;
  /**
   * Distribution Rule.
   * @nullable
   */
  distributionRule?: string;
  /**
   * Project.
   * @nullable
   */
  project?: string;
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
   * Line Expense Tax Jurisdictions.
   * @nullable
   */
  lineExpenseTaxJurisdictions?: LineExpenseTaxJurisdiction;
}

/**
 * @deprecated Since v1.6.0. Use [[DocumentLineAdditionalExpense.build]] instead.
 */
export function createDocumentLineAdditionalExpense(json: any): DocumentLineAdditionalExpense {
  return DocumentLineAdditionalExpense.build(json);
}

/**
 * DocumentLineAdditionalExpenseField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class DocumentLineAdditionalExpenseField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[DocumentLineAdditionalExpense.lineNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LineNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[DocumentLineAdditionalExpense.groupCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  groupCode: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('GroupCode', this, 'Edm.Int32');
  /**
   * Representation of the [[DocumentLineAdditionalExpense.expenseCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  expenseCode: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ExpenseCode', this, 'Edm.Int32');
  /**
   * Representation of the [[DocumentLineAdditionalExpense.lineTotal]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineTotal: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LineTotal', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentLineAdditionalExpense.lineTotalFc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineTotalFc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LineTotalFC', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentLineAdditionalExpense.lineTotalSys]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineTotalSys: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LineTotalSys', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentLineAdditionalExpense.paidToDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  paidToDate: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('PaidToDate', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentLineAdditionalExpense.paidToDateFc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  paidToDateFc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('PaidToDateFC', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentLineAdditionalExpense.paidToDateSys]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  paidToDateSys: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('PaidToDateSys', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentLineAdditionalExpense.vatGroup]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  vatGroup: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('VatGroup', this, 'Edm.String');
  /**
   * Representation of the [[DocumentLineAdditionalExpense.taxPercent]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxPercent: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TaxPercent', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentLineAdditionalExpense.taxSum]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxSum: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TaxSum', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentLineAdditionalExpense.taxSumFc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxSumFc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TaxSumFC', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentLineAdditionalExpense.taxSumSys]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxSumSys: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TaxSumSys', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentLineAdditionalExpense.deductibleTaxSum]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  deductibleTaxSum: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DeductibleTaxSum', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentLineAdditionalExpense.deductibleTaxSumFc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  deductibleTaxSumFc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DeductibleTaxSumFC', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentLineAdditionalExpense.deductibleTaxSumSys]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  deductibleTaxSumSys: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DeductibleTaxSumSys', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentLineAdditionalExpense.taxCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('TaxCode', this, 'Edm.String');
  /**
   * Representation of the [[DocumentLineAdditionalExpense.taxPaid]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxPaid: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TaxPaid', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentLineAdditionalExpense.taxPaidFc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxPaidFc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TaxPaidFC', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentLineAdditionalExpense.taxPaidSys]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxPaidSys: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TaxPaidSys', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentLineAdditionalExpense.equalizationTaxPercent]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  equalizationTaxPercent: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('EqualizationTaxPercent', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentLineAdditionalExpense.equalizationTaxSum]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  equalizationTaxSum: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('EqualizationTaxSum', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentLineAdditionalExpense.equalizationTaxFc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  equalizationTaxFc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('EqualizationTaxFC', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentLineAdditionalExpense.equalizationTaxSys]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  equalizationTaxSys: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('EqualizationTaxSys', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentLineAdditionalExpense.taxTotalSum]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxTotalSum: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TaxTotalSum', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentLineAdditionalExpense.taxTotalSumFc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxTotalSumFc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TaxTotalSumFC', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentLineAdditionalExpense.taxTotalSumSys]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxTotalSumSys: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TaxTotalSumSys', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentLineAdditionalExpense.baseGroup]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  baseGroup: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('BaseGroup', this, 'Edm.Int32');
  /**
   * Representation of the [[DocumentLineAdditionalExpense.distributionRule]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  distributionRule: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('DistributionRule', this, 'Edm.String');
  /**
   * Representation of the [[DocumentLineAdditionalExpense.project]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  project: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Project', this, 'Edm.String');
  /**
   * Representation of the [[DocumentLineAdditionalExpense.distributionRule2]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  distributionRule2: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('DistributionRule2', this, 'Edm.String');
  /**
   * Representation of the [[DocumentLineAdditionalExpense.distributionRule3]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  distributionRule3: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('DistributionRule3', this, 'Edm.String');
  /**
   * Representation of the [[DocumentLineAdditionalExpense.distributionRule4]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  distributionRule4: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('DistributionRule4', this, 'Edm.String');
  /**
   * Representation of the [[DocumentLineAdditionalExpense.distributionRule5]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  distributionRule5: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('DistributionRule5', this, 'Edm.String');
  /**
   * Representation of the [[DocumentLineAdditionalExpense.lineExpenseTaxJurisdictions]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineExpenseTaxJurisdictions: LineExpenseTaxJurisdictionField<EntityT> = new LineExpenseTaxJurisdictionField('LineExpenseTaxJurisdictions', this);
}

export namespace DocumentLineAdditionalExpense {
  export function build(json: { [keys: string]: FieldType | LineExpenseTaxJurisdiction }): DocumentLineAdditionalExpense {
    return createComplexType(json, {
      LineNumber: (lineNumber: number) => ({ lineNumber: edmToTs(lineNumber, 'Edm.Int32') }),
      GroupCode: (groupCode: number) => ({ groupCode: edmToTs(groupCode, 'Edm.Int32') }),
      ExpenseCode: (expenseCode: number) => ({ expenseCode: edmToTs(expenseCode, 'Edm.Int32') }),
      LineTotal: (lineTotal: number) => ({ lineTotal: edmToTs(lineTotal, 'Edm.Double') }),
      LineTotalFC: (lineTotalFc: number) => ({ lineTotalFc: edmToTs(lineTotalFc, 'Edm.Double') }),
      LineTotalSys: (lineTotalSys: number) => ({ lineTotalSys: edmToTs(lineTotalSys, 'Edm.Double') }),
      PaidToDate: (paidToDate: number) => ({ paidToDate: edmToTs(paidToDate, 'Edm.Double') }),
      PaidToDateFC: (paidToDateFc: number) => ({ paidToDateFc: edmToTs(paidToDateFc, 'Edm.Double') }),
      PaidToDateSys: (paidToDateSys: number) => ({ paidToDateSys: edmToTs(paidToDateSys, 'Edm.Double') }),
      VatGroup: (vatGroup: string) => ({ vatGroup: edmToTs(vatGroup, 'Edm.String') }),
      TaxPercent: (taxPercent: number) => ({ taxPercent: edmToTs(taxPercent, 'Edm.Double') }),
      TaxSum: (taxSum: number) => ({ taxSum: edmToTs(taxSum, 'Edm.Double') }),
      TaxSumFC: (taxSumFc: number) => ({ taxSumFc: edmToTs(taxSumFc, 'Edm.Double') }),
      TaxSumSys: (taxSumSys: number) => ({ taxSumSys: edmToTs(taxSumSys, 'Edm.Double') }),
      DeductibleTaxSum: (deductibleTaxSum: number) => ({ deductibleTaxSum: edmToTs(deductibleTaxSum, 'Edm.Double') }),
      DeductibleTaxSumFC: (deductibleTaxSumFc: number) => ({ deductibleTaxSumFc: edmToTs(deductibleTaxSumFc, 'Edm.Double') }),
      DeductibleTaxSumSys: (deductibleTaxSumSys: number) => ({ deductibleTaxSumSys: edmToTs(deductibleTaxSumSys, 'Edm.Double') }),
      TaxCode: (taxCode: string) => ({ taxCode: edmToTs(taxCode, 'Edm.String') }),
      TaxPaid: (taxPaid: number) => ({ taxPaid: edmToTs(taxPaid, 'Edm.Double') }),
      TaxPaidFC: (taxPaidFc: number) => ({ taxPaidFc: edmToTs(taxPaidFc, 'Edm.Double') }),
      TaxPaidSys: (taxPaidSys: number) => ({ taxPaidSys: edmToTs(taxPaidSys, 'Edm.Double') }),
      EqualizationTaxPercent: (equalizationTaxPercent: number) => ({ equalizationTaxPercent: edmToTs(equalizationTaxPercent, 'Edm.Double') }),
      EqualizationTaxSum: (equalizationTaxSum: number) => ({ equalizationTaxSum: edmToTs(equalizationTaxSum, 'Edm.Double') }),
      EqualizationTaxFC: (equalizationTaxFc: number) => ({ equalizationTaxFc: edmToTs(equalizationTaxFc, 'Edm.Double') }),
      EqualizationTaxSys: (equalizationTaxSys: number) => ({ equalizationTaxSys: edmToTs(equalizationTaxSys, 'Edm.Double') }),
      TaxTotalSum: (taxTotalSum: number) => ({ taxTotalSum: edmToTs(taxTotalSum, 'Edm.Double') }),
      TaxTotalSumFC: (taxTotalSumFc: number) => ({ taxTotalSumFc: edmToTs(taxTotalSumFc, 'Edm.Double') }),
      TaxTotalSumSys: (taxTotalSumSys: number) => ({ taxTotalSumSys: edmToTs(taxTotalSumSys, 'Edm.Double') }),
      BaseGroup: (baseGroup: number) => ({ baseGroup: edmToTs(baseGroup, 'Edm.Int32') }),
      DistributionRule: (distributionRule: string) => ({ distributionRule: edmToTs(distributionRule, 'Edm.String') }),
      Project: (project: string) => ({ project: edmToTs(project, 'Edm.String') }),
      DistributionRule2: (distributionRule2: string) => ({ distributionRule2: edmToTs(distributionRule2, 'Edm.String') }),
      DistributionRule3: (distributionRule3: string) => ({ distributionRule3: edmToTs(distributionRule3, 'Edm.String') }),
      DistributionRule4: (distributionRule4: string) => ({ distributionRule4: edmToTs(distributionRule4, 'Edm.String') }),
      DistributionRule5: (distributionRule5: string) => ({ distributionRule5: edmToTs(distributionRule5, 'Edm.String') }),
      LineExpenseTaxJurisdictions: (lineExpenseTaxJurisdictions: LineExpenseTaxJurisdiction) => ({ lineExpenseTaxJurisdictions: LineExpenseTaxJurisdiction.build(lineExpenseTaxJurisdictions) })
    });
  }
}
