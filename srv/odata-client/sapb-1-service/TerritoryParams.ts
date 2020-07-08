/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

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
export class TerritoryParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[TerritoryParams.territoryId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  territoryId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TerritoryID', this, 'Edm.Int32');
}

export namespace TerritoryParams {
  export function build(json: { [keys: string]: FieldType }): TerritoryParams {
    return createComplexType(json, {
      TerritoryID: (territoryId: number) => ({ territoryId: edmToTs(territoryId, 'Edm.Int32') })
    });
  }
}
