import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
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
export declare class RelationshipParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[RelationshipParams.relationshipCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    relationshipCode: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace RelationshipParams {
    function build(json: {
        [keys: string]: FieldType;
    }): RelationshipParams;
}
//# sourceMappingURL=RelationshipParams.d.ts.map