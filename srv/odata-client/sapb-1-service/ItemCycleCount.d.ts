import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ComplexTypeTimePropertyField, Entity, FieldType, Time } from '@sap-cloud-sdk/core/v4';
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
export declare class ItemCycleCountField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[ItemCycleCount.cycleCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    cycleCode: ComplexTypeNumberPropertyField<EntityT>;
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
}
export declare namespace ItemCycleCount {
    function build(json: {
        [keys: string]: FieldType;
    }): ItemCycleCount;
}
//# sourceMappingURL=ItemCycleCount.d.ts.map