/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * TerritoryParams
 */
export interface TerritoryParams {
  /**
   * Territory Id.
   * @nullable
   */
  territoryId?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[TerritoryParams.build]] instead.
 */
export function createTerritoryParams(json: any): TerritoryParams {
  return TerritoryParams.build(json);
}

/**
 * TerritoryParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class TerritoryParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, TerritoryParams> {
  /**
   * Representation of the [[TerritoryParams.territoryId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  territoryId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TerritoryID', this, 'Edm.Int32');

  /**
   * Creates an instance of TerritoryParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, TerritoryParams);
  }
}

export namespace TerritoryParams {
  /**
   * Metadata information on all properties of the `TerritoryParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<TerritoryParams>[] = [{
    originalName: 'TerritoryID',
    name: 'territoryId',
    type: 'Edm.Int32',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): TerritoryParams {
    return deserializeComplexTypeV4(json, TerritoryParams);
  }
}
