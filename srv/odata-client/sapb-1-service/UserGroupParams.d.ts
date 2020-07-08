import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * UserGroupParams
 */
export interface UserGroupParams {
    /**
     * User Group Id.
     * @nullable
     */
    userGroupId?: number;
    /**
     * User Group Name.
     * @nullable
     */
    userGroupName?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[UserGroupParams.build]] instead.
 */
export declare function createUserGroupParams(json: any): UserGroupParams;
/**
 * UserGroupParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class UserGroupParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[UserGroupParams.userGroupId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    userGroupId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[UserGroupParams.userGroupName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    userGroupName: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace UserGroupParams {
    function build(json: {
        [keys: string]: FieldType;
    }): UserGroupParams;
}
//# sourceMappingURL=UserGroupParams.d.ts.map