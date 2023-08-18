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
import { SalesTaxCodesLine } from './SalesTaxCodesLine';
import type { SalesTaxCodesApi } from './SalesTaxCodesApi';
import { BoYesNoEnum } from './BoYesNoEnum';
import { UserDefaultGroups, UserDefaultGroupsType } from './UserDefaultGroups';
import { Warehouses, WarehousesType } from './Warehouses';
import { Items, ItemsType } from './Items';
import { BusinessPartners, BusinessPartnersType } from './BusinessPartners';
import { Users, UsersType } from './Users';
import { ExpenseTypes, ExpenseTypesType } from './ExpenseTypes';

/**
 * This class represents the entity "SalesTaxCodes" of service "SAPB1".
 */
export class SalesTaxCodes<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements SalesTaxCodesType<T>
{
  /**
   * Technical entity name for SalesTaxCodes.
   */
  static _entityName = 'SalesTaxCodes';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the SalesTaxCodes entity
   */
  static _keys = ['Code'];
  /**
   * Valid For Ar.
   * @nullable
   */
  validForAr?: BoYesNoEnum | null;
  /**
   * Valid For Ap.
   * @nullable
   */
  validForAp?: BoYesNoEnum | null;
  /**
   * User Signature.
   * @nullable
   */
  userSignature?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Rate.
   * @nullable
   */
  rate?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Name.
   * @nullable
   */
  name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Freight.
   * @nullable
   */
  freight?: BoYesNoEnum | null;
  /**
   * Code.
   */
  code!: DeserializedType<T, 'Edm.String'>;
  /**
   * Is Item Level.
   * @nullable
   */
  isItemLevel?: BoYesNoEnum | null;
  /**
   * Inactive.
   * @nullable
   */
  inactive?: BoYesNoEnum | null;
  /**
   * Fa Debit.
   * @nullable
   */
  faDebit?: BoYesNoEnum | null;
  /**
   * Sales Tax Codes Lines.
   * @nullable
   */
  salesTaxCodesLines?: SalesTaxCodesLine<T>[] | null;
  /**
   * One-to-many navigation property to the {@link UserDefaultGroups} entity.
   */
  userDefaultGroups!: UserDefaultGroups<T>[];
  /**
   * One-to-many navigation property to the {@link Warehouses} entity.
   */
  warehouses!: Warehouses<T>[];
  /**
   * One-to-many navigation property to the {@link Items} entity.
   */
  items!: Items<T>[];
  /**
   * One-to-many navigation property to the {@link BusinessPartners} entity.
   */
  businessPartners!: BusinessPartners<T>[];
  /**
   * One-to-one navigation property to the {@link Users} entity.
   */
  user?: Users<T> | null;
  /**
   * One-to-many navigation property to the {@link ExpenseTypes} entity.
   */
  expenseTypes!: ExpenseTypes<T>[];

  constructor(readonly _entityApi: SalesTaxCodesApi<T>) {
    super(_entityApi);
  }
}

export interface SalesTaxCodesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  validForAr?: BoYesNoEnum | null;
  validForAp?: BoYesNoEnum | null;
  userSignature?: DeserializedType<T, 'Edm.Int32'> | null;
  rate?: DeserializedType<T, 'Edm.Double'> | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  freight?: BoYesNoEnum | null;
  code: DeserializedType<T, 'Edm.String'>;
  isItemLevel?: BoYesNoEnum | null;
  inactive?: BoYesNoEnum | null;
  faDebit?: BoYesNoEnum | null;
  salesTaxCodesLines?: SalesTaxCodesLine<T>[] | null;
  userDefaultGroups: UserDefaultGroupsType<T>[];
  warehouses: WarehousesType<T>[];
  items: ItemsType<T>[];
  businessPartners: BusinessPartnersType<T>[];
  user?: UsersType<T> | null;
  expenseTypes: ExpenseTypesType<T>[];
}
