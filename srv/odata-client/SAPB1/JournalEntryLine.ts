/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CashFlowAssignment } from './CashFlowAssignment';
import { BoYesNoEnum } from './BoYesNoEnum';
import { BoTaxPostAccEnum } from './BoTaxPostAccEnum';
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
 * JournalEntryLine
 */
export interface JournalEntryLine<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Line Id.
   * @nullable
   */
  lineId?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Account Code.
   * @nullable
   */
  accountCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Debit.
   * @nullable
   */
  debit?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Credit.
   * @nullable
   */
  credit?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Fc Debit.
   * @nullable
   */
  fcDebit?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Fc Credit.
   * @nullable
   */
  fcCredit?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Fc Currency.
   * @nullable
   */
  fcCurrency?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Due Date.
   * @nullable
   */
  dueDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Short Name.
   * @nullable
   */
  shortName?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Contra Account.
   * @nullable
   */
  contraAccount?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Line Memo.
   * @nullable
   */
  lineMemo?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Reference Date 1.
   * @nullable
   */
  referenceDate1?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Reference Date 2.
   * @nullable
   */
  referenceDate2?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Reference 1.
   * @nullable
   */
  reference1?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Reference 2.
   * @nullable
   */
  reference2?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Project Code.
   * @nullable
   */
  projectCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Costing Code.
   * @nullable
   */
  costingCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Tax Date.
   * @nullable
   */
  taxDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Base Sum.
   * @nullable
   */
  baseSum?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Tax Group.
   * @nullable
   */
  taxGroup?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Debit Sys.
   * @nullable
   */
  debitSys?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Credit Sys.
   * @nullable
   */
  creditSys?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Vat Date.
   * @nullable
   */
  vatDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Vat Line.
   * @nullable
   */
  vatLine?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * System Base Amount.
   * @nullable
   */
  systemBaseAmount?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Vat Amount.
   * @nullable
   */
  vatAmount?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * System Vat Amount.
   * @nullable
   */
  systemVatAmount?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Gross Value.
   * @nullable
   */
  grossValue?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Additional Reference.
   * @nullable
   */
  additionalReference?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Check Abs.
   * @nullable
   */
  checkAbs?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Costing Code 2.
   * @nullable
   */
  costingCode2?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Costing Code 3.
   * @nullable
   */
  costingCode3?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Costing Code 4.
   * @nullable
   */
  costingCode4?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Tax Code.
   * @nullable
   */
  taxCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Tax Post Account.
   * @nullable
   */
  taxPostAccount?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Costing Code 5.
   * @nullable
   */
  costingCode5?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Location Code.
   * @nullable
   */
  locationCode?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Control Account.
   * @nullable
   */
  controlAccount?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Equalization Tax Amount.
   * @nullable
   */
  equalizationTaxAmount?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * System Equalization Tax Amount.
   * @nullable
   */
  systemEqualizationTaxAmount?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Total Tax.
   * @nullable
   */
  totalTax?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * System Total Tax.
   * @nullable
   */
  systemTotalTax?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Wt Liable.
   * @nullable
   */
  wtLiable?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Wt Row.
   * @nullable
   */
  wtRow?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Payment Block.
   * @nullable
   */
  paymentBlock?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Block Reason.
   * @nullable
   */
  blockReason?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Federal Tax Id.
   * @nullable
   */
  federalTaxId?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Bplid.
   * @nullable
   */
  bplid?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Bpl Name.
   * @nullable
   */
  bplName?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Vat Reg Num.
   * @nullable
   */
  vatRegNum?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Payment Ordered.
   * @nullable
   */
  paymentOrdered?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Exposed Trans Number.
   * @nullable
   */
  exposedTransNumber?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Document Array.
   * @nullable
   */
  documentArray?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Document Line.
   * @nullable
   */
  documentLine?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Cost Element Code.
   * @nullable
   */
  costElementCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Cig.
   * @nullable
   */
  cig?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Cup.
   * @nullable
   */
  cup?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Income Classification Category.
   * @nullable
   */
  incomeClassificationCategory?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Income Classification Type.
   * @nullable
   */
  incomeClassificationType?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Expenses Classification Category.
   * @nullable
   */
  expensesClassificationCategory?: DeserializedType<
    DeSerializersT,
    'Edm.Int32'
  >;
  /**
   * Expenses Classification Type.
   * @nullable
   */
  expensesClassificationType?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Vat Classification Category.
   * @nullable
   */
  vatClassificationCategory?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Vat Classification Type.
   * @nullable
   */
  vatClassificationType?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Vat Exemption Cause.
   * @nullable
   */
  vatExemptionCause?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * U Bd Exp.
   * @nullable
   */
  uBdExp?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Cash Flow Assignments.
   * @nullable
   */
  cashFlowAssignments?: DeserializedType<
    DeSerializersT,
    'SAPB1.CashFlowAssignment'
  >;
}

