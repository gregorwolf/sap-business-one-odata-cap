import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * TaxCodeDeterminationTcdKeyFieldValuePeriodByUsage
 */
export interface TaxCodeDeterminationTcdKeyFieldValuePeriodByUsage {
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
 * @deprecated Since v1.6.0. Use [[TaxCodeDeterminationTcdKeyFieldValuePeriodByUsage.build]] instead.
 */
export declare function createTaxCodeDeterminationTcdKeyFieldValuePeriodByUsage(json: any): TaxCodeDeterminationTcdKeyFieldValuePeriodByUsage;
/**
 * TaxCodeDeterminationTcdKeyFieldValuePeriodByUsageField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class TaxCodeDeterminationTcdKeyFieldValuePeriodByUsageField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[TaxCodeDeterminationTcdKeyFieldValuePeriodByUsage.absId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    absId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[TaxCodeDeterminationTcdKeyFieldValuePeriodByUsage.usageCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    usageCode: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[TaxCodeDeterminationTcdKeyFieldValuePeriodByUsage.taxCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    taxCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[TaxCodeDeterminationTcdKeyFieldValuePeriodByUsage.expTaxCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    expTaxCode: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace TaxCodeDeterminationTcdKeyFieldValuePeriodByUsage {
    function build(json: {
        [keys: string]: FieldType;
    }): TaxCodeDeterminationTcdKeyFieldValuePeriodByUsage;
}
//# sourceMappingURL=TaxCodeDeterminationTcdKeyFieldValuePeriodByUsage.d.ts.map