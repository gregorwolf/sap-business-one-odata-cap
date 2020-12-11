import { ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * StockTakingParams
 */
export interface StockTakingParams {
    /**
     * Item Code.
     * @nullable
     */
    itemCode?: string;
    /**
     * Warehouse Code.
     * @nullable
     */
    warehouseCode?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[StockTakingParams.build]] instead.
 */
export declare function createStockTakingParams(json: any): StockTakingParams;
/**
 * StockTakingParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class StockTakingParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, StockTakingParams> {
    /**
     * Representation of the [[StockTakingParams.itemCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    itemCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[StockTakingParams.warehouseCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    warehouseCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of StockTakingParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace StockTakingParams {
    /**
     * Metadata information on all properties of the `StockTakingParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<StockTakingParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): StockTakingParams;
}
//# sourceMappingURL=StockTakingParams.d.ts.map