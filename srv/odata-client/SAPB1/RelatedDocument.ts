/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RelatedDocumentTypeEnum } from './RelatedDocumentTypeEnum';
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
 * RelatedDocument
 */
export interface RelatedDocument<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Doc Type.
   * @nullable
   */
  docType?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Abs Entry.
   * @nullable
   */
  absEntry?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Uuid.
   * @nullable
   */
  uuid?: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * RelatedDocumentField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class RelatedDocumentField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  RelatedDocument,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link RelatedDocument.docType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docType: EnumField<
    EntityT,
    DeSerializersT,
    RelatedDocumentTypeEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'DocType',
    RelatedDocumentTypeEnum,
    true
  );
  /**
   * Representation of the {@link RelatedDocument.absEntry} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  absEntry: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('AbsEntry', 'Edm.Int32', true);
  /**
   * Representation of the {@link RelatedDocument.uuid} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uuid: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('UUID', 'Edm.String', true);

  /**
   * Creates an instance of RelatedDocumentField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, RelatedDocument, fieldOptions);
  }
}

export namespace RelatedDocument {
  /**
   * Metadata information on all properties of the `RelatedDocument` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<RelatedDocument>[] = [
    {
      originalName: 'DocType',
      name: 'docType',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'AbsEntry',
      name: 'absEntry',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'UUID',
      name: 'uuid',
      type: 'Edm.String',
      isCollection: false
    }
  ];
}
