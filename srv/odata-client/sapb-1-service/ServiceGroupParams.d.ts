import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * ServiceGroupParams
 */
export interface ServiceGroupParams {
    /**
     * Abs Entry.
     * @nullable
     */
    absEntry?: number;
    /**
     * Service Group Code.
     * @nullable
     */
    serviceGroupCode?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[ServiceGroupParams.build]] instead.
 */
export declare function createServiceGroupParams(json: any): ServiceGroupParams;
/**
 * ServiceGroupParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ServiceGroupParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ServiceGroupParams> {
    /**
     * Representation of the [[ServiceGroupParams.absEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    absEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ServiceGroupParams.serviceGroupCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    serviceGroupCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of ServiceGroupParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace ServiceGroupParams {
    /**
     * Metadata information on all properties of the `ServiceGroupParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<ServiceGroupParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): ServiceGroupParams;
}
//# sourceMappingURL=ServiceGroupParams.d.ts.map