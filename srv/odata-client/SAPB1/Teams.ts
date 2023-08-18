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
import { TeamMember } from './TeamMember';
import type { TeamsApi } from './TeamsApi';

/**
 * This class represents the entity "Teams" of service "SAPB1".
 */
export class Teams<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements TeamsType<T>
{
  /**
   * Technical entity name for Teams.
   */
  static _entityName = 'Teams';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the Teams entity
   */
  static _keys = ['TeamID'];
  /**
   * Team Id.
   */
  teamId!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Team Name.
   * @nullable
   */
  teamName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Team Members.
   * @nullable
   */
  teamMembers?: TeamMember<T>[] | null;

  constructor(readonly _entityApi: TeamsApi<T>) {
    super(_entityApi);
  }
}

export interface TeamsType<T extends DeSerializers = DefaultDeSerializers> {
  teamId: DeserializedType<T, 'Edm.Int32'>;
  teamName?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  teamMembers?: TeamMember<T>[] | null;
}
