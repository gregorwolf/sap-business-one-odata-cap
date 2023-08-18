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
import type { CockpitsApi } from './CockpitsApi';
import { BoCockpitTypeEnum } from './BoCockpitTypeEnum';
import { Users, UsersType } from './Users';

/**
 * This class represents the entity "Cockpits" of service "SAPB1".
 */
export class Cockpits<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements CockpitsType<T>
{
  /**
   * Technical entity name for Cockpits.
   */
  static _entityName = 'Cockpits';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the Cockpits entity
   */
  static _keys = ['AbsEntry'];
  /**
   * Abs Entry.
   */
  absEntry!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Code.
   * @nullable
   */
  code?: DeserializedType<T, 'Edm.Int32'> | null;
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
   * User Signature.
   * @nullable
   */
  userSignature?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Date.
   * @nullable
   */
  date?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Time.
   * @nullable
   */
  time?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  /**
   * Manufacturer.
   * @nullable
   */
  manufacturer?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Publisher.
   * @nullable
   */
  publisher?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cockpit Type.
   * @nullable
   */
  cockpitType?: BoCockpitTypeEnum | null;
  /**
   * One-to-one navigation property to the {@link Users} entity.
   */
  user?: Users<T> | null;

  constructor(readonly _entityApi: CockpitsApi<T>) {
    super(_entityApi);
  }
}

export interface CockpitsType<T extends DeSerializers = DefaultDeSerializers> {
  absEntry: DeserializedType<T, 'Edm.Int32'>;
  code?: DeserializedType<T, 'Edm.Int32'> | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  userSignature?: DeserializedType<T, 'Edm.Int32'> | null;
  date?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  time?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  manufacturer?: DeserializedType<T, 'Edm.String'> | null;
  publisher?: DeserializedType<T, 'Edm.String'> | null;
  cockpitType?: BoCockpitTypeEnum | null;
  user?: UsersType<T> | null;
}
