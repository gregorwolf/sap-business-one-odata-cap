/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

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
export class PaymentRunExportLineField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
}

export namespace PaymentRunExportLine {
  export function build(json: { [keys: string]: FieldType }): PaymentRunExportLine {
    return createComplexType(json, {
      RowNumber: (rowNumber: number) => ({ rowNumber: edmToTs(rowNumber, 'Edm.Int32') }),
      DateOfPaymentRun: (dateOfPaymentRun: Moment) => ({ dateOfPaymentRun: edmToTs(dateOfPaymentRun, 'Edm.DateTimeOffset') }),
      PaymentWizardCode: (paymentWizardCode: number) => ({ paymentWizardCode: edmToTs(paymentWizardCode, 'Edm.Int32') }),
      VendorNumber: (vendorNumber: string) => ({ vendorNumber: edmToTs(vendorNumber, 'Edm.String') }),
      CustomerNumber: (customerNumber: string) => ({ customerNumber: edmToTs(customerNumber, 'Edm.String') }),
      PaymentMeans: (paymentMeans: string) => ({ paymentMeans: edmToTs(paymentMeans, 'Edm.String') }),
      PaymentDocNum: (paymentDocNum: number) => ({ paymentDocNum: edmToTs(paymentDocNum, 'Edm.Int32') }),
      FiscalYear: (fiscalYear: Moment) => ({ fiscalYear: edmToTs(fiscalYear, 'Edm.DateTimeOffset') }),
      VendorRefNum: (vendorRefNum: string) => ({ vendorRefNum: edmToTs(vendorRefNum, 'Edm.String') }),
      DocumentObjectType: (documentObjectType: string) => ({ documentObjectType: edmToTs(documentObjectType, 'Edm.String') }),
      DocumentPostingDate: (documentPostingDate: Moment) => ({ documentPostingDate: edmToTs(documentPostingDate, 'Edm.DateTimeOffset') }),
      DocumentTaxDate: (documentTaxDate: Moment) => ({ documentTaxDate: edmToTs(documentTaxDate, 'Edm.DateTimeOffset') }),
      BPDebitPayableAccount: (bpDebitPayableAccount: string) => ({ bpDebitPayableAccount: edmToTs(bpDebitPayableAccount, 'Edm.String') }),
      DocumentCurrency: (documentCurrency: string) => ({ documentCurrency: edmToTs(documentCurrency, 'Edm.String') }),
      DocumentRate: (documentRate: number) => ({ documentRate: edmToTs(documentRate, 'Edm.Double') }),
      DocumentTotal: (documentTotal: number) => ({ documentTotal: edmToTs(documentTotal, 'Edm.Double') }),
      DocumentTotalFC: (documentTotalFc: number) => ({ documentTotalFc: edmToTs(documentTotalFc, 'Edm.Double') }),
      DocumentTaxAmount: (documentTaxAmount: number) => ({ documentTaxAmount: edmToTs(documentTaxAmount, 'Edm.Double') }),
      DocumentTaxAmountFC: (documentTaxAmountFc: number) => ({ documentTaxAmountFc: edmToTs(documentTaxAmountFc, 'Edm.Double') }),
      DocumentRemarks: (documentRemarks: string) => ({ documentRemarks: edmToTs(documentRemarks, 'Edm.String') }),
      DocumentPaymentTerms: (documentPaymentTerms: number) => ({ documentPaymentTerms: edmToTs(documentPaymentTerms, 'Edm.Int32') }),
      PaymentDocReference: (paymentDocReference: string) => ({ paymentDocReference: edmToTs(paymentDocReference, 'Edm.String') }),
      DocumentLocalCurrency: (documentLocalCurrency: string) => ({ documentLocalCurrency: edmToTs(documentLocalCurrency, 'Edm.String') }),
      PaymentTermsPeriod: (paymentTermsPeriod: number) => ({ paymentTermsPeriod: edmToTs(paymentTermsPeriod, 'Edm.Int32') }),
      DocumentObjectTypeEx: (documentObjectTypeEx: string) => ({ documentObjectTypeEx: edmToTs(documentObjectTypeEx, 'Edm.String') }),
      DocumentNumber: (documentNumber: number) => ({ documentNumber: edmToTs(documentNumber, 'Edm.Int32') }),
      PaymentNumber: (paymentNumber: number) => ({ paymentNumber: edmToTs(paymentNumber, 'Edm.Int32') }),
      PaymentOrderNum: (paymentOrderNum: number) => ({ paymentOrderNum: edmToTs(paymentOrderNum, 'Edm.Int32') }),
      FreeText1: (freeText1: string) => ({ freeText1: edmToTs(freeText1, 'Edm.String') }),
      FreeText2: (freeText2: string) => ({ freeText2: edmToTs(freeText2, 'Edm.String') }),
      FreeText3: (freeText3: string) => ({ freeText3: edmToTs(freeText3, 'Edm.String') })
    });
  }
}
