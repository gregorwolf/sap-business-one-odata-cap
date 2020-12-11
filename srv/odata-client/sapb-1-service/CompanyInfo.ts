/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BoYesNoEnum } from './BoYesNoEnum';
import { BoBaseDateRateEnum } from './BoBaseDateRateEnum';
import { BoManageMethod } from './BoManageMethod';
import { TaxCalcSysEnum } from './TaxCalcSysEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * CompanyInfo
 */
export interface CompanyInfo {
  /**
   * Version.
   * @nullable
   */
  version?: number;
  /**
   * Enable Expenses Management.
   * @nullable
   */
  enableExpensesManagement?: BoYesNoEnum;
  /**
   * Enable Account Segmentation.
   * @nullable
   */
  enableAccountSegmentation?: BoYesNoEnum;
  /**
   * Enable Bill Of Exchange.
   * @nullable
   */
  enableBillOfExchange?: BoYesNoEnum;
  /**
   * Base Date For Exchange Rate.
   * @nullable
   */
  baseDateForExchangeRate?: BoBaseDateRateEnum;
  /**
   * Bisr Bank Act Key.
   * @nullable
   */
  bisrBankActKey?: number;
  /**
   * Bisr Bank Country.
   * @nullable
   */
  bisrBankCountry?: string;
  /**
   * Bisr Bank No.
   * @nullable
   */
  bisrBankNo?: string;
  /**
   * Bisr Bank Account.
   * @nullable
   */
  bisrBankAccount?: string;
  /**
   * Bisr Branch.
   * @nullable
   */
  bisrBranch?: string;
  /**
   * Max Records In Choose From List.
   * @nullable
   */
  maxRecordsInChooseFromList?: number;
  /**
   * Enable Check Quantity In Rdr.
   * @nullable
   */
  enableCheckQuantityInRdr?: BoYesNoEnum;
  /**
   * Sri Management System.
   * @nullable
   */
  sriManagementSystem?: BoManageMethod;
  /**
   * Auto Sri Creation On Receipt.
   * @nullable
   */
  autoSriCreationOnReceipt?: BoYesNoEnum;
  /**
   * Ieps Payer.
   * @nullable
   */
  iepsPayer?: BoYesNoEnum;
  /**
   * Default Days For Ord Canc.
   * @nullable
   */
  defaultDaysForOrdCanc?: number;
  /**
   * Percent Of Total Acquisition.
   * @nullable
   */
  percentOfTotalAcquisition?: number;
  /**
   * Minimum Base Amount Per Doc.
   * @nullable
   */
  minimumBaseAmountPerDoc?: number;
  /**
   * Enable Sharing Series.
   * @nullable
   */
  enableSharingSeries?: BoYesNoEnum;
  /**
   * Data Ownership Indication.
   * @nullable
   */
  dataOwnershipIndication?: BoYesNoEnum;
  /**
   * Minimum Amount For Appndix Op.
   * @nullable
   */
  minimumAmountForAppndixOp?: number;
  /**
   * Display Transactions By Dflt.
   * @nullable
   */
  displayTransactionsByDflt?: BoYesNoEnum;
  /**
   * Default Stamp Tax.
   * @nullable
   */
  defaultStampTax?: string;
  /**
   * Minimum Amount For Annual List.
   * @nullable
   */
  minimumAmountForAnnualList?: number;
  /**
   * Block Stock Negative Quantity.
   * @nullable
   */
  blockStockNegativeQuantity?: BoYesNoEnum;
  /**
   * Auto Create Customer Eq Card.
   * @nullable
   */
  autoCreateCustomerEqCard?: BoYesNoEnum;
  /**
   * Max Number Of Documents In Pmt.
   * @nullable
   */
  maxNumberOfDocumentsInPmt?: number;
  /**
   * Enable Stock Rel No Cost Price.
   * @nullable
   */
  enableStockRelNoCostPrice?: BoYesNoEnum;
  /**
   * Company Name.
   * @nullable
   */
  companyName?: string;
  /**
   * Group Lines In Vat Calculation.
   * @nullable
   */
  groupLinesInVatCalculation?: BoYesNoEnum;
  /**
   * Tax Calculation System.
   * @nullable
   */
  taxCalculationSystem?: TaxCalcSysEnum;
  /**
   * Enable Transaction Notification.
   * @nullable
   */
  enableTransactionNotification?: BoYesNoEnum;
  /**
   * Enable Conversion Different Acct.
   * @nullable
   */
  enableConversionDifferentAcct?: BoYesNoEnum;
  /**
   * B 1 I Time Out.
   * @nullable
   */
  b1ITimeOut?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[CompanyInfo.build]] instead.
 */
