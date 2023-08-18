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
import type { U_BosettingsApi } from './U_BosettingsApi';

/**
 * This class represents the entity "U_BOSETTINGS" of service "SAPB1".
 */
export class U_Bosettings<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements U_BosettingsType<T>
{
  /**
   * Technical entity name for U_Bosettings.
   */
  static _entityName = 'U_BOSETTINGS';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the U_Bosettings entity
   */
  static _keys = ['Code'];
  /**
   * Code.
   */
  code!: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   * @nullable
   */
  name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Sync Ca.
   * @nullable
   */
  uSyncCa?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Sync Co.
   * @nullable
   */
  uSyncCo?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Sync Ta.
   * @nullable
   */
  uSyncTa?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Update S.
   * @nullable
   */
  uUpdateS?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Update O.
   * @nullable
   */
  uUpdateO?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Preview.
   * @nullable
   */
  uPreview?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Resolve C.
   * @nullable
   */
  uResolveC?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Cfls Log.
   * @nullable
   */
  uCflsLog?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Use Ca Cat.
   * @nullable
   */
  uUseCaCat?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Ca Cat.
   * @nullable
   */
  uCaCat?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Ca Folder.
   * @nullable
   */
  uCaFolder?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Ca Range.
   * @nullable
   */
  uCaRange?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U Use Co Cat.
   * @nullable
   */
  uUseCoCat?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Co Cat.
   * @nullable
   */
  uCoCat?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Co Folder.
   * @nullable
   */
  uCoFolder?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Co Range.
   * @nullable
   */
  uCoRange?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U Co From.
   * @nullable
   */
  uCoFrom?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Co To.
   * @nullable
   */
  uCoTo?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U B Ps From.
   * @nullable
   */
  uBPsFrom?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U B Ps To.
   * @nullable
   */
  uBPsTo?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U G Rs Of B Ps.
   * @nullable
   */
  uGRsOfBPs?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Sales P.
   * @nullable
   */
  uSalesP?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Use Ta Ca.
   * @nullable
   */
  uUseTaCa?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Ta Cat.
   * @nullable
   */
  uTaCat?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Ta Folder.
   * @nullable
   */
  uTaFolder?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Ca B 1 Cr.
   * @nullable
   */
  uCaB1Cr?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U Ca Bp From.
   * @nullable
   */
  uCaBpFrom?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Ca Bp To.
   * @nullable
   */
  uCaBpTo?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Ca Sales P.
   * @nullable
   */
  uCaSalesP?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Ca Pre B 1.
   * @nullable
   */
  uCaPreB1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Co Sync Bp.
   * @nullable
   */
  uCoSyncBp?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Co Sync Oc.
   * @nullable
   */
  uCoSyncOc?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Co Pre B 1.
   * @nullable
   */
  uCoPreB1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Co Sn Path.
   * @nullable
   */
  uCoSnPath?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Ta Range.
   * @nullable
   */
  uTaRange?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U Ta B 1 Cr.
   * @nullable
   */
  uTaB1Cr?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U Ta Bp From.
   * @nullable
   */
  uTaBpFrom?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Ta Bp To.
   * @nullable
   */
  uTaBpTo?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Ta Sales P.
   * @nullable
   */
  uTaSalesP?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Ta Pre B 1.
   * @nullable
   */
  uTaPreB1?: DeserializedType<T, 'Edm.String'> | null;

  constructor(readonly _entityApi: U_BosettingsApi<T>) {
    super(_entityApi);
  }
}

export interface U_BosettingsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  code: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  uSyncCa?: DeserializedType<T, 'Edm.String'> | null;
  uSyncCo?: DeserializedType<T, 'Edm.String'> | null;
  uSyncTa?: DeserializedType<T, 'Edm.String'> | null;
  uUpdateS?: DeserializedType<T, 'Edm.String'> | null;
  uUpdateO?: DeserializedType<T, 'Edm.String'> | null;
  uPreview?: DeserializedType<T, 'Edm.String'> | null;
  uResolveC?: DeserializedType<T, 'Edm.String'> | null;
  uCflsLog?: DeserializedType<T, 'Edm.String'> | null;
  uUseCaCat?: DeserializedType<T, 'Edm.String'> | null;
  uCaCat?: DeserializedType<T, 'Edm.String'> | null;
  uCaFolder?: DeserializedType<T, 'Edm.String'> | null;
  uCaRange?: DeserializedType<T, 'Edm.Int32'> | null;
  uUseCoCat?: DeserializedType<T, 'Edm.String'> | null;
  uCoCat?: DeserializedType<T, 'Edm.String'> | null;
  uCoFolder?: DeserializedType<T, 'Edm.String'> | null;
  uCoRange?: DeserializedType<T, 'Edm.Int32'> | null;
  uCoFrom?: DeserializedType<T, 'Edm.String'> | null;
  uCoTo?: DeserializedType<T, 'Edm.String'> | null;
  uBPsFrom?: DeserializedType<T, 'Edm.String'> | null;
  uBPsTo?: DeserializedType<T, 'Edm.String'> | null;
  uGRsOfBPs?: DeserializedType<T, 'Edm.String'> | null;
  uSalesP?: DeserializedType<T, 'Edm.String'> | null;
  uUseTaCa?: DeserializedType<T, 'Edm.String'> | null;
  uTaCat?: DeserializedType<T, 'Edm.String'> | null;
  uTaFolder?: DeserializedType<T, 'Edm.String'> | null;
  uCaB1Cr?: DeserializedType<T, 'Edm.Int32'> | null;
  uCaBpFrom?: DeserializedType<T, 'Edm.String'> | null;
  uCaBpTo?: DeserializedType<T, 'Edm.String'> | null;
  uCaSalesP?: DeserializedType<T, 'Edm.String'> | null;
  uCaPreB1?: DeserializedType<T, 'Edm.String'> | null;
  uCoSyncBp?: DeserializedType<T, 'Edm.String'> | null;
  uCoSyncOc?: DeserializedType<T, 'Edm.String'> | null;
  uCoPreB1?: DeserializedType<T, 'Edm.String'> | null;
  uCoSnPath?: DeserializedType<T, 'Edm.String'> | null;
  uTaRange?: DeserializedType<T, 'Edm.Int32'> | null;
  uTaB1Cr?: DeserializedType<T, 'Edm.Int32'> | null;
  uTaBpFrom?: DeserializedType<T, 'Edm.String'> | null;
  uTaBpTo?: DeserializedType<T, 'Edm.String'> | null;
  uTaSalesP?: DeserializedType<T, 'Edm.String'> | null;
  uTaPreB1?: DeserializedType<T, 'Edm.String'> | null;
}
