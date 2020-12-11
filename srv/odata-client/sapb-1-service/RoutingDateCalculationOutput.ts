/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * RoutingDateCalculationOutput
 */
export interface RoutingDateCalculationOutput {
  /**
   * Result Date.
   * @nullable
   */
  resultDate?: Moment;
  /**
   * Proportion.
   * @nullable
   */
  proportion?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[RoutingDateCalculationOutput.build]] instead.
 */
export function createRoutingDateCalculationOutput(json: any): RoutingDateCalculationOutput {
  return RoutingDateCalculationOutput.build(json);
}

/**
 * RoutingDateCalculationOutputField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class RoutingDateCalculationOutputField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, RoutingDateCalculationOutput> {
  /**
   * Representation of the [[RoutingDateCalculationOutput.resultDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  resultDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('ResultDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[RoutingDateCalculationOutput.proportion]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  proportion: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Proportion', this, 'Edm.Double');

  /**
   * Creates an instance of RoutingDateCalculationOutputField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, RoutingDateCalculationOutput);
  }
}

export namespace RoutingDateCalculationOutput {
  /**
   * Metadata information on all properties of the `RoutingDateCalculationOutput` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<RoutingDateCalculationOutput>[] = [{
    originalName: 'ResultDate',
    name: 'resultDate',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'Proportion',
    name: 'proportion',
    type: 'Edm.Double',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): RoutingDateCalculationOutput {
    return deserializeComplexTypeV4(json, RoutingDateCalculationOutput);
  }
}
