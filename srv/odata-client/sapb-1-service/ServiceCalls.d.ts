import { ServiceCallsRequestBuilder } from './ServiceCallsRequestBuilder';
import { Moment } from 'moment';
import { ServiceCallActivity } from './ServiceCallActivity';
import { ServiceCallInventoryExpense } from './ServiceCallInventoryExpense';
import { ServiceCallSolution } from './ServiceCallSolution';
import { ServiceCallScheduling } from './ServiceCallScheduling';
import { ServiceCallBpAddressComponent } from './ServiceCallBpAddressComponent';
import { AllFields, CollectionField, CustomField, DateField, Entity, EntityBuilderType, Field, NumberField, OneToOneLink, StringField, Time, TimeField } from '@sap-cloud-sdk/core/v4';
/**
 * This class represents the entity "ServiceCalls" of service "SAPB1".
 */
export declare class ServiceCalls extends Entity implements ServiceCallsType {
    /**
     * Technical entity name for ServiceCalls.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for ServiceCalls.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Service Call Id.
     * @nullable
     */
    serviceCallId?: number;
    /**
     * Subject.
     * @nullable
     */
    subject?: string;
    /**
     * Customer Code.
     * @nullable
     */
    customerCode?: string;
    /**
     * Customer Name.
     * @nullable
     */
    customerName?: string;
    /**
     * Contact Code.
     * @nullable
     */
    contactCode?: number;
    /**
     * Manufacturer Serial Num.
     * @nullable
     */
    manufacturerSerialNum?: string;
    /**
     * Internal Serial Num.
     * @nullable
     */
    internalSerialNum?: string;
    /**
     * Contract Id.
     * @nullable
     */
    contractId?: number;
    /**
     * Contract End Date.
     * @nullable
     */
    contractEndDate?: Moment;
    /**
     * Resolution Date.
     * @nullable
     */
    resolutionDate?: Moment;
    /**
     * Resolution Time.
     * @nullable
     */
    resolutionTime?: Time;
    /**
     * Origin.
     * @nullable
     */
    origin?: number;
    /**
     * Item Code.
     * @nullable
     */
    itemCode?: string;
    /**
     * Item Description.
     * @nullable
     */
    itemDescription?: string;
    /**
     * Item Group Code.
     * @nullable
     */
    itemGroupCode?: number;
    /**
     * Status.
     * @nullable
     */
    status?: number;
    /**
     * Call Type.
     * @nullable
     */
    callType?: number;
    /**
     * Problem Type.
     * @nullable
     */
    problemType?: number;
    /**
     * Assignee Code.
     * @nullable
     */
    assigneeCode?: number;
    /**
     * Description.
     * @nullable
     */
    description?: string;
    /**
     * Technician Code.
     * @nullable
     */
    technicianCode?: number;
    /**
     * Resolution.
     * @nullable
     */
    resolution?: string;
    /**
     * Creation Date.
     * @nullable
     */
    creationDate?: Moment;
    /**
     * Creation Time.
     * @nullable
     */
    creationTime?: Time;
    /**
     * Responder.
     * @nullable
     */
    responder?: number;
    /**
     * Updated Time.
     * @nullable
     */
    updatedTime?: Time;
    /**
     * Response By Time.
     * @nullable
     */
    responseByTime?: Time;
    /**
     * Response By Date.
     * @nullable
     */
    responseByDate?: Moment;
    /**
     * Resolution On Date.
     * @nullable
     */
    resolutionOnDate?: Moment;
    /**
     * Response On Time.
     * @nullable
     */
    responseOnTime?: Time;
    /**
     * Response On Date.
     * @nullable
     */
    responseOnDate?: Moment;
    /**
     * Closing Time.
     * @nullable
     */
    closingTime?: Time;
    /**
     * Assigned Date.
     * @nullable
     */
    assignedDate?: Moment;
    /**
     * Queue.
     * @nullable
     */
    queue?: string;
    /**
     * Response Assignee.
     * @nullable
     */
    responseAssignee?: number;
    /**
     * Resolution On Time.
     * @nullable
     */
    resolutionOnTime?: Time;
    /**
     * Assigned Time.
     * @nullable
     */
    assignedTime?: Time;
    /**
     * Closing Date.
     * @nullable
     */
    closingDate?: Moment;
    /**
     * Series.
     * @nullable
     */
    series?: number;
    /**
     * Doc Num.
     * @nullable
     */
    docNum?: number;
    /**
     * Period Indicator.
     * @nullable
     */
    periodIndicator?: string;
    /**
     * Start Date.
     * @nullable
     */
    startDate?: Moment;
    /**
     * Start Time.
     * @nullable
     */
    startTime?: Time;
    /**
     * End Due Date.
     * @nullable
     */
    endDueDate?: Moment;
    /**
     * End Time.
     * @nullable
     */
    endTime?: Time;
    /**
     * Duration.
     * @nullable
     */
    duration?: number;
    /**
     * Reminder Period.
     * @nullable
     */
    reminderPeriod?: number;
    /**
     * Location.
     * @nullable
     */
    location?: number;
    /**
     * Address Name.
     * @nullable
     */
    addressName?: string;
    /**
     * Street.
     * @nullable
     */
    street?: string;
    /**
     * City.
     * @nullable
     */
    city?: string;
    /**
     * Room.
     * @nullable
     */
    room?: string;
    /**
     * State.
     * @nullable
     */
    state?: string;
    /**
     * Country.
     * @nullable
     */
    country?: string;
    /**
     * Customer Ref No.
     * @nullable
     */
    customerRefNo?: string;
    /**
     * Problem Sub Type.
     * @nullable
     */
    problemSubType?: number;
    /**
     * Attachment Entry.
     * @nullable
     */
    attachmentEntry?: number;
    /**
     * Bp Contact Person.
     * @nullable
     */
    bpContactPerson?: string;
    /**
     * Bp Phone 1.
     * @nullable
     */
    bpPhone1?: string;
    /**
     * Bp Phone 2.
     * @nullable
     */
    bpPhone2?: string;
    /**
     * Bp Cellular.
     * @nullable
     */
    bpCellular?: string;
    /**
     * Bp Fax.
     * @nullable
     */
    bpFax?: string;
    /**
     * B Pe Mail.
     * @nullable
     */
    bPeMail?: string;
    /**
     * Bp Project Code.
     * @nullable
     */
    bpProjectCode?: string;
    /**
     * Bp Territory.
     * @nullable
     */
    bpTerritory?: number;
    /**
     * Bp Ship To Code.
     * @nullable
     */
    bpShipToCode?: string;
    /**
     * Bp Ship To Address.
     * @nullable
     */
    bpShipToAddress?: string;
    /**
     * Bp Bill To Code.
     * @nullable
     */
    bpBillToCode?: string;
    /**
     * Bp Bill To Address.
     * @nullable
     */
    bpBillToAddress?: string;
    /**
     * Telephone.
     * @nullable
     */
    telephone?: string;
    /**
     * Update Date.
     * @nullable
     */
    updateDate?: Moment;
    /**
     * Service Call Activities.
     * @nullable
     */
    serviceCallActivities?: ServiceCallActivity[];
    /**
     * Service Call Inventory Expenses.
     * @nullable
     */
    serviceCallInventoryExpenses?: ServiceCallInventoryExpense[];
    /**
     * Service Call Solutions.
     * @nullable
     */
    serviceCallSolutions?: ServiceCallSolution[];
    /**
     * Service Call Schedulings.
     * @nullable
     */
    serviceCallSchedulings?: ServiceCallScheduling[];
    /**
     * Service Call Bp Address Components.
     * @nullable
     */
    serviceCallBpAddressComponents?: ServiceCallBpAddressComponent[];
    /**
     * One-to-one navigation property to the [[BusinessPartners]] entity.
     */
    businessPartner: BusinessPartners;
    /**
     * One-to-one navigation property to the [[ServiceContracts]] entity.
     */
    serviceContract: ServiceContracts;
    /**
     * One-to-one navigation property to the [[ServiceCallOrigins]] entity.
     */
    serviceCallOrigin: ServiceCallOrigins;
    /**
     * One-to-one navigation property to the [[Items]] entity.
     */
    item: Items;
    /**
     * One-to-one navigation property to the [[ItemGroups]] entity.
     */
    itemGroups: ItemGroups;
    /**
     * One-to-one navigation property to the [[ServiceCallStatus]] entity.
     */
    serviceCallStatus: ServiceCallStatus;
    /**
     * One-to-one navigation property to the [[ServiceCallTypes]] entity.
     */
    serviceCallType: ServiceCallTypes;
    /**
     * One-to-one navigation property to the [[ServiceCallProblemTypes]] entity.
     */
    serviceCallProblemType: ServiceCallProblemTypes;
    /**
     * One-to-one navigation property to the [[Users]] entity.
     */
    user: Users;
    /**
     * One-to-one navigation property to the [[EmployeesInfo]] entity.
     */
    employeeInfo: EmployeesInfo;
    /**
     * One-to-one navigation property to the [[Queue]] entity.
     */
    queue2: Queue;
    /**
     * One-to-one navigation property to the [[ActivityLocations]] entity.
     */
    activityLocation: ActivityLocations;
    /**
     * One-to-one navigation property to the [[Countries]] entity.
     */
    country2: Countries;
    /**
     * One-to-one navigation property to the [[ServiceCallProblemSubTypes]] entity.
     */
    serviceCallProblemSubType: ServiceCallProblemSubTypes;
    /**
     * Returns an entity builder to construct instances `ServiceCalls`.
     * @returns A builder that constructs instances of entity type `ServiceCalls`.
     */
    static builder(): EntityBuilderType<ServiceCalls, ServiceCallsTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `ServiceCalls` entity type.
     * @returns A `ServiceCalls` request builder.
     */
    static requestBuilder(): ServiceCallsRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `ServiceCalls`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `ServiceCalls`.
     */
    static customField(fieldName: string): CustomField<ServiceCalls>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { BusinessPartners, BusinessPartnersType } from './BusinessPartners';
import { ServiceContracts, ServiceContractsType } from './ServiceContracts';
import { ServiceCallOrigins, ServiceCallOriginsType } from './ServiceCallOrigins';
import { Items, ItemsType } from './Items';
import { ItemGroups, ItemGroupsType } from './ItemGroups';
import { ServiceCallStatus, ServiceCallStatusType } from './ServiceCallStatus';
import { ServiceCallTypes, ServiceCallTypesType } from './ServiceCallTypes';
import { ServiceCallProblemTypes, ServiceCallProblemTypesType } from './ServiceCallProblemTypes';
import { Users, UsersType } from './Users';
import { EmployeesInfo, EmployeesInfoType } from './EmployeesInfo';
import { Queue, QueueType } from './Queue';
import { ActivityLocations, ActivityLocationsType } from './ActivityLocations';
import { Countries, CountriesType } from './Countries';
import { ServiceCallProblemSubTypes, ServiceCallProblemSubTypesType } from './ServiceCallProblemSubTypes';
export interface ServiceCallsType {
    serviceCallId?: number;
    subject?: string;
    customerCode?: string;
    customerName?: string;
    contactCode?: number;
    manufacturerSerialNum?: string;
    internalSerialNum?: string;
    contractId?: number;
    contractEndDate?: Moment;
    resolutionDate?: Moment;
    resolutionTime?: Time;
    origin?: number;
    itemCode?: string;
    itemDescription?: string;
    itemGroupCode?: number;
    status?: number;
    callType?: number;
    problemType?: number;
    assigneeCode?: number;
    description?: string;
    technicianCode?: number;
    resolution?: string;
    creationDate?: Moment;
    creationTime?: Time;
    responder?: number;
    updatedTime?: Time;
    responseByTime?: Time;
    responseByDate?: Moment;
    resolutionOnDate?: Moment;
    responseOnTime?: Time;
    responseOnDate?: Moment;
    closingTime?: Time;
    assignedDate?: Moment;
    queue?: string;
    responseAssignee?: number;
    resolutionOnTime?: Time;
    assignedTime?: Time;
    closingDate?: Moment;
    series?: number;
    docNum?: number;
    periodIndicator?: string;
    startDate?: Moment;
    startTime?: Time;
    endDueDate?: Moment;
    endTime?: Time;
    duration?: number;
    reminderPeriod?: number;
    location?: number;
    addressName?: string;
    street?: string;
    city?: string;
    room?: string;
    state?: string;
    country?: string;
    customerRefNo?: string;
    problemSubType?: number;
    attachmentEntry?: number;
    bpContactPerson?: string;
    bpPhone1?: string;
    bpPhone2?: string;
    bpCellular?: string;
    bpFax?: string;
    bPeMail?: string;
    bpProjectCode?: string;
    bpTerritory?: number;
    bpShipToCode?: string;
    bpShipToAddress?: string;
    bpBillToCode?: string;
    bpBillToAddress?: string;
    telephone?: string;
    updateDate?: Moment;
    serviceCallActivities?: ServiceCallActivity[];
    serviceCallInventoryExpenses?: ServiceCallInventoryExpense[];
    serviceCallSolutions?: ServiceCallSolution[];
    serviceCallSchedulings?: ServiceCallScheduling[];
    serviceCallBpAddressComponents?: ServiceCallBpAddressComponent[];
    businessPartner: BusinessPartnersType;
    serviceContract: ServiceContractsType;
    serviceCallOrigin: ServiceCallOriginsType;
    item: ItemsType;
    itemGroups: ItemGroupsType;
    serviceCallStatus: ServiceCallStatusType;
    serviceCallType: ServiceCallTypesType;
    serviceCallProblemType: ServiceCallProblemTypesType;
    user: UsersType;
    employeeInfo: EmployeesInfoType;
    queue2: QueueType;
    activityLocation: ActivityLocationsType;
    country2: CountriesType;
    serviceCallProblemSubType: ServiceCallProblemSubTypesType;
}
export interface ServiceCallsTypeForceMandatory {
    serviceCallId: number;
    subject: string;
    customerCode: string;
    customerName: string;
    contactCode: number;
    manufacturerSerialNum: string;
    internalSerialNum: string;
    contractId: number;
    contractEndDate: Moment;
    resolutionDate: Moment;
    resolutionTime: Time;
    origin: number;
    itemCode: string;
    itemDescription: string;
    itemGroupCode: number;
    status: number;
    callType: number;
    problemType: number;
    assigneeCode: number;
    description: string;
    technicianCode: number;
    resolution: string;
    creationDate: Moment;
    creationTime: Time;
    responder: number;
    updatedTime: Time;
    responseByTime: Time;
    responseByDate: Moment;
    resolutionOnDate: Moment;
    responseOnTime: Time;
    responseOnDate: Moment;
    closingTime: Time;
    assignedDate: Moment;
    queue: string;
    responseAssignee: number;
    resolutionOnTime: Time;
    assignedTime: Time;
    closingDate: Moment;
    series: number;
    docNum: number;
    periodIndicator: string;
    startDate: Moment;
    startTime: Time;
    endDueDate: Moment;
    endTime: Time;
    duration: number;
    reminderPeriod: number;
    location: number;
    addressName: string;
    street: string;
    city: string;
    room: string;
    state: string;
    country: string;
    customerRefNo: string;
    problemSubType: number;
    attachmentEntry: number;
    bpContactPerson: string;
    bpPhone1: string;
    bpPhone2: string;
    bpCellular: string;
    bpFax: string;
    bPeMail: string;
    bpProjectCode: string;
    bpTerritory: number;
    bpShipToCode: string;
    bpShipToAddress: string;
    bpBillToCode: string;
    bpBillToAddress: string;
    telephone: string;
    updateDate: Moment;
    serviceCallActivities: ServiceCallActivity[];
    serviceCallInventoryExpenses: ServiceCallInventoryExpense[];
    serviceCallSolutions: ServiceCallSolution[];
    serviceCallSchedulings: ServiceCallScheduling[];
    serviceCallBpAddressComponents: ServiceCallBpAddressComponent[];
    businessPartner: BusinessPartnersType;
    serviceContract: ServiceContractsType;
    serviceCallOrigin: ServiceCallOriginsType;
    item: ItemsType;
    itemGroups: ItemGroupsType;
    serviceCallStatus: ServiceCallStatusType;
    serviceCallType: ServiceCallTypesType;
    serviceCallProblemType: ServiceCallProblemTypesType;
    user: UsersType;
    employeeInfo: EmployeesInfoType;
    queue2: QueueType;
    activityLocation: ActivityLocationsType;
    country2: CountriesType;
    serviceCallProblemSubType: ServiceCallProblemSubTypesType;
}
export declare namespace ServiceCalls {
    /**
     * Static representation of the [[serviceCallId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SERVICE_CALL_ID: NumberField<ServiceCalls>;
    /**
     * Static representation of the [[subject]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUBJECT: StringField<ServiceCalls>;
    /**
     * Static representation of the [[customerCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOMER_CODE: StringField<ServiceCalls>;
    /**
     * Static representation of the [[customerName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOMER_NAME: StringField<ServiceCalls>;
    /**
     * Static representation of the [[contactCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONTACT_CODE: NumberField<ServiceCalls>;
    /**
     * Static representation of the [[manufacturerSerialNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MANUFACTURER_SERIAL_NUM: StringField<ServiceCalls>;
    /**
     * Static representation of the [[internalSerialNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INTERNAL_SERIAL_NUM: StringField<ServiceCalls>;
    /**
     * Static representation of the [[contractId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONTRACT_ID: NumberField<ServiceCalls>;
    /**
     * Static representation of the [[contractEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONTRACT_END_DATE: DateField<ServiceCalls>;
    /**
     * Static representation of the [[resolutionDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RESOLUTION_DATE: DateField<ServiceCalls>;
    /**
     * Static representation of the [[resolutionTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RESOLUTION_TIME: TimeField<ServiceCalls>;
    /**
     * Static representation of the [[origin]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ORIGIN: NumberField<ServiceCalls>;
    /**
     * Static representation of the [[itemCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITEM_CODE: StringField<ServiceCalls>;
    /**
     * Static representation of the [[itemDescription]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITEM_DESCRIPTION: StringField<ServiceCalls>;
    /**
     * Static representation of the [[itemGroupCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITEM_GROUP_CODE: NumberField<ServiceCalls>;
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS: NumberField<ServiceCalls>;
    /**
     * Static representation of the [[callType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CALL_TYPE: NumberField<ServiceCalls>;
    /**
     * Static representation of the [[problemType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROBLEM_TYPE: NumberField<ServiceCalls>;
    /**
     * Static representation of the [[assigneeCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ASSIGNEE_CODE: NumberField<ServiceCalls>;
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION: StringField<ServiceCalls>;
    /**
     * Static representation of the [[technicianCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TECHNICIAN_CODE: NumberField<ServiceCalls>;
    /**
     * Static representation of the [[resolution]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RESOLUTION: StringField<ServiceCalls>;
    /**
     * Static representation of the [[creationDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATION_DATE: DateField<ServiceCalls>;
    /**
     * Static representation of the [[creationTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATION_TIME: TimeField<ServiceCalls>;
    /**
     * Static representation of the [[responder]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RESPONDER: NumberField<ServiceCalls>;
    /**
     * Static representation of the [[updatedTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const UPDATED_TIME: TimeField<ServiceCalls>;
    /**
     * Static representation of the [[responseByTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RESPONSE_BY_TIME: TimeField<ServiceCalls>;
    /**
     * Static representation of the [[responseByDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RESPONSE_BY_DATE: DateField<ServiceCalls>;
    /**
     * Static representation of the [[resolutionOnDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RESOLUTION_ON_DATE: DateField<ServiceCalls>;
    /**
     * Static representation of the [[responseOnTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RESPONSE_ON_TIME: TimeField<ServiceCalls>;
    /**
     * Static representation of the [[responseOnDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RESPONSE_ON_DATE: DateField<ServiceCalls>;
    /**
     * Static representation of the [[closingTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CLOSING_TIME: TimeField<ServiceCalls>;
    /**
     * Static representation of the [[assignedDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ASSIGNED_DATE: DateField<ServiceCalls>;
    /**
     * Static representation of the [[queue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const QUEUE: StringField<ServiceCalls>;
    /**
     * Static representation of the [[responseAssignee]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RESPONSE_ASSIGNEE: NumberField<ServiceCalls>;
    /**
     * Static representation of the [[resolutionOnTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RESOLUTION_ON_TIME: TimeField<ServiceCalls>;
    /**
     * Static representation of the [[assignedTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ASSIGNED_TIME: TimeField<ServiceCalls>;
    /**
     * Static representation of the [[closingDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CLOSING_DATE: DateField<ServiceCalls>;
    /**
     * Static representation of the [[series]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SERIES: NumberField<ServiceCalls>;
    /**
     * Static representation of the [[docNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOC_NUM: NumberField<ServiceCalls>;
    /**
     * Static representation of the [[periodIndicator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PERIOD_INDICATOR: StringField<ServiceCalls>;
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const START_DATE: DateField<ServiceCalls>;
    /**
     * Static representation of the [[startTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const START_TIME: TimeField<ServiceCalls>;
    /**
     * Static representation of the [[endDueDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const END_DUE_DATE: DateField<ServiceCalls>;
    /**
     * Static representation of the [[endTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const END_TIME: TimeField<ServiceCalls>;
    /**
     * Static representation of the [[duration]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DURATION: NumberField<ServiceCalls>;
    /**
     * Static representation of the [[reminderPeriod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REMINDER_PERIOD: NumberField<ServiceCalls>;
    /**
     * Static representation of the [[location]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LOCATION: NumberField<ServiceCalls>;
    /**
     * Static representation of the [[addressName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDRESS_NAME: StringField<ServiceCalls>;
    /**
     * Static representation of the [[street]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STREET: StringField<ServiceCalls>;
    /**
     * Static representation of the [[city]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CITY: StringField<ServiceCalls>;
    /**
     * Static representation of the [[room]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ROOM: StringField<ServiceCalls>;
    /**
     * Static representation of the [[state]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATE: StringField<ServiceCalls>;
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTRY: StringField<ServiceCalls>;
    /**
     * Static representation of the [[customerRefNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOMER_REF_NO: StringField<ServiceCalls>;
    /**
     * Static representation of the [[problemSubType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROBLEM_SUB_TYPE: NumberField<ServiceCalls>;
    /**
     * Static representation of the [[attachmentEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ATTACHMENT_ENTRY: NumberField<ServiceCalls>;
    /**
     * Static representation of the [[bpContactPerson]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BP_CONTACT_PERSON: StringField<ServiceCalls>;
    /**
     * Static representation of the [[bpPhone1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BP_PHONE_1: StringField<ServiceCalls>;
    /**
     * Static representation of the [[bpPhone2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BP_PHONE_2: StringField<ServiceCalls>;
    /**
     * Static representation of the [[bpCellular]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BP_CELLULAR: StringField<ServiceCalls>;
    /**
     * Static representation of the [[bpFax]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BP_FAX: StringField<ServiceCalls>;
    /**
     * Static representation of the [[bPeMail]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const B_PE_MAIL: StringField<ServiceCalls>;
    /**
     * Static representation of the [[bpProjectCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BP_PROJECT_CODE: StringField<ServiceCalls>;
    /**
     * Static representation of the [[bpTerritory]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BP_TERRITORY: NumberField<ServiceCalls>;
    /**
     * Static representation of the [[bpShipToCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BP_SHIP_TO_CODE: StringField<ServiceCalls>;
    /**
     * Static representation of the [[bpShipToAddress]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BP_SHIP_TO_ADDRESS: StringField<ServiceCalls>;
    /**
     * Static representation of the [[bpBillToCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BP_BILL_TO_CODE: StringField<ServiceCalls>;
    /**
     * Static representation of the [[bpBillToAddress]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BP_BILL_TO_ADDRESS: StringField<ServiceCalls>;
    /**
     * Static representation of the [[telephone]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TELEPHONE: StringField<ServiceCalls>;
    /**
     * Static representation of the [[updateDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const UPDATE_DATE: DateField<ServiceCalls>;
    /**
     * Static representation of the [[serviceCallActivities]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SERVICE_CALL_ACTIVITIES: CollectionField<ServiceCalls>;
    /**
     * Static representation of the [[serviceCallInventoryExpenses]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SERVICE_CALL_INVENTORY_EXPENSES: CollectionField<ServiceCalls>;
    /**
     * Static representation of the [[serviceCallSolutions]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SERVICE_CALL_SOLUTIONS: CollectionField<ServiceCalls>;
    /**
     * Static representation of the [[serviceCallSchedulings]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SERVICE_CALL_SCHEDULINGS: CollectionField<ServiceCalls>;
    /**
     * Static representation of the [[serviceCallBpAddressComponents]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SERVICE_CALL_BP_ADDRESS_COMPONENTS: CollectionField<ServiceCalls>;
    /**
     * Static representation of the one-to-one navigation property [[businessPartner]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNER: OneToOneLink<ServiceCalls, BusinessPartners>;
    /**
     * Static representation of the one-to-one navigation property [[serviceContract]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SERVICE_CONTRACT: OneToOneLink<ServiceCalls, ServiceContracts>;
    /**
     * Static representation of the one-to-one navigation property [[serviceCallOrigin]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SERVICE_CALL_ORIGIN: OneToOneLink<ServiceCalls, ServiceCallOrigins>;
    /**
     * Static representation of the one-to-one navigation property [[item]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITEM: OneToOneLink<ServiceCalls, Items>;
    /**
     * Static representation of the one-to-one navigation property [[itemGroups]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITEM_GROUPS: OneToOneLink<ServiceCalls, ItemGroups>;
    /**
     * Static representation of the one-to-one navigation property [[serviceCallStatus]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SERVICE_CALL_STATUS: OneToOneLink<ServiceCalls, ServiceCallStatus>;
    /**
     * Static representation of the one-to-one navigation property [[serviceCallType]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SERVICE_CALL_TYPE: OneToOneLink<ServiceCalls, ServiceCallTypes>;
    /**
     * Static representation of the one-to-one navigation property [[serviceCallProblemType]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SERVICE_CALL_PROBLEM_TYPE: OneToOneLink<ServiceCalls, ServiceCallProblemTypes>;
    /**
     * Static representation of the one-to-one navigation property [[user]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER: OneToOneLink<ServiceCalls, Users>;
    /**
     * Static representation of the one-to-one navigation property [[employeeInfo]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMPLOYEE_INFO: OneToOneLink<ServiceCalls, EmployeesInfo>;
    /**
     * Static representation of the one-to-one navigation property [[queue2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const QUEUE_2: OneToOneLink<ServiceCalls, Queue>;
    /**
     * Static representation of the one-to-one navigation property [[activityLocation]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACTIVITY_LOCATION: OneToOneLink<ServiceCalls, ActivityLocations>;
    /**
     * Static representation of the one-to-one navigation property [[country2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTRY_2: OneToOneLink<ServiceCalls, Countries>;
    /**
     * Static representation of the one-to-one navigation property [[serviceCallProblemSubType]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SERVICE_CALL_PROBLEM_SUB_TYPE: OneToOneLink<ServiceCalls, ServiceCallProblemSubTypes>;
    /**
     * All fields of the ServiceCalls entity.
     */
    const _allFields: Array<NumberField<ServiceCalls> | StringField<ServiceCalls> | DateField<ServiceCalls> | TimeField<ServiceCalls> | CollectionField<ServiceCalls> | OneToOneLink<ServiceCalls, BusinessPartners> | OneToOneLink<ServiceCalls, ServiceContracts> | OneToOneLink<ServiceCalls, ServiceCallOrigins> | OneToOneLink<ServiceCalls, Items> | OneToOneLink<ServiceCalls, ItemGroups> | OneToOneLink<ServiceCalls, ServiceCallStatus> | OneToOneLink<ServiceCalls, ServiceCallTypes> | OneToOneLink<ServiceCalls, ServiceCallProblemTypes> | OneToOneLink<ServiceCalls, Users> | OneToOneLink<ServiceCalls, EmployeesInfo> | OneToOneLink<ServiceCalls, Queue> | OneToOneLink<ServiceCalls, ActivityLocations> | OneToOneLink<ServiceCalls, Countries> | OneToOneLink<ServiceCalls, ServiceCallProblemSubTypes>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<ServiceCalls>;
    /**
     * All key fields of the ServiceCalls entity.
     */
    const _keyFields: Array<Field<ServiceCalls>>;
    /**
     * Mapping of all key field names to the respective static field property ServiceCalls.
     */
    const _keys: {
        [keys: string]: Field<ServiceCalls>;
    };
}
//# sourceMappingURL=ServiceCalls.d.ts.map