import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ComplexTypeTimePropertyField, Entity, FieldType, Time } from '@sap-cloud-sdk/core/v4';
/**
 * CycleCountDeterminationSetup
 */
export interface CycleCountDeterminationSetup {
    /**
     * Warehouse Code.
     * @nullable
     */
    warehouseCode?: string;
    /**
     * Entry.
     * @nullable
     */
    entry?: number;
    /**
     * Cycle Code.
     * @nullable
     */
    cycleCode?: number;
    /**
     * Destination User.
     * @nullable
     */
    destinationUser?: number;
    /**
     * Next Counting Date.
     * @nullable
     */
    nextCountingDate?: Moment;
    /**
     * Time.
     * @nullable
     */
    time?: Time;
}
/**
 * @deprecated Since v1.6.0. Use [[CycleCountDeterminationSetup.build]] instead.
 */
export declare function createCycleCountDeterminationSetup(json: any): CycleCountDeterminationSetup;
/**
 * CycleCountDeterminationSetupField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class CycleCountDeterminationSetupField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[CycleCountDeterminationSetup.warehouseCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    warehouseCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[CycleCountDeterminationSetup.entry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    entry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[CycleCountDeterminationSetup.cycleCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    cycleCode: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[CycleCountDeterminationSetup.destinationUser]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    destinationUser: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[CycleCountDeterminationSetup.nextCountingDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    nextCountingDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[CycleCountDeterminationSetup.time]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    time: ComplexTypeTimePropertyField<EntityT>;
}
export declare namespace CycleCountDeterminationSetup {
    function build(json: {
        [keys: string]: FieldType;
    }): CycleCountDeterminationSetup;
}
//# sourceMappingURL=CycleCountDeterminationSetup.d.ts.map