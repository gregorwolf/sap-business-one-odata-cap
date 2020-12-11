import { ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * VatGroupParams
 */
export interface VatGroupParams {
    /**
     * Code.
     * @nullable
     */
    code?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[VatGroupParams.build]] instead.
 */
export declare function createVatGroupParams(json: any): VatGroupParams;
/**
 * VatGroupParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class VatGroupParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, VatGroupParams> {
    /**
     * Representation of the [[VatGroupParams.code]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    code: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of VatGroupParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace VatGroupParams {
    /**
     * Metadata information on all properties of the `VatGroupParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<VatGroupParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): VatGroupParams;
}
//# sourceMappingURL=VatGroupParams.d.ts.map