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
import { AssetRevaluationLine } from './AssetRevaluationLine';
import type { AssetRevaluationsApi } from './AssetRevaluationsApi';
import { BoYesNoEnum } from './BoYesNoEnum';
import { DepreciationAreas, DepreciationAreasType } from './DepreciationAreas';
import { JournalEntries, JournalEntriesType } from './JournalEntries';
import { BusinessPlaces, BusinessPlacesType } from './BusinessPlaces';

/**
 * This class represents the entity "AssetRevaluations" of service "SAPB1".
 */
export class AssetRevaluations<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements AssetRevaluationsType<T>
{
  /**
   * Technical entity name for AssetRevaluations.
   */
  static _entityName = 'AssetRevaluations';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the AssetRevaluations entity
   */
  static _keys = ['DocEntry'];
  /**
   * Doc Entry.
   */
  docEntry!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Doc Num.
   * @nullable
   */
  docNum?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Series.
   * @nullable
   */
  series?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Posting Date.
   * @nullable
   */
  postingDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Asset Value Date.
   * @nullable
   */
  assetValueDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Reference.
   * @nullable
   */
  reference?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Remarks.
   * @nullable
   */
  remarks?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Journal Remarks.
   * @nullable
   */
  journalRemarks?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Depreciation Area.
   * @nullable
   */
  depreciationArea?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Trans Id.
   * @nullable
   */
  transId?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Hand Written.
   * @nullable
   */
  handWritten?: BoYesNoEnum | null;
  /**
   * Period Indicator.
   * @nullable
   */
  periodIndicator?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Document Date.
   * @nullable
   */
  documentDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Bpl Id.
   * @nullable
   */
  bplId?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Bpl Name.
   * @nullable
   */
  bplName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vat Reg Num.
   * @nullable
   */
  vatRegNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Revaluation Percent.
   * @nullable
   */
  revaluationPercent?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Ifrs Posting.
   * @nullable
   */
  ifrsPosting?: BoYesNoEnum | null;
  /**
   * Summerize By Projects.
   * @nullable
   */
  summerizeByProjects?: BoYesNoEnum | null;
  /**
   * Summerize By Distribution Rules.
   * @nullable
   */
  summerizeByDistributionRules?: BoYesNoEnum | null;
  /**
   * Asset Revaluation Line Collection.
   * @nullable
   */
  assetRevaluationLineCollection?: AssetRevaluationLine<T>[] | null;
  /**
   * One-to-one navigation property to the {@link DepreciationAreas} entity.
   */
  depreciationArea2?: DepreciationAreas<T> | null;
  /**
   * One-to-one navigation property to the {@link JournalEntries} entity.
   */
  journalEntry?: JournalEntries<T> | null;
  /**
   * One-to-one navigation property to the {@link BusinessPlaces} entity.
   */
  businessPlace?: BusinessPlaces<T> | null;

  constructor(readonly _entityApi: AssetRevaluationsApi<T>) {
    super(_entityApi);
  }
}

export interface AssetRevaluationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  docEntry: DeserializedType<T, 'Edm.Int32'>;
  docNum?: DeserializedType<T, 'Edm.Int32'> | null;
  series?: DeserializedType<T, 'Edm.Int32'> | null;
  postingDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  assetValueDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  reference?: DeserializedType<T, 'Edm.String'> | null;
  remarks?: DeserializedType<T, 'Edm.String'> | null;
  journalRemarks?: DeserializedType<T, 'Edm.String'> | null;
  depreciationArea?: DeserializedType<T, 'Edm.String'> | null;
  transId?: DeserializedType<T, 'Edm.Int32'> | null;
  handWritten?: BoYesNoEnum | null;
  periodIndicator?: DeserializedType<T, 'Edm.String'> | null;
  documentDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  bplId?: DeserializedType<T, 'Edm.Int32'> | null;
  bplName?: DeserializedType<T, 'Edm.String'> | null;
  vatRegNum?: DeserializedType<T, 'Edm.String'> | null;
  revaluationPercent?: DeserializedType<T, 'Edm.Double'> | null;
  ifrsPosting?: BoYesNoEnum | null;
  summerizeByProjects?: BoYesNoEnum | null;
  summerizeByDistributionRules?: BoYesNoEnum | null;
  assetRevaluationLineCollection?: AssetRevaluationLine<T>[] | null;
  depreciationArea2?: DepreciationAreasType<T> | null;
  journalEntry?: JournalEntriesType<T> | null;
  businessPlace?: BusinessPlacesType<T> | null;
}
