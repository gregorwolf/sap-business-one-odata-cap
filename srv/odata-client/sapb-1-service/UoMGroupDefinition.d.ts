import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
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
export declare class UoMGroupDefinitionField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, UoMGroupDefinition> {
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
    /**
     * Creates an instance of UoMGroupDefinitionField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace UoMGroupDefinition {
    /**
     * Metadata information on all properties of the `UoMGroupDefinition` complex type.
     */
    const _propertyMetadata: PropertyMetadata<UoMGroupDefinition>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): UoMGroupDefinition;
}
//# sourceMappingURL=UoMGroupDefinition.d.ts.map