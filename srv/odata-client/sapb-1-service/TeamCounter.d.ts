import { CounterTypeEnum } from './CounterTypeEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
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
 * @deprecated Since v1.6.0. Use [[TeamCounter.build]] instead.
 */
export declare function createTeamCounter(json: any): TeamCounter;
/**
 * TeamCounterField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class TeamCounterField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, TeamCounter> {
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
     * Representation of the [[TeamCounter.counterType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    counterType: ComplexTypeEnumPropertyField<EntityT>;
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
    /**
     * Creates an instance of TeamCounterField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace TeamCounter {
    /**
     * Metadata information on all properties of the `TeamCounter` complex type.
     */
    const _propertyMetadata: PropertyMetadata<TeamCounter>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): TeamCounter;
}
//# sourceMappingURL=TeamCounter.d.ts.map