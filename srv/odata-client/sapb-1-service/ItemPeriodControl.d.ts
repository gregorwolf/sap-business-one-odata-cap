import { BoYesNoEnum } from './BoYesNoEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * ItemPeriodControl
 */
export interface ItemPeriodControl {
    /**
     * Fiscal Year.
     * @nullable
     */
    fiscalYear?: string;
    /**
     * Depreciation Area.
     * @nullable
     */
    depreciationArea?: string;
    /**
     * Sub Period.
     * @nullable
     */
    subPeriod?: number;
    /**
     * Depreciation Status.
     * @nullable
     */
    depreciationStatus?: BoYesNoEnum;
    /**
     * Factor.
     * @nullable
     */
    factor?: number;
    /**
     * Actual Units.
     * @nullable
     */
    actualUnits?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[ItemPeriodControl.build]] instead.
 */
export declare function createItemPeriodControl(json: any): ItemPeriodControl;
/**
 * ItemPeriodControlField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ItemPeriodControlField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ItemPeriodControl> {
    /**
     * Representation of the [[ItemPeriodControl.fiscalYear]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    fiscalYear: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ItemPeriodControl.depreciationArea]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    depreciationArea: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ItemPeriodControl.subPeriod]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    subPeriod: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ItemPeriodControl.depreciationStatus]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    depreciationStatus: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[ItemPeriodControl.factor]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    factor: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ItemPeriodControl.actualUnits]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    actualUnits: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of ItemPeriodControlField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace ItemPeriodControl {
    /**
     * Metadata information on all properties of the `ItemPeriodControl` complex type.
     */
    const _propertyMetadata: PropertyMetadata<ItemPeriodControl>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): ItemPeriodControl;
}
//# sourceMappingURL=ItemPeriodControl.d.ts.map