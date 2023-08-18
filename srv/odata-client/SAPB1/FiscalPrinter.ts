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
import { FiscalPrinterParams } from './FiscalPrinterParams';
import type { FiscalPrinterApi } from './FiscalPrinterApi';
import { NfModels, NfModelsType } from './NfModels';
import { PosDailySummary, PosDailySummaryType } from './PosDailySummary';

/**
 * This class represents the entity "FiscalPrinter" of service "SAPB1".
 */
export class FiscalPrinter<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements FiscalPrinterType<T>
{
  /**
   * Technical entity name for FiscalPrinter.
   */
  static _entityName = 'FiscalPrinter';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the FiscalPrinter entity
   */
  static _keys = ['EquipmentNo'];
  /**
   * Equipment No.
   */
  equipmentNo!: DeserializedType<T, 'Edm.String'>;
  /**
   * Model.
   * @nullable
   */
  model?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Manufacturer Serial N.
   * @nullable
   */
  manufacturerSerialN?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Register No.
   * @nullable
   */
  registerNo?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Fiscal Document Model.
   * @nullable
   */
  fiscalDocumentModel?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fiscal Printers Params.
   * @nullable
   */
  fiscalPrintersParams?: FiscalPrinterParams<T>[] | null;
  /**
   * One-to-one navigation property to the {@link NfModels} entity.
   */
  nfModel?: NfModels<T> | null;
  /**
   * One-to-many navigation property to the {@link PosDailySummary} entity.
   */
  posDailySummary!: PosDailySummary<T>[];

  constructor(readonly _entityApi: FiscalPrinterApi<T>) {
    super(_entityApi);
  }
}

export interface FiscalPrinterType<
  T extends DeSerializers = DefaultDeSerializers
> {
  equipmentNo: DeserializedType<T, 'Edm.String'>;
  model?: DeserializedType<T, 'Edm.String'> | null;
  manufacturerSerialN?: DeserializedType<T, 'Edm.String'> | null;
  registerNo?: DeserializedType<T, 'Edm.Int32'> | null;
  fiscalDocumentModel?: DeserializedType<T, 'Edm.String'> | null;
  fiscalPrintersParams?: FiscalPrinterParams<T>[] | null;
  nfModel?: NfModelsType<T> | null;
  posDailySummary: PosDailySummaryType<T>[];
}
