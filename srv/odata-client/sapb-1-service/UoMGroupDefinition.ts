/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * UoMGroupDefinition
 */
export interface UoMGroupDefinition {
  /**
   * Alternate Uo M.
   * @nullable
   */
  alternateUoM?: number;
  /**
   * Alternate Quantity.
   * @nullable
   */
  alternateQuantity?: number;
  /**
   * Base Quantity.
   * @nullable
   */
  baseQuantity?: number;
  /**
   * Weight Factor.
   * @nullable
   */
  weightFactor?: number;
  /**
   * Udf Factor.
   * @nullable
   */
  udfFactor?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[UoMGroupDefinition.build]] instead.
 */
export function createUoMGroupDefinition(json: any): UoMGroupDefinition {
  return UoMGroupDefinition.build(json);
}

/**
 * UoMGroupDefinitionField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class UoMGroupDefinitionField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, UoMGroupDefinition> {
  /**
   * Representation of the [[UoMGroupDefinition.alternateUoM]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  alternateUoM: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AlternateUoM', this, 'Edm.Int32');
  /**
   * Representation of the [[UoMGroupDefinition.alternateQuantity]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  alternateQuantity: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AlternateQuantity', this, 'Edm.Double');
  /**
   * Representation of the [[UoMGroupDefinition.baseQuantity]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  baseQuantity: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('BaseQuantity', this, 'Edm.Double');
  /**
   * Representation of the [[UoMGroupDefinition.weightFactor]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  weightFactor: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('WeightFactor', this, 'Edm.Int32');
  /**
   * Representation of the [[UoMGroupDefinition.udfFactor]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  udfFactor: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('UdfFactor', this, 'Edm.Int32');

  /**
   * Creates an instance of UoMGroupDefinitionField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, UoMGroupDefinition);
  }
}

export namespace UoMGroupDefinition {
  /**
   * Metadata information on all properties of the `UoMGroupDefinition` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<UoMGroupDefinition>[] = [{
    originalName: 'AlternateUoM',
    name: 'alternateUoM',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'AlternateQuantity',
    name: 'alternateQuantity',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'BaseQuantity',
    name: 'baseQuantity',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'WeightFactor',
    name: 'weightFactor',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'UdfFactor',
    name: 'udfFactor',
    type: 'Edm.Int32',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): UoMGroupDefinition {
    return deserializeComplexTypeV4(json, UoMGroupDefinition);
  }
}
