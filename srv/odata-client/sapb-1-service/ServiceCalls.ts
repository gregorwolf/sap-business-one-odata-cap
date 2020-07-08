/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ServiceCallsRequestBuilder } from './ServiceCallsRequestBuilder';
import { Moment } from 'moment';
import { ServiceCallActivity, ServiceCallActivityField } from './ServiceCallActivity';
import { ServiceCallInventoryExpense, ServiceCallInventoryExpenseField } from './ServiceCallInventoryExpense';
import { ServiceCallSolution, ServiceCallSolutionField } from './ServiceCallSolution';
import { ServiceCallScheduling, ServiceCallSchedulingField } from './ServiceCallScheduling';
import { ServiceCallBpAddressComponent, ServiceCallBpAddressComponentField } from './ServiceCallBpAddressComponent';
import { AllFields, CollectionField, CustomField, DateField, Entity, EntityBuilderType, Field, NumberField, OneToOneLink, StringField, Time, TimeField } from '@sap-cloud-sdk/core/v4';

/**
 * This class represents the entity "ServiceCalls" of service "SAPB1".
 */
export class ServiceCalls extends Entity implements ServiceCallsType {
  /**
   * Technical entity name for ServiceCalls.
   */
  static _entityName = 'ServiceCalls';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for ServiceCalls.
   */
  static _serviceName = 'SAPB1';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
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
  businessPartner!: BusinessPartners;
  /**
   * One-to-one navigation property to the [[ServiceContracts]] entity.
   */
  serviceContract!: ServiceContracts;
  /**
   * One-to-one navigation property to the [[ServiceCallOrigins]] entity.
   */
  serviceCallOrigin!: ServiceCallOrigins;
  /**
   * One-to-one navigation property to the [[Items]] entity.
   */
  item!: Items;
  /**
   * One-to-one navigation property to the [[ItemGroups]] entity.
   */
  itemGroups!: ItemGroups;
  /**
   * One-to-one navigation property to the [[ServiceCallStatus]] entity.
   */
  serviceCallStatus!: ServiceCallStatus;
  /**
   * One-to-one navigation property to the [[ServiceCallTypes]] entity.
   */
  serviceCallType!: ServiceCallTypes;
  /**
   * One-to-one navigation property to the [[ServiceCallProblemTypes]] entity.
   */
  serviceCallProblemType!: ServiceCallProblemTypes;
  /**
   * One-to-one navigation property to the [[Users]] entity.
   */
  user!: Users;
  /**
   * One-to-one navigation property to the [[EmployeesInfo]] entity.
   */
  employeeInfo!: EmployeesInfo;
  /**
   * One-to-one navigation property to the [[Queue]] entity.
   */
  queue2!: Queue;
  /**
   * One-to-one navigation property to the [[ActivityLocations]] entity.
   */
  activityLocation!: ActivityLocations;
  /**
   * One-to-one navigation property to the [[Countries]] entity.
   */
  country2!: Countries;
  /**
   * One-to-one navigation property to the [[ServiceCallProblemSubTypes]] entity.
   */
  serviceCallProblemSubType!: ServiceCallProblemSubTypes;

  /**
   * Returns an entity builder to construct instances `ServiceCalls`.
   * @returns A builder that constructs instances of entity type `ServiceCalls`.
   */
  static builder(): EntityBuilderType<ServiceCalls, ServiceCallsTypeForceMandatory> {
    return Entity.entityBuilder(ServiceCalls);
  }

