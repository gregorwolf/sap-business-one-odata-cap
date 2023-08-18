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
import type { ActivityLocationsApi } from './ActivityLocationsApi';
import { ServiceCalls, ServiceCallsType } from './ServiceCalls';
import { Contacts, ContactsType } from './Contacts';
import { Activities, ActivitiesType } from './Activities';

/**
 * This class represents the entity "ActivityLocations" of service "SAPB1".
 */
export class ActivityLocations<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ActivityLocationsType<T>
{
  /**
   * Technical entity name for ActivityLocations.
   */
  static _entityName = 'ActivityLocations';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the ActivityLocations entity
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
   * One-to-many navigation property to the {@link ServiceCalls} entity.
   */
  serviceCalls!: ServiceCalls<T>[];
  /**
   * One-to-many navigation property to the {@link Contacts} entity.
   */
  contacts!: Contacts<T>[];
  /**
   * One-to-many navigation property to the {@link Activities} entity.
   */
  activities!: Activities<T>[];

  constructor(readonly _entityApi: ActivityLocationsApi<T>) {
    super(_entityApi);
  }
}

export interface ActivityLocationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  code: DeserializedType<T, 'Edm.Int32'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  serviceCalls: ServiceCallsType<T>[];
  contacts: ContactsType<T>[];
  activities: ActivitiesType<T>[];
}
