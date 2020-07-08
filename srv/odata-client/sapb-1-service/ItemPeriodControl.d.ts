import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
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
export declare class ItemPeriodControlField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
     * Representation of the [[ItemPeriodControl.factor]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    factor: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ItemPeriodControl.actualUnits]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    actualUnits: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace ItemPeriodControl {
    function build(json: {
        [keys: string]: FieldType;
    }): ItemPeriodControl;
}
//# sourceMappingURL=ItemPeriodControl.d.ts.map