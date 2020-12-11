/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * PaymentRunExportLine
 */
export interface PaymentRunExportLine {
  /**
   * Row Number.
   * @nullable
   */
  rowNumber?: number;
  /**
   * Date Of Payment Run.
   * @nullable
   */
  dateOfPaymentRun?: Moment;
  /**
   * Payment Wizard Code.
   * @nullable
   */
  paymentWizardCode?: number;
  /**
   * Vendor Number.
   * @nullable
   */
  vendorNumber?: string;
  /**
   * Customer Number.
   * @nullable
   */
  customerNumber?: string;
  /**
   * Payment Means.
   * @nullable
   */
  paymentMeans?: string;
  /**
   * Payment Doc Num.
   * @nullable
   */
  paymentDocNum?: number;
  /**
   * Fiscal Year.
   * @nullable
   */
  fiscalYear?: Moment;
  /**
   * Vendor Ref Num.
   * @nullable
   */
  vendorRefNum?: string;
  /**
   * Document Object Type.
   * @nullable
   */
  documentObjectType?: string;
  /**
   * Document Posting Date.
   * @nullable
   */
  documentPostingDate?: Moment;
  /**
   * Document Tax Date.
   * @nullable
   */
  documentTaxDate?: Moment;
  /**
   * Bp Debit Payable Account.
   * @nullable
   */
  bpDebitPayableAccount?: string;
  /**
   * Document Currency.
   * @nullable
   */
  documentCurrency?: string;
  /**
   * Document Rate.
   * @nullable
   */
  documentRate?: number;
  /**
   * Document Total.
   * @nullable
   */
  documentTotal?: number;
  /**
   * Document Total Fc.
   * @nullable
   */
  documentTotalFc?: number;
  /**
   * Document Tax Amount.
   * @nullable
   */
  documentTaxAmount?: number;
  /**
   * Document Tax Amount Fc.
   * @nullable
   */
  documentTaxAmountFc?: number;
  /**
   * Document Remarks.
   * @nullable
   */
  documentRemarks?: string;
  /**
   * Document Payment Terms.
   * @nullable
   */
  documentPaymentTerms?: number;
  /**
   * Payment Doc Reference.
   * @nullable
   */
  paymentDocReference?: string;
  /**
   * Document Local Currency.
   * @nullable
   */
  documentLocalCurrency?: string;
  /**
   * Payment Terms Period.
   * @nullable
   */
  paymentTermsPeriod?: number;
  /**
   * Document Object Type Ex.
   * @nullable
   */
  documentObjectTypeEx?: string;
  /**
   * Document Number.
   * @nullable
   */
  documentNumber?: number;
  /**
   * Payment Number.
   * @nullable
   */
  paymentNumber?: number;
  /**
   * Payment Order Num.
   * @nullable
   */
  paymentOrderNum?: number;
  /**
   * Free Text 1.
   * @nullable
   */
  freeText1?: string;
  /**
   * Free Text 2.
   * @nullable
   */
  freeText2?: string;
  /**
   * Free Text 3.
   * @nullable
   */
  freeText3?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[PaymentRunExportLine.build]] instead.
 */
export function createPaymentRunExportLine(json: any): PaymentRunExportLine {
  return PaymentRunExportLine.build(json);
}

