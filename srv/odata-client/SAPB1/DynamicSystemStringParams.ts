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
 * DynamicSystemStringParams
 */
export interface DynamicSystemStringParams<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Form Id.
   * @nullable
   */
  formId?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Item Id.
   * @nullable
   */
  itemId?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Column Id.
   * @nullable
   */
  columnId?: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * DynamicSystemStringParamsField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class DynamicSystemStringParamsField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  DynamicSystemStringParams,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link DynamicSystemStringParams.formId} property for query construction.
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
   * Representation of the {@link DynamicSystemStringParams.itemId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ItemID', 'Edm.String', true);
  /**
   * Representation of the {@link DynamicSystemStringParams.columnId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  columnId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ColumnID', 'Edm.String', true);

  /**
   * Creates an instance of DynamicSystemStringParamsField.
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
      DynamicSystemStringParams,
      fieldOptions
    );
  }
}

export namespace DynamicSystemStringParams {
  /**
   * Metadata information on all properties of the `DynamicSystemStringParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<DynamicSystemStringParams>[] =
    [
      {
        originalName: 'FormID',
        name: 'formId',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'ItemID',
        name: 'itemId',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'ColumnID',
        name: 'columnId',
        type: 'Edm.String',
        isCollection: false
      }
    ];
}
