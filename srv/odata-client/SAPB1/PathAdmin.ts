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
 * PathAdmin
 */
export interface PathAdmin<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Word Template Folder Path.
   * @nullable
   */
  wordTemplateFolderPath?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Pictures Folder Path.
   * @nullable
   */
  picturesFolderPath?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Attachments Folder Path.
   * @nullable
   */
  attachmentsFolderPath?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Extensions Folder Path.
   * @nullable
   */
  extensionsFolderPath?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Print Id.
   * @nullable
   */
  printId?: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * PathAdminField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class PathAdminField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  PathAdmin,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link PathAdmin.wordTemplateFolderPath} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  wordTemplateFolderPath: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'WordTemplateFolderPath',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link PathAdmin.picturesFolderPath} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  picturesFolderPath: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'PicturesFolderPath',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link PathAdmin.attachmentsFolderPath} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  attachmentsFolderPath: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'AttachmentsFolderPath',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link PathAdmin.extensionsFolderPath} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  extensionsFolderPath: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ExtensionsFolderPath',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link PathAdmin.printId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  printId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('PrintId', 'Edm.String', true);

  /**
   * Creates an instance of PathAdminField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, PathAdmin, fieldOptions);
  }
}

export namespace PathAdmin {
  /**
   * Metadata information on all properties of the `PathAdmin` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<PathAdmin>[] = [
    {
      originalName: 'WordTemplateFolderPath',
      name: 'wordTemplateFolderPath',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'PicturesFolderPath',
      name: 'picturesFolderPath',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'AttachmentsFolderPath',
      name: 'attachmentsFolderPath',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ExtensionsFolderPath',
      name: 'extensionsFolderPath',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'PrintId',
      name: 'printId',
      type: 'Edm.String',
      isCollection: false
    }
  ];
}
