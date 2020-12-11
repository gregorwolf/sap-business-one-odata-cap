import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * NfTaxCategoryParams
 */
export interface NfTaxCategoryParams {
    /**
     * Abs Id.
     * @nullable
     */
    absId?: number;
    /**
     * Code.
     * @nullable
     */
    code?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[NfTaxCategoryParams.build]] instead.
 */
export declare function createNfTaxCategoryParams(json: any): NfTaxCategoryParams;
/**
 * NfTaxCategoryParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class NfTaxCategoryParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, NfTaxCategoryParams> {
    /**
     * Representation of the [[NfTaxCategoryParams.absId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    absId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[NfTaxCategoryParams.code]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    code: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of NfTaxCategoryParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace NfTaxCategoryParams {
    /**
     * Metadata information on all properties of the `NfTaxCategoryParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<NfTaxCategoryParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): NfTaxCategoryParams;
}
//# sourceMappingURL=NfTaxCategoryParams.d.ts.map