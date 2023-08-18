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
import type { PriceListsApi } from './PriceListsApi';
import { BoRoundingMethod } from './BoRoundingMethod';
import { BoPriceListGroupNum } from './BoPriceListGroupNum';
import { BoYesNoEnum } from './BoYesNoEnum';
import { BoRoundingRule } from './BoRoundingRule';
import { StockTransfers, StockTransfersType } from './StockTransfers';
import { ProductTrees, ProductTreesType } from './ProductTrees';
import { BlanketAgreements, BlanketAgreementsType } from './BlanketAgreements';
import { BusinessPartners, BusinessPartnersType } from './BusinessPartners';
import { SpecialPrices, SpecialPricesType } from './SpecialPrices';
import { PaymentTermsTypes, PaymentTermsTypesType } from './PaymentTermsTypes';

/**
 * This class represents the entity "PriceLists" of service "SAPB1".
 */
export class PriceLists<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements PriceListsType<T>
{
  /**
   * Technical entity name for PriceLists.
   */
  static _entityName = 'PriceLists';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the PriceLists entity
   */
  static _keys = ['PriceListNo'];
  /**
   * Rounding Method.
   * @nullable
   */
  roundingMethod?: BoRoundingMethod | null;
  /**
   * Group Num.
   * @nullable
   */
  groupNum?: BoPriceListGroupNum | null;
  /**
   * Base Price List.
   * @nullable
   */
  basePriceList?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Factor.
   * @nullable
   */
  factor?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Price List No.
   */
  priceListNo!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Price List Name.
   * @nullable
   */
  priceListName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Gross Price.
   * @nullable
   */
  isGrossPrice?: BoYesNoEnum | null;
  /**
   * Active.
   * @nullable
   */
  active?: BoYesNoEnum | null;
  /**
   * Valid From.
   * @nullable
   */
  validFrom?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Valid To.
   * @nullable
   */
  validTo?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Default Prime Currency.
   * @nullable
   */
  defaultPrimeCurrency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Additional Currency 1.
   * @nullable
   */
  defaultAdditionalCurrency1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Additional Currency 2.
   * @nullable
   */
  defaultAdditionalCurrency2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Rounding Rule.
   * @nullable
   */
  roundingRule?: BoRoundingRule | null;
  /**
   * Fixed Amount.
   * @nullable
   */
  fixedAmount?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * One-to-many navigation property to the {@link StockTransfers} entity.
   */
  stockTransfers!: StockTransfers<T>[];
  /**
   * One-to-many navigation property to the {@link ProductTrees} entity.
   */
  productTrees!: ProductTrees<T>[];
  /**
   * One-to-many navigation property to the {@link BlanketAgreements} entity.
   */
  blanketAgreements!: BlanketAgreements<T>[];
  /**
   * One-to-many navigation property to the {@link BusinessPartners} entity.
   */
  businessPartners!: BusinessPartners<T>[];
  /**
   * One-to-many navigation property to the {@link SpecialPrices} entity.
   */
  specialPrices!: SpecialPrices<T>[];
  /**
   * One-to-many navigation property to the {@link PaymentTermsTypes} entity.
   */
  paymentTermsTypes!: PaymentTermsTypes<T>[];

  constructor(readonly _entityApi: PriceListsApi<T>) {
    super(_entityApi);
  }
}

export interface PriceListsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  roundingMethod?: BoRoundingMethod | null;
  groupNum?: BoPriceListGroupNum | null;
  basePriceList?: DeserializedType<T, 'Edm.Int32'> | null;
  factor?: DeserializedType<T, 'Edm.Double'> | null;
  priceListNo: DeserializedType<T, 'Edm.Int32'>;
  priceListName?: DeserializedType<T, 'Edm.String'> | null;
  isGrossPrice?: BoYesNoEnum | null;
  active?: BoYesNoEnum | null;
  validFrom?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  validTo?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  defaultPrimeCurrency?: DeserializedType<T, 'Edm.String'> | null;
  defaultAdditionalCurrency1?: DeserializedType<T, 'Edm.String'> | null;
  defaultAdditionalCurrency2?: DeserializedType<T, 'Edm.String'> | null;
  roundingRule?: BoRoundingRule | null;
  fixedAmount?: DeserializedType<T, 'Edm.Double'> | null;
  stockTransfers: StockTransfersType<T>[];
  productTrees: ProductTreesType<T>[];
  blanketAgreements: BlanketAgreementsType<T>[];
  businessPartners: BusinessPartnersType<T>[];
  specialPrices: SpecialPricesType<T>[];
  paymentTermsTypes: PaymentTermsTypesType<T>[];
}
