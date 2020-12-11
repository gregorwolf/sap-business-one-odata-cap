import { ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * ValidValueMd
 */
export interface ValidValueMd {
    /**
     * Value.
     * @nullable
     */
    value?: string;
    /**
     * Description.
     * @nullable
     */
    description?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[ValidValueMd.build]] instead.
 */
export declare function createValidValueMd(json: any): ValidValueMd;
/**
 * ValidValueMdField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ValidValueMdField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ValidValueMd> {
    /**
     * Representation of the [[ValidValueMd.value]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    value: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ValidValueMd.description]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    description: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of ValidValueMdField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace ValidValueMd {
    /**
     * Metadata information on all properties of the `ValidValueMd` complex type.
     */
    const _propertyMetadata: PropertyMetadata<ValidValueMd>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): ValidValueMd;
}
//# sourceMappingURL=ValidValueMd.d.ts.map