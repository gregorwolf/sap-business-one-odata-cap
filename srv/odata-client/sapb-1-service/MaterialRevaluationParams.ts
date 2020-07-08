/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * MaterialRevaluationParams
 */
export interface MaterialRevaluationParams {
  /**
   * Doc Entry.
   * @nullable
   */
  docEntry?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[MaterialRevaluationParams.build]] instead.
 */
export function createMaterialRevaluationParams(json: any): MaterialRevaluationParams {
  return MaterialRevaluationParams.build(json);
}

/**
 * MaterialRevaluationParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class MaterialRevaluationParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[MaterialRevaluationParams.docEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DocEntry', this, 'Edm.Int32');
}

export namespace MaterialRevaluationParams {
  export function build(json: { [keys: string]: FieldType }): MaterialRevaluationParams {
    return createComplexType(json, {
      DocEntry: (docEntry: number) => ({ docEntry: edmToTs(docEntry, 'Edm.Int32') })
    });
  }
}
