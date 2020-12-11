import { TaxCodeDeterminationTcdKeyFieldValuePeriod } from './TaxCodeDeterminationTcdKeyFieldValuePeriod';
import { TaxCodeDeterminationTcdKeyFieldValueDefaultWt } from './TaxCodeDeterminationTcdKeyFieldValueDefaultWt';
import { CollectionField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
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
    taxCodeDeterminationTcdKeyFieldValuePeriods?: TaxCodeDeterminationTcdKeyFieldValuePeriod[];
    /**
     * Tax Code Determination Tcd Key Field Value Default W Ts.
     * @nullable
     */
    taxCodeDeterminationTcdKeyFieldValueDefaultWTs?: TaxCodeDeterminationTcdKeyFieldValueDefaultWt[];
}
/**
 * @deprecated Since v1.6.0. Use [[TaxCodeDeterminationTcdKeyFieldValue.build]] instead.
 */
export declare function createTaxCodeDeterminationTcdKeyFieldValue(json: any): TaxCodeDeterminationTcdKeyFieldValue;
/**
 * TaxCodeDeterminationTcdKeyFieldValueField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class TaxCodeDeterminationTcdKeyFieldValueField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, TaxCodeDeterminationTcdKeyFieldValue> {
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
    taxCodeDeterminationTcdKeyFieldValuePeriods: CollectionField<EntityT, TaxCodeDeterminationTcdKeyFieldValuePeriod>;
    /**
     * Representation of the [[TaxCodeDeterminationTcdKeyFieldValue.taxCodeDeterminationTcdKeyFieldValueDefaultWTs]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    taxCodeDeterminationTcdKeyFieldValueDefaultWTs: CollectionField<EntityT, TaxCodeDeterminationTcdKeyFieldValueDefaultWt>;
    /**
     * Creates an instance of TaxCodeDeterminationTcdKeyFieldValueField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace TaxCodeDeterminationTcdKeyFieldValue {
    /**
     * Metadata information on all properties of the `TaxCodeDeterminationTcdKeyFieldValue` complex type.
     */
    const _propertyMetadata: PropertyMetadata<TaxCodeDeterminationTcdKeyFieldValue>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType | TaxCodeDeterminationTcdKeyFieldValueDefaultWt | TaxCodeDeterminationTcdKeyFieldValuePeriod;
    }): TaxCodeDeterminationTcdKeyFieldValue;
}
//# sourceMappingURL=TaxCodeDeterminationTcdKeyFieldValue.d.ts.map