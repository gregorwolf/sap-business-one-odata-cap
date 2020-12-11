import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * BarCodeParams
 */
export interface BarCodeParams {
    /**
     * Abs Entry.
     * @nullable
     */
    absEntry?: number;
    /**
     * Item No.
     * @nullable
     */
    itemNo?: string;
    /**
     * Uo M Entry.
     * @nullable
     */
    uoMEntry?: number;
    /**
     * Barcode.
     * @nullable
     */
    barcode?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[BarCodeParams.build]] instead.
 */
export declare function createBarCodeParams(json: any): BarCodeParams;
/**
 * BarCodeParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class BarCodeParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, BarCodeParams> {
    /**
     * Representation of the [[BarCodeParams.absEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    absEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BarCodeParams.itemNo]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    itemNo: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BarCodeParams.uoMEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    uoMEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BarCodeParams.barcode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    barcode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of BarCodeParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace BarCodeParams {
    /**
     * Metadata information on all properties of the `BarCodeParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<BarCodeParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): BarCodeParams;
}
//# sourceMappingURL=BarCodeParams.d.ts.map