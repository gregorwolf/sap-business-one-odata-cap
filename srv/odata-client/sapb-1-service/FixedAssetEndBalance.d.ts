import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * FixedAssetEndBalance
 */
export interface FixedAssetEndBalance {
    /**
     * Historical Apc.
     * @nullable
     */
    historicalApc?: number;
    /**
     * Acquisition Cost.
     * @nullable
     */
    acquisitionCost?: number;
    /**
     * Net Book Value.
     * @nullable
     */
    netBookValue?: number;
    /**
     * Historical Nbv.
     * @nullable
     */
    historicalNbv?: number;
    /**
     * Ordinary Depreciation Value.
     * @nullable
     */
    ordinaryDepreciationValue?: number;
    /**
     * Unplaned Depreciation Value.
     * @nullable
     */
    unplanedDepreciationValue?: number;
    /**
     * Special Depreciation Value.
     * @nullable
     */
    specialDepreciationValue?: number;
    /**
     * Write Up.
     * @nullable
     */
    writeUp?: number;
    /**
     * Salvage Value.
     * @nullable
     */
    salvageValue?: number;
    /**
     * Quantity.
     * @nullable
     */
    quantity?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[FixedAssetEndBalance.build]] instead.
 */
export declare function createFixedAssetEndBalance(json: any): FixedAssetEndBalance;
/**
 * FixedAssetEndBalanceField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class FixedAssetEndBalanceField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, FixedAssetEndBalance> {
    /**
     * Representation of the [[FixedAssetEndBalance.historicalApc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    historicalApc: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[FixedAssetEndBalance.acquisitionCost]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    acquisitionCost: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[FixedAssetEndBalance.netBookValue]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    netBookValue: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[FixedAssetEndBalance.historicalNbv]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    historicalNbv: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[FixedAssetEndBalance.ordinaryDepreciationValue]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    ordinaryDepreciationValue: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[FixedAssetEndBalance.unplanedDepreciationValue]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    unplanedDepreciationValue: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[FixedAssetEndBalance.specialDepreciationValue]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    specialDepreciationValue: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[FixedAssetEndBalance.writeUp]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    writeUp: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[FixedAssetEndBalance.salvageValue]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    salvageValue: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[FixedAssetEndBalance.quantity]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    quantity: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of FixedAssetEndBalanceField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace FixedAssetEndBalance {
    /**
     * Metadata information on all properties of the `FixedAssetEndBalance` complex type.
     */
    const _propertyMetadata: PropertyMetadata<FixedAssetEndBalance>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): FixedAssetEndBalance;
}
//# sourceMappingURL=FixedAssetEndBalance.d.ts.map