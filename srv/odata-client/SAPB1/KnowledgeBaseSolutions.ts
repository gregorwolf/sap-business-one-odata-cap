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
import type { KnowledgeBaseSolutionsApi } from './KnowledgeBaseSolutionsApi';
import { Items, ItemsType } from './Items';
import {
  ServiceCallSolutionStatus,
  ServiceCallSolutionStatusType
} from './ServiceCallSolutionStatus';
import { Users, UsersType } from './Users';

/**
 * This class represents the entity "KnowledgeBaseSolutions" of service "SAPB1".
 */
export class KnowledgeBaseSolutions<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements KnowledgeBaseSolutionsType<T>
{
  /**
   * Technical entity name for KnowledgeBaseSolutions.
   */
  static _entityName = 'KnowledgeBaseSolutions';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the KnowledgeBaseSolutions entity
   */
  static _keys = ['SolutionCode'];
  /**
   * Item Code.
   * @nullable
   */
  itemCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Status.
   * @nullable
   */
  status?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Owner.
   * @nullable
   */
  owner?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Created By.
   * @nullable
   */
  createdBy?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Creation Date.
   * @nullable
   */
  creationDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Last Updated By.
   * @nullable
   */
  lastUpdatedBy?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Last Update Date.
   * @nullable
   */
  lastUpdateDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Solution.
   * @nullable
   */
  solution?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Symptom.
   * @nullable
   */
  symptom?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cause.
   * @nullable
   */
  cause?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Solution Code.
   */
  solutionCode!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Attachment Entry.
   * @nullable
   */
  attachmentEntry?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * One-to-one navigation property to the {@link Items} entity.
   */
  item?: Items<T> | null;
  /**
   * One-to-one navigation property to the {@link ServiceCallSolutionStatus} entity.
   */
  serviceCallSolutionStatus?: ServiceCallSolutionStatus<T> | null;
  /**
   * One-to-one navigation property to the {@link Users} entity.
   */
  user?: Users<T> | null;

  constructor(readonly _entityApi: KnowledgeBaseSolutionsApi<T>) {
    super(_entityApi);
  }
}

export interface KnowledgeBaseSolutionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  itemCode?: DeserializedType<T, 'Edm.String'> | null;
  status?: DeserializedType<T, 'Edm.Int32'> | null;
  owner?: DeserializedType<T, 'Edm.Int32'> | null;
  createdBy?: DeserializedType<T, 'Edm.Int32'> | null;
  creationDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  lastUpdatedBy?: DeserializedType<T, 'Edm.Int32'> | null;
  lastUpdateDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  solution?: DeserializedType<T, 'Edm.String'> | null;
  symptom?: DeserializedType<T, 'Edm.String'> | null;
  cause?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  solutionCode: DeserializedType<T, 'Edm.Int32'>;
  attachmentEntry?: DeserializedType<T, 'Edm.Int32'> | null;
  item?: ItemsType<T> | null;
  serviceCallSolutionStatus?: ServiceCallSolutionStatusType<T> | null;
  user?: UsersType<T> | null;
}
