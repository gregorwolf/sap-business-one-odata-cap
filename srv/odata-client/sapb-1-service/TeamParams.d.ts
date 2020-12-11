import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
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
export declare class TeamParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, TeamParams> {
    /**
     * Representation of the [[TeamParams.teamId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    teamId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of TeamParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace TeamParams {
    /**
     * Metadata information on all properties of the `TeamParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<TeamParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): TeamParams;
}
//# sourceMappingURL=TeamParams.d.ts.map