import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * RoundedData
 */
export interface RoundedData {
    /**
     * Value.
     * @nullable
     */
    value?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[RoundedData.build]] instead.
 */
export declare function createRoundedData(json: any): RoundedData;
/**
 * RoundedDataField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class RoundedDataField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, RoundedData> {
    /**
     * Representation of the [[RoundedData.value]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    value: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of RoundedDataField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace RoundedData {
    /**
     * Metadata information on all properties of the `RoundedData` complex type.
     */
    const _propertyMetadata: PropertyMetadata<RoundedData>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): RoundedData;
}
//# sourceMappingURL=RoundedData.d.ts.map