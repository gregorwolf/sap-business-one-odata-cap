/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
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
 * DocumentChangeMenuName
 */
export interface DocumentChangeMenuName<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Document.
   * @nullable
   */
  document?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Document Sub Type.
   * @nullable
   */
  documentSubType?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Changed Menu Name.
   * @nullable
   */
  changedMenuName?: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * DocumentChangeMenuNameField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class DocumentChangeMenuNameField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  DocumentChangeMenuName,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link DocumentChangeMenuName.document} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  document: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Document', 'Edm.String', true);
  /**
   * Representation of the {@link DocumentChangeMenuName.documentSubType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  documentSubType: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DocumentSubType',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link DocumentChangeMenuName.changedMenuName} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  changedMenuName: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ChangedMenuName',
    'Edm.String',
    true
  );

  /**
   * Creates an instance of DocumentChangeMenuNameField.
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
      DocumentChangeMenuName,
      fieldOptions
    );
  }
}

export namespace DocumentChangeMenuName {
  /**
   * Metadata information on all properties of the `DocumentChangeMenuName` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<DocumentChangeMenuName>[] = [
    {
      originalName: 'Document',
      name: 'document',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'DocumentSubType',
      name: 'documentSubType',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ChangedMenuName',
      name: 'changedMenuName',
      type: 'Edm.String',
      isCollection: false
    }
  ];
}
