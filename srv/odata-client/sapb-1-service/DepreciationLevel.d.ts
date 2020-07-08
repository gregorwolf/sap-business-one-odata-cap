import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
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
export declare class DepreciationLevelField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[DepreciationLevel.level]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    level: ComplexTypeNumberPropertyField<EntityT>;
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
}
export declare namespace DepreciationLevel {
    function build(json: {
        [keys: string]: FieldType;
    }): DepreciationLevel;
}
//# sourceMappingURL=DepreciationLevel.d.ts.map