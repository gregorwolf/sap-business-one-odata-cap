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
import type { NotaFiscalUsageApi } from './NotaFiscalUsageApi';
import {
  GlAccountAdvancedRules,
  GlAccountAdvancedRulesType
} from './GlAccountAdvancedRules';
import { DepreciationAreas, DepreciationAreasType } from './DepreciationAreas';
import { NotaFiscalCfop, NotaFiscalCfopType } from './NotaFiscalCfop';

/**
 * This class represents the entity "NotaFiscalUsage" of service "SAPB1".
 */
export class NotaFiscalUsage<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements NotaFiscalUsageType<T>
{
  /**
   * Technical entity name for NotaFiscalUsage.
   */
  static _entityName = 'NotaFiscalUsage';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the NotaFiscalUsage entity
   */
  static _keys = ['ID'];
  /**
   * Id.
   */
  id!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Usage.
   * @nullable
   */
  usage?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Incoming In State Cfop Code.
   * @nullable
   */
  incomingInStateCfopCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Incoming Out State Cfop Code.
   * @nullable
   */
  incomingOutStateCfopCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Incoming Import Cfop Code.
   * @nullable
   */
  incomingImportCfopCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Outgoing In State Cfop Code.
   * @nullable
   */
  outgoingInStateCfopCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Outgoing Out State Cfop Code.
   * @nullable
   */
  outgoingOutStateCfopCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Outgoing Export Cfop Code.
   * @nullable
   */
  outgoingExportCfopCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link GlAccountAdvancedRules} entity.
   */
  glAccountAdvancedRules!: GlAccountAdvancedRules<T>[];
  /**
   * One-to-many navigation property to the {@link DepreciationAreas} entity.
   */
  depreciationAreas!: DepreciationAreas<T>[];
  /**
   * One-to-one navigation property to the {@link NotaFiscalCfop} entity.
   */
  notaFiscalCfop?: NotaFiscalCfop<T> | null;

  constructor(readonly _entityApi: NotaFiscalUsageApi<T>) {
    super(_entityApi);
  }
}

export interface NotaFiscalUsageType<
  T extends DeSerializers = DefaultDeSerializers
> {
  id: DeserializedType<T, 'Edm.Int32'>;
  usage?: DeserializedType<T, 'Edm.String'> | null;
  incomingInStateCfopCode?: DeserializedType<T, 'Edm.String'> | null;
  incomingOutStateCfopCode?: DeserializedType<T, 'Edm.String'> | null;
  incomingImportCfopCode?: DeserializedType<T, 'Edm.String'> | null;
  outgoingInStateCfopCode?: DeserializedType<T, 'Edm.String'> | null;
  outgoingOutStateCfopCode?: DeserializedType<T, 'Edm.String'> | null;
  outgoingExportCfopCode?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  glAccountAdvancedRules: GlAccountAdvancedRulesType<T>[];
  depreciationAreas: DepreciationAreasType<T>[];
  notaFiscalCfop?: NotaFiscalCfopType<T> | null;
}
