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
import type { DepreciationAreasApi } from './DepreciationAreasApi';
import { PostingOfDepreciationEnum } from './PostingOfDepreciationEnum';
import { RetirementMethodEnum } from './RetirementMethodEnum';
import { AreaTypeEnum } from './AreaTypeEnum';
import { BoYesNoEnum } from './BoYesNoEnum';
import { AssetTransfer, AssetTransferType } from './AssetTransfer';
import { AssetRetirement, AssetRetirementType } from './AssetRetirement';
import { AssetRevaluations, AssetRevaluationsType } from './AssetRevaluations';
import {
  AssetManualDepreciation,
  AssetManualDepreciationType
} from './AssetManualDepreciation';
import {
  AssetCapitalization,
  AssetCapitalizationType
} from './AssetCapitalization';
import {
  AssetCapitalizationCreditMemo,
  AssetCapitalizationCreditMemoType
} from './AssetCapitalizationCreditMemo';
import {
  SalesTaxAuthoritiesTypes,
  SalesTaxAuthoritiesTypesType
} from './SalesTaxAuthoritiesTypes';
import { BusinessPartners, BusinessPartnersType } from './BusinessPartners';
import { Items, ItemsType } from './Items';
import { NotaFiscalUsage, NotaFiscalUsageType } from './NotaFiscalUsage';

/**
 * This class represents the entity "DepreciationAreas" of service "SAPB1".
 */
export class DepreciationAreas<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements DepreciationAreasType<T>
{
  /**
   * Technical entity name for DepreciationAreas.
   */
  static _entityName = 'DepreciationAreas';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the DepreciationAreas entity
   */
  static _keys = ['Code'];
  /**
   * Code.
   */
  code!: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Posting Of Depreciation.
   * @nullable
   */
  postingOfDepreciation?: PostingOfDepreciationEnum | null;
  /**
   * Retirement Method.
   * @nullable
   */
  retirementMethod?: RetirementMethodEnum | null;
  /**
   * Area Type.
   * @nullable
   */
  areaType?: AreaTypeEnum | null;
  /**
   * Derived Area.
   * @nullable
   */
  derivedArea?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Main Booking Area.
   * @nullable
   */
  mainBookingArea?: BoYesNoEnum | null;
  /**
   * Direct Revenue Posting.
   * @nullable
   */
  directRevenuePosting?: BoYesNoEnum | null;
  /**
   * Tax Credit Control.
   * @nullable
   */
  taxCreditControl?: BoYesNoEnum | null;
  /**
   * Tax Type.
   * @nullable
   */
  taxType?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Bp For Tax Correction.
   * @nullable
   */
  bpForTaxCorrection?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item For Tax Correction.
   * @nullable
   */
  itemForTaxCorrection?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Usage For Tax Correction.
   * @nullable
   */
  usageForTaxCorrection?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * One-to-many navigation property to the {@link AssetTransfer} entity.
   */
  assetTransfer!: AssetTransfer<T>[];
  /**
   * One-to-many navigation property to the {@link AssetRetirement} entity.
   */
  assetRetirement!: AssetRetirement<T>[];
  /**
   * One-to-many navigation property to the {@link AssetRevaluations} entity.
   */
  assetRevaluations!: AssetRevaluations<T>[];
  /**
   * One-to-many navigation property to the {@link AssetManualDepreciation} entity.
   */
  assetManualDepreciation!: AssetManualDepreciation<T>[];
  /**
   * One-to-many navigation property to the {@link AssetCapitalization} entity.
   */
  assetCapitalization!: AssetCapitalization<T>[];
  /**
   * One-to-many navigation property to the {@link AssetCapitalizationCreditMemo} entity.
   */
  assetCapitalizationCreditMemo!: AssetCapitalizationCreditMemo<T>[];
  /**
   * One-to-one navigation property to the {@link SalesTaxAuthoritiesTypes} entity.
   */
  salesTaxAuthoritiesType?: SalesTaxAuthoritiesTypes<T> | null;
  /**
   * One-to-one navigation property to the {@link BusinessPartners} entity.
   */
  businessPartner?: BusinessPartners<T> | null;
  /**
   * One-to-one navigation property to the {@link Items} entity.
   */
  item?: Items<T> | null;
  /**
   * One-to-one navigation property to the {@link NotaFiscalUsage} entity.
   */
  notaFiscalUsage?: NotaFiscalUsage<T> | null;

  constructor(readonly _entityApi: DepreciationAreasApi<T>) {
    super(_entityApi);
  }
}

export interface DepreciationAreasType<
  T extends DeSerializers = DefaultDeSerializers
> {
  code: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  postingOfDepreciation?: PostingOfDepreciationEnum | null;
  retirementMethod?: RetirementMethodEnum | null;
  areaType?: AreaTypeEnum | null;
  derivedArea?: DeserializedType<T, 'Edm.String'> | null;
  mainBookingArea?: BoYesNoEnum | null;
  directRevenuePosting?: BoYesNoEnum | null;
  taxCreditControl?: BoYesNoEnum | null;
  taxType?: DeserializedType<T, 'Edm.Int32'> | null;
  bpForTaxCorrection?: DeserializedType<T, 'Edm.String'> | null;
  itemForTaxCorrection?: DeserializedType<T, 'Edm.String'> | null;
  usageForTaxCorrection?: DeserializedType<T, 'Edm.Int32'> | null;
  assetTransfer: AssetTransferType<T>[];
  assetRetirement: AssetRetirementType<T>[];
  assetRevaluations: AssetRevaluationsType<T>[];
  assetManualDepreciation: AssetManualDepreciationType<T>[];
  assetCapitalization: AssetCapitalizationType<T>[];
  assetCapitalizationCreditMemo: AssetCapitalizationCreditMemoType<T>[];
  salesTaxAuthoritiesType?: SalesTaxAuthoritiesTypesType<T> | null;
  businessPartner?: BusinessPartnersType<T> | null;
  item?: ItemsType<T> | null;
  notaFiscalUsage?: NotaFiscalUsageType<T> | null;
}
