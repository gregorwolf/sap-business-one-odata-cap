import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * ApprovalTemplateUser
 */
export interface ApprovalTemplateUser {
    /**
     * User Id.
     * @nullable
     */
    userId?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[ApprovalTemplateUser.build]] instead.
 */
export declare function createApprovalTemplateUser(json: any): ApprovalTemplateUser;
/**
 * ApprovalTemplateUserField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ApprovalTemplateUserField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[ApprovalTemplateUser.userId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    userId: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace ApprovalTemplateUser {
    function build(json: {
        [keys: string]: FieldType;
    }): ApprovalTemplateUser;
}
//# sourceMappingURL=ApprovalTemplateUser.d.ts.map