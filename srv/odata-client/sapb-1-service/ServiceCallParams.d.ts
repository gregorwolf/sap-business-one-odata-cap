import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * ServiceCallParams
 */
export interface ServiceCallParams {
    /**
     * Service Call Id.
     * @nullable
     */
    serviceCallId?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[ServiceCallParams.build]] instead.
 */
export declare function createServiceCallParams(json: any): ServiceCallParams;
/**
 * ServiceCallParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ServiceCallParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[ServiceCallParams.serviceCallId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    serviceCallId: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace ServiceCallParams {
    function build(json: {
        [keys: string]: FieldType;
    }): ServiceCallParams;
}
//# sourceMappingURL=ServiceCallParams.d.ts.map