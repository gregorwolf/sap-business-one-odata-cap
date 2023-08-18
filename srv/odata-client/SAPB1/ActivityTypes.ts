/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v4';
import type { ActivityTypesApi } from './ActivityTypesApi';
import { ActivitySubjects, ActivitySubjectsType } from './ActivitySubjects';
import { Contacts, ContactsType } from './Contacts';
import { Activities, ActivitiesType } from './Activities';

/**
 * This class represents the entity "ActivityTypes" of service "SAPB1".
 */
export class ActivityTypes<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ActivityTypesType<T>
{
  /**
   * Technical entity name for ActivityTypes.
   */
  static _entityName = 'ActivityTypes';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the ActivityTypes entity
   */
  static _keys = ['Code'];
  /**
   * Code.
   */
  code!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Name.
   * @nullable
   */
  name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link ActivitySubjects} entity.
   */
  activitySubjects!: ActivitySubjects<T>[];
  /**
   * One-to-many navigation property to the {@link Contacts} entity.
   */
  contacts!: Contacts<T>[];
  /**
   * One-to-many navigation property to the {@link Activities} entity.
   */
  activities!: Activities<T>[];

  constructor(readonly _entityApi: ActivityTypesApi<T>) {
    super(_entityApi);
  }
}

export interface ActivityTypesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  code: DeserializedType<T, 'Edm.Int32'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  activitySubjects: ActivitySubjectsType<T>[];
  contacts: ContactsType<T>[];
  activities: ActivitiesType<T>[];
}
