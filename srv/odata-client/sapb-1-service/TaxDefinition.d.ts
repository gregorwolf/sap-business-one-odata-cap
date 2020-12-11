import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * TaxDefinition
 */
export interface TaxDefinition {
    /**
     * Effectivefrom.
     * @nullable
     */
    effectivefrom?: Moment;
    /**
     * Rate.
     * @nullable
     */
    rate?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[TaxDefinition.build]] instead.
 */
export declare function createTaxDefinition(json: any): TaxDefinition;
/**
 * TaxDefinitionField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class TaxDefinitionField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, TaxDefinition> {
    /**
     * Representation of the [[TaxDefinition.effectivefrom]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    effectivefrom: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[TaxDefinition.rate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    rate: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of TaxDefinitionField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace TaxDefinition {
    /**
     * Metadata information on all properties of the `TaxDefinition` complex type.
     */
    const _propertyMetadata: PropertyMetadata<TaxDefinition>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): TaxDefinition;
}
//# sourceMappingURL=TaxDefinition.d.ts.map