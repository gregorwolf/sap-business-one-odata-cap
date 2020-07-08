import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * IndividualCounter
 */
export interface IndividualCounter {
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
 * @deprecated Since v1.6.0. Use [[IndividualCounter.build]] instead.
 */
export declare function createIndividualCounter(json: any): IndividualCounter;
/**
 * IndividualCounterField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class IndividualCounterField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[IndividualCounter.documentEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    documentEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[IndividualCounter.counterId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    counterId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[IndividualCounter.counterName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    counterName: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[IndividualCounter.counterNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    counterNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[IndividualCounter.counterVisualOrder]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    counterVisualOrder: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace IndividualCounter {
    function build(json: {
        [keys: string]: FieldType;
    }): IndividualCounter;
}
//# sourceMappingURL=IndividualCounter.d.ts.map