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
import { WebClientListviewFilterCondition } from './WebClientListviewFilterCondition';
import type { WebClientListviewFiltersApi } from './WebClientListviewFiltersApi';

/**
 * This class represents the entity "WebClientListviewFilters" of service "SAPB1".
 */
export class WebClientListviewFilters<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements WebClientListviewFiltersType<T>
{
  /**
   * Technical entity name for WebClientListviewFilters.
   */
  static _entityName = 'WebClientListviewFilters';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the WebClientListviewFilters entity
   */
  static _keys = ['Guid'];
  /**
   * Guid.
   */
  guid!: DeserializedType<T, 'Edm.String'>;
  /**
   * User Id.
   * @nullable
   */
  userId?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Table Name.
   * @nullable
   */
  tableName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Filter Name.
   * @nullable
   */
  filterName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Web Client Listview Filter Conditions.
   * @nullable
   */
  webClientListviewFilterConditions?:
    | WebClientListviewFilterCondition<T>[]
    | null;

  constructor(readonly _entityApi: WebClientListviewFiltersApi<T>) {
    super(_entityApi);
  }
}

export interface WebClientListviewFiltersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  guid: DeserializedType<T, 'Edm.String'>;
  userId?: DeserializedType<T, 'Edm.Int32'> | null;
  tableName?: DeserializedType<T, 'Edm.String'> | null;
  filterName?: DeserializedType<T, 'Edm.String'> | null;
  webClientListviewFilterConditions?:
    | WebClientListviewFilterCondition<T>[]
    | null;
}
