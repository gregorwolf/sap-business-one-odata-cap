import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
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
export declare class UserMenuItemField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
}
export declare namespace UserMenuItem {
    function build(json: {
        [keys: string]: FieldType;
    }): UserMenuItem;
}
//# sourceMappingURL=UserMenuItem.d.ts.map