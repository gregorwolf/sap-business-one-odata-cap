import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * RelationshipParams
 */
export interface RelationshipParams {
    /**
     * Relationship Code.
     * @nullable
     */
    relationshipCode?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[RelationshipParams.build]] instead.
 */
export declare function createRelationshipParams(json: any): RelationshipParams;
/**
 * RelationshipParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class RelationshipParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, RelationshipParams> {
    /**
     * Representation of the [[RelationshipParams.relationshipCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    relationshipCode: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of RelationshipParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace RelationshipParams {
    /**
     * Metadata information on all properties of the `RelationshipParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<RelationshipParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): RelationshipParams;
}
//# sourceMappingURL=RelationshipParams.d.ts.map