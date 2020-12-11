/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DocExpenseTaxJurisdiction } from './DocExpenseTaxJurisdiction';
import { BoAdEpnsDistribMethods } from './BoAdEpnsDistribMethods';
import { BoYesNoEnum } from './BoYesNoEnum';
import { BoAdEpnsTaxTypes } from './BoAdEpnsTaxTypes';
import { BoStatus } from './BoStatus';
import { CollectionField, ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * DocumentAdditionalExpense
 */
export interface DocumentAdditionalExpense {
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
   * Remarks.
   * @nullable
   */
  remarks?: string;
  /**
   * Distribution Method.
   * @nullable
   */
  distributionMethod?: BoAdEpnsDistribMethods;
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
   * Base Doc Entry.
   * @nullable
   */
  baseDocEntry?: number;
  /**
   * Base Doc Line.
   * @nullable
   */
  baseDocLine?: number;
  /**
   * Base Doc Type.
   * @nullable
   */
  baseDocType?: number;
  /**
   * Base Document Reference.
   * @nullable
   */
  baseDocumentReference?: number;
  /**
   * Line Num.
   * @nullable
   */
  lineNum?: number;
  /**
   * Last Purchase Price.
   * @nullable
   */
  lastPurchasePrice?: BoYesNoEnum;
  /**
   * Status.
   * @nullable
   */
  status?: BoStatus;
  /**
   * Stock.
   * @nullable
   */
  stock?: BoYesNoEnum;
  /**
   * Target Abs Entry.
   * @nullable
   */
  targetAbsEntry?: number;
  /**
   * Target Type.
   * @nullable
   */
  targetType?: number;
  /**
   * Wt Liable.
   * @nullable
   */
  wtLiable?: BoYesNoEnum;
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
   * Line Gross.
   * @nullable
   */
  lineGross?: number;
  /**
   * Line Gross Sys.
   * @nullable
   */
  lineGrossSys?: number;
  /**
   * Line Gross Fc.
   * @nullable
   */
  lineGrossFc?: number;
  /**
   * Doc Expense Tax Jurisdictions.
   * @nullable
   */
  docExpenseTaxJurisdictions?: DocExpenseTaxJurisdiction[];
}

/**
 * @deprecated Since v1.6.0. Use [[DocumentAdditionalExpense.build]] instead.
 */
export function createDocumentAdditionalExpense(json: any): DocumentAdditionalExpense {
  return DocumentAdditionalExpense.build(json);
}

/**
 * DocumentAdditionalExpenseField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class DocumentAdditionalExpenseField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, DocumentAdditionalExpense> {
  /**
   * Representation of the [[DocumentAdditionalExpense.expenseCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  expenseCode: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ExpenseCode', this, 'Edm.Int32');
  /**
   * Representation of the [[DocumentAdditionalExpense.lineTotal]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineTotal: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LineTotal', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentAdditionalExpense.lineTotalFc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineTotalFc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LineTotalFC', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentAdditionalExpense.lineTotalSys]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineTotalSys: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LineTotalSys', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentAdditionalExpense.paidToDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  paidToDate: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('PaidToDate', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentAdditionalExpense.paidToDateFc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  paidToDateFc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('PaidToDateFC', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentAdditionalExpense.paidToDateSys]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  paidToDateSys: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('PaidToDateSys', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentAdditionalExpense.remarks]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  remarks: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Remarks', this, 'Edm.String');
  /**
   * Representation of the [[DocumentAdditionalExpense.distributionMethod]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  distributionMethod: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('DistributionMethod', this);
  /**
   * Representation of the [[DocumentAdditionalExpense.taxLiable]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxLiable: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('TaxLiable', this);
  /**
   * Representation of the [[DocumentAdditionalExpense.vatGroup]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  vatGroup: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('VatGroup', this, 'Edm.String');
  /**
   * Representation of the [[DocumentAdditionalExpense.taxPercent]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxPercent: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TaxPercent', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentAdditionalExpense.taxSum]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxSum: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TaxSum', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentAdditionalExpense.taxSumFc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxSumFc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TaxSumFC', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentAdditionalExpense.taxSumSys]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxSumSys: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TaxSumSys', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentAdditionalExpense.deductibleTaxSum]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  deductibleTaxSum: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DeductibleTaxSum', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentAdditionalExpense.deductibleTaxSumFc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  deductibleTaxSumFc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DeductibleTaxSumFC', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentAdditionalExpense.deductibleTaxSumSys]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  deductibleTaxSumSys: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DeductibleTaxSumSys', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentAdditionalExpense.aquisitionTax]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  aquisitionTax: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('AquisitionTax', this);
  /**
   * Representation of the [[DocumentAdditionalExpense.taxCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('TaxCode', this, 'Edm.String');
  /**
   * Representation of the [[DocumentAdditionalExpense.taxType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxType: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('TaxType', this);
  /**
   * Representation of the [[DocumentAdditionalExpense.taxPaid]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxPaid: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TaxPaid', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentAdditionalExpense.taxPaidFc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxPaidFc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TaxPaidFC', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentAdditionalExpense.taxPaidSys]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxPaidSys: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TaxPaidSys', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentAdditionalExpense.equalizationTaxPercent]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  equalizationTaxPercent: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('EqualizationTaxPercent', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentAdditionalExpense.equalizationTaxSum]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  equalizationTaxSum: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('EqualizationTaxSum', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentAdditionalExpense.equalizationTaxFc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  equalizationTaxFc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('EqualizationTaxFC', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentAdditionalExpense.equalizationTaxSys]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  equalizationTaxSys: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('EqualizationTaxSys', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentAdditionalExpense.taxTotalSum]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxTotalSum: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TaxTotalSum', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentAdditionalExpense.taxTotalSumFc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxTotalSumFc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TaxTotalSumFC', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentAdditionalExpense.taxTotalSumSys]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxTotalSumSys: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TaxTotalSumSys', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentAdditionalExpense.baseDocEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  baseDocEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('BaseDocEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[DocumentAdditionalExpense.baseDocLine]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  baseDocLine: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('BaseDocLine', this, 'Edm.Int32');
  /**
   * Representation of the [[DocumentAdditionalExpense.baseDocType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  baseDocType: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('BaseDocType', this, 'Edm.Int32');
  /**
   * Representation of the [[DocumentAdditionalExpense.baseDocumentReference]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  baseDocumentReference: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('BaseDocumentReference', this, 'Edm.Int32');
  /**
   * Representation of the [[DocumentAdditionalExpense.lineNum]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineNum: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LineNum', this, 'Edm.Int32');
  /**
   * Representation of the [[DocumentAdditionalExpense.lastPurchasePrice]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lastPurchasePrice: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('LastPurchasePrice', this);
  /**
   * Representation of the [[DocumentAdditionalExpense.status]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  status: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('Status', this);
  /**
   * Representation of the [[DocumentAdditionalExpense.stock]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  stock: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('Stock', this);
  /**
   * Representation of the [[DocumentAdditionalExpense.targetAbsEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  targetAbsEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TargetAbsEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[DocumentAdditionalExpense.targetType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  targetType: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TargetType', this, 'Edm.Int32');
  /**
   * Representation of the [[DocumentAdditionalExpense.wtLiable]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  wtLiable: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('WTLiable', this);
  /**
   * Representation of the [[DocumentAdditionalExpense.distributionRule]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  distributionRule: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('DistributionRule', this, 'Edm.String');
  /**
   * Representation of the [[DocumentAdditionalExpense.project]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  project: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Project', this, 'Edm.String');
  /**
   * Representation of the [[DocumentAdditionalExpense.distributionRule2]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  distributionRule2: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('DistributionRule2', this, 'Edm.String');
  /**
   * Representation of the [[DocumentAdditionalExpense.distributionRule3]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  distributionRule3: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('DistributionRule3', this, 'Edm.String');
  /**
   * Representation of the [[DocumentAdditionalExpense.distributionRule4]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  distributionRule4: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('DistributionRule4', this, 'Edm.String');
  /**
   * Representation of the [[DocumentAdditionalExpense.distributionRule5]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  distributionRule5: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('DistributionRule5', this, 'Edm.String');
  /**
   * Representation of the [[DocumentAdditionalExpense.lineGross]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineGross: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LineGross', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentAdditionalExpense.lineGrossSys]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineGrossSys: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LineGrossSys', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentAdditionalExpense.lineGrossFc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineGrossFc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LineGrossFC', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentAdditionalExpense.docExpenseTaxJurisdictions]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docExpenseTaxJurisdictions: CollectionField<EntityT, DocExpenseTaxJurisdiction> = new CollectionField('DocExpenseTaxJurisdictions', this, DocExpenseTaxJurisdiction);

  /**
   * Creates an instance of DocumentAdditionalExpenseField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, DocumentAdditionalExpense);
  }
}

export namespace DocumentAdditionalExpense {
  /**
   * Metadata information on all properties of the `DocumentAdditionalExpense` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<DocumentAdditionalExpense>[] = [{
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
    originalName: 'Remarks',
    name: 'remarks',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'DistributionMethod',
    name: 'distributionMethod',
    type: 'Edm.Enum',
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
    originalName: 'BaseDocEntry',
    name: 'baseDocEntry',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'BaseDocLine',
    name: 'baseDocLine',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'BaseDocType',
    name: 'baseDocType',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'BaseDocumentReference',
    name: 'baseDocumentReference',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'LineNum',
    name: 'lineNum',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'LastPurchasePrice',
    name: 'lastPurchasePrice',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'Status',
    name: 'status',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'Stock',
    name: 'stock',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'TargetAbsEntry',
    name: 'targetAbsEntry',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'TargetType',
    name: 'targetType',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'WTLiable',
    name: 'wtLiable',
    type: 'Edm.Enum',
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
    originalName: 'LineGross',
    name: 'lineGross',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'LineGrossSys',
    name: 'lineGrossSys',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'LineGrossFC',
    name: 'lineGrossFc',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'DocExpenseTaxJurisdictions',
    name: 'docExpenseTaxJurisdictions',
    type: DocExpenseTaxJurisdiction,
    isCollection: true
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType | DocExpenseTaxJurisdiction }): DocumentAdditionalExpense {
    return deserializeComplexTypeV4(json, DocumentAdditionalExpense);
  }
}
