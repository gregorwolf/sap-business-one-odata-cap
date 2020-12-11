import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * BpPriorityParams
 */
export interface BpPriorityParams {
    /**
     * Priority.
     * @nullable
     */
    priority?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[BpPriorityParams.build]] instead.
 */
export declare function createBpPriorityParams(json: any): BpPriorityParams;
/**
 * BpPriorityParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class BpPriorityParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, BpPriorityParams> {
    /**
     * Representation of the [[BpPriorityParams.priority]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    priority: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of BpPriorityParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace BpPriorityParams {
    /**
     * Metadata information on all properties of the `BpPriorityParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<BpPriorityParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): BpPriorityParams;
}
//# sourceMappingURL=BpPriorityParams.d.ts.map