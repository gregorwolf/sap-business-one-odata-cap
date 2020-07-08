/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * MaterialRevaluationFifoParams
 */
export interface MaterialRevaluationFifoParams {
  /**
   * Item Code.
   * @nullable
   */
  itemCode?: string;
  /**
   * Location Type.
   * @nullable
   */
  locationType?: string;
  /**
   * Location Code.
   * @nullable
   */
  locationCode?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[MaterialRevaluationFifoParams.build]] instead.
 */
export function createMaterialRevaluationFifoParams(json: any): MaterialRevaluationFifoParams {
  return MaterialRevaluationFifoParams.build(json);
}

/**
 * MaterialRevaluationFifoParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class MaterialRevaluationFifoParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[MaterialRevaluationFifoParams.itemCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ItemCode', this, 'Edm.String');
  /**
   * Representation of the [[MaterialRevaluationFifoParams.locationType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  locationType: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('LocationType', this, 'Edm.String');
  /**
   * Representation of the [[MaterialRevaluationFifoParams.locationCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  locationCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('LocationCode', this, 'Edm.String');
}

export namespace MaterialRevaluationFifoParams {
  export function build(json: { [keys: string]: FieldType }): MaterialRevaluationFifoParams {
    return createComplexType(json, {
      ItemCode: (itemCode: string) => ({ itemCode: edmToTs(itemCode, 'Edm.String') }),
      LocationType: (locationType: string) => ({ locationType: edmToTs(locationType, 'Edm.String') }),
      LocationCode: (locationCode: string) => ({ locationCode: edmToTs(locationCode, 'Edm.String') })
    });
  }
}
