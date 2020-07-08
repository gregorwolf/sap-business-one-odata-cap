import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
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
export declare class StockTakingParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
}
export declare namespace StockTakingParams {
    function build(json: {
        [keys: string]: FieldType;
    }): StockTakingParams;
}
//# sourceMappingURL=StockTakingParams.d.ts.map