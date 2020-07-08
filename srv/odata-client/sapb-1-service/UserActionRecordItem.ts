/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ComplexTypeTimePropertyField, Entity, FieldType, Time, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

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
export function createUserActionRecordItem(json: any): UserActionRecordItem {
  return UserActionRecordItem.build(json);
}

/**
 * UserActionRecordItemField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class UserActionRecordItemField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[UserActionRecordItem.userCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  userCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('UserCode', this, 'Edm.String');
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
}

export namespace UserActionRecordItem {
  export function build(json: { [keys: string]: FieldType }): UserActionRecordItem {
    return createComplexType(json, {
      UserCode: (userCode: string) => ({ userCode: edmToTs(userCode, 'Edm.String') }),
      ActionBy: (actionBy: string) => ({ actionBy: edmToTs(actionBy, 'Edm.String') }),
      ClientIP: (clientIp: string) => ({ clientIp: edmToTs(clientIp, 'Edm.String') }),
      ClientName: (clientName: string) => ({ clientName: edmToTs(clientName, 'Edm.String') }),
      ActionDate: (actionDate: Moment) => ({ actionDate: edmToTs(actionDate, 'Edm.DateTimeOffset') }),
      ActionTime: (actionTime: Time) => ({ actionTime: edmToTs(actionTime, 'Edm.TimeOfDay') }),
      WindowsSession: (windowsSession: number) => ({ windowsSession: edmToTs(windowsSession, 'Edm.Int32') }),
      WindowsUser: (windowsUser: string) => ({ windowsUser: edmToTs(windowsUser, 'Edm.String') }),
      ProcessName: (processName: string) => ({ processName: edmToTs(processName, 'Edm.String') }),
      ProcessID: (processId: number) => ({ processId: edmToTs(processId, 'Edm.Int32') }),
      AliveDuration: (aliveDuration: number) => ({ aliveDuration: edmToTs(aliveDuration, 'Edm.Int32') })
    });
  }
}
