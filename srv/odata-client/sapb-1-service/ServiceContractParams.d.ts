import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * ServiceContractParams
 */
export interface ServiceContractParams {
    /**
     * Contract Id.
     * @nullable
     */
    contractId?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[ServiceContractParams.build]] instead.
 */
export declare function createServiceContractParams(json: any): ServiceContractParams;
/**
 * ServiceContractParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ServiceContractParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ServiceContractParams> {
    /**
     * Representation of the [[ServiceContractParams.contractId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    contractId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of ServiceContractParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace ServiceContractParams {
    /**
     * Metadata information on all properties of the `ServiceContractParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<ServiceContractParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): ServiceContractParams;
}
//# sourceMappingURL=ServiceContractParams.d.ts.map