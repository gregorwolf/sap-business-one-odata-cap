import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
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
export declare function createTeamMember(json: any): TeamMember;
/**
 * TeamMemberField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class TeamMemberField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
}
export declare namespace TeamMember {
    function build(json: {
        [keys: string]: FieldType;
    }): TeamMember;
}
//# sourceMappingURL=TeamMember.d.ts.map