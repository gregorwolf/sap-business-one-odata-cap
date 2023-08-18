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
import { CheckLine } from './CheckLine';
import { CreditLine } from './CreditLine';
import { BoeLine } from './BoeLine';
import type { DepositsApi } from './DepositsApi';
import { BoDepositTypeEnum } from './BoDepositTypeEnum';
import { BoDepositAccountTypeEnum } from './BoDepositAccountTypeEnum';
import { BoYesNoEnum } from './BoYesNoEnum';
import { BoCheckDepositTypeEnum } from './BoCheckDepositTypeEnum';
import { VatGroups, VatGroupsType } from './VatGroups';
import { Projects, ProjectsType } from './Projects';
import { DistributionRules, DistributionRulesType } from './DistributionRules';
import { BusinessPlaces, BusinessPlacesType } from './BusinessPlaces';
import { Attachments2, Attachments2Type } from './Attachments2';

/**
 * This class represents the entity "Deposits" of service "SAPB1".
 */
export class Deposits<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements DepositsType<T>
{
  /**
   * Technical entity name for Deposits.
   */
  static _entityName = 'Deposits';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the Deposits entity
   */
  static _keys = ['AbsEntry'];
  /**
   * Deposit Number.
   * @nullable
   */
  depositNumber?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Abs Entry.
   */
  absEntry!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Deposit Type.
   * @nullable
   */
  depositType?: BoDepositTypeEnum | null;
  /**
   * Deposit Date.
   * @nullable
   */
  depositDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Deposit Currency.
   * @nullable
   */
  depositCurrency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Deposit Account.
   * @nullable
   */
  depositAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Depositor Name.
   * @nullable
   */
  depositorName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bank.
   * @nullable
   */
  bank?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bank Account Num.
   * @nullable
   */
  bankAccountNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bank Branch.
   * @nullable
   */
  bankBranch?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bank Reference.
   * @nullable
   */
  bankReference?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Journal Remarks.
   * @nullable
   */
  journalRemarks?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Total Lc.
   * @nullable
   */
  totalLc?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Total Fc.
   * @nullable
   */
  totalFc?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Total Sc.
   * @nullable
   */
  totalSc?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Allocation Account.
   * @nullable
   */
  allocationAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Doc Rate.
   * @nullable
   */
  docRate?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Tax Account.
   * @nullable
   */
  taxAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Amount.
   * @nullable
   */
  taxAmount?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Commission Account.
   * @nullable
   */
  commissionAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Commission.
   * @nullable
   */
  commission?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Commission Date.
   * @nullable
   */
  commissionDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Tax Code.
   * @nullable
   */
  taxCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Deposit Account Type.
   * @nullable
   */
  depositAccountType?: BoDepositAccountTypeEnum | null;
  /**
   * Reconcile After Deposit.
   * @nullable
   */
  reconcileAfterDeposit?: BoYesNoEnum | null;
  /**
   * Voucher Account.
   * @nullable
   */
  voucherAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Series.
   * @nullable
   */
  series?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Project.
   * @nullable
   */
  project?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Distribution Rule.
   * @nullable
   */
  distributionRule?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Distribution Rule 2.
   * @nullable
   */
  distributionRule2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Distribution Rule 3.
   * @nullable
   */
  distributionRule3?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Distribution Rule 4.
   * @nullable
   */
  distributionRule4?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Distribution Rule 5.
   * @nullable
   */
  distributionRule5?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Commission Currency.
   * @nullable
   */
  commissionCurrency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Commission Sc.
   * @nullable
   */
  commissionSc?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Commission Fc.
   * @nullable
   */
  commissionFc?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Tax Amount Sc.
   * @nullable
   */
  taxAmountSc?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Tax Amount Fc.
   * @nullable
   */
  taxAmountFc?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Bplid.
   * @nullable
   */
  bplid?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Check Deposit Type.
   * @nullable
   */
  checkDepositType?: BoCheckDepositTypeEnum | null;
  /**
   * Attachment Entry.
   * @nullable
   */
  attachmentEntry?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Income Tax Account.
   * @nullable
   */
  incomeTaxAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Income Tax Amount.
   * @nullable
   */
  incomeTaxAmount?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Income Tax Amount Sc.
   * @nullable
   */
  incomeTaxAmountSc?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Income Tax Amount Fc.
   * @nullable
   */
  incomeTaxAmountFc?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Check Lines.
   * @nullable
   */
  checkLines?: CheckLine<T>[] | null;
  /**
   * Credit Lines.
   * @nullable
   */
  creditLines?: CreditLine<T>[] | null;
  /**
   * Boe Lines.
   * @nullable
   */
  boeLines?: BoeLine<T>[] | null;
  /**
   * One-to-one navigation property to the {@link VatGroups} entity.
   */
  vatGroup?: VatGroups<T> | null;
  /**
   * One-to-one navigation property to the {@link Projects} entity.
   */
  project2?: Projects<T> | null;
  /**
   * One-to-one navigation property to the {@link DistributionRules} entity.
   */
  distributionRule6?: DistributionRules<T> | null;
  /**
   * One-to-one navigation property to the {@link BusinessPlaces} entity.
   */
  businessPlace?: BusinessPlaces<T> | null;
  /**
   * One-to-one navigation property to the {@link Attachments2} entity.
   */
  attachments2?: Attachments2<T> | null;

