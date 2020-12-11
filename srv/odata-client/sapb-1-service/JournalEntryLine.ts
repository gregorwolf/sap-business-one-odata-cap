/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { CashFlowAssignment } from './CashFlowAssignment';
import { BoYesNoEnum } from './BoYesNoEnum';
import { BoTaxPostAccEnum } from './BoTaxPostAccEnum';
import { CollectionField, ComplexTypeDatePropertyField, ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * JournalEntryLine
 */
export interface JournalEntryLine {
  /**
   * Line Id.
   * @nullable
   */
  lineId?: number;
  /**
   * Account Code.
   * @nullable
   */
  accountCode?: string;
  /**
   * Debit.
   * @nullable
   */
  debit?: number;
  /**
   * Credit.
   * @nullable
   */
  credit?: number;
  /**
   * Fc Debit.
   * @nullable
   */
  fcDebit?: number;
  /**
   * Fc Credit.
   * @nullable
   */
  fcCredit?: number;
  /**
   * Fc Currency.
   * @nullable
   */
  fcCurrency?: string;
  /**
   * Due Date.
   * @nullable
   */
  dueDate?: Moment;
  /**
   * Short Name.
   * @nullable
   */
  shortName?: string;
  /**
   * Contra Account.
   * @nullable
   */
  contraAccount?: string;
  /**
   * Line Memo.
   * @nullable
   */
  lineMemo?: string;
  /**
   * Reference Date 1.
   * @nullable
   */
  referenceDate1?: Moment;
  /**
   * Reference Date 2.
   * @nullable
   */
  referenceDate2?: Moment;
  /**
   * Reference 1.
   * @nullable
   */
  reference1?: string;
  /**
   * Reference 2.
   * @nullable
   */
  reference2?: string;
  /**
   * Project Code.
   * @nullable
   */
  projectCode?: string;
  /**
   * Costing Code.
   * @nullable
   */
  costingCode?: string;
  /**
   * Tax Date.
   * @nullable
   */
  taxDate?: Moment;
  /**
   * Base Sum.
   * @nullable
   */
  baseSum?: number;
  /**
   * Tax Group.
   * @nullable
   */
  taxGroup?: string;
  /**
   * Debit Sys.
   * @nullable
   */
  debitSys?: number;
  /**
   * Credit Sys.
   * @nullable
   */
  creditSys?: number;
  /**
   * Vat Date.
   * @nullable
   */
  vatDate?: Moment;
  /**
   * Vat Line.
   * @nullable
   */
  vatLine?: BoYesNoEnum;
  /**
   * System Base Amount.
   * @nullable
   */
  systemBaseAmount?: number;
  /**
   * Vat Amount.
   * @nullable
   */
  vatAmount?: number;
  /**
   * System Vat Amount.
   * @nullable
   */
  systemVatAmount?: number;
  /**
   * Gross Value.
   * @nullable
   */
  grossValue?: number;
  /**
   * Additional Reference.
   * @nullable
   */
  additionalReference?: string;
  /**
   * Check Abs.
   * @nullable
   */
  checkAbs?: number;
  /**
   * Costing Code 2.
   * @nullable
   */
  costingCode2?: string;
  /**
   * Costing Code 3.
   * @nullable
   */
  costingCode3?: string;
  /**
   * Costing Code 4.
   * @nullable
   */
  costingCode4?: string;
  /**
   * Tax Code.
   * @nullable
   */
  taxCode?: string;
  /**
   * Tax Post Account.
   * @nullable
   */
  taxPostAccount?: BoTaxPostAccEnum;
  /**
   * Costing Code 5.
   * @nullable
   */
  costingCode5?: string;
  /**
   * Location Code.
   * @nullable
   */
  locationCode?: number;
  /**
   * Control Account.
   * @nullable
   */
  controlAccount?: string;
  /**
   * Equalization Tax Amount.
   * @nullable
   */
  equalizationTaxAmount?: number;
  /**
   * System Equalization Tax Amount.
   * @nullable
   */
  systemEqualizationTaxAmount?: number;
  /**
   * Total Tax.
   * @nullable
   */
  totalTax?: number;
  /**
   * System Total Tax.
   * @nullable
   */
  systemTotalTax?: number;
  /**
   * Wt Liable.
   * @nullable
   */
  wtLiable?: BoYesNoEnum;
  /**
   * Wt Row.
   * @nullable
   */
  wtRow?: BoYesNoEnum;
  /**
   * Payment Block.
   * @nullable
   */
  paymentBlock?: BoYesNoEnum;
  /**
   * Block Reason.
   * @nullable
   */
  blockReason?: number;
  /**
   * Federal Tax Id.
   * @nullable
   */
  federalTaxId?: string;
  /**
   * Bplid.
   * @nullable
   */
  bplid?: number;
  /**
   * Bpl Name.
   * @nullable
   */
  bplName?: string;
  /**
   * Vat Reg Num.
   * @nullable
   */
  vatRegNum?: string;
  /**
   * Payment Ordered.
   * @nullable
   */
  paymentOrdered?: BoYesNoEnum;
  /**
   * Exposed Trans Number.
   * @nullable
   */
  exposedTransNumber?: number;
  /**
   * Document Array.
   * @nullable
   */
  documentArray?: number;
  /**
   * Document Line.
   * @nullable
   */
  documentLine?: number;
  /**
   * Cost Element Code.
   * @nullable
   */
  costElementCode?: string;
  /**
   * Cash Flow Assignments.
   * @nullable
   */
  cashFlowAssignments?: CashFlowAssignment[];
}

/**
 * @deprecated Since v1.6.0. Use [[JournalEntryLine.build]] instead.
 */
export function createJournalEntryLine(json: any): JournalEntryLine {
  return JournalEntryLine.build(json);
}

/**
 * JournalEntryLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class JournalEntryLineField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, JournalEntryLine> {
  /**
   * Representation of the [[JournalEntryLine.lineId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Line_ID', this, 'Edm.Int32');
  /**
   * Representation of the [[JournalEntryLine.accountCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  accountCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('AccountCode', this, 'Edm.String');
  /**
   * Representation of the [[JournalEntryLine.debit]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  debit: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Debit', this, 'Edm.Double');
  /**
   * Representation of the [[JournalEntryLine.credit]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  credit: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Credit', this, 'Edm.Double');
  /**
   * Representation of the [[JournalEntryLine.fcDebit]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  fcDebit: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('FCDebit', this, 'Edm.Double');
  /**
   * Representation of the [[JournalEntryLine.fcCredit]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  fcCredit: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('FCCredit', this, 'Edm.Double');
  /**
   * Representation of the [[JournalEntryLine.fcCurrency]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  fcCurrency: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('FCCurrency', this, 'Edm.String');
  /**
   * Representation of the [[JournalEntryLine.dueDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  dueDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('DueDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[JournalEntryLine.shortName]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  shortName: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ShortName', this, 'Edm.String');
  /**
   * Representation of the [[JournalEntryLine.contraAccount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  contraAccount: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ContraAccount', this, 'Edm.String');
  /**
   * Representation of the [[JournalEntryLine.lineMemo]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineMemo: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('LineMemo', this, 'Edm.String');
  /**
   * Representation of the [[JournalEntryLine.referenceDate1]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  referenceDate1: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('ReferenceDate1', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[JournalEntryLine.referenceDate2]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  referenceDate2: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('ReferenceDate2', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[JournalEntryLine.reference1]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  reference1: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Reference1', this, 'Edm.String');
  /**
   * Representation of the [[JournalEntryLine.reference2]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  reference2: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Reference2', this, 'Edm.String');
  /**
   * Representation of the [[JournalEntryLine.projectCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  projectCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ProjectCode', this, 'Edm.String');
  /**
   * Representation of the [[JournalEntryLine.costingCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  costingCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('CostingCode', this, 'Edm.String');
  /**
   * Representation of the [[JournalEntryLine.taxDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('TaxDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[JournalEntryLine.baseSum]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  baseSum: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('BaseSum', this, 'Edm.Double');
  /**
   * Representation of the [[JournalEntryLine.taxGroup]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxGroup: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('TaxGroup', this, 'Edm.String');
  /**
   * Representation of the [[JournalEntryLine.debitSys]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  debitSys: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DebitSys', this, 'Edm.Double');
  /**
   * Representation of the [[JournalEntryLine.creditSys]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  creditSys: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('CreditSys', this, 'Edm.Double');
  /**
   * Representation of the [[JournalEntryLine.vatDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  vatDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('VatDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[JournalEntryLine.vatLine]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  vatLine: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('VatLine', this);
  /**
   * Representation of the [[JournalEntryLine.systemBaseAmount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  systemBaseAmount: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('SystemBaseAmount', this, 'Edm.Double');
  /**
   * Representation of the [[JournalEntryLine.vatAmount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  vatAmount: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('VatAmount', this, 'Edm.Double');
  /**
   * Representation of the [[JournalEntryLine.systemVatAmount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  systemVatAmount: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('SystemVatAmount', this, 'Edm.Double');
  /**
   * Representation of the [[JournalEntryLine.grossValue]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  grossValue: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('GrossValue', this, 'Edm.Double');
  /**
   * Representation of the [[JournalEntryLine.additionalReference]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  additionalReference: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('AdditionalReference', this, 'Edm.String');
  /**
   * Representation of the [[JournalEntryLine.checkAbs]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  checkAbs: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('CheckAbs', this, 'Edm.Int32');
  /**
   * Representation of the [[JournalEntryLine.costingCode2]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  costingCode2: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('CostingCode2', this, 'Edm.String');
  /**
   * Representation of the [[JournalEntryLine.costingCode3]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  costingCode3: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('CostingCode3', this, 'Edm.String');
  /**
   * Representation of the [[JournalEntryLine.costingCode4]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  costingCode4: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('CostingCode4', this, 'Edm.String');
  /**
   * Representation of the [[JournalEntryLine.taxCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('TaxCode', this, 'Edm.String');
  /**
   * Representation of the [[JournalEntryLine.taxPostAccount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxPostAccount: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('TaxPostAccount', this);
  /**
   * Representation of the [[JournalEntryLine.costingCode5]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  costingCode5: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('CostingCode5', this, 'Edm.String');
  /**
   * Representation of the [[JournalEntryLine.locationCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  locationCode: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LocationCode', this, 'Edm.Int32');
  /**
   * Representation of the [[JournalEntryLine.controlAccount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  controlAccount: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ControlAccount', this, 'Edm.String');
  /**
   * Representation of the [[JournalEntryLine.equalizationTaxAmount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  equalizationTaxAmount: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('EqualizationTaxAmount', this, 'Edm.Double');
  /**
   * Representation of the [[JournalEntryLine.systemEqualizationTaxAmount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  systemEqualizationTaxAmount: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('SystemEqualizationTaxAmount', this, 'Edm.Double');
  /**
   * Representation of the [[JournalEntryLine.totalTax]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  totalTax: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TotalTax', this, 'Edm.Double');
  /**
   * Representation of the [[JournalEntryLine.systemTotalTax]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  systemTotalTax: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('SystemTotalTax', this, 'Edm.Double');
  /**
   * Representation of the [[JournalEntryLine.wtLiable]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  wtLiable: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('WTLiable', this);
  /**
   * Representation of the [[JournalEntryLine.wtRow]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  wtRow: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('WTRow', this);
  /**
   * Representation of the [[JournalEntryLine.paymentBlock]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  paymentBlock: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('PaymentBlock', this);
  /**
   * Representation of the [[JournalEntryLine.blockReason]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  blockReason: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('BlockReason', this, 'Edm.Int32');
  /**
   * Representation of the [[JournalEntryLine.federalTaxId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  federalTaxId: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('FederalTaxID', this, 'Edm.String');
  /**
   * Representation of the [[JournalEntryLine.bplid]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bplid: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('BPLID', this, 'Edm.Int32');
  /**
   * Representation of the [[JournalEntryLine.bplName]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bplName: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('BPLName', this, 'Edm.String');
  /**
   * Representation of the [[JournalEntryLine.vatRegNum]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  vatRegNum: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('VATRegNum', this, 'Edm.String');
  /**
   * Representation of the [[JournalEntryLine.paymentOrdered]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  paymentOrdered: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('PaymentOrdered', this);
  /**
   * Representation of the [[JournalEntryLine.exposedTransNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  exposedTransNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ExposedTransNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[JournalEntryLine.documentArray]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  documentArray: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DocumentArray', this, 'Edm.Int32');
  /**
   * Representation of the [[JournalEntryLine.documentLine]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  documentLine: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DocumentLine', this, 'Edm.Int32');
  /**
   * Representation of the [[JournalEntryLine.costElementCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  costElementCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('CostElementCode', this, 'Edm.String');
  /**
   * Representation of the [[JournalEntryLine.cashFlowAssignments]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  cashFlowAssignments: CollectionField<EntityT, CashFlowAssignment> = new CollectionField('CashFlowAssignments', this, CashFlowAssignment);

  /**
   * Creates an instance of JournalEntryLineField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, JournalEntryLine);
  }
}

export namespace JournalEntryLine {
  /**
   * Metadata information on all properties of the `JournalEntryLine` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<JournalEntryLine>[] = [{
    originalName: 'Line_ID',
    name: 'lineId',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'AccountCode',
    name: 'accountCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Debit',
    name: 'debit',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'Credit',
    name: 'credit',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'FCDebit',
    name: 'fcDebit',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'FCCredit',
    name: 'fcCredit',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'FCCurrency',
    name: 'fcCurrency',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'DueDate',
    name: 'dueDate',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'ShortName',
    name: 'shortName',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ContraAccount',
    name: 'contraAccount',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'LineMemo',
    name: 'lineMemo',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ReferenceDate1',
    name: 'referenceDate1',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'ReferenceDate2',
    name: 'referenceDate2',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'Reference1',
    name: 'reference1',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Reference2',
    name: 'reference2',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ProjectCode',
    name: 'projectCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'CostingCode',
    name: 'costingCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'TaxDate',
    name: 'taxDate',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'BaseSum',
    name: 'baseSum',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'TaxGroup',
    name: 'taxGroup',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'DebitSys',
    name: 'debitSys',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'CreditSys',
    name: 'creditSys',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'VatDate',
    name: 'vatDate',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'VatLine',
    name: 'vatLine',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'SystemBaseAmount',
    name: 'systemBaseAmount',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'VatAmount',
    name: 'vatAmount',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'SystemVatAmount',
    name: 'systemVatAmount',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'GrossValue',
    name: 'grossValue',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'AdditionalReference',
    name: 'additionalReference',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'CheckAbs',
    name: 'checkAbs',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'CostingCode2',
    name: 'costingCode2',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'CostingCode3',
    name: 'costingCode3',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'CostingCode4',
    name: 'costingCode4',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'TaxCode',
    name: 'taxCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'TaxPostAccount',
    name: 'taxPostAccount',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'CostingCode5',
    name: 'costingCode5',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'LocationCode',
    name: 'locationCode',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'ControlAccount',
    name: 'controlAccount',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'EqualizationTaxAmount',
    name: 'equalizationTaxAmount',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'SystemEqualizationTaxAmount',
    name: 'systemEqualizationTaxAmount',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'TotalTax',
    name: 'totalTax',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'SystemTotalTax',
    name: 'systemTotalTax',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'WTLiable',
    name: 'wtLiable',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'WTRow',
    name: 'wtRow',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'PaymentBlock',
    name: 'paymentBlock',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'BlockReason',
    name: 'blockReason',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'FederalTaxID',
    name: 'federalTaxId',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'BPLID',
    name: 'bplid',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'BPLName',
    name: 'bplName',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'VATRegNum',
    name: 'vatRegNum',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'PaymentOrdered',
    name: 'paymentOrdered',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'ExposedTransNumber',
    name: 'exposedTransNumber',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'DocumentArray',
    name: 'documentArray',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'DocumentLine',
    name: 'documentLine',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'CostElementCode',
    name: 'costElementCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'CashFlowAssignments',
    name: 'cashFlowAssignments',
    type: CashFlowAssignment,
    isCollection: true
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType | CashFlowAssignment }): JournalEntryLine {
    return deserializeComplexTypeV4(json, JournalEntryLine);
  }
}
