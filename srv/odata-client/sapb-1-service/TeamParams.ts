/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * TeamParams
 */
export interface TeamParams {
  /**
   * Team Id.
   * @nullable
   */
  teamId?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[TeamParams.build]] instead.
 */
export function createTeamParams(json: any): TeamParams {
  return TeamParams.build(json);
}

/**
 * TeamParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class TeamParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[TeamParams.teamId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  teamId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TeamID', this, 'Edm.Int32');
}

export namespace TeamParams {
  export function build(json: { [keys: string]: FieldType }): TeamParams {
    return createComplexType(json, {
      TeamID: (teamId: number) => ({ teamId: edmToTs(teamId, 'Edm.Int32') })
    });
  }
}
