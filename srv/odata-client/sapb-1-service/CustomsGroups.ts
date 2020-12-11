/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CustomsGroupsRequestBuilder } from './CustomsGroupsRequestBuilder';
import { BoYesNoEnum } from './BoYesNoEnum';
import { AllFields, CustomFieldV4, EntityBuilderType, EntityV4, EnumField, Field, NumberField, OneToManyLink, OneToOneLink, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "CustomsGroups" of service "SAPB1".
 */
export class CustomsGroups extends EntityV4 implements CustomsGroupsType {
  /**
   * Technical entity name for CustomsGroups.
   */
  static _entityName = 'CustomsGroups';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/b1s/v2/';
  /**
   * Code.
   * @nullable
   */
  code?: number;
  /**
   * Name.
   * @nullable
   */
  name?: string;
  /**
   * Number.
   * @nullable
   */
  number?: string;
  /**
   * Customs.
   * @nullable
   */
  customs?: number;
  /**
   * Purchase.
   * @nullable
   */
  purchase?: number;
  /**
   * Other.
   * @nullable
   */
  other?: number;
  /**
   * Total.
   * @nullable
   */
  total?: number;
  /**
   * Locked.
   * @nullable
   */
  locked?: BoYesNoEnum;
  /**
   * Customs Allocation Account.
   * @nullable
   */
  customsAllocationAccount?: string;
  /**
   * Customs Expense Account.
   * @nullable
   */
  customsExpenseAccount?: string;
  /**
   * Port Address.
   * @nullable
   */
  portAddress?: string;
  /**
   * Port State.
   * @nullable
   */
  portState?: string;
  /**
   * One-to-one navigation property to the [[ChartOfAccounts]] entity.
   */
  chartOfAccount!: ChartOfAccounts;
  /**
   * One-to-many navigation property to the [[Items]] entity.
   */
  items!: Items[];

  /**
   * Returns an entity builder to construct instances of `CustomsGroups`.
   * @returns A builder that constructs instances of entity type `CustomsGroups`.
   */
  static builder(): EntityBuilderType<CustomsGroups, CustomsGroupsType> {
    return EntityV4.entityBuilder(CustomsGroups);
  }

  /**
   * Returns a request builder to construct requests for operations on the `CustomsGroups` entity type.
   * @returns A `CustomsGroups` request builder.
   */
  static requestBuilder(): CustomsGroupsRequestBuilder {
    return new CustomsGroupsRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `CustomsGroups`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `CustomsGroups`.
   */
  static customField(fieldName: string): CustomFieldV4<CustomsGroups> {
    return EntityV4.customFieldSelector(fieldName, CustomsGroups);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { ChartOfAccounts, ChartOfAccountsType } from './ChartOfAccounts';
import { Items, ItemsType } from './Items';

export interface CustomsGroupsType {
  code?: number | null;
  name?: string | null;
  number?: string | null;
  customs?: number | null;
  purchase?: number | null;
  other?: number | null;
  total?: number | null;
  locked?: BoYesNoEnum | null;
  customsAllocationAccount?: string | null;
  customsExpenseAccount?: string | null;
  portAddress?: string | null;
  portState?: string | null;
  chartOfAccount: ChartOfAccountsType;
  items: ItemsType[];
}

export namespace CustomsGroups {
  /**
   * Static representation of the [[code]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CODE: NumberField<CustomsGroups> = new NumberField('Code', CustomsGroups, 'Edm.Int32');
  /**
   * Static representation of the [[name]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME: StringField<CustomsGroups> = new StringField('Name', CustomsGroups, 'Edm.String');
  /**
   * Static representation of the [[number]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NUMBER: StringField<CustomsGroups> = new StringField('Number', CustomsGroups, 'Edm.String');
  /**
   * Static representation of the [[customs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOMS: NumberField<CustomsGroups> = new NumberField('Customs', CustomsGroups, 'Edm.Double');
  /**
   * Static representation of the [[purchase]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE: NumberField<CustomsGroups> = new NumberField('Purchase', CustomsGroups, 'Edm.Double');
  /**
   * Static representation of the [[other]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OTHER: NumberField<CustomsGroups> = new NumberField('Other', CustomsGroups, 'Edm.Double');
  /**
   * Static representation of the [[total]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TOTAL: NumberField<CustomsGroups> = new NumberField('Total', CustomsGroups, 'Edm.Double');
  /**
   * Static representation of the [[locked]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LOCKED: EnumField<CustomsGroups> = new EnumField('Locked', CustomsGroups);
  /**
   * Static representation of the [[customsAllocationAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOMS_ALLOCATION_ACCOUNT: StringField<CustomsGroups> = new StringField('CustomsAllocationAccount', CustomsGroups, 'Edm.String');
  /**
   * Static representation of the [[customsExpenseAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOMS_EXPENSE_ACCOUNT: StringField<CustomsGroups> = new StringField('CustomsExpenseAccount', CustomsGroups, 'Edm.String');
  /**
   * Static representation of the [[portAddress]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PORT_ADDRESS: StringField<CustomsGroups> = new StringField('PortAddress', CustomsGroups, 'Edm.String');
  /**
   * Static representation of the [[portState]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PORT_STATE: StringField<CustomsGroups> = new StringField('PortState', CustomsGroups, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[chartOfAccount]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CHART_OF_ACCOUNT: OneToOneLink<CustomsGroups, ChartOfAccounts> = new OneToOneLink('ChartOfAccount', CustomsGroups, ChartOfAccounts);
  /**
   * Static representation of the one-to-many navigation property [[items]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ITEMS: OneToManyLink<CustomsGroups, Items> = new OneToManyLink('Items', CustomsGroups, Items);
  /**
   * All fields of the CustomsGroups entity.
   */
  export const _allFields: Array<NumberField<CustomsGroups> | StringField<CustomsGroups> | EnumField<CustomsGroups> | OneToOneLink<CustomsGroups, ChartOfAccounts> | OneToManyLink<CustomsGroups, Items>> = [
    CustomsGroups.CODE,
    CustomsGroups.NAME,
    CustomsGroups.NUMBER,
    CustomsGroups.CUSTOMS,
    CustomsGroups.PURCHASE,
    CustomsGroups.OTHER,
    CustomsGroups.TOTAL,
    CustomsGroups.LOCKED,
    CustomsGroups.CUSTOMS_ALLOCATION_ACCOUNT,
    CustomsGroups.CUSTOMS_EXPENSE_ACCOUNT,
    CustomsGroups.PORT_ADDRESS,
    CustomsGroups.PORT_STATE,
    CustomsGroups.CHART_OF_ACCOUNT,
    CustomsGroups.ITEMS
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<CustomsGroups> = new AllFields('*', CustomsGroups);
  /**
   * All key fields of the CustomsGroups entity.
   */
  export const _keyFields: Array<Field<CustomsGroups>> = [CustomsGroups.CODE];
  /**
   * Mapping of all key field names to the respective static field property CustomsGroups.
   */
  export const _keys: { [keys: string]: Field<CustomsGroups> } = CustomsGroups._keyFields.reduce((acc: { [keys: string]: Field<CustomsGroups> }, field: Field<CustomsGroups>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
