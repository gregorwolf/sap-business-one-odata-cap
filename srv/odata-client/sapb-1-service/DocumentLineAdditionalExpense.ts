/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LineExpenseTaxJurisdiction } from './LineExpenseTaxJurisdiction';
import { BoYesNoEnum } from './BoYesNoEnum';
import { BoAdEpnsTaxTypes } from './BoAdEpnsTaxTypes';
import { CollectionField, ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

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
   * Tax Liable.
   * @nullable
   */
  taxLiable?: BoYesNoEnum;
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
   * Aquisition Tax.
   * @nullable
   */
  aquisitionTax?: BoYesNoEnum;
  /**
   * Tax Code.
   * @nullable
   */
  taxCode?: string;
  /**
   * Tax Type.
   * @nullable
   */
  taxType?: BoAdEpnsTaxTypes;
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
   * Wt Liable.
   * @nullable
   */
  wtLiable?: BoYesNoEnum;
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
  lineExpenseTaxJurisdictions?: LineExpenseTaxJurisdiction[];
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
export class DocumentLineAdditionalExpenseField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, DocumentLineAdditionalExpense> {
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
   * Representation of the [[DocumentLineAdditionalExpense.taxLiable]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxLiable: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('TaxLiable', this);
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
   * Representation of the [[DocumentLineAdditionalExpense.aquisitionTax]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  aquisitionTax: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('AquisitionTax', this);
  /**
   * Representation of the [[DocumentLineAdditionalExpense.taxCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('TaxCode', this, 'Edm.String');
  /**
   * Representation of the [[DocumentLineAdditionalExpense.taxType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxType: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('TaxType', this);
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
   * Representation of the [[DocumentLineAdditionalExpense.wtLiable]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  wtLiable: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('WTLiable', this);
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
  lineExpenseTaxJurisdictions: CollectionField<EntityT, LineExpenseTaxJurisdiction> = new CollectionField('LineExpenseTaxJurisdictions', this, LineExpenseTaxJurisdiction);

  /**
   * Creates an instance of DocumentLineAdditionalExpenseField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, DocumentLineAdditionalExpense);
  }
}

export namespace DocumentLineAdditionalExpense {
  /**
   * Metadata information on all properties of the `DocumentLineAdditionalExpense` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<DocumentLineAdditionalExpense>[] = [{
    originalName: 'LineNumber',
    name: 'lineNumber',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'GroupCode',
    name: 'groupCode',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'ExpenseCode',
    name: 'expenseCode',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'LineTotal',
    name: 'lineTotal',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'LineTotalFC',
    name: 'lineTotalFc',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'LineTotalSys',
    name: 'lineTotalSys',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'PaidToDate',
    name: 'paidToDate',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'PaidToDateFC',
    name: 'paidToDateFc',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'PaidToDateSys',
    name: 'paidToDateSys',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'TaxLiable',
    name: 'taxLiable',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'VatGroup',
    name: 'vatGroup',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'TaxPercent',
    name: 'taxPercent',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'TaxSum',
    name: 'taxSum',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'TaxSumFC',
    name: 'taxSumFc',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'TaxSumSys',
    name: 'taxSumSys',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'DeductibleTaxSum',
    name: 'deductibleTaxSum',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'DeductibleTaxSumFC',
    name: 'deductibleTaxSumFc',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'DeductibleTaxSumSys',
    name: 'deductibleTaxSumSys',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'AquisitionTax',
    name: 'aquisitionTax',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'TaxCode',
    name: 'taxCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'TaxType',
    name: 'taxType',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'TaxPaid',
    name: 'taxPaid',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'TaxPaidFC',
    name: 'taxPaidFc',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'TaxPaidSys',
    name: 'taxPaidSys',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'EqualizationTaxPercent',
    name: 'equalizationTaxPercent',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'EqualizationTaxSum',
    name: 'equalizationTaxSum',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'EqualizationTaxFC',
    name: 'equalizationTaxFc',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'EqualizationTaxSys',
    name: 'equalizationTaxSys',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'TaxTotalSum',
    name: 'taxTotalSum',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'TaxTotalSumFC',
    name: 'taxTotalSumFc',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'TaxTotalSumSys',
    name: 'taxTotalSumSys',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'WTLiable',
    name: 'wtLiable',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'BaseGroup',
    name: 'baseGroup',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'DistributionRule',
    name: 'distributionRule',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Project',
    name: 'project',
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
    originalName: 'LineExpenseTaxJurisdictions',
    name: 'lineExpenseTaxJurisdictions',
    type: LineExpenseTaxJurisdiction,
    isCollection: true
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType | LineExpenseTaxJurisdiction }): DocumentLineAdditionalExpense {
    return deserializeComplexTypeV4(json, DocumentLineAdditionalExpense);
  }
}
