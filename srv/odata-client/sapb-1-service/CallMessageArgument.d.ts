import { ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * CallMessageArgument
 */
export interface CallMessageArgument {
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
 * @deprecated Since v1.6.0. Use [[CallMessageArgument.build]] instead.
 */
export declare function createCallMessageArgument(json: any): CallMessageArgument;
/**
 * CallMessageArgumentField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class CallMessageArgumentField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, CallMessageArgument> {
    /**
     * Representation of the [[CallMessageArgument.name]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    name: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[CallMessageArgument.value]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    value: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of CallMessageArgumentField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace CallMessageArgument {
    /**
     * Metadata information on all properties of the `CallMessageArgument` complex type.
     */
    const _propertyMetadata: PropertyMetadata<CallMessageArgument>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): CallMessageArgument;
}
//# sourceMappingURL=CallMessageArgument.d.ts.map