import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
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
export declare class StockTransferParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, StockTransferParams> {
    /**
     * Representation of the [[StockTransferParams.docEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    docEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of StockTransferParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace StockTransferParams {
    /**
     * Metadata information on all properties of the `StockTransferParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<StockTransferParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): StockTransferParams;
}
//# sourceMappingURL=StockTransferParams.d.ts.map