import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * BusinessPlaceIeNumber
 */
export interface BusinessPlaceIeNumber {
    /**
     * Bplid.
     * @nullable
     */
    bplid?: number;
    /**
     * State.
     * @nullable
     */
    state?: string;
    /**
     * Ie Number.
     * @nullable
     */
    ieNumber?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[BusinessPlaceIeNumber.build]] instead.
 */
export declare function createBusinessPlaceIeNumber(json: any): BusinessPlaceIeNumber;
/**
 * BusinessPlaceIeNumberField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class BusinessPlaceIeNumberField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, BusinessPlaceIeNumber> {
    /**
     * Representation of the [[BusinessPlaceIeNumber.bplid]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    bplid: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BusinessPlaceIeNumber.state]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    state: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BusinessPlaceIeNumber.ieNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    ieNumber: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of BusinessPlaceIeNumberField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace BusinessPlaceIeNumber {
    /**
     * Metadata information on all properties of the `BusinessPlaceIeNumber` complex type.
     */
    const _propertyMetadata: PropertyMetadata<BusinessPlaceIeNumber>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): BusinessPlaceIeNumber;
}
//# sourceMappingURL=BusinessPlaceIeNumber.d.ts.map