/**
 * JournalEntryLineField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class JournalEntryLineField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  JournalEntryLine,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link JournalEntryLine.lineId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Line_ID', 'Edm.Int32', true);
  /**
   * Representation of the {@link JournalEntryLine.accountCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  accountCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('AccountCode', 'Edm.String', true);
  /**
   * Representation of the {@link JournalEntryLine.debit} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  debit: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Debit', 'Edm.Double', true);
  /**
   * Representation of the {@link JournalEntryLine.credit} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  credit: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Credit', 'Edm.Double', true);
  /**
   * Representation of the {@link JournalEntryLine.fcDebit} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  fcDebit: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('FCDebit', 'Edm.Double', true);
  /**
   * Representation of the {@link JournalEntryLine.fcCredit} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  fcCredit: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('FCCredit', 'Edm.Double', true);
  /**
   * Representation of the {@link JournalEntryLine.fcCurrency} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  fcCurrency: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('FCCurrency', 'Edm.String', true);
  /**
   * Representation of the {@link JournalEntryLine.dueDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  dueDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DueDate',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link JournalEntryLine.shortName} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  shortName: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ShortName', 'Edm.String', true);
  /**
   * Representation of the {@link JournalEntryLine.contraAccount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  contraAccount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ContraAccount', 'Edm.String', true);
  /**
   * Representation of the {@link JournalEntryLine.lineMemo} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineMemo: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('LineMemo', 'Edm.String', true);
  /**
   * Representation of the {@link JournalEntryLine.referenceDate1} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  referenceDate1: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ReferenceDate1',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link JournalEntryLine.referenceDate2} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  referenceDate2: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ReferenceDate2',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link JournalEntryLine.reference1} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  reference1: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Reference1', 'Edm.String', true);
  /**
   * Representation of the {@link JournalEntryLine.reference2} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  reference2: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Reference2', 'Edm.String', true);
  /**
   * Representation of the {@link JournalEntryLine.projectCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  projectCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ProjectCode', 'Edm.String', true);
  /**
   * Representation of the {@link JournalEntryLine.costingCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  costingCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('CostingCode', 'Edm.String', true);
  /**
   * Representation of the {@link JournalEntryLine.taxDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'TaxDate',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link JournalEntryLine.baseSum} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  baseSum: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('BaseSum', 'Edm.Double', true);
  /**
   * Representation of the {@link JournalEntryLine.taxGroup} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxGroup: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('TaxGroup', 'Edm.String', true);
  /**
   * Representation of the {@link JournalEntryLine.debitSys} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  debitSys: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('DebitSys', 'Edm.Double', true);
  /**
   * Representation of the {@link JournalEntryLine.creditSys} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  creditSys: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('CreditSys', 'Edm.Double', true);
  /**
   * Representation of the {@link JournalEntryLine.vatDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  vatDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'VatDate',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link JournalEntryLine.vatLine} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  vatLine: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('VatLine', BoYesNoEnum, true);
  /**
   * Representation of the {@link JournalEntryLine.systemBaseAmount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  systemBaseAmount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'SystemBaseAmount',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link JournalEntryLine.vatAmount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  vatAmount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('VatAmount', 'Edm.Double', true);
  /**
   * Representation of the {@link JournalEntryLine.systemVatAmount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  systemVatAmount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'SystemVatAmount',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link JournalEntryLine.grossValue} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  grossValue: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('GrossValue', 'Edm.Double', true);
  /**
   * Representation of the {@link JournalEntryLine.additionalReference} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  additionalReference: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'AdditionalReference',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link JournalEntryLine.checkAbs} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  checkAbs: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('CheckAbs', 'Edm.Int32', true);
  /**
   * Representation of the {@link JournalEntryLine.costingCode2} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  costingCode2: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('CostingCode2', 'Edm.String', true);
  /**
   * Representation of the {@link JournalEntryLine.costingCode3} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  costingCode3: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('CostingCode3', 'Edm.String', true);
  /**
   * Representation of the {@link JournalEntryLine.costingCode4} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  costingCode4: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('CostingCode4', 'Edm.String', true);
  /**
   * Representation of the {@link JournalEntryLine.taxCode} property for query construction.
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
   * Representation of the {@link JournalEntryLine.taxPostAccount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxPostAccount: EnumField<
    EntityT,
    DeSerializersT,
    BoTaxPostAccEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'TaxPostAccount',
    BoTaxPostAccEnum,
    true
  );
  /**
   * Representation of the {@link JournalEntryLine.costingCode5} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  costingCode5: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('CostingCode5', 'Edm.String', true);
  /**
   * Representation of the {@link JournalEntryLine.locationCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  locationCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('LocationCode', 'Edm.Int32', true);
  /**
   * Representation of the {@link JournalEntryLine.controlAccount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  controlAccount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ControlAccount',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link JournalEntryLine.equalizationTaxAmount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  equalizationTaxAmount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'EqualizationTaxAmount',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link JournalEntryLine.systemEqualizationTaxAmount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  systemEqualizationTaxAmount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'SystemEqualizationTaxAmount',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link JournalEntryLine.totalTax} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  totalTax: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('TotalTax', 'Edm.Double', true);
  /**
   * Representation of the {@link JournalEntryLine.systemTotalTax} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  systemTotalTax: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'SystemTotalTax',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link JournalEntryLine.wtLiable} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  wtLiable: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('WTLiable', BoYesNoEnum, true);
  /**
   * Representation of the {@link JournalEntryLine.wtRow} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  wtRow: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('WTRow', BoYesNoEnum, true);
  /**
   * Representation of the {@link JournalEntryLine.paymentBlock} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  paymentBlock: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('PaymentBlock', BoYesNoEnum, true);
  /**
   * Representation of the {@link JournalEntryLine.blockReason} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  blockReason: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('BlockReason', 'Edm.Int32', true);
  /**
   * Representation of the {@link JournalEntryLine.federalTaxId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  federalTaxId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('FederalTaxID', 'Edm.String', true);
  /**
   * Representation of the {@link JournalEntryLine.bplid} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bplid: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('BPLID', 'Edm.Int32', true);
  /**
   * Representation of the {@link JournalEntryLine.bplName} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bplName: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('BPLName', 'Edm.String', true);
  /**
   * Representation of the {@link JournalEntryLine.vatRegNum} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  vatRegNum: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('VATRegNum', 'Edm.String', true);
  /**
   * Representation of the {@link JournalEntryLine.paymentOrdered} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  paymentOrdered: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('PaymentOrdered', BoYesNoEnum, true);
  /**
   * Representation of the {@link JournalEntryLine.exposedTransNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  exposedTransNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ExposedTransNumber',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link JournalEntryLine.documentArray} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  documentArray: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('DocumentArray', 'Edm.Int32', true);
  /**
   * Representation of the {@link JournalEntryLine.documentLine} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  documentLine: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('DocumentLine', 'Edm.Int32', true);
  /**
   * Representation of the {@link JournalEntryLine.costElementCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  costElementCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'CostElementCode',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link JournalEntryLine.cig} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  cig: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Cig', 'Edm.Int32', true);
  /**
   * Representation of the {@link JournalEntryLine.cup} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  cup: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Cup', 'Edm.Int32', true);
  /**
   * Representation of the {@link JournalEntryLine.incomeClassificationCategory} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  incomeClassificationCategory: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'IncomeClassificationCategory',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link JournalEntryLine.incomeClassificationType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  incomeClassificationType: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'IncomeClassificationType',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link JournalEntryLine.expensesClassificationCategory} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  expensesClassificationCategory: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ExpensesClassificationCategory',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link JournalEntryLine.expensesClassificationType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  expensesClassificationType: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ExpensesClassificationType',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link JournalEntryLine.vatClassificationCategory} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  vatClassificationCategory: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'VATClassificationCategory',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link JournalEntryLine.vatClassificationType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  vatClassificationType: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'VATClassificationType',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link JournalEntryLine.vatExemptionCause} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  vatExemptionCause: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'VATExemptionCause',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link JournalEntryLine.uBdExp} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uBdExp: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('U_BD_Exp', 'Edm.Int32', true);
  /**
   * Representation of the {@link JournalEntryLine.cashFlowAssignments} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  cashFlowAssignments: CollectionField<
    EntityT,
    DeSerializersT,
    CashFlowAssignment,
    true,
    false
  > = this._fieldBuilder.buildCollectionField(
    'CashFlowAssignments',
    CashFlowAssignment,
    true
  );

  /**
   * Creates an instance of JournalEntryLineField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, JournalEntryLine, fieldOptions);
  }
}

export namespace JournalEntryLine {
  /**
   * Metadata information on all properties of the `JournalEntryLine` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<JournalEntryLine>[] = [
    {
      originalName: 'Line_ID',
      name: 'lineId',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'AccountCode',
      name: 'accountCode',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Debit',
      name: 'debit',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'Credit',
      name: 'credit',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'FCDebit',
      name: 'fcDebit',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'FCCredit',
      name: 'fcCredit',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'FCCurrency',
      name: 'fcCurrency',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'DueDate',
      name: 'dueDate',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'ShortName',
      name: 'shortName',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ContraAccount',
      name: 'contraAccount',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'LineMemo',
      name: 'lineMemo',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ReferenceDate1',
      name: 'referenceDate1',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'ReferenceDate2',
      name: 'referenceDate2',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'Reference1',
      name: 'reference1',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Reference2',
      name: 'reference2',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ProjectCode',
      name: 'projectCode',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'CostingCode',
      name: 'costingCode',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'TaxDate',
      name: 'taxDate',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'BaseSum',
      name: 'baseSum',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'TaxGroup',
      name: 'taxGroup',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'DebitSys',
      name: 'debitSys',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'CreditSys',
      name: 'creditSys',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'VatDate',
      name: 'vatDate',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'VatLine',
      name: 'vatLine',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'SystemBaseAmount',
      name: 'systemBaseAmount',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'VatAmount',
      name: 'vatAmount',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'SystemVatAmount',
      name: 'systemVatAmount',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'GrossValue',
      name: 'grossValue',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'AdditionalReference',
      name: 'additionalReference',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'CheckAbs',
      name: 'checkAbs',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'CostingCode2',
      name: 'costingCode2',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'CostingCode3',
      name: 'costingCode3',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'CostingCode4',
      name: 'costingCode4',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'TaxCode',
      name: 'taxCode',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'TaxPostAccount',
      name: 'taxPostAccount',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'CostingCode5',
      name: 'costingCode5',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'LocationCode',
      name: 'locationCode',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'ControlAccount',
      name: 'controlAccount',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'EqualizationTaxAmount',
      name: 'equalizationTaxAmount',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'SystemEqualizationTaxAmount',
      name: 'systemEqualizationTaxAmount',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'TotalTax',
      name: 'totalTax',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'SystemTotalTax',
      name: 'systemTotalTax',
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
      originalName: 'WTRow',
      name: 'wtRow',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'PaymentBlock',
      name: 'paymentBlock',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'BlockReason',
      name: 'blockReason',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'FederalTaxID',
      name: 'federalTaxId',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'BPLID',
      name: 'bplid',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'BPLName',
      name: 'bplName',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'VATRegNum',
      name: 'vatRegNum',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'PaymentOrdered',
      name: 'paymentOrdered',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'ExposedTransNumber',
      name: 'exposedTransNumber',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'DocumentArray',
      name: 'documentArray',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'DocumentLine',
      name: 'documentLine',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'CostElementCode',
      name: 'costElementCode',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Cig',
      name: 'cig',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'Cup',
      name: 'cup',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'IncomeClassificationCategory',
      name: 'incomeClassificationCategory',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'IncomeClassificationType',
      name: 'incomeClassificationType',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'ExpensesClassificationCategory',
      name: 'expensesClassificationCategory',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'ExpensesClassificationType',
      name: 'expensesClassificationType',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'VATClassificationCategory',
      name: 'vatClassificationCategory',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'VATClassificationType',
      name: 'vatClassificationType',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'VATExemptionCause',
      name: 'vatExemptionCause',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'U_BD_Exp',
      name: 'uBdExp',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'CashFlowAssignments',
      name: 'cashFlowAssignments',
      type: CashFlowAssignment,
      isCollection: true
    }
  ];
}
