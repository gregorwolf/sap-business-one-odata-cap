import { ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * CallArgument
 */
export interface CallArgument {
    /**
     * Name.
     * @nullable
     */
    name?: string;
    /**
     * Value.
     * @nullable
     */
    value?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[CallArgument.build]] instead.
 */
export declare function createCallArgument(json: any): CallArgument;
/**
 * CallArgumentField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class CallArgumentField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, CallArgument> {
    /**
     * Representation of the [[CallArgument.name]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    name: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[CallArgument.value]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    value: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of CallArgumentField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace CallArgument {
    /**
     * Metadata information on all properties of the `CallArgument` complex type.
     */
    const _propertyMetadata: PropertyMetadata<CallArgument>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): CallArgument;
}
//# sourceMappingURL=CallArgument.d.ts.map