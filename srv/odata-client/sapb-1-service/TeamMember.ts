/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BoRoleInTeam } from './BoRoleInTeam';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

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
  /**
   * Role In Team.
   * @nullable
   */
  roleInTeam?: BoRoleInTeam;
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
export class TeamMemberField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, TeamMember> {
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
  /**
   * Representation of the [[TeamMember.roleInTeam]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  roleInTeam: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('RoleInTeam', this);

  /**
   * Creates an instance of TeamMemberField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, TeamMember);
  }
}

export namespace TeamMember {
  /**
   * Metadata information on all properties of the `TeamMember` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<TeamMember>[] = [{
    originalName: 'TeamID',
    name: 'teamId',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'EmployeeID',
    name: 'employeeId',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'RoleInTeam',
    name: 'roleInTeam',
    type: 'Edm.Enum',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): TeamMember {
    return deserializeComplexTypeV4(json, TeamMember);
  }
}
