import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * GtiParams
 */
export interface GtiParams {
    /**
     * Inbound File.
     * @nullable
     */
    inboundFile?: string;
    /**
     * Abs Entry.
     * @nullable
     */
    absEntry?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[GtiParams.build]] instead.
 */
export declare function createGtiParams(json: any): GtiParams;
/**
 * GtiParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class GtiParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, GtiParams> {
    /**
     * Representation of the [[GtiParams.inboundFile]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    inboundFile: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[GtiParams.absEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    absEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of GtiParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace GtiParams {
    /**
     * Metadata information on all properties of the `GtiParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<GtiParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): GtiParams;
}
//# sourceMappingURL=GtiParams.d.ts.map