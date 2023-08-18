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
 * ColumnsPreferencesParams
 */
export interface ColumnsPreferencesParams<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * User.
   * @nullable
   */
  user?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Form Id.
   * @nullable
   */
  formId?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Item Number.
   * @nullable
   */
  itemNumber?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Column.
   * @nullable
   */
  column?: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * ColumnsPreferencesParamsField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class ColumnsPreferencesParamsField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  ColumnsPreferencesParams,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link ColumnsPreferencesParams.user} property for query construction.
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
   * Representation of the {@link ColumnsPreferencesParams.formId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  formId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('FormID', 'Edm.String', true);
  /**
   * Representation of the {@link ColumnsPreferencesParams.itemNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ItemNumber', 'Edm.String', true);
  /**
   * Representation of the {@link ColumnsPreferencesParams.column} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  column: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Column', 'Edm.String', true);

  /**
   * Creates an instance of ColumnsPreferencesParamsField.
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
      ColumnsPreferencesParams,
      fieldOptions
    );
  }
}

export namespace ColumnsPreferencesParams {
  /**
   * Metadata information on all properties of the `ColumnsPreferencesParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ColumnsPreferencesParams>[] =
    [
      {
        originalName: 'User',
        name: 'user',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'FormID',
        name: 'formId',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'ItemNumber',
        name: 'itemNumber',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'Column',
        name: 'column',
        type: 'Edm.String',
        isCollection: false
      }
    ];
}
