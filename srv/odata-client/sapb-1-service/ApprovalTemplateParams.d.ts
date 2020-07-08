import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * ApprovalTemplateParams
 */
export interface ApprovalTemplateParams {
    /**
     * Code.
     * @nullable
     */
    code?: number;
    /**
     * Name.
     * @nullable
     */
    name?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[ApprovalTemplateParams.build]] instead.
 */
export declare function createApprovalTemplateParams(json: any): ApprovalTemplateParams;
/**
 * ApprovalTemplateParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ApprovalTemplateParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[ApprovalTemplateParams.code]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    code: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ApprovalTemplateParams.name]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    name: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace ApprovalTemplateParams {
    function build(json: {
        [keys: string]: FieldType;
    }): ApprovalTemplateParams;
}
//# sourceMappingURL=ApprovalTemplateParams.d.ts.map