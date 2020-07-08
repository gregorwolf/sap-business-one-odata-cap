import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * StockTransferParams
 */
export interface StockTransferParams {
    /**
     * Doc Entry.
     * @nullable
     */
    docEntry?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[StockTransferParams.build]] instead.
 */
export declare function createStockTransferParams(json: any): StockTransferParams;
/**
 * StockTransferParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class StockTransferParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[StockTransferParams.docEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    docEntry: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace StockTransferParams {
    function build(json: {
        [keys: string]: FieldType;
    }): StockTransferParams;
}
//# sourceMappingURL=StockTransferParams.d.ts.map