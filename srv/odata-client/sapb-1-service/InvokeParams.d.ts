import { ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * InvokeParams
 */
export interface InvokeParams {
    /**
     * Value.
     * @nullable
     */
    value?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[InvokeParams.build]] instead.
 */
export declare function createInvokeParams(json: any): InvokeParams;
/**
 * InvokeParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class InvokeParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, InvokeParams> {
    /**
     * Representation of the [[InvokeParams.value]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    value: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of InvokeParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace InvokeParams {
    /**
     * Metadata information on all properties of the `InvokeParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<InvokeParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): InvokeParams;
}
//# sourceMappingURL=InvokeParams.d.ts.map