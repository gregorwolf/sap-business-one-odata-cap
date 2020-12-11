import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * SalesTaxAuthorityParams
 */
export interface SalesTaxAuthorityParams {
    /**
     * Code.
     * @nullable
     */
    code?: string;
    /**
     * Type.
     * @nullable
     */
    type?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[SalesTaxAuthorityParams.build]] instead.
 */
export declare function createSalesTaxAuthorityParams(json: any): SalesTaxAuthorityParams;
/**
 * SalesTaxAuthorityParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class SalesTaxAuthorityParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, SalesTaxAuthorityParams> {
    /**
     * Representation of the [[SalesTaxAuthorityParams.code]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    code: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[SalesTaxAuthorityParams.type]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    type: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of SalesTaxAuthorityParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace SalesTaxAuthorityParams {
    /**
     * Metadata information on all properties of the `SalesTaxAuthorityParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<SalesTaxAuthorityParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): SalesTaxAuthorityParams;
}
//# sourceMappingURL=SalesTaxAuthorityParams.d.ts.map