  /**
   * Returns a request builder to construct requests for operations on the `ServiceCalls` entity type.
   * @returns A `ServiceCalls` request builder.
   */
  static requestBuilder(): ServiceCallsRequestBuilder {
    return new ServiceCallsRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `ServiceCalls`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `ServiceCalls`.
   */
  static customField(fieldName: string): CustomField<ServiceCalls> {
    return Entity.customFieldSelector(fieldName, ServiceCalls);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
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

export namespace ServiceCalls {
  /**
   * Static representation of the [[serviceCallId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SERVICE_CALL_ID: NumberField<ServiceCalls> = new NumberField('ServiceCallID', ServiceCalls, 'Edm.Int32');
  /**
   * Static representation of the [[subject]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUBJECT: StringField<ServiceCalls> = new StringField('Subject', ServiceCalls, 'Edm.String');
  /**
   * Static representation of the [[customerCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOMER_CODE: StringField<ServiceCalls> = new StringField('CustomerCode', ServiceCalls, 'Edm.String');
  /**
   * Static representation of the [[customerName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOMER_NAME: StringField<ServiceCalls> = new StringField('CustomerName', ServiceCalls, 'Edm.String');
  /**
   * Static representation of the [[contactCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONTACT_CODE: NumberField<ServiceCalls> = new NumberField('ContactCode', ServiceCalls, 'Edm.Int32');
  /**
   * Static representation of the [[manufacturerSerialNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MANUFACTURER_SERIAL_NUM: StringField<ServiceCalls> = new StringField('ManufacturerSerialNum', ServiceCalls, 'Edm.String');
  /**
   * Static representation of the [[internalSerialNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INTERNAL_SERIAL_NUM: StringField<ServiceCalls> = new StringField('InternalSerialNum', ServiceCalls, 'Edm.String');
  /**
   * Static representation of the [[contractId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONTRACT_ID: NumberField<ServiceCalls> = new NumberField('ContractID', ServiceCalls, 'Edm.Int32');
  /**
   * Static representation of the [[contractEndDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONTRACT_END_DATE: DateField<ServiceCalls> = new DateField('ContractEndDate', ServiceCalls, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[resolutionDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RESOLUTION_DATE: DateField<ServiceCalls> = new DateField('ResolutionDate', ServiceCalls, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[resolutionTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RESOLUTION_TIME: TimeField<ServiceCalls> = new TimeField('ResolutionTime', ServiceCalls, 'Edm.TimeOfDay');
  /**
   * Static representation of the [[origin]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ORIGIN: NumberField<ServiceCalls> = new NumberField('Origin', ServiceCalls, 'Edm.Int32');
  /**
   * Static representation of the [[itemCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ITEM_CODE: StringField<ServiceCalls> = new StringField('ItemCode', ServiceCalls, 'Edm.String');
  /**
   * Static representation of the [[itemDescription]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ITEM_DESCRIPTION: StringField<ServiceCalls> = new StringField('ItemDescription', ServiceCalls, 'Edm.String');
  /**
   * Static representation of the [[itemGroupCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ITEM_GROUP_CODE: NumberField<ServiceCalls> = new NumberField('ItemGroupCode', ServiceCalls, 'Edm.Int32');
  /**
   * Static representation of the [[status]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS: NumberField<ServiceCalls> = new NumberField('Status', ServiceCalls, 'Edm.Int32');
  /**
   * Static representation of the [[callType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CALL_TYPE: NumberField<ServiceCalls> = new NumberField('CallType', ServiceCalls, 'Edm.Int32');
  /**
   * Static representation of the [[problemType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROBLEM_TYPE: NumberField<ServiceCalls> = new NumberField('ProblemType', ServiceCalls, 'Edm.Int32');
  /**
   * Static representation of the [[assigneeCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ASSIGNEE_CODE: NumberField<ServiceCalls> = new NumberField('AssigneeCode', ServiceCalls, 'Edm.Int32');
  /**
   * Static representation of the [[description]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION: StringField<ServiceCalls> = new StringField('Description', ServiceCalls, 'Edm.String');
  /**
   * Static representation of the [[technicianCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TECHNICIAN_CODE: NumberField<ServiceCalls> = new NumberField('TechnicianCode', ServiceCalls, 'Edm.Int32');
  /**
   * Static representation of the [[resolution]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RESOLUTION: StringField<ServiceCalls> = new StringField('Resolution', ServiceCalls, 'Edm.String');
  /**
   * Static representation of the [[creationDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATION_DATE: DateField<ServiceCalls> = new DateField('CreationDate', ServiceCalls, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[creationTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATION_TIME: TimeField<ServiceCalls> = new TimeField('CreationTime', ServiceCalls, 'Edm.TimeOfDay');
  /**
   * Static representation of the [[responder]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RESPONDER: NumberField<ServiceCalls> = new NumberField('Responder', ServiceCalls, 'Edm.Int32');
  /**
   * Static representation of the [[updatedTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const UPDATED_TIME: TimeField<ServiceCalls> = new TimeField('UpdatedTime', ServiceCalls, 'Edm.TimeOfDay');
  /**
   * Static representation of the [[responseByTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RESPONSE_BY_TIME: TimeField<ServiceCalls> = new TimeField('ResponseByTime', ServiceCalls, 'Edm.TimeOfDay');
  /**
   * Static representation of the [[responseByDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RESPONSE_BY_DATE: DateField<ServiceCalls> = new DateField('ResponseByDate', ServiceCalls, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[resolutionOnDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RESOLUTION_ON_DATE: DateField<ServiceCalls> = new DateField('ResolutionOnDate', ServiceCalls, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[responseOnTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RESPONSE_ON_TIME: TimeField<ServiceCalls> = new TimeField('ResponseOnTime', ServiceCalls, 'Edm.TimeOfDay');
  /**
   * Static representation of the [[responseOnDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RESPONSE_ON_DATE: DateField<ServiceCalls> = new DateField('ResponseOnDate', ServiceCalls, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[closingTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CLOSING_TIME: TimeField<ServiceCalls> = new TimeField('ClosingTime', ServiceCalls, 'Edm.TimeOfDay');
  /**
   * Static representation of the [[assignedDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ASSIGNED_DATE: DateField<ServiceCalls> = new DateField('AssignedDate', ServiceCalls, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[queue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const QUEUE: StringField<ServiceCalls> = new StringField('Queue', ServiceCalls, 'Edm.String');
  /**
   * Static representation of the [[responseAssignee]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RESPONSE_ASSIGNEE: NumberField<ServiceCalls> = new NumberField('ResponseAssignee', ServiceCalls, 'Edm.Int32');
  /**
   * Static representation of the [[resolutionOnTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RESOLUTION_ON_TIME: TimeField<ServiceCalls> = new TimeField('ResolutionOnTime', ServiceCalls, 'Edm.TimeOfDay');
  /**
   * Static representation of the [[assignedTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ASSIGNED_TIME: TimeField<ServiceCalls> = new TimeField('AssignedTime', ServiceCalls, 'Edm.TimeOfDay');
  /**
   * Static representation of the [[closingDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CLOSING_DATE: DateField<ServiceCalls> = new DateField('ClosingDate', ServiceCalls, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[series]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SERIES: NumberField<ServiceCalls> = new NumberField('Series', ServiceCalls, 'Edm.Int32');
  /**
   * Static representation of the [[docNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_NUM: NumberField<ServiceCalls> = new NumberField('DocNum', ServiceCalls, 'Edm.Int32');
  /**
   * Static representation of the [[periodIndicator]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PERIOD_INDICATOR: StringField<ServiceCalls> = new StringField('PeriodIndicator', ServiceCalls, 'Edm.String');
  /**
   * Static representation of the [[startDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_DATE: DateField<ServiceCalls> = new DateField('StartDate', ServiceCalls, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[startTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_TIME: TimeField<ServiceCalls> = new TimeField('StartTime', ServiceCalls, 'Edm.TimeOfDay');
  /**
   * Static representation of the [[endDueDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const END_DUE_DATE: DateField<ServiceCalls> = new DateField('EndDueDate', ServiceCalls, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[endTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const END_TIME: TimeField<ServiceCalls> = new TimeField('EndTime', ServiceCalls, 'Edm.TimeOfDay');
  /**
   * Static representation of the [[duration]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DURATION: NumberField<ServiceCalls> = new NumberField('Duration', ServiceCalls, 'Edm.Double');
  /**
   * Static representation of the [[reminderPeriod]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REMINDER_PERIOD: NumberField<ServiceCalls> = new NumberField('ReminderPeriod', ServiceCalls, 'Edm.Double');
  /**
   * Static representation of the [[location]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LOCATION: NumberField<ServiceCalls> = new NumberField('Location', ServiceCalls, 'Edm.Int32');
  /**
   * Static representation of the [[addressName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_NAME: StringField<ServiceCalls> = new StringField('AddressName', ServiceCalls, 'Edm.String');
  /**
   * Static representation of the [[street]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STREET: StringField<ServiceCalls> = new StringField('Street', ServiceCalls, 'Edm.String');
  /**
   * Static representation of the [[city]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CITY: StringField<ServiceCalls> = new StringField('City', ServiceCalls, 'Edm.String');
  /**
   * Static representation of the [[room]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ROOM: StringField<ServiceCalls> = new StringField('Room', ServiceCalls, 'Edm.String');
  /**
   * Static representation of the [[state]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATE: StringField<ServiceCalls> = new StringField('State', ServiceCalls, 'Edm.String');
  /**
   * Static representation of the [[country]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY: StringField<ServiceCalls> = new StringField('Country', ServiceCalls, 'Edm.String');
  /**
   * Static representation of the [[customerRefNo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOMER_REF_NO: StringField<ServiceCalls> = new StringField('CustomerRefNo', ServiceCalls, 'Edm.String');
  /**
   * Static representation of the [[problemSubType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROBLEM_SUB_TYPE: NumberField<ServiceCalls> = new NumberField('ProblemSubType', ServiceCalls, 'Edm.Int32');
  /**
   * Static representation of the [[attachmentEntry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ATTACHMENT_ENTRY: NumberField<ServiceCalls> = new NumberField('AttachmentEntry', ServiceCalls, 'Edm.Int32');
  /**
   * Static representation of the [[bpContactPerson]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_CONTACT_PERSON: StringField<ServiceCalls> = new StringField('BPContactPerson', ServiceCalls, 'Edm.String');
  /**
   * Static representation of the [[bpPhone1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_PHONE_1: StringField<ServiceCalls> = new StringField('BPPhone1', ServiceCalls, 'Edm.String');
  /**
   * Static representation of the [[bpPhone2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_PHONE_2: StringField<ServiceCalls> = new StringField('BPPhone2', ServiceCalls, 'Edm.String');
  /**
   * Static representation of the [[bpCellular]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_CELLULAR: StringField<ServiceCalls> = new StringField('BPCellular', ServiceCalls, 'Edm.String');
  /**
   * Static representation of the [[bpFax]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_FAX: StringField<ServiceCalls> = new StringField('BPFax', ServiceCalls, 'Edm.String');
  /**
   * Static representation of the [[bPeMail]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const B_PE_MAIL: StringField<ServiceCalls> = new StringField('BPeMail', ServiceCalls, 'Edm.String');
  /**
   * Static representation of the [[bpProjectCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_PROJECT_CODE: StringField<ServiceCalls> = new StringField('BPProjectCode', ServiceCalls, 'Edm.String');
  /**
   * Static representation of the [[bpTerritory]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_TERRITORY: NumberField<ServiceCalls> = new NumberField('BPTerritory', ServiceCalls, 'Edm.Int32');
  /**
   * Static representation of the [[bpShipToCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_SHIP_TO_CODE: StringField<ServiceCalls> = new StringField('BPShipToCode', ServiceCalls, 'Edm.String');
  /**
   * Static representation of the [[bpShipToAddress]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_SHIP_TO_ADDRESS: StringField<ServiceCalls> = new StringField('BPShipToAddress', ServiceCalls, 'Edm.String');
  /**
   * Static representation of the [[bpBillToCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_BILL_TO_CODE: StringField<ServiceCalls> = new StringField('BPBillToCode', ServiceCalls, 'Edm.String');
  /**
   * Static representation of the [[bpBillToAddress]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_BILL_TO_ADDRESS: StringField<ServiceCalls> = new StringField('BPBillToAddress', ServiceCalls, 'Edm.String');
  /**
   * Static representation of the [[telephone]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TELEPHONE: StringField<ServiceCalls> = new StringField('Telephone', ServiceCalls, 'Edm.String');
  /**
   * Static representation of the [[updateDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const UPDATE_DATE: DateField<ServiceCalls> = new DateField('UpdateDate', ServiceCalls, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[serviceCallActivities]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SERVICE_CALL_ACTIVITIES: CollectionField<ServiceCalls> = new CollectionField('ServiceCallActivities', ServiceCalls, new ServiceCallActivityField('', ServiceCalls));
  /**
   * Static representation of the [[serviceCallInventoryExpenses]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SERVICE_CALL_INVENTORY_EXPENSES: CollectionField<ServiceCalls> = new CollectionField('ServiceCallInventoryExpenses', ServiceCalls, new ServiceCallInventoryExpenseField('', ServiceCalls));
  /**
   * Static representation of the [[serviceCallSolutions]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SERVICE_CALL_SOLUTIONS: CollectionField<ServiceCalls> = new CollectionField('ServiceCallSolutions', ServiceCalls, new ServiceCallSolutionField('', ServiceCalls));
  /**
   * Static representation of the [[serviceCallSchedulings]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SERVICE_CALL_SCHEDULINGS: CollectionField<ServiceCalls> = new CollectionField('ServiceCallSchedulings', ServiceCalls, new ServiceCallSchedulingField('', ServiceCalls));
  /**
   * Static representation of the [[serviceCallBpAddressComponents]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SERVICE_CALL_BP_ADDRESS_COMPONENTS: CollectionField<ServiceCalls> = new CollectionField('ServiceCallBPAddressComponents', ServiceCalls, new ServiceCallBpAddressComponentField('', ServiceCalls));
  /**
   * Static representation of the one-to-one navigation property [[businessPartner]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNER: OneToOneLink<ServiceCalls, BusinessPartners> = new OneToOneLink('BusinessPartner', ServiceCalls, BusinessPartners);
  /**
   * Static representation of the one-to-one navigation property [[serviceContract]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SERVICE_CONTRACT: OneToOneLink<ServiceCalls, ServiceContracts> = new OneToOneLink('ServiceContract', ServiceCalls, ServiceContracts);
  /**
   * Static representation of the one-to-one navigation property [[serviceCallOrigin]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SERVICE_CALL_ORIGIN: OneToOneLink<ServiceCalls, ServiceCallOrigins> = new OneToOneLink('ServiceCallOrigin', ServiceCalls, ServiceCallOrigins);
  /**
   * Static representation of the one-to-one navigation property [[item]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ITEM: OneToOneLink<ServiceCalls, Items> = new OneToOneLink('Item', ServiceCalls, Items);
  /**
   * Static representation of the one-to-one navigation property [[itemGroups]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ITEM_GROUPS: OneToOneLink<ServiceCalls, ItemGroups> = new OneToOneLink('ItemGroups', ServiceCalls, ItemGroups);
  /**
   * Static representation of the one-to-one navigation property [[serviceCallStatus]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SERVICE_CALL_STATUS: OneToOneLink<ServiceCalls, ServiceCallStatus> = new OneToOneLink('ServiceCallStatus', ServiceCalls, ServiceCallStatus);
  /**
   * Static representation of the one-to-one navigation property [[serviceCallType]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SERVICE_CALL_TYPE: OneToOneLink<ServiceCalls, ServiceCallTypes> = new OneToOneLink('ServiceCallType', ServiceCalls, ServiceCallTypes);
  /**
   * Static representation of the one-to-one navigation property [[serviceCallProblemType]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SERVICE_CALL_PROBLEM_TYPE: OneToOneLink<ServiceCalls, ServiceCallProblemTypes> = new OneToOneLink('ServiceCallProblemType', ServiceCalls, ServiceCallProblemTypes);
  /**
   * Static representation of the one-to-one navigation property [[user]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER: OneToOneLink<ServiceCalls, Users> = new OneToOneLink('User', ServiceCalls, Users);
  /**
   * Static representation of the one-to-one navigation property [[employeeInfo]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMPLOYEE_INFO: OneToOneLink<ServiceCalls, EmployeesInfo> = new OneToOneLink('EmployeeInfo', ServiceCalls, EmployeesInfo);
  /**
   * Static representation of the one-to-one navigation property [[queue2]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const QUEUE_2: OneToOneLink<ServiceCalls, Queue> = new OneToOneLink('Queue2', ServiceCalls, Queue);
  /**
   * Static representation of the one-to-one navigation property [[activityLocation]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACTIVITY_LOCATION: OneToOneLink<ServiceCalls, ActivityLocations> = new OneToOneLink('ActivityLocation', ServiceCalls, ActivityLocations);
  /**
   * Static representation of the one-to-one navigation property [[country2]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY_2: OneToOneLink<ServiceCalls, Countries> = new OneToOneLink('Country2', ServiceCalls, Countries);
  /**
   * Static representation of the one-to-one navigation property [[serviceCallProblemSubType]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SERVICE_CALL_PROBLEM_SUB_TYPE: OneToOneLink<ServiceCalls, ServiceCallProblemSubTypes> = new OneToOneLink('ServiceCallProblemSubType', ServiceCalls, ServiceCallProblemSubTypes);
  /**
   * All fields of the ServiceCalls entity.
   */
  export const _allFields: Array<NumberField<ServiceCalls> | StringField<ServiceCalls> | DateField<ServiceCalls> | TimeField<ServiceCalls> | CollectionField<ServiceCalls> | OneToOneLink<ServiceCalls, BusinessPartners> | OneToOneLink<ServiceCalls, ServiceContracts> | OneToOneLink<ServiceCalls, ServiceCallOrigins> | OneToOneLink<ServiceCalls, Items> | OneToOneLink<ServiceCalls, ItemGroups> | OneToOneLink<ServiceCalls, ServiceCallStatus> | OneToOneLink<ServiceCalls, ServiceCallTypes> | OneToOneLink<ServiceCalls, ServiceCallProblemTypes> | OneToOneLink<ServiceCalls, Users> | OneToOneLink<ServiceCalls, EmployeesInfo> | OneToOneLink<ServiceCalls, Queue> | OneToOneLink<ServiceCalls, ActivityLocations> | OneToOneLink<ServiceCalls, Countries> | OneToOneLink<ServiceCalls, ServiceCallProblemSubTypes>> = [
    ServiceCalls.SERVICE_CALL_ID,
    ServiceCalls.SUBJECT,
    ServiceCalls.CUSTOMER_CODE,
    ServiceCalls.CUSTOMER_NAME,
    ServiceCalls.CONTACT_CODE,
    ServiceCalls.MANUFACTURER_SERIAL_NUM,
    ServiceCalls.INTERNAL_SERIAL_NUM,
    ServiceCalls.CONTRACT_ID,
    ServiceCalls.CONTRACT_END_DATE,
    ServiceCalls.RESOLUTION_DATE,
    ServiceCalls.RESOLUTION_TIME,
    ServiceCalls.ORIGIN,
    ServiceCalls.ITEM_CODE,
    ServiceCalls.ITEM_DESCRIPTION,
    ServiceCalls.ITEM_GROUP_CODE,
    ServiceCalls.STATUS,
    ServiceCalls.CALL_TYPE,
    ServiceCalls.PROBLEM_TYPE,
    ServiceCalls.ASSIGNEE_CODE,
    ServiceCalls.DESCRIPTION,
    ServiceCalls.TECHNICIAN_CODE,
    ServiceCalls.RESOLUTION,
    ServiceCalls.CREATION_DATE,
    ServiceCalls.CREATION_TIME,
    ServiceCalls.RESPONDER,
    ServiceCalls.UPDATED_TIME,
    ServiceCalls.RESPONSE_BY_TIME,
    ServiceCalls.RESPONSE_BY_DATE,
    ServiceCalls.RESOLUTION_ON_DATE,
    ServiceCalls.RESPONSE_ON_TIME,
    ServiceCalls.RESPONSE_ON_DATE,
    ServiceCalls.CLOSING_TIME,
    ServiceCalls.ASSIGNED_DATE,
    ServiceCalls.QUEUE,
    ServiceCalls.RESPONSE_ASSIGNEE,
    ServiceCalls.RESOLUTION_ON_TIME,
    ServiceCalls.ASSIGNED_TIME,
    ServiceCalls.CLOSING_DATE,
    ServiceCalls.SERIES,
    ServiceCalls.DOC_NUM,
    ServiceCalls.PERIOD_INDICATOR,
    ServiceCalls.START_DATE,
    ServiceCalls.START_TIME,
    ServiceCalls.END_DUE_DATE,
    ServiceCalls.END_TIME,
    ServiceCalls.DURATION,
    ServiceCalls.REMINDER_PERIOD,
    ServiceCalls.LOCATION,
    ServiceCalls.ADDRESS_NAME,
    ServiceCalls.STREET,
    ServiceCalls.CITY,
    ServiceCalls.ROOM,
    ServiceCalls.STATE,
    ServiceCalls.COUNTRY,
    ServiceCalls.CUSTOMER_REF_NO,
    ServiceCalls.PROBLEM_SUB_TYPE,
    ServiceCalls.ATTACHMENT_ENTRY,
    ServiceCalls.BP_CONTACT_PERSON,
    ServiceCalls.BP_PHONE_1,
    ServiceCalls.BP_PHONE_2,
    ServiceCalls.BP_CELLULAR,
    ServiceCalls.BP_FAX,
    ServiceCalls.B_PE_MAIL,
    ServiceCalls.BP_PROJECT_CODE,
    ServiceCalls.BP_TERRITORY,
    ServiceCalls.BP_SHIP_TO_CODE,
    ServiceCalls.BP_SHIP_TO_ADDRESS,
    ServiceCalls.BP_BILL_TO_CODE,
    ServiceCalls.BP_BILL_TO_ADDRESS,
    ServiceCalls.TELEPHONE,
    ServiceCalls.UPDATE_DATE,
    ServiceCalls.SERVICE_CALL_ACTIVITIES,
    ServiceCalls.SERVICE_CALL_INVENTORY_EXPENSES,
    ServiceCalls.SERVICE_CALL_SOLUTIONS,
    ServiceCalls.SERVICE_CALL_SCHEDULINGS,
    ServiceCalls.SERVICE_CALL_BP_ADDRESS_COMPONENTS,
    ServiceCalls.BUSINESS_PARTNER,
    ServiceCalls.SERVICE_CONTRACT,
    ServiceCalls.SERVICE_CALL_ORIGIN,
    ServiceCalls.ITEM,
    ServiceCalls.ITEM_GROUPS,
    ServiceCalls.SERVICE_CALL_STATUS,
    ServiceCalls.SERVICE_CALL_TYPE,
    ServiceCalls.SERVICE_CALL_PROBLEM_TYPE,
    ServiceCalls.USER,
    ServiceCalls.EMPLOYEE_INFO,
    ServiceCalls.QUEUE_2,
    ServiceCalls.ACTIVITY_LOCATION,
    ServiceCalls.COUNTRY_2,
    ServiceCalls.SERVICE_CALL_PROBLEM_SUB_TYPE
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<ServiceCalls> = new AllFields('*', ServiceCalls);
  /**
   * All key fields of the ServiceCalls entity.
   */
  export const _keyFields: Array<Field<ServiceCalls>> = [ServiceCalls.SERVICE_CALL_ID];
  /**
   * Mapping of all key field names to the respective static field property ServiceCalls.
   */
  export const _keys: { [keys: string]: Field<ServiceCalls> } = ServiceCalls._keyFields.reduce((acc: { [keys: string]: Field<ServiceCalls> }, field: Field<ServiceCalls>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
