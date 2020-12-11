import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * ApprovalTemplateQuery
 */
export interface ApprovalTemplateQuery {
    /**
     * Query Id.
     * @nullable
     */
    queryId?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[ApprovalTemplateQuery.build]] instead.
 */
export declare function createApprovalTemplateQuery(json: any): ApprovalTemplateQuery;
/**
 * ApprovalTemplateQueryField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ApprovalTemplateQueryField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ApprovalTemplateQuery> {
    /**
     * Representation of the [[ApprovalTemplateQuery.queryId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    queryId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of ApprovalTemplateQueryField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace ApprovalTemplateQuery {
    /**
     * Metadata information on all properties of the `ApprovalTemplateQuery` complex type.
     */
    const _propertyMetadata: PropertyMetadata<ApprovalTemplateQuery>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): ApprovalTemplateQuery;
}
//# sourceMappingURL=ApprovalTemplateQuery.d.ts.map