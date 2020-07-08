/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { WorkOrdersRequestBuilder } from './WorkOrdersRequestBuilder';
import { Moment } from 'moment';
import { WorkOrderLine, WorkOrderLineField } from './WorkOrderLine';
import { AllFields, CollectionField, CustomField, DateField, Entity, EntityBuilderType, Field, NumberField, OneToOneLink, StringField } from '@sap-cloud-sdk/core/v4';

/**
 * This class represents the entity "WorkOrders" of service "SAPB1".
 */
export class WorkOrders extends Entity implements WorkOrdersType {
  /**
   * Technical entity name for WorkOrders.
   */
  static _entityName = 'WorkOrders';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for WorkOrders.
   */
  static _serviceName = 'SAPB1';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Order Date.
   * @nullable
   */
  orderDate?: Moment;
  /**
   * Work Start Date.
   * @nullable
   */
  workStartDate?: Moment;
  /**
   * Expected Completion Date.
   * @nullable
   */
  expectedCompletionDate?: Moment;
  /**
   * Work Finish Date.
   * @nullable
   */
  workFinishDate?: Moment;
  /**
   * Receiver Name.
   * @nullable
   */
  receiverName?: string;
  /**
   * Orderer Code.
   * @nullable
   */
  ordererCode?: string;
  /**
   * Orderer Name.
   * @nullable
   */
  ordererName?: string;
  /**
   * Customer Ref No.
   * @nullable
   */
  customerRefNo?: string;
  /**
   * Order Total.
   * @nullable
   */
  orderTotal?: number;
  /**
   * Total Currency.
   * @nullable
   */
  totalCurrency?: string;
  /**
   * Generation Time.
   * @nullable
   */
  generationTime?: number;
  /**
   * Comment.
   * @nullable
   */
  comment?: string;
  /**
   * Instruction Number.
   * @nullable
   */
  instructionNumber?: number;
  /**
   * Contact Person.
   * @nullable
   */
  contactPerson?: number;
  /**
   * Series.
   * @nullable
   */
  series?: number;
  /**
   * Active Account Code.
   * @nullable
   */
  activeAccountCode?: string;
  /**
   * Work Sum.
   * @nullable
   */
  workSum?: number;
  /**
   * Journal Remarks.
   * @nullable
   */
  journalRemarks?: string;
  /**
   * Price List Num.
   * @nullable
   */
  priceListNum?: number;
  /**
   * Financial Period.
   * @nullable
   */
  financialPeriod?: number;
  /**
   * Order Num.
   * @nullable
   */
  orderNum?: number;
  /**
   * Work Order Lines.
   * @nullable
   */
  workOrderLines?: WorkOrderLine[];
  /**
   * One-to-one navigation property to the [[Users]] entity.
   */
  user!: Users;
  /**
   * One-to-one navigation property to the [[BusinessPartners]] entity.
   */
  businessPartner!: BusinessPartners;
  /**
   * One-to-one navigation property to the [[ChartOfAccounts]] entity.
   */
  chartOfAccount!: ChartOfAccounts;
  /**
   * One-to-one navigation property to the [[PriceLists]] entity.
   */
  priceList!: PriceLists;

  /**
   * Returns an entity builder to construct instances `WorkOrders`.
   * @returns A builder that constructs instances of entity type `WorkOrders`.
   */
  static builder(): EntityBuilderType<WorkOrders, WorkOrdersTypeForceMandatory> {
    return Entity.entityBuilder(WorkOrders);
  }

