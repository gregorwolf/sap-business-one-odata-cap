import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * BusinessPartnerGroupParams
 */
export interface BusinessPartnerGroupParams {
    /**
     * Code.
     * @nullable
     */
    code?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[BusinessPartnerGroupParams.build]] instead.
 */
export declare function createBusinessPartnerGroupParams(json: any): BusinessPartnerGroupParams;
/**
 * BusinessPartnerGroupParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class BusinessPartnerGroupParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, BusinessPartnerGroupParams> {
    /**
     * Representation of the [[BusinessPartnerGroupParams.code]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    code: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of BusinessPartnerGroupParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace BusinessPartnerGroupParams {
    /**
     * Metadata information on all properties of the `BusinessPartnerGroupParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<BusinessPartnerGroupParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): BusinessPartnerGroupParams;
}
//# sourceMappingURL=BusinessPartnerGroupParams.d.ts.map