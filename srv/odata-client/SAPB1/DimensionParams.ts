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
 * DimensionParams
 */
export interface DimensionParams<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Dimension Code.
   * @nullable
   */
  dimensionCode?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Dimension Name.
   * @nullable
   */
  dimensionName?: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * DimensionParamsField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class DimensionParamsField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  DimensionParams,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link DimensionParams.dimensionCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  dimensionCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('DimensionCode', 'Edm.Int32', true);
  /**
   * Representation of the {@link DimensionParams.dimensionName} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  dimensionName: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('DimensionName', 'Edm.String', true);

  /**
   * Creates an instance of DimensionParamsField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, DimensionParams, fieldOptions);
  }
}

export namespace DimensionParams {
  /**
   * Metadata information on all properties of the `DimensionParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<DimensionParams>[] = [
    {
      originalName: 'DimensionCode',
      name: 'dimensionCode',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'DimensionName',
      name: 'dimensionName',
      type: 'Edm.String',
      isCollection: false
    }
  ];
}
