/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TaxReportFilterDocumentType } from './TaxReportFilterDocumentType';
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
 * TaxReportDocument
 */
export interface TaxReportDocument<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Document Type.
   * @nullable
   */
  documentType?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * From Number.
   * @nullable
   */
  fromNumber?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * To Number.
   * @nullable
   */
  toNumber?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
}

/**
 * TaxReportDocumentField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class TaxReportDocumentField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  TaxReportDocument,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link TaxReportDocument.documentType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  documentType: EnumField<
    EntityT,
    DeSerializersT,
    TaxReportFilterDocumentType,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'DocumentType',
    TaxReportFilterDocumentType,
    true
  );
  /**
   * Representation of the {@link TaxReportDocument.fromNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  fromNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('FromNumber', 'Edm.Int32', true);
  /**
   * Representation of the {@link TaxReportDocument.toNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  toNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ToNumber', 'Edm.Int32', true);

  /**
   * Creates an instance of TaxReportDocumentField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, TaxReportDocument, fieldOptions);
  }
}

export namespace TaxReportDocument {
  /**
   * Metadata information on all properties of the `TaxReportDocument` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<TaxReportDocument>[] = [
    {
      originalName: 'DocumentType',
      name: 'documentType',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'FromNumber',
      name: 'fromNumber',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'ToNumber',
      name: 'toNumber',
      type: 'Edm.Int32',
      isCollection: false
    }
  ];
}
