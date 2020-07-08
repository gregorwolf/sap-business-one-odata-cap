/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FaAccountDeterminationsRequestBuilder } from './FaAccountDeterminationsRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, OneToOneLink, StringField } from '@sap-cloud-sdk/core/v4';

/**
 * This class represents the entity "FAAccountDeterminations" of service "SAPB1".
 */
export class FaAccountDeterminations extends Entity implements FaAccountDeterminationsType {
  /**
   * Technical entity name for FaAccountDeterminations.
   */
  static _entityName = 'FAAccountDeterminations';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for FaAccountDeterminations.
   */
  static _serviceName = 'SAPB1';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Code.
   * @nullable
   */
  code?: string;
  /**
   * Description.
   * @nullable
   */
  description?: string;
  /**
   * Asset Balance Sheet Account.
   * @nullable
   */
  assetBalanceSheetAccount?: string;
  /**
   * Clearing Account Acquisition.
   * @nullable
   */
  clearingAccountAcquisition?: string;
  /**
   * Revaluation Reserve Account.
   * @nullable
   */
  revaluationReserveAccount?: string;
  /**
   * Revaluation Reserve Clearing.
   * @nullable
   */
  revaluationReserveClearing?: string;
  /**
   * Ordinary Depreciation.
   * @nullable
   */
  ordinaryDepreciation?: string;
  /**
   * Accumulated Ordinary Depr.
   * @nullable
   */
  accumulatedOrdinaryDepr?: string;
  /**
   * Unplanned Depreciation.
   * @nullable
   */
  unplannedDepreciation?: string;
  /**
   * Accumulated Unplanned Depr.
   * @nullable
   */
  accumulatedUnplannedDepr?: string;
  /**
   * Special Depreciation.
   * @nullable
   */
  specialDepreciation?: string;
  /**
   * Accumulated Special Depr.
   * @nullable
   */
  accumulatedSpecialDepr?: string;
  /**
   * Revenuefrom Asset Sales Net.
   * @nullable
   */
  revenuefromAssetSalesNet?: string;
  /**
   * Retirementwith Expense Net.
   * @nullable
   */
  retirementwithExpenseNet?: string;
  /**
   * Retirementwith Revenue Net.
   * @nullable
   */
  retirementwithRevenueNet?: string;
  /**
   * Leavewith Expense Nbv Gross.
   * @nullable
   */
  leavewithExpenseNbvGross?: string;
  /**
   * Leavewith Revenue Nbv Gross.
   * @nullable
   */
  leavewithRevenueNbvGross?: string;
  /**
   * Revenue Accountfor Retirement.
   * @nullable
   */
  revenueAccountforRetirement?: string;
  /**
   * Revenue Clearing Account.
   * @nullable
   */
  revenueClearingAccount?: string;
  /**
   * One-to-one navigation property to the [[ChartOfAccounts]] entity.
   */
  chartOfAccount!: ChartOfAccounts;

  /**
   * Returns an entity builder to construct instances `FaAccountDeterminations`.
   * @returns A builder that constructs instances of entity type `FaAccountDeterminations`.
   */
  static builder(): EntityBuilderType<FaAccountDeterminations, FaAccountDeterminationsTypeForceMandatory> {
    return Entity.entityBuilder(FaAccountDeterminations);
  }

