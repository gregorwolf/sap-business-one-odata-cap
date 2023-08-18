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
import { QueueMember } from './QueueMember';
import type { QueueApi } from './QueueApi';
import { BoYesNoEnum } from './BoYesNoEnum';
import { ServiceCalls, ServiceCallsType } from './ServiceCalls';
import { Users, UsersType } from './Users';

/**
 * This class represents the entity "Queue" of service "SAPB1".
 */
export class Queue<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements QueueType<T>
{
  /**
   * Technical entity name for Queue.
   */
  static _entityName = 'Queue';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the Queue entity
   */
  static _keys = ['QueueID'];
  /**
   * Queue Id.
   */
  queueId!: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inactive.
   * @nullable
   */
  inactive?: BoYesNoEnum | null;
  /**
   * Queue Manager.
   * @nullable
   */
  queueManager?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Queue Email.
   * @nullable
   */
  queueEmail?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Queue Members.
   * @nullable
   */
  queueMembers?: QueueMember<T>[] | null;
  /**
   * One-to-many navigation property to the {@link ServiceCalls} entity.
   */
  serviceCalls!: ServiceCalls<T>[];
  /**
   * One-to-one navigation property to the {@link Users} entity.
   */
  user?: Users<T> | null;

  constructor(readonly _entityApi: QueueApi<T>) {
    super(_entityApi);
  }
}

export interface QueueType<T extends DeSerializers = DefaultDeSerializers> {
  queueId: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  inactive?: BoYesNoEnum | null;
  queueManager?: DeserializedType<T, 'Edm.Int32'> | null;
  queueEmail?: DeserializedType<T, 'Edm.String'> | null;
  queueMembers?: QueueMember<T>[] | null;
  serviceCalls: ServiceCallsType<T>[];
  user?: UsersType<T> | null;
}
