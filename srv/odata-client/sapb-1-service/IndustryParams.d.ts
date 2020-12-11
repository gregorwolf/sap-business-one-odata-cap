import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * IndustryParams
 */
export interface IndustryParams {
    /**
     * Industry Code.
     * @nullable
     */
    industryCode?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[IndustryParams.build]] instead.
 */
export declare function createIndustryParams(json: any): IndustryParams;
/**
 * IndustryParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class IndustryParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, IndustryParams> {
    /**
     * Representation of the [[IndustryParams.industryCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    industryCode: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of IndustryParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace IndustryParams {
    /**
     * Metadata information on all properties of the `IndustryParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<IndustryParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): IndustryParams;
}
//# sourceMappingURL=IndustryParams.d.ts.map