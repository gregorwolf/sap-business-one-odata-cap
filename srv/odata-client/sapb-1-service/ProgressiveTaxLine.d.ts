import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
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
export declare class ProgressiveTaxLineField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
}
export declare namespace ProgressiveTaxLine {
    function build(json: {
        [keys: string]: FieldType;
    }): ProgressiveTaxLine;
}
//# sourceMappingURL=ProgressiveTaxLine.d.ts.map