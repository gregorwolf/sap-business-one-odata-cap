import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * AlertManagementParams
 */
export interface AlertManagementParams {
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
}
/**
 * @deprecated Since v1.6.0. Use [[AlertManagementParams.build]] instead.
 */
export declare function createAlertManagementParams(json: any): AlertManagementParams;
/**
 * AlertManagementParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class AlertManagementParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[AlertManagementParams.code]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    code: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[AlertManagementParams.name]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    name: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace AlertManagementParams {
    function build(json: {
        [keys: string]: FieldType;
    }): AlertManagementParams;
}
//# sourceMappingURL=AlertManagementParams.d.ts.map