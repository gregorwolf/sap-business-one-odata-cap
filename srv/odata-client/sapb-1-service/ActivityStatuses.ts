/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ActivityStatusesRequestBuilder } from './ActivityStatusesRequestBuilder';
import { AllFields, CustomFieldV4, EntityBuilderType, EntityV4, Field, NumberField, OneToManyLink, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "ActivityStatuses" of service "SAPB1".
 */
export class ActivityStatuses extends EntityV4 implements ActivityStatusesType {
  /**
   * Technical entity name for ActivityStatuses.
   */
  static _entityName = 'ActivityStatuses';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/b1s/v2/';
  /**
   * Status Description.
   * @nullable
   */
  statusDescription?: string;
  /**
   * Status Id.
   * @nullable
   */
  statusId?: number;
  /**
   * Status Name.
   * @nullable
   */
  statusName?: string;
  /**
   * One-to-many navigation property to the [[Contacts]] entity.
   */
  contacts!: Contacts[];
  /**
   * One-to-many navigation property to the [[Activities]] entity.
   */
  activities!: Activities[];

  /**
   * Returns an entity builder to construct instances of `ActivityStatuses`.
   * @returns A builder that constructs instances of entity type `ActivityStatuses`.
   */
  static builder(): EntityBuilderType<ActivityStatuses, ActivityStatusesType> {
    return EntityV4.entityBuilder(ActivityStatuses);
  }

  /**
   * Returns a request builder to construct requests for operations on the `ActivityStatuses` entity type.
   * @returns A `ActivityStatuses` request builder.
   */
  static requestBuilder(): ActivityStatusesRequestBuilder {
    return new ActivityStatusesRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `ActivityStatuses`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `ActivityStatuses`.
   */
  static customField(fieldName: string): CustomFieldV4<ActivityStatuses> {
    return EntityV4.customFieldSelector(fieldName, ActivityStatuses);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { Contacts, ContactsType } from './Contacts';
import { Activities, ActivitiesType } from './Activities';

export interface ActivityStatusesType {
  statusDescription?: string | null;
  statusId?: number | null;
  statusName?: string | null;
  contacts: ContactsType[];
  activities: ActivitiesType[];
}

export namespace ActivityStatuses {
  /**
   * Static representation of the [[statusDescription]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS_DESCRIPTION: StringField<ActivityStatuses> = new StringField('StatusDescription', ActivityStatuses, 'Edm.String');
  /**
   * Static representation of the [[statusId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS_ID: NumberField<ActivityStatuses> = new NumberField('StatusId', ActivityStatuses, 'Edm.Int32');
  /**
   * Static representation of the [[statusName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS_NAME: StringField<ActivityStatuses> = new StringField('StatusName', ActivityStatuses, 'Edm.String');
  /**
   * Static representation of the one-to-many navigation property [[contacts]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONTACTS: OneToManyLink<ActivityStatuses, Contacts> = new OneToManyLink('Contacts', ActivityStatuses, Contacts);
  /**
   * Static representation of the one-to-many navigation property [[activities]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACTIVITIES: OneToManyLink<ActivityStatuses, Activities> = new OneToManyLink('Activities', ActivityStatuses, Activities);
  /**
   * All fields of the ActivityStatuses entity.
   */
  export const _allFields: Array<StringField<ActivityStatuses> | NumberField<ActivityStatuses> | OneToManyLink<ActivityStatuses, Contacts> | OneToManyLink<ActivityStatuses, Activities>> = [
    ActivityStatuses.STATUS_DESCRIPTION,
    ActivityStatuses.STATUS_ID,
    ActivityStatuses.STATUS_NAME,
    ActivityStatuses.CONTACTS,
    ActivityStatuses.ACTIVITIES
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<ActivityStatuses> = new AllFields('*', ActivityStatuses);
  /**
   * All key fields of the ActivityStatuses entity.
   */
  export const _keyFields: Array<Field<ActivityStatuses>> = [ActivityStatuses.STATUS_ID];
  /**
   * Mapping of all key field names to the respective static field property ActivityStatuses.
   */
  export const _keys: { [keys: string]: Field<ActivityStatuses> } = ActivityStatuses._keyFields.reduce((acc: { [keys: string]: Field<ActivityStatuses> }, field: Field<ActivityStatuses>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