export function createCompanyInfo(json: any): CompanyInfo {
  return CompanyInfo.build(json);
}

/**
 * CompanyInfoField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class CompanyInfoField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, CompanyInfo> {
  /**
   * Representation of the [[CompanyInfo.version]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  version: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Version', this, 'Edm.Int32');
  /**
   * Representation of the [[CompanyInfo.enableExpensesManagement]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  enableExpensesManagement: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('EnableExpensesManagement', this);
  /**
   * Representation of the [[CompanyInfo.enableAccountSegmentation]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  enableAccountSegmentation: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('EnableAccountSegmentation', this);
  /**
   * Representation of the [[CompanyInfo.enableBillOfExchange]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  enableBillOfExchange: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('EnableBillOfExchange', this);
  /**
   * Representation of the [[CompanyInfo.baseDateForExchangeRate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  baseDateForExchangeRate: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('BaseDateForExchangeRate', this);
  /**
   * Representation of the [[CompanyInfo.bisrBankActKey]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bisrBankActKey: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('BISRBankActKey', this, 'Edm.Int32');
  /**
   * Representation of the [[CompanyInfo.bisrBankCountry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bisrBankCountry: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('BISRBankCountry', this, 'Edm.String');
  /**
   * Representation of the [[CompanyInfo.bisrBankNo]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bisrBankNo: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('BISRBankNo', this, 'Edm.String');
  /**
   * Representation of the [[CompanyInfo.bisrBankAccount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bisrBankAccount: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('BISRBankAccount', this, 'Edm.String');
  /**
   * Representation of the [[CompanyInfo.bisrBranch]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bisrBranch: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('BISRBranch', this, 'Edm.String');
  /**
   * Representation of the [[CompanyInfo.maxRecordsInChooseFromList]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  maxRecordsInChooseFromList: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('MaxRecordsInChooseFromList', this, 'Edm.Int32');
  /**
   * Representation of the [[CompanyInfo.enableCheckQuantityInRdr]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  enableCheckQuantityInRdr: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('EnableCheckQuantityInRDR', this);
  /**
   * Representation of the [[CompanyInfo.sriManagementSystem]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sriManagementSystem: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('SRIManagementSystem', this);
  /**
   * Representation of the [[CompanyInfo.autoSriCreationOnReceipt]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  autoSriCreationOnReceipt: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('AutoSRICreationOnReceipt', this);
  /**
   * Representation of the [[CompanyInfo.iepsPayer]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  iepsPayer: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('IEPSPayer', this);
  /**
   * Representation of the [[CompanyInfo.defaultDaysForOrdCanc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  defaultDaysForOrdCanc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DefaultDaysForOrdCanc', this, 'Edm.Int32');
  /**
   * Representation of the [[CompanyInfo.percentOfTotalAcquisition]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  percentOfTotalAcquisition: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('PercentOfTotalAcquisition', this, 'Edm.Double');
  /**
   * Representation of the [[CompanyInfo.minimumBaseAmountPerDoc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  minimumBaseAmountPerDoc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('MinimumBaseAmountPerDoc', this, 'Edm.Double');
  /**
   * Representation of the [[CompanyInfo.enableSharingSeries]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  enableSharingSeries: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('EnableSharingSeries', this);
  /**
   * Representation of the [[CompanyInfo.dataOwnershipIndication]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  dataOwnershipIndication: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('DataOwnershipIndication', this);
  /**
   * Representation of the [[CompanyInfo.minimumAmountForAppndixOp]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  minimumAmountForAppndixOp: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('MinimumAmountForAppndixOP', this, 'Edm.Double');
  /**
   * Representation of the [[CompanyInfo.displayTransactionsByDflt]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  displayTransactionsByDflt: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('DisplayTransactionsByDflt', this);
  /**
   * Representation of the [[CompanyInfo.defaultStampTax]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  defaultStampTax: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('DefaultStampTax', this, 'Edm.String');
  /**
   * Representation of the [[CompanyInfo.minimumAmountForAnnualList]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  minimumAmountForAnnualList: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('MinimumAmountForAnnualList', this, 'Edm.Double');
  /**
   * Representation of the [[CompanyInfo.blockStockNegativeQuantity]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  blockStockNegativeQuantity: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('BlockStockNegativeQuantity', this);
  /**
   * Representation of the [[CompanyInfo.autoCreateCustomerEqCard]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  autoCreateCustomerEqCard: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('AutoCreateCustomerEqCard', this);
  /**
   * Representation of the [[CompanyInfo.maxNumberOfDocumentsInPmt]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  maxNumberOfDocumentsInPmt: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('MaxNumberOfDocumentsInPmt', this, 'Edm.Int32');
  /**
   * Representation of the [[CompanyInfo.enableStockRelNoCostPrice]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  enableStockRelNoCostPrice: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('EnableStockRelNoCostPrice', this);
  /**
   * Representation of the [[CompanyInfo.companyName]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  companyName: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('CompanyName', this, 'Edm.String');
  /**
   * Representation of the [[CompanyInfo.groupLinesInVatCalculation]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  groupLinesInVatCalculation: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('GroupLinesInVATCalculation', this);
  /**
   * Representation of the [[CompanyInfo.taxCalculationSystem]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxCalculationSystem: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('TaxCalculationSystem', this);
  /**
   * Representation of the [[CompanyInfo.enableTransactionNotification]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  enableTransactionNotification: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('EnableTransactionNotification', this);
  /**
   * Representation of the [[CompanyInfo.enableConversionDifferentAcct]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  enableConversionDifferentAcct: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('EnableConversionDifferentAcct', this);
  /**
   * Representation of the [[CompanyInfo.b1ITimeOut]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  b1ITimeOut: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('B1iTimeOut', this, 'Edm.Int32');

  /**
   * Creates an instance of CompanyInfoField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, CompanyInfo);
  }
}

export namespace CompanyInfo {
  /**
   * Metadata information on all properties of the `CompanyInfo` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<CompanyInfo>[] = [{
    originalName: 'Version',
    name: 'version',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'EnableExpensesManagement',
    name: 'enableExpensesManagement',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'EnableAccountSegmentation',
    name: 'enableAccountSegmentation',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'EnableBillOfExchange',
    name: 'enableBillOfExchange',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'BaseDateForExchangeRate',
    name: 'baseDateForExchangeRate',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'BISRBankActKey',
    name: 'bisrBankActKey',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'BISRBankCountry',
    name: 'bisrBankCountry',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'BISRBankNo',
    name: 'bisrBankNo',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'BISRBankAccount',
    name: 'bisrBankAccount',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'BISRBranch',
    name: 'bisrBranch',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'MaxRecordsInChooseFromList',
    name: 'maxRecordsInChooseFromList',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'EnableCheckQuantityInRDR',
    name: 'enableCheckQuantityInRdr',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'SRIManagementSystem',
    name: 'sriManagementSystem',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'AutoSRICreationOnReceipt',
    name: 'autoSriCreationOnReceipt',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'IEPSPayer',
    name: 'iepsPayer',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'DefaultDaysForOrdCanc',
    name: 'defaultDaysForOrdCanc',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'PercentOfTotalAcquisition',
    name: 'percentOfTotalAcquisition',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'MinimumBaseAmountPerDoc',
    name: 'minimumBaseAmountPerDoc',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'EnableSharingSeries',
    name: 'enableSharingSeries',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'DataOwnershipIndication',
    name: 'dataOwnershipIndication',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'MinimumAmountForAppndixOP',
    name: 'minimumAmountForAppndixOp',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'DisplayTransactionsByDflt',
    name: 'displayTransactionsByDflt',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'DefaultStampTax',
    name: 'defaultStampTax',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'MinimumAmountForAnnualList',
    name: 'minimumAmountForAnnualList',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'BlockStockNegativeQuantity',
    name: 'blockStockNegativeQuantity',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'AutoCreateCustomerEqCard',
    name: 'autoCreateCustomerEqCard',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'MaxNumberOfDocumentsInPmt',
    name: 'maxNumberOfDocumentsInPmt',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'EnableStockRelNoCostPrice',
    name: 'enableStockRelNoCostPrice',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'CompanyName',
    name: 'companyName',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'GroupLinesInVATCalculation',
    name: 'groupLinesInVatCalculation',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'TaxCalculationSystem',
    name: 'taxCalculationSystem',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'EnableTransactionNotification',
    name: 'enableTransactionNotification',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'EnableConversionDifferentAcct',
    name: 'enableConversionDifferentAcct',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'B1iTimeOut',
    name: 'b1ITimeOut',
    type: 'Edm.Int32',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): CompanyInfo {
    return deserializeComplexTypeV4(json, CompanyInfo);
  }
}
