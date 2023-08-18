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
import { ServiceCallActivity } from './ServiceCallActivity';
import { ServiceCallInventoryExpense } from './ServiceCallInventoryExpense';
import { ServiceCallSolution } from './ServiceCallSolution';
import { ServiceCallScheduling } from './ServiceCallScheduling';
import { ServiceCallBpAddressComponent } from './ServiceCallBpAddressComponent';
import type { ServiceCallsApi } from './ServiceCallsApi';
import { BoSvcCallPriorities } from './BoSvcCallPriorities';
import { BoYesNoEnum } from './BoYesNoEnum';
import { BoDurations } from './BoDurations';
import { BoAddressType } from './BoAddressType';
import { ServiceTypeEnum } from './ServiceTypeEnum';
import { BusinessPartners, BusinessPartnersType } from './BusinessPartners';
import { ServiceContracts, ServiceContractsType } from './ServiceContracts';
import {
  ServiceCallOrigins,
  ServiceCallOriginsType
} from './ServiceCallOrigins';
import { Items, ItemsType } from './Items';
import { ItemGroups, ItemGroupsType } from './ItemGroups';
import { ServiceCallStatus, ServiceCallStatusType } from './ServiceCallStatus';
import { ServiceCallTypes, ServiceCallTypesType } from './ServiceCallTypes';
import {
  ServiceCallProblemTypes,
  ServiceCallProblemTypesType
} from './ServiceCallProblemTypes';
import { Users, UsersType } from './Users';
import { EmployeesInfo, EmployeesInfoType } from './EmployeesInfo';
import { Queue, QueueType } from './Queue';
import { ActivityLocations, ActivityLocationsType } from './ActivityLocations';
import { Countries, CountriesType } from './Countries';
import {
  ServiceCallProblemSubTypes,
  ServiceCallProblemSubTypesType
} from './ServiceCallProblemSubTypes';
import { Projects, ProjectsType } from './Projects';

/**
 * This class represents the entity "ServiceCalls" of service "SAPB1".
 */
