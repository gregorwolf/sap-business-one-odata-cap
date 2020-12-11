import { BoRoleInTeam } from './BoRoleInTeam';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
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
export declare function createTeamMember(json: any): TeamMember;
/**
 * TeamMemberField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class TeamMemberField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, TeamMember> {
    /**
     * Representation of the [[TeamMember.teamId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    teamId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[TeamMember.employeeId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    employeeId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[TeamMember.roleInTeam]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    roleInTeam: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Creates an instance of TeamMemberField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace TeamMember {
    /**
     * Metadata information on all properties of the `TeamMember` complex type.
     */
    const _propertyMetadata: PropertyMetadata<TeamMember>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): TeamMember;
}
//# sourceMappingURL=TeamMember.d.ts.map