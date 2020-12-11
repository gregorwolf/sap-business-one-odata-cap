import { ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * DunningTermParams
 */
export interface DunningTermParams {
    /**
     * Code.
     * @nullable
     */
    code?: string;
    /**
     * Name.
     * @nullable
     */
    name?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[DunningTermParams.build]] instead.
 */
export declare function createDunningTermParams(json: any): DunningTermParams;
/**
 * DunningTermParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class DunningTermParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, DunningTermParams> {
    /**
     * Representation of the [[DunningTermParams.code]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    code: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[DunningTermParams.name]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    name: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of DunningTermParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace DunningTermParams {
    /**
     * Metadata information on all properties of the `DunningTermParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<DunningTermParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): DunningTermParams;
}
//# sourceMappingURL=DunningTermParams.d.ts.map