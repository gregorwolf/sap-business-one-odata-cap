/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * DimensionParams
 */
export interface DimensionParams {
  /**
   * Dimension Code.
   * @nullable
   */
  dimensionCode?: number;
  /**
   * Dimension Name.
   * @nullable
   */
  dimensionName?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[DimensionParams.build]] instead.
 */
export function createDimensionParams(json: any): DimensionParams {
  return DimensionParams.build(json);
}

/**
 * DimensionParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class DimensionParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[DimensionParams.dimensionCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  dimensionCode: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DimensionCode', this, 'Edm.Int32');
  /**
   * Representation of the [[DimensionParams.dimensionName]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  dimensionName: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('DimensionName', this, 'Edm.String');
}

export namespace DimensionParams {
  export function build(json: { [keys: string]: FieldType }): DimensionParams {
    return createComplexType(json, {
      DimensionCode: (dimensionCode: number) => ({ dimensionCode: edmToTs(dimensionCode, 'Edm.Int32') }),
      DimensionName: (dimensionName: string) => ({ dimensionName: edmToTs(dimensionName, 'Edm.String') })
    });
  }
}
