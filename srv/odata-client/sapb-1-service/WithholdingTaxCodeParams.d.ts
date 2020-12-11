import { ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * WithholdingTaxCodeParams
 */
export interface WithholdingTaxCodeParams {
    /**
     * Wt Code.
     * @nullable
     */
    wtCode?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[WithholdingTaxCodeParams.build]] instead.
 */
export declare function createWithholdingTaxCodeParams(json: any): WithholdingTaxCodeParams;
/**
 * WithholdingTaxCodeParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class WithholdingTaxCodeParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, WithholdingTaxCodeParams> {
    /**
     * Representation of the [[WithholdingTaxCodeParams.wtCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    wtCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of WithholdingTaxCodeParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace WithholdingTaxCodeParams {
    /**
     * Metadata information on all properties of the `WithholdingTaxCodeParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<WithholdingTaxCodeParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): WithholdingTaxCodeParams;
}
//# sourceMappingURL=WithholdingTaxCodeParams.d.ts.map