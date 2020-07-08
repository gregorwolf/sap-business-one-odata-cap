import { Moment } from 'moment';
import { TaxCodeDeterminationTcdKeyFieldValuePeriodByUsage, TaxCodeDeterminationTcdKeyFieldValuePeriodByUsageField } from './TaxCodeDeterminationTcdKeyFieldValuePeriodByUsage';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * TaxCodeDeterminationTcdKeyFieldValuePeriod
 */
export interface TaxCodeDeterminationTcdKeyFieldValuePeriod {
    /**
     * Abs Id.
     * @nullable
     */
    absId?: number;
    /**
     * Efct From.
     * @nullable
     */
    efctFrom?: Moment;
    /**
     * Efct To.
     * @nullable
     */
    efctTo?: Moment;
    /**
     * Tax Code.
     * @nullable
     */
    taxCode?: string;
    /**
     * Tax Code Determination Tcd Key Field Value Period By Usages.
     * @nullable
     */
    taxCodeDeterminationTcdKeyFieldValuePeriodByUsages?: TaxCodeDeterminationTcdKeyFieldValuePeriodByUsage;
}
/**
 * @deprecated Since v1.6.0. Use [[TaxCodeDeterminationTcdKeyFieldValuePeriod.build]] instead.
 */
export declare function createTaxCodeDeterminationTcdKeyFieldValuePeriod(json: any): TaxCodeDeterminationTcdKeyFieldValuePeriod;
/**
 * TaxCodeDeterminationTcdKeyFieldValuePeriodField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class TaxCodeDeterminationTcdKeyFieldValuePeriodField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[TaxCodeDeterminationTcdKeyFieldValuePeriod.absId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    absId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[TaxCodeDeterminationTcdKeyFieldValuePeriod.efctFrom]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    efctFrom: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[TaxCodeDeterminationTcdKeyFieldValuePeriod.efctTo]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    efctTo: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[TaxCodeDeterminationTcdKeyFieldValuePeriod.taxCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    taxCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[TaxCodeDeterminationTcdKeyFieldValuePeriod.taxCodeDeterminationTcdKeyFieldValuePeriodByUsages]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    taxCodeDeterminationTcdKeyFieldValuePeriodByUsages: TaxCodeDeterminationTcdKeyFieldValuePeriodByUsageField<EntityT>;
}
export declare namespace TaxCodeDeterminationTcdKeyFieldValuePeriod {
    function build(json: {
        [keys: string]: FieldType | TaxCodeDeterminationTcdKeyFieldValuePeriodByUsage;
    }): TaxCodeDeterminationTcdKeyFieldValuePeriod;
}
//# sourceMappingURL=TaxCodeDeterminationTcdKeyFieldValuePeriod.d.ts.map