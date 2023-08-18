/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { UserActionTypeEnum } from './UserActionTypeEnum';
import { UserAccessLogReasonIdTypeEnum } from './UserAccessLogReasonIdTypeEnum';
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
 * UserAccessLog
 */
export interface UserAccessLog<
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
   * Win Usr Name.
   * @nullable
   */
  winUsrName?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Win Sessn Id.
   * @nullable
   */
  winSessnId?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Proc Name.
   * @nullable
   */
  procName?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Process Id.
   * @nullable
   */
  processId?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Session Id.
   * @nullable
   */
  sessionId?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Reason Id.
   * @nullable
   */
  reasonId?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Reason Desc.
   * @nullable
   */
  reasonDesc?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Source.
   * @nullable
   */
  source?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * User Id.
   * @nullable
   */
  userId?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
}

/**
 * UserAccessLogField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class UserAccessLogField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  UserAccessLog,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link UserAccessLog.userCode} property for query construction.
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
   * Representation of the {@link UserAccessLog.action} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  action: EnumField<EntityT, DeSerializersT, UserActionTypeEnum, true, false> =
    this._fieldBuilder.buildEnumField('Action', UserActionTypeEnum, true);
  /**
   * Representation of the {@link UserAccessLog.actionBy} property for query construction.
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
   * Representation of the {@link UserAccessLog.clientIp} property for query construction.
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
   * Representation of the {@link UserAccessLog.clientName} property for query construction.
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
   * Representation of the {@link UserAccessLog.actionDate} property for query construction.
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
   * Representation of the {@link UserAccessLog.actionTime} property for query construction.
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
   * Representation of the {@link UserAccessLog.winUsrName} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  winUsrName: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('WinUsrName', 'Edm.String', true);
  /**
   * Representation of the {@link UserAccessLog.winSessnId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  winSessnId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('WinSessnID', 'Edm.Int32', true);
  /**
   * Representation of the {@link UserAccessLog.procName} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  procName: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ProcName', 'Edm.String', true);
  /**
   * Representation of the {@link UserAccessLog.processId} property for query construction.
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
   * Representation of the {@link UserAccessLog.sessionId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sessionId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('SessionID', 'Edm.Int32', true);
  /**
   * Representation of the {@link UserAccessLog.reasonId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  reasonId: EnumField<
    EntityT,
    DeSerializersT,
    UserAccessLogReasonIdTypeEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'ReasonID',
    UserAccessLogReasonIdTypeEnum,
    true
  );
  /**
   * Representation of the {@link UserAccessLog.reasonDesc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  reasonDesc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ReasonDesc', 'Edm.String', true);
  /**
   * Representation of the {@link UserAccessLog.source} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  source: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Source', 'Edm.String', true);
  /**
   * Representation of the {@link UserAccessLog.userId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  userId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('UserID', 'Edm.Int32', true);

  /**
   * Creates an instance of UserAccessLogField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, UserAccessLog, fieldOptions);
  }
}

export namespace UserAccessLog {
  /**
   * Metadata information on all properties of the `UserAccessLog` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<UserAccessLog>[] = [
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
      originalName: 'WinUsrName',
      name: 'winUsrName',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'WinSessnID',
      name: 'winSessnId',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'ProcName',
      name: 'procName',
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
      originalName: 'SessionID',
      name: 'sessionId',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'ReasonID',
      name: 'reasonId',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'ReasonDesc',
      name: 'reasonDesc',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Source',
      name: 'source',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'UserID',
      name: 'userId',
      type: 'Edm.Int32',
      isCollection: false
    }
  ];
}
