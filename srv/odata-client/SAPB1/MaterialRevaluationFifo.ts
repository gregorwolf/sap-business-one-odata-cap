/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Layer } from './Layer';
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
 * MaterialRevaluationFifo
 */
export interface MaterialRevaluationFifo<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Layers.
   * @nullable
   */
  layers?: DeserializedType<DeSerializersT, 'SAPB1.Layer'>;
}

/**
 * MaterialRevaluationFifoField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class MaterialRevaluationFifoField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  MaterialRevaluationFifo,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link MaterialRevaluationFifo.layers} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  layers: CollectionField<EntityT, DeSerializersT, Layer, true, false> =
    this._fieldBuilder.buildCollectionField('Layers', Layer, true);

  /**
   * Creates an instance of MaterialRevaluationFifoField.
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
      MaterialRevaluationFifo,
      fieldOptions
    );
  }
}

export namespace MaterialRevaluationFifo {
  /**
   * Metadata information on all properties of the `MaterialRevaluationFifo` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<MaterialRevaluationFifo>[] =
    [
      {
        originalName: 'Layers',
        name: 'layers',
        type: Layer,
        isCollection: true
      }
    ];
}
