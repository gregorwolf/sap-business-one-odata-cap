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
import type { SingleUserConnectionsApi } from './SingleUserConnectionsApi';
import { SingleUserConnectionActionEnum } from './SingleUserConnectionActionEnum';

/**
 * This class represents the entity "SingleUserConnections" of service "SAPB1".
 */
export class SingleUserConnections<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SingleUserConnectionsType<T>
{
  /**
   * Technical entity name for SingleUserConnections.
   */
  static _entityName = 'SingleUserConnections';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the SingleUserConnections entity
   */
  static _keys = ['Code'];
  /**
   * Code.
   */
  code!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Action.
   * @nullable
   */
  action?: SingleUserConnectionActionEnum | null;

  constructor(readonly _entityApi: SingleUserConnectionsApi<T>) {
    super(_entityApi);
  }
}

export interface SingleUserConnectionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  code: DeserializedType<T, 'Edm.Int32'>;
  action?: SingleUserConnectionActionEnum | null;
}
