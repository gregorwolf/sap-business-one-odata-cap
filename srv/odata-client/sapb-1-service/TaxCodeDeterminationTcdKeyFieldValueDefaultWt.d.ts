import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * TaxCodeDeterminationTcdKeyFieldValueDefaultWt
 */
export interface TaxCodeDeterminationTcdKeyFieldValueDefaultWt {
    /**
     * Abs Id.
     * @nullable
     */
    absId?: number;
    /**
     * Wt Code.
     * @nullable
     */
    wtCode?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[TaxCodeDeterminationTcdKeyFieldValueDefaultWt.build]] instead.
 */
export declare function createTaxCodeDeterminationTcdKeyFieldValueDefaultWt(json: any): TaxCodeDeterminationTcdKeyFieldValueDefaultWt;
/**
 * TaxCodeDeterminationTcdKeyFieldValueDefaultWtField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class TaxCodeDeterminationTcdKeyFieldValueDefaultWtField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, TaxCodeDeterminationTcdKeyFieldValueDefaultWt> {
    /**
     * Representation of the [[TaxCodeDeterminationTcdKeyFieldValueDefaultWt.absId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    absId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[TaxCodeDeterminationTcdKeyFieldValueDefaultWt.wtCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    wtCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of TaxCodeDeterminationTcdKeyFieldValueDefaultWtField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace TaxCodeDeterminationTcdKeyFieldValueDefaultWt {
    /**
     * Metadata information on all properties of the `TaxCodeDeterminationTcdKeyFieldValueDefaultWt` complex type.
     */
    const _propertyMetadata: PropertyMetadata<TaxCodeDeterminationTcdKeyFieldValueDefaultWt>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): TaxCodeDeterminationTcdKeyFieldValueDefaultWt;
}
//# sourceMappingURL=TaxCodeDeterminationTcdKeyFieldValueDefaultWt.d.ts.map