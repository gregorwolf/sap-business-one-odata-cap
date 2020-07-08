/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * MaterialRevaluationSnbParam
 */
export interface MaterialRevaluationSnbParam {
  /**
   * Item Code.
   * @nullable
   */
  itemCode?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[MaterialRevaluationSnbParam.build]] instead.
 */
export function createMaterialRevaluationSnbParam(json: any): MaterialRevaluationSnbParam {
  return MaterialRevaluationSnbParam.build(json);
}

/**
 * MaterialRevaluationSnbParamField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class MaterialRevaluationSnbParamField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[MaterialRevaluationSnbParam.itemCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ItemCode', this, 'Edm.String');
}

export namespace MaterialRevaluationSnbParam {
  export function build(json: { [keys: string]: FieldType }): MaterialRevaluationSnbParam {
    return createComplexType(json, {
      ItemCode: (itemCode: string) => ({ itemCode: edmToTs(itemCode, 'Edm.String') })
    });
  }
}