  /**
   * Returns a request builder to construct requests for operations on the `WorkOrders` entity type.
   * @returns A `WorkOrders` request builder.
   */
  static requestBuilder(): WorkOrdersRequestBuilder {
    return new WorkOrdersRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `WorkOrders`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `WorkOrders`.
   */
  static customField(fieldName: string): CustomField<WorkOrders> {
    return Entity.customFieldSelector(fieldName, WorkOrders);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { Users, UsersType } from './Users';
import { BusinessPartners, BusinessPartnersType } from './BusinessPartners';
import { ChartOfAccounts, ChartOfAccountsType } from './ChartOfAccounts';
import { PriceLists, PriceListsType } from './PriceLists';

export interface WorkOrdersType {
  orderDate?: Moment;
  workStartDate?: Moment;
  expectedCompletionDate?: Moment;
  workFinishDate?: Moment;
  receiverName?: string;
  ordererCode?: string;
  ordererName?: string;
  customerRefNo?: string;
  orderTotal?: number;
  totalCurrency?: string;
  generationTime?: number;
  comment?: string;
  instructionNumber?: number;
  contactPerson?: number;
  series?: number;
  activeAccountCode?: string;
  workSum?: number;
  journalRemarks?: string;
  priceListNum?: number;
  financialPeriod?: number;
  orderNum?: number;
  workOrderLines?: WorkOrderLine[];
  user: UsersType;
  businessPartner: BusinessPartnersType;
  chartOfAccount: ChartOfAccountsType;
  priceList: PriceListsType;
}

export interface WorkOrdersTypeForceMandatory {
  orderDate: Moment;
  workStartDate: Moment;
  expectedCompletionDate: Moment;
  workFinishDate: Moment;
  receiverName: string;
  ordererCode: string;
  ordererName: string;
  customerRefNo: string;
  orderTotal: number;
  totalCurrency: string;
  generationTime: number;
  comment: string;
  instructionNumber: number;
  contactPerson: number;
  series: number;
  activeAccountCode: string;
  workSum: number;
  journalRemarks: string;
  priceListNum: number;
  financialPeriod: number;
  orderNum: number;
  workOrderLines: WorkOrderLine[];
  user: UsersType;
  businessPartner: BusinessPartnersType;
  chartOfAccount: ChartOfAccountsType;
  priceList: PriceListsType;
}

export namespace WorkOrders {
  /**
   * Static representation of the [[orderDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ORDER_DATE: DateField<WorkOrders> = new DateField('OrderDate', WorkOrders, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[workStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WORK_START_DATE: DateField<WorkOrders> = new DateField('WorkStartDate', WorkOrders, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[expectedCompletionDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXPECTED_COMPLETION_DATE: DateField<WorkOrders> = new DateField('ExpectedCompletionDate', WorkOrders, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[workFinishDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WORK_FINISH_DATE: DateField<WorkOrders> = new DateField('WorkFinishDate', WorkOrders, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[receiverName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RECEIVER_NAME: StringField<WorkOrders> = new StringField('ReceiverName', WorkOrders, 'Edm.String');
  /**
   * Static representation of the [[ordererCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ORDERER_CODE: StringField<WorkOrders> = new StringField('OrdererCode', WorkOrders, 'Edm.String');
  /**
   * Static representation of the [[ordererName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ORDERER_NAME: StringField<WorkOrders> = new StringField('OrdererName', WorkOrders, 'Edm.String');
  /**
   * Static representation of the [[customerRefNo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOMER_REF_NO: StringField<WorkOrders> = new StringField('CustomerRefNo', WorkOrders, 'Edm.String');
  /**
   * Static representation of the [[orderTotal]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ORDER_TOTAL: NumberField<WorkOrders> = new NumberField('OrderTotal', WorkOrders, 'Edm.Double');
  /**
   * Static representation of the [[totalCurrency]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TOTAL_CURRENCY: StringField<WorkOrders> = new StringField('TotalCurrency', WorkOrders, 'Edm.String');
  /**
   * Static representation of the [[generationTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERATION_TIME: NumberField<WorkOrders> = new NumberField('GenerationTime', WorkOrders, 'Edm.Int32');
  /**
   * Static representation of the [[comment]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMMENT: StringField<WorkOrders> = new StringField('Comment', WorkOrders, 'Edm.String');
  /**
   * Static representation of the [[instructionNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INSTRUCTION_NUMBER: NumberField<WorkOrders> = new NumberField('InstructionNumber', WorkOrders, 'Edm.Int32');
  /**
   * Static representation of the [[contactPerson]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONTACT_PERSON: NumberField<WorkOrders> = new NumberField('ContactPerson', WorkOrders, 'Edm.Int32');
  /**
   * Static representation of the [[series]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SERIES: NumberField<WorkOrders> = new NumberField('Series', WorkOrders, 'Edm.Int32');
  /**
   * Static representation of the [[activeAccountCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACTIVE_ACCOUNT_CODE: StringField<WorkOrders> = new StringField('ActiveAccountCode', WorkOrders, 'Edm.String');
  /**
   * Static representation of the [[workSum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WORK_SUM: NumberField<WorkOrders> = new NumberField('WorkSum', WorkOrders, 'Edm.Double');
  /**
   * Static representation of the [[journalRemarks]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOURNAL_REMARKS: StringField<WorkOrders> = new StringField('JournalRemarks', WorkOrders, 'Edm.String');
  /**
   * Static representation of the [[priceListNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRICE_LIST_NUM: NumberField<WorkOrders> = new NumberField('PriceListNum', WorkOrders, 'Edm.Int32');
  /**
   * Static representation of the [[financialPeriod]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FINANCIAL_PERIOD: NumberField<WorkOrders> = new NumberField('FinancialPeriod', WorkOrders, 'Edm.Int32');
  /**
   * Static representation of the [[orderNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ORDER_NUM: NumberField<WorkOrders> = new NumberField('OrderNum', WorkOrders, 'Edm.Int32');
  /**
   * Static representation of the [[workOrderLines]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WORK_ORDER_LINES: CollectionField<WorkOrders> = new CollectionField('WorkOrder_Lines', WorkOrders, new WorkOrderLineField('', WorkOrders));
  /**
   * Static representation of the one-to-one navigation property [[user]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER: OneToOneLink<WorkOrders, Users> = new OneToOneLink('User', WorkOrders, Users);
  /**
   * Static representation of the one-to-one navigation property [[businessPartner]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNER: OneToOneLink<WorkOrders, BusinessPartners> = new OneToOneLink('BusinessPartner', WorkOrders, BusinessPartners);
  /**
   * Static representation of the one-to-one navigation property [[chartOfAccount]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CHART_OF_ACCOUNT: OneToOneLink<WorkOrders, ChartOfAccounts> = new OneToOneLink('ChartOfAccount', WorkOrders, ChartOfAccounts);
  /**
   * Static representation of the one-to-one navigation property [[priceList]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRICE_LIST: OneToOneLink<WorkOrders, PriceLists> = new OneToOneLink('PriceList', WorkOrders, PriceLists);
  /**
   * All fields of the WorkOrders entity.
   */
  export const _allFields: Array<DateField<WorkOrders> | StringField<WorkOrders> | NumberField<WorkOrders> | CollectionField<WorkOrders> | OneToOneLink<WorkOrders, Users> | OneToOneLink<WorkOrders, BusinessPartners> | OneToOneLink<WorkOrders, ChartOfAccounts> | OneToOneLink<WorkOrders, PriceLists>> = [
    WorkOrders.ORDER_DATE,
    WorkOrders.WORK_START_DATE,
    WorkOrders.EXPECTED_COMPLETION_DATE,
    WorkOrders.WORK_FINISH_DATE,
    WorkOrders.RECEIVER_NAME,
    WorkOrders.ORDERER_CODE,
    WorkOrders.ORDERER_NAME,
    WorkOrders.CUSTOMER_REF_NO,
    WorkOrders.ORDER_TOTAL,
    WorkOrders.TOTAL_CURRENCY,
    WorkOrders.GENERATION_TIME,
    WorkOrders.COMMENT,
    WorkOrders.INSTRUCTION_NUMBER,
    WorkOrders.CONTACT_PERSON,
    WorkOrders.SERIES,
    WorkOrders.ACTIVE_ACCOUNT_CODE,
    WorkOrders.WORK_SUM,
    WorkOrders.JOURNAL_REMARKS,
    WorkOrders.PRICE_LIST_NUM,
    WorkOrders.FINANCIAL_PERIOD,
    WorkOrders.ORDER_NUM,
    WorkOrders.WORK_ORDER_LINES,
    WorkOrders.USER,
    WorkOrders.BUSINESS_PARTNER,
    WorkOrders.CHART_OF_ACCOUNT,
    WorkOrders.PRICE_LIST
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<WorkOrders> = new AllFields('*', WorkOrders);
  /**
   * All key fields of the WorkOrders entity.
   */
  export const _keyFields: Array<Field<WorkOrders>> = [WorkOrders.ORDER_NUM];
  /**
   * Mapping of all key field names to the respective static field property WorkOrders.
   */
  export const _keys: { [keys: string]: Field<WorkOrders> } = WorkOrders._keyFields.reduce((acc: { [keys: string]: Field<WorkOrders> }, field: Field<WorkOrders>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
