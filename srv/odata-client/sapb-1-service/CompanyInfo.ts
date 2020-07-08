/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

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
   * Minimum Amount For Appndix Op.
   * @nullable
   */
  minimumAmountForAppndixOp?: number;
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
   * Max Number Of Documents In Pmt.
   * @nullable
   */
  maxNumberOfDocumentsInPmt?: number;
  /**
   * Company Name.
   * @nullable
   */
  companyName?: string;
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
export class CompanyInfoField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[CompanyInfo.version]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  version: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Version', this, 'Edm.Int32');
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
   * Representation of the [[CompanyInfo.minimumAmountForAppndixOp]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  minimumAmountForAppndixOp: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('MinimumAmountForAppndixOP', this, 'Edm.Double');
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
   * Representation of the [[CompanyInfo.maxNumberOfDocumentsInPmt]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  maxNumberOfDocumentsInPmt: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('MaxNumberOfDocumentsInPmt', this, 'Edm.Int32');
  /**
   * Representation of the [[CompanyInfo.companyName]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  companyName: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('CompanyName', this, 'Edm.String');
  /**
   * Representation of the [[CompanyInfo.b1ITimeOut]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  b1ITimeOut: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('B1iTimeOut', this, 'Edm.Int32');
}

export namespace CompanyInfo {
  export function build(json: { [keys: string]: FieldType }): CompanyInfo {
    return createComplexType(json, {
      Version: (version: number) => ({ version: edmToTs(version, 'Edm.Int32') }),
      BISRBankActKey: (bisrBankActKey: number) => ({ bisrBankActKey: edmToTs(bisrBankActKey, 'Edm.Int32') }),
      BISRBankCountry: (bisrBankCountry: string) => ({ bisrBankCountry: edmToTs(bisrBankCountry, 'Edm.String') }),
      BISRBankNo: (bisrBankNo: string) => ({ bisrBankNo: edmToTs(bisrBankNo, 'Edm.String') }),
      BISRBankAccount: (bisrBankAccount: string) => ({ bisrBankAccount: edmToTs(bisrBankAccount, 'Edm.String') }),
      BISRBranch: (bisrBranch: string) => ({ bisrBranch: edmToTs(bisrBranch, 'Edm.String') }),
      MaxRecordsInChooseFromList: (maxRecordsInChooseFromList: number) => ({ maxRecordsInChooseFromList: edmToTs(maxRecordsInChooseFromList, 'Edm.Int32') }),
      DefaultDaysForOrdCanc: (defaultDaysForOrdCanc: number) => ({ defaultDaysForOrdCanc: edmToTs(defaultDaysForOrdCanc, 'Edm.Int32') }),
      PercentOfTotalAcquisition: (percentOfTotalAcquisition: number) => ({ percentOfTotalAcquisition: edmToTs(percentOfTotalAcquisition, 'Edm.Double') }),
      MinimumBaseAmountPerDoc: (minimumBaseAmountPerDoc: number) => ({ minimumBaseAmountPerDoc: edmToTs(minimumBaseAmountPerDoc, 'Edm.Double') }),
      MinimumAmountForAppndixOP: (minimumAmountForAppndixOp: number) => ({ minimumAmountForAppndixOp: edmToTs(minimumAmountForAppndixOp, 'Edm.Double') }),
      DefaultStampTax: (defaultStampTax: string) => ({ defaultStampTax: edmToTs(defaultStampTax, 'Edm.String') }),
      MinimumAmountForAnnualList: (minimumAmountForAnnualList: number) => ({ minimumAmountForAnnualList: edmToTs(minimumAmountForAnnualList, 'Edm.Double') }),
      MaxNumberOfDocumentsInPmt: (maxNumberOfDocumentsInPmt: number) => ({ maxNumberOfDocumentsInPmt: edmToTs(maxNumberOfDocumentsInPmt, 'Edm.Int32') }),
      CompanyName: (companyName: string) => ({ companyName: edmToTs(companyName, 'Edm.String') }),
      B1iTimeOut: (b1ITimeOut: number) => ({ b1ITimeOut: edmToTs(b1ITimeOut, 'Edm.Int32') })
    });
  }
}
