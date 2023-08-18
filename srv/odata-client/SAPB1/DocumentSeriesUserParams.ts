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
 * DocumentSeriesUserParams
 */
export interface DocumentSeriesUserParams<
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
   * Series.
   * @nullable
   */
  series?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * User.
   * @nullable
   */
  user?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
}

/**
 * DocumentSeriesUserParamsField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class DocumentSeriesUserParamsField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  DocumentSeriesUserParams,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link DocumentSeriesUserParams.document} property for query construction.
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
   * Representation of the {@link DocumentSeriesUserParams.documentSubType} property for query construction.
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
   * Representation of the {@link DocumentSeriesUserParams.series} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  series: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Series', 'Edm.Int32', true);
  /**
   * Representation of the {@link DocumentSeriesUserParams.user} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  user: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('User', 'Edm.Int32', true);

  /**
   * Creates an instance of DocumentSeriesUserParamsField.
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
      DocumentSeriesUserParams,
      fieldOptions
    );
  }
}

export namespace DocumentSeriesUserParams {
  /**
   * Metadata information on all properties of the `DocumentSeriesUserParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<DocumentSeriesUserParams>[] =
    [
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
        originalName: 'Series',
        name: 'series',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'User',
        name: 'user',
        type: 'Edm.Int32',
        isCollection: false
      }
    ];
}
