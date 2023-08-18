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
import { ActivityRecipient } from './ActivityRecipient';
import type { ActivityRecipientListsApi } from './ActivityRecipientListsApi';
import { BoYesNoEnum } from './BoYesNoEnum';
import { Activities, ActivitiesType } from './Activities';

/**
 * This class represents the entity "ActivityRecipientLists" of service "SAPB1".
 */
export class ActivityRecipientLists<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ActivityRecipientListsType<T>
{
  /**
   * Technical entity name for ActivityRecipientLists.
   */
  static _entityName = 'ActivityRecipientLists';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the ActivityRecipientLists entity
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
   * Active.
   * @nullable
   */
  active?: BoYesNoEnum | null;
  /**
   * Is Multiple.
   * @nullable
   */
  isMultiple?: BoYesNoEnum | null;
  /**
   * Activity Recipient Collection.
   * @nullable
   */
  activityRecipientCollection?: ActivityRecipient<T>[] | null;
  /**
   * One-to-many navigation property to the {@link Activities} entity.
   */
  activities!: Activities<T>[];

  constructor(readonly _entityApi: ActivityRecipientListsApi<T>) {
    super(_entityApi);
  }
}

export interface ActivityRecipientListsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  code: DeserializedType<T, 'Edm.Int32'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  active?: BoYesNoEnum | null;
  isMultiple?: BoYesNoEnum | null;
  activityRecipientCollection?: ActivityRecipient<T>[] | null;
  activities: ActivitiesType<T>[];
}
