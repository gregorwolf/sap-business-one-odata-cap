import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * BinLocationFieldParams
 */
export interface BinLocationFieldParams {
    /**
     * Abs Entry.
     * @nullable
     */
    absEntry?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[BinLocationFieldParams.build]] instead.
 */
export declare function createBinLocationFieldParams(json: any): BinLocationFieldParams;
/**
 * BinLocationFieldParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class BinLocationFieldParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, BinLocationFieldParams> {
    /**
     * Representation of the [[BinLocationFieldParams.absEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    absEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of BinLocationFieldParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace BinLocationFieldParams {
    /**
     * Metadata information on all properties of the `BinLocationFieldParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<BinLocationFieldParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): BinLocationFieldParams;
}
//# sourceMappingURL=BinLocationFieldParams.d.ts.map