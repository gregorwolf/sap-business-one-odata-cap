import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * TeamCounter
 */
export interface TeamCounter {
    /**
     * Document Entry.
     * @nullable
     */
    documentEntry?: number;
    /**
     * Counter Id.
     * @nullable
     */
    counterId?: number;
    /**
     * Counter Name.
     * @nullable
     */
    counterName?: string;
    /**
     * Counter Number.
     * @nullable
     */
    counterNumber?: number;
    /**
     * Counter Visual Order.
     * @nullable
     */
    counterVisualOrder?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[TeamCounter.build]] instead.
 */
export declare function createTeamCounter(json: any): TeamCounter;
/**
 * TeamCounterField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class TeamCounterField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[TeamCounter.documentEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    documentEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[TeamCounter.counterId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    counterId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[TeamCounter.counterName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    counterName: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[TeamCounter.counterNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    counterNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[TeamCounter.counterVisualOrder]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    counterVisualOrder: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace TeamCounter {
    function build(json: {
        [keys: string]: FieldType;
    }): TeamCounter;
}
//# sourceMappingURL=TeamCounter.d.ts.map