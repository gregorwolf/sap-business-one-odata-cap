import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ComplexTypeTimePropertyField, Entity, FieldType, Time } from '@sap-cloud-sdk/core/v4';
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
export declare class UserActionRecordItemField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[UserActionRecordItem.userCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    userCode: ComplexTypeStringPropertyField<EntityT>;
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
}
export declare namespace UserActionRecordItem {
    function build(json: {
        [keys: string]: FieldType;
    }): UserActionRecordItem;
}
//# sourceMappingURL=UserActionRecordItem.d.ts.map