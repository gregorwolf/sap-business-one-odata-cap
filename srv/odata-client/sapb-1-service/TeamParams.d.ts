import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
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
export declare function createTeamParams(json: any): TeamParams;
/**
 * TeamParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class TeamParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[TeamParams.teamId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    teamId: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace TeamParams {
    function build(json: {
        [keys: string]: FieldType;
    }): TeamParams;
}
//# sourceMappingURL=TeamParams.d.ts.map