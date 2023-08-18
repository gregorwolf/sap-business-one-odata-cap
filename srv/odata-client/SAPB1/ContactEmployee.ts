/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ContactEmployeeBlockSendingMarketingContent } from './ContactEmployeeBlockSendingMarketingContent';
import { BoGenderTypes } from './BoGenderTypes';
import { BoYesNoEnum } from './BoYesNoEnum';
import { BoAddressType } from './BoAddressType';
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
 * ContactEmployee
 */
export interface ContactEmployee<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Card Code.
   * @nullable
   */
  cardCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Name.
   * @nullable
   */
  name?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Position.
   * @nullable
   */
  position?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Address.
   * @nullable
   */
  address?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Phone 1.
   * @nullable
   */
  phone1?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Phone 2.
   * @nullable
   */
  phone2?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Mobile Phone.
   * @nullable
   */
  mobilePhone?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Fax.
   * @nullable
   */
  fax?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * E Mail.
   * @nullable
   */
  eMail?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Pager.
   * @nullable
   */
  pager?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Remarks 1.
   * @nullable
   */
  remarks1?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Remarks 2.
   * @nullable
   */
  remarks2?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Password.
   * @nullable
   */
  password?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Internal Code.
   * @nullable
   */
  internalCode?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Place Of Birth.
   * @nullable
   */
  placeOfBirth?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Date Of Birth.
   * @nullable
   */
  dateOfBirth?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Gender.
   * @nullable
   */
  gender?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Profession.
   * @nullable
   */
  profession?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Title.
   * @nullable
   */
  title?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * City Of Birth.
   * @nullable
   */
  cityOfBirth?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Active.
   * @nullable
   */
  active?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * First Name.
   * @nullable
   */
  firstName?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Middle Name.
   * @nullable
   */
  middleName?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Last Name.
   * @nullable
   */
  lastName?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Email Group Code.
   * @nullable
   */
  emailGroupCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Block Sending Marketing Content.
   * @nullable
   */
  blockSendingMarketingContent?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Create Date.
   * @nullable
   */
  createDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Create Time.
   * @nullable
   */
  createTime?: DeserializedType<DeSerializersT, 'Edm.TimeOfDay'>;
  /**
   * Update Date.
   * @nullable
   */
  updateDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Update Time.
   * @nullable
   */
  updateTime?: DeserializedType<DeSerializersT, 'Edm.TimeOfDay'>;
  /**
   * Connected Address Name.
   * @nullable
   */
  connectedAddressName?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Connected Address Type.
   * @nullable
   */
  connectedAddressType?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Foreign Country.
   * @nullable
   */
  foreignCountry?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * U Bs Online.
   */
  uBsOnline: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * U Notification.
   * @nullable
   */
  uNotification?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Contact Employee Block Sending Marketing Contents.
   * @nullable
   */
  contactEmployeeBlockSendingMarketingContents?: DeserializedType<
    DeSerializersT,
    'SAPB1.ContactEmployeeBlockSendingMarketingContent'
  >;
}

