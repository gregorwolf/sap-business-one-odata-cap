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
import type { ActivitySubjectsApi } from './ActivitySubjectsApi';
import { BoYesNoEnum } from './BoYesNoEnum';
import { ActivityTypes, ActivityTypesType } from './ActivityTypes';
import { Contacts, ContactsType } from './Contacts';
import { Activities, ActivitiesType } from './Activities';

/**
 * This class represents the entity "ActivitySubjects" of service "SAPB1".
 */
export class ActivitySubjects<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ActivitySubjectsType<T>
{
  /**
   * Technical entity name for ActivitySubjects.
   */
  static _entityName = 'ActivitySubjects';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the ActivitySubjects entity
   */
  static _keys = ['Code'];
  /**
   * Code.
   */
  code!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Description.
   * @nullable
   */
  description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Activity Type.
   * @nullable
   */
  activityType?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Is Active.
   * @nullable
   */
  isActive?: BoYesNoEnum | null;
  /**
   * One-to-one navigation property to the {@link ActivityTypes} entity.
   */
  activityType2?: ActivityTypes<T> | null;
  /**
   * One-to-many navigation property to the {@link Contacts} entity.
   */
  contacts!: Contacts<T>[];
  /**
   * One-to-many navigation property to the {@link Activities} entity.
   */
  activities!: Activities<T>[];

  constructor(readonly _entityApi: ActivitySubjectsApi<T>) {
    super(_entityApi);
  }
}

export interface ActivitySubjectsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  code: DeserializedType<T, 'Edm.Int32'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  activityType?: DeserializedType<T, 'Edm.Int32'> | null;
  isActive?: BoYesNoEnum | null;
  activityType2?: ActivityTypesType<T> | null;
  contacts: ContactsType<T>[];
  activities: ActivitiesType<T>[];
}
