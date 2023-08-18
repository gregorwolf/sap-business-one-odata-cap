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
import type { ServiceCallTypesApi } from './ServiceCallTypesApi';
import { BoYesNoEnum } from './BoYesNoEnum';
import { ServiceCalls, ServiceCallsType } from './ServiceCalls';

/**
 * This class represents the entity "ServiceCallTypes" of service "SAPB1".
 */
export class ServiceCallTypes<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ServiceCallTypesType<T>
{
  /**
   * Technical entity name for ServiceCallTypes.
   */
  static _entityName = 'ServiceCallTypes';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the ServiceCallTypes entity
   */
  static _keys = ['CallTypeID'];
  /**
   * Call Type Id.
   */
  callTypeId!: DeserializedType<T, 'Edm.Int32'>;
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

  constructor(readonly _entityApi: ServiceCallTypesApi<T>) {
    super(_entityApi);
  }
}

export interface ServiceCallTypesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  callTypeId: DeserializedType<T, 'Edm.Int32'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  active?: BoYesNoEnum | null;
  serviceCalls: ServiceCallsType<T>[];
}