export class ServiceCalls<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ServiceCallsType<T>
{
  /**
   * Technical entity name for ServiceCalls.
   */
  static _entityName = 'ServiceCalls';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the ServiceCalls entity
   */
  static _keys = ['ServiceCallID'];
  /**
   * Service Call Id.
   */
  serviceCallId!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Subject.
   * @nullable
   */
  subject?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Code.
   * @nullable
   */
  customerCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Name.
   * @nullable
   */
  customerName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Contact Code.
   * @nullable
   */
  contactCode?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Manufacturer Serial Num.
   * @nullable
   */
  manufacturerSerialNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Internal Serial Num.
   * @nullable
   */
  internalSerialNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Contract Id.
   * @nullable
   */
  contractId?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Contract End Date.
   * @nullable
   */
  contractEndDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Resolution Date.
   * @nullable
   */
  resolutionDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Resolution Time.
   * @nullable
   */
  resolutionTime?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  /**
   * Origin.
   * @nullable
   */
  origin?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Item Code.
   * @nullable
   */
  itemCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Description.
   * @nullable
   */
  itemDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Group Code.
   * @nullable
   */
  itemGroupCode?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Status.
   * @nullable
   */
  status?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Priority.
   * @nullable
   */
  priority?: BoSvcCallPriorities | null;
  /**
   * Call Type.
   * @nullable
   */
  callType?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Problem Type.
   * @nullable
   */
  problemType?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Assignee Code.
   * @nullable
   */
  assigneeCode?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Description.
   * @nullable
   */
  description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Technician Code.
   * @nullable
   */
  technicianCode?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Resolution.
   * @nullable
   */
  resolution?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Creation Date.
   * @nullable
   */
  creationDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Creation Time.
   * @nullable
   */
  creationTime?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  /**
   * Responder.
   * @nullable
   */
  responder?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Updated Time.
   * @nullable
   */
  updatedTime?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  /**
   * Belongs To A Queue.
   * @nullable
   */
  belongsToAQueue?: BoYesNoEnum | null;
  /**
   * Response By Time.
   * @nullable
   */
  responseByTime?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  /**
   * Response By Date.
   * @nullable
   */
  responseByDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Resolution On Date.
   * @nullable
   */
  resolutionOnDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Response On Time.
   * @nullable
   */
  responseOnTime?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  /**
   * Response On Date.
   * @nullable
   */
  responseOnDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Closing Time.
   * @nullable
   */
  closingTime?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  /**
   * Assigned Date.
   * @nullable
   */
  assignedDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Queue.
   * @nullable
   */
  queue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Response Assignee.
   * @nullable
   */
  responseAssignee?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Entitledfor Service.
   * @nullable
   */
  entitledforService?: BoYesNoEnum | null;
  /**
   * Resolution On Time.
   * @nullable
   */
  resolutionOnTime?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  /**
   * Assigned Time.
   * @nullable
   */
  assignedTime?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  /**
   * Closing Date.
   * @nullable
   */
  closingDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Series.
   * @nullable
   */
  series?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Doc Num.
   * @nullable
   */
  docNum?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Hand Written.
   * @nullable
   */
  handWritten?: BoYesNoEnum | null;
  /**
   * Period Indicator.
   * @nullable
   */
  periodIndicator?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Start Date.
   * @nullable
   */
  startDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Start Time.
   * @nullable
   */
  startTime?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  /**
   * End Due Date.
   * @nullable
   */
  endDueDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * End Time.
   * @nullable
   */
  endTime?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  /**
   * Duration.
   * @nullable
   */
  duration?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Duration Type.
   * @nullable
   */
  durationType?: BoDurations | null;
  /**
   * Reminder.
   * @nullable
   */
  reminder?: BoYesNoEnum | null;
  /**
   * Reminder Period.
   * @nullable
   */
  reminderPeriod?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Reminder Type.
   * @nullable
   */
  reminderType?: BoDurations | null;
  /**
   * Location.
   * @nullable
   */
  location?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Address Name.
   * @nullable
   */
  addressName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Type.
   * @nullable
   */
  addressType?: BoAddressType | null;
  /**
   * Street.
   * @nullable
   */
  street?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * City.
   * @nullable
   */
  city?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Room.
   * @nullable
   */
  room?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * State.
   * @nullable
   */
  state?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Country.
   * @nullable
   */
  country?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Display In Calendar.
   * @nullable
   */
  displayInCalendar?: BoYesNoEnum | null;
  /**
   * Customer Ref No.
   * @nullable
   */
  customerRefNo?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Problem Sub Type.
   * @nullable
   */
  problemSubType?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Attachment Entry.
   * @nullable
   */
  attachmentEntry?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Service Bp Type.
   * @nullable
   */
  serviceBpType?: ServiceTypeEnum | null;
  /**
   * Bp Contact Person.
   * @nullable
   */
  bpContactPerson?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bp Phone 1.
   * @nullable
   */
  bpPhone1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bp Phone 2.
   * @nullable
   */
  bpPhone2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bp Cellular.
   * @nullable
   */
  bpCellular?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bp Fax.
   * @nullable
   */
  bpFax?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * B Pe Mail.
   * @nullable
   */
  bPeMail?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bp Project Code.
   * @nullable
   */
  bpProjectCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bp Territory.
   * @nullable
   */
  bpTerritory?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Bp Ship To Code.
   * @nullable
   */
  bpShipToCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bp Ship To Address.
   * @nullable
   */
  bpShipToAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bp Bill To Code.
   * @nullable
   */
  bpBillToCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bp Bill To Address.
   * @nullable
   */
  bpBillToAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Telephone.
   * @nullable
   */
  telephone?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Update Date.
   * @nullable
   */
  updateDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Supplementary Code.
   * @nullable
   */
  supplementaryCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Service Call Activities.
   * @nullable
   */
  serviceCallActivities?: ServiceCallActivity<T>[] | null;
  /**
   * Service Call Inventory Expenses.
   * @nullable
   */
  serviceCallInventoryExpenses?: ServiceCallInventoryExpense<T>[] | null;
  /**
   * Service Call Solutions.
   * @nullable
   */
  serviceCallSolutions?: ServiceCallSolution<T>[] | null;
  /**
   * Service Call Schedulings.
   * @nullable
   */
  serviceCallSchedulings?: ServiceCallScheduling<T>[] | null;
  /**
   * Service Call Bp Address Components.
   * @nullable
   */
  serviceCallBpAddressComponents?: ServiceCallBpAddressComponent<T>[] | null;
  /**
   * One-to-one navigation property to the {@link BusinessPartners} entity.
   */
  businessPartner?: BusinessPartners<T> | null;
  /**
   * One-to-one navigation property to the {@link ServiceContracts} entity.
   */
  serviceContract?: ServiceContracts<T> | null;
  /**
   * One-to-one navigation property to the {@link ServiceCallOrigins} entity.
   */
  serviceCallOrigin?: ServiceCallOrigins<T> | null;
  /**
   * One-to-one navigation property to the {@link Items} entity.
   */
  item?: Items<T> | null;
  /**
   * One-to-one navigation property to the {@link ItemGroups} entity.
   */
  itemGroups?: ItemGroups<T> | null;
  /**
   * One-to-one navigation property to the {@link ServiceCallStatus} entity.
   */
  serviceCallStatus?: ServiceCallStatus<T> | null;
  /**
   * One-to-one navigation property to the {@link ServiceCallTypes} entity.
   */
  serviceCallType?: ServiceCallTypes<T> | null;
  /**
   * One-to-one navigation property to the {@link ServiceCallProblemTypes} entity.
   */
  serviceCallProblemType?: ServiceCallProblemTypes<T> | null;
  /**
   * One-to-one navigation property to the {@link Users} entity.
   */
  user?: Users<T> | null;
  /**
   * One-to-one navigation property to the {@link EmployeesInfo} entity.
   */
  employeeInfo?: EmployeesInfo<T> | null;
  /**
   * One-to-one navigation property to the {@link Queue} entity.
   */
  queue2?: Queue<T> | null;
  /**
   * One-to-one navigation property to the {@link ActivityLocations} entity.
   */
  activityLocation?: ActivityLocations<T> | null;
  /**
   * One-to-one navigation property to the {@link Countries} entity.
   */
  country2?: Countries<T> | null;
  /**
   * One-to-one navigation property to the {@link ServiceCallProblemSubTypes} entity.
   */
  serviceCallProblemSubType?: ServiceCallProblemSubTypes<T> | null;
  /**
   * One-to-one navigation property to the {@link Projects} entity.
   */
  project?: Projects<T> | null;

