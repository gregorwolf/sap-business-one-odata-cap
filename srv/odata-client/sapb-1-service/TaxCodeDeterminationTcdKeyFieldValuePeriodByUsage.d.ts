import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
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
export declare class TaxCodeDeterminationTcdKeyFieldValuePeriodByUsageField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, TaxCodeDeterminationTcdKeyFieldValuePeriodByUsage> {
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
    /**
     * Creates an instance of TaxCodeDeterminationTcdKeyFieldValuePeriodByUsageField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace TaxCodeDeterminationTcdKeyFieldValuePeriodByUsage {
    /**
     * Metadata information on all properties of the `TaxCodeDeterminationTcdKeyFieldValuePeriodByUsage` complex type.
     */
    const _propertyMetadata: PropertyMetadata<TaxCodeDeterminationTcdKeyFieldValuePeriodByUsage>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): TaxCodeDeterminationTcdKeyFieldValuePeriodByUsage;
}
//# sourceMappingURL=TaxCodeDeterminationTcdKeyFieldValuePeriodByUsage.d.ts.map