import { TaxCodeDeterminationTcdKeyFieldValuePeriod, TaxCodeDeterminationTcdKeyFieldValuePeriodField } from './TaxCodeDeterminationTcdKeyFieldValuePeriod';
import { TaxCodeDeterminationTcdKeyFieldValueDefaultWt, TaxCodeDeterminationTcdKeyFieldValueDefaultWtField } from './TaxCodeDeterminationTcdKeyFieldValueDefaultWt';
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * TaxCodeDeterminationTcdKeyFieldValue
 */
export interface TaxCodeDeterminationTcdKeyFieldValue {
    /**
     * Abs Id.
     * @nullable
     */
    absId?: number;
    /**
     * Disp Order.
     * @nullable
     */
    dispOrder?: number;
    /**
     * Key Fld 1 V.
     * @nullable
     */
    keyFld1V?: string;
    /**
     * Key Fld 2 V.
     * @nullable
     */
    keyFld2V?: string;
    /**
     * Key Fld 3 V.
     * @nullable
     */
    keyFld3V?: string;
    /**
     * Key Fld 4 V.
     * @nullable
     */
    keyFld4V?: string;
    /**
     * Tax Code Determination Tcd Key Field Value Periods.
     * @nullable
     */
    taxCodeDeterminationTcdKeyFieldValuePeriods?: TaxCodeDeterminationTcdKeyFieldValuePeriod;
    /**
     * Tax Code Determination Tcd Key Field Value Default W Ts.
     * @nullable
     */
    taxCodeDeterminationTcdKeyFieldValueDefaultWTs?: TaxCodeDeterminationTcdKeyFieldValueDefaultWt;
}
/**
 * @deprecated Since v1.6.0. Use [[TaxCodeDeterminationTcdKeyFieldValue.build]] instead.
 */
export declare function createTaxCodeDeterminationTcdKeyFieldValue(json: any): TaxCodeDeterminationTcdKeyFieldValue;
/**
 * TaxCodeDeterminationTcdKeyFieldValueField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class TaxCodeDeterminationTcdKeyFieldValueField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[TaxCodeDeterminationTcdKeyFieldValue.absId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    absId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[TaxCodeDeterminationTcdKeyFieldValue.dispOrder]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    dispOrder: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[TaxCodeDeterminationTcdKeyFieldValue.keyFld1V]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    keyFld1V: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[TaxCodeDeterminationTcdKeyFieldValue.keyFld2V]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    keyFld2V: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[TaxCodeDeterminationTcdKeyFieldValue.keyFld3V]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    keyFld3V: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[TaxCodeDeterminationTcdKeyFieldValue.keyFld4V]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    keyFld4V: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[TaxCodeDeterminationTcdKeyFieldValue.taxCodeDeterminationTcdKeyFieldValuePeriods]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    taxCodeDeterminationTcdKeyFieldValuePeriods: TaxCodeDeterminationTcdKeyFieldValuePeriodField<EntityT>;
    /**
     * Representation of the [[TaxCodeDeterminationTcdKeyFieldValue.taxCodeDeterminationTcdKeyFieldValueDefaultWTs]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    taxCodeDeterminationTcdKeyFieldValueDefaultWTs: TaxCodeDeterminationTcdKeyFieldValueDefaultWtField<EntityT>;
}
export declare namespace TaxCodeDeterminationTcdKeyFieldValue {
    function build(json: {
        [keys: string]: FieldType | TaxCodeDeterminationTcdKeyFieldValueDefaultWt | TaxCodeDeterminationTcdKeyFieldValuePeriod;
    }): TaxCodeDeterminationTcdKeyFieldValue;
}
//# sourceMappingURL=TaxCodeDeterminationTcdKeyFieldValue.d.ts.map