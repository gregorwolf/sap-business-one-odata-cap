import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * ApprovalTemplateTerm
 */
export interface ApprovalTemplateTerm {
    /**
     * Value.
     * @nullable
     */
    value?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[ApprovalTemplateTerm.build]] instead.
 */
export declare function createApprovalTemplateTerm(json: any): ApprovalTemplateTerm;
/**
 * ApprovalTemplateTermField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ApprovalTemplateTermField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[ApprovalTemplateTerm.value]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    value: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace ApprovalTemplateTerm {
    function build(json: {
        [keys: string]: FieldType;
    }): ApprovalTemplateTerm;
}
//# sourceMappingURL=ApprovalTemplateTerm.d.ts.map