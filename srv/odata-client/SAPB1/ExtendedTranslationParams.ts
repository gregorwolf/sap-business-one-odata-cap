/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TranslationCategoryEnum } from './TranslationCategoryEnum';
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
 * ExtendedTranslationParams
 */
export interface ExtendedTranslationParams<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Doc Entry.
   * @nullable
   */
  docEntry?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Category.
   * @nullable
   */
  category?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Id.
   * @nullable
   */
  id?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Secondary Id.
   * @nullable
   */
  secondaryId?: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * ExtendedTranslationParamsField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class ExtendedTranslationParamsField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  ExtendedTranslationParams,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link ExtendedTranslationParams.docEntry} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docEntry: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('DocEntry', 'Edm.Int32', true);
  /**
   * Representation of the {@link ExtendedTranslationParams.category} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  category: EnumField<
    EntityT,
    DeSerializersT,
    TranslationCategoryEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'Category',
    TranslationCategoryEnum,
    true
  );
  /**
   * Representation of the {@link ExtendedTranslationParams.id} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  id: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ID', 'Edm.String', true);
  /**
   * Representation of the {@link ExtendedTranslationParams.secondaryId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  secondaryId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('SecondaryID', 'Edm.String', true);

  /**
   * Creates an instance of ExtendedTranslationParamsField.
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
      ExtendedTranslationParams,
      fieldOptions
    );
  }
}

export namespace ExtendedTranslationParams {
  /**
   * Metadata information on all properties of the `ExtendedTranslationParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ExtendedTranslationParams>[] =
    [
      {
        originalName: 'DocEntry',
        name: 'docEntry',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'Category',
        name: 'category',
        type: 'Edm.Enum',
        isCollection: false
      },
      {
        originalName: 'ID',
        name: 'id',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'SecondaryID',
        name: 'secondaryId',
        type: 'Edm.String',
        isCollection: false
      }
    ];
}
