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
import { DiscountGroupLine } from './DiscountGroupLine';
import type { EnhancedDiscountGroupsApi } from './EnhancedDiscountGroupsApi';
import { DiscountGroupTypeEnum } from './DiscountGroupTypeEnum';
import { DiscountGroupRelationsEnum } from './DiscountGroupRelationsEnum';
import { BoYesNoEnum } from './BoYesNoEnum';

/**
 * This class represents the entity "EnhancedDiscountGroups" of service "SAPB1".
 */
export class EnhancedDiscountGroups<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements EnhancedDiscountGroupsType<T>
{
  /**
   * Technical entity name for EnhancedDiscountGroups.
   */
  static _entityName = 'EnhancedDiscountGroups';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the EnhancedDiscountGroups entity
   */
  static _keys = ['AbsEntry'];
  /**
   * Abs Entry.
   */
  absEntry!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Type.
   * @nullable
   */
  type?: DiscountGroupTypeEnum | null;
  /**
   * Object Code.
   * @nullable
   */
  objectCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Discount Relations.
   * @nullable
   */
  discountRelations?: DiscountGroupRelationsEnum | null;
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
   * Discount Group Line Collection.
   * @nullable
   */
  discountGroupLineCollection?: DiscountGroupLine<T>[] | null;

  constructor(readonly _entityApi: EnhancedDiscountGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface EnhancedDiscountGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  absEntry: DeserializedType<T, 'Edm.Int32'>;
  type?: DiscountGroupTypeEnum | null;
  objectCode?: DeserializedType<T, 'Edm.String'> | null;
  discountRelations?: DiscountGroupRelationsEnum | null;
  active?: BoYesNoEnum | null;
  validFrom?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  validTo?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  discountGroupLineCollection?: DiscountGroupLine<T>[] | null;
}
