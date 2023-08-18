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
import type { DeterminationCriteriasApi } from './DeterminationCriteriasApi';
import { BoYesNoEnum } from './BoYesNoEnum';

/**
 * This class represents the entity "DeterminationCriterias" of service "SAPB1".
 */
export class DeterminationCriterias<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements DeterminationCriteriasType<T>
{
  /**
   * Technical entity name for DeterminationCriterias.
   */
  static _entityName = 'DeterminationCriterias';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the DeterminationCriterias entity
   */
  static _keys = ['DmcId'];
  /**
   * Dmc Id.
   */
  dmcId!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Determination Criteria Property.
   * @nullable
   */
  determinationCriteriaProperty?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Active.
   * @nullable
   */
  isActive?: BoYesNoEnum | null;
  /**
   * Priority.
   * @nullable
   */
  priority?: DeserializedType<T, 'Edm.Int32'> | null;

  constructor(readonly _entityApi: DeterminationCriteriasApi<T>) {
    super(_entityApi);
  }
}

export interface DeterminationCriteriasType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dmcId: DeserializedType<T, 'Edm.Int32'>;
  determinationCriteriaProperty?: DeserializedType<T, 'Edm.String'> | null;
  isActive?: BoYesNoEnum | null;
  priority?: DeserializedType<T, 'Edm.Int32'> | null;
}
