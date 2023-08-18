/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BoYesNoEnum } from './BoYesNoEnum';
import { BoBaseDateRateEnum } from './BoBaseDateRateEnum';
import { BoManageMethod } from './BoManageMethod';
import { TaxCalcSysEnum } from './TaxCalcSysEnum';
import { BoSuppLangs } from './BoSuppLangs';
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
 * CompanyInfo
 */
export interface CompanyInfo<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Version.
   * @nullable
   */
  version?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Enable Expenses Management.
   * @nullable
   */
  enableExpensesManagement?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Enable Account Segmentation.
   * @nullable
   */
  enableAccountSegmentation?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Enable Bill Of Exchange.
   * @nullable
   */
  enableBillOfExchange?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Base Date For Exchange Rate.
   * @nullable
   */
  baseDateForExchangeRate?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Bisr Bank Act Key.
   * @nullable
   */
  bisrBankActKey?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Bisr Bank Country.
   * @nullable
   */
  bisrBankCountry?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Bisr Bank No.
   * @nullable
   */
  bisrBankNo?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Bisr Bank Account.
   * @nullable
   */
  bisrBankAccount?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Bisr Branch.
   * @nullable
   */
  bisrBranch?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Max Records In Choose From List.
   * @nullable
   */
  maxRecordsInChooseFromList?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Enable Check Quantity In Rdr.
   * @nullable
   */
  enableCheckQuantityInRdr?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Sri Management System.
   * @nullable
   */
  sriManagementSystem?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Auto Sri Creation On Receipt.
   * @nullable
   */
  autoSriCreationOnReceipt?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Ieps Payer.
   * @nullable
   */
  iepsPayer?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Default Days For Ord Canc.
   * @nullable
   */
  defaultDaysForOrdCanc?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Percent Of Total Acquisition.
   * @nullable
   */
  percentOfTotalAcquisition?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Minimum Base Amount Per Doc.
   * @nullable
   */
  minimumBaseAmountPerDoc?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Enable Sharing Series.
   * @nullable
   */
  enableSharingSeries?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Data Ownership Indication.
   * @nullable
   */
  dataOwnershipIndication?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Minimum Amount For Appndix Op.
   * @nullable
   */
  minimumAmountForAppndixOp?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Display Transactions By Dflt.
   * @nullable
   */
  displayTransactionsByDflt?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Default Stamp Tax.
   * @nullable
   */
  defaultStampTax?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Minimum Amount For Annual List.
   * @nullable
   */
  minimumAmountForAnnualList?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Block Stock Negative Quantity.
   * @nullable
   */
  blockStockNegativeQuantity?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Auto Create Customer Eq Card.
   * @nullable
   */
  autoCreateCustomerEqCard?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Max Number Of Documents In Pmt.
   * @nullable
   */
  maxNumberOfDocumentsInPmt?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Enable Stock Rel No Cost Price.
   * @nullable
   */
  enableStockRelNoCostPrice?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Company Name.
   * @nullable
   */
  companyName?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Group Lines In Vat Calculation.
   * @nullable
   */
  groupLinesInVatCalculation?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Tax Calculation System.
   * @nullable
   */
  taxCalculationSystem?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Enable Transaction Notification.
   * @nullable
   */
  enableTransactionNotification?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Enable Conversion Different Acct.
   * @nullable
   */
  enableConversionDifferentAcct?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * B 1 I Time Out.
   * @nullable
   */
  b1ITimeOut?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Language Code.
   * @nullable
   */
  languageCode?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Localization.
   * @nullable
   */
  localization?: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * CompanyInfoField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class CompanyInfoField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  CompanyInfo,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link CompanyInfo.version} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  version: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Version', 'Edm.Int32', true);
  /**
   * Representation of the {@link CompanyInfo.enableExpensesManagement} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  enableExpensesManagement: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'EnableExpensesManagement',
    BoYesNoEnum,
    true
  );
  /**
   * Representation of the {@link CompanyInfo.enableAccountSegmentation} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  enableAccountSegmentation: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'EnableAccountSegmentation',
    BoYesNoEnum,
    true
  );
  /**
   * Representation of the {@link CompanyInfo.enableBillOfExchange} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  enableBillOfExchange: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'EnableBillOfExchange',
    BoYesNoEnum,
    true
  );
  /**
   * Representation of the {@link CompanyInfo.baseDateForExchangeRate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  baseDateForExchangeRate: EnumField<
    EntityT,
    DeSerializersT,
    BoBaseDateRateEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'BaseDateForExchangeRate',
    BoBaseDateRateEnum,
    true
  );
  /**
   * Representation of the {@link CompanyInfo.bisrBankActKey} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bisrBankActKey: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('BISRBankActKey', 'Edm.Int32', true);
  /**
   * Representation of the {@link CompanyInfo.bisrBankCountry} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bisrBankCountry: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'BISRBankCountry',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link CompanyInfo.bisrBankNo} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bisrBankNo: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('BISRBankNo', 'Edm.String', true);
  /**
   * Representation of the {@link CompanyInfo.bisrBankAccount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bisrBankAccount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'BISRBankAccount',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link CompanyInfo.bisrBranch} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bisrBranch: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('BISRBranch', 'Edm.String', true);
  /**
   * Representation of the {@link CompanyInfo.maxRecordsInChooseFromList} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  maxRecordsInChooseFromList: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'MaxRecordsInChooseFromList',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link CompanyInfo.enableCheckQuantityInRdr} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  enableCheckQuantityInRdr: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'EnableCheckQuantityInRDR',
    BoYesNoEnum,
    true
  );
  /**
   * Representation of the {@link CompanyInfo.sriManagementSystem} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sriManagementSystem: EnumField<
    EntityT,
    DeSerializersT,
    BoManageMethod,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'SRIManagementSystem',
    BoManageMethod,
    true
  );
  /**
   * Representation of the {@link CompanyInfo.autoSriCreationOnReceipt} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  autoSriCreationOnReceipt: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'AutoSRICreationOnReceipt',
    BoYesNoEnum,
    true
  );
  /**
   * Representation of the {@link CompanyInfo.iepsPayer} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  iepsPayer: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('IEPSPayer', BoYesNoEnum, true);
  /**
   * Representation of the {@link CompanyInfo.defaultDaysForOrdCanc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  defaultDaysForOrdCanc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DefaultDaysForOrdCanc',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link CompanyInfo.percentOfTotalAcquisition} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  percentOfTotalAcquisition: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'PercentOfTotalAcquisition',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link CompanyInfo.minimumBaseAmountPerDoc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  minimumBaseAmountPerDoc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'MinimumBaseAmountPerDoc',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link CompanyInfo.enableSharingSeries} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  enableSharingSeries: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'EnableSharingSeries',
    BoYesNoEnum,
    true
  );
  /**
   * Representation of the {@link CompanyInfo.dataOwnershipIndication} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  dataOwnershipIndication: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'DataOwnershipIndication',
    BoYesNoEnum,
    true
  );
  /**
   * Representation of the {@link CompanyInfo.minimumAmountForAppndixOp} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  minimumAmountForAppndixOp: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'MinimumAmountForAppndixOP',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link CompanyInfo.displayTransactionsByDflt} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  displayTransactionsByDflt: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'DisplayTransactionsByDflt',
    BoYesNoEnum,
    true
  );
  /**
   * Representation of the {@link CompanyInfo.defaultStampTax} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  defaultStampTax: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DefaultStampTax',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link CompanyInfo.minimumAmountForAnnualList} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  minimumAmountForAnnualList: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'MinimumAmountForAnnualList',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link CompanyInfo.blockStockNegativeQuantity} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  blockStockNegativeQuantity: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'BlockStockNegativeQuantity',
    BoYesNoEnum,
    true
  );
  /**
   * Representation of the {@link CompanyInfo.autoCreateCustomerEqCard} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  autoCreateCustomerEqCard: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'AutoCreateCustomerEqCard',
    BoYesNoEnum,
    true
  );
  /**
   * Representation of the {@link CompanyInfo.maxNumberOfDocumentsInPmt} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  maxNumberOfDocumentsInPmt: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'MaxNumberOfDocumentsInPmt',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link CompanyInfo.enableStockRelNoCostPrice} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  enableStockRelNoCostPrice: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'EnableStockRelNoCostPrice',
    BoYesNoEnum,
    true
  );
  /**
   * Representation of the {@link CompanyInfo.companyName} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  companyName: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('CompanyName', 'Edm.String', true);
  /**
   * Representation of the {@link CompanyInfo.groupLinesInVatCalculation} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  groupLinesInVatCalculation: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'GroupLinesInVATCalculation',
    BoYesNoEnum,
    true
  );
  /**
   * Representation of the {@link CompanyInfo.taxCalculationSystem} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxCalculationSystem: EnumField<
    EntityT,
    DeSerializersT,
    TaxCalcSysEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'TaxCalculationSystem',
    TaxCalcSysEnum,
    true
  );
  /**
   * Representation of the {@link CompanyInfo.enableTransactionNotification} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  enableTransactionNotification: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'EnableTransactionNotification',
    BoYesNoEnum,
    true
  );
  /**
   * Representation of the {@link CompanyInfo.enableConversionDifferentAcct} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  enableConversionDifferentAcct: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'EnableConversionDifferentAcct',
    BoYesNoEnum,
    true
  );
  /**
   * Representation of the {@link CompanyInfo.b1ITimeOut} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  b1ITimeOut: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('B1iTimeOut', 'Edm.Int32', true);
  /**
   * Representation of the {@link CompanyInfo.languageCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  languageCode: EnumField<EntityT, DeSerializersT, BoSuppLangs, true, false> =
    this._fieldBuilder.buildEnumField('LanguageCode', BoSuppLangs, true);
  /**
   * Representation of the {@link CompanyInfo.localization} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  localization: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Localization', 'Edm.String', true);

  /**
   * Creates an instance of CompanyInfoField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, CompanyInfo, fieldOptions);
  }
}

export namespace CompanyInfo {
  /**
   * Metadata information on all properties of the `CompanyInfo` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<CompanyInfo>[] = [
    {
      originalName: 'Version',
      name: 'version',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'EnableExpensesManagement',
      name: 'enableExpensesManagement',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'EnableAccountSegmentation',
      name: 'enableAccountSegmentation',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'EnableBillOfExchange',
      name: 'enableBillOfExchange',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'BaseDateForExchangeRate',
      name: 'baseDateForExchangeRate',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'BISRBankActKey',
      name: 'bisrBankActKey',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'BISRBankCountry',
      name: 'bisrBankCountry',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'BISRBankNo',
      name: 'bisrBankNo',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'BISRBankAccount',
      name: 'bisrBankAccount',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'BISRBranch',
      name: 'bisrBranch',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'MaxRecordsInChooseFromList',
      name: 'maxRecordsInChooseFromList',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'EnableCheckQuantityInRDR',
      name: 'enableCheckQuantityInRdr',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'SRIManagementSystem',
      name: 'sriManagementSystem',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'AutoSRICreationOnReceipt',
      name: 'autoSriCreationOnReceipt',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'IEPSPayer',
      name: 'iepsPayer',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'DefaultDaysForOrdCanc',
      name: 'defaultDaysForOrdCanc',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'PercentOfTotalAcquisition',
      name: 'percentOfTotalAcquisition',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'MinimumBaseAmountPerDoc',
      name: 'minimumBaseAmountPerDoc',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'EnableSharingSeries',
      name: 'enableSharingSeries',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'DataOwnershipIndication',
      name: 'dataOwnershipIndication',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'MinimumAmountForAppndixOP',
      name: 'minimumAmountForAppndixOp',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'DisplayTransactionsByDflt',
      name: 'displayTransactionsByDflt',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'DefaultStampTax',
      name: 'defaultStampTax',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'MinimumAmountForAnnualList',
      name: 'minimumAmountForAnnualList',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'BlockStockNegativeQuantity',
      name: 'blockStockNegativeQuantity',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'AutoCreateCustomerEqCard',
      name: 'autoCreateCustomerEqCard',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'MaxNumberOfDocumentsInPmt',
      name: 'maxNumberOfDocumentsInPmt',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'EnableStockRelNoCostPrice',
      name: 'enableStockRelNoCostPrice',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'CompanyName',
      name: 'companyName',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'GroupLinesInVATCalculation',
      name: 'groupLinesInVatCalculation',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'TaxCalculationSystem',
      name: 'taxCalculationSystem',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'EnableTransactionNotification',
      name: 'enableTransactionNotification',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'EnableConversionDifferentAcct',
      name: 'enableConversionDifferentAcct',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'B1iTimeOut',
      name: 'b1ITimeOut',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'LanguageCode',
      name: 'languageCode',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'Localization',
      name: 'localization',
      type: 'Edm.String',
      isCollection: false
    }
  ];
}
