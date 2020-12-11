import { ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * BusinessPartnerParams
 */
export interface BusinessPartnerParams {
    /**
     * Card Code.
     * @nullable
     */
    cardCode?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[BusinessPartnerParams.build]] instead.
 */
export declare function createBusinessPartnerParams(json: any): BusinessPartnerParams;
/**
 * BusinessPartnerParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class BusinessPartnerParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, BusinessPartnerParams> {
    /**
     * Representation of the [[BusinessPartnerParams.cardCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    cardCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of BusinessPartnerParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace BusinessPartnerParams {
    /**
     * Metadata information on all properties of the `BusinessPartnerParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<BusinessPartnerParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): BusinessPartnerParams;
}
//# sourceMappingURL=BusinessPartnerParams.d.ts.map