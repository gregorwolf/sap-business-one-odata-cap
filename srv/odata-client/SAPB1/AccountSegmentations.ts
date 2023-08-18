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
import { AccountSegmentationsCategory } from './AccountSegmentationsCategory';
import type { AccountSegmentationsApi } from './AccountSegmentationsApi';
import { AccountSegmentationTypeEnum } from './AccountSegmentationTypeEnum';
import {
  AccountSegmentationCategories,
  AccountSegmentationCategoriesType
} from './AccountSegmentationCategories';

/**
 * This class represents the entity "AccountSegmentations" of service "SAPB1".
 */
export class AccountSegmentations<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AccountSegmentationsType<T>
{
  /**
   * Technical entity name for AccountSegmentations.
   */
  static _entityName = 'AccountSegmentations';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the AccountSegmentations entity
   */
  static _keys = ['Numerator'];
  /**
   * Numerator.
   */
  numerator!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Name.
   * @nullable
   */
  name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Size.
   * @nullable
   */
  size?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Type.
   * @nullable
   */
  type?: AccountSegmentationTypeEnum | null;
  /**
   * Account Segmentations Categories.
   * @nullable
   */
  accountSegmentationsCategories?: AccountSegmentationsCategory<T>[] | null;
  /**
   * One-to-many navigation property to the {@link AccountSegmentationCategories} entity.
   */
  accountSegmentationCategories!: AccountSegmentationCategories<T>[];

  constructor(readonly _entityApi: AccountSegmentationsApi<T>) {
    super(_entityApi);
  }
}

export interface AccountSegmentationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  numerator: DeserializedType<T, 'Edm.Int32'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  size?: DeserializedType<T, 'Edm.Int32'> | null;
  type?: AccountSegmentationTypeEnum | null;
  accountSegmentationsCategories?: AccountSegmentationsCategory<T>[] | null;
  accountSegmentationCategories: AccountSegmentationCategoriesType<T>[];
}
