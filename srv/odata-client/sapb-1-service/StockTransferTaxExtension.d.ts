import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * StockTransferTaxExtension
 */
export interface StockTransferTaxExtension {
    /**
     * Form Number.
     * @nullable
     */
    formNumber?: string;
    /**
     * Transaction Category.
     * @nullable
     */
    transactionCategory?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[StockTransferTaxExtension.build]] instead.
 */
export declare function createStockTransferTaxExtension(json: any): StockTransferTaxExtension;
/**
 * StockTransferTaxExtensionField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class StockTransferTaxExtensionField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[StockTransferTaxExtension.formNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    formNumber: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[StockTransferTaxExtension.transactionCategory]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    transactionCategory: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace StockTransferTaxExtension {
    function build(json: {
        [keys: string]: FieldType;
    }): StockTransferTaxExtension;
}
//# sourceMappingURL=StockTransferTaxExtension.d.ts.map