import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * ContactParams
 */
export interface ContactParams {
    /**
     * Contact Code.
     * @nullable
     */
    contactCode?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[ContactParams.build]] instead.
 */
export declare function createContactParams(json: any): ContactParams;
/**
 * ContactParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ContactParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ContactParams> {
    /**
     * Representation of the [[ContactParams.contactCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    contactCode: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of ContactParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace ContactParams {
    /**
     * Metadata information on all properties of the `ContactParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<ContactParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): ContactParams;
}
//# sourceMappingURL=ContactParams.d.ts.map