  constructor(readonly _entityApi: DepositsApi<T>) {
    super(_entityApi);
  }
}

export interface DepositsType<T extends DeSerializers = DefaultDeSerializers> {
  depositNumber?: DeserializedType<T, 'Edm.Int32'> | null;
  absEntry: DeserializedType<T, 'Edm.Int32'>;
  depositType?: BoDepositTypeEnum | null;
  depositDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  depositCurrency?: DeserializedType<T, 'Edm.String'> | null;
  depositAccount?: DeserializedType<T, 'Edm.String'> | null;
  depositorName?: DeserializedType<T, 'Edm.String'> | null;
  bank?: DeserializedType<T, 'Edm.String'> | null;
  bankAccountNum?: DeserializedType<T, 'Edm.String'> | null;
  bankBranch?: DeserializedType<T, 'Edm.String'> | null;
  bankReference?: DeserializedType<T, 'Edm.String'> | null;
  journalRemarks?: DeserializedType<T, 'Edm.String'> | null;
  totalLc?: DeserializedType<T, 'Edm.Double'> | null;
  totalFc?: DeserializedType<T, 'Edm.Double'> | null;
  totalSc?: DeserializedType<T, 'Edm.Double'> | null;
  allocationAccount?: DeserializedType<T, 'Edm.String'> | null;
  docRate?: DeserializedType<T, 'Edm.Double'> | null;
  taxAccount?: DeserializedType<T, 'Edm.String'> | null;
  taxAmount?: DeserializedType<T, 'Edm.Double'> | null;
  commissionAccount?: DeserializedType<T, 'Edm.String'> | null;
  commission?: DeserializedType<T, 'Edm.Double'> | null;
  commissionDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  taxCode?: DeserializedType<T, 'Edm.String'> | null;
  depositAccountType?: BoDepositAccountTypeEnum | null;
  reconcileAfterDeposit?: BoYesNoEnum | null;
  voucherAccount?: DeserializedType<T, 'Edm.String'> | null;
  series?: DeserializedType<T, 'Edm.Int32'> | null;
  project?: DeserializedType<T, 'Edm.String'> | null;
  distributionRule?: DeserializedType<T, 'Edm.String'> | null;
  distributionRule2?: DeserializedType<T, 'Edm.String'> | null;
  distributionRule3?: DeserializedType<T, 'Edm.String'> | null;
  distributionRule4?: DeserializedType<T, 'Edm.String'> | null;
  distributionRule5?: DeserializedType<T, 'Edm.String'> | null;
  commissionCurrency?: DeserializedType<T, 'Edm.String'> | null;
  commissionSc?: DeserializedType<T, 'Edm.Double'> | null;
  commissionFc?: DeserializedType<T, 'Edm.Double'> | null;
  taxAmountSc?: DeserializedType<T, 'Edm.Double'> | null;
  taxAmountFc?: DeserializedType<T, 'Edm.Double'> | null;
  bplid?: DeserializedType<T, 'Edm.Int32'> | null;
  checkDepositType?: BoCheckDepositTypeEnum | null;
  attachmentEntry?: DeserializedType<T, 'Edm.Int32'> | null;
  incomeTaxAccount?: DeserializedType<T, 'Edm.String'> | null;
  incomeTaxAmount?: DeserializedType<T, 'Edm.Double'> | null;
  incomeTaxAmountSc?: DeserializedType<T, 'Edm.Double'> | null;
  incomeTaxAmountFc?: DeserializedType<T, 'Edm.Double'> | null;
  checkLines?: CheckLine<T>[] | null;
  creditLines?: CreditLine<T>[] | null;
  boeLines?: BoeLine<T>[] | null;
  vatGroup?: VatGroupsType<T> | null;
  project2?: ProjectsType<T> | null;
  distributionRule6?: DistributionRulesType<T> | null;
  businessPlace?: BusinessPlacesType<T> | null;
  attachments2?: Attachments2Type<T> | null;
}
