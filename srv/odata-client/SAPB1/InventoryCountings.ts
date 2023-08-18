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
import { TeamCounter } from './TeamCounter';
import { IndividualCounter } from './IndividualCounter';
import { InventoryCountingLine } from './InventoryCountingLine';
import { InventoryCountingDocumentReferences } from './InventoryCountingDocumentReferences';
import type { InventoryCountingsApi } from './InventoryCountingsApi';
import { CounterTypeEnum } from './CounterTypeEnum';
import { CountingDocumentStatusEnum } from './CountingDocumentStatusEnum';
import { CountingTypeEnum } from './CountingTypeEnum';
import { BusinessPlaces, BusinessPlacesType } from './BusinessPlaces';
import { Attachments2, Attachments2Type } from './Attachments2';

/**
 * This class represents the entity "InventoryCountings" of service "SAPB1".
 */
export class InventoryCountings<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements InventoryCountingsType<T>
{
  /**
   * Technical entity name for InventoryCountings.
   */
  static _entityName = 'InventoryCountings';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the InventoryCountings entity
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
   * Single Counter Type.
   * @nullable
   */
  singleCounterType?: CounterTypeEnum | null;
  /**
   * Single Counter Id.
   * @nullable
   */
  singleCounterId?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Document Status.
   * @nullable
   */
  documentStatus?: CountingDocumentStatusEnum | null;
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
   * Counting Type.
   * @nullable
   */
  countingType?: CountingTypeEnum | null;
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
   * Team Counters.
   * @nullable
   */
  teamCounters?: TeamCounter<T>[] | null;
  /**
   * Individual Counters.
   * @nullable
   */
  individualCounters?: IndividualCounter<T>[] | null;
  /**
   * Inventory Counting Lines.
   * @nullable
   */
  inventoryCountingLines?: InventoryCountingLine<T>[] | null;
  /**
   * Inventory Counting Document References Collection.
   * @nullable
   */
  inventoryCountingDocumentReferencesCollection?:
    | InventoryCountingDocumentReferences<T>[]
    | null;
  /**
   * One-to-one navigation property to the {@link BusinessPlaces} entity.
   */
  businessPlace?: BusinessPlaces<T> | null;
  /**
   * One-to-one navigation property to the {@link Attachments2} entity.
   */
  attachments2?: Attachments2<T> | null;

  constructor(readonly _entityApi: InventoryCountingsApi<T>) {
    super(_entityApi);
  }
}

export interface InventoryCountingsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  documentEntry: DeserializedType<T, 'Edm.Int32'>;
  documentNumber?: DeserializedType<T, 'Edm.Int32'> | null;
  series?: DeserializedType<T, 'Edm.Int32'> | null;
  countDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  countTime?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  singleCounterType?: CounterTypeEnum | null;
  singleCounterId?: DeserializedType<T, 'Edm.Int32'> | null;
  documentStatus?: CountingDocumentStatusEnum | null;
  remarks?: DeserializedType<T, 'Edm.String'> | null;
  reference2?: DeserializedType<T, 'Edm.String'> | null;
  branchId?: DeserializedType<T, 'Edm.Int32'> | null;
  docObjectCodeEx?: DeserializedType<T, 'Edm.String'> | null;
  financialPeriod?: DeserializedType<T, 'Edm.Int32'> | null;
  periodIndicator?: DeserializedType<T, 'Edm.String'> | null;
  countingType?: CountingTypeEnum | null;
  attachmentEntry?: DeserializedType<T, 'Edm.Int32'> | null;
  yearEndDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  teamCounters?: TeamCounter<T>[] | null;
  individualCounters?: IndividualCounter<T>[] | null;
  inventoryCountingLines?: InventoryCountingLine<T>[] | null;
  inventoryCountingDocumentReferencesCollection?:
    | InventoryCountingDocumentReferences<T>[]
    | null;
  businessPlace?: BusinessPlacesType<T> | null;
  attachments2?: Attachments2Type<T> | null;
}
