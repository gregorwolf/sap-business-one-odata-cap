/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { QueueRequestBuilder } from './QueueRequestBuilder';
import { QueueMember } from './QueueMember';
import { BoYesNoEnum } from './BoYesNoEnum';
import { AllFields, CollectionField, CustomFieldV4, EntityBuilderType, EntityV4, EnumField, Field, NumberField, OneToManyLink, OneToOneLink, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "Queue" of service "SAPB1".
 */
export class Queue extends EntityV4 implements QueueType {
  /**
   * Technical entity name for Queue.
   */
  static _entityName = 'Queue';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/b1s/v2/';
  /**
   * Queue Id.
   * @nullable
   */
  queueId?: string;
  /**
   * Description.
   * @nullable
   */
  description?: string;
  /**
   * Inactive.
   * @nullable
   */
  inactive?: BoYesNoEnum;
  /**
   * Queue Manager.
   * @nullable
   */
  queueManager?: number;
  /**
   * Queue Email.
   * @nullable
   */
  queueEmail?: string;
  /**
   * Queue Members.
   * @nullable
   */
  queueMembers?: QueueMember[];
  /**
   * One-to-one navigation property to the [[Users]] entity.
   */
  user!: Users;
  /**
   * One-to-many navigation property to the [[ServiceCalls]] entity.
   */
  serviceCalls!: ServiceCalls[];

  /**
   * Returns an entity builder to construct instances of `Queue`.
   * @returns A builder that constructs instances of entity type `Queue`.
   */
  static builder(): EntityBuilderType<Queue, QueueType> {
    return EntityV4.entityBuilder(Queue);
  }

  /**
   * Returns a request builder to construct requests for operations on the `Queue` entity type.
   * @returns A `Queue` request builder.
   */
  static requestBuilder(): QueueRequestBuilder {
    return new QueueRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `Queue`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `Queue`.
   */
  static customField(fieldName: string): CustomFieldV4<Queue> {
    return EntityV4.customFieldSelector(fieldName, Queue);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { Users, UsersType } from './Users';
import { ServiceCalls, ServiceCallsType } from './ServiceCalls';

export interface QueueType {
  queueId?: string | null;
  description?: string | null;
  inactive?: BoYesNoEnum | null;
  queueManager?: number | null;
  queueEmail?: string | null;
  queueMembers?: QueueMember[] | null;
  user: UsersType;
  serviceCalls: ServiceCallsType[];
}

export namespace Queue {
  /**
   * Static representation of the [[queueId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const QUEUE_ID: StringField<Queue> = new StringField('QueueID', Queue, 'Edm.String');
  /**
   * Static representation of the [[description]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION: StringField<Queue> = new StringField('Description', Queue, 'Edm.String');
  /**
   * Static representation of the [[inactive]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INACTIVE: EnumField<Queue> = new EnumField('Inactive', Queue);
  /**
   * Static representation of the [[queueManager]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const QUEUE_MANAGER: NumberField<Queue> = new NumberField('QueueManager', Queue, 'Edm.Int32');
  /**
   * Static representation of the [[queueEmail]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const QUEUE_EMAIL: StringField<Queue> = new StringField('QueueEmail', Queue, 'Edm.String');
  /**
   * Static representation of the [[queueMembers]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const QUEUE_MEMBERS: CollectionField<Queue, QueueMember> = new CollectionField('QueueMembers', Queue, QueueMember);
  /**
   * Static representation of the one-to-one navigation property [[user]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER: OneToOneLink<Queue, Users> = new OneToOneLink('User', Queue, Users);
  /**
   * Static representation of the one-to-many navigation property [[serviceCalls]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SERVICE_CALLS: OneToManyLink<Queue, ServiceCalls> = new OneToManyLink('ServiceCalls', Queue, ServiceCalls);
  /**
   * All fields of the Queue entity.
   */
  export const _allFields: Array<StringField<Queue> | EnumField<Queue> | NumberField<Queue> | CollectionField<Queue, QueueMember> | OneToOneLink<Queue, Users> | OneToManyLink<Queue, ServiceCalls>> = [
    Queue.QUEUE_ID,
    Queue.DESCRIPTION,
    Queue.INACTIVE,
    Queue.QUEUE_MANAGER,
    Queue.QUEUE_EMAIL,
    Queue.QUEUE_MEMBERS,
    Queue.USER,
    Queue.SERVICE_CALLS
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<Queue> = new AllFields('*', Queue);
  /**
   * All key fields of the Queue entity.
   */
  export const _keyFields: Array<Field<Queue>> = [Queue.QUEUE_ID];
  /**
   * Mapping of all key field names to the respective static field property Queue.
   */
  export const _keys: { [keys: string]: Field<Queue> } = Queue._keyFields.reduce((acc: { [keys: string]: Field<Queue> }, field: Field<Queue>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
