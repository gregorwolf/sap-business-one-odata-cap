import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
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
export declare class UserGroupByUserItemField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
}
export declare namespace UserGroupByUserItem {
    function build(json: {
        [keys: string]: FieldType;
    }): UserGroupByUserItem;
}
//# sourceMappingURL=UserGroupByUserItem.d.ts.map