import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * ProgressiveTaxLine
 */
export interface ProgressiveTaxLine {
    /**
     * Tax Rate.
     * @nullable
     */
    taxRate?: number;
    /**
     * Min Amount.
     * @nullable
     */
    minAmount?: number;
    /**
     * Max Amount.
     * @nullable
     */
    maxAmount?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[ProgressiveTaxLine.build]] instead.
 */
export declare function createProgressiveTaxLine(json: any): ProgressiveTaxLine;
/**
 * ProgressiveTaxLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ProgressiveTaxLineField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ProgressiveTaxLine> {
    /**
     * Representation of the [[ProgressiveTaxLine.taxRate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    taxRate: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ProgressiveTaxLine.minAmount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    minAmount: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ProgressiveTaxLine.maxAmount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    maxAmount: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of ProgressiveTaxLineField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace ProgressiveTaxLine {
    /**
     * Metadata information on all properties of the `ProgressiveTaxLine` complex type.
     */
    const _propertyMetadata: PropertyMetadata<ProgressiveTaxLine>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): ProgressiveTaxLine;
}
//# sourceMappingURL=ProgressiveTaxLine.d.ts.map