/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

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
export class UoMGroupDefinitionField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
}

export namespace UoMGroupDefinition {
  export function build(json: { [keys: string]: FieldType }): UoMGroupDefinition {
    return createComplexType(json, {
      AlternateUoM: (alternateUoM: number) => ({ alternateUoM: edmToTs(alternateUoM, 'Edm.Int32') }),
      AlternateQuantity: (alternateQuantity: number) => ({ alternateQuantity: edmToTs(alternateQuantity, 'Edm.Double') }),
      BaseQuantity: (baseQuantity: number) => ({ baseQuantity: edmToTs(baseQuantity, 'Edm.Double') }),
      WeightFactor: (weightFactor: number) => ({ weightFactor: edmToTs(weightFactor, 'Edm.Int32') }),
      UdfFactor: (udfFactor: number) => ({ udfFactor: edmToTs(udfFactor, 'Edm.Int32') })
    });
  }
}