/**
 * ContactEmployeeField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class ContactEmployeeField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  ContactEmployee,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link ContactEmployee.cardCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  cardCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('CardCode', 'Edm.String', true);
  /**
   * Representation of the {@link ContactEmployee.name} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  name: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true);
  /**
   * Representation of the {@link ContactEmployee.position} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  position: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Position', 'Edm.String', true);
  /**
   * Representation of the {@link ContactEmployee.address} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  address: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Address', 'Edm.String', true);
  /**
   * Representation of the {@link ContactEmployee.phone1} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  phone1: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Phone1', 'Edm.String', true);
  /**
   * Representation of the {@link ContactEmployee.phone2} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  phone2: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Phone2', 'Edm.String', true);
  /**
   * Representation of the {@link ContactEmployee.mobilePhone} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  mobilePhone: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('MobilePhone', 'Edm.String', true);
  /**
   * Representation of the {@link ContactEmployee.fax} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  fax: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Fax', 'Edm.String', true);
  /**
   * Representation of the {@link ContactEmployee.eMail} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  eMail: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('E_Mail', 'Edm.String', true);
  /**
   * Representation of the {@link ContactEmployee.pager} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  pager: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Pager', 'Edm.String', true);
  /**
   * Representation of the {@link ContactEmployee.remarks1} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  remarks1: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Remarks1', 'Edm.String', true);
  /**
   * Representation of the {@link ContactEmployee.remarks2} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  remarks2: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Remarks2', 'Edm.String', true);
  /**
   * Representation of the {@link ContactEmployee.password} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  password: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Password', 'Edm.String', true);
  /**
   * Representation of the {@link ContactEmployee.internalCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  internalCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('InternalCode', 'Edm.Int32', true);
  /**
   * Representation of the {@link ContactEmployee.placeOfBirth} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  placeOfBirth: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('PlaceOfBirth', 'Edm.String', true);
  /**
   * Representation of the {@link ContactEmployee.dateOfBirth} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  dateOfBirth: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DateOfBirth',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link ContactEmployee.gender} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  gender: EnumField<EntityT, DeSerializersT, BoGenderTypes, true, false> =
    this._fieldBuilder.buildEnumField('Gender', BoGenderTypes, true);
  /**
   * Representation of the {@link ContactEmployee.profession} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  profession: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Profession', 'Edm.String', true);
  /**
   * Representation of the {@link ContactEmployee.title} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  title: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Title', 'Edm.String', true);
  /**
   * Representation of the {@link ContactEmployee.cityOfBirth} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  cityOfBirth: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('CityOfBirth', 'Edm.String', true);
  /**
   * Representation of the {@link ContactEmployee.active} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  active: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('Active', BoYesNoEnum, true);
  /**
   * Representation of the {@link ContactEmployee.firstName} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  firstName: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('FirstName', 'Edm.String', true);
  /**
   * Representation of the {@link ContactEmployee.middleName} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  middleName: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('MiddleName', 'Edm.String', true);
  /**
   * Representation of the {@link ContactEmployee.lastName} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lastName: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('LastName', 'Edm.String', true);
  /**
   * Representation of the {@link ContactEmployee.emailGroupCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  emailGroupCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'EmailGroupCode',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link ContactEmployee.blockSendingMarketingContent} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  blockSendingMarketingContent: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'BlockSendingMarketingContent',
    BoYesNoEnum,
    true
  );
  /**
   * Representation of the {@link ContactEmployee.createDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  createDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'CreateDate',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link ContactEmployee.createTime} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  createTime: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.TimeOfDay',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('CreateTime', 'Edm.TimeOfDay', true);
  /**
   * Representation of the {@link ContactEmployee.updateDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  updateDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'UpdateDate',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link ContactEmployee.updateTime} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  updateTime: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.TimeOfDay',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('UpdateTime', 'Edm.TimeOfDay', true);
  /**
   * Representation of the {@link ContactEmployee.connectedAddressName} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  connectedAddressName: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ConnectedAddressName',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link ContactEmployee.connectedAddressType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  connectedAddressType: EnumField<
    EntityT,
    DeSerializersT,
    BoAddressType,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'ConnectedAddressType',
    BoAddressType,
    true
  );
  /**
   * Representation of the {@link ContactEmployee.foreignCountry} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  foreignCountry: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ForeignCountry',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link ContactEmployee.uBsOnline} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uBsOnline: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    false,
    false
  > = this._fieldBuilder.buildEdmTypeField('U_BS_Online', 'Edm.String', false);
  /**
   * Representation of the {@link ContactEmployee.uNotification} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uNotification: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'U_Notification',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link ContactEmployee.contactEmployeeBlockSendingMarketingContents} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  contactEmployeeBlockSendingMarketingContents: CollectionField<
    EntityT,
    DeSerializersT,
    ContactEmployeeBlockSendingMarketingContent,
    true,
    false
  > = this._fieldBuilder.buildCollectionField(
    'ContactEmployeeBlockSendingMarketingContents',
    ContactEmployeeBlockSendingMarketingContent,
    true
  );

  /**
   * Creates an instance of ContactEmployeeField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, ContactEmployee, fieldOptions);
  }
}

export namespace ContactEmployee {
  /**
   * Metadata information on all properties of the `ContactEmployee` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ContactEmployee>[] = [
    {
      originalName: 'CardCode',
      name: 'cardCode',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Name',
      name: 'name',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Position',
      name: 'position',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Address',
      name: 'address',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Phone1',
      name: 'phone1',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Phone2',
      name: 'phone2',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'MobilePhone',
      name: 'mobilePhone',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Fax',
      name: 'fax',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'E_Mail',
      name: 'eMail',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Pager',
      name: 'pager',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Remarks1',
      name: 'remarks1',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Remarks2',
      name: 'remarks2',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Password',
      name: 'password',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'InternalCode',
      name: 'internalCode',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'PlaceOfBirth',
      name: 'placeOfBirth',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'DateOfBirth',
      name: 'dateOfBirth',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'Gender',
      name: 'gender',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'Profession',
      name: 'profession',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Title',
      name: 'title',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'CityOfBirth',
      name: 'cityOfBirth',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Active',
      name: 'active',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'FirstName',
      name: 'firstName',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'MiddleName',
      name: 'middleName',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'LastName',
      name: 'lastName',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'EmailGroupCode',
      name: 'emailGroupCode',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'BlockSendingMarketingContent',
      name: 'blockSendingMarketingContent',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'CreateDate',
      name: 'createDate',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'CreateTime',
      name: 'createTime',
      type: 'Edm.TimeOfDay',
      isCollection: false
    },
    {
      originalName: 'UpdateDate',
      name: 'updateDate',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'UpdateTime',
      name: 'updateTime',
      type: 'Edm.TimeOfDay',
      isCollection: false
    },
    {
      originalName: 'ConnectedAddressName',
      name: 'connectedAddressName',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ConnectedAddressType',
      name: 'connectedAddressType',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'ForeignCountry',
      name: 'foreignCountry',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'U_BS_Online',
      name: 'uBsOnline',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'U_Notification',
      name: 'uNotification',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ContactEmployeeBlockSendingMarketingContents',
      name: 'contactEmployeeBlockSendingMarketingContents',
      type: ContactEmployeeBlockSendingMarketingContent,
      isCollection: true
    }
  ];
}
