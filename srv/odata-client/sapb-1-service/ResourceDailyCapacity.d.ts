import { ResourceDailyCapacityWeekdayEnum } from './ResourceDailyCapacityWeekdayEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * ResourceDailyCapacity
 */
export interface ResourceDailyCapacity {
    /**
     * Code.
     * @nullable
     */
    code?: string;
    /**
     * Weekday.
     * @nullable
     */
    weekday?: ResourceDailyCapacityWeekdayEnum;
    /**
     * Factor 1.
     * @nullable
     */
    factor1?: number;
    /**
     * Factor 2.
     * @nullable
     */
    factor2?: number;
    /**
     * Factor 3.
     * @nullable
     */
    factor3?: number;
    /**
     * Factor 4.
     * @nullable
     */
    factor4?: number;
    /**
     * Total.
     * @nullable
     */
    total?: number;
    /**
     * Remarks.
     * @nullable
     */
    remarks?: string;
    /**
     * Single Run.
     * @nullable
     */
    singleRun?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[ResourceDailyCapacity.build]] instead.
 */
export declare function createResourceDailyCapacity(json: any): ResourceDailyCapacity;
/**
 * ResourceDailyCapacityField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ResourceDailyCapacityField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ResourceDailyCapacity> {
    /**
     * Representation of the [[ResourceDailyCapacity.code]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    code: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ResourceDailyCapacity.weekday]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    weekday: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[ResourceDailyCapacity.factor1]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    factor1: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ResourceDailyCapacity.factor2]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    factor2: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ResourceDailyCapacity.factor3]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    factor3: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ResourceDailyCapacity.factor4]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    factor4: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ResourceDailyCapacity.total]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    total: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ResourceDailyCapacity.remarks]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    remarks: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ResourceDailyCapacity.singleRun]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    singleRun: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of ResourceDailyCapacityField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace ResourceDailyCapacity {
    /**
     * Metadata information on all properties of the `ResourceDailyCapacity` complex type.
     */
    const _propertyMetadata: PropertyMetadata<ResourceDailyCapacity>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): ResourceDailyCapacity;
}
//# sourceMappingURL=ResourceDailyCapacity.d.ts.map