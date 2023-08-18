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
import type { AccountSegmentationCategoriesApi } from './AccountSegmentationCategoriesApi';
import {
  AccountSegmentations,
  AccountSegmentationsType
} from './AccountSegmentations';

/**
 * This class represents the entity "AccountSegmentationCategories" of service "SAPB1".
 */
export class AccountSegmentationCategories<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AccountSegmentationCategoriesType<T>
{
  /**
   * Technical entity name for AccountSegmentationCategories.
   */
  static _entityName = 'AccountSegmentationCategories';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the AccountSegmentationCategories entity
   */
  static _keys = ['SegmentID', 'Code'];
  /**
   * Segment Id.
   */
  segmentId!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Code.
   */
  code!: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   * @nullable
   */
  name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Short Name.
   * @nullable
   */
  shortName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link AccountSegmentations} entity.
   */
  accountSegmentation?: AccountSegmentations<T> | null;

  constructor(readonly _entityApi: AccountSegmentationCategoriesApi<T>) {
    super(_entityApi);
  }
}

export interface AccountSegmentationCategoriesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  segmentId: DeserializedType<T, 'Edm.Int32'>;
  code: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  shortName?: DeserializedType<T, 'Edm.String'> | null;
  accountSegmentation?: AccountSegmentationsType<T> | null;
}
