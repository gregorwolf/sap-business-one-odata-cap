import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * ItemIntrastatExtension
 */
export interface ItemIntrastatExtension {
    /**
     * Item Code.
     * @nullable
     */
    itemCode?: string;
    /**
     * Commodity Code.
     * @nullable
     */
    commodityCode?: number;
    /**
     * Supplementary Unit.
     * @nullable
     */
    supplementaryUnit?: number;
    /**
     * Factor Of Supplementary Unit.
     * @nullable
     */
    factorOfSupplementaryUnit?: number;
    /**
     * Import Region State.
     * @nullable
     */
    importRegionState?: number;
    /**
     * Export Region State.
     * @nullable
     */
    exportRegionState?: number;
    /**
     * Import Nature Of Transaction.
     * @nullable
     */
    importNatureOfTransaction?: number;
    /**
     * Export Nature Of Transaction.
     * @nullable
     */
    exportNatureOfTransaction?: number;
    /**
     * Import Statistical Procedure.
     * @nullable
     */
    importStatisticalProcedure?: number;
    /**
     * Export Statistical Procedure.
     * @nullable
     */
    exportStatisticalProcedure?: number;
    /**
     * Country Of Origin.
     * @nullable
     */
    countryOfOrigin?: string;
    /**
     * Service Code.
     * @nullable
     */
    serviceCode?: number;
    /**
     * Import Region Country.
     * @nullable
     */
    importRegionCountry?: string;
    /**
     * Export Region Country.
     * @nullable
     */
    exportRegionCountry?: string;
    /**
     * Statistical Code.
     * @nullable
     */
    statisticalCode?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[ItemIntrastatExtension.build]] instead.
 */
export declare function createItemIntrastatExtension(json: any): ItemIntrastatExtension;
/**
 * ItemIntrastatExtensionField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ItemIntrastatExtensionField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[ItemIntrastatExtension.itemCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    itemCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ItemIntrastatExtension.commodityCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    commodityCode: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ItemIntrastatExtension.supplementaryUnit]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    supplementaryUnit: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ItemIntrastatExtension.factorOfSupplementaryUnit]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    factorOfSupplementaryUnit: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ItemIntrastatExtension.importRegionState]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    importRegionState: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ItemIntrastatExtension.exportRegionState]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    exportRegionState: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ItemIntrastatExtension.importNatureOfTransaction]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    importNatureOfTransaction: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ItemIntrastatExtension.exportNatureOfTransaction]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    exportNatureOfTransaction: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ItemIntrastatExtension.importStatisticalProcedure]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    importStatisticalProcedure: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ItemIntrastatExtension.exportStatisticalProcedure]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    exportStatisticalProcedure: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ItemIntrastatExtension.countryOfOrigin]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    countryOfOrigin: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ItemIntrastatExtension.serviceCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    serviceCode: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ItemIntrastatExtension.importRegionCountry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    importRegionCountry: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ItemIntrastatExtension.exportRegionCountry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    exportRegionCountry: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ItemIntrastatExtension.statisticalCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    statisticalCode: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace ItemIntrastatExtension {
    function build(json: {
        [keys: string]: FieldType;
    }): ItemIntrastatExtension;
}
//# sourceMappingURL=ItemIntrastatExtension.d.ts.map