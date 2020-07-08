import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * TaxCodeDeterminationTcdByUsage
 */
export interface TaxCodeDeterminationTcdByUsage {
    /**
     * Abs Id.
     * @nullable
     */
    absId?: number;
    /**
     * Usage Code.
     * @nullable
     */
    usageCode?: number;
    /**
     * Tax Code.
     * @nullable
     */
    taxCode?: string;
    /**
     * Exp Tax Code.
     * @nullable
     */
    expTaxCode?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[TaxCodeDeterminationTcdByUsage.build]] instead.
 */
export declare function createTaxCodeDeterminationTcdByUsage(json: any): TaxCodeDeterminationTcdByUsage;
/**
 * TaxCodeDeterminationTcdByUsageField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class TaxCodeDeterminationTcdByUsageField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[TaxCodeDeterminationTcdByUsage.absId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    absId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[TaxCodeDeterminationTcdByUsage.usageCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    usageCode: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[TaxCodeDeterminationTcdByUsage.taxCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    taxCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[TaxCodeDeterminationTcdByUsage.expTaxCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    expTaxCode: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace TaxCodeDeterminationTcdByUsage {
    function build(json: {
        [keys: string]: FieldType;
    }): TaxCodeDeterminationTcdByUsage;
}
//# sourceMappingURL=TaxCodeDeterminationTcdByUsage.d.ts.map