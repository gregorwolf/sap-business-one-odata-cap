/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EmailGroupsRequestBuilder } from './EmailGroupsRequestBuilder';
import { AllFields, CustomFieldV4, EntityBuilderType, EntityV4, Field, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "EmailGroups" of service "SAPB1".
 */
export class EmailGroups extends EntityV4 implements EmailGroupsType {
  /**
   * Technical entity name for EmailGroups.
   */
  static _entityName = 'EmailGroups';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/b1s/v2/';
  /**
   * Email Group Code.
   * @nullable
   */
  emailGroupCode?: string;
  /**
   * Email Group Name.
   * @nullable
   */
  emailGroupName?: string;

  /**
   * Returns an entity builder to construct instances of `EmailGroups`.
   * @returns A builder that constructs instances of entity type `EmailGroups`.
   */
  static builder(): EntityBuilderType<EmailGroups, EmailGroupsType> {
    return EntityV4.entityBuilder(EmailGroups);
  }

  /**
   * Returns a request builder to construct requests for operations on the `EmailGroups` entity type.
   * @returns A `EmailGroups` request builder.
   */
  static requestBuilder(): EmailGroupsRequestBuilder {
    return new EmailGroupsRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmailGroups`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `EmailGroups`.
   */
  static customField(fieldName: string): CustomFieldV4<EmailGroups> {
    return EntityV4.customFieldSelector(fieldName, EmailGroups);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface EmailGroupsType {
  emailGroupCode?: string | null;
  emailGroupName?: string | null;
}

export namespace EmailGroups {
  /**
   * Static representation of the [[emailGroupCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMAIL_GROUP_CODE: StringField<EmailGroups> = new StringField('EmailGroupCode', EmailGroups, 'Edm.String');
  /**
   * Static representation of the [[emailGroupName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMAIL_GROUP_NAME: StringField<EmailGroups> = new StringField('EmailGroupName', EmailGroups, 'Edm.String');
  /**
   * All fields of the EmailGroups entity.
   */
  export const _allFields: Array<StringField<EmailGroups>> = [
    EmailGroups.EMAIL_GROUP_CODE,
    EmailGroups.EMAIL_GROUP_NAME
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<EmailGroups> = new AllFields('*', EmailGroups);
  /**
   * All key fields of the EmailGroups entity.
   */
  export const _keyFields: Array<Field<EmailGroups>> = [EmailGroups.EMAIL_GROUP_CODE];
  /**
   * Mapping of all key field names to the respective static field property EmailGroups.
   */
  export const _keys: { [keys: string]: Field<EmailGroups> } = EmailGroups._keyFields.reduce((acc: { [keys: string]: Field<EmailGroups> }, field: Field<EmailGroups>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
