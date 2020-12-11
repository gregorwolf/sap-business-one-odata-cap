import { UserMenuItemTypeEnum } from './UserMenuItemTypeEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * UserMenuItem
 */
export interface UserMenuItem {
    /**
     * Name.
     * @nullable
     */
    name?: string;
    /**
     * Position.
     * @nullable
     */
    position?: number;
    /**
     * Type.
     * @nullable
     */
    type?: UserMenuItemTypeEnum;
    /**
     * Linked Obj Type.
     * @nullable
     */
    linkedObjType?: string;
    /**
     * Linked Obj Key.
     * @nullable
     */
    linkedObjKey?: string;
    /**
     * Linked Form Menu Id.
     * @nullable
     */
    linkedFormMenuId?: number;
    /**
     * Linked Form Num.
     * @nullable
     */
    linkedFormNum?: number;
    /**
     * Report Path.
     * @nullable
     */
    reportPath?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[UserMenuItem.build]] instead.
 */
export declare function createUserMenuItem(json: any): UserMenuItem;
/**
 * UserMenuItemField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class UserMenuItemField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, UserMenuItem> {
    /**
     * Representation of the [[UserMenuItem.name]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    name: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[UserMenuItem.position]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    position: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[UserMenuItem.type]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    type: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[UserMenuItem.linkedObjType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    linkedObjType: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[UserMenuItem.linkedObjKey]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    linkedObjKey: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[UserMenuItem.linkedFormMenuId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    linkedFormMenuId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[UserMenuItem.linkedFormNum]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    linkedFormNum: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[UserMenuItem.reportPath]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    reportPath: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of UserMenuItemField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace UserMenuItem {
    /**
     * Metadata information on all properties of the `UserMenuItem` complex type.
     */
    const _propertyMetadata: PropertyMetadata<UserMenuItem>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): UserMenuItem;
}
//# sourceMappingURL=UserMenuItem.d.ts.map