/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LineExpenseTaxJurisdiction } from './LineExpenseTaxJurisdiction';
import { LineFreightEBooksDetail } from './LineFreightEBooksDetail';
import { BoYesNoEnum } from './BoYesNoEnum';
import { BoAdEpnsTaxTypes } from './BoAdEpnsTaxTypes';
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
 * DocumentLineAdditionalExpense
 */
export interface DocumentLineAdditionalExpense<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Line Number.
   * @nullable
   */
  lineNumber?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Group Code.
   * @nullable
   */
  groupCode?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
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
   * Wt Liable.
   * @nullable
   */
  wtLiable?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Base Group.
   * @nullable
   */
  baseGroup?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
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
   * Line Expense Tax Jurisdictions.
   * @nullable
   */
  lineExpenseTaxJurisdictions?: DeserializedType<
    DeSerializersT,
    'SAPB1.LineExpenseTaxJurisdiction'
  >;
  /**
   * Line Freight E Books Details.
   * @nullable
   */
  lineFreightEBooksDetails?: DeserializedType<
    DeSerializersT,
    'SAPB1.LineFreightEBooksDetail'
  >;
}

/**
 * DocumentLineAdditionalExpenseField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class DocumentLineAdditionalExpenseField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  DocumentLineAdditionalExpense,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link DocumentLineAdditionalExpense.lineNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('LineNumber', 'Edm.Int32', true);
  /**
   * Representation of the {@link DocumentLineAdditionalExpense.groupCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  groupCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('GroupCode', 'Edm.Int32', true);
  /**
   * Representation of the {@link DocumentLineAdditionalExpense.expenseCode} property for query construction.
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
   * Representation of the {@link DocumentLineAdditionalExpense.lineTotal} property for query construction.
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
   * Representation of the {@link DocumentLineAdditionalExpense.lineTotalFc} property for query construction.
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
   * Representation of the {@link DocumentLineAdditionalExpense.lineTotalSys} property for query construction.
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
   * Representation of the {@link DocumentLineAdditionalExpense.paidToDate} property for query construction.
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
   * Representation of the {@link DocumentLineAdditionalExpense.paidToDateFc} property for query construction.
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
   * Representation of the {@link DocumentLineAdditionalExpense.paidToDateSys} property for query construction.
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
   * Representation of the {@link DocumentLineAdditionalExpense.taxLiable} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxLiable: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('TaxLiable', BoYesNoEnum, true);
  /**
   * Representation of the {@link DocumentLineAdditionalExpense.vatGroup} property for query construction.
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
   * Representation of the {@link DocumentLineAdditionalExpense.taxPercent} property for query construction.
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
   * Representation of the {@link DocumentLineAdditionalExpense.taxSum} property for query construction.
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
   * Representation of the {@link DocumentLineAdditionalExpense.taxSumFc} property for query construction.
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
   * Representation of the {@link DocumentLineAdditionalExpense.taxSumSys} property for query construction.
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
   * Representation of the {@link DocumentLineAdditionalExpense.deductibleTaxSum} property for query construction.
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
   * Representation of the {@link DocumentLineAdditionalExpense.deductibleTaxSumFc} property for query construction.
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
   * Representation of the {@link DocumentLineAdditionalExpense.deductibleTaxSumSys} property for query construction.
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
   * Representation of the {@link DocumentLineAdditionalExpense.aquisitionTax} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  aquisitionTax: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('AquisitionTax', BoYesNoEnum, true);
  /**
   * Representation of the {@link DocumentLineAdditionalExpense.taxCode} property for query construction.
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
   * Representation of the {@link DocumentLineAdditionalExpense.taxType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxType: EnumField<EntityT, DeSerializersT, BoAdEpnsTaxTypes, true, false> =
    this._fieldBuilder.buildEnumField('TaxType', BoAdEpnsTaxTypes, true);
  /**
   * Representation of the {@link DocumentLineAdditionalExpense.taxPaid} property for query construction.
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
   * Representation of the {@link DocumentLineAdditionalExpense.taxPaidFc} property for query construction.
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
   * Representation of the {@link DocumentLineAdditionalExpense.taxPaidSys} property for query construction.
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
   * Representation of the {@link DocumentLineAdditionalExpense.equalizationTaxPercent} property for query construction.
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
   * Representation of the {@link DocumentLineAdditionalExpense.equalizationTaxSum} property for query construction.
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
   * Representation of the {@link DocumentLineAdditionalExpense.equalizationTaxFc} property for query construction.
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
   * Representation of the {@link DocumentLineAdditionalExpense.equalizationTaxSys} property for query construction.
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
   * Representation of the {@link DocumentLineAdditionalExpense.taxTotalSum} property for query construction.
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
   * Representation of the {@link DocumentLineAdditionalExpense.taxTotalSumFc} property for query construction.
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
   * Representation of the {@link DocumentLineAdditionalExpense.taxTotalSumSys} property for query construction.
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
   * Representation of the {@link DocumentLineAdditionalExpense.wtLiable} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  wtLiable: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('WTLiable', BoYesNoEnum, true);
  /**
   * Representation of the {@link DocumentLineAdditionalExpense.baseGroup} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  baseGroup: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('BaseGroup', 'Edm.Int32', true);
  /**
   * Representation of the {@link DocumentLineAdditionalExpense.distributionRule} property for query construction.
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
   * Representation of the {@link DocumentLineAdditionalExpense.project} property for query construction.
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
   * Representation of the {@link DocumentLineAdditionalExpense.distributionRule2} property for query construction.
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
   * Representation of the {@link DocumentLineAdditionalExpense.distributionRule3} property for query construction.
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
   * Representation of the {@link DocumentLineAdditionalExpense.distributionRule4} property for query construction.
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
   * Representation of the {@link DocumentLineAdditionalExpense.distributionRule5} property for query construction.
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
   * Representation of the {@link DocumentLineAdditionalExpense.externalCalcTaxRate} property for query construction.
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
   * Representation of the {@link DocumentLineAdditionalExpense.externalCalcTaxAmount} property for query construction.
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
   * Representation of the {@link DocumentLineAdditionalExpense.externalCalcTaxAmountFc} property for query construction.
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
   * Representation of the {@link DocumentLineAdditionalExpense.externalCalcTaxAmountSc} property for query construction.
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
   * Representation of the {@link DocumentLineAdditionalExpense.cuSplit} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  cuSplit: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('CUSplit', BoYesNoEnum, true);
  /**
   * Representation of the {@link DocumentLineAdditionalExpense.lineExpenseTaxJurisdictions} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineExpenseTaxJurisdictions: CollectionField<
    EntityT,
    DeSerializersT,
    LineExpenseTaxJurisdiction,
    true,
    false
  > = this._fieldBuilder.buildCollectionField(
    'LineExpenseTaxJurisdictions',
    LineExpenseTaxJurisdiction,
    true
  );
  /**
   * Representation of the {@link DocumentLineAdditionalExpense.lineFreightEBooksDetails} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineFreightEBooksDetails: CollectionField<
    EntityT,
    DeSerializersT,
    LineFreightEBooksDetail,
    true,
    false
  > = this._fieldBuilder.buildCollectionField(
    'LineFreightEBooksDetails',
    LineFreightEBooksDetail,
    true
  );

  /**
   * Creates an instance of DocumentLineAdditionalExpenseField.
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
      DocumentLineAdditionalExpense,
      fieldOptions
    );
  }
}

export namespace DocumentLineAdditionalExpense {
  /**
   * Metadata information on all properties of the `DocumentLineAdditionalExpense` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<DocumentLineAdditionalExpense>[] =
    [
      {
        originalName: 'LineNumber',
        name: 'lineNumber',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'GroupCode',
        name: 'groupCode',
        type: 'Edm.Int32',
        isCollection: false
      },
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
        originalName: 'WTLiable',
        name: 'wtLiable',
        type: 'Edm.Enum',
        isCollection: false
      },
      {
        originalName: 'BaseGroup',
        name: 'baseGroup',
        type: 'Edm.Int32',
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
        originalName: 'LineExpenseTaxJurisdictions',
        name: 'lineExpenseTaxJurisdictions',
        type: LineExpenseTaxJurisdiction,
        isCollection: true
      },
      {
        originalName: 'LineFreightEBooksDetails',
        name: 'lineFreightEBooksDetails',
        type: LineFreightEBooksDetail,
        isCollection: true
      }
    ];
}
