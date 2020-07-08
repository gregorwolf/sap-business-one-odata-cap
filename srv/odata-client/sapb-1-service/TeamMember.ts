/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * TeamMember
 */
export interface TeamMember {
  /**
   * Team Id.
   * @nullable
   */
  teamId?: number;
  /**
   * Employee Id.
   * @nullable
   */
  employeeId?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[TeamMember.build]] instead.
 */
export function createTeamMember(json: any): TeamMember {
  return TeamMember.build(json);
}

/**
 * TeamMemberField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class TeamMemberField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[TeamMember.teamId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  teamId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TeamID', this, 'Edm.Int32');
  /**
   * Representation of the [[TeamMember.employeeId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  employeeId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('EmployeeID', this, 'Edm.Int32');
}

export namespace TeamMember {
  export function build(json: { [keys: string]: FieldType }): TeamMember {
    return createComplexType(json, {
      TeamID: (teamId: number) => ({ teamId: edmToTs(teamId, 'Edm.Int32') }),
      EmployeeID: (employeeId: number) => ({ employeeId: edmToTs(employeeId, 'Edm.Int32') })
    });
  }
}
