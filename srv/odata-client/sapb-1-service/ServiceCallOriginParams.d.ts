import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * ServiceCallOriginParams
 */
export interface ServiceCallOriginParams {
    /**
     * Origin Id.
     * @nullable
     */
    originId?: number;
    /**
     * Name.
     * @nullable
     */
    name?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[ServiceCallOriginParams.build]] instead.
 */
export declare function createServiceCallOriginParams(json: any): ServiceCallOriginParams;
/**
 * ServiceCallOriginParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ServiceCallOriginParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[ServiceCallOriginParams.originId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    originId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ServiceCallOriginParams.name]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    name: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace ServiceCallOriginParams {
    function build(json: {
        [keys: string]: FieldType;
    }): ServiceCallOriginParams;
}
//# sourceMappingURL=ServiceCallOriginParams.d.ts.map