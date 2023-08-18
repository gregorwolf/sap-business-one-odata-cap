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
import { InventoryOpeningBalanceLine } from './InventoryOpeningBalanceLine';
import type { InventoryOpeningBalancesApi } from './InventoryOpeningBalancesApi';
import { InventoryOpeningBalancePriceSourceEnum } from './InventoryOpeningBalancePriceSourceEnum';
import { BusinessPlaces, BusinessPlacesType } from './BusinessPlaces';
import { Attachments2, Attachments2Type } from './Attachments2';

/**
 * This class represents the entity "InventoryOpeningBalances" of service "SAPB1".
 */
export class InventoryOpeningBalances<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements InventoryOpeningBalancesType<T>
{
  /**
   * Technical entity name for InventoryOpeningBalances.
   */
  static _entityName = 'InventoryOpeningBalances';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the InventoryOpeningBalances entity
   */
  static _keys = ['DocumentEntry'];
  /**
   * Document Entry.
   */
  documentEntry!: DeserializedType<T, 'Edm.Int32'>;
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
   * Document Number.
   * @nullable
   */
  documentNumber?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Series.
   * @nullable
   */
  series?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Reference 2.
   * @nullable
   */
  reference2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Remarks.
   * @nullable
   */
  remarks?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Branch Id.
   * @nullable
   */
  branchId?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Price Source.
   * @nullable
   */
  priceSource?: InventoryOpeningBalancePriceSourceEnum | null;
  /**
   * Price List.
   * @nullable
   */
  priceList?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Journal Remark.
   * @nullable
   */
  journalRemark?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Doc Object Code Ex.
   * @nullable
   */
  docObjectCodeEx?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Period Indicator.
   * @nullable
   */
  periodIndicator?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Financial Period.
   * @nullable
   */
  financialPeriod?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Attachment Entry.
   * @nullable
   */
  attachmentEntry?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Inventory Opening Balance Lines.
   * @nullable
   */
  inventoryOpeningBalanceLines?: InventoryOpeningBalanceLine<T>[] | null;
  /**
   * One-to-one navigation property to the {@link BusinessPlaces} entity.
   */
  businessPlace?: BusinessPlaces<T> | null;
  /**
   * One-to-one navigation property to the {@link Attachments2} entity.
   */
  attachments2?: Attachments2<T> | null;

  constructor(readonly _entityApi: InventoryOpeningBalancesApi<T>) {
    super(_entityApi);
  }
}

export interface InventoryOpeningBalancesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  documentEntry: DeserializedType<T, 'Edm.Int32'>;
  postingDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  documentDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  documentNumber?: DeserializedType<T, 'Edm.Int32'> | null;
  series?: DeserializedType<T, 'Edm.Int32'> | null;
  reference2?: DeserializedType<T, 'Edm.String'> | null;
  remarks?: DeserializedType<T, 'Edm.String'> | null;
  branchId?: DeserializedType<T, 'Edm.Int32'> | null;
  priceSource?: InventoryOpeningBalancePriceSourceEnum | null;
  priceList?: DeserializedType<T, 'Edm.Int32'> | null;
  journalRemark?: DeserializedType<T, 'Edm.String'> | null;
  docObjectCodeEx?: DeserializedType<T, 'Edm.String'> | null;
  periodIndicator?: DeserializedType<T, 'Edm.String'> | null;
  financialPeriod?: DeserializedType<T, 'Edm.Int32'> | null;
  attachmentEntry?: DeserializedType<T, 'Edm.Int32'> | null;
  inventoryOpeningBalanceLines?: InventoryOpeningBalanceLine<T>[] | null;
  businessPlace?: BusinessPlacesType<T> | null;
  attachments2?: Attachments2Type<T> | null;
}
