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
import type { AlternateCatNumApi } from './AlternateCatNumApi';
import { BoYesNoEnum } from './BoYesNoEnum';
import { Items, ItemsType } from './Items';
import { BusinessPartners, BusinessPartnersType } from './BusinessPartners';

/**
 * This class represents the entity "AlternateCatNum" of service "SAPB1".
 */
export class AlternateCatNum<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements AlternateCatNumType<T>
{
  /**
   * Technical entity name for AlternateCatNum.
   */
  static _entityName = 'AlternateCatNum';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the AlternateCatNum entity
   */
  static _keys = ['ItemCode', 'CardCode', 'Substitute'];
  /**
   * Item Code.
   */
  itemCode!: DeserializedType<T, 'Edm.String'>;
  /**
   * Card Code.
   */
  cardCode!: DeserializedType<T, 'Edm.String'>;
  /**
   * Substitute.
   */
  substitute!: DeserializedType<T, 'Edm.String'>;
  /**
   * Display Bp Catalog Number.
   * @nullable
   */
  displayBpCatalogNumber?: BoYesNoEnum | null;
  /**
   * Is Default.
   * @nullable
   */
  isDefault?: BoYesNoEnum | null;
  /**
   * Description.
   * @nullable
   */
  description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Gp Katalogname.
   * @nullable
   */
  uGpKatalogname?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link Items} entity.
   */
  item?: Items<T> | null;
  /**
   * One-to-one navigation property to the {@link BusinessPartners} entity.
   */
  businessPartner?: BusinessPartners<T> | null;

  constructor(readonly _entityApi: AlternateCatNumApi<T>) {
    super(_entityApi);
  }
}

export interface AlternateCatNumType<
  T extends DeSerializers = DefaultDeSerializers
> {
  itemCode: DeserializedType<T, 'Edm.String'>;
  cardCode: DeserializedType<T, 'Edm.String'>;
  substitute: DeserializedType<T, 'Edm.String'>;
  displayBpCatalogNumber?: BoYesNoEnum | null;
  isDefault?: BoYesNoEnum | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  uGpKatalogname?: DeserializedType<T, 'Edm.String'> | null;
  item?: ItemsType<T> | null;
  businessPartner?: BusinessPartnersType<T> | null;
}
