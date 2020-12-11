import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * UserGroupByUserItem
 */
export interface UserGroupByUserItem {
    /**
     * User Id.
     * @nullable
     */
    userId?: number;
    /**
     * Group Id.
     * @nullable
     */
    groupId?: number;
    /**
     * Start Date.
     * @nullable
     */
    startDate?: Moment;
    /**
     * Due Date.
     * @nullable
     */
    dueDate?: Moment;
}
/**
 * @deprecated Since v1.6.0. Use [[UserGroupByUserItem.build]] instead.
 */
export declare function createUserGroupByUserItem(json: any): UserGroupByUserItem;
/**
 * UserGroupByUserItemField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class UserGroupByUserItemField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, UserGroupByUserItem> {
    /**
     * Representation of the [[UserGroupByUserItem.userId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    userId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[UserGroupByUserItem.groupId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    groupId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[UserGroupByUserItem.startDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    startDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[UserGroupByUserItem.dueDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    dueDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Creates an instance of UserGroupByUserItemField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace UserGroupByUserItem {
    /**
     * Metadata information on all properties of the `UserGroupByUserItem` complex type.
     */
    const _propertyMetadata: PropertyMetadata<UserGroupByUserItem>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): UserGroupByUserItem;
}
//# sourceMappingURL=UserGroupByUserItem.d.ts.map