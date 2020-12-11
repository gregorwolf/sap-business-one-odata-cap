import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * BinLocationAttributeParams
 */
export interface BinLocationAttributeParams {
    /**
     * Abs Entry.
     * @nullable
     */
    absEntry?: number;
    /**
     * Attribute.
     * @nullable
     */
    attribute?: number;
    /**
     * Code.
     * @nullable
     */
    code?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[BinLocationAttributeParams.build]] instead.
 */
export declare function createBinLocationAttributeParams(json: any): BinLocationAttributeParams;
/**
 * BinLocationAttributeParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class BinLocationAttributeParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, BinLocationAttributeParams> {
    /**
     * Representation of the [[BinLocationAttributeParams.absEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    absEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BinLocationAttributeParams.attribute]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    attribute: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BinLocationAttributeParams.code]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    code: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of BinLocationAttributeParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace BinLocationAttributeParams {
    /**
     * Metadata information on all properties of the `BinLocationAttributeParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<BinLocationAttributeParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): BinLocationAttributeParams;
}
//# sourceMappingURL=BinLocationAttributeParams.d.ts.map