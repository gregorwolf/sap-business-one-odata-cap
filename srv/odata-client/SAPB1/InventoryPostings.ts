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
import { InventoryPostingLine } from './InventoryPostingLine';
import { InventoryPostingDocumentReferences } from './InventoryPostingDocumentReferences';
import type { InventoryPostingsApi } from './InventoryPostingsApi';
import { InventoryPostingPriceSourceEnum } from './InventoryPostingPriceSourceEnum';
import { BusinessPlaces, BusinessPlacesType } from './BusinessPlaces';
import { Attachments2, Attachments2Type } from './Attachments2';

/**
 * This class represents the entity "InventoryPostings" of service "SAPB1".
 */
export class InventoryPostings<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements InventoryPostingsType<T>
{
  /**
   * Technical entity name for InventoryPostings.
   */
  static _entityName = 'InventoryPostings';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the InventoryPostings entity
   */
  static _keys = ['DocumentEntry'];
  /**
   * Document Entry.
   */
  documentEntry!: DeserializedType<T, 'Edm.Int32'>;
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
   * Posting Date.
   * @nullable
   */
  postingDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Count Date.
   * @nullable
   */
  countDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Count Time.
   * @nullable
   */
  countTime?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  /**
   * Remarks.
   * @nullable
   */
  remarks?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reference 2.
   * @nullable
   */
  reference2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Branch Id.
   * @nullable
   */
  branchId?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Price Source.
   * @nullable
   */
  priceSource?: InventoryPostingPriceSourceEnum | null;
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
   * Financial Period.
   * @nullable
   */
  financialPeriod?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Period Indicator.
   * @nullable
   */
  periodIndicator?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Attachment Entry.
   * @nullable
   */
  attachmentEntry?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Year End Date.
   * @nullable
   */
  yearEndDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Inventory Posting Lines.
   * @nullable
   */
  inventoryPostingLines?: InventoryPostingLine<T>[] | null;
  /**
   * Inventory Posting Document References Collection.
   * @nullable
   */
  inventoryPostingDocumentReferencesCollection?:
    | InventoryPostingDocumentReferences<T>[]
    | null;
  /**
   * One-to-one navigation property to the {@link BusinessPlaces} entity.
   */
  businessPlace?: BusinessPlaces<T> | null;
  /**
   * One-to-one navigation property to the {@link Attachments2} entity.
   */
  attachments2?: Attachments2<T> | null;

  constructor(readonly _entityApi: InventoryPostingsApi<T>) {
    super(_entityApi);
  }
}

export interface InventoryPostingsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  documentEntry: DeserializedType<T, 'Edm.Int32'>;
  documentNumber?: DeserializedType<T, 'Edm.Int32'> | null;
  series?: DeserializedType<T, 'Edm.Int32'> | null;
  postingDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  countDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  countTime?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  remarks?: DeserializedType<T, 'Edm.String'> | null;
  reference2?: DeserializedType<T, 'Edm.String'> | null;
  branchId?: DeserializedType<T, 'Edm.Int32'> | null;
  priceSource?: InventoryPostingPriceSourceEnum | null;
  priceList?: DeserializedType<T, 'Edm.Int32'> | null;
  journalRemark?: DeserializedType<T, 'Edm.String'> | null;
  docObjectCodeEx?: DeserializedType<T, 'Edm.String'> | null;
  financialPeriod?: DeserializedType<T, 'Edm.Int32'> | null;
  periodIndicator?: DeserializedType<T, 'Edm.String'> | null;
  attachmentEntry?: DeserializedType<T, 'Edm.Int32'> | null;
  yearEndDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  inventoryPostingLines?: InventoryPostingLine<T>[] | null;
  inventoryPostingDocumentReferencesCollection?:
    | InventoryPostingDocumentReferences<T>[]
    | null;
  businessPlace?: BusinessPlacesType<T> | null;
  attachments2?: Attachments2Type<T> | null;
}
