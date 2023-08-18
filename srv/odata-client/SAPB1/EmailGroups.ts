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
import type { EmailGroupsApi } from './EmailGroupsApi';

/**
 * This class represents the entity "EmailGroups" of service "SAPB1".
 */
export class EmailGroups<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements EmailGroupsType<T>
{
  /**
   * Technical entity name for EmailGroups.
   */
  static _entityName = 'EmailGroups';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the EmailGroups entity
   */
  static _keys = ['EmailGroupCode'];
  /**
   * Email Group Code.
   */
  emailGroupCode!: DeserializedType<T, 'Edm.String'>;
  /**
   * Email Group Name.
   * @nullable
   */
  emailGroupName?: DeserializedType<T, 'Edm.String'> | null;

  constructor(readonly _entityApi: EmailGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface EmailGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  emailGroupCode: DeserializedType<T, 'Edm.String'>;
  emailGroupName?: DeserializedType<T, 'Edm.String'> | null;
}
