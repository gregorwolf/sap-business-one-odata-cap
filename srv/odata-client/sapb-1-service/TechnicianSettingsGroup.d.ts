import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * TechnicianSettingsGroup
 */
export interface TechnicianSettingsGroup {
    /**
     * Code.
     * @nullable
     */
    code?: number;
    /**
     * Name.
     * @nullable
     */
    name?: string;
    /**
     * Advanced Dash Board.
     * @nullable
     */
    advancedDashBoard?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[TechnicianSettingsGroup.build]] instead.
 */
export declare function createTechnicianSettingsGroup(json: any): TechnicianSettingsGroup;
/**
 * TechnicianSettingsGroupField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class TechnicianSettingsGroupField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[TechnicianSettingsGroup.code]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    code: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[TechnicianSettingsGroup.name]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    name: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[TechnicianSettingsGroup.advancedDashBoard]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    advancedDashBoard: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace TechnicianSettingsGroup {
    function build(json: {
        [keys: string]: FieldType;
    }): TechnicianSettingsGroup;
}
//# sourceMappingURL=TechnicianSettingsGroup.d.ts.map