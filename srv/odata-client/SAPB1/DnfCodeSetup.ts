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
import type { DnfCodeSetupApi } from './DnfCodeSetupApi';
import { Items, ItemsType } from './Items';
import { NcmCodesSetup, NcmCodesSetupType } from './NcmCodesSetup';

/**
 * This class represents the entity "DNFCodeSetup" of service "SAPB1".
 */
export class DnfCodeSetup<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements DnfCodeSetupType<T>
{
  /**
   * Technical entity name for DnfCodeSetup.
   */
  static _entityName = 'DNFCodeSetup';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the DnfCodeSetup entity
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
  ncmCode?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Dnf Code.
   * @nullable
   */
  dnfCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Uo M.
   * @nullable
   */
  uoM?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Factor.
   * @nullable
   */
  factor?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * One-to-many navigation property to the {@link Items} entity.
   */
  items!: Items<T>[];
  /**
   * One-to-one navigation property to the {@link NcmCodesSetup} entity.
   */
  ncmCodeSetup?: NcmCodesSetup<T> | null;

  constructor(readonly _entityApi: DnfCodeSetupApi<T>) {
    super(_entityApi);
  }
}

export interface DnfCodeSetupType<
  T extends DeSerializers = DefaultDeSerializers
> {
  absEntry: DeserializedType<T, 'Edm.Int32'>;
  ncmCode?: DeserializedType<T, 'Edm.Int32'> | null;
  dnfCode?: DeserializedType<T, 'Edm.String'> | null;
  uoM?: DeserializedType<T, 'Edm.String'> | null;
  factor?: DeserializedType<T, 'Edm.Double'> | null;
  items: ItemsType<T>[];
  ncmCodeSetup?: NcmCodesSetupType<T> | null;
}
