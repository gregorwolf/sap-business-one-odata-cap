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
import { AssetDocumentLine } from './AssetDocumentLine';
import { AssetDocumentAreaJournal } from './AssetDocumentAreaJournal';
import { AssetDocumentNewLoc } from './AssetDocumentNewLoc';
import type { AssetManualDepreciationApi } from './AssetManualDepreciationApi';
import { AssetDocumentStatusEnum } from './AssetDocumentStatusEnum';
import { AssetDocumentTypeEnum } from './AssetDocumentTypeEnum';
import { BoYesNoEnum } from './BoYesNoEnum';
import { ClosingOptionEnum } from './ClosingOptionEnum';
import { AssetOriginalTypeEnum } from './AssetOriginalTypeEnum';
import { Currencies, CurrenciesType } from './Currencies';
import { DepreciationTypes, DepreciationTypesType } from './DepreciationTypes';
import { DepreciationAreas, DepreciationAreasType } from './DepreciationAreas';
import { BusinessPlaces, BusinessPlacesType } from './BusinessPlaces';

/**
 * This class represents the entity "AssetManualDepreciation" of service "SAPB1".
 */
export class AssetManualDepreciation<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetManualDepreciationType<T>
{
  /**
   * Technical entity name for AssetManualDepreciation.
   */
  static _entityName = 'AssetManualDepreciation';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the AssetManualDepreciation entity
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
   * Document Date.
   * @nullable
   */
  documentDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Status.
   * @nullable
   */
  status?: AssetDocumentStatusEnum | null;
  /**
   * Remarks.
   * @nullable
   */
  remarks?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reference.
   * @nullable
   */
  reference?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Currency.
   * @nullable
   */
  currency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Document Rate.
   * @nullable
   */
  documentRate?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Document Total.
   * @nullable
   */
  documentTotal?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Document Total Fc.
   * @nullable
   */
  documentTotalFc?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Document Total Sc.
   * @nullable
   */
  documentTotalSc?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Asset Value Date.
   * @nullable
   */
  assetValueDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Document Type.
   * @nullable
   */
  documentType?: AssetDocumentTypeEnum | null;
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
   * Manual Depreciation Type.
   * @nullable
   */
  manualDepreciationType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Hand Written.
   * @nullable
   */
  handWritten?: BoYesNoEnum | null;
  /**
   * Cancellation Date.
   * @nullable
   */
  cancellationDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Depreciation Area.
   * @nullable
   */
  depreciationArea?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bpl Id.
   * @nullable
   */
  bplId?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Origin.
   * @nullable
   */
  origin?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Low Value Asset Retirement.
   * @nullable
   */
  lowValueAssetRetirement?: BoYesNoEnum | null;
  /**
   * Cancellation Option.
   * @nullable
   */
  cancellationOption?: ClosingOptionEnum | null;
  /**
   * Original Type.
   * @nullable
   */
  originalType?: AssetOriginalTypeEnum | null;
  /**
   * Base Reference.
   * @nullable
   */
  baseReference?: DeserializedType<T, 'Edm.String'> | null;
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
   * Asset Document Line Collection.
   * @nullable
   */
  assetDocumentLineCollection?: AssetDocumentLine<T>[] | null;
  /**
   * Asset Document Area Journal Collection.
   * @nullable
   */
  assetDocumentAreaJournalCollection?: AssetDocumentAreaJournal<T>[] | null;
  /**
   * Pti Code.
   * @nullable
   */
  ptiCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Letter.
   * @nullable
   */
  letter?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fol Num From.
   * @nullable
   */
  folNumFrom?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Fol Num To.
   * @nullable
   */
  folNumTo?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Asset Document New Loc Collection.
   * @nullable
   */
  assetDocumentNewLocCollection?: AssetDocumentNewLoc<T>[] | null;
  /**
   * One-to-one navigation property to the {@link Currencies} entity.
   */
  currency2?: Currencies<T> | null;
  /**
   * One-to-one navigation property to the {@link DepreciationTypes} entity.
   */
  depreciationType?: DepreciationTypes<T> | null;
  /**
   * One-to-one navigation property to the {@link DepreciationAreas} entity.
   */
  depreciationArea2?: DepreciationAreas<T> | null;
  /**
   * One-to-one navigation property to the {@link BusinessPlaces} entity.
   */
  businessPlace?: BusinessPlaces<T> | null;

  constructor(readonly _entityApi: AssetManualDepreciationApi<T>) {
    super(_entityApi);
  }
}

export interface AssetManualDepreciationType<
  T extends DeSerializers = DefaultDeSerializers
> {
  docEntry: DeserializedType<T, 'Edm.Int32'>;
  docNum?: DeserializedType<T, 'Edm.Int32'> | null;
  series?: DeserializedType<T, 'Edm.Int32'> | null;
  postingDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  documentDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  status?: AssetDocumentStatusEnum | null;
  remarks?: DeserializedType<T, 'Edm.String'> | null;
  reference?: DeserializedType<T, 'Edm.String'> | null;
  currency?: DeserializedType<T, 'Edm.String'> | null;
  documentRate?: DeserializedType<T, 'Edm.Double'> | null;
  documentTotal?: DeserializedType<T, 'Edm.Double'> | null;
  documentTotalFc?: DeserializedType<T, 'Edm.Double'> | null;
  documentTotalSc?: DeserializedType<T, 'Edm.Double'> | null;
  assetValueDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  documentType?: AssetDocumentTypeEnum | null;
  summerizeByProjects?: BoYesNoEnum | null;
  summerizeByDistributionRules?: BoYesNoEnum | null;
  manualDepreciationType?: DeserializedType<T, 'Edm.String'> | null;
  handWritten?: BoYesNoEnum | null;
  cancellationDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  depreciationArea?: DeserializedType<T, 'Edm.String'> | null;
  bplId?: DeserializedType<T, 'Edm.Int32'> | null;
  origin?: DeserializedType<T, 'Edm.Int32'> | null;
  lowValueAssetRetirement?: BoYesNoEnum | null;
  cancellationOption?: ClosingOptionEnum | null;
  originalType?: AssetOriginalTypeEnum | null;
  baseReference?: DeserializedType<T, 'Edm.String'> | null;
  bplName?: DeserializedType<T, 'Edm.String'> | null;
  vatRegNum?: DeserializedType<T, 'Edm.String'> | null;
  assetDocumentLineCollection?: AssetDocumentLine<T>[] | null;
  assetDocumentAreaJournalCollection?: AssetDocumentAreaJournal<T>[] | null;
  ptiCode?: DeserializedType<T, 'Edm.String'> | null;
  letter?: DeserializedType<T, 'Edm.String'> | null;
  folNumFrom?: DeserializedType<T, 'Edm.Int32'> | null;
  folNumTo?: DeserializedType<T, 'Edm.Int32'> | null;
  assetDocumentNewLocCollection?: AssetDocumentNewLoc<T>[] | null;
  currency2?: CurrenciesType<T> | null;
  depreciationType?: DepreciationTypesType<T> | null;
  depreciationArea2?: DepreciationAreasType<T> | null;
  businessPlace?: BusinessPlacesType<T> | null;
}
