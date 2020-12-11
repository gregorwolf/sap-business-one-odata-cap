import { Moment } from 'moment';
import { BoYesNoEnum } from './BoYesNoEnum';
import { ComplexTypeDatePropertyField, ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ComplexTypeTimePropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, Time } from '@sap-cloud-sdk/core';
/**
 * ItemCycleCount
 */
export interface ItemCycleCount {
    /**
     * Cycle Code.
     * @nullable
     */
    cycleCode?: number;
    /**
     * Alert.
     * @nullable
     */
    alert?: BoYesNoEnum;
    /**
     * Next Counting Date.
     * @nullable
     */
    nextCountingDate?: Moment;
    /**
     * Alert Time.
     * @nullable
     */
    alertTime?: Time;
    /**
     * Destination User.
     * @nullable
     */
    destinationUser?: number;
    /**
     * Warehouse Code.
     * @nullable
     */
    warehouseCode?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[ItemCycleCount.build]] instead.
 */
export declare function createItemCycleCount(json: any): ItemCycleCount;
/**
 * ItemCycleCountField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ItemCycleCountField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ItemCycleCount> {
    /**
     * Representation of the [[ItemCycleCount.cycleCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    cycleCode: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ItemCycleCount.alert]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    alert: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[ItemCycleCount.nextCountingDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    nextCountingDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[ItemCycleCount.alertTime]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    alertTime: ComplexTypeTimePropertyField<EntityT>;
    /**
     * Representation of the [[ItemCycleCount.destinationUser]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    destinationUser: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ItemCycleCount.warehouseCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    warehouseCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of ItemCycleCountField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace ItemCycleCount {
    /**
     * Metadata information on all properties of the `ItemCycleCount` complex type.
     */
    const _propertyMetadata: PropertyMetadata<ItemCycleCount>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): ItemCycleCount;
}
//# sourceMappingURL=ItemCycleCount.d.ts.map