/**
 * PaymentRunExportLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class PaymentRunExportLineField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, PaymentRunExportLine> {
  /**
   * Representation of the [[PaymentRunExportLine.rowNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  rowNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('RowNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[PaymentRunExportLine.dateOfPaymentRun]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  dateOfPaymentRun: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('DateOfPaymentRun', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[PaymentRunExportLine.paymentWizardCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  paymentWizardCode: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('PaymentWizardCode', this, 'Edm.Int32');
  /**
   * Representation of the [[PaymentRunExportLine.vendorNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  vendorNumber: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('VendorNumber', this, 'Edm.String');
  /**
   * Representation of the [[PaymentRunExportLine.customerNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  customerNumber: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('CustomerNumber', this, 'Edm.String');
  /**
   * Representation of the [[PaymentRunExportLine.paymentMeans]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  paymentMeans: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('PaymentMeans', this, 'Edm.String');
  /**
   * Representation of the [[PaymentRunExportLine.paymentDocNum]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  paymentDocNum: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('PaymentDocNum', this, 'Edm.Int32');
  /**
   * Representation of the [[PaymentRunExportLine.fiscalYear]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  fiscalYear: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('FiscalYear', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[PaymentRunExportLine.vendorRefNum]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  vendorRefNum: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('VendorRefNum', this, 'Edm.String');
  /**
   * Representation of the [[PaymentRunExportLine.documentObjectType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  documentObjectType: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('DocumentObjectType', this, 'Edm.String');
  /**
   * Representation of the [[PaymentRunExportLine.documentPostingDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  documentPostingDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('DocumentPostingDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[PaymentRunExportLine.documentTaxDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  documentTaxDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('DocumentTaxDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[PaymentRunExportLine.bpDebitPayableAccount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bpDebitPayableAccount: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('BPDebitPayableAccount', this, 'Edm.String');
  /**
   * Representation of the [[PaymentRunExportLine.documentCurrency]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  documentCurrency: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('DocumentCurrency', this, 'Edm.String');
  /**
   * Representation of the [[PaymentRunExportLine.documentRate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  documentRate: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DocumentRate', this, 'Edm.Double');
  /**
   * Representation of the [[PaymentRunExportLine.documentTotal]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  documentTotal: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DocumentTotal', this, 'Edm.Double');
  /**
   * Representation of the [[PaymentRunExportLine.documentTotalFc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  documentTotalFc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DocumentTotalFC', this, 'Edm.Double');
  /**
   * Representation of the [[PaymentRunExportLine.documentTaxAmount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  documentTaxAmount: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DocumentTaxAmount', this, 'Edm.Double');
  /**
   * Representation of the [[PaymentRunExportLine.documentTaxAmountFc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  documentTaxAmountFc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DocumentTaxAmountFC', this, 'Edm.Double');
  /**
   * Representation of the [[PaymentRunExportLine.documentRemarks]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  documentRemarks: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('DocumentRemarks', this, 'Edm.String');
  /**
   * Representation of the [[PaymentRunExportLine.documentPaymentTerms]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  documentPaymentTerms: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DocumentPaymentTerms', this, 'Edm.Int32');
  /**
   * Representation of the [[PaymentRunExportLine.paymentDocReference]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  paymentDocReference: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('PaymentDocReference', this, 'Edm.String');
  /**
   * Representation of the [[PaymentRunExportLine.documentLocalCurrency]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  documentLocalCurrency: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('DocumentLocalCurrency', this, 'Edm.String');
  /**
   * Representation of the [[PaymentRunExportLine.paymentTermsPeriod]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  paymentTermsPeriod: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('PaymentTermsPeriod', this, 'Edm.Int32');
  /**
   * Representation of the [[PaymentRunExportLine.documentObjectTypeEx]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  documentObjectTypeEx: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('DocumentObjectTypeEx', this, 'Edm.String');
  /**
   * Representation of the [[PaymentRunExportLine.documentNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  documentNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DocumentNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[PaymentRunExportLine.paymentNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  paymentNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('PaymentNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[PaymentRunExportLine.paymentOrderNum]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  paymentOrderNum: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('PaymentOrderNum', this, 'Edm.Int32');
  /**
   * Representation of the [[PaymentRunExportLine.freeText1]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  freeText1: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('FreeText1', this, 'Edm.String');
  /**
   * Representation of the [[PaymentRunExportLine.freeText2]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  freeText2: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('FreeText2', this, 'Edm.String');
  /**
   * Representation of the [[PaymentRunExportLine.freeText3]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  freeText3: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('FreeText3', this, 'Edm.String');

  /**
   * Creates an instance of PaymentRunExportLineField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, PaymentRunExportLine);
  }
}

export namespace PaymentRunExportLine {
  /**
   * Metadata information on all properties of the `PaymentRunExportLine` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<PaymentRunExportLine>[] = [{
    originalName: 'RowNumber',
    name: 'rowNumber',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'DateOfPaymentRun',
    name: 'dateOfPaymentRun',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'PaymentWizardCode',
    name: 'paymentWizardCode',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'VendorNumber',
    name: 'vendorNumber',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'CustomerNumber',
    name: 'customerNumber',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'PaymentMeans',
    name: 'paymentMeans',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'PaymentDocNum',
    name: 'paymentDocNum',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'FiscalYear',
    name: 'fiscalYear',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'VendorRefNum',
    name: 'vendorRefNum',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'DocumentObjectType',
    name: 'documentObjectType',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'DocumentPostingDate',
    name: 'documentPostingDate',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'DocumentTaxDate',
    name: 'documentTaxDate',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'BPDebitPayableAccount',
    name: 'bpDebitPayableAccount',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'DocumentCurrency',
    name: 'documentCurrency',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'DocumentRate',
    name: 'documentRate',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'DocumentTotal',
    name: 'documentTotal',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'DocumentTotalFC',
    name: 'documentTotalFc',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'DocumentTaxAmount',
    name: 'documentTaxAmount',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'DocumentTaxAmountFC',
    name: 'documentTaxAmountFc',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'DocumentRemarks',
    name: 'documentRemarks',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'DocumentPaymentTerms',
    name: 'documentPaymentTerms',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'PaymentDocReference',
    name: 'paymentDocReference',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'DocumentLocalCurrency',
    name: 'documentLocalCurrency',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'PaymentTermsPeriod',
    name: 'paymentTermsPeriod',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'DocumentObjectTypeEx',
    name: 'documentObjectTypeEx',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'DocumentNumber',
    name: 'documentNumber',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'PaymentNumber',
    name: 'paymentNumber',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'PaymentOrderNum',
    name: 'paymentOrderNum',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'FreeText1',
    name: 'freeText1',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'FreeText2',
    name: 'freeText2',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'FreeText3',
    name: 'freeText3',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): PaymentRunExportLine {
    return deserializeComplexTypeV4(json, PaymentRunExportLine);
  }
}
