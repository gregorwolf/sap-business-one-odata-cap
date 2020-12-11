/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ActivityLocationsRequestBuilder } from './ActivityLocationsRequestBuilder';
import { AllFields, CustomFieldV4, EntityBuilderType, EntityV4, Field, NumberField, OneToManyLink, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "ActivityLocations" of service "SAPB1".
 */
export class ActivityLocations extends EntityV4 implements ActivityLocationsType {
  /**
   * Technical entity name for ActivityLocations.
   */
  static _entityName = 'ActivityLocations';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/b1s/v2/';
  /**
   * Code.
   * @nullable
   */
  code?: number;
  /**
   * Name.
   * @nullable
   */
  name?: string;
  /**
   * One-to-many navigation property to the [[Contacts]] entity.
   */
  contacts!: Contacts[];
  /**
   * One-to-many navigation property to the [[Activities]] entity.
   */
  activities!: Activities[];
  /**
   * One-to-many navigation property to the [[ServiceCalls]] entity.
   */
  serviceCalls!: ServiceCalls[];

  /**
   * Returns an entity builder to construct instances of `ActivityLocations`.
   * @returns A builder that constructs instances of entity type `ActivityLocations`.
   */
  static builder(): EntityBuilderType<ActivityLocations, ActivityLocationsType> {
    return EntityV4.entityBuilder(ActivityLocations);
  }

  /**
   * Returns a request builder to construct requests for operations on the `ActivityLocations` entity type.
   * @returns A `ActivityLocations` request builder.
   */
  static requestBuilder(): ActivityLocationsRequestBuilder {
    return new ActivityLocationsRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `ActivityLocations`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `ActivityLocations`.
   */
  static customField(fieldName: string): CustomFieldV4<ActivityLocations> {
    return EntityV4.customFieldSelector(fieldName, ActivityLocations);
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
import { ServiceCalls, ServiceCallsType } from './ServiceCalls';

export interface ActivityLocationsType {
  code?: number | null;
  name?: string | null;
  contacts: ContactsType[];
  activities: ActivitiesType[];
  serviceCalls: ServiceCallsType[];
}

export namespace ActivityLocations {
  /**
   * Static representation of the [[code]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CODE: NumberField<ActivityLocations> = new NumberField('Code', ActivityLocations, 'Edm.Int32');
  /**
   * Static representation of the [[name]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME: StringField<ActivityLocations> = new StringField('Name', ActivityLocations, 'Edm.String');
  /**
   * Static representation of the one-to-many navigation property [[contacts]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONTACTS: OneToManyLink<ActivityLocations, Contacts> = new OneToManyLink('Contacts', ActivityLocations, Contacts);
  /**
   * Static representation of the one-to-many navigation property [[activities]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACTIVITIES: OneToManyLink<ActivityLocations, Activities> = new OneToManyLink('Activities', ActivityLocations, Activities);
  /**
   * Static representation of the one-to-many navigation property [[serviceCalls]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SERVICE_CALLS: OneToManyLink<ActivityLocations, ServiceCalls> = new OneToManyLink('ServiceCalls', ActivityLocations, ServiceCalls);
  /**
   * All fields of the ActivityLocations entity.
   */
  export const _allFields: Array<NumberField<ActivityLocations> | StringField<ActivityLocations> | OneToManyLink<ActivityLocations, Contacts> | OneToManyLink<ActivityLocations, Activities> | OneToManyLink<ActivityLocations, ServiceCalls>> = [
    ActivityLocations.CODE,
    ActivityLocations.NAME,
    ActivityLocations.CONTACTS,
    ActivityLocations.ACTIVITIES,
    ActivityLocations.SERVICE_CALLS
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<ActivityLocations> = new AllFields('*', ActivityLocations);
  /**
   * All key fields of the ActivityLocations entity.
   */
  export const _keyFields: Array<Field<ActivityLocations>> = [ActivityLocations.CODE];
  /**
   * Mapping of all key field names to the respective static field property ActivityLocations.
   */
  export const _keys: { [keys: string]: Field<ActivityLocations> } = ActivityLocations._keyFields.reduce((acc: { [keys: string]: Field<ActivityLocations> }, field: Field<ActivityLocations>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
