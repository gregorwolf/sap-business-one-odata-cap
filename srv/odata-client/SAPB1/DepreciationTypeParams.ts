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
 * DepreciationTypeParams
 */
export interface DepreciationTypeParams<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Code.
   * @nullable
   */
  code?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  description?: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * DepreciationTypeParamsField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class DepreciationTypeParamsField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  DepreciationTypeParams,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link DepreciationTypeParams.code} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  code: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Code', 'Edm.String', true);
  /**
   * Representation of the {@link DepreciationTypeParams.description} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  description: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Description', 'Edm.String', true);

  /**
   * Creates an instance of DepreciationTypeParamsField.
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
      DepreciationTypeParams,
      fieldOptions
    );
  }
}

export namespace DepreciationTypeParams {
  /**
   * Metadata information on all properties of the `DepreciationTypeParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<DepreciationTypeParams>[] = [
    {
      originalName: 'Code',
      name: 'code',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Description',
      name: 'description',
      type: 'Edm.String',
      isCollection: false
    }
  ];
}
