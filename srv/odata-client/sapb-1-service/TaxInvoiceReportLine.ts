/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * TaxInvoiceReportLine
 */
export interface TaxInvoiceReportLine {
  /**
   * Document Type.
   * @nullable
   */
  documentType?: number;
  /**
   * Document Entry.
   * @nullable
   */
  documentEntry?: number;
  /**
   * Base Amount.
   * @nullable
   */
  baseAmount?: number;
  /**
   * Tax Amount.
   * @nullable
   */
  taxAmount?: number;
  /**
   * Item Quantity.
   * @nullable
   */
  itemQuantity?: number;
  /**
   * Item No.
   * @nullable
   */
  itemNo?: string;
  /**
   * Item Description.
   * @nullable
   */
  itemDescription?: string;
  /**
   * Tax Code.
   * @nullable
   */
  taxCode?: string;
  /**
   * Document Date.
   * @nullable
   */
  documentDate?: Moment;
  /**
   * Item Price.
   * @nullable
   */
  itemPrice?: number;
  /**
   * Line Number.
   * @nullable
   */
  lineNumber?: number;
  /**
   * Currency.
   * @nullable
   */
  currency?: string;
  /**
   * Business Place.
   * @nullable
   */
  businessPlace?: number;
  /**
   * Tax Invoice Report Number.
   * @nullable
   */
  taxInvoiceReportNumber?: string;
  /**
   * Bp Code.
   * @nullable
   */
  bpCode?: string;
  /**
   * Bp Name.
   * @nullable
   */
  bpName?: string;
  /**
   * Legacy.
   * @nullable
   */
  legacy?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[TaxInvoiceReportLine.build]] instead.
 */
export function createTaxInvoiceReportLine(json: any): TaxInvoiceReportLine {
  return TaxInvoiceReportLine.build(json);
}

/**
 * TaxInvoiceReportLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class TaxInvoiceReportLineField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[TaxInvoiceReportLine.documentType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  documentType: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DocumentType', this, 'Edm.Int32');
  /**
   * Representation of the [[TaxInvoiceReportLine.documentEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  documentEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DocumentEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[TaxInvoiceReportLine.baseAmount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  baseAmount: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('BaseAmount', this, 'Edm.Double');
  /**
   * Representation of the [[TaxInvoiceReportLine.taxAmount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxAmount: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TaxAmount', this, 'Edm.Double');
  /**
   * Representation of the [[TaxInvoiceReportLine.itemQuantity]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemQuantity: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ItemQuantity', this, 'Edm.Double');
  /**
   * Representation of the [[TaxInvoiceReportLine.itemNo]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemNo: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ItemNo', this, 'Edm.String');
  /**
   * Representation of the [[TaxInvoiceReportLine.itemDescription]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemDescription: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ItemDescription', this, 'Edm.String');
  /**
   * Representation of the [[TaxInvoiceReportLine.taxCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('TaxCode', this, 'Edm.String');
  /**
   * Representation of the [[TaxInvoiceReportLine.documentDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  documentDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('DocumentDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[TaxInvoiceReportLine.itemPrice]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemPrice: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ItemPrice', this, 'Edm.Double');
  /**
   * Representation of the [[TaxInvoiceReportLine.lineNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LineNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[TaxInvoiceReportLine.currency]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  currency: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Currency', this, 'Edm.String');
  /**
   * Representation of the [[TaxInvoiceReportLine.businessPlace]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  businessPlace: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('BusinessPlace', this, 'Edm.Int32');
  /**
   * Representation of the [[TaxInvoiceReportLine.taxInvoiceReportNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxInvoiceReportNumber: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('TaxInvoiceReportNumber', this, 'Edm.String');
  /**
   * Representation of the [[TaxInvoiceReportLine.bpCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bpCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('BPCode', this, 'Edm.String');
  /**
   * Representation of the [[TaxInvoiceReportLine.bpName]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bpName: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('BPName', this, 'Edm.String');
  /**
   * Representation of the [[TaxInvoiceReportLine.legacy]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  legacy: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Legacy', this, 'Edm.String');
}

export namespace TaxInvoiceReportLine {
  export function build(json: { [keys: string]: FieldType }): TaxInvoiceReportLine {
    return createComplexType(json, {
      DocumentType: (documentType: number) => ({ documentType: edmToTs(documentType, 'Edm.Int32') }),
      DocumentEntry: (documentEntry: number) => ({ documentEntry: edmToTs(documentEntry, 'Edm.Int32') }),
      BaseAmount: (baseAmount: number) => ({ baseAmount: edmToTs(baseAmount, 'Edm.Double') }),
      TaxAmount: (taxAmount: number) => ({ taxAmount: edmToTs(taxAmount, 'Edm.Double') }),
      ItemQuantity: (itemQuantity: number) => ({ itemQuantity: edmToTs(itemQuantity, 'Edm.Double') }),
      ItemNo: (itemNo: string) => ({ itemNo: edmToTs(itemNo, 'Edm.String') }),
      ItemDescription: (itemDescription: string) => ({ itemDescription: edmToTs(itemDescription, 'Edm.String') }),
      TaxCode: (taxCode: string) => ({ taxCode: edmToTs(taxCode, 'Edm.String') }),
      DocumentDate: (documentDate: Moment) => ({ documentDate: edmToTs(documentDate, 'Edm.DateTimeOffset') }),
      ItemPrice: (itemPrice: number) => ({ itemPrice: edmToTs(itemPrice, 'Edm.Double') }),
      LineNumber: (lineNumber: number) => ({ lineNumber: edmToTs(lineNumber, 'Edm.Int32') }),
      Currency: (currency: string) => ({ currency: edmToTs(currency, 'Edm.String') }),
      BusinessPlace: (businessPlace: number) => ({ businessPlace: edmToTs(businessPlace, 'Edm.Int32') }),
      TaxInvoiceReportNumber: (taxInvoiceReportNumber: string) => ({ taxInvoiceReportNumber: edmToTs(taxInvoiceReportNumber, 'Edm.String') }),
      BPCode: (bpCode: string) => ({ bpCode: edmToTs(bpCode, 'Edm.String') }),
      BPName: (bpName: string) => ({ bpName: edmToTs(bpName, 'Edm.String') }),
      Legacy: (legacy: string) => ({ legacy: edmToTs(legacy, 'Edm.String') })
    });
  }
}
