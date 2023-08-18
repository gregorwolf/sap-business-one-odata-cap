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
 * RoutingDateCalculationOutput
 */
export interface RoutingDateCalculationOutput<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Result Date.
   * @nullable
   */
  resultDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Proportion.
   * @nullable
   */
  proportion?: DeserializedType<DeSerializersT, 'Edm.Double'>;
}

/**
 * RoutingDateCalculationOutputField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class RoutingDateCalculationOutputField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  RoutingDateCalculationOutput,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link RoutingDateCalculationOutput.resultDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  resultDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ResultDate',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link RoutingDateCalculationOutput.proportion} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  proportion: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Proportion', 'Edm.Double', true);

  /**
   * Creates an instance of RoutingDateCalculationOutputField.
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
      RoutingDateCalculationOutput,
      fieldOptions
    );
  }
}

export namespace RoutingDateCalculationOutput {
  /**
   * Metadata information on all properties of the `RoutingDateCalculationOutput` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<RoutingDateCalculationOutput>[] =
    [
      {
        originalName: 'ResultDate',
        name: 'resultDate',
        type: 'Edm.DateTimeOffset',
        isCollection: false
      },
      {
        originalName: 'Proportion',
        name: 'proportion',
        type: 'Edm.Double',
        isCollection: false
      }
    ];
}
