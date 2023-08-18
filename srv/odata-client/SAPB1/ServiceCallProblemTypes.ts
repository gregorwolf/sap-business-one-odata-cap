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
import type { ServiceCallProblemTypesApi } from './ServiceCallProblemTypesApi';
import { BoYesNoEnum } from './BoYesNoEnum';
import { ServiceCalls, ServiceCallsType } from './ServiceCalls';

/**
 * This class represents the entity "ServiceCallProblemTypes" of service "SAPB1".
 */
export class ServiceCallProblemTypes<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ServiceCallProblemTypesType<T>
{
  /**
   * Technical entity name for ServiceCallProblemTypes.
   */
  static _entityName = 'ServiceCallProblemTypes';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the ServiceCallProblemTypes entity
   */
  static _keys = ['ProblemTypeID'];
  /**
   * Problem Type Id.
   */
  problemTypeId!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Name.
   * @nullable
   */
  name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Active.
   * @nullable
   */
  active?: BoYesNoEnum | null;
  /**
   * One-to-many navigation property to the {@link ServiceCalls} entity.
   */
  serviceCalls!: ServiceCalls<T>[];

  constructor(readonly _entityApi: ServiceCallProblemTypesApi<T>) {
    super(_entityApi);
  }
}

export interface ServiceCallProblemTypesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  problemTypeId: DeserializedType<T, 'Edm.Int32'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  active?: BoYesNoEnum | null;
  serviceCalls: ServiceCallsType<T>[];
}
