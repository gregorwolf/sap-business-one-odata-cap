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
 * PmStageAttachement
 */
export interface PmStageAttachement<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Abs Entry.
   * @nullable
   */
  absEntry?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Line Id.
   * @nullable
   */
  lineId?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Source Path.
   * @nullable
   */
  sourcePath?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * File Name.
   * @nullable
   */
  fileName?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * File Extension.
   * @nullable
   */
  fileExtension?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Attachement Date.
   * @nullable
   */
  attachementDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
}

/**
 * PmStageAttachementField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class PmStageAttachementField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  PmStageAttachement,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link PmStageAttachement.absEntry} property for query construction.
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
   * Representation of the {@link PmStageAttachement.lineId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('LineID', 'Edm.Int32', true);
  /**
   * Representation of the {@link PmStageAttachement.sourcePath} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sourcePath: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('SourcePath', 'Edm.String', true);
  /**
   * Representation of the {@link PmStageAttachement.fileName} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  fileName: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('FileName', 'Edm.String', true);
  /**
   * Representation of the {@link PmStageAttachement.fileExtension} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  fileExtension: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('FileExtension', 'Edm.String', true);
  /**
   * Representation of the {@link PmStageAttachement.attachementDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  attachementDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'AttachementDate',
    'Edm.DateTimeOffset',
    true
  );

  /**
   * Creates an instance of PmStageAttachementField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, PmStageAttachement, fieldOptions);
  }
}

export namespace PmStageAttachement {
  /**
   * Metadata information on all properties of the `PmStageAttachement` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<PmStageAttachement>[] = [
    {
      originalName: 'AbsEntry',
      name: 'absEntry',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'LineID',
      name: 'lineId',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'SourcePath',
      name: 'sourcePath',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'FileName',
      name: 'fileName',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'FileExtension',
      name: 'fileExtension',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'AttachementDate',
      name: 'attachementDate',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    }
  ];
}