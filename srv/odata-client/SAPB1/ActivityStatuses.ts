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
import type { ActivityStatusesApi } from './ActivityStatusesApi';
import { Contacts, ContactsType } from './Contacts';
import { Activities, ActivitiesType } from './Activities';

/**
 * This class represents the entity "ActivityStatuses" of service "SAPB1".
 */
export class ActivityStatuses<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ActivityStatusesType<T>
{
  /**
   * Technical entity name for ActivityStatuses.
   */
  static _entityName = 'ActivityStatuses';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the ActivityStatuses entity
   */
  static _keys = ['StatusId'];
  /**
   * Status Description.
   * @nullable
   */
  statusDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Status Id.
   */
  statusId!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Status Name.
   * @nullable
   */
  statusName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Oi Status.
   * @nullable
   */
  uOiStatus?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * One-to-many navigation property to the {@link Contacts} entity.
   */
  contacts!: Contacts<T>[];
  /**
   * One-to-many navigation property to the {@link Activities} entity.
   */
  activities!: Activities<T>[];

  constructor(readonly _entityApi: ActivityStatusesApi<T>) {
    super(_entityApi);
  }
}

export interface ActivityStatusesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  statusDescription?: DeserializedType<T, 'Edm.String'> | null;
  statusId: DeserializedType<T, 'Edm.Int32'>;
  statusName?: DeserializedType<T, 'Edm.String'> | null;
  uOiStatus?: DeserializedType<T, 'Edm.Int32'> | null;
  contacts: ContactsType<T>[];
  activities: ActivitiesType<T>[];
}
