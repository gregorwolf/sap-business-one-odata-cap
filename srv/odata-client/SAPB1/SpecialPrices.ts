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
import { SpecialPriceDataArea } from './SpecialPriceDataArea';
import type { SpecialPricesApi } from './SpecialPricesApi';
import { BoYesNoEnum } from './BoYesNoEnum';
import { SourceCurrencyEnum } from './SourceCurrencyEnum';
import { Items, ItemsType } from './Items';
import { BusinessPartners, BusinessPartnersType } from './BusinessPartners';
import { PriceLists, PriceListsType } from './PriceLists';

/**
 * This class represents the entity "SpecialPrices" of service "SAPB1".
 */
export class SpecialPrices<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements SpecialPricesType<T>
{
  /**
   * Technical entity name for SpecialPrices.
   */
  static _entityName = 'SpecialPrices';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the SpecialPrices entity
   */
  static _keys = ['ItemCode', 'CardCode'];
  /**
   * Item Code.
   */
  itemCode!: DeserializedType<T, 'Edm.String'>;
  /**
   * Card Code.
   */
  cardCode!: DeserializedType<T, 'Edm.String'>;
  /**
   * Price.
   * @nullable
   */
  price?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Currency.
   * @nullable
   */
  currency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Discount Percent.
   * @nullable
   */
  discountPercent?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Price List Num.
   * @nullable
   */
  priceListNum?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Auto Update.
   * @nullable
   */
  autoUpdate?: BoYesNoEnum | null;
  /**
   * Source Price.
   * @nullable
   */
  sourcePrice?: SourceCurrencyEnum | null;
  /**
   * Valid.
   * @nullable
   */
  valid?: BoYesNoEnum | null;
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
   * Special Price Data Areas.
   * @nullable
   */
  specialPriceDataAreas?: SpecialPriceDataArea<T>[] | null;
  /**
   * One-to-one navigation property to the {@link Items} entity.
   */
  item?: Items<T> | null;
  /**
   * One-to-one navigation property to the {@link BusinessPartners} entity.
   */
  businessPartner?: BusinessPartners<T> | null;
  /**
   * One-to-one navigation property to the {@link PriceLists} entity.
   */
  priceList?: PriceLists<T> | null;

  constructor(readonly _entityApi: SpecialPricesApi<T>) {
    super(_entityApi);
  }
}

export interface SpecialPricesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  itemCode: DeserializedType<T, 'Edm.String'>;
  cardCode: DeserializedType<T, 'Edm.String'>;
  price?: DeserializedType<T, 'Edm.Double'> | null;
  currency?: DeserializedType<T, 'Edm.String'> | null;
  discountPercent?: DeserializedType<T, 'Edm.Double'> | null;
  priceListNum?: DeserializedType<T, 'Edm.Int32'> | null;
  autoUpdate?: BoYesNoEnum | null;
  sourcePrice?: SourceCurrencyEnum | null;
  valid?: BoYesNoEnum | null;
  validFrom?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  validTo?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  specialPriceDataAreas?: SpecialPriceDataArea<T>[] | null;
  item?: ItemsType<T> | null;
  businessPartner?: BusinessPartnersType<T> | null;
  priceList?: PriceListsType<T> | null;
}
