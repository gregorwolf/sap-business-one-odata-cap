import { CounterTypeEnum } from './CounterTypeEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
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
     * Counter Type.
     * @nullable
     */
    counterType?: CounterTypeEnum;
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
export declare class IndividualCounterField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, IndividualCounter> {
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
     * Representation of the [[IndividualCounter.counterType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    counterType: ComplexTypeEnumPropertyField<EntityT>;
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
    /**
     * Creates an instance of IndividualCounterField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace IndividualCounter {
    /**
     * Metadata information on all properties of the `IndividualCounter` complex type.
     */
    const _propertyMetadata: PropertyMetadata<IndividualCounter>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): IndividualCounter;
}
//# sourceMappingURL=IndividualCounter.d.ts.map