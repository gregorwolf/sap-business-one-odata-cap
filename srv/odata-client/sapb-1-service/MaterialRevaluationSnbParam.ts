/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

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
export class MaterialRevaluationSnbParamField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, MaterialRevaluationSnbParam> {
  /**
   * Representation of the [[MaterialRevaluationSnbParam.itemCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ItemCode', this, 'Edm.String');

  /**
   * Creates an instance of MaterialRevaluationSnbParamField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, MaterialRevaluationSnbParam);
  }
}

export namespace MaterialRevaluationSnbParam {
  /**
   * Metadata information on all properties of the `MaterialRevaluationSnbParam` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<MaterialRevaluationSnbParam>[] = [{
    originalName: 'ItemCode',
    name: 'itemCode',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): MaterialRevaluationSnbParam {
    return deserializeComplexTypeV4(json, MaterialRevaluationSnbParam);
  }
}
