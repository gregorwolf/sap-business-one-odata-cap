/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { UserActionTypeEnum } from './UserActionTypeEnum';
import {
  CollectionField,
  ComplexTypeField,
  ConstructorOrField,
  DeSerializers,
  DefaultDeSerializers,
  DeserializedType,
  EdmTypeField,
  Entity,
  EnumField,
  FieldBuilder,
  FieldOptions,
  OrderableEdmTypeField,
  PropertyMetadata
} from '@sap-cloud-sdk/odata-v4';

/**
 * UserActionRecordItem
 */
export interface UserActionRecordItem<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * User Code.
   * @nullable
   */
  userCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Action.
   * @nullable
   */
  action?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Action By.
   * @nullable
   */
  actionBy?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Client Ip.
   * @nullable
   */
  clientIp?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Client Name.
   * @nullable
   */
  clientName?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Action Date.
   * @nullable
   */
  actionDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Action Time.
   * @nullable
   */
  actionTime?: DeserializedType<DeSerializersT, 'Edm.TimeOfDay'>;
  /**
   * Windows Session.
   * @nullable
   */
  windowsSession?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Windows User.
   * @nullable
   */
  windowsUser?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Process Name.
   * @nullable
   */
  processName?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Process Id.
   * @nullable
   */
  processId?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Alive Duration.
   * @nullable
   */
  aliveDuration?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
}

/**
 * UserActionRecordItemField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class UserActionRecordItemField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  UserActionRecordItem,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link UserActionRecordItem.userCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  userCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('UserCode', 'Edm.String', true);
  /**
   * Representation of the {@link UserActionRecordItem.action} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  action: EnumField<EntityT, DeSerializersT, UserActionTypeEnum, true, false> =
    this._fieldBuilder.buildEnumField('Action', UserActionTypeEnum, true);
  /**
   * Representation of the {@link UserActionRecordItem.actionBy} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  actionBy: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ActionBy', 'Edm.String', true);
  /**
   * Representation of the {@link UserActionRecordItem.clientIp} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  clientIp: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ClientIP', 'Edm.String', true);
  /**
   * Representation of the {@link UserActionRecordItem.clientName} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  clientName: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ClientName', 'Edm.String', true);
  /**
   * Representation of the {@link UserActionRecordItem.actionDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  actionDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ActionDate',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link UserActionRecordItem.actionTime} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  actionTime: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.TimeOfDay',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ActionTime', 'Edm.TimeOfDay', true);
  /**
   * Representation of the {@link UserActionRecordItem.windowsSession} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  windowsSession: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('WindowsSession', 'Edm.Int32', true);
  /**
   * Representation of the {@link UserActionRecordItem.windowsUser} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  windowsUser: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('WindowsUser', 'Edm.String', true);
  /**
   * Representation of the {@link UserActionRecordItem.processName} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  processName: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ProcessName', 'Edm.String', true);
  /**
   * Representation of the {@link UserActionRecordItem.processId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  processId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ProcessID', 'Edm.Int32', true);
  /**
   * Representation of the {@link UserActionRecordItem.aliveDuration} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  aliveDuration: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('AliveDuration', 'Edm.Int32', true);

  /**
   * Creates an instance of UserActionRecordItemField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(
      fieldName,
      fieldOf,
      deSerializers,
      UserActionRecordItem,
      fieldOptions
    );
  }
}

export namespace UserActionRecordItem {
  /**
   * Metadata information on all properties of the `UserActionRecordItem` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<UserActionRecordItem>[] = [
    {
      originalName: 'UserCode',
      name: 'userCode',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Action',
      name: 'action',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'ActionBy',
      name: 'actionBy',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ClientIP',
      name: 'clientIp',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ClientName',
      name: 'clientName',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ActionDate',
      name: 'actionDate',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'ActionTime',
      name: 'actionTime',
      type: 'Edm.TimeOfDay',
      isCollection: false
    },
    {
      originalName: 'WindowsSession',
      name: 'windowsSession',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'WindowsUser',
      name: 'windowsUser',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ProcessName',
      name: 'processName',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ProcessID',
      name: 'processId',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'AliveDuration',
      name: 'aliveDuration',
      type: 'Edm.Int32',
      isCollection: false
    }
  ];
}
