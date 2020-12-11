import { Moment } from 'moment';
import { TaxCodeDeterminationTcdKeyFieldValuePeriodByUsage } from './TaxCodeDeterminationTcdKeyFieldValuePeriodByUsage';
import { CollectionField, ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
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
    taxCodeDeterminationTcdKeyFieldValuePeriodByUsages?: TaxCodeDeterminationTcdKeyFieldValuePeriodByUsage[];
}
/**
 * @deprecated Since v1.6.0. Use [[TaxCodeDeterminationTcdKeyFieldValuePeriod.build]] instead.
 */
export declare function createTaxCodeDeterminationTcdKeyFieldValuePeriod(json: any): TaxCodeDeterminationTcdKeyFieldValuePeriod;
/**
 * TaxCodeDeterminationTcdKeyFieldValuePeriodField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class TaxCodeDeterminationTcdKeyFieldValuePeriodField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, TaxCodeDeterminationTcdKeyFieldValuePeriod> {
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
    taxCodeDeterminationTcdKeyFieldValuePeriodByUsages: CollectionField<EntityT, TaxCodeDeterminationTcdKeyFieldValuePeriodByUsage>;
    /**
     * Creates an instance of TaxCodeDeterminationTcdKeyFieldValuePeriodField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace TaxCodeDeterminationTcdKeyFieldValuePeriod {
    /**
     * Metadata information on all properties of the `TaxCodeDeterminationTcdKeyFieldValuePeriod` complex type.
     */
    const _propertyMetadata: PropertyMetadata<TaxCodeDeterminationTcdKeyFieldValuePeriod>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType | TaxCodeDeterminationTcdKeyFieldValuePeriodByUsage;
    }): TaxCodeDeterminationTcdKeyFieldValuePeriod;
}
//# sourceMappingURL=TaxCodeDeterminationTcdKeyFieldValuePeriod.d.ts.map