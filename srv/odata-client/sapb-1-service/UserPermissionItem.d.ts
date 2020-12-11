import { BoPermission } from './BoPermission';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
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
    /**
     * Permission.
     * @nullable
     */
    permission?: BoPermission;
}
/**
 * @deprecated Since v1.6.0. Use [[UserPermissionItem.build]] instead.
 */
export declare function createUserPermissionItem(json: any): UserPermissionItem;
/**
 * UserPermissionItemField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class UserPermissionItemField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, UserPermissionItem> {
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
    /**
     * Representation of the [[UserPermissionItem.permission]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    permission: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Creates an instance of UserPermissionItemField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace UserPermissionItem {
    /**
     * Metadata information on all properties of the `UserPermissionItem` complex type.
     */
    const _propertyMetadata: PropertyMetadata<UserPermissionItem>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): UserPermissionItem;
}
//# sourceMappingURL=UserPermissionItem.d.ts.map