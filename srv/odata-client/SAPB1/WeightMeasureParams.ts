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
 * WeightMeasureParams
 */
export interface WeightMeasureParams<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Unit Code.
   * @nullable
   */
  unitCode?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
}

/**
 * WeightMeasureParamsField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class WeightMeasureParamsField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  WeightMeasureParams,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link WeightMeasureParams.unitCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  unitCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('UnitCode', 'Edm.Int32', true);

  /**
   * Creates an instance of WeightMeasureParamsField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, WeightMeasureParams, fieldOptions);
  }
}

export namespace WeightMeasureParams {
  /**
   * Metadata information on all properties of the `WeightMeasureParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<WeightMeasureParams>[] = [
    {
      originalName: 'UnitCode',
      name: 'unitCode',
      type: 'Edm.Int32',
      isCollection: false
    }
  ];
}
