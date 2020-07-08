/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Layer, LayerField } from './Layer';
import { CollectionField, ComplexTypeField, Entity, FieldType, createComplexType } from '@sap-cloud-sdk/core/v4';

/**
 * MaterialRevaluationFifo
 */
export interface MaterialRevaluationFifo {
  /**
   * Layers.
   * @nullable
   */
  layers?: Layer;
}

/**
 * @deprecated Since v1.6.0. Use [[MaterialRevaluationFifo.build]] instead.
 */
export function createMaterialRevaluationFifo(json: any): MaterialRevaluationFifo {
  return MaterialRevaluationFifo.build(json);
}

/**
 * MaterialRevaluationFifoField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class MaterialRevaluationFifoField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[MaterialRevaluationFifo.layers]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  layers: LayerField<EntityT> = new LayerField('Layers', this);
}

export namespace MaterialRevaluationFifo {
  export function build(json: { [keys: string]: FieldType | Layer }): MaterialRevaluationFifo {
    return createComplexType(json, {
      Layers: (layers: Layer) => ({ layers: Layer.build(layers) })
    });
  }
}
