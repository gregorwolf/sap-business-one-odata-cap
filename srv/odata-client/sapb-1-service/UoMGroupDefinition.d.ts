import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * UoMGroupDefinition
 */
export interface UoMGroupDefinition {
    /**
     * Alternate Uo M.
     * @nullable
     */
    alternateUoM?: number;
    /**
     * Alternate Quantity.
     * @nullable
     */
    alternateQuantity?: number;
    /**
     * Base Quantity.
     * @nullable
     */
    baseQuantity?: number;
    /**
     * Weight Factor.
     * @nullable
     */
    weightFactor?: number;
    /**
     * Udf Factor.
     * @nullable
     */
    udfFactor?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[UoMGroupDefinition.build]] instead.
 */
export declare function createUoMGroupDefinition(json: any): UoMGroupDefinition;
/**
 * UoMGroupDefinitionField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class UoMGroupDefinitionField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[UoMGroupDefinition.alternateUoM]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    alternateUoM: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[UoMGroupDefinition.alternateQuantity]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    alternateQuantity: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[UoMGroupDefinition.baseQuantity]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    baseQuantity: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[UoMGroupDefinition.weightFactor]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    weightFactor: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[UoMGroupDefinition.udfFactor]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    udfFactor: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace UoMGroupDefinition {
    function build(json: {
        [keys: string]: FieldType;
    }): UoMGroupDefinition;
}
//# sourceMappingURL=UoMGroupDefinition.d.ts.map