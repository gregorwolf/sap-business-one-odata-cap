/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Layer } from './Layer';
import { CollectionField, ComplexTypeField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * MaterialRevaluationFifo
 */
export interface MaterialRevaluationFifo {
  /**
   * Layers.
   * @nullable
   */
  layers?: Layer[];
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
export class MaterialRevaluationFifoField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, MaterialRevaluationFifo> {
  /**
   * Representation of the [[MaterialRevaluationFifo.layers]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  layers: CollectionField<EntityT, Layer> = new CollectionField('Layers', this, Layer);

  /**
   * Creates an instance of MaterialRevaluationFifoField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, MaterialRevaluationFifo);
  }
}

export namespace MaterialRevaluationFifo {
  /**
   * Metadata information on all properties of the `MaterialRevaluationFifo` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<MaterialRevaluationFifo>[] = [{
    originalName: 'Layers',
    name: 'layers',
    type: Layer,
    isCollection: true
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType | Layer }): MaterialRevaluationFifo {
    return deserializeComplexTypeV4(json, MaterialRevaluationFifo);
  }
}
