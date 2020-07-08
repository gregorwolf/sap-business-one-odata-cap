/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ContactEmployeeBlockSendingMarketingContent, ContactEmployeeBlockSendingMarketingContentField } from './ContactEmployeeBlockSendingMarketingContent';
import { CollectionField, ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

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
   * Contact Employee Block Sending Marketing Contents.
   * @nullable
   */
  contactEmployeeBlockSendingMarketingContents?: ContactEmployeeBlockSendingMarketingContent;
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
export class ContactEmployeeField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
   * Representation of the [[ContactEmployee.contactEmployeeBlockSendingMarketingContents]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  contactEmployeeBlockSendingMarketingContents: ContactEmployeeBlockSendingMarketingContentField<EntityT> = new ContactEmployeeBlockSendingMarketingContentField('ContactEmployeeBlockSendingMarketingContents', this);
}

export namespace ContactEmployee {
  export function build(json: { [keys: string]: FieldType | ContactEmployeeBlockSendingMarketingContent }): ContactEmployee {
    return createComplexType(json, {
      CardCode: (cardCode: string) => ({ cardCode: edmToTs(cardCode, 'Edm.String') }),
      Name: (name: string) => ({ name: edmToTs(name, 'Edm.String') }),
      Position: (position: string) => ({ position: edmToTs(position, 'Edm.String') }),
      Address: (address: string) => ({ address: edmToTs(address, 'Edm.String') }),
      Phone1: (phone1: string) => ({ phone1: edmToTs(phone1, 'Edm.String') }),
      Phone2: (phone2: string) => ({ phone2: edmToTs(phone2, 'Edm.String') }),
      MobilePhone: (mobilePhone: string) => ({ mobilePhone: edmToTs(mobilePhone, 'Edm.String') }),
      Fax: (fax: string) => ({ fax: edmToTs(fax, 'Edm.String') }),
      E_Mail: (eMail: string) => ({ eMail: edmToTs(eMail, 'Edm.String') }),
      Pager: (pager: string) => ({ pager: edmToTs(pager, 'Edm.String') }),
      Remarks1: (remarks1: string) => ({ remarks1: edmToTs(remarks1, 'Edm.String') }),
      Remarks2: (remarks2: string) => ({ remarks2: edmToTs(remarks2, 'Edm.String') }),
      Password: (password: string) => ({ password: edmToTs(password, 'Edm.String') }),
      InternalCode: (internalCode: number) => ({ internalCode: edmToTs(internalCode, 'Edm.Int32') }),
      PlaceOfBirth: (placeOfBirth: string) => ({ placeOfBirth: edmToTs(placeOfBirth, 'Edm.String') }),
      DateOfBirth: (dateOfBirth: Moment) => ({ dateOfBirth: edmToTs(dateOfBirth, 'Edm.DateTimeOffset') }),
      Profession: (profession: string) => ({ profession: edmToTs(profession, 'Edm.String') }),
      Title: (title: string) => ({ title: edmToTs(title, 'Edm.String') }),
      CityOfBirth: (cityOfBirth: string) => ({ cityOfBirth: edmToTs(cityOfBirth, 'Edm.String') }),
      FirstName: (firstName: string) => ({ firstName: edmToTs(firstName, 'Edm.String') }),
      MiddleName: (middleName: string) => ({ middleName: edmToTs(middleName, 'Edm.String') }),
      LastName: (lastName: string) => ({ lastName: edmToTs(lastName, 'Edm.String') }),
      EmailGroupCode: (emailGroupCode: string) => ({ emailGroupCode: edmToTs(emailGroupCode, 'Edm.String') }),
      ContactEmployeeBlockSendingMarketingContents: (contactEmployeeBlockSendingMarketingContents: ContactEmployeeBlockSendingMarketingContent) => ({ contactEmployeeBlockSendingMarketingContents: ContactEmployeeBlockSendingMarketingContent.build(contactEmployeeBlockSendingMarketingContents) })
    });
  }
}
