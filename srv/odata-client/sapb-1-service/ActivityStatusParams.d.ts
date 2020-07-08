import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * ActivityStatusParams
 */
export interface ActivityStatusParams {
    /**
     * Status Id.
     * @nullable
     */
    statusId?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[ActivityStatusParams.build]] instead.
 */
export declare function createActivityStatusParams(json: any): ActivityStatusParams;
/**
 * ActivityStatusParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ActivityStatusParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[ActivityStatusParams.statusId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    statusId: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace ActivityStatusParams {
    function build(json: {
        [keys: string]: FieldType;
    }): ActivityStatusParams;
}
//# sourceMappingURL=ActivityStatusParams.d.ts.map