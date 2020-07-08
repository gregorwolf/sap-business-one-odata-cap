import { WorkOrdersRequestBuilder } from './WorkOrdersRequestBuilder';
import { Moment } from 'moment';
import { WorkOrderLine } from './WorkOrderLine';
import { AllFields, CollectionField, CustomField, DateField, Entity, EntityBuilderType, Field, NumberField, OneToOneLink, StringField } from '@sap-cloud-sdk/core/v4';
/**
 * This class represents the entity "WorkOrders" of service "SAPB1".
 */
export declare class WorkOrders extends Entity implements WorkOrdersType {
    /**
     * Technical entity name for WorkOrders.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for WorkOrders.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
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
    user: Users;
    /**
     * One-to-one navigation property to the [[BusinessPartners]] entity.
     */
    businessPartner: BusinessPartners;
    /**
     * One-to-one navigation property to the [[ChartOfAccounts]] entity.
     */
    chartOfAccount: ChartOfAccounts;
    /**
     * One-to-one navigation property to the [[PriceLists]] entity.
     */
    priceList: PriceLists;
    /**
     * Returns an entity builder to construct instances `WorkOrders`.
     * @returns A builder that constructs instances of entity type `WorkOrders`.
     */
    static builder(): EntityBuilderType<WorkOrders, WorkOrdersTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `WorkOrders` entity type.
     * @returns A `WorkOrders` request builder.
     */
    static requestBuilder(): WorkOrdersRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `WorkOrders`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `WorkOrders`.
     */
    static customField(fieldName: string): CustomField<WorkOrders>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
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
export declare namespace WorkOrders {
    /**
     * Static representation of the [[orderDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ORDER_DATE: DateField<WorkOrders>;
    /**
     * Static representation of the [[workStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WORK_START_DATE: DateField<WorkOrders>;
    /**
     * Static representation of the [[expectedCompletionDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXPECTED_COMPLETION_DATE: DateField<WorkOrders>;
    /**
     * Static representation of the [[workFinishDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WORK_FINISH_DATE: DateField<WorkOrders>;
    /**
     * Static representation of the [[receiverName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RECEIVER_NAME: StringField<WorkOrders>;
    /**
     * Static representation of the [[ordererCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ORDERER_CODE: StringField<WorkOrders>;
    /**
     * Static representation of the [[ordererName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ORDERER_NAME: StringField<WorkOrders>;
    /**
     * Static representation of the [[customerRefNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOMER_REF_NO: StringField<WorkOrders>;
    /**
     * Static representation of the [[orderTotal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ORDER_TOTAL: NumberField<WorkOrders>;
    /**
     * Static representation of the [[totalCurrency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TOTAL_CURRENCY: StringField<WorkOrders>;
    /**
     * Static representation of the [[generationTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GENERATION_TIME: NumberField<WorkOrders>;
    /**
     * Static representation of the [[comment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMMENT: StringField<WorkOrders>;
    /**
     * Static representation of the [[instructionNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INSTRUCTION_NUMBER: NumberField<WorkOrders>;
    /**
     * Static representation of the [[contactPerson]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONTACT_PERSON: NumberField<WorkOrders>;
    /**
     * Static representation of the [[series]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SERIES: NumberField<WorkOrders>;
    /**
     * Static representation of the [[activeAccountCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACTIVE_ACCOUNT_CODE: StringField<WorkOrders>;
    /**
     * Static representation of the [[workSum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WORK_SUM: NumberField<WorkOrders>;
    /**
     * Static representation of the [[journalRemarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOURNAL_REMARKS: StringField<WorkOrders>;
    /**
     * Static representation of the [[priceListNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRICE_LIST_NUM: NumberField<WorkOrders>;
    /**
     * Static representation of the [[financialPeriod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FINANCIAL_PERIOD: NumberField<WorkOrders>;
    /**
     * Static representation of the [[orderNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ORDER_NUM: NumberField<WorkOrders>;
    /**
     * Static representation of the [[workOrderLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WORK_ORDER_LINES: CollectionField<WorkOrders>;
    /**
     * Static representation of the one-to-one navigation property [[user]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER: OneToOneLink<WorkOrders, Users>;
    /**
     * Static representation of the one-to-one navigation property [[businessPartner]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNER: OneToOneLink<WorkOrders, BusinessPartners>;
    /**
     * Static representation of the one-to-one navigation property [[chartOfAccount]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CHART_OF_ACCOUNT: OneToOneLink<WorkOrders, ChartOfAccounts>;
    /**
     * Static representation of the one-to-one navigation property [[priceList]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRICE_LIST: OneToOneLink<WorkOrders, PriceLists>;
    /**
     * All fields of the WorkOrders entity.
     */
    const _allFields: Array<DateField<WorkOrders> | StringField<WorkOrders> | NumberField<WorkOrders> | CollectionField<WorkOrders> | OneToOneLink<WorkOrders, Users> | OneToOneLink<WorkOrders, BusinessPartners> | OneToOneLink<WorkOrders, ChartOfAccounts> | OneToOneLink<WorkOrders, PriceLists>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<WorkOrders>;
    /**
     * All key fields of the WorkOrders entity.
     */
    const _keyFields: Array<Field<WorkOrders>>;
    /**
     * Mapping of all key field names to the respective static field property WorkOrders.
     */
    const _keys: {
        [keys: string]: Field<WorkOrders>;
    };
}
//# sourceMappingURL=WorkOrders.d.ts.map