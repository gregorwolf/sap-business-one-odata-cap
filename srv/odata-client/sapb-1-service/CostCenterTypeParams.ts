/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * CostCenterTypeParams
 */
export interface CostCenterTypeParams {
  /**
   * Cost Center Type Code.
   * @nullable
   */
  costCenterTypeCode?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[CostCenterTypeParams.build]] instead.
 */
export function createCostCenterTypeParams(json: any): CostCenterTypeParams {
  return CostCenterTypeParams.build(json);
}

/**
 * CostCenterTypeParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class CostCenterTypeParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, CostCenterTypeParams> {
  /**
   * Representation of the [[CostCenterTypeParams.costCenterTypeCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  costCenterTypeCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('CostCenterTypeCode', this, 'Edm.String');

  /**
   * Creates an instance of CostCenterTypeParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, CostCenterTypeParams);
  }
}

export namespace CostCenterTypeParams {
  /**
   * Metadata information on all properties of the `CostCenterTypeParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<CostCenterTypeParams>[] = [{
    originalName: 'CostCenterTypeCode',
    name: 'costCenterTypeCode',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): CostCenterTypeParams {
    return deserializeComplexTypeV4(json, CostCenterTypeParams);
  }
}
