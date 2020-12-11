import { DepreciationCalculationBaseEnum } from './DepreciationCalculationBaseEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * DepreciationLevel
 */
export interface DepreciationLevel {
    /**
     * Level.
     * @nullable
     */
    level?: number;
    /**
     * Depreciation Calculation Base.
     * @nullable
     */
    depreciationCalculationBase?: DepreciationCalculationBaseEnum;
    /**
     * Number Of Years.
     * @nullable
     */
    numberOfYears?: number;
    /**
     * Percentage.
     * @nullable
     */
    percentage?: number;
    /**
     * Amount.
     * @nullable
     */
    amount?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[DepreciationLevel.build]] instead.
 */
export declare function createDepreciationLevel(json: any): DepreciationLevel;
/**
 * DepreciationLevelField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class DepreciationLevelField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, DepreciationLevel> {
    /**
     * Representation of the [[DepreciationLevel.level]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    level: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DepreciationLevel.depreciationCalculationBase]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    depreciationCalculationBase: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[DepreciationLevel.numberOfYears]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    numberOfYears: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DepreciationLevel.percentage]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    percentage: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DepreciationLevel.amount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    amount: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of DepreciationLevelField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace DepreciationLevel {
    /**
     * Metadata information on all properties of the `DepreciationLevel` complex type.
     */
    const _propertyMetadata: PropertyMetadata<DepreciationLevel>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): DepreciationLevel;
}
//# sourceMappingURL=DepreciationLevel.d.ts.map