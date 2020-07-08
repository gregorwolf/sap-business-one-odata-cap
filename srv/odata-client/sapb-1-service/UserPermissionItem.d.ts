import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * UserPermissionItem
 */
export interface UserPermissionItem {
    /**
     * User Code.
     * @nullable
     */
    userCode?: number;
    /**
     * Permission Id.
     * @nullable
     */
    permissionId?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[UserPermissionItem.build]] instead.
 */
export declare function createUserPermissionItem(json: any): UserPermissionItem;
/**
 * UserPermissionItemField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class UserPermissionItemField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[UserPermissionItem.userCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    userCode: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[UserPermissionItem.permissionId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    permissionId: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace UserPermissionItem {
    function build(json: {
        [keys: string]: FieldType;
    }): UserPermissionItem;
}
//# sourceMappingURL=UserPermissionItem.d.ts.map