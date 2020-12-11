/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { TaxInvoiceReportLineTypeEnum } from './TaxInvoiceReportLineTypeEnum';
import { ComplexTypeDatePropertyField, ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

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
   * Line Type.
   * @nullable
   */
  lineType?: TaxInvoiceReportLineTypeEnum;
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
export class TaxInvoiceReportLineField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, TaxInvoiceReportLine> {
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
   * Representation of the [[TaxInvoiceReportLine.lineType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineType: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('LineType', this);
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

  /**
   * Creates an instance of TaxInvoiceReportLineField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, TaxInvoiceReportLine);
  }
}

export namespace TaxInvoiceReportLine {
  /**
   * Metadata information on all properties of the `TaxInvoiceReportLine` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<TaxInvoiceReportLine>[] = [{
    originalName: 'DocumentType',
    name: 'documentType',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'DocumentEntry',
    name: 'documentEntry',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'LineType',
    name: 'lineType',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'BaseAmount',
    name: 'baseAmount',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'TaxAmount',
    name: 'taxAmount',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'ItemQuantity',
    name: 'itemQuantity',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'ItemNo',
    name: 'itemNo',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ItemDescription',
    name: 'itemDescription',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'TaxCode',
    name: 'taxCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'DocumentDate',
    name: 'documentDate',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'ItemPrice',
    name: 'itemPrice',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'LineNumber',
    name: 'lineNumber',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Currency',
    name: 'currency',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'BusinessPlace',
    name: 'businessPlace',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'TaxInvoiceReportNumber',
    name: 'taxInvoiceReportNumber',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'BPCode',
    name: 'bpCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'BPName',
    name: 'bpName',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Legacy',
    name: 'legacy',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): TaxInvoiceReportLine {
    return deserializeComplexTypeV4(json, TaxInvoiceReportLine);
  }
}
