import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * UserBranchAssignmentItem
 */
export interface UserBranchAssignmentItem {
    /**
     * User Code.
     * @nullable
     */
    userCode?: string;
    /**
     * Bplid.
     * @nullable
     */
    bplid?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[UserBranchAssignmentItem.build]] instead.
 */
export declare function createUserBranchAssignmentItem(json: any): UserBranchAssignmentItem;
/**
 * UserBranchAssignmentItemField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class UserBranchAssignmentItemField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[UserBranchAssignmentItem.userCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    userCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[UserBranchAssignmentItem.bplid]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    bplid: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace UserBranchAssignmentItem {
    function build(json: {
        [keys: string]: FieldType;
    }): UserBranchAssignmentItem;
}
//# sourceMappingURL=UserBranchAssignmentItem.d.ts.map