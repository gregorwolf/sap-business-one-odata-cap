import { BoDocumentTypes } from './BoDocumentTypes';
import { BoServiceSupplyMethods } from './BoServiceSupplyMethods';
import { BoServicePaymentMethods } from './BoServicePaymentMethods';
import { BoYesNoEnum } from './BoYesNoEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
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
     * Type.
     * @nullable
     */
    type?: BoDocumentTypes;
    /**
     * Service Supply Method.
     * @nullable
     */
    serviceSupplyMethod?: BoServiceSupplyMethods;
    /**
     * Service Payment Method.
     * @nullable
     */
    servicePaymentMethod?: BoServicePaymentMethods;
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
     * Use Weight In Calculation.
     * @nullable
     */
    useWeightInCalculation?: BoYesNoEnum;
    /**
     * Intrastat Relevant.
     * @nullable
     */
    intrastatRelevant?: BoYesNoEnum;
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
export declare class ItemIntrastatExtensionField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ItemIntrastatExtension> {
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
     * Representation of the [[ItemIntrastatExtension.type]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    type: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[ItemIntrastatExtension.serviceSupplyMethod]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    serviceSupplyMethod: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[ItemIntrastatExtension.servicePaymentMethod]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    servicePaymentMethod: ComplexTypeEnumPropertyField<EntityT>;
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
     * Representation of the [[ItemIntrastatExtension.useWeightInCalculation]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    useWeightInCalculation: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[ItemIntrastatExtension.intrastatRelevant]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    intrastatRelevant: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[ItemIntrastatExtension.statisticalCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    statisticalCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of ItemIntrastatExtensionField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace ItemIntrastatExtension {
    /**
     * Metadata information on all properties of the `ItemIntrastatExtension` complex type.
     */
    const _propertyMetadata: PropertyMetadata<ItemIntrastatExtension>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): ItemIntrastatExtension;
}
//# sourceMappingURL=ItemIntrastatExtension.d.ts.map