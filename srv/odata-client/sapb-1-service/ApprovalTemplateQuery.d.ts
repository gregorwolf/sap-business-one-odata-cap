import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
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
export declare class ApprovalTemplateQueryField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[ApprovalTemplateQuery.queryId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    queryId: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace ApprovalTemplateQuery {
    function build(json: {
        [keys: string]: FieldType;
    }): ApprovalTemplateQuery;
}
//# sourceMappingURL=ApprovalTemplateQuery.d.ts.map