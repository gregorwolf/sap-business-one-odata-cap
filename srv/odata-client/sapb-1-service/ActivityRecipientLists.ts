/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ActivityRecipientListsRequestBuilder } from './ActivityRecipientListsRequestBuilder';
import { ActivityRecipient } from './ActivityRecipient';
import { BoYesNoEnum } from './BoYesNoEnum';
import { AllFields, CollectionField, CustomFieldV4, EntityBuilderType, EntityV4, EnumField, Field, NumberField, OneToManyLink, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "ActivityRecipientLists" of service "SAPB1".
 */
export class ActivityRecipientLists extends EntityV4 implements ActivityRecipientListsType {
  /**
   * Technical entity name for ActivityRecipientLists.
   */
  static _entityName = 'ActivityRecipientLists';
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
   * Active.
   * @nullable
   */
  active?: BoYesNoEnum;
  /**
   * Is Multiple.
   * @nullable
   */
  isMultiple?: BoYesNoEnum;
  /**
   * Activity Recipient Collection.
   * @nullable
   */
  activityRecipientCollection?: ActivityRecipient[];
  /**
   * One-to-many navigation property to the [[Activities]] entity.
   */
  activities!: Activities[];

  /**
   * Returns an entity builder to construct instances of `ActivityRecipientLists`.
   * @returns A builder that constructs instances of entity type `ActivityRecipientLists`.
   */
  static builder(): EntityBuilderType<ActivityRecipientLists, ActivityRecipientListsType> {
    return EntityV4.entityBuilder(ActivityRecipientLists);
  }

  /**
   * Returns a request builder to construct requests for operations on the `ActivityRecipientLists` entity type.
   * @returns A `ActivityRecipientLists` request builder.
   */
  static requestBuilder(): ActivityRecipientListsRequestBuilder {
    return new ActivityRecipientListsRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `ActivityRecipientLists`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `ActivityRecipientLists`.
   */
  static customField(fieldName: string): CustomFieldV4<ActivityRecipientLists> {
    return EntityV4.customFieldSelector(fieldName, ActivityRecipientLists);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { Activities, ActivitiesType } from './Activities';

export interface ActivityRecipientListsType {
  code?: number | null;
  name?: string | null;
  active?: BoYesNoEnum | null;
  isMultiple?: BoYesNoEnum | null;
  activityRecipientCollection?: ActivityRecipient[] | null;
  activities: ActivitiesType[];
}

export namespace ActivityRecipientLists {
  /**
   * Static representation of the [[code]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CODE: NumberField<ActivityRecipientLists> = new NumberField('Code', ActivityRecipientLists, 'Edm.Int32');
  /**
   * Static representation of the [[name]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME: StringField<ActivityRecipientLists> = new StringField('Name', ActivityRecipientLists, 'Edm.String');
  /**
   * Static representation of the [[active]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACTIVE: EnumField<ActivityRecipientLists> = new EnumField('Active', ActivityRecipientLists);
  /**
   * Static representation of the [[isMultiple]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_MULTIPLE: EnumField<ActivityRecipientLists> = new EnumField('IsMultiple', ActivityRecipientLists);
  /**
   * Static representation of the [[activityRecipientCollection]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACTIVITY_RECIPIENT_COLLECTION: CollectionField<ActivityRecipientLists, ActivityRecipient> = new CollectionField('ActivityRecipientCollection', ActivityRecipientLists, ActivityRecipient);
  /**
   * Static representation of the one-to-many navigation property [[activities]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACTIVITIES: OneToManyLink<ActivityRecipientLists, Activities> = new OneToManyLink('Activities', ActivityRecipientLists, Activities);
  /**
   * All fields of the ActivityRecipientLists entity.
   */
  export const _allFields: Array<NumberField<ActivityRecipientLists> | StringField<ActivityRecipientLists> | EnumField<ActivityRecipientLists> | CollectionField<ActivityRecipientLists, ActivityRecipient> | OneToManyLink<ActivityRecipientLists, Activities>> = [
    ActivityRecipientLists.CODE,
    ActivityRecipientLists.NAME,
    ActivityRecipientLists.ACTIVE,
    ActivityRecipientLists.IS_MULTIPLE,
    ActivityRecipientLists.ACTIVITY_RECIPIENT_COLLECTION,
    ActivityRecipientLists.ACTIVITIES
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<ActivityRecipientLists> = new AllFields('*', ActivityRecipientLists);
  /**
   * All key fields of the ActivityRecipientLists entity.
   */
  export const _keyFields: Array<Field<ActivityRecipientLists>> = [ActivityRecipientLists.CODE];
  /**
   * Mapping of all key field names to the respective static field property ActivityRecipientLists.
   */
  export const _keys: { [keys: string]: Field<ActivityRecipientLists> } = ActivityRecipientLists._keyFields.reduce((acc: { [keys: string]: Field<ActivityRecipientLists> }, field: Field<ActivityRecipientLists>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
