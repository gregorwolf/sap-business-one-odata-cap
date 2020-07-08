import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * ActivityTypeParams
 */
export interface ActivityTypeParams {
    /**
     * Code.
     * @nullable
     */
    code?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[ActivityTypeParams.build]] instead.
 */
export declare function createActivityTypeParams(json: any): ActivityTypeParams;
/**
 * ActivityTypeParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ActivityTypeParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[ActivityTypeParams.code]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    code: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace ActivityTypeParams {
    function build(json: {
        [keys: string]: FieldType;
    }): ActivityTypeParams;
}
//# sourceMappingURL=ActivityTypeParams.d.ts.map