/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ActivityTypesRequestBuilder } from './ActivityTypesRequestBuilder';
import { AllFields, CustomFieldV4, EntityBuilderType, EntityV4, Field, NumberField, OneToManyLink, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "ActivityTypes" of service "SAPB1".
 */
export class ActivityTypes extends EntityV4 implements ActivityTypesType {
  /**
   * Technical entity name for ActivityTypes.
   */
  static _entityName = 'ActivityTypes';
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
   * Returns an entity builder to construct instances of `ActivityTypes`.
   * @returns A builder that constructs instances of entity type `ActivityTypes`.
   */
  static builder(): EntityBuilderType<ActivityTypes, ActivityTypesType> {
    return EntityV4.entityBuilder(ActivityTypes);
  }

  /**
   * Returns a request builder to construct requests for operations on the `ActivityTypes` entity type.
   * @returns A `ActivityTypes` request builder.
   */
  static requestBuilder(): ActivityTypesRequestBuilder {
    return new ActivityTypesRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `ActivityTypes`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `ActivityTypes`.
   */
  static customField(fieldName: string): CustomFieldV4<ActivityTypes> {
    return EntityV4.customFieldSelector(fieldName, ActivityTypes);
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

export interface ActivityTypesType {
  code?: number | null;
  name?: string | null;
  contacts: ContactsType[];
  activities: ActivitiesType[];
}

export namespace ActivityTypes {
  /**
   * Static representation of the [[code]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CODE: NumberField<ActivityTypes> = new NumberField('Code', ActivityTypes, 'Edm.Int32');
  /**
   * Static representation of the [[name]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME: StringField<ActivityTypes> = new StringField('Name', ActivityTypes, 'Edm.String');
  /**
   * Static representation of the one-to-many navigation property [[contacts]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONTACTS: OneToManyLink<ActivityTypes, Contacts> = new OneToManyLink('Contacts', ActivityTypes, Contacts);
  /**
   * Static representation of the one-to-many navigation property [[activities]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACTIVITIES: OneToManyLink<ActivityTypes, Activities> = new OneToManyLink('Activities', ActivityTypes, Activities);
  /**
   * All fields of the ActivityTypes entity.
   */
  export const _allFields: Array<NumberField<ActivityTypes> | StringField<ActivityTypes> | OneToManyLink<ActivityTypes, Contacts> | OneToManyLink<ActivityTypes, Activities>> = [
    ActivityTypes.CODE,
    ActivityTypes.NAME,
    ActivityTypes.CONTACTS,
    ActivityTypes.ACTIVITIES
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<ActivityTypes> = new AllFields('*', ActivityTypes);
  /**
   * All key fields of the ActivityTypes entity.
   */
  export const _keyFields: Array<Field<ActivityTypes>> = [ActivityTypes.CODE];
  /**
   * Mapping of all key field names to the respective static field property ActivityTypes.
   */
  export const _keys: { [keys: string]: Field<ActivityTypes> } = ActivityTypes._keyFields.reduce((acc: { [keys: string]: Field<ActivityTypes> }, field: Field<ActivityTypes>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
