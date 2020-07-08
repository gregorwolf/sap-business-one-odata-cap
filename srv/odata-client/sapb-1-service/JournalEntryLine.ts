/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { CashFlowAssignment, CashFlowAssignmentField } from './CashFlowAssignment';
import { CollectionField, ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

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
  cashFlowAssignments?: CashFlowAssignment;
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
export class JournalEntryLineField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
  cashFlowAssignments: CashFlowAssignmentField<EntityT> = new CashFlowAssignmentField('CashFlowAssignments', this);
}

export namespace JournalEntryLine {
  export function build(json: { [keys: string]: FieldType | CashFlowAssignment }): JournalEntryLine {
    return createComplexType(json, {
      Line_ID: (lineId: number) => ({ lineId: edmToTs(lineId, 'Edm.Int32') }),
      AccountCode: (accountCode: string) => ({ accountCode: edmToTs(accountCode, 'Edm.String') }),
      Debit: (debit: number) => ({ debit: edmToTs(debit, 'Edm.Double') }),
      Credit: (credit: number) => ({ credit: edmToTs(credit, 'Edm.Double') }),
      FCDebit: (fcDebit: number) => ({ fcDebit: edmToTs(fcDebit, 'Edm.Double') }),
      FCCredit: (fcCredit: number) => ({ fcCredit: edmToTs(fcCredit, 'Edm.Double') }),
      FCCurrency: (fcCurrency: string) => ({ fcCurrency: edmToTs(fcCurrency, 'Edm.String') }),
      DueDate: (dueDate: Moment) => ({ dueDate: edmToTs(dueDate, 'Edm.DateTimeOffset') }),
      ShortName: (shortName: string) => ({ shortName: edmToTs(shortName, 'Edm.String') }),
      ContraAccount: (contraAccount: string) => ({ contraAccount: edmToTs(contraAccount, 'Edm.String') }),
      LineMemo: (lineMemo: string) => ({ lineMemo: edmToTs(lineMemo, 'Edm.String') }),
      ReferenceDate1: (referenceDate1: Moment) => ({ referenceDate1: edmToTs(referenceDate1, 'Edm.DateTimeOffset') }),
      ReferenceDate2: (referenceDate2: Moment) => ({ referenceDate2: edmToTs(referenceDate2, 'Edm.DateTimeOffset') }),
      Reference1: (reference1: string) => ({ reference1: edmToTs(reference1, 'Edm.String') }),
      Reference2: (reference2: string) => ({ reference2: edmToTs(reference2, 'Edm.String') }),
      ProjectCode: (projectCode: string) => ({ projectCode: edmToTs(projectCode, 'Edm.String') }),
      CostingCode: (costingCode: string) => ({ costingCode: edmToTs(costingCode, 'Edm.String') }),
      TaxDate: (taxDate: Moment) => ({ taxDate: edmToTs(taxDate, 'Edm.DateTimeOffset') }),
      BaseSum: (baseSum: number) => ({ baseSum: edmToTs(baseSum, 'Edm.Double') }),
      TaxGroup: (taxGroup: string) => ({ taxGroup: edmToTs(taxGroup, 'Edm.String') }),
      DebitSys: (debitSys: number) => ({ debitSys: edmToTs(debitSys, 'Edm.Double') }),
      CreditSys: (creditSys: number) => ({ creditSys: edmToTs(creditSys, 'Edm.Double') }),
      VatDate: (vatDate: Moment) => ({ vatDate: edmToTs(vatDate, 'Edm.DateTimeOffset') }),
      SystemBaseAmount: (systemBaseAmount: number) => ({ systemBaseAmount: edmToTs(systemBaseAmount, 'Edm.Double') }),
      VatAmount: (vatAmount: number) => ({ vatAmount: edmToTs(vatAmount, 'Edm.Double') }),
      SystemVatAmount: (systemVatAmount: number) => ({ systemVatAmount: edmToTs(systemVatAmount, 'Edm.Double') }),
      GrossValue: (grossValue: number) => ({ grossValue: edmToTs(grossValue, 'Edm.Double') }),
      AdditionalReference: (additionalReference: string) => ({ additionalReference: edmToTs(additionalReference, 'Edm.String') }),
      CheckAbs: (checkAbs: number) => ({ checkAbs: edmToTs(checkAbs, 'Edm.Int32') }),
      CostingCode2: (costingCode2: string) => ({ costingCode2: edmToTs(costingCode2, 'Edm.String') }),
      CostingCode3: (costingCode3: string) => ({ costingCode3: edmToTs(costingCode3, 'Edm.String') }),
      CostingCode4: (costingCode4: string) => ({ costingCode4: edmToTs(costingCode4, 'Edm.String') }),
      TaxCode: (taxCode: string) => ({ taxCode: edmToTs(taxCode, 'Edm.String') }),
      CostingCode5: (costingCode5: string) => ({ costingCode5: edmToTs(costingCode5, 'Edm.String') }),
      LocationCode: (locationCode: number) => ({ locationCode: edmToTs(locationCode, 'Edm.Int32') }),
      ControlAccount: (controlAccount: string) => ({ controlAccount: edmToTs(controlAccount, 'Edm.String') }),
      EqualizationTaxAmount: (equalizationTaxAmount: number) => ({ equalizationTaxAmount: edmToTs(equalizationTaxAmount, 'Edm.Double') }),
      SystemEqualizationTaxAmount: (systemEqualizationTaxAmount: number) => ({ systemEqualizationTaxAmount: edmToTs(systemEqualizationTaxAmount, 'Edm.Double') }),
      TotalTax: (totalTax: number) => ({ totalTax: edmToTs(totalTax, 'Edm.Double') }),
      SystemTotalTax: (systemTotalTax: number) => ({ systemTotalTax: edmToTs(systemTotalTax, 'Edm.Double') }),
      BlockReason: (blockReason: number) => ({ blockReason: edmToTs(blockReason, 'Edm.Int32') }),
      FederalTaxID: (federalTaxId: string) => ({ federalTaxId: edmToTs(federalTaxId, 'Edm.String') }),
      BPLID: (bplid: number) => ({ bplid: edmToTs(bplid, 'Edm.Int32') }),
      BPLName: (bplName: string) => ({ bplName: edmToTs(bplName, 'Edm.String') }),
      VATRegNum: (vatRegNum: string) => ({ vatRegNum: edmToTs(vatRegNum, 'Edm.String') }),
      ExposedTransNumber: (exposedTransNumber: number) => ({ exposedTransNumber: edmToTs(exposedTransNumber, 'Edm.Int32') }),
      DocumentArray: (documentArray: number) => ({ documentArray: edmToTs(documentArray, 'Edm.Int32') }),
      DocumentLine: (documentLine: number) => ({ documentLine: edmToTs(documentLine, 'Edm.Int32') }),
      CostElementCode: (costElementCode: string) => ({ costElementCode: edmToTs(costElementCode, 'Edm.String') }),
      CashFlowAssignments: (cashFlowAssignments: CashFlowAssignment) => ({ cashFlowAssignments: CashFlowAssignment.build(cashFlowAssignments) })
    });
  }
}
