/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * TaxDefinition
 */
export interface TaxDefinition {
  /**
   * Effectivefrom.
   * @nullable
   */
  effectivefrom?: Moment;
  /**
   * Rate.
   * @nullable
   */
  rate?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[TaxDefinition.build]] instead.
 */
export function createTaxDefinition(json: any): TaxDefinition {
  return TaxDefinition.build(json);
}

/**
 * TaxDefinitionField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class TaxDefinitionField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, TaxDefinition> {
  /**
   * Representation of the [[TaxDefinition.effectivefrom]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  effectivefrom: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('Effectivefrom', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[TaxDefinition.rate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  rate: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Rate', this, 'Edm.Double');

  /**
   * Creates an instance of TaxDefinitionField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, TaxDefinition);
  }
}

export namespace TaxDefinition {
  /**
   * Metadata information on all properties of the `TaxDefinition` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<TaxDefinition>[] = [{
    originalName: 'Effectivefrom',
    name: 'effectivefrom',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'Rate',
    name: 'rate',
    type: 'Edm.Double',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): TaxDefinition {
    return deserializeComplexTypeV4(json, TaxDefinition);
  }
}
