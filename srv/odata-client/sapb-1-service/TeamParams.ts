/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

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
export class TeamParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, TeamParams> {
  /**
   * Representation of the [[TeamParams.teamId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  teamId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TeamID', this, 'Edm.Int32');

  /**
   * Creates an instance of TeamParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, TeamParams);
  }
}

export namespace TeamParams {
  /**
   * Metadata information on all properties of the `TeamParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<TeamParams>[] = [{
    originalName: 'TeamID',
    name: 'teamId',
    type: 'Edm.Int32',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): TeamParams {
    return deserializeComplexTypeV4(json, TeamParams);
  }
}
