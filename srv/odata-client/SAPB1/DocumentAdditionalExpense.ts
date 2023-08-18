/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DocExpenseTaxJurisdiction } from './DocExpenseTaxJurisdiction';
import { DocFreightEBooksDetail } from './DocFreightEBooksDetail';
import { BoAdEpnsDistribMethods } from './BoAdEpnsDistribMethods';
import { BoYesNoEnum } from './BoYesNoEnum';
import { BoAdEpnsTaxTypes } from './BoAdEpnsTaxTypes';
import { BoStatus } from './BoStatus';
import {
  CollectionField,
  ComplexTypeField,
  ConstructorOrField,
  DeSerializers,
  DefaultDeSerializers,
  DeserializedType,
  EdmTypeField,
  Entity,
  EnumField,
  FieldBuilder,
  FieldOptions,
  OrderableEdmTypeField,
  PropertyMetadata
} from '@sap-cloud-sdk/odata-v4';

/**
 * DocumentAdditionalExpense
 */
export interface DocumentAdditionalExpense<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Expense Code.
   * @nullable
   */
  expenseCode?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Line Total.
   * @nullable
   */
  lineTotal?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Line Total Fc.
   * @nullable
   */
  lineTotalFc?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Line Total Sys.
   * @nullable
   */
  lineTotalSys?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Paid To Date.
   * @nullable
   */
  paidToDate?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Paid To Date Fc.
   * @nullable
   */
  paidToDateFc?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Paid To Date Sys.
   * @nullable
   */
  paidToDateSys?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Remarks.
   * @nullable
   */
  remarks?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Distribution Method.
   * @nullable
   */
  distributionMethod?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Tax Liable.
   * @nullable
   */
  taxLiable?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Vat Group.
   * @nullable
   */
  vatGroup?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Tax Percent.
   * @nullable
   */
  taxPercent?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Tax Sum.
   * @nullable
   */
  taxSum?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Tax Sum Fc.
   * @nullable
   */
  taxSumFc?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Tax Sum Sys.
   * @nullable
   */
  taxSumSys?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Deductible Tax Sum.
   * @nullable
   */
  deductibleTaxSum?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Deductible Tax Sum Fc.
   * @nullable
   */
  deductibleTaxSumFc?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Deductible Tax Sum Sys.
   * @nullable
   */
  deductibleTaxSumSys?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Aquisition Tax.
   * @nullable
   */
  aquisitionTax?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Tax Code.
   * @nullable
   */
  taxCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Tax Type.
   * @nullable
   */
  taxType?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Tax Paid.
   * @nullable
   */
  taxPaid?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Tax Paid Fc.
   * @nullable
   */
  taxPaidFc?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Tax Paid Sys.
   * @nullable
   */
  taxPaidSys?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Equalization Tax Percent.
   * @nullable
   */
  equalizationTaxPercent?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Equalization Tax Sum.
   * @nullable
   */
  equalizationTaxSum?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Equalization Tax Fc.
   * @nullable
   */
  equalizationTaxFc?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Equalization Tax Sys.
   * @nullable
   */
  equalizationTaxSys?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Tax Total Sum.
   * @nullable
   */
  taxTotalSum?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Tax Total Sum Fc.
   * @nullable
   */
  taxTotalSumFc?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Tax Total Sum Sys.
   * @nullable
   */
  taxTotalSumSys?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Base Doc Entry.
   * @nullable
   */
  baseDocEntry?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Base Doc Line.
   * @nullable
   */
  baseDocLine?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Base Doc Type.
   * @nullable
   */
  baseDocType?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Base Document Reference.
   * @nullable
   */
  baseDocumentReference?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Line Num.
   * @nullable
   */
  lineNum?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Last Purchase Price.
   * @nullable
   */
  lastPurchasePrice?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Status.
   * @nullable
   */
  status?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Stock.
   * @nullable
   */
  stock?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Target Abs Entry.
   * @nullable
   */
  targetAbsEntry?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Target Type.
   * @nullable
   */
  targetType?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Wt Liable.
   * @nullable
   */
  wtLiable?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Distribution Rule.
   * @nullable
   */
  distributionRule?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Project.
   * @nullable
   */
  project?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Distribution Rule 2.
   * @nullable
   */
  distributionRule2?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Distribution Rule 3.
   * @nullable
   */
  distributionRule3?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Distribution Rule 4.
   * @nullable
   */
  distributionRule4?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Distribution Rule 5.
   * @nullable
   */
  distributionRule5?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Line Gross.
   * @nullable
   */
  lineGross?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Line Gross Sys.
   * @nullable
   */
  lineGrossSys?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Line Gross Fc.
   * @nullable
   */
  lineGrossFc?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * External Calc Tax Rate.
   * @nullable
   */
  externalCalcTaxRate?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * External Calc Tax Amount.
   * @nullable
   */
  externalCalcTaxAmount?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * External Calc Tax Amount Fc.
   * @nullable
   */
  externalCalcTaxAmountFc?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * External Calc Tax Amount Sc.
   * @nullable
   */
  externalCalcTaxAmountSc?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Cu Split.
   * @nullable
   */
  cuSplit?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Doc Expense Tax Jurisdictions.
   * @nullable
   */
  docExpenseTaxJurisdictions?: DeserializedType<
    DeSerializersT,
    'SAPB1.DocExpenseTaxJurisdiction'
  >;
  /**
   * Doc Freight E Books Details.
   * @nullable
   */
  docFreightEBooksDetails?: DeserializedType<
    DeSerializersT,
    'SAPB1.DocFreightEBooksDetail'
  >;
}

