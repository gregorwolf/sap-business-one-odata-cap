import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * ServiceCallStatusParams
 */
export interface ServiceCallStatusParams {
    /**
     * Status Id.
     * @nullable
     */
    statusId?: number;
    /**
     * Name.
     * @nullable
     */
    name?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[ServiceCallStatusParams.build]] instead.
 */
export declare function createServiceCallStatusParams(json: any): ServiceCallStatusParams;
/**
 * ServiceCallStatusParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ServiceCallStatusParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[ServiceCallStatusParams.statusId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    statusId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ServiceCallStatusParams.name]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    name: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace ServiceCallStatusParams {
    function build(json: {
        [keys: string]: FieldType;
    }): ServiceCallStatusParams;
}
//# sourceMappingURL=ServiceCallStatusParams.d.ts.map