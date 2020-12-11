import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * BinLocationParams
 */
export interface BinLocationParams {
    /**
     * Abs Entry.
     * @nullable
     */
    absEntry?: number;
    /**
     * Bin Code.
     * @nullable
     */
    binCode?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[BinLocationParams.build]] instead.
 */
export declare function createBinLocationParams(json: any): BinLocationParams;
/**
 * BinLocationParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class BinLocationParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, BinLocationParams> {
    /**
     * Representation of the [[BinLocationParams.absEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    absEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BinLocationParams.binCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    binCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of BinLocationParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace BinLocationParams {
    /**
     * Metadata information on all properties of the `BinLocationParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<BinLocationParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): BinLocationParams;
}
//# sourceMappingURL=BinLocationParams.d.ts.map