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
import type { ServiceCallSolutionStatusApi } from './ServiceCallSolutionStatusApi';
import { BoYesNoEnum } from './BoYesNoEnum';
import {
  KnowledgeBaseSolutions,
  KnowledgeBaseSolutionsType
} from './KnowledgeBaseSolutions';

/**
 * This class represents the entity "ServiceCallSolutionStatus" of service "SAPB1".
 */
export class ServiceCallSolutionStatus<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ServiceCallSolutionStatusType<T>
{
  /**
   * Technical entity name for ServiceCallSolutionStatus.
   */
  static _entityName = 'ServiceCallSolutionStatus';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the ServiceCallSolutionStatus entity
   */
  static _keys = ['StatusId'];
  /**
   * Status Id.
   */
  statusId!: DeserializedType<T, 'Edm.Int32'>;
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
   * One-to-many navigation property to the {@link KnowledgeBaseSolutions} entity.
   */
  knowledgeBaseSolutions!: KnowledgeBaseSolutions<T>[];

  constructor(readonly _entityApi: ServiceCallSolutionStatusApi<T>) {
    super(_entityApi);
  }
}

export interface ServiceCallSolutionStatusType<
  T extends DeSerializers = DefaultDeSerializers
> {
  statusId: DeserializedType<T, 'Edm.Int32'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  active?: BoYesNoEnum | null;
  knowledgeBaseSolutions: KnowledgeBaseSolutionsType<T>[];
}
