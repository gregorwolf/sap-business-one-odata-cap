/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DepositsRequestBuilder } from './DepositsRequestBuilder';
import { Moment } from 'moment';
import { CheckLine } from './CheckLine';
import { CreditLine } from './CreditLine';
import { BoeLine } from './BoeLine';
import { BoDepositTypeEnum } from './BoDepositTypeEnum';
import { BoDepositAccountTypeEnum } from './BoDepositAccountTypeEnum';
import { BoYesNoEnum } from './BoYesNoEnum';
import { BoCheckDepositTypeEnum } from './BoCheckDepositTypeEnum';
import { AllFields, CollectionField, CustomFieldV4, DateField, EntityBuilderType, EntityV4, EnumField, Field, NumberField, OneToOneLink, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "Deposits" of service "SAPB1".
 */
export class Deposits extends EntityV4 implements DepositsType {
  /**
   * Technical entity name for Deposits.
   */
  static _entityName = 'Deposits';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/b1s/v2/';
  /**
   * Deposit Number.
   * @nullable
   */
  depositNumber?: number;
  /**
   * Abs Entry.
   * @nullable
   */
  absEntry?: number;
  /**
   * Deposit Type.
   * @nullable
   */
  depositType?: BoDepositTypeEnum;
  /**
   * Deposit Date.
   * @nullable
   */
  depositDate?: Moment;
  /**
   * Deposit Currency.
   * @nullable
   */
  depositCurrency?: string;
  /**
   * Deposit Account.
   * @nullable
   */
  depositAccount?: string;
  /**
   * Depositor Name.
   * @nullable
   */
  depositorName?: string;
  /**
   * Bank.
   * @nullable
   */
  bank?: string;
  /**
   * Bank Account Num.
   * @nullable
   */
  bankAccountNum?: string;
  /**
   * Bank Branch.
   * @nullable
   */
  bankBranch?: string;
  /**
   * Bank Reference.
   * @nullable
   */
  bankReference?: string;
  /**
   * Journal Remarks.
   * @nullable
   */
  journalRemarks?: string;
  /**
   * Total Lc.
   * @nullable
   */
  totalLc?: number;
  /**
   * Total Fc.
   * @nullable
   */
  totalFc?: number;
  /**
   * Total Sc.
   * @nullable
   */
  totalSc?: number;
  /**
   * Allocation Account.
   * @nullable
   */
  allocationAccount?: string;
  /**
   * Doc Rate.
   * @nullable
   */
  docRate?: number;
  /**
   * Tax Account.
   * @nullable
   */
  taxAccount?: string;
  /**
   * Tax Amount.
   * @nullable
   */
  taxAmount?: number;
  /**
   * Commission Account.
   * @nullable
   */
  commissionAccount?: string;
  /**
   * Commission.
   * @nullable
   */
  commission?: number;
  /**
   * Commission Date.
   * @nullable
   */
  commissionDate?: Moment;
  /**
   * Tax Code.
   * @nullable
   */
  taxCode?: string;
  /**
   * Deposit Account Type.
   * @nullable
   */
  depositAccountType?: BoDepositAccountTypeEnum;
  /**
   * Reconcile After Deposit.
   * @nullable
   */
  reconcileAfterDeposit?: BoYesNoEnum;
  /**
   * Voucher Account.
   * @nullable
   */
  voucherAccount?: string;
  /**
   * Series.
   * @nullable
   */
  series?: number;
  /**
   * Project.
   * @nullable
   */
  project?: string;
  /**
   * Distribution Rule.
   * @nullable
   */
  distributionRule?: string;
  /**
   * Distribution Rule 2.
   * @nullable
   */
  distributionRule2?: string;
  /**
   * Distribution Rule 3.
   * @nullable
   */
  distributionRule3?: string;
  /**
   * Distribution Rule 4.
   * @nullable
   */
  distributionRule4?: string;
  /**
   * Distribution Rule 5.
   * @nullable
   */
  distributionRule5?: string;
  /**
   * Commission Currency.
   * @nullable
   */
  commissionCurrency?: string;
  /**
   * Commission Sc.
   * @nullable
   */
  commissionSc?: number;
  /**
   * Commission Fc.
   * @nullable
   */
  commissionFc?: number;
  /**
   * Tax Amount Sc.
   * @nullable
   */
  taxAmountSc?: number;
  /**
   * Tax Amount Fc.
   * @nullable
   */
  taxAmountFc?: number;
  /**
   * Bplid.
   * @nullable
   */
  bplid?: number;
  /**
   * Check Deposit Type.
   * @nullable
   */
  checkDepositType?: BoCheckDepositTypeEnum;
  /**
   * Check Lines.
   * @nullable
   */
  checkLines?: CheckLine[];
  /**
   * Credit Lines.
   * @nullable
   */
  creditLines?: CreditLine[];
  /**
   * Boe Lines.
   * @nullable
   */
  boeLines?: BoeLine[];
  /**
   * One-to-one navigation property to the [[VatGroups]] entity.
   */
  vatGroup!: VatGroups;
  /**
   * One-to-one navigation property to the [[Projects]] entity.
   */
  project2!: Projects;
  /**
   * One-to-one navigation property to the [[DistributionRules]] entity.
   */
  distributionRule6!: DistributionRules;
  /**
   * One-to-one navigation property to the [[BusinessPlaces]] entity.
   */
  businessPlace!: BusinessPlaces;

  /**
   * Returns an entity builder to construct instances of `Deposits`.
   * @returns A builder that constructs instances of entity type `Deposits`.
   */
  static builder(): EntityBuilderType<Deposits, DepositsType> {
    return EntityV4.entityBuilder(Deposits);
  }

  /**
   * Returns a request builder to construct requests for operations on the `Deposits` entity type.
   * @returns A `Deposits` request builder.
   */
  static requestBuilder(): DepositsRequestBuilder {
    return new DepositsRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `Deposits`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `Deposits`.
   */
  static customField(fieldName: string): CustomFieldV4<Deposits> {
    return EntityV4.customFieldSelector(fieldName, Deposits);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { VatGroups, VatGroupsType } from './VatGroups';
import { Projects, ProjectsType } from './Projects';
import { DistributionRules, DistributionRulesType } from './DistributionRules';
import { BusinessPlaces, BusinessPlacesType } from './BusinessPlaces';

export interface DepositsType {
  depositNumber?: number | null;
  absEntry?: number | null;
  depositType?: BoDepositTypeEnum | null;
  depositDate?: Moment | null;
  depositCurrency?: string | null;
  depositAccount?: string | null;
  depositorName?: string | null;
  bank?: string | null;
  bankAccountNum?: string | null;
  bankBranch?: string | null;
  bankReference?: string | null;
  journalRemarks?: string | null;
  totalLc?: number | null;
  totalFc?: number | null;
  totalSc?: number | null;
  allocationAccount?: string | null;
  docRate?: number | null;
  taxAccount?: string | null;
  taxAmount?: number | null;
  commissionAccount?: string | null;
  commission?: number | null;
  commissionDate?: Moment | null;
  taxCode?: string | null;
  depositAccountType?: BoDepositAccountTypeEnum | null;
  reconcileAfterDeposit?: BoYesNoEnum | null;
  voucherAccount?: string | null;
  series?: number | null;
  project?: string | null;
  distributionRule?: string | null;
  distributionRule2?: string | null;
  distributionRule3?: string | null;
  distributionRule4?: string | null;
  distributionRule5?: string | null;
  commissionCurrency?: string | null;
  commissionSc?: number | null;
  commissionFc?: number | null;
  taxAmountSc?: number | null;
  taxAmountFc?: number | null;
  bplid?: number | null;
  checkDepositType?: BoCheckDepositTypeEnum | null;
  checkLines?: CheckLine[] | null;
  creditLines?: CreditLine[] | null;
  boeLines?: BoeLine[] | null;
  vatGroup: VatGroupsType;
  project2: ProjectsType;
  distributionRule6: DistributionRulesType;
  businessPlace: BusinessPlacesType;
}

export namespace Deposits {
  /**
   * Static representation of the [[depositNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEPOSIT_NUMBER: NumberField<Deposits> = new NumberField('DepositNumber', Deposits, 'Edm.Int32');
  /**
   * Static representation of the [[absEntry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ABS_ENTRY: NumberField<Deposits> = new NumberField('AbsEntry', Deposits, 'Edm.Int32');
  /**
   * Static representation of the [[depositType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEPOSIT_TYPE: EnumField<Deposits> = new EnumField('DepositType', Deposits);
  /**
   * Static representation of the [[depositDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEPOSIT_DATE: DateField<Deposits> = new DateField('DepositDate', Deposits, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[depositCurrency]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEPOSIT_CURRENCY: StringField<Deposits> = new StringField('DepositCurrency', Deposits, 'Edm.String');
  /**
   * Static representation of the [[depositAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEPOSIT_ACCOUNT: StringField<Deposits> = new StringField('DepositAccount', Deposits, 'Edm.String');
  /**
   * Static representation of the [[depositorName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEPOSITOR_NAME: StringField<Deposits> = new StringField('DepositorName', Deposits, 'Edm.String');
  /**
   * Static representation of the [[bank]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BANK: StringField<Deposits> = new StringField('Bank', Deposits, 'Edm.String');
  /**
   * Static representation of the [[bankAccountNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BANK_ACCOUNT_NUM: StringField<Deposits> = new StringField('BankAccountNum', Deposits, 'Edm.String');
  /**
   * Static representation of the [[bankBranch]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BANK_BRANCH: StringField<Deposits> = new StringField('BankBranch', Deposits, 'Edm.String');
  /**
   * Static representation of the [[bankReference]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BANK_REFERENCE: StringField<Deposits> = new StringField('BankReference', Deposits, 'Edm.String');
  /**
   * Static representation of the [[journalRemarks]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOURNAL_REMARKS: StringField<Deposits> = new StringField('JournalRemarks', Deposits, 'Edm.String');
  /**
   * Static representation of the [[totalLc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TOTAL_LC: NumberField<Deposits> = new NumberField('TotalLC', Deposits, 'Edm.Double');
  /**
   * Static representation of the [[totalFc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TOTAL_FC: NumberField<Deposits> = new NumberField('TotalFC', Deposits, 'Edm.Double');
  /**
   * Static representation of the [[totalSc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TOTAL_SC: NumberField<Deposits> = new NumberField('TotalSC', Deposits, 'Edm.Double');
  /**
   * Static representation of the [[allocationAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ALLOCATION_ACCOUNT: StringField<Deposits> = new StringField('AllocationAccount', Deposits, 'Edm.String');
  /**
   * Static representation of the [[docRate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_RATE: NumberField<Deposits> = new NumberField('DocRate', Deposits, 'Edm.Double');
  /**
   * Static representation of the [[taxAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TAX_ACCOUNT: StringField<Deposits> = new StringField('TaxAccount', Deposits, 'Edm.String');
  /**
   * Static representation of the [[taxAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TAX_AMOUNT: NumberField<Deposits> = new NumberField('TaxAmount', Deposits, 'Edm.Double');
  /**
   * Static representation of the [[commissionAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMMISSION_ACCOUNT: StringField<Deposits> = new StringField('CommissionAccount', Deposits, 'Edm.String');
  /**
   * Static representation of the [[commission]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMMISSION: NumberField<Deposits> = new NumberField('Commission', Deposits, 'Edm.Double');
  /**
   * Static representation of the [[commissionDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMMISSION_DATE: DateField<Deposits> = new DateField('CommissionDate', Deposits, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[taxCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TAX_CODE: StringField<Deposits> = new StringField('TaxCode', Deposits, 'Edm.String');
  /**
   * Static representation of the [[depositAccountType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEPOSIT_ACCOUNT_TYPE: EnumField<Deposits> = new EnumField('DepositAccountType', Deposits);
  /**
   * Static representation of the [[reconcileAfterDeposit]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RECONCILE_AFTER_DEPOSIT: EnumField<Deposits> = new EnumField('ReconcileAfterDeposit', Deposits);
  /**
   * Static representation of the [[voucherAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VOUCHER_ACCOUNT: StringField<Deposits> = new StringField('VoucherAccount', Deposits, 'Edm.String');
  /**
   * Static representation of the [[series]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SERIES: NumberField<Deposits> = new NumberField('Series', Deposits, 'Edm.Int32');
  /**
   * Static representation of the [[project]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROJECT: StringField<Deposits> = new StringField('Project', Deposits, 'Edm.String');
  /**
   * Static representation of the [[distributionRule]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DISTRIBUTION_RULE: StringField<Deposits> = new StringField('DistributionRule', Deposits, 'Edm.String');
  /**
   * Static representation of the [[distributionRule2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DISTRIBUTION_RULE_2: StringField<Deposits> = new StringField('DistributionRule2', Deposits, 'Edm.String');
  /**
   * Static representation of the [[distributionRule3]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DISTRIBUTION_RULE_3: StringField<Deposits> = new StringField('DistributionRule3', Deposits, 'Edm.String');
  /**
   * Static representation of the [[distributionRule4]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DISTRIBUTION_RULE_4: StringField<Deposits> = new StringField('DistributionRule4', Deposits, 'Edm.String');
  /**
   * Static representation of the [[distributionRule5]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DISTRIBUTION_RULE_5: StringField<Deposits> = new StringField('DistributionRule5', Deposits, 'Edm.String');
  /**
   * Static representation of the [[commissionCurrency]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMMISSION_CURRENCY: StringField<Deposits> = new StringField('CommissionCurrency', Deposits, 'Edm.String');
  /**
   * Static representation of the [[commissionSc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMMISSION_SC: NumberField<Deposits> = new NumberField('CommissionSC', Deposits, 'Edm.Double');
  /**
   * Static representation of the [[commissionFc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMMISSION_FC: NumberField<Deposits> = new NumberField('CommissionFC', Deposits, 'Edm.Double');
  /**
   * Static representation of the [[taxAmountSc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TAX_AMOUNT_SC: NumberField<Deposits> = new NumberField('TaxAmountSC', Deposits, 'Edm.Double');
  /**
   * Static representation of the [[taxAmountFc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TAX_AMOUNT_FC: NumberField<Deposits> = new NumberField('TaxAmountFC', Deposits, 'Edm.Double');
  /**
   * Static representation of the [[bplid]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BPLID: NumberField<Deposits> = new NumberField('BPLID', Deposits, 'Edm.Int32');
  /**
   * Static representation of the [[checkDepositType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CHECK_DEPOSIT_TYPE: EnumField<Deposits> = new EnumField('CheckDepositType', Deposits);
  /**
   * Static representation of the [[checkLines]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CHECK_LINES: CollectionField<Deposits, CheckLine> = new CollectionField('CheckLines', Deposits, CheckLine);
  /**
   * Static representation of the [[creditLines]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREDIT_LINES: CollectionField<Deposits, CreditLine> = new CollectionField('CreditLines', Deposits, CreditLine);
  /**
   * Static representation of the [[boeLines]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BOE_LINES: CollectionField<Deposits, BoeLine> = new CollectionField('BOELines', Deposits, BoeLine);
  /**
   * Static representation of the one-to-one navigation property [[vatGroup]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VAT_GROUP: OneToOneLink<Deposits, VatGroups> = new OneToOneLink('VatGroup', Deposits, VatGroups);
  /**
   * Static representation of the one-to-one navigation property [[project2]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROJECT_2: OneToOneLink<Deposits, Projects> = new OneToOneLink('Project2', Deposits, Projects);
  /**
   * Static representation of the one-to-one navigation property [[distributionRule6]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DISTRIBUTION_RULE_6: OneToOneLink<Deposits, DistributionRules> = new OneToOneLink('DistributionRule6', Deposits, DistributionRules);
  /**
   * Static representation of the one-to-one navigation property [[businessPlace]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PLACE: OneToOneLink<Deposits, BusinessPlaces> = new OneToOneLink('BusinessPlace', Deposits, BusinessPlaces);
  /**
   * All fields of the Deposits entity.
   */
  export const _allFields: Array<NumberField<Deposits> | EnumField<Deposits> | DateField<Deposits> | StringField<Deposits> | CollectionField<Deposits, CheckLine> | CollectionField<Deposits, CreditLine> | CollectionField<Deposits, BoeLine> | OneToOneLink<Deposits, VatGroups> | OneToOneLink<Deposits, Projects> | OneToOneLink<Deposits, DistributionRules> | OneToOneLink<Deposits, BusinessPlaces>> = [
    Deposits.DEPOSIT_NUMBER,
    Deposits.ABS_ENTRY,
    Deposits.DEPOSIT_TYPE,
    Deposits.DEPOSIT_DATE,
    Deposits.DEPOSIT_CURRENCY,
    Deposits.DEPOSIT_ACCOUNT,
    Deposits.DEPOSITOR_NAME,
    Deposits.BANK,
    Deposits.BANK_ACCOUNT_NUM,
    Deposits.BANK_BRANCH,
    Deposits.BANK_REFERENCE,
    Deposits.JOURNAL_REMARKS,
    Deposits.TOTAL_LC,
    Deposits.TOTAL_FC,
    Deposits.TOTAL_SC,
    Deposits.ALLOCATION_ACCOUNT,
    Deposits.DOC_RATE,
    Deposits.TAX_ACCOUNT,
    Deposits.TAX_AMOUNT,
    Deposits.COMMISSION_ACCOUNT,
    Deposits.COMMISSION,
    Deposits.COMMISSION_DATE,
    Deposits.TAX_CODE,
    Deposits.DEPOSIT_ACCOUNT_TYPE,
    Deposits.RECONCILE_AFTER_DEPOSIT,
    Deposits.VOUCHER_ACCOUNT,
    Deposits.SERIES,
    Deposits.PROJECT,
    Deposits.DISTRIBUTION_RULE,
    Deposits.DISTRIBUTION_RULE_2,
    Deposits.DISTRIBUTION_RULE_3,
    Deposits.DISTRIBUTION_RULE_4,
    Deposits.DISTRIBUTION_RULE_5,
    Deposits.COMMISSION_CURRENCY,
    Deposits.COMMISSION_SC,
    Deposits.COMMISSION_FC,
    Deposits.TAX_AMOUNT_SC,
    Deposits.TAX_AMOUNT_FC,
    Deposits.BPLID,
    Deposits.CHECK_DEPOSIT_TYPE,
    Deposits.CHECK_LINES,
    Deposits.CREDIT_LINES,
    Deposits.BOE_LINES,
    Deposits.VAT_GROUP,
    Deposits.PROJECT_2,
    Deposits.DISTRIBUTION_RULE_6,
    Deposits.BUSINESS_PLACE
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<Deposits> = new AllFields('*', Deposits);
  /**
   * All key fields of the Deposits entity.
   */
  export const _keyFields: Array<Field<Deposits>> = [Deposits.ABS_ENTRY];
  /**
   * Mapping of all key field names to the respective static field property Deposits.
   */
  export const _keys: { [keys: string]: Field<Deposits> } = Deposits._keyFields.reduce((acc: { [keys: string]: Field<Deposits> }, field: Field<Deposits>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