/**
 * DocumentAdditionalExpenseField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class DocumentAdditionalExpenseField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  DocumentAdditionalExpense,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link DocumentAdditionalExpense.expenseCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  expenseCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ExpenseCode', 'Edm.Int32', true);
  /**
   * Representation of the {@link DocumentAdditionalExpense.lineTotal} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineTotal: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('LineTotal', 'Edm.Double', true);
  /**
   * Representation of the {@link DocumentAdditionalExpense.lineTotalFc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineTotalFc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('LineTotalFC', 'Edm.Double', true);
  /**
   * Representation of the {@link DocumentAdditionalExpense.lineTotalSys} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineTotalSys: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('LineTotalSys', 'Edm.Double', true);
  /**
   * Representation of the {@link DocumentAdditionalExpense.paidToDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  paidToDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('PaidToDate', 'Edm.Double', true);
  /**
   * Representation of the {@link DocumentAdditionalExpense.paidToDateFc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  paidToDateFc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('PaidToDateFC', 'Edm.Double', true);
  /**
   * Representation of the {@link DocumentAdditionalExpense.paidToDateSys} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  paidToDateSys: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('PaidToDateSys', 'Edm.Double', true);
  /**
   * Representation of the {@link DocumentAdditionalExpense.remarks} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  remarks: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Remarks', 'Edm.String', true);
  /**
   * Representation of the {@link DocumentAdditionalExpense.distributionMethod} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  distributionMethod: EnumField<
    EntityT,
    DeSerializersT,
    BoAdEpnsDistribMethods,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'DistributionMethod',
    BoAdEpnsDistribMethods,
    true
  );
  /**
   * Representation of the {@link DocumentAdditionalExpense.taxLiable} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxLiable: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('TaxLiable', BoYesNoEnum, true);
  /**
   * Representation of the {@link DocumentAdditionalExpense.vatGroup} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  vatGroup: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('VatGroup', 'Edm.String', true);
  /**
   * Representation of the {@link DocumentAdditionalExpense.taxPercent} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxPercent: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('TaxPercent', 'Edm.Double', true);
  /**
   * Representation of the {@link DocumentAdditionalExpense.taxSum} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxSum: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('TaxSum', 'Edm.Double', true);
  /**
   * Representation of the {@link DocumentAdditionalExpense.taxSumFc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxSumFc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('TaxSumFC', 'Edm.Double', true);
  /**
   * Representation of the {@link DocumentAdditionalExpense.taxSumSys} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxSumSys: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('TaxSumSys', 'Edm.Double', true);
  /**
   * Representation of the {@link DocumentAdditionalExpense.deductibleTaxSum} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  deductibleTaxSum: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DeductibleTaxSum',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link DocumentAdditionalExpense.deductibleTaxSumFc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  deductibleTaxSumFc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DeductibleTaxSumFC',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link DocumentAdditionalExpense.deductibleTaxSumSys} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  deductibleTaxSumSys: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DeductibleTaxSumSys',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link DocumentAdditionalExpense.aquisitionTax} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  aquisitionTax: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('AquisitionTax', BoYesNoEnum, true);
  /**
   * Representation of the {@link DocumentAdditionalExpense.taxCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('TaxCode', 'Edm.String', true);
  /**
   * Representation of the {@link DocumentAdditionalExpense.taxType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxType: EnumField<EntityT, DeSerializersT, BoAdEpnsTaxTypes, true, false> =
    this._fieldBuilder.buildEnumField('TaxType', BoAdEpnsTaxTypes, true);
  /**
   * Representation of the {@link DocumentAdditionalExpense.taxPaid} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxPaid: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('TaxPaid', 'Edm.Double', true);
  /**
   * Representation of the {@link DocumentAdditionalExpense.taxPaidFc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxPaidFc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('TaxPaidFC', 'Edm.Double', true);
  /**
   * Representation of the {@link DocumentAdditionalExpense.taxPaidSys} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxPaidSys: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('TaxPaidSys', 'Edm.Double', true);
  /**
   * Representation of the {@link DocumentAdditionalExpense.equalizationTaxPercent} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  equalizationTaxPercent: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'EqualizationTaxPercent',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link DocumentAdditionalExpense.equalizationTaxSum} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  equalizationTaxSum: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'EqualizationTaxSum',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link DocumentAdditionalExpense.equalizationTaxFc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  equalizationTaxFc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'EqualizationTaxFC',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link DocumentAdditionalExpense.equalizationTaxSys} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  equalizationTaxSys: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'EqualizationTaxSys',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link DocumentAdditionalExpense.taxTotalSum} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxTotalSum: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('TaxTotalSum', 'Edm.Double', true);
  /**
   * Representation of the {@link DocumentAdditionalExpense.taxTotalSumFc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxTotalSumFc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('TaxTotalSumFC', 'Edm.Double', true);
  /**
   * Representation of the {@link DocumentAdditionalExpense.taxTotalSumSys} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxTotalSumSys: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'TaxTotalSumSys',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link DocumentAdditionalExpense.baseDocEntry} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  baseDocEntry: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('BaseDocEntry', 'Edm.Int32', true);
  /**
   * Representation of the {@link DocumentAdditionalExpense.baseDocLine} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  baseDocLine: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('BaseDocLine', 'Edm.Int32', true);
  /**
   * Representation of the {@link DocumentAdditionalExpense.baseDocType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  baseDocType: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('BaseDocType', 'Edm.Int32', true);
  /**
   * Representation of the {@link DocumentAdditionalExpense.baseDocumentReference} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  baseDocumentReference: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'BaseDocumentReference',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link DocumentAdditionalExpense.lineNum} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineNum: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('LineNum', 'Edm.Int32', true);
  /**
   * Representation of the {@link DocumentAdditionalExpense.lastPurchasePrice} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lastPurchasePrice: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField('LastPurchasePrice', BoYesNoEnum, true);
  /**
   * Representation of the {@link DocumentAdditionalExpense.status} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  status: EnumField<EntityT, DeSerializersT, BoStatus, true, false> =
    this._fieldBuilder.buildEnumField('Status', BoStatus, true);
  /**
   * Representation of the {@link DocumentAdditionalExpense.stock} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  stock: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('Stock', BoYesNoEnum, true);
  /**
   * Representation of the {@link DocumentAdditionalExpense.targetAbsEntry} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  targetAbsEntry: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('TargetAbsEntry', 'Edm.Int32', true);
  /**
   * Representation of the {@link DocumentAdditionalExpense.targetType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  targetType: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('TargetType', 'Edm.Int32', true);
  /**
   * Representation of the {@link DocumentAdditionalExpense.wtLiable} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  wtLiable: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('WTLiable', BoYesNoEnum, true);
  /**
   * Representation of the {@link DocumentAdditionalExpense.distributionRule} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  distributionRule: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DistributionRule',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link DocumentAdditionalExpense.project} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  project: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Project', 'Edm.String', true);
  /**
   * Representation of the {@link DocumentAdditionalExpense.distributionRule2} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  distributionRule2: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DistributionRule2',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link DocumentAdditionalExpense.distributionRule3} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  distributionRule3: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DistributionRule3',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link DocumentAdditionalExpense.distributionRule4} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  distributionRule4: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DistributionRule4',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link DocumentAdditionalExpense.distributionRule5} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  distributionRule5: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DistributionRule5',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link DocumentAdditionalExpense.lineGross} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineGross: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('LineGross', 'Edm.Double', true);
  /**
   * Representation of the {@link DocumentAdditionalExpense.lineGrossSys} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineGrossSys: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('LineGrossSys', 'Edm.Double', true);
  /**
   * Representation of the {@link DocumentAdditionalExpense.lineGrossFc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineGrossFc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('LineGrossFC', 'Edm.Double', true);
  /**
   * Representation of the {@link DocumentAdditionalExpense.externalCalcTaxRate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  externalCalcTaxRate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ExternalCalcTaxRate',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link DocumentAdditionalExpense.externalCalcTaxAmount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  externalCalcTaxAmount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ExternalCalcTaxAmount',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link DocumentAdditionalExpense.externalCalcTaxAmountFc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  externalCalcTaxAmountFc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ExternalCalcTaxAmountFC',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link DocumentAdditionalExpense.externalCalcTaxAmountSc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  externalCalcTaxAmountSc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ExternalCalcTaxAmountSC',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link DocumentAdditionalExpense.cuSplit} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  cuSplit: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('CUSplit', BoYesNoEnum, true);
  /**
   * Representation of the {@link DocumentAdditionalExpense.docExpenseTaxJurisdictions} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docExpenseTaxJurisdictions: CollectionField<
    EntityT,
    DeSerializersT,
    DocExpenseTaxJurisdiction,
    true,
    false
  > = this._fieldBuilder.buildCollectionField(
    'DocExpenseTaxJurisdictions',
    DocExpenseTaxJurisdiction,
    true
  );
  /**
   * Representation of the {@link DocumentAdditionalExpense.docFreightEBooksDetails} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docFreightEBooksDetails: CollectionField<
    EntityT,
    DeSerializersT,
    DocFreightEBooksDetail,
    true,
    false
  > = this._fieldBuilder.buildCollectionField(
    'DocFreightEBooksDetails',
    DocFreightEBooksDetail,
    true
  );

  /**
   * Creates an instance of DocumentAdditionalExpenseField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(
      fieldName,
      fieldOf,
      deSerializers,
      DocumentAdditionalExpense,
      fieldOptions
    );
  }
}

export namespace DocumentAdditionalExpense {
  /**
   * Metadata information on all properties of the `DocumentAdditionalExpense` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<DocumentAdditionalExpense>[] =
    [
      {
        originalName: 'ExpenseCode',
        name: 'expenseCode',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'LineTotal',
        name: 'lineTotal',
        type: 'Edm.Double',
        isCollection: false
      },
      {
        originalName: 'LineTotalFC',
        name: 'lineTotalFc',
        type: 'Edm.Double',
        isCollection: false
      },
      {
        originalName: 'LineTotalSys',
        name: 'lineTotalSys',
        type: 'Edm.Double',
        isCollection: false
      },
      {
        originalName: 'PaidToDate',
        name: 'paidToDate',
        type: 'Edm.Double',
        isCollection: false
      },
      {
        originalName: 'PaidToDateFC',
        name: 'paidToDateFc',
        type: 'Edm.Double',
        isCollection: false
      },
      {
        originalName: 'PaidToDateSys',
        name: 'paidToDateSys',
        type: 'Edm.Double',
        isCollection: false
      },
      {
        originalName: 'Remarks',
        name: 'remarks',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'DistributionMethod',
        name: 'distributionMethod',
        type: 'Edm.Enum',
        isCollection: false
      },
      {
        originalName: 'TaxLiable',
        name: 'taxLiable',
        type: 'Edm.Enum',
        isCollection: false
      },
      {
        originalName: 'VatGroup',
        name: 'vatGroup',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'TaxPercent',
        name: 'taxPercent',
        type: 'Edm.Double',
        isCollection: false
      },
      {
        originalName: 'TaxSum',
        name: 'taxSum',
        type: 'Edm.Double',
        isCollection: false
      },
      {
        originalName: 'TaxSumFC',
        name: 'taxSumFc',
        type: 'Edm.Double',
        isCollection: false
      },
      {
        originalName: 'TaxSumSys',
        name: 'taxSumSys',
        type: 'Edm.Double',
        isCollection: false
      },
      {
        originalName: 'DeductibleTaxSum',
        name: 'deductibleTaxSum',
        type: 'Edm.Double',
        isCollection: false
      },
      {
        originalName: 'DeductibleTaxSumFC',
        name: 'deductibleTaxSumFc',
        type: 'Edm.Double',
        isCollection: false
      },
      {
        originalName: 'DeductibleTaxSumSys',
        name: 'deductibleTaxSumSys',
        type: 'Edm.Double',
        isCollection: false
      },
      {
        originalName: 'AquisitionTax',
        name: 'aquisitionTax',
        type: 'Edm.Enum',
        isCollection: false
      },
      {
        originalName: 'TaxCode',
        name: 'taxCode',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'TaxType',
        name: 'taxType',
        type: 'Edm.Enum',
        isCollection: false
      },
      {
        originalName: 'TaxPaid',
        name: 'taxPaid',
        type: 'Edm.Double',
        isCollection: false
      },
      {
        originalName: 'TaxPaidFC',
        name: 'taxPaidFc',
        type: 'Edm.Double',
        isCollection: false
      },
      {
        originalName: 'TaxPaidSys',
        name: 'taxPaidSys',
        type: 'Edm.Double',
        isCollection: false
      },
      {
        originalName: 'EqualizationTaxPercent',
        name: 'equalizationTaxPercent',
        type: 'Edm.Double',
        isCollection: false
      },
      {
        originalName: 'EqualizationTaxSum',
        name: 'equalizationTaxSum',
        type: 'Edm.Double',
        isCollection: false
      },
      {
        originalName: 'EqualizationTaxFC',
        name: 'equalizationTaxFc',
        type: 'Edm.Double',
        isCollection: false
      },
      {
        originalName: 'EqualizationTaxSys',
        name: 'equalizationTaxSys',
        type: 'Edm.Double',
        isCollection: false
      },
      {
        originalName: 'TaxTotalSum',
        name: 'taxTotalSum',
        type: 'Edm.Double',
        isCollection: false
      },
      {
        originalName: 'TaxTotalSumFC',
        name: 'taxTotalSumFc',
        type: 'Edm.Double',
        isCollection: false
      },
      {
        originalName: 'TaxTotalSumSys',
        name: 'taxTotalSumSys',
        type: 'Edm.Double',
        isCollection: false
      },
      {
        originalName: 'BaseDocEntry',
        name: 'baseDocEntry',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'BaseDocLine',
        name: 'baseDocLine',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'BaseDocType',
        name: 'baseDocType',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'BaseDocumentReference',
        name: 'baseDocumentReference',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'LineNum',
        name: 'lineNum',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'LastPurchasePrice',
        name: 'lastPurchasePrice',
        type: 'Edm.Enum',
        isCollection: false
      },
      {
        originalName: 'Status',
        name: 'status',
        type: 'Edm.Enum',
        isCollection: false
      },
      {
        originalName: 'Stock',
        name: 'stock',
        type: 'Edm.Enum',
        isCollection: false
      },
      {
        originalName: 'TargetAbsEntry',
        name: 'targetAbsEntry',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'TargetType',
        name: 'targetType',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'WTLiable',
        name: 'wtLiable',
        type: 'Edm.Enum',
        isCollection: false
      },
      {
        originalName: 'DistributionRule',
        name: 'distributionRule',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'Project',
        name: 'project',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'DistributionRule2',
        name: 'distributionRule2',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'DistributionRule3',
        name: 'distributionRule3',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'DistributionRule4',
        name: 'distributionRule4',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'DistributionRule5',
        name: 'distributionRule5',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'LineGross',
        name: 'lineGross',
        type: 'Edm.Double',
        isCollection: false
      },
      {
        originalName: 'LineGrossSys',
        name: 'lineGrossSys',
        type: 'Edm.Double',
        isCollection: false
      },
      {
        originalName: 'LineGrossFC',
        name: 'lineGrossFc',
        type: 'Edm.Double',
        isCollection: false
      },
      {
        originalName: 'ExternalCalcTaxRate',
        name: 'externalCalcTaxRate',
        type: 'Edm.Double',
        isCollection: false
      },
      {
        originalName: 'ExternalCalcTaxAmount',
        name: 'externalCalcTaxAmount',
        type: 'Edm.Double',
        isCollection: false
      },
      {
        originalName: 'ExternalCalcTaxAmountFC',
        name: 'externalCalcTaxAmountFc',
        type: 'Edm.Double',
        isCollection: false
      },
      {
        originalName: 'ExternalCalcTaxAmountSC',
        name: 'externalCalcTaxAmountSc',
        type: 'Edm.Double',
        isCollection: false
      },
      {
        originalName: 'CUSplit',
        name: 'cuSplit',
        type: 'Edm.Enum',
        isCollection: false
      },
      {
        originalName: 'DocExpenseTaxJurisdictions',
        name: 'docExpenseTaxJurisdictions',
        type: DocExpenseTaxJurisdiction,
        isCollection: true
      },
      {
        originalName: 'DocFreightEBooksDetails',
        name: 'docFreightEBooksDetails',
        type: DocFreightEBooksDetail,
        isCollection: true
      }
    ];
}