  constructor(readonly _entityApi: ServiceCallsApi<T>) {
    super(_entityApi);
  }
}

export interface ServiceCallsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  serviceCallId: DeserializedType<T, 'Edm.Int32'>;
  subject?: DeserializedType<T, 'Edm.String'> | null;
  customerCode?: DeserializedType<T, 'Edm.String'> | null;
  customerName?: DeserializedType<T, 'Edm.String'> | null;
  contactCode?: DeserializedType<T, 'Edm.Int32'> | null;
  manufacturerSerialNum?: DeserializedType<T, 'Edm.String'> | null;
  internalSerialNum?: DeserializedType<T, 'Edm.String'> | null;
  contractId?: DeserializedType<T, 'Edm.Int32'> | null;
  contractEndDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  resolutionDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  resolutionTime?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  origin?: DeserializedType<T, 'Edm.Int32'> | null;
  itemCode?: DeserializedType<T, 'Edm.String'> | null;
  itemDescription?: DeserializedType<T, 'Edm.String'> | null;
  itemGroupCode?: DeserializedType<T, 'Edm.Int32'> | null;
  status?: DeserializedType<T, 'Edm.Int32'> | null;
  priority?: BoSvcCallPriorities | null;
  callType?: DeserializedType<T, 'Edm.Int32'> | null;
  problemType?: DeserializedType<T, 'Edm.Int32'> | null;
  assigneeCode?: DeserializedType<T, 'Edm.Int32'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  technicianCode?: DeserializedType<T, 'Edm.Int32'> | null;
  resolution?: DeserializedType<T, 'Edm.String'> | null;
  creationDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  creationTime?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  responder?: DeserializedType<T, 'Edm.Int32'> | null;
  updatedTime?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  belongsToAQueue?: BoYesNoEnum | null;
  responseByTime?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  responseByDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  resolutionOnDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  responseOnTime?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  responseOnDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  closingTime?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  assignedDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  queue?: DeserializedType<T, 'Edm.String'> | null;
  responseAssignee?: DeserializedType<T, 'Edm.Int32'> | null;
  entitledforService?: BoYesNoEnum | null;
  resolutionOnTime?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  assignedTime?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  closingDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  series?: DeserializedType<T, 'Edm.Int32'> | null;
  docNum?: DeserializedType<T, 'Edm.Int32'> | null;
  handWritten?: BoYesNoEnum | null;
  periodIndicator?: DeserializedType<T, 'Edm.String'> | null;
  startDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  startTime?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  endDueDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  endTime?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  duration?: DeserializedType<T, 'Edm.Double'> | null;
  durationType?: BoDurations | null;
  reminder?: BoYesNoEnum | null;
  reminderPeriod?: DeserializedType<T, 'Edm.Double'> | null;
  reminderType?: BoDurations | null;
  location?: DeserializedType<T, 'Edm.Int32'> | null;
  addressName?: DeserializedType<T, 'Edm.String'> | null;
  addressType?: BoAddressType | null;
  street?: DeserializedType<T, 'Edm.String'> | null;
  city?: DeserializedType<T, 'Edm.String'> | null;
  room?: DeserializedType<T, 'Edm.String'> | null;
  state?: DeserializedType<T, 'Edm.String'> | null;
  country?: DeserializedType<T, 'Edm.String'> | null;
  displayInCalendar?: BoYesNoEnum | null;
  customerRefNo?: DeserializedType<T, 'Edm.String'> | null;
  problemSubType?: DeserializedType<T, 'Edm.Int32'> | null;
  attachmentEntry?: DeserializedType<T, 'Edm.Int32'> | null;
  serviceBpType?: ServiceTypeEnum | null;
  bpContactPerson?: DeserializedType<T, 'Edm.String'> | null;
  bpPhone1?: DeserializedType<T, 'Edm.String'> | null;
  bpPhone2?: DeserializedType<T, 'Edm.String'> | null;
  bpCellular?: DeserializedType<T, 'Edm.String'> | null;
  bpFax?: DeserializedType<T, 'Edm.String'> | null;
  bPeMail?: DeserializedType<T, 'Edm.String'> | null;
  bpProjectCode?: DeserializedType<T, 'Edm.String'> | null;
  bpTerritory?: DeserializedType<T, 'Edm.Int32'> | null;
  bpShipToCode?: DeserializedType<T, 'Edm.String'> | null;
  bpShipToAddress?: DeserializedType<T, 'Edm.String'> | null;
  bpBillToCode?: DeserializedType<T, 'Edm.String'> | null;
  bpBillToAddress?: DeserializedType<T, 'Edm.String'> | null;
  telephone?: DeserializedType<T, 'Edm.String'> | null;
  updateDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  supplementaryCode?: DeserializedType<T, 'Edm.String'> | null;
  serviceCallActivities?: ServiceCallActivity<T>[] | null;
  serviceCallInventoryExpenses?: ServiceCallInventoryExpense<T>[] | null;
  serviceCallSolutions?: ServiceCallSolution<T>[] | null;
  serviceCallSchedulings?: ServiceCallScheduling<T>[] | null;
  serviceCallBpAddressComponents?: ServiceCallBpAddressComponent<T>[] | null;
  businessPartner?: BusinessPartnersType<T> | null;
  serviceContract?: ServiceContractsType<T> | null;
  serviceCallOrigin?: ServiceCallOriginsType<T> | null;
  item?: ItemsType<T> | null;
  itemGroups?: ItemGroupsType<T> | null;
  serviceCallStatus?: ServiceCallStatusType<T> | null;
  serviceCallType?: ServiceCallTypesType<T> | null;
  serviceCallProblemType?: ServiceCallProblemTypesType<T> | null;
  user?: UsersType<T> | null;
  employeeInfo?: EmployeesInfoType<T> | null;
  queue2?: QueueType<T> | null;
  activityLocation?: ActivityLocationsType<T> | null;
  country2?: CountriesType<T> | null;
  serviceCallProblemSubType?: ServiceCallProblemSubTypesType<T> | null;
  project?: ProjectsType<T> | null;
}
