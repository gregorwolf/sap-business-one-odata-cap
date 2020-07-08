import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * ServiceCallTypeParams
 */
export interface ServiceCallTypeParams {
    /**
     * Call Type Id.
     * @nullable
     */
    callTypeId?: number;
    /**
     * Name.
     * @nullable
     */
    name?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[ServiceCallTypeParams.build]] instead.
 */
export declare function createServiceCallTypeParams(json: any): ServiceCallTypeParams;
/**
 * ServiceCallTypeParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ServiceCallTypeParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[ServiceCallTypeParams.callTypeId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    callTypeId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ServiceCallTypeParams.name]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    name: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace ServiceCallTypeParams {
    function build(json: {
        [keys: string]: FieldType;
    }): ServiceCallTypeParams;
}
//# sourceMappingURL=ServiceCallTypeParams.d.ts.map