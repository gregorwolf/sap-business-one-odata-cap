import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * BusinessPartnerPropertyParams
 */
export interface BusinessPartnerPropertyParams {
    /**
     * Property Code.
     * @nullable
     */
    propertyCode?: number;
    /**
     * Property Name.
     * @nullable
     */
    propertyName?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[BusinessPartnerPropertyParams.build]] instead.
 */
export declare function createBusinessPartnerPropertyParams(json: any): BusinessPartnerPropertyParams;
/**
 * BusinessPartnerPropertyParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class BusinessPartnerPropertyParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, BusinessPartnerPropertyParams> {
    /**
     * Representation of the [[BusinessPartnerPropertyParams.propertyCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    propertyCode: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BusinessPartnerPropertyParams.propertyName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    propertyName: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of BusinessPartnerPropertyParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace BusinessPartnerPropertyParams {
    /**
     * Metadata information on all properties of the `BusinessPartnerPropertyParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<BusinessPartnerPropertyParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): BusinessPartnerPropertyParams;
}
//# sourceMappingURL=BusinessPartnerPropertyParams.d.ts.map