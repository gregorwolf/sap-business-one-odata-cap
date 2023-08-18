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
import { PickListsLine } from './PickListsLine';
import type { PickListsApi } from './PickListsApi';
import { BoPickStatus } from './BoPickStatus';
import { BoYesNoEnum } from './BoYesNoEnum';
import { Users, UsersType } from './Users';

/**
 * This class represents the entity "PickLists" of service "SAPB1".
 */
export class PickLists<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements PickListsType<T>
{
  /**
   * Technical entity name for PickLists.
   */
  static _entityName = 'PickLists';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the PickLists entity
   */
  static _keys = ['Absoluteentry'];
  /**
   * Absoluteentry.
   */
  absoluteentry!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Name.
   * @nullable
   */
  name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Owner Code.
   * @nullable
   */
  ownerCode?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Owner Name.
   * @nullable
   */
  ownerName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pick Date.
   * @nullable
   */
  pickDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Remarks.
   * @nullable
   */
  remarks?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Status.
   * @nullable
   */
  status?: BoPickStatus | null;
  /**
   * Object Type.
   * @nullable
   */
  objectType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Use Base Units.
   * @nullable
   */
  useBaseUnits?: BoYesNoEnum | null;
  /**
   * Pick Lists Lines.
   * @nullable
   */
  pickListsLines?: PickListsLine<T>[] | null;
  /**
   * One-to-one navigation property to the {@link Users} entity.
   */
  user?: Users<T> | null;

  constructor(readonly _entityApi: PickListsApi<T>) {
    super(_entityApi);
  }
}

export interface PickListsType<T extends DeSerializers = DefaultDeSerializers> {
  absoluteentry: DeserializedType<T, 'Edm.Int32'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  ownerCode?: DeserializedType<T, 'Edm.Int32'> | null;
  ownerName?: DeserializedType<T, 'Edm.String'> | null;
  pickDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  remarks?: DeserializedType<T, 'Edm.String'> | null;
  status?: BoPickStatus | null;
  objectType?: DeserializedType<T, 'Edm.String'> | null;
  useBaseUnits?: BoYesNoEnum | null;
  pickListsLines?: PickListsLine<T>[] | null;
  user?: UsersType<T> | null;
}
