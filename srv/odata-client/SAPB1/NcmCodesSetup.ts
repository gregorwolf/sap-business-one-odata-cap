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
import type { NcmCodesSetupApi } from './NcmCodesSetupApi';
import { Items, ItemsType } from './Items';
import { DnfCodeSetup, DnfCodeSetupType } from './DnfCodeSetup';

/**
 * This class represents the entity "NCMCodesSetup" of service "SAPB1".
 */
export class NcmCodesSetup<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements NcmCodesSetupType<T>
{
  /**
   * Technical entity name for NcmCodesSetup.
   */
  static _entityName = 'NCMCodesSetup';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the NcmCodesSetup entity
   */
  static _keys = ['AbsEntry'];
  /**
   * Abs Entry.
   */
  absEntry!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Ncm Code.
   * @nullable
   */
  ncmCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Group Code.
   * @nullable
   */
  groupCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link Items} entity.
   */
  items!: Items<T>[];
  /**
   * One-to-many navigation property to the {@link DnfCodeSetup} entity.
   */
  dnfCodeSetup!: DnfCodeSetup<T>[];

  constructor(readonly _entityApi: NcmCodesSetupApi<T>) {
    super(_entityApi);
  }
}

export interface NcmCodesSetupType<
  T extends DeSerializers = DefaultDeSerializers
> {
  absEntry: DeserializedType<T, 'Edm.Int32'>;
  ncmCode?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  groupCode?: DeserializedType<T, 'Edm.String'> | null;
  items: ItemsType<T>[];
  dnfCodeSetup: DnfCodeSetupType<T>[];
}
