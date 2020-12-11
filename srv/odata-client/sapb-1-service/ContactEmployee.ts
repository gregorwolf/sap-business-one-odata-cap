/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ContactEmployeeBlockSendingMarketingContent } from './ContactEmployeeBlockSendingMarketingContent';
import { BoGenderTypes } from './BoGenderTypes';
import { BoYesNoEnum } from './BoYesNoEnum';
import { CollectionField, ComplexTypeDatePropertyField, ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * ContactEmployee
 */
export interface ContactEmployee {
  /**
   * Card Code.
   * @nullable
   */
  cardCode?: string;
  /**
   * Name.
   * @nullable
   */
  name?: string;
  /**
   * Position.
   * @nullable
   */
  position?: string;
  /**
   * Address.
   * @nullable
   */
  address?: string;
  /**
   * Phone 1.
   * @nullable
   */
  phone1?: string;
  /**
   * Phone 2.
   * @nullable
   */
  phone2?: string;
  /**
   * Mobile Phone.
   * @nullable
   */
  mobilePhone?: string;
  /**
   * Fax.
   * @nullable
   */
  fax?: string;
  /**
   * E Mail.
   * @nullable
   */
  eMail?: string;
  /**
   * Pager.
   * @nullable
   */
  pager?: string;
  /**
   * Remarks 1.
   * @nullable
   */
  remarks1?: string;
  /**
   * Remarks 2.
   * @nullable
   */
  remarks2?: string;
  /**
   * Password.
   * @nullable
   */
  password?: string;
  /**
   * Internal Code.
   * @nullable
   */
  internalCode?: number;
  /**
   * Place Of Birth.
   * @nullable
   */
  placeOfBirth?: string;
  /**
   * Date Of Birth.
   * @nullable
   */
  dateOfBirth?: Moment;
  /**
   * Gender.
   * @nullable
   */
  gender?: BoGenderTypes;
  /**
   * Profession.
   * @nullable
   */
  profession?: string;
  /**
   * Title.
   * @nullable
   */
  title?: string;
  /**
   * City Of Birth.
   * @nullable
   */
  cityOfBirth?: string;
  /**
   * Active.
   * @nullable
   */
  active?: BoYesNoEnum;
  /**
   * First Name.
   * @nullable
   */
  firstName?: string;
  /**
   * Middle Name.
   * @nullable
   */
  middleName?: string;
  /**
   * Last Name.
   * @nullable
   */
  lastName?: string;
  /**
   * Email Group Code.
   * @nullable
   */
  emailGroupCode?: string;
  /**
   * Block Sending Marketing Content.
   * @nullable
   */
  blockSendingMarketingContent?: BoYesNoEnum;
  /**
   * Contact Employee Block Sending Marketing Contents.
   * @nullable
   */
  contactEmployeeBlockSendingMarketingContents?: ContactEmployeeBlockSendingMarketingContent[];
}

/**
 * @deprecated Since v1.6.0. Use [[ContactEmployee.build]] instead.
 */
export function createContactEmployee(json: any): ContactEmployee {
  return ContactEmployee.build(json);
}

/**
 * ContactEmployeeField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ContactEmployeeField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ContactEmployee> {
  /**
   * Representation of the [[ContactEmployee.cardCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  cardCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('CardCode', this, 'Edm.String');
  /**
   * Representation of the [[ContactEmployee.name]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  name: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Name', this, 'Edm.String');
  /**
   * Representation of the [[ContactEmployee.position]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  position: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Position', this, 'Edm.String');
  /**
   * Representation of the [[ContactEmployee.address]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  address: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Address', this, 'Edm.String');
  /**
   * Representation of the [[ContactEmployee.phone1]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  phone1: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Phone1', this, 'Edm.String');
  /**
   * Representation of the [[ContactEmployee.phone2]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  phone2: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Phone2', this, 'Edm.String');
  /**
   * Representation of the [[ContactEmployee.mobilePhone]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  mobilePhone: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('MobilePhone', this, 'Edm.String');
  /**
   * Representation of the [[ContactEmployee.fax]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  fax: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Fax', this, 'Edm.String');
  /**
   * Representation of the [[ContactEmployee.eMail]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  eMail: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('E_Mail', this, 'Edm.String');
  /**
   * Representation of the [[ContactEmployee.pager]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  pager: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Pager', this, 'Edm.String');
  /**
   * Representation of the [[ContactEmployee.remarks1]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  remarks1: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Remarks1', this, 'Edm.String');
  /**
   * Representation of the [[ContactEmployee.remarks2]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  remarks2: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Remarks2', this, 'Edm.String');
  /**
   * Representation of the [[ContactEmployee.password]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  password: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Password', this, 'Edm.String');
  /**
   * Representation of the [[ContactEmployee.internalCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  internalCode: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('InternalCode', this, 'Edm.Int32');
  /**
   * Representation of the [[ContactEmployee.placeOfBirth]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  placeOfBirth: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('PlaceOfBirth', this, 'Edm.String');
  /**
   * Representation of the [[ContactEmployee.dateOfBirth]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  dateOfBirth: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('DateOfBirth', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[ContactEmployee.gender]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  gender: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('Gender', this);
  /**
   * Representation of the [[ContactEmployee.profession]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  profession: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Profession', this, 'Edm.String');
  /**
   * Representation of the [[ContactEmployee.title]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  title: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Title', this, 'Edm.String');
  /**
   * Representation of the [[ContactEmployee.cityOfBirth]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  cityOfBirth: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('CityOfBirth', this, 'Edm.String');
  /**
   * Representation of the [[ContactEmployee.active]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  active: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('Active', this);
  /**
   * Representation of the [[ContactEmployee.firstName]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  firstName: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('FirstName', this, 'Edm.String');
  /**
   * Representation of the [[ContactEmployee.middleName]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  middleName: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('MiddleName', this, 'Edm.String');
  /**
   * Representation of the [[ContactEmployee.lastName]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lastName: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('LastName', this, 'Edm.String');
  /**
   * Representation of the [[ContactEmployee.emailGroupCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  emailGroupCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('EmailGroupCode', this, 'Edm.String');
  /**
   * Representation of the [[ContactEmployee.blockSendingMarketingContent]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  blockSendingMarketingContent: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('BlockSendingMarketingContent', this);
  /**
   * Representation of the [[ContactEmployee.contactEmployeeBlockSendingMarketingContents]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  contactEmployeeBlockSendingMarketingContents: CollectionField<EntityT, ContactEmployeeBlockSendingMarketingContent> = new CollectionField('ContactEmployeeBlockSendingMarketingContents', this, ContactEmployeeBlockSendingMarketingContent);

  /**
   * Creates an instance of ContactEmployeeField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, ContactEmployee);
  }
}

export namespace ContactEmployee {
  /**
   * Metadata information on all properties of the `ContactEmployee` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ContactEmployee>[] = [{
    originalName: 'CardCode',
    name: 'cardCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Name',
    name: 'name',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Position',
    name: 'position',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Address',
    name: 'address',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Phone1',
    name: 'phone1',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Phone2',
    name: 'phone2',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'MobilePhone',
    name: 'mobilePhone',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Fax',
    name: 'fax',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'E_Mail',
    name: 'eMail',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Pager',
    name: 'pager',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Remarks1',
    name: 'remarks1',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Remarks2',
    name: 'remarks2',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Password',
    name: 'password',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'InternalCode',
    name: 'internalCode',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'PlaceOfBirth',
    name: 'placeOfBirth',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'DateOfBirth',
    name: 'dateOfBirth',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'Gender',
    name: 'gender',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'Profession',
    name: 'profession',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Title',
    name: 'title',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'CityOfBirth',
    name: 'cityOfBirth',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Active',
    name: 'active',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'FirstName',
    name: 'firstName',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'MiddleName',
    name: 'middleName',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'LastName',
    name: 'lastName',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'EmailGroupCode',
    name: 'emailGroupCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'BlockSendingMarketingContent',
    name: 'blockSendingMarketingContent',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'ContactEmployeeBlockSendingMarketingContents',
    name: 'contactEmployeeBlockSendingMarketingContents',
    type: ContactEmployeeBlockSendingMarketingContent,
    isCollection: true
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType | ContactEmployeeBlockSendingMarketingContent }): ContactEmployee {
    return deserializeComplexTypeV4(json, ContactEmployee);
  }
}
