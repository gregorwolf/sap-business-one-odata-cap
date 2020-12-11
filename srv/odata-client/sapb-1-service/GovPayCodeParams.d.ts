import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * GovPayCodeParams
 */
export interface GovPayCodeParams {
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
 * @deprecated Since v1.6.0. Use [[GovPayCodeParams.build]] instead.
 */
export declare function createGovPayCodeParams(json: any): GovPayCodeParams;
/**
 * GovPayCodeParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class GovPayCodeParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, GovPayCodeParams> {
    /**
     * Representation of the [[GovPayCodeParams.absId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    absId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[GovPayCodeParams.code]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    code: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of GovPayCodeParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace GovPayCodeParams {
    /**
     * Metadata information on all properties of the `GovPayCodeParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<GovPayCodeParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): GovPayCodeParams;
}
//# sourceMappingURL=GovPayCodeParams.d.ts.map