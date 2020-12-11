import { Moment } from 'moment';
import { UserActionTypeEnum } from './UserActionTypeEnum';
import { ComplexTypeDatePropertyField, ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ComplexTypeTimePropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, Time } from '@sap-cloud-sdk/core';
/**
 * UserActionRecordItem
 */
export interface UserActionRecordItem {
    /**
     * User Code.
     * @nullable
     */
    userCode?: string;
    /**
     * Action.
     * @nullable
     */
    action?: UserActionTypeEnum;
    /**
     * Action By.
     * @nullable
     */
    actionBy?: string;
    /**
     * Client Ip.
     * @nullable
     */
    clientIp?: string;
    /**
     * Client Name.
     * @nullable
     */
    clientName?: string;
    /**
     * Action Date.
     * @nullable
     */
    actionDate?: Moment;
    /**
     * Action Time.
     * @nullable
     */
    actionTime?: Time;
    /**
     * Windows Session.
     * @nullable
     */
    windowsSession?: number;
    /**
     * Windows User.
     * @nullable
     */
    windowsUser?: string;
    /**
     * Process Name.
     * @nullable
     */
    processName?: string;
    /**
     * Process Id.
     * @nullable
     */
    processId?: number;
    /**
     * Alive Duration.
     * @nullable
     */
    aliveDuration?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[UserActionRecordItem.build]] instead.
 */
export declare function createUserActionRecordItem(json: any): UserActionRecordItem;
/**
 * UserActionRecordItemField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class UserActionRecordItemField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, UserActionRecordItem> {
    /**
     * Representation of the [[UserActionRecordItem.userCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    userCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[UserActionRecordItem.action]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    action: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[UserActionRecordItem.actionBy]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    actionBy: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[UserActionRecordItem.clientIp]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    clientIp: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[UserActionRecordItem.clientName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    clientName: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[UserActionRecordItem.actionDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    actionDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[UserActionRecordItem.actionTime]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    actionTime: ComplexTypeTimePropertyField<EntityT>;
    /**
     * Representation of the [[UserActionRecordItem.windowsSession]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    windowsSession: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[UserActionRecordItem.windowsUser]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    windowsUser: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[UserActionRecordItem.processName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    processName: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[UserActionRecordItem.processId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    processId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[UserActionRecordItem.aliveDuration]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    aliveDuration: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of UserActionRecordItemField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace UserActionRecordItem {
    /**
     * Metadata information on all properties of the `UserActionRecordItem` complex type.
     */
    const _propertyMetadata: PropertyMetadata<UserActionRecordItem>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): UserActionRecordItem;
}
//# sourceMappingURL=UserActionRecordItem.d.ts.map