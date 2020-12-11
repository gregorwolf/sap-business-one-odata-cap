import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * FormattedSearchParams
 */
export interface FormattedSearchParams {
    /**
     * Index.
     * @nullable
     */
    index?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[FormattedSearchParams.build]] instead.
 */
export declare function createFormattedSearchParams(json: any): FormattedSearchParams;
/**
 * FormattedSearchParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class FormattedSearchParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, FormattedSearchParams> {
    /**
     * Representation of the [[FormattedSearchParams.index]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    index: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of FormattedSearchParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace FormattedSearchParams {
    /**
     * Metadata information on all properties of the `FormattedSearchParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<FormattedSearchParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): FormattedSearchParams;
}
//# sourceMappingURL=FormattedSearchParams.d.ts.map