/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SalesTaxCodesRequestBuilder } from './SalesTaxCodesRequestBuilder';
import { SalesTaxCodesLine } from './SalesTaxCodesLine';
import { BoYesNoEnum } from './BoYesNoEnum';
import { AllFields, CollectionField, CustomFieldV4, EntityBuilderType, EntityV4, EnumField, Field, NumberField, OneToManyLink, OneToOneLink, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "SalesTaxCodes" of service "SAPB1".
 */
export class SalesTaxCodes extends EntityV4 implements SalesTaxCodesType {
  /**
   * Technical entity name for SalesTaxCodes.
   */
  static _entityName = 'SalesTaxCodes';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/b1s/v2/';
  /**
   * Valid For Ar.
   * @nullable
   */
  validForAr?: BoYesNoEnum;
  /**
   * Valid For Ap.
   * @nullable
   */
  validForAp?: BoYesNoEnum;
  /**
   * User Signature.
   * @nullable
   */
  userSignature?: number;
  /**
   * Rate.
   * @nullable
   */
  rate?: number;
  /**
   * Name.
   * @nullable
   */
  name?: string;
  /**
   * Freight.
   * @nullable
   */
  freight?: BoYesNoEnum;
  /**
   * Code.
   * @nullable
   */
  code?: string;
  /**
   * Is Item Level.
   * @nullable
   */
  isItemLevel?: BoYesNoEnum;
  /**
   * Inactive.
   * @nullable
   */
  inactive?: BoYesNoEnum;
  /**
   * Fa Debit.
   * @nullable
   */
  faDebit?: BoYesNoEnum;
  /**
   * Sales Tax Codes Lines.
   * @nullable
   */
  salesTaxCodesLines?: SalesTaxCodesLine[];
  /**
   * One-to-many navigation property to the [[UserDefaultGroups]] entity.
   */
  userDefaultGroups!: UserDefaultGroups[];
  /**
   * One-to-many navigation property to the [[Warehouses]] entity.
   */
  warehouses!: Warehouses[];
  /**
   * One-to-many navigation property to the [[Items]] entity.
   */
  items!: Items[];
  /**
   * One-to-many navigation property to the [[BusinessPartners]] entity.
   */
  businessPartners!: BusinessPartners[];
  /**
   * One-to-one navigation property to the [[Users]] entity.
   */
  user!: Users;
  /**
   * One-to-many navigation property to the [[ExpenseTypes]] entity.
   */
  expenseTypes!: ExpenseTypes[];

  /**
   * Returns an entity builder to construct instances of `SalesTaxCodes`.
   * @returns A builder that constructs instances of entity type `SalesTaxCodes`.
   */
  static builder(): EntityBuilderType<SalesTaxCodes, SalesTaxCodesType> {
    return EntityV4.entityBuilder(SalesTaxCodes);
  }

  /**
   * Returns a request builder to construct requests for operations on the `SalesTaxCodes` entity type.
   * @returns A `SalesTaxCodes` request builder.
   */
  static requestBuilder(): SalesTaxCodesRequestBuilder {
    return new SalesTaxCodesRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `SalesTaxCodes`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `SalesTaxCodes`.
   */
  static customField(fieldName: string): CustomFieldV4<SalesTaxCodes> {
    return EntityV4.customFieldSelector(fieldName, SalesTaxCodes);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { UserDefaultGroups, UserDefaultGroupsType } from './UserDefaultGroups';
import { Warehouses, WarehousesType } from './Warehouses';
import { Items, ItemsType } from './Items';
import { BusinessPartners, BusinessPartnersType } from './BusinessPartners';
import { Users, UsersType } from './Users';
import { ExpenseTypes, ExpenseTypesType } from './ExpenseTypes';

export interface SalesTaxCodesType {
  validForAr?: BoYesNoEnum | null;
  validForAp?: BoYesNoEnum | null;
  userSignature?: number | null;
  rate?: number | null;
  name?: string | null;
  freight?: BoYesNoEnum | null;
  code?: string | null;
  isItemLevel?: BoYesNoEnum | null;
  inactive?: BoYesNoEnum | null;
  faDebit?: BoYesNoEnum | null;
  salesTaxCodesLines?: SalesTaxCodesLine[] | null;
  userDefaultGroups: UserDefaultGroupsType[];
  warehouses: WarehousesType[];
  items: ItemsType[];
  businessPartners: BusinessPartnersType[];
  user: UsersType;
  expenseTypes: ExpenseTypesType[];
}

export namespace SalesTaxCodes {
  /**
   * Static representation of the [[validForAr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VALID_FOR_AR: EnumField<SalesTaxCodes> = new EnumField('ValidForAR', SalesTaxCodes);
  /**
   * Static representation of the [[validForAp]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VALID_FOR_AP: EnumField<SalesTaxCodes> = new EnumField('ValidForAP', SalesTaxCodes);
  /**
   * Static representation of the [[userSignature]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_SIGNATURE: NumberField<SalesTaxCodes> = new NumberField('UserSignature', SalesTaxCodes, 'Edm.Int32');
  /**
   * Static representation of the [[rate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RATE: NumberField<SalesTaxCodes> = new NumberField('Rate', SalesTaxCodes, 'Edm.Double');
  /**
   * Static representation of the [[name]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME: StringField<SalesTaxCodes> = new StringField('Name', SalesTaxCodes, 'Edm.String');
  /**
   * Static representation of the [[freight]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FREIGHT: EnumField<SalesTaxCodes> = new EnumField('Freight', SalesTaxCodes);
  /**
   * Static representation of the [[code]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CODE: StringField<SalesTaxCodes> = new StringField('Code', SalesTaxCodes, 'Edm.String');
  /**
   * Static representation of the [[isItemLevel]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_ITEM_LEVEL: EnumField<SalesTaxCodes> = new EnumField('IsItemLevel', SalesTaxCodes);
  /**
   * Static representation of the [[inactive]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INACTIVE: EnumField<SalesTaxCodes> = new EnumField('Inactive', SalesTaxCodes);
  /**
   * Static representation of the [[faDebit]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FA_DEBIT: EnumField<SalesTaxCodes> = new EnumField('FADebit', SalesTaxCodes);
  /**
   * Static representation of the [[salesTaxCodesLines]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_TAX_CODES_LINES: CollectionField<SalesTaxCodes, SalesTaxCodesLine> = new CollectionField('SalesTaxCodes_Lines', SalesTaxCodes, SalesTaxCodesLine);
  /**
   * Static representation of the one-to-many navigation property [[userDefaultGroups]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_DEFAULT_GROUPS: OneToManyLink<SalesTaxCodes, UserDefaultGroups> = new OneToManyLink('UserDefaultGroups', SalesTaxCodes, UserDefaultGroups);
  /**
   * Static representation of the one-to-many navigation property [[warehouses]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WAREHOUSES: OneToManyLink<SalesTaxCodes, Warehouses> = new OneToManyLink('Warehouses', SalesTaxCodes, Warehouses);
  /**
   * Static representation of the one-to-many navigation property [[items]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ITEMS: OneToManyLink<SalesTaxCodes, Items> = new OneToManyLink('Items', SalesTaxCodes, Items);
  /**
   * Static representation of the one-to-many navigation property [[businessPartners]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNERS: OneToManyLink<SalesTaxCodes, BusinessPartners> = new OneToManyLink('BusinessPartners', SalesTaxCodes, BusinessPartners);
  /**
   * Static representation of the one-to-one navigation property [[user]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER: OneToOneLink<SalesTaxCodes, Users> = new OneToOneLink('User', SalesTaxCodes, Users);
  /**
   * Static representation of the one-to-many navigation property [[expenseTypes]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXPENSE_TYPES: OneToManyLink<SalesTaxCodes, ExpenseTypes> = new OneToManyLink('ExpenseTypes', SalesTaxCodes, ExpenseTypes);
  /**
   * All fields of the SalesTaxCodes entity.
   */
  export const _allFields: Array<EnumField<SalesTaxCodes> | NumberField<SalesTaxCodes> | StringField<SalesTaxCodes> | CollectionField<SalesTaxCodes, SalesTaxCodesLine> | OneToManyLink<SalesTaxCodes, UserDefaultGroups> | OneToManyLink<SalesTaxCodes, Warehouses> | OneToManyLink<SalesTaxCodes, Items> | OneToManyLink<SalesTaxCodes, BusinessPartners> | OneToOneLink<SalesTaxCodes, Users> | OneToManyLink<SalesTaxCodes, ExpenseTypes>> = [
    SalesTaxCodes.VALID_FOR_AR,
    SalesTaxCodes.VALID_FOR_AP,
    SalesTaxCodes.USER_SIGNATURE,
    SalesTaxCodes.RATE,
    SalesTaxCodes.NAME,
    SalesTaxCodes.FREIGHT,
    SalesTaxCodes.CODE,
    SalesTaxCodes.IS_ITEM_LEVEL,
    SalesTaxCodes.INACTIVE,
    SalesTaxCodes.FA_DEBIT,
    SalesTaxCodes.SALES_TAX_CODES_LINES,
    SalesTaxCodes.USER_DEFAULT_GROUPS,
    SalesTaxCodes.WAREHOUSES,
    SalesTaxCodes.ITEMS,
    SalesTaxCodes.BUSINESS_PARTNERS,
    SalesTaxCodes.USER,
    SalesTaxCodes.EXPENSE_TYPES
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<SalesTaxCodes> = new AllFields('*', SalesTaxCodes);
  /**
   * All key fields of the SalesTaxCodes entity.
   */
  export const _keyFields: Array<Field<SalesTaxCodes>> = [SalesTaxCodes.CODE];
  /**
   * Mapping of all key field names to the respective static field property SalesTaxCodes.
   */
  export const _keys: { [keys: string]: Field<SalesTaxCodes> } = SalesTaxCodes._keyFields.reduce((acc: { [keys: string]: Field<SalesTaxCodes> }, field: Field<SalesTaxCodes>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