  /**
   * Returns a request builder to construct requests for operations on the `FaAccountDeterminations` entity type.
   * @returns A `FaAccountDeterminations` request builder.
   */
  static requestBuilder(): FaAccountDeterminationsRequestBuilder {
    return new FaAccountDeterminationsRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `FaAccountDeterminations`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `FaAccountDeterminations`.
   */
  static customField(fieldName: string): CustomField<FaAccountDeterminations> {
    return Entity.customFieldSelector(fieldName, FaAccountDeterminations);
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

export interface FaAccountDeterminationsType {
  code?: string;
  description?: string;
  assetBalanceSheetAccount?: string;
  clearingAccountAcquisition?: string;
  revaluationReserveAccount?: string;
  revaluationReserveClearing?: string;
  ordinaryDepreciation?: string;
  accumulatedOrdinaryDepr?: string;
  unplannedDepreciation?: string;
  accumulatedUnplannedDepr?: string;
  specialDepreciation?: string;
  accumulatedSpecialDepr?: string;
  revenuefromAssetSalesNet?: string;
  retirementwithExpenseNet?: string;
  retirementwithRevenueNet?: string;
  leavewithExpenseNbvGross?: string;
  leavewithRevenueNbvGross?: string;
  revenueAccountforRetirement?: string;
  revenueClearingAccount?: string;
  chartOfAccount: ChartOfAccountsType;
}

export interface FaAccountDeterminationsTypeForceMandatory {
  code: string;
  description: string;
  assetBalanceSheetAccount: string;
  clearingAccountAcquisition: string;
  revaluationReserveAccount: string;
  revaluationReserveClearing: string;
  ordinaryDepreciation: string;
  accumulatedOrdinaryDepr: string;
  unplannedDepreciation: string;
  accumulatedUnplannedDepr: string;
  specialDepreciation: string;
  accumulatedSpecialDepr: string;
  revenuefromAssetSalesNet: string;
  retirementwithExpenseNet: string;
  retirementwithRevenueNet: string;
  leavewithExpenseNbvGross: string;
  leavewithRevenueNbvGross: string;
  revenueAccountforRetirement: string;
  revenueClearingAccount: string;
  chartOfAccount: ChartOfAccountsType;
}

export namespace FaAccountDeterminations {
  /**
   * Static representation of the [[code]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CODE: StringField<FaAccountDeterminations> = new StringField('Code', FaAccountDeterminations, 'Edm.String');
  /**
   * Static representation of the [[description]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION: StringField<FaAccountDeterminations> = new StringField('Description', FaAccountDeterminations, 'Edm.String');
  /**
   * Static representation of the [[assetBalanceSheetAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ASSET_BALANCE_SHEET_ACCOUNT: StringField<FaAccountDeterminations> = new StringField('AssetBalanceSheetAccount', FaAccountDeterminations, 'Edm.String');
  /**
   * Static representation of the [[clearingAccountAcquisition]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CLEARING_ACCOUNT_ACQUISITION: StringField<FaAccountDeterminations> = new StringField('ClearingAccountAcquisition', FaAccountDeterminations, 'Edm.String');
  /**
   * Static representation of the [[revaluationReserveAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REVALUATION_RESERVE_ACCOUNT: StringField<FaAccountDeterminations> = new StringField('RevaluationReserveAccount', FaAccountDeterminations, 'Edm.String');
  /**
   * Static representation of the [[revaluationReserveClearing]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REVALUATION_RESERVE_CLEARING: StringField<FaAccountDeterminations> = new StringField('RevaluationReserveClearing', FaAccountDeterminations, 'Edm.String');
  /**
   * Static representation of the [[ordinaryDepreciation]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ORDINARY_DEPRECIATION: StringField<FaAccountDeterminations> = new StringField('OrdinaryDepreciation', FaAccountDeterminations, 'Edm.String');
  /**
   * Static representation of the [[accumulatedOrdinaryDepr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACCUMULATED_ORDINARY_DEPR: StringField<FaAccountDeterminations> = new StringField('AccumulatedOrdinaryDepr', FaAccountDeterminations, 'Edm.String');
  /**
   * Static representation of the [[unplannedDepreciation]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const UNPLANNED_DEPRECIATION: StringField<FaAccountDeterminations> = new StringField('UnplannedDepreciation', FaAccountDeterminations, 'Edm.String');
  /**
   * Static representation of the [[accumulatedUnplannedDepr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACCUMULATED_UNPLANNED_DEPR: StringField<FaAccountDeterminations> = new StringField('AccumulatedUnplannedDepr', FaAccountDeterminations, 'Edm.String');
  /**
   * Static representation of the [[specialDepreciation]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SPECIAL_DEPRECIATION: StringField<FaAccountDeterminations> = new StringField('SpecialDepreciation', FaAccountDeterminations, 'Edm.String');
  /**
   * Static representation of the [[accumulatedSpecialDepr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACCUMULATED_SPECIAL_DEPR: StringField<FaAccountDeterminations> = new StringField('AccumulatedSpecialDepr', FaAccountDeterminations, 'Edm.String');
  /**
   * Static representation of the [[revenuefromAssetSalesNet]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REVENUEFROM_ASSET_SALES_NET: StringField<FaAccountDeterminations> = new StringField('RevenuefromAssetSalesNet', FaAccountDeterminations, 'Edm.String');
  /**
   * Static representation of the [[retirementwithExpenseNet]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RETIREMENTWITH_EXPENSE_NET: StringField<FaAccountDeterminations> = new StringField('RetirementwithExpenseNet', FaAccountDeterminations, 'Edm.String');
  /**
   * Static representation of the [[retirementwithRevenueNet]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RETIREMENTWITH_REVENUE_NET: StringField<FaAccountDeterminations> = new StringField('RetirementwithRevenueNet', FaAccountDeterminations, 'Edm.String');
  /**
   * Static representation of the [[leavewithExpenseNbvGross]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LEAVEWITH_EXPENSE_NBV_GROSS: StringField<FaAccountDeterminations> = new StringField('LeavewithExpenseNBVGross', FaAccountDeterminations, 'Edm.String');
  /**
   * Static representation of the [[leavewithRevenueNbvGross]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LEAVEWITH_REVENUE_NBV_GROSS: StringField<FaAccountDeterminations> = new StringField('LeavewithRevenueNBVGross', FaAccountDeterminations, 'Edm.String');
  /**
   * Static representation of the [[revenueAccountforRetirement]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REVENUE_ACCOUNTFOR_RETIREMENT: StringField<FaAccountDeterminations> = new StringField('RevenueAccountforRetirement', FaAccountDeterminations, 'Edm.String');
  /**
   * Static representation of the [[revenueClearingAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REVENUE_CLEARING_ACCOUNT: StringField<FaAccountDeterminations> = new StringField('RevenueClearingAccount', FaAccountDeterminations, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[chartOfAccount]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CHART_OF_ACCOUNT: OneToOneLink<FaAccountDeterminations, ChartOfAccounts> = new OneToOneLink('ChartOfAccount', FaAccountDeterminations, ChartOfAccounts);
  /**
   * All fields of the FaAccountDeterminations entity.
   */
  export const _allFields: Array<StringField<FaAccountDeterminations> | OneToOneLink<FaAccountDeterminations, ChartOfAccounts>> = [
    FaAccountDeterminations.CODE,
    FaAccountDeterminations.DESCRIPTION,
    FaAccountDeterminations.ASSET_BALANCE_SHEET_ACCOUNT,
    FaAccountDeterminations.CLEARING_ACCOUNT_ACQUISITION,
    FaAccountDeterminations.REVALUATION_RESERVE_ACCOUNT,
    FaAccountDeterminations.REVALUATION_RESERVE_CLEARING,
    FaAccountDeterminations.ORDINARY_DEPRECIATION,
    FaAccountDeterminations.ACCUMULATED_ORDINARY_DEPR,
    FaAccountDeterminations.UNPLANNED_DEPRECIATION,
    FaAccountDeterminations.ACCUMULATED_UNPLANNED_DEPR,
    FaAccountDeterminations.SPECIAL_DEPRECIATION,
    FaAccountDeterminations.ACCUMULATED_SPECIAL_DEPR,
    FaAccountDeterminations.REVENUEFROM_ASSET_SALES_NET,
    FaAccountDeterminations.RETIREMENTWITH_EXPENSE_NET,
    FaAccountDeterminations.RETIREMENTWITH_REVENUE_NET,
    FaAccountDeterminations.LEAVEWITH_EXPENSE_NBV_GROSS,
    FaAccountDeterminations.LEAVEWITH_REVENUE_NBV_GROSS,
    FaAccountDeterminations.REVENUE_ACCOUNTFOR_RETIREMENT,
    FaAccountDeterminations.REVENUE_CLEARING_ACCOUNT,
    FaAccountDeterminations.CHART_OF_ACCOUNT
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<FaAccountDeterminations> = new AllFields('*', FaAccountDeterminations);
  /**
   * All key fields of the FaAccountDeterminations entity.
   */
  export const _keyFields: Array<Field<FaAccountDeterminations>> = [FaAccountDeterminations.CODE];
  /**
   * Mapping of all key field names to the respective static field property FaAccountDeterminations.
   */
  export const _keys: { [keys: string]: Field<FaAccountDeterminations> } = FaAccountDeterminations._keyFields.reduce((acc: { [keys: string]: Field<FaAccountDeterminations> }, field: Field<FaAccountDeterminations>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
