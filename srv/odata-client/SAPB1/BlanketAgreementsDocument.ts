/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BlanketAgreementDocTypeEnum } from './BlanketAgreementDocTypeEnum';
import { BoStatus } from './BoStatus';
import { BaDocumentStatus } from './BaDocumentStatus';
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
 * BlanketAgreementsDocument
 */
export interface BlanketAgreementsDocument<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Agreement Row Number.
   * @nullable
   */
  agreementRowNumber?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Document Type.
   * @nullable
   */
  documentType?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Document No.
   * @nullable
   */
  documentNo?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Document Row Number.
   * @nullable
   */
  documentRowNumber?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Document Date.
   * @nullable
   */
  documentDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
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
   * Unit Price.
   * @nullable
   */
  unitPrice?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Quantity.
   * @nullable
   */
  quantity?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Discount.
   * @nullable
   */
  discount?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Uo M.
   * @nullable
   */
  uoM?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Row Status.
   * @nullable
   */
  rowStatus?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Uo M Code.
   * @nullable
   */
  uoMCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Units Of Measurement.
   * @nullable
   */
  unitsOfMeasurement?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Doc Status.
   * @nullable
   */
  docStatus?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
}

/**
 * BlanketAgreementsDocumentField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class BlanketAgreementsDocumentField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  BlanketAgreementsDocument,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link BlanketAgreementsDocument.agreementRowNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  agreementRowNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'AgreementRowNumber',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link BlanketAgreementsDocument.documentType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  documentType: EnumField<
    EntityT,
    DeSerializersT,
    BlanketAgreementDocTypeEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'DocumentType',
    BlanketAgreementDocTypeEnum,
    true
  );
  /**
   * Representation of the {@link BlanketAgreementsDocument.documentNo} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  documentNo: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('DocumentNo', 'Edm.Int32', true);
  /**
   * Representation of the {@link BlanketAgreementsDocument.documentRowNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  documentRowNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DocumentRowNumber',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link BlanketAgreementsDocument.documentDate} property for query construction.
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
   * Representation of the {@link BlanketAgreementsDocument.itemNo} property for query construction.
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
   * Representation of the {@link BlanketAgreementsDocument.itemDescription} property for query construction.
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
   * Representation of the {@link BlanketAgreementsDocument.unitPrice} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  unitPrice: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('UnitPrice', 'Edm.Double', true);
  /**
   * Representation of the {@link BlanketAgreementsDocument.quantity} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  quantity: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Quantity', 'Edm.Double', true);
  /**
   * Representation of the {@link BlanketAgreementsDocument.discount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  discount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Discount', 'Edm.Double', true);
  /**
   * Representation of the {@link BlanketAgreementsDocument.uoM} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uoM: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('UoM', 'Edm.String', true);
  /**
   * Representation of the {@link BlanketAgreementsDocument.rowStatus} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  rowStatus: EnumField<EntityT, DeSerializersT, BoStatus, true, false> =
    this._fieldBuilder.buildEnumField('RowStatus', BoStatus, true);
  /**
   * Representation of the {@link BlanketAgreementsDocument.uoMCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uoMCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('UoMCode', 'Edm.String', true);
  /**
   * Representation of the {@link BlanketAgreementsDocument.unitsOfMeasurement} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  unitsOfMeasurement: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'UnitsOfMeasurement',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link BlanketAgreementsDocument.docStatus} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docStatus: EnumField<EntityT, DeSerializersT, BaDocumentStatus, true, false> =
    this._fieldBuilder.buildEnumField('DocStatus', BaDocumentStatus, true);

  /**
   * Creates an instance of BlanketAgreementsDocumentField.
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
      BlanketAgreementsDocument,
      fieldOptions
    );
  }
}

export namespace BlanketAgreementsDocument {
  /**
   * Metadata information on all properties of the `BlanketAgreementsDocument` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<BlanketAgreementsDocument>[] =
    [
      {
        originalName: 'AgreementRowNumber',
        name: 'agreementRowNumber',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'DocumentType',
        name: 'documentType',
        type: 'Edm.Enum',
        isCollection: false
      },
      {
        originalName: 'DocumentNo',
        name: 'documentNo',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'DocumentRowNumber',
        name: 'documentRowNumber',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'DocumentDate',
        name: 'documentDate',
        type: 'Edm.DateTimeOffset',
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
        originalName: 'UnitPrice',
        name: 'unitPrice',
        type: 'Edm.Double',
        isCollection: false
      },
      {
        originalName: 'Quantity',
        name: 'quantity',
        type: 'Edm.Double',
        isCollection: false
      },
      {
        originalName: 'Discount',
        name: 'discount',
        type: 'Edm.Double',
        isCollection: false
      },
      {
        originalName: 'UoM',
        name: 'uoM',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'RowStatus',
        name: 'rowStatus',
        type: 'Edm.Enum',
        isCollection: false
      },
      {
        originalName: 'UoMCode',
        name: 'uoMCode',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'UnitsOfMeasurement',
        name: 'unitsOfMeasurement',
        type: 'Edm.Double',
        isCollection: false
      },
      {
        originalName: 'DocStatus',
        name: 'docStatus',
        type: 'Edm.Enum',
        isCollection: false
      }
    ];
}
