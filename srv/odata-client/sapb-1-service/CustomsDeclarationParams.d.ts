import { ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * CustomsDeclarationParams
 */
export interface CustomsDeclarationParams {
    /**
     * Ccd Num.
     * @nullable
     */
    ccdNum?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[CustomsDeclarationParams.build]] instead.
 */
export declare function createCustomsDeclarationParams(json: any): CustomsDeclarationParams;
/**
 * CustomsDeclarationParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class CustomsDeclarationParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, CustomsDeclarationParams> {
    /**
     * Representation of the [[CustomsDeclarationParams.ccdNum]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    ccdNum: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of CustomsDeclarationParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace CustomsDeclarationParams {
    /**
     * Metadata information on all properties of the `CustomsDeclarationParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<CustomsDeclarationParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): CustomsDeclarationParams;
}
//# sourceMappingURL=CustomsDeclarationParams.d.ts.map