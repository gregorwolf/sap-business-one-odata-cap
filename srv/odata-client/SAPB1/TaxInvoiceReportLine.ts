/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TaxInvoiceReportLineTypeEnum } from './TaxInvoiceReportLineTypeEnum';
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
 * TaxInvoiceReportLine
 */
export interface TaxInvoiceReportLine<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Document Type.
   * @nullable
   */
  documentType?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Document Entry.
   * @nullable
   */
  documentEntry?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Line Type.
   * @nullable
   */
  lineType?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Base Amount.
   * @nullable
   */
  baseAmount?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Tax Amount.
   * @nullable
   */
  taxAmount?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Item Quantity.
   * @nullable
   */
  itemQuantity?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Item No.
   * @nullable
   */
  itemNo?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Item Description.
   * @nullable
   */
  itemDescription?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Tax Code.
   * @nullable
   */
  taxCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Document Date.
   * @nullable
   */
  documentDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Item Price.
   * @nullable
   */
  itemPrice?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Line Number.
   * @nullable
   */
  lineNumber?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Currency.
   * @nullable
   */
  currency?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Business Place.
   * @nullable
   */
  businessPlace?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Tax Invoice Report Number.
   * @nullable
   */
  taxInvoiceReportNumber?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Bp Code.
   * @nullable
   */
  bpCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Bp Name.
   * @nullable
   */
  bpName?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Legacy.
   * @nullable
   */
  legacy?: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * TaxInvoiceReportLineField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class TaxInvoiceReportLineField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  TaxInvoiceReportLine,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link TaxInvoiceReportLine.documentType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  documentType: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('DocumentType', 'Edm.Int32', true);
  /**
   * Representation of the {@link TaxInvoiceReportLine.documentEntry} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  documentEntry: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('DocumentEntry', 'Edm.Int32', true);
  /**
   * Representation of the {@link TaxInvoiceReportLine.lineType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineType: EnumField<
    EntityT,
    DeSerializersT,
    TaxInvoiceReportLineTypeEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'LineType',
    TaxInvoiceReportLineTypeEnum,
    true
  );
  /**
   * Representation of the {@link TaxInvoiceReportLine.baseAmount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  baseAmount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('BaseAmount', 'Edm.Double', true);
  /**
   * Representation of the {@link TaxInvoiceReportLine.taxAmount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxAmount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('TaxAmount', 'Edm.Double', true);
  /**
   * Representation of the {@link TaxInvoiceReportLine.itemQuantity} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemQuantity: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ItemQuantity', 'Edm.Double', true);
  /**
   * Representation of the {@link TaxInvoiceReportLine.itemNo} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemNo: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ItemNo', 'Edm.String', true);
  /**
   * Representation of the {@link TaxInvoiceReportLine.itemDescription} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemDescription: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ItemDescription',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link TaxInvoiceReportLine.taxCode} property for query construction.
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
   * Representation of the {@link TaxInvoiceReportLine.documentDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  documentDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DocumentDate',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link TaxInvoiceReportLine.itemPrice} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemPrice: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ItemPrice', 'Edm.Double', true);
  /**
   * Representation of the {@link TaxInvoiceReportLine.lineNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('LineNumber', 'Edm.Int32', true);
  /**
   * Representation of the {@link TaxInvoiceReportLine.currency} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  currency: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Currency', 'Edm.String', true);
  /**
   * Representation of the {@link TaxInvoiceReportLine.businessPlace} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  businessPlace: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('BusinessPlace', 'Edm.Int32', true);
  /**
   * Representation of the {@link TaxInvoiceReportLine.taxInvoiceReportNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxInvoiceReportNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'TaxInvoiceReportNumber',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link TaxInvoiceReportLine.bpCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bpCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('BPCode', 'Edm.String', true);
  /**
   * Representation of the {@link TaxInvoiceReportLine.bpName} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bpName: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('BPName', 'Edm.String', true);
  /**
   * Representation of the {@link TaxInvoiceReportLine.legacy} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  legacy: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Legacy', 'Edm.String', true);

  /**
   * Creates an instance of TaxInvoiceReportLineField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(
      fieldName,
      fieldOf,
      deSerializers,
      TaxInvoiceReportLine,
      fieldOptions
    );
  }
}

export namespace TaxInvoiceReportLine {
  /**
   * Metadata information on all properties of the `TaxInvoiceReportLine` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<TaxInvoiceReportLine>[] = [
    {
      originalName: 'DocumentType',
      name: 'documentType',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'DocumentEntry',
      name: 'documentEntry',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'LineType',
      name: 'lineType',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'BaseAmount',
      name: 'baseAmount',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'TaxAmount',
      name: 'taxAmount',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'ItemQuantity',
      name: 'itemQuantity',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'ItemNo',
      name: 'itemNo',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ItemDescription',
      name: 'itemDescription',
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
      originalName: 'DocumentDate',
      name: 'documentDate',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'ItemPrice',
      name: 'itemPrice',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'LineNumber',
      name: 'lineNumber',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'Currency',
      name: 'currency',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'BusinessPlace',
      name: 'businessPlace',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'TaxInvoiceReportNumber',
      name: 'taxInvoiceReportNumber',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'BPCode',
      name: 'bpCode',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'BPName',
      name: 'bpName',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Legacy',
      name: 'legacy',
      type: 'Edm.String',
      isCollection: false
    }
  ];
}
