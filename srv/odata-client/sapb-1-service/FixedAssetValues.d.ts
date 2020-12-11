import { AssetTransactionTypeEnum } from './AssetTransactionTypeEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * FixedAssetValues
 */
export interface FixedAssetValues {
    /**
     * Transaction Type.
     * @nullable
     */
    transactionType?: AssetTransactionTypeEnum;
    /**
     * Acquisition Cost.
     * @nullable
     */
    acquisitionCost?: number;
    /**
     * Quantity.
     * @nullable
     */
    quantity?: number;
    /**
     * Depreciation Value.
     * @nullable
     */
    depreciationValue?: number;
    /**
     * Net Book Value.
     * @nullable
     */
    netBookValue?: number;
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
     * Appreciation.
     * @nullable
     */
    appreciation?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[FixedAssetValues.build]] instead.
 */
export declare function createFixedAssetValues(json: any): FixedAssetValues;
/**
 * FixedAssetValuesField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class FixedAssetValuesField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, FixedAssetValues> {
    /**
     * Representation of the [[FixedAssetValues.transactionType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    transactionType: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[FixedAssetValues.acquisitionCost]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    acquisitionCost: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[FixedAssetValues.quantity]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    quantity: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[FixedAssetValues.depreciationValue]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    depreciationValue: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[FixedAssetValues.netBookValue]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    netBookValue: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[FixedAssetValues.ordinaryDepreciationValue]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    ordinaryDepreciationValue: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[FixedAssetValues.unplanedDepreciationValue]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    unplanedDepreciationValue: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[FixedAssetValues.specialDepreciationValue]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    specialDepreciationValue: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[FixedAssetValues.writeUp]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    writeUp: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[FixedAssetValues.appreciation]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    appreciation: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of FixedAssetValuesField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace FixedAssetValues {
    /**
     * Metadata information on all properties of the `FixedAssetValues` complex type.
     */
    const _propertyMetadata: PropertyMetadata<FixedAssetValues>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): FixedAssetValues;
}
//# sourceMappingURL=FixedAssetValues.d.ts.map