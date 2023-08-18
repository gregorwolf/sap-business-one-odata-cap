/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BoMsgRcpTypes } from './BoMsgRcpTypes';
import { BoYesNoEnum } from './BoYesNoEnum';
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
 * Recipient
 */
export interface Recipient<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * User Code.
   * @nullable
   */
  userCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * User Type.
   * @nullable
   */
  userType?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Name To.
   * @nullable
   */
  nameTo?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Send Email.
   * @nullable
   */
  sendEmail?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Email Address.
   * @nullable
   */
  emailAddress?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Send Sms.
   * @nullable
   */
  sendSms?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Cellular Number.
   * @nullable
   */
  cellularNumber?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Send Fax.
   * @nullable
   */
  sendFax?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Fax Number.
   * @nullable
   */
  faxNumber?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Send Internal.
   * @nullable
   */
  sendInternal?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
}

/**
 * RecipientField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class RecipientField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  Recipient,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link Recipient.userCode} property for query construction.
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
   * Representation of the {@link Recipient.userType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  userType: EnumField<EntityT, DeSerializersT, BoMsgRcpTypes, true, false> =
    this._fieldBuilder.buildEnumField('UserType', BoMsgRcpTypes, true);
  /**
   * Representation of the {@link Recipient.nameTo} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  nameTo: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('NameTo', 'Edm.String', true);
  /**
   * Representation of the {@link Recipient.sendEmail} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sendEmail: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('SendEmail', BoYesNoEnum, true);
  /**
   * Representation of the {@link Recipient.emailAddress} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  emailAddress: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('EmailAddress', 'Edm.String', true);
  /**
   * Representation of the {@link Recipient.sendSms} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sendSms: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('SendSMS', BoYesNoEnum, true);
  /**
   * Representation of the {@link Recipient.cellularNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  cellularNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'CellularNumber',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link Recipient.sendFax} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sendFax: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('SendFax', BoYesNoEnum, true);
  /**
   * Representation of the {@link Recipient.faxNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  faxNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('FaxNumber', 'Edm.String', true);
  /**
   * Representation of the {@link Recipient.sendInternal} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sendInternal: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('SendInternal', BoYesNoEnum, true);

  /**
   * Creates an instance of RecipientField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, Recipient, fieldOptions);
  }
}

export namespace Recipient {
  /**
   * Metadata information on all properties of the `Recipient` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<Recipient>[] = [
    {
      originalName: 'UserCode',
      name: 'userCode',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'UserType',
      name: 'userType',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'NameTo',
      name: 'nameTo',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'SendEmail',
      name: 'sendEmail',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'EmailAddress',
      name: 'emailAddress',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'SendSMS',
      name: 'sendSms',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'CellularNumber',
      name: 'cellularNumber',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'SendFax',
      name: 'sendFax',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'FaxNumber',
      name: 'faxNumber',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'SendInternal',
      name: 'sendInternal',
      type: 'Edm.Enum',
      isCollection: false
    }
  ];
}
