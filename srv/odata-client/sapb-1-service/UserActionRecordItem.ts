/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { UserActionTypeEnum } from './UserActionTypeEnum';
import { ComplexTypeDatePropertyField, ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ComplexTypeTimePropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, Time, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

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
export function createUserActionRecordItem(json: any): UserActionRecordItem {
  return UserActionRecordItem.build(json);
}

/**
 * UserActionRecordItemField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class UserActionRecordItemField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, UserActionRecordItem> {
  /**
   * Representation of the [[UserActionRecordItem.userCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  userCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('UserCode', this, 'Edm.String');
  /**
   * Representation of the [[UserActionRecordItem.action]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  action: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('Action', this);
  /**
   * Representation of the [[UserActionRecordItem.actionBy]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  actionBy: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ActionBy', this, 'Edm.String');
  /**
   * Representation of the [[UserActionRecordItem.clientIp]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  clientIp: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ClientIP', this, 'Edm.String');
  /**
   * Representation of the [[UserActionRecordItem.clientName]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  clientName: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ClientName', this, 'Edm.String');
  /**
   * Representation of the [[UserActionRecordItem.actionDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  actionDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('ActionDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[UserActionRecordItem.actionTime]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  actionTime: ComplexTypeTimePropertyField<EntityT> = new ComplexTypeTimePropertyField('ActionTime', this, 'Edm.TimeOfDay');
  /**
   * Representation of the [[UserActionRecordItem.windowsSession]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  windowsSession: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('WindowsSession', this, 'Edm.Int32');
  /**
   * Representation of the [[UserActionRecordItem.windowsUser]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  windowsUser: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('WindowsUser', this, 'Edm.String');
  /**
   * Representation of the [[UserActionRecordItem.processName]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  processName: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ProcessName', this, 'Edm.String');
  /**
   * Representation of the [[UserActionRecordItem.processId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  processId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ProcessID', this, 'Edm.Int32');
  /**
   * Representation of the [[UserActionRecordItem.aliveDuration]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  aliveDuration: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AliveDuration', this, 'Edm.Int32');

  /**
   * Creates an instance of UserActionRecordItemField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, UserActionRecordItem);
  }
}

export namespace UserActionRecordItem {
  /**
   * Metadata information on all properties of the `UserActionRecordItem` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<UserActionRecordItem>[] = [{
    originalName: 'UserCode',
    name: 'userCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Action',
    name: 'action',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'ActionBy',
    name: 'actionBy',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ClientIP',
    name: 'clientIp',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ClientName',
    name: 'clientName',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ActionDate',
    name: 'actionDate',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'ActionTime',
    name: 'actionTime',
    type: 'Edm.TimeOfDay',
    isCollection: false
  }, {
    originalName: 'WindowsSession',
    name: 'windowsSession',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'WindowsUser',
    name: 'windowsUser',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ProcessName',
    name: 'processName',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ProcessID',
    name: 'processId',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'AliveDuration',
    name: 'aliveDuration',
    type: 'Edm.Int32',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): UserActionRecordItem {
    return deserializeComplexTypeV4(json, UserActionRecordItem);
  